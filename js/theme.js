// Compartido entre páginas: oscuro por defecto; claro con html.light.
(() => {
    const root = document.documentElement;

    try {
        root.classList.toggle('light', localStorage.getItem('apex-theme') === 'light');
    } catch {
        // El cambio de tema también funciona si el almacenamiento está bloqueado.
    }

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('theme-toggle');
        if (!button) return;

        const updateButton = () => {
            const isLight = root.classList.contains('light');
            button.textContent = isLight ? '🌙' : '☀️';
            button.setAttribute('aria-label', isLight ? 'Activar modo oscuro' : 'Activar modo claro');
            button.setAttribute('aria-pressed', String(isLight));
        };

        updateButton();
        button.addEventListener('click', () => {
            const isLight = root.classList.toggle('light');
            try {
                localStorage.setItem('apex-theme', isLight ? 'light' : 'dark');
            } catch {
                // Conserva el cambio visual aunque no se pueda guardar.
            }
            updateButton();
        });
    });
})();
