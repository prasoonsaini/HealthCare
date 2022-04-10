const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'hero-pattern': "url('https://i.pinimg.com/564x/c3/74/5c/c3745cc83a7317b0b8ed6975eeb6aac2.jpg')",
                'footer-texture': "url('https://i.pinimg.com/564x/c3/74/5c/c3745cc83a7317b0b8ed6975eeb6aac2.jpg')",
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
