import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}
.nani{
    overflow:hidden;
}
img {
    display: block;
    max-width: 100%;
}
body {
    background : #fff;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
}

h1{
    font-size: 3rem;
}

h2{
    font-size: 2.25rem;
}

h3{
    font-size: 1.25rem; 
}

header {
	display: flex;
	justify-content: space-between;
	padding: 1em;
	min-height: 10vh;
}
.logo {
	max-width: 100px;
}
.nav {
	position: fixed;
	background: #303030;
	color: #ddd;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 200;

	transform: translateX(100%);
	transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
}

.nav__list {
	list-style: none;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 0;
	padding: 0;
}

.nav__link {
	color: inherit;
	font-weight: bold;
	font-size: 2em;
}

.nav__link:hover {
	color: #16e0bd;
}

.nav-toggle {
	padding: 1em;
	background: transparent;
	border: 0;
	cursor: pointer;
	position: absolute;
	right: 0.5em;
	top: 4em;
	z-index: 1000;
}

.nav-open .nav {
	transform: translateX(0);
}
.nav-open .nav-toggle {
	position: fixed;
}

.nav-open .hamburger {
	transform: rotate(0.625turn);
}

.nav-open .hamburger::after {
	opacity: 0;
}
.nav-open .hamburger::before {
	transform: rotate(90deg) translateX(-6px);
}

.hamburger {
	display: block;
	position: relative;
}
.hamburger,
.hamburger::before,
.hamburger::after {
	background: #16e0bd;
	width: 2em;
	height: 3px;
	border-radius: 1em;
	transition: transform 250ms ease-in-out;
}

.hamburger::after,
.hamburger::before {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
}

.hamburger::before {
	top: 6px;
}
.hamburger::after {
	bottom: 6px;
}

`;

export default GlobalStyles;
