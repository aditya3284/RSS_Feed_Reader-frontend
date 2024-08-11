import PropTypes from "prop-types";
import {
	Accordion,
	AccordionBody,
	AccordionItem,
	AccordionItemContent,
	AccordionTitle,
} from "../ui/Accordion";

const FaqAccordion = ({ list }) => {
	return (
		<section aria-label='frequently asked questions' className='my-5'>
			<Accordion className={"mx-auto mb-16 max-w-3xl"}>
				<AccordionTitle>Frequently Asked Questions</AccordionTitle>
				<AccordionBody className={"px-5"}>
					{list.map((item) => (
						<AccordionItem
							key={item.id}
							title={item.title}
							className={"rounded-lg bg-s-2 dark:bg-s-6"}
						>
							<AccordionItemContent>{item.content}</AccordionItemContent>
						</AccordionItem>
					))}
				</AccordionBody>
			</Accordion>
		</section>
	);
};

FaqAccordion.propTypes = {
	list: PropTypes.array,
};

export default FaqAccordion;
