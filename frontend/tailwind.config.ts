module.exports = {
    theme: {
        extend: {
            keyframes: {
                l21: {
                    '100%': { 'background-position': 'left' },
                },
            },
            animation: {
                'loader-slide': 'l21 2s infinite linear',
            },
            aspectRatio: {
                '2/3': '2 / 3',
            },
        },
    },
    plugins: {
        require: 'tailwind-scrollbar-hide'
    },
};