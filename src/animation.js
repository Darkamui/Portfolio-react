export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 1,
		},
	},
};

export const fade = {
	hidden: {
		opacity: 0,
		x: 100,
		transition: {
			duration: 0.5,
		},
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const fadeReverse = {
	hidden: {
		opacity: 0,
		x: -100,
		transition: {
			duration: 0.5,
		},
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};
