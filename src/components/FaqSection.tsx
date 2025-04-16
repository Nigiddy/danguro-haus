
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How can I prepare for viewings/appointments?",
    answer:
      "Prepare your home by decluttering, cleaning thoroughly, ensuring good lighting, and making minor repairs. Consider neutral decor and remove personal items. For appointments, have important documents ready and prepare questions about the property or process.",
  },
  {
    id: "item-2",
    question: "Can I use my listings for virtual showings?",
    answer:
      "Yes, our platform supports virtual showings for all listings. You can upload 360° photos, virtual tour videos, or host live virtual open houses. This feature is especially popular for remote buyers or initial property screenings.",
  },
  {
    id: "item-3",
    question: "What information is shown in property ads?",
    answer:
      "Property advertisements include detailed specifications like square footage, number of bedrooms and bathrooms, year built, lot size, and special features. We also include high-quality images, virtual tours, floor plans, neighborhood information, and pricing details.",
  },
  {
    id: "item-4",
    question: "Can real estate companies manage listings?",
    answer:
      "Yes, real estate companies can manage multiple listings through our dedicated company portal. This includes features for team collaboration, listing management, client communications, performance analytics, and customized branding options.",
  },
  {
    id: "item-5",
    question: "How can I collaborate in property management?",
    answer:
      "Our platform offers collaborative tools for property management teams, including shared calendars, task assignments, document sharing, maintenance request tracking, and communication channels for seamless teamwork across your property portfolio.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl font-bold text-danguro-dark text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Find the answers to common questions we hear from our users
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left font-medium text-danguro-dark hover:text-danguro py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
