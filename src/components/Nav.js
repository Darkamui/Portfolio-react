import React from "react";
import logo from "../img/jerumedia.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export default function Nav() {
	const testy = () => {
		document.body.classList.toggle("nav-open");
	};
	const remove = () => {
		document.body.classList.remove("nav-open");
	};
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<header>
			<div class='logo'>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
			</div>

			<button class='nav-toggle' onClick={testy} aria-label='toggle navigation'>
				<span class='hamburger'></span>
			</button>
			<div>
				<Button onClick={() => changeLanguage("fr")}>Fr</Button>
				<Button onClick={() => changeLanguage("en")}>En</Button>
			</div>
			<nav class='nav'>
				<ul class='nav__list'>
					<li class='nav__item' onClick={remove}>
						<a href='/#accueil' class='nav__link'>
							Accueil
						</a>
					</li>
					<li class='nav__item' onClick={remove}>
						<a href='/#connaissances' class='nav__link'>
							Connaissances
						</a>
					</li>
					<li class='nav__item' onClick={remove}>
						<a href='/#projets' class='nav__link'>
							Projets
						</a>
					</li>
					<li class='nav__item' onClick={remove}>
						<Link to='/#moi' class='nav__link'>
							Qui suis-je ?
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

const Button = styled.button`
	background: transparent;
	font-size: 1.25em;
	padding: 0.5em;
	cursor: pointer;
	background: aliceblue;
	font-weight: bold;
	:hover {
		background: black;
		color: white;
	}
`;
