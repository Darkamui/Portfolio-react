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
			when: "beforeChildren",
			staggerChildren: 0.5,
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
			duration: 1,
		},
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

export const photoAnim = {
	hidden: {
		opacity: 0,
		scale: 1.5,
		transition: {
			duration: 1,
		},
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
};

export const lineAnim = {
	hidden: {
		width: "0%",
	},
	show: {
		width: "100%",
		transition: {
			duration: 1,
		},
	},
};
