module.exports = {
  content: ["./index.html", "./payam.html", "./baru.html", "./haddon.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {

      screens: {
        xs: "360px",   // extra small phones
        sm: "640px",   // small devices (e.g. iPhone SE)
        md: "768px",   // medium devices (e.g. tablets)
        lg: "1024px",  // large devices (e.g. small laptops)
        xl: "1280px",  // extra large
        "2xl": "1536px" // full HD screens and above
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'scroll-reverse': 'scroll-reverse 40s linear infinite',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
