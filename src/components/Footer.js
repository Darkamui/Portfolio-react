import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

export default function Footer() {
	const [element, controls] = useScroll();
	return (
		<div className='nani'>
			<StyledFooter
				variants={fade}
				initial='hidden'
				animate={controls}
				ref={element}>
				<a href='mailto:dannyerushalmi@gmail.com' class='footer__link'>
					dannyerushalmi@gmail.com
				</a>
				<ul class='social-list'>
					<li class='social-list__item'>
						<a href='/' class='social-list__link'>
							<i class='fab fa-facebook'></i>
						</a>
					</li>
					<li class='social-list__item'>
						<a href='/' class='social-list__link'>
							<i class='fab fa-linkedin'></i>
						</a>
					</li>
					<li class='social-list__item'>
						<a href='/' class='social-list__link'>
							<i class='fab fa-github'></i>
						</a>
					</li>
				</ul>
			</StyledFooter>
		</div>
	);
}

const StyledFooter = styled(motion.footer)`
	background: #111;
	color: #16e0bd;
	text-align: center;
	padding: 2em 0;
	font-size: 1em;
	a {
		color: #16e0bd;
		font-weight: bold;
		text-decoration: none;
	}
	.footer__link:hover {
		text-decoration: underline;
	}
	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		margin: 2em 0 0;
		padding: 0;
	}
	li {
		margin: 0 0.5em;
	}
	li a {
		padding: 0.5em;
	}
	@media (min-width: 700px) {
		font-size: 2em;
	}
	.social-list__link:hover {
		color: red;
	}
`;
