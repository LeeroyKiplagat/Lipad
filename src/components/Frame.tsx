import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Frame = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16  py-12 bg-white">
      <div className="max-w-md mb-6 md:mb-0">
        <div className="bg-white border-4 text-[#1F2544] text-sm font-bold inline-block py-1 px-3 rounded-full mb-3">
          Why you should use LIPAD
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          One platform for all your business payments
        </h2>
        <p className="text-gray-600">
          Simplify your business with our all-in-one platform.
        </p>
      </div>

      <div className="w-full md:w-96">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Instant Activation to start transacting
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Simple pricing</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Built for all merchants</AccordionTrigger>
            <AccordionContent>Built for all merchants</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Dashboard Reporting</AccordionTrigger>
            <AccordionContent>Dashboard Reporting</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Frame;
