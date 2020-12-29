import React from "react";
import coverLong from "../img/projecttemp.png";
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
					<Link>
						<div className='nani'>
							<motion.img variants={photoAnim} src={coverLong} alt='' />
						</div>
					</Link>
				</div>
				<Text className='imge'>
					<h4>Fully functional e-commerce app.</h4>
					<br />
					<h5>Key features : </h5>
					<br />
					<br />
					<ul>
						<li>Ability to create/delete/edit users</li>
						<li>Ability to create/delete/edit products</li>
						<li>User Authentication with JWT Token</li>
					</ul>
					<p>
						<br />
						<br />
						<br />
					</p>
					<p>
						<strong>Derrière les coulisses:</strong> React, Mongodb, Nodejs
					</p>
				</Text>
			</div>
		</Main>
	);
}

const Main = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 0 5rem;
	font-family: "Inconsolata", monospace;
	.container {
		display: flex;
		.imge {
			width: 50%;
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
`;

const Text = styled(motion.div)`
	h4 {
		font-size: 2.5em;
	}
	h5 {
		font-size: 2em;
		padding-left: 0.05em;
	}
	ul {
		list-style: none;
		li {
			font-size: 1.5em;
			padding: 0.5em 0.5em 0 0.5em;
		}
	}
	p {
		font-size: 1.5em;
		padding: 0 0.5em;
	}
`;
