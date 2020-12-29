import React, { useEffect, useRef } from "react";
import { gsap, Power2, TimelineLite } from "gsap";
import hoodie from "../img/hoodie.jpeg";
import hats from "../img/hats.jpeg";
import coverLong from "../img/projecttemp.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { Link } from "react-router-dom";

export default function ProjectTemplate() {
	const tl = new TimelineLite({ paused: true, reversed: true });
	const navButton = document.querySelector(".nav-button");
	let cover = useRef(null);
	let nav = useRef(null);
	let navOpen = useRef(null);
	useEffect(() => {
		tl.to(cover.current, 1, {
			width: "60%",
			ease: Power2.easeOut,
		})
			.to(
				nav.current,
				1,
				{
					height: "100%",
					ease: Power2.easeOut,
				},
				"-=0.5"
			)
			.fromTo(
				navOpen.current,
				0.5,
				{
					opacity: 0,
					x: 50,
					ease: Power2.easeOut,
				},
				{
					opacity: 1,
					x: 0,
				}
			);
	}, []);

	const play = (e) => {
		if (tl.isActive()) {
			e.preventDefault();
			if (e.stopImmediatePropagation) {
				e.stopImmediatePropagation();
			}

			return false;
		} else {
			toggleTween(tl);
		}
	};
	function toggleTween(tween) {
		tween.reversed() ? tween.play() : tween.reverse();
	}
	return (
		<Main variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<Nav ref={(nav) => (nav = nav)}>
				<div className='nav-closed'>
					<h3>Portfolio</h3>
					<ul className='nav-links'>
						<li className='nav-button'>
							<button onClick={play}>
								<Link to='/'>xShop</Link>
							</button>
						</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className='nav-open' ref={(navOpen) => (navOpen = navOpen)}>
					<div className='clothing'>
						<h2>Clothes</h2>
						<ul>
							<li>
								<a href='#'>Hats</a>
							</li>
							<li>
								<a href='#'>Swimsuit</a>
							</li>
							<li>
								<a href='#'>Underwear</a>
							</li>
							<li>
								<a href='#'>Misc</a>
							</li>
						</ul>
					</div>
					<NavImages className='nav-images'>
						<img src={hoodie} alt='' />
						<img src={hats} />
					</NavImages>
				</div>
			</Nav>
			<img
				src={coverLong}
				alt=''
				className='cover'
				ref={(cover) => (cover = cover)}
			/>
			<h1 className='cover-date'>03/03/2019</h1>
		</Main>
	);
}

const Main = styled(motion.header)`
	height: 100vh;
	background: black;
	font-family: "Inconsolata", monospace;
	display: flex;
	position: relative;
	.cover {
		height: 100%;
		position: absolute;
		width: 100%;
		top: 0;
		right: 0;
	}
	.cover-date {
		position: absolute;
		left: 10%;
		bottom: 10%;
		opacity: 0.7;
		color: white;
	}
	object-fit: cover;
`;

const NavImages = styled.div`
	img {
		height: 250px;
	}
`;

const Nav = styled.nav`
	background: white;
	z-index: 2;
	width: 40%;
	height: 20%;
	color: #916356;
	font-size: 2rem;
	overflow: hidden;
	.nav-closed {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 20%;
		width: 40%;
		position: absolute;
		ul {
			display: flex;
			list-style: none;
			width: 50%;
			justify-content: space-around;
			.nav-button {
				cursor: pointer;
			}
		}
	}
	.nav-open {
		opacity: 0;
		pointer-events: none;
		position: absolute;
		width: 39.5%;
		height: 80%;
		top: 20%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		.clothing {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			h2 {
				font-size: 45px;
			}
			ul li {
				padding-bottom: 10px;
			}
			ul {
				list-style: none;
			}

			ul li a {
				text-decoration: none;
				color: #916356;
			}
		}
		.nav-images {
			display: flex;
			justify-content: space-around;
			width: 100%;
		}
	}
`;