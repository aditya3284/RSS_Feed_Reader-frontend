import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Integrations from "./components/sections/Integrations";

const App = () => {
	return (
		<>
			<Navbar />
			<main className=''>
				<Hero />
				<Features />
				<Integrations />
				<section id='pricing' className='padding bg-p-6'>
					Special Offer
				</section>
				<section id='offer' className='padding bg-s-3'>
					customer Review
				</section>
				<section id='how-to-use' className='padding'>
					Newsletter
				</section>
				<section id='roadmap' className='padding bg-black text-white'>
					footer
				</section>
				<Footer />
			</main>
		</>
	);
};

export default App;
