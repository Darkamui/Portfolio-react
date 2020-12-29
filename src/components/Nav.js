import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/jerumedia.png";

export default function Nav() {
	return (
		<Header>
			<div className='logo'>
				<img src={logo} alt='' />
			</div>
			<button className='nav-toggle'>
				<span className='hamburger'></span>
			</button>
			<StyledNav>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a href='/' class='nav-link'>
							gfdgdf
						</a>
					</li>
					<li className='nav-item'>
						<a href='/' class='nav-link'>
							gdfgdf
						</a>
					</li>
					<li className='nav-item'>
						<a href='/' class='nav-link'>
							gdfgdf
						</a>
					</li>
					<li className='nav-item'>
						<a href='/' class='nav-link'>
							gdfgdf
						</a>
					</li>
				</ul>
			</StyledNav>
		</Header>
	);
}

const Header = styled(motion.div)`
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	padding: 1em;
	.logo > img {
		max-width: 100px;
	}
`;

const StyledNav = styled(motion.nav)`
	position: fixed;
	background: #303030;
	color: #fff;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 200;

	transform: translateX(100%);
	transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
	ul {
		list-style: none;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin: 0;
		padding: 0;
		li .nav-link {
			color: white;
			font-size: 2.25rem;
			font-weight: bold;
		}
		li .nav-link:hover {
			color: #16e0bd;
		}
	}
`;
