import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      "red-rock": "hsl(349, 71%, 52%)",
      "yellow-scissor" : "hsl(39, 89%, 49%)",
      "blue-paper": "hsl(230, 89%, 62%)",
      "dark-text": "hsl(229, 25%, 31%)",
      "text-score": "hsl(229, 64%, 46%)",
      "pale-sky": "#606e85",
      "buttons-bg": "#E7E7E8",
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 
        "radial-gradient(circle at 50% -50%, var(--tw-gradient-from),var(--tw-gradient-stops))",
        "paper-border-gradient":
          "linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))",
        "scissors-border-gradient":
          "linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))",
        "rock-border-gradient":
          "linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))",
      },
    },
  },
  plugins: [],
}
export default config
