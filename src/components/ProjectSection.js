import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import fansDesktop from "../img/fans-desktop.png";
import fansMobile from "../img/fans-mobile.png";
import igniteDesktop from "../img/ignite-desktop.png";
import igniteMobile from "../img/ignite-mobile.png";
import jerusalmyDesktop from "../img/jerusalmy-desktop.png";
import jerusalmyMobile from "../img/jerusalmy-mobile.png";

import { useScroll } from "./useScroll";
import { fade } from "../animation";
import { Link } from "react-router-dom";

export default function ProjectSection() {
	const [element, controls] = useScroll();
	return (
		<Projects
			id='projets'
			variants={fade}
			animate={controls}
			initial='hidden'
			ref={element}>
			<h2>Mes Projets</h2>
			<Portfolio>
				<Link to='/fans'>
					<PortfolioItem>
						<h6>FANCY Hand Fans</h6>
						<div class='image-stack'>
							<div class='image-stack__item image-stack__item--top'>
								<img
									src={fansMobile}
									className='portofolio-img'
									alt='A portrait of a girl under hanging flowers.'
								/>
							</div>
							<div class='image-stack__item image-stack__item--bottom'>
								<img src={fansDesktop} className='portofolio-img' alt='' />
							</div>
						</div>
					</PortfolioItem>
				</Link>
				<Link to='/jerusalmy'>
					<PortfolioItem>
						<h6>Raphaël Jerusalmy</h6>
						<div class='image-stack'>
							<div class='image-stack__item image-stack__item--top'>
								<img
									src={jerusalmyMobile}
									alt='A portrait of a girl under hanging flowers.'
								/>
							</div>
							<div class='image-stack__item image-stack__item--bottom'>
								<img src={jerusalmyDesktop} alt='' />
							</div>
						</div>
					</PortfolioItem>
				</Link>
				<Link to='/work'>
					<PortfolioItem>
						<h6>RAWG API Game Library</h6>
						<div class='image-stack'>
							<div class='image-stack__item image-stack__item--top'>
								<img
									src={igniteMobile}
									alt='A portrait of a girl under hanging flowers.'
								/>
							</div>
							<div class='image-stack__item image-stack__item--bottom'>
								<img src={igniteDesktop} alt='' />
							</div>
						</div>
					</PortfolioItem>
				</Link>
				<a href='/' className='portfolio-item'>
					<div class='image-stack'>
						<div class='image-stack__item image-stack__item--top'>
							<img
								src={fansMobile}
								alt='A portrait of a girl under hanging flowers.'
							/>
						</div>
						<div class='image-stack__item image-stack__item--bottom'>
							<img src={fansDesktop} alt='' />
						</div>
					</div>
				</a>
				<a href='/' className='portfolio-item'>
					<div class='image-stack'>
						<div class='image-stack__item image-stack__item--top'>
							<img
								src={fansMobile}
								className='portofolio-img'
								alt='A portrait of a girl under hanging flowers.'
							/>
						</div>
						<div class='image-stack__item image-stack__item--bottom'>
							<img src={fansDesktop} className='portofolio-img' alt='' />
						</div>
					</div>
				</a>
				<a href='/' className='portfolio-item'>
					<div class='image-stack'>
						<div class='image-stack__item image-stack__item--top'>
							<img
								src={fansMobile}
								alt='A portrait of a girl under hanging flowers.'
							/>
						</div>
						<div class='image-stack__item image-stack__item--bottom'>
							<img src={fansDesktop} alt='' />
						</div>
					</div>
				</a>
			</Portfolio>
		</Projects>
	);
}

const Projects = styled(motion.div)`
	min-height: 80vh;
	background: #303030;
	color: #fff;
	text-align: center;
	h2 {
		padding: 1em 0 0 0;
		color: #16e0bd;
	}
	h2::after {
		content: "";
		display: block;
		width: 30%;
		height: 1px;
		margin: 0.2em auto 1em;
		background: white;
	}
	p {
		margin-bottom: 2em;
	}
	@media (min-width: 700px) {
		h2::after {
			content: "";
			width: 10%;
		}
	}
`;

const Portfolio = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	max-width: 1300px;
	margin: 0 auto;
	gap: 3em;
	padding: 0 1em;
	.image-stack {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		position: relative;
	}
	.image-stack__item--top {
		grid-column: 1 / span 8;
		grid-row: 1; // must be on the same row as the other image
		padding-top: 20%; // this pushes the image down, and keeps it proportional as it resizes
		z-index: 1; // make this image render on top of the bottom
		width: 5rem;
	}
	.image-stack__item--bottom {
		grid-column: 2 / -1;
		grid-row: 1; // make this image be on the same row
	}
	@media (min-width: 700px) {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}
	img {
		display: block;
		max-width: 100%;
	}
`;

const PortfolioItem = styled(motion.div)`
	h6 {
		font-size: 1.25em;
		color: white;
		text-decoration: none;
	}
	:hover {
		h6 {
			color: #16e0bd;
		}
	}
	:focus {
		position: relative;
		z-index: 2;
	}
	background: transparent;
	overflow: hidden;

	:hover,
	:focus .portofolio-img {
		transform: scale(1.25);
		opacity: 0.75;
	}
`;
