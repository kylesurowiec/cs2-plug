import type { Config } from 'tailwindcss';

import daisyui from 'daisyui';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  daisyui: {
    logs: false,
    themes: ['dracula'],
  },
  plugins: [daisyui],
};
export default config;
