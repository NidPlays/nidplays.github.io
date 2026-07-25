import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Reveals an element once it scrolls into view.
 *
 * The element is styled visible by default; the hidden state is only ever
 * applied here, at runtime. A headless render, a background tab or a JS
 * failure therefore ships the section readable rather than blank.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return

    el.classList.add('is-armed')

    // let the armed state paint before observing, so an element already on
    // screen animates in rather than snapping
    let observer: IntersectionObserver | undefined
    const frame = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.remove('is-armed')
            entry.target.classList.add('is-in')
            obs.unobserve(entry.target)
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
      )
      observer.observe(el)
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [])

  return ref
}

/** True once the page has scrolled past `offset` — drives the nav background. */
export function useScrolled(offset = 40): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/** The id of the section currently occupying the reading band of the viewport. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // keep document order so overlapping sections resolve predictably
        setActive(ids.find((id) => visible.has(id)) ?? '')
      },
      { rootMargin: '-25% 0px -55% 0px' },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
