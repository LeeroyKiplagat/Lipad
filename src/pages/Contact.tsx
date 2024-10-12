import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data:");
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-white p-6 md:p-10 lg:p-12 lg:w-1/2 my-10">
      <h2 className="uppercase font-semibold bg-gradient-to-r from-[#363f66] to-[#25a759]  bg-clip-text text-transparent">
        Contact Us
      </h2>
      <h2 className="text-2xl font-bold mb-6">Get Started</h2>
      <p className="mb-6 text-gray-600">
        Turpis euismod pharetra urna ut libero venenatis diam ipsum aorci
        venenatis ornare odio in nascetur id dictumst in in lectus vel eu
        scelerisque volutpat arcu sed massa.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input id="name" placeholder="Your Name" />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="Business Sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup id="sector">
                <SelectLabel>Select a business type</SelectLabel>
                <SelectItem value="health">Healthcare</SelectItem>
                <SelectItem value="edu">Education</SelectItem>
                <SelectItem value="hosp">Hospitality</SelectItem>
                <SelectItem value="trans">Transportation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Textarea id="message" placeholder="Type your message here." />
        </div>
        <Button
          type="submit"
          className="flex border bg-[#263470] p-4 space-x-4 rounded-full items-center font-bold text-white hover:bg-green-500 "
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
