import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Integrations = () => {
	return (
		<>
			<main>
				<Navbar />
				<div className='grid min-h-dvh place-content-center space-y-5 text-center'>
					<h1 className='text-4xl font-bold'>Hello from Integrations Page</h1>
					<p>
						You are quite curious my friend. Now shut down your device and touch
						some grass
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Integrations;
