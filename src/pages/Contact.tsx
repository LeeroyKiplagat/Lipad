import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    sector: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-white p-6 md:p-10 lg:p-12 md:w-1/2 my-10">
      <h2 className="uppercase bg-gradient-to-r from-[#363f66] to-[#25a759] font-bold bg-clip-text">
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
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-placeholder="Business Sector"
          >
            <option value="business" key="2" className="bg-green-400">
              Business Sector
            </option>
          </select>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="bg w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex border bg-[#263470] p-4 space-x-4 rounded-full items-center font-bold text-white hover:bg-green-500 "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
