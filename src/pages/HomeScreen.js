import React from "react";
import TitleSection from "../components/TitleSection";
import ServicesSection from "../components/ServicesSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";

export default function HomeScreen() {
	return (
		<div>
			<TitleSection />
			<ServicesSection />
			<ProjectSection />
			<AboutSection />
		</div>
	);
}
