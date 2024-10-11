import Feature from "../assets/feature1.png";

const features = [
  {
    title: "Streamline Your Invoicing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean ut vulputate nisi.",
    imageSrc: "/images/invoicing.png",
  },
  {
    title: "Collect Instore with different payment methods?",
    description:
      "Grow your business by easily connecting with your customers using multiple payment methods.",
    imageSrc: "/images/payment_methods.png",
  },
  {
    title: "Get paid instantly using our payment request links.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean ut vulputate nisi.",
    imageSrc: "/images/payment_links.png",
  },
  {
    title: "Connect with your Customers easily",
    description:
      "Grow your business by easily connecting with your potential or current customers via SMS and E-mail.",
    imageSrc: "/images/customer_connect.png",
  },
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="bg-white border-4 text-[#1F2544] text-sm font-bold inline-block py-1 px-3 rounded-full mb-3">
          Feature
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900">
          Discover the Power of LIPAD
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Automate your business, and give your customers a more seamless
          experience.
        </p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden">
          <div className="flex-1 p-6">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-[#21C463] rounded-full mr-4"></div>
              <h3 className="text-lg font-bold text-gray-900">
                Petty Cash Efficiency, Simplified
              </h3>
            </div>
            <p className="text-gray-600">
              Save time, stay on schedule, handle all your payments from
              wherever you are.
            </p>
          </div>
          <div className="p-6">
            <img
              className="h-40 w-full rounded-md object-cover"
              src={Feature}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:cursor-pointer"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-[#21C463] rounded-full mr-4"></div>
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            <div className="p-6 flex justify-center">
              <img
                className="h-40 w-full object-cover rounded-md"
                src={feature.imageSrc}
                alt={feature.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
