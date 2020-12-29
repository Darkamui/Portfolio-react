import React from "react";
import HomeScreen from "./pages/HomeScreen";
import ProjectTemplate from "./pages/ProjectTemplate";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<GlobalStyles />

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact>
						<Nav />
						<HomeScreen />
						<Footer />
					</Route>

					<Route path='/work'>
						<ProjectTemplate />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
