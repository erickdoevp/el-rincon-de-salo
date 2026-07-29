import { onBeforeUnmount, onMounted } from 'vue';

/**
 * Revela con un fundido suave los elementos marcados con `data-reveal`
 * cuando entran en el viewport. Un único IntersectionObserver para toda
 * la página. El CSS ya deja todo visible si el usuario prefiere menos
 * movimiento, así que aquí no hace falta condicionar nada extra.
 */
export function useScrollReveal() {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const objetivos = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      objetivos.forEach((el) => el.classList.add('reveal-in'));
      return;
    }

    observer = new IntersectionObserver(
      (entradas, obs) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('reveal-in');
            obs.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    objetivos.forEach((el) => observer?.observe(el));
  });

  onBeforeUnmount(() => observer?.disconnect());
}
