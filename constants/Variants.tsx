export const ENTRANCE_VARIANTS = {
  hiddenLeft: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
      repeat: 0,
      staggerChildren: 0.2,
    },
  },
  hiddenRight: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1,
      repeat: 0,
      staggerChildren: 0.2,
    },
  },
  hiddenDown: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      repeat: 0,
      staggerChildren: 0.2,
    },
  },
  hiddenUp: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      repeat: 0,
      staggerChildren: 0.2,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      repeat: 0,
      staggerChildren: 0.2,
    },
  },
};
