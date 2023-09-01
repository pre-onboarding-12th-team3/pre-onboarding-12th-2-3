import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: (pageNumber: number) => void, pageNumber: number) => {
  const ref = useRef(null);

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      callback(pageNumber);
    }
  };

  useEffect(() => {
    const { current } = ref;

    if (!current) return;

    const observer = new IntersectionObserver(onIntersection);
    observer.observe(current);

    return () => {
      current && observer.unobserve(current);
    };
  }, [onIntersection]);

  return ref;
};

export default useIntersectionObserver;
