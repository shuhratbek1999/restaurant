module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				Atyp: ['Atyp'],
				AtypBold: ['Atyp Bold'],
				AtypMed: ['Atyp-Medium'],
				AtypTB: ['Atyp-Text-Bold'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				xz: ['0.56rem', { lineHeight: '1' }],
				xy: ['0.5rem', { lineHeight: '1' }],
				xx: ['0.62rem', { lineHeight: '1.5' }],
				xs: ['0.75rem', { lineHeight: '1.5' }],
				sm: ['0.875rem', { lineHeight: '1.5715' }],
				base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
			},
			screens: {
				xs: '480px',
				xx: '360px',
				ll: '1600px',
				lx: '1024px',
			},
			borderWidth: {
				3: '3px',
				0.1: '1px',
				0.2: '0.5px',
			},
			minWidth: {
				36: '9rem',
			},
			height: {
				96: '22rem',
			},
			minHeight: {
				101: '44rem',
			},
			width: {
				130: '39.375rem',
				100: '65.625rem',
				101: '40rem',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			colors: {
				greys: '#F3F3F3',
			},
		},
	},
};
