import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is ICSDT 2025?",
      answer: "The International Conference on Sustainable Digital Transformation (ICSDT) 2025 is a collaborative event focusing on sustainable practices in digital transformation, bringing together experts from academia, industry, and government.",
    },
    {
      question: "When and where is the conference?",
      answer: "The conference will be held on August 6, 2025, at INTI UNIVERSITY, Nilai, Malaysia.",
    },
    {
      question: "What are the paper submission guidelines?",
      answer: "We accept full papers (12-15+ pages) and short papers (6-11 pages). All submissions must be original and will undergo a double-blind peer review process.",
    },
    {
      question: "What are the key dates?",
      answer: "Paper submission deadline: May 2, 2025\nAcceptance notification: January 15, 2025\nCamera-ready submission: August 1, 2025",
    },
    {
      question: "How can I register for the conference?",
      answer: "Registration can be completed through our online portal. Early bird registration will be available until June 1, 2025.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border rounded-lg hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};