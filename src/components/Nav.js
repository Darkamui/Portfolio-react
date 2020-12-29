import React from "react";
import logo from "../img/jerumedia.png";

export default function Nav() {
	const testy = () => {
		document.body.classList.toggle("nav-open");
	};
	const remove = () => {
		document.body.classList.remove("nav-open");
	};
	return (
		<header>
			<div class='logo'>
				<img src={logo} alt='' />
			</div>
			<button class='nav-toggle' onClick={testy} aria-label='toggle navigation'>
				<span class='hamburger'></span>
			</button>
			<nav class='nav'>
				<ul class='nav__list'>
					<li class='nav__item' onClick={remove}>
						<a href='#accueil' class='nav__link'>
							Accueil
						</a>
					</li>
					<li class='nav__item' onClick={remove}>
						<a href='#connaissances' class='nav__link'>
							Mes Connaissances
						</a>
					</li>
					<li class='nav__item' onClick={remove}>
						<a href='#projets' class='nav__link'>
							Mes Projets
						</a>
					</li>
					<li class='nav__item' onClick={remove}>
						<a href='#moi' class='nav__link'>
							Qui suis-je ?
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
