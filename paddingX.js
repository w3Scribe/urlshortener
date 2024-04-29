import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addUtilities }) {
  const paddingX = {
    '.paddingX': {
      paddingInline: '1.25rem',
      '@screen sm': {
        paddingInline: '1.875rem',
      },
      '@screen md': {
        paddingInline: '2.5rem',
      },
      '@screen lg': {
        paddingInline: '2.8125rem',
      },
      '@screen xl': {
        paddingInline: '3.125rem',
      },
      '@screen 2xl': {
        paddingInline: '3.4375rem',
      },
    },
  };

  const variants = {
    dark: true,
    hover: true,
    focus: true,
    active: true,
    checked: true,
    disabled: true,
    groupHover: true,
    focusWithin: true,
    responsive: true,
    respectPrefix: true,
    respectImportant: true,
  };

  addUtilities(paddingX, variants);
});
