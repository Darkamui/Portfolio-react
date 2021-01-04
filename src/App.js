import React from "react";
import HomeScreen from "./pages/HomeScreen";
import ProjectTemplate from "./pages/ProjectTemplate";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
import ProjectJerusalmy from "./pages/ProjectJerusalmy";
import ProjectRAWG from "./pages/ProjectRAWG";

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<GlobalStyles />

			<ScrollTop></ScrollTop>
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact>
						<HomeScreen />
					</Route>

					<Route path='/fans' exact>
						<ProjectTemplate />
					</Route>

					<Route path='/jerusalmy' exact>
						<ProjectJerusalmy />
					</Route>

					<Route path='/rawg' exact>
						<ProjectRAWG />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
