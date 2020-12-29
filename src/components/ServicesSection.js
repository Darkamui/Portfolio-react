import React from "react";
import covery from "../img/services2.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function ServicesSection() {
	return (
		<MyServices id='connaissances'>
			<h2>Mes Connaissances</h2>
			<Services>
				<Service>
					<h3>Front-End</h3>
					<div>
						<i class='fab fa-react'> React</i>
					</div>
					<div>
						<i class='fab fa-html5'> HTML5</i>
					</div>
					<div>
						<i class='fab fa-css3-alt'> CSS3</i>
					</div>
					<div>
						<i class='fab fa-js-square'> JavaScript</i>
					</div>
					<div>
						<i class='fab fa-sass'> SASS</i>
					</div>
				</Service>

				<Service>
					<h3>Back-End</h3>
					<div>
						<i class='fab fa-node-js'> Node JS</i>
					</div>
					<div>
						<i class='fab fa-envira'> MongoDB</i>
					</div>
					<div>
						<i class='fas fab fa-database'> SQL</i>
					</div>
				</Service>

				<Service>
					<h3>En Apprentissage</h3>
					<div>
						<i class='fab fa-vuejs'> Vue.JS</i>
					</div>
					<div>
						<i class='fab fa-angular'> Angular</i>
					</div>
				</Service>
			</Services>
		</MyServices>
	);
}

const MyServices = styled(motion.div)`
	min-height: 57vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${covery});
	background-size: cover;
	color: #fff;
	text-align: center;
	padding: 4em 2em;
	h2 {
		color: #16e0bd;
		position: relative;
	}
	h2::after {
		content: "";
		display: block;
		width: 25%;
		height: 1px;
		margin: 0.5em auto 1em;
		background: #fff;
	}
`;

const Services = styled(motion.div)`
	h3 {
		padding-bottom: 0.5em;
	}
	h3::after {
		content: "";
		display: block;
		width: 25%;
		height: 1px;
		margin: 0.5em auto 1em;
		background: #16e0bd;
	}
	@media (min-width: 700px) {
		display: flex;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		h3 {
			font-size: 2rem;
		}
		h3::after {
			content: "";
			display: block;
			width: 55%;
			height: 1px;
			margin: 0.5em auto 1em;
			background: #16e0bd;
		}
		.service + .service {
			margin-left: 2em;
		}
	}
`;

const Service = styled(motion.div)`
	max-width: 500px;
	margin: 0 auto;
	padding: 1em 0;
	.fab {
		font-size: 1.5em;
	}
	div + div {
		margin-top: 15px;
	}
	@media (min-width: 700px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		flex-wrap: nowrap;
		.fab {
			font-size: 3em;
		}
		div + div {
			margin-top: 15px;
		}
		p {
			margin-top: 15px;
			font-size: 1.5em;
		}
	}
`;
