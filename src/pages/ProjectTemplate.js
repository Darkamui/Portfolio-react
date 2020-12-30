import React from "react";
import coverLong from "../img/fancy.gif";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { Link } from "react-router-dom";

export default function ProjectTemplate() {
	return (
		<Main variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<motion.h2 variants={fade}>FANCY Hand Fans</motion.h2>
			<motion.div variants={lineAnim} className='line'></motion.div>
			<div className='container'>
				<div className='imge'>
					<div className='nani'>
						<motion.img variants={photoAnim} src={coverLong} alt='' />
					</div>
				</div>
				<Text className=''>
					<h4>Fully functional e-commerce app.</h4>
					<br />
					<h5>Key features : </h5>
					<br />
					<ul>
						<li>- Ability to create/delete/edit users</li>
						<li>- Ability to create/delete/edit products</li>
						<li>- Ability to create/delete/orders</li>
						<li>- Protected admin dashboard</li>
						<li>- User Authentication with JWT Token</li>
					</ul>
					<p></p>
					<a target='_blank' href='https://my-fhf-app.herokuapp.com'>
						Live Demo
					</a>
					<h5>Derrière les coulisses :</h5>

					<div className='icons-container'>
						<div class=''>
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
					</div>
				</Text>
			</div>
		</Main>
	);
}

const Main = styled(motion.div)`
	min-height: 80vh;
	overflow: hidden;
	padding: 0 5rem 1em 5em;
	font-family: "Inconsolata", monospace;
	.container {
		display: flex;
		.imge {
			width: 60%;
		}
		div {
			margin-right: 15px;
		}
	}
	h2 {
		padding: 1rem 0;
	}
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		object-fit: cover;
	}
	.icons-container {
		display: flex;
		justify-content: center;
	}
	.fab {
		font-size: 1.5em;
		padding: 1em 0.5em;
	}
	@media (max-width: 1500px) {
		.imge {
			width: 80%;
		}
	}
	@media (max-width: 1200px) {
		.container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.imge {
				width: 80%;
			}
			div {
				margin-right: 0;
			}
			.icons-container {
				flex-direction: column;
			}
		}
		padding: 0 0.5em;
	}
`;

const Text = styled(motion.div)`
	display: flex;
	flex-direction: column;
	h4 {
		font-size: 2.5em;
	}
	h5 {
		font-size: 2em;
		padding-left: 0.05em;
		text-align: center;
	}
	ul {
		list-style: none;
		li {
			font-size: 1.5em;
			padding: 0.5em 0.5em 0 0.5em;
			font-family: "Montserrat", sans-serif;
		}
	}
	p {
		font-size: 1.5em;
		padding: 0 0.5em;
	}
	a {
		padding: 1em;
		font-size: 2em;
		color: #23d997;
		text-decoration: none;
		font-weight: bold;
		text-align: center;
	}
	@media (max-width: 500px) {
		padding: 0;
		h4 {
			font-size: 1.25em;
		}
		h5 {
			font-size: 0.75em;
		}
		ul {
			li {
				font-size: 1.25em;
			}
		}

		p {
			font-size: 1em;
		}
	}

	@media (max-width: 1500px) {
		display: flex;
		flex-direction: column;

		h4 {
			font-size: 1.75em;
		}
		h5 {
			font-size: 1.25em;
		}
		li {
			font-size: 1em;
		}
		p {
			font-size: 1em;
		}
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		text-align: center;
		width: 80%;
		h4 {
			padding: 1em 0;
		}
	}
`;
