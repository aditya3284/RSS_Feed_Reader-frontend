import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductPlan from "../components/sections/ProductPlan";
import { milestones } from "../constants";

const Roadmap = () => {
	return (
		<>
			<main>
				<Navbar />
				<ProductPlan list={milestones} />
			</main>
			<Footer />
		</>
	);
};

export default Roadmap;
