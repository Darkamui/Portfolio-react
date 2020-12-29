import React from "react";
import HomeScreen from "./pages/HomeScreen";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<HomeScreen />
			<Footer />
		</div>
	);
}

export default App;
