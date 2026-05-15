document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'light') {
        document.body.setAttribute('data-theme', 'light');
        if(themeToggle) themeToggle.textContent = '[Dark Mode]';
    } else {
        // default to dark
        document.body.setAttribute('data-theme', 'dark');
        if(themeToggle) themeToggle.textContent = '[Light Mode]';
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            if (theme == 'dark') {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '[Dark Mode]';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '[Light Mode]';
            }
        });
    }
});
