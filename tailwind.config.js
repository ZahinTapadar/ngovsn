/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'surface':         '#FFF8F8',
        'surface-dim':     '#E1D8D9',
        'surface-low':     '#FBF1F2',
        'surface-mid':     '#F5ECED',
        'surface-high':    '#EFE6E7',
        'surface-highest': '#E9E0E1',
        'ink':             '#1E1B1C',
        'ink-variant':     '#4C4640',
        'ink-subtle':      '#7D766F',
        'ink-faint':       '#CEC5BD',
        'sage':            '#426649',
        'sage-light':      '#C4EDC7',
        'sage-dim':        '#A8D0AC',
        'forest':          '#456551',
        'forest-light':    '#C7EBD1',
        'charcoal':        '#342F30',
        'on-charcoal':     '#F8EFEF',
      },
      maxWidth: {
        'site': '1280px',
      },
      boxShadow: {
        'card': '0 2px 20px 0 rgba(83,116,95,0.08)',
        'card-hover': '0 8px 32px 0 rgba(83,116,95,0.14)',
      },
    },
  },
  plugins: [],
};
