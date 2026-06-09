import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');

    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('shown'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    reveals.forEach(el => io.observe(el));

    function revealVisible(instant) {
      const vh = window.innerHeight || 800;
      reveals.forEach(el => {
        if (el.classList.contains('in') || el.classList.contains('shown')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95) {
          el.classList.add(instant ? 'shown' : 'in');
          io.unobserve(el);
        }
      });
    }

    revealVisible(true);
    setTimeout(() => revealVisible(false), 80);
    setTimeout(() => reveals.forEach(el => el.classList.add('shown')), 1600);
    window.addEventListener('load', () => revealVisible(false));

    return () => {
      reveals.forEach(el => io.unobserve(el));
    };
  }, []);
}

export function useScrollNavigation() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

export function useCardGlow() {
  useEffect(() => {
    function handleMove(e) {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('pointermove', handleMove));

    return () => {
      cards.forEach(card => card.removeEventListener('pointermove', handleMove));
    };
  }, []);
}
