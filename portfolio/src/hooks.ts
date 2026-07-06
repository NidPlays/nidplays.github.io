import { useEffect, useRef, useState } from 'react'

/** Cycles through `words` with a terminal-style type/delete animation. */
export function useTypewriter(words: string[], holdMs = 2200): string {
  const [text, setText] = useState(words[0])
  const reduceMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reduceMotion.current) return

    let wordIndex = 0
    let charIndex = words[0].length
    let deleting = true
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      if (deleting) {
        charIndex--
        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
      } else {
        charIndex++
        if (charIndex === words[wordIndex].length) {
          deleting = true
          setText(words[wordIndex])
          timer = setTimeout(tick, holdMs)
          return
        }
      }
      setText(words[wordIndex].slice(0, charIndex))
      timer = setTimeout(tick, deleting ? 45 : 85)
    }

    timer = setTimeout(tick, holdMs)
    return () => clearTimeout(timer)
  }, [words, holdMs])

  return text
}

/** Adds the `visible` class once the element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
