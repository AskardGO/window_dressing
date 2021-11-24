module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                'paper': '30rem'
            },
            height: {
                'paper': '42rem'
            },
            stroke: {
                'indigo': 'indigo'
            }
        },
        fontSize: {
            'tiny': '.4rem',
            'xxs': '0.7rem',
            'xs': '.75rem',
            's': '.8rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        maxHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'list': '36rem',
            'full': '100%',
        },
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'list': '16rem',
            'full': '100%',
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        }
    },

    variants: {
        extend: {},
        stroke: ['responsive', 'hover', 'focus']
    },
    plugins: [],
}
