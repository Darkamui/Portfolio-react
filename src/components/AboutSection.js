import React from "react";
import danny from "../img/n2.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function AboutSection() {
	return (
		<Intro>
			<h1>Qui Suis-Je ?</h1>
			<p className='pyou'>Développeur Full-Stack Junior</p>

			<div>
				<p className='movetop'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
					itaque!
				</p>
				<p className='movetop'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, enim.
				</p>
			</div>
			<IntroImg src={danny}></IntroImg>
		</Intro>
	);
}

const Intro = styled(motion.div)`
	padding: 2em;
	max-width: 750px;
	margin: 0 auto;
	@media (min-width: 700px) {
		padding: 5em 0;
		display: grid;

		grid-gap: 1em;
		grid-template-areas:
			"title img"
			"subtitle img"
			"text img";
		grid-template-columns: 1fr 350px;
		h1 {
			font-weight: normal;
			strong {
				display: block;
			}
		}
		.pyou {
			background: #16e0bd;
			align-self: start;
			grid-column: -1/1;
			grid-row: 2;
			text-align: left;
			position: relative;
			top: -3em;
			width: calc(100% + 5em) !important;
			left: 0em;
			padding-left: 1em;
			padding-right: calc(250px + 3em);
			font-size: 1.65rem;
			font-family: "Inconsolata", monospace;
		}
		.movetop {
			position: relative;
			top: -7em;
			margin-bottom: 10px;
		}
	}
`;

const IntroImg = styled(motion.img)`
	box-shadow: 1.25em 1.25em 0.75em rgba(0, 0, 0, 0.25),
		1.125em 1.125em 0.25em rgba(0, 0, 0, 0.25);
	@media (min-width: 700px) {
		grid-area: img;
		max-width: 300px;
		position: relative;
		left: 10em;
		z-index: 2;
	}
`;
