import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Integrations from "../components/sections/Integrations";

const Home = () => {
	return (
		<>
			<main className=''>
				<Navbar />
				<Hero />
				<Features />
				<Integrations />
			</main>
			<Footer />
		</>
	);
};

export default Home;
