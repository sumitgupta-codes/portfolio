import { useEffect, useRef, useState } from 'react'

/**
 * useIntersectionObserver
 *
 * Returns a [ref, isVisible] pair.
 * Attach `ref` to a DOM element; `isVisible` becomes true when that
 * element enters the viewport. Once visible, it stays visible.
 *
 * @param {object} options  - IntersectionObserver options
 * @param {string} options.threshold - How much of the element must be visible (0–1)
 * @param {string} options.rootMargin - Margin around the root
 */
export function useIntersectionObserver({
  threshold = 0.15,
  rootMargin = '0px',
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el) // fire once, then stop observing
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
