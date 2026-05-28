/**
 * useInView — Simple hook to detect when element enters viewport and add animation class.
 * Works with CSS animations, no external library needed.
 */
function useInView(options = {}) {
  const ref = React.useRef(null);
  const { threshold = 0.1, rootMargin = "-100px" } = options;

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        observer.unobserve(el);
      }
    }, { threshold, rootMargin });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

window.useInView = useInView;
