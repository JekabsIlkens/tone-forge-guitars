/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.js',
    ],
    theme: {
        colors:
        {
            'white': '#ffffff',
            'gray': '#4b5563',
            'light_gray': '#c9ccd0',
            'black': '#000000',

            'base_dark': '#0d1117',
            'base_light': '#f1f3f8',
            'base_primary': '#5075b4',
            'base_secondary': '#94acd6',
            'base_accent': '#7597d1',

            'dark': {
                50: '#090c10',
                100: '#121821',
                200: '#253041',
                300: '#374862',
                400: '#496083',
                500: '#5c78a3',
                600: '#7c93b6',
                700: '#9daec8',
                800: '#bec9da',
                900: '#dee4ed',
                950: '#eff2f6',
            },

            'light': {
                50: '#090b11',
                100: '#111622',
                200: '#222c44',
                300: '#334266',
                400: '#445788',
                500: '#556daa',
                600: '#778abb',
                700: '#99a8cc',
                800: '#bbc5dd',
                900: '#dde2ee',
                950: '#eef0f6',
            },

            'primary': {
                50: '#080b12',
                100: '#0f1724',
                200: '#1f2e47',
                300: '#2e446b',
                400: '#3d5b8f',
                500: '#4d72b3',
                600: '#708ec2',
                700: '#94aad1',
                800: '#b8c7e0',
                900: '#dbe3f0',
                950: '#edf1f7',
            },

            'secondary': {
                50: '#070b12',
                100: '#0e1625',
                200: '#1c2d4a',
                300: '#2a436f',
                400: '#385a94',
                500: '#4670b9',
                600: '#6b8dc7',
                700: '#90a9d5',
                800: '#b5c6e3',
                900: '#dae2f1',
                950: '#edf1f8',
            },

            'accent': {
                50: '#060b13',
                100: '#0d1626',
                200: '#192c4d',
                300: '#264273',
                400: '#335899',
                500: '#406fbf',
                600: '#668bcc',
                700: '#8ca8d9',
                800: '#b3c5e6',
                900: '#d9e2f2',
                950: '#ecf1f9',
            },

            'warning': {
                50: '#100a0b',
                100: '#1f1415',
                200: '#3e282a',
                300: '#5d3c40',
                400: '#7c5055',
                500: '#9c636a',
                600: '#af8388',
                700: '#c3a2a6',
                800: '#d7c1c3',
                900: '#ebe0e1',
                950: '#f5eff0',
            },
        },
        extend: {
            backgroundImage: {
                'Acoustic': "url('/images/acoustic.jpg')",
                'Electric': "url('/images/electric.jpg')",
                'Bass': "url('/images/bass.jpg')",
                
                'Acoustic_active': "url('/images/acoustic_active.jpg')",
                'Electric_active': "url('/images/electric_active.jpg')",
                'Bass_active': "url('/images/bass_active.jpg')",
            },
        },
    },
    plugins: [],
};
