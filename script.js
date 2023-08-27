gsap.fromTo('.comming-soon',
  { 
    opacity: 1 
  },
  {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  }
);

gsap.fromTo('.loading-page',
  { 
    opacity: 0 
  },
  {
    opacity: 1,
    duration: 1.5,
    delay: 2,
  }
);

gsap.fromTo('.logo-name', 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  }
);