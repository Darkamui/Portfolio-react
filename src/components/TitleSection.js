import React from "react";
import danny from "../img/n.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function TitleSection() {
	return (
		<Intro id='accueil'>
			<h1>
				Bonjour, Ici<strong>Daniel Jerusalmy</strong>
			</h1>
			<p>Développeur Full-Stack Junior</p>
			<IntroImg src={danny}></IntroImg>
		</Intro>
	);
}

const Intro = styled(motion.div)`
	position: relative;
	padding: 2em;
	p {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
		background: #16e0bd;
		text-align: center;

		font-size: 1.65rem;
		font-family: "Inconsolata", monospace;
	}
	min-height: 30vh;

	h1 {
		font-weight: normal;
		margin-bottom: 0.25em;
		strong {
			display: block;
		}
	}
	p {
	}

	@media (min-width: 700px) {
		display: grid;
		width: min-content;
		margin: 0 auto;
		grid-gap: 1em;
		grid-template-areas:
			"img title"
			"img subtitle";
		grid-template-columns: min-content max-content;
		p {
			display: initial;
			background: #16e0bd;
			align-self: start;
			grid-column: -1/1;
			grid-row: 2;
			text-align: right;
			position: relative;
			left: -1.5em;
			top: -1.5em;
			width: calc(100% + 1.6em);
			font-size: 1.65rem;
			font-family: "Inconsolata", monospace;
		}
	}
`;

const IntroImg = styled(motion.img)`
	@media (min-width: 700px) {
		grid-area: img;
		max-width: 350px;
		position: relative;
		z-index: 2;
	}
	box-shadow: 1.25em 1.25em 0.75em rgba(0, 0, 0, 0.25),
		1.125em 1.125em 0.25em rgba(0, 0, 0, 0.25);
`;
