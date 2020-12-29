import React from "react";
import TitleSection from "../components/TitleSection";
import ServicesSection from "../components/ServicesSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default function HomeScreen() {
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			className='nani'>
			<TitleSection />
			<ServicesSection />
			<ProjectSection />
			<AboutSection />
		</motion.div>
	);
}
