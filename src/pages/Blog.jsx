import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
	return (
		<>
			<main>
				<Navbar />
				<div className='grid space-y-5 min-h-dvh place-content-center text-center'>
					<h1 className='text-4xl font-bold'>Hello from blog Page</h1>
					<p>You are quite curious my friend</p>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Blog;
