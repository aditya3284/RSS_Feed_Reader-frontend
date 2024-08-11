import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FaqAccordion from "../components/sections/FaqAccordion";
import PricingPlan from "../components/sections/PricingPlan";

import { frequentlyAskedQuestions, pricing } from "../constants";

const Pricing = () => {
	return (
		<>
			<main>
				<Navbar />
				<PricingPlan list={pricing} />
				<FaqAccordion list={frequentlyAskedQuestions} />
			</main>
			<Footer />
		</>
	);
};

export default Pricing;
