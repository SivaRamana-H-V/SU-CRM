// Helper function for class name conditionals
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };