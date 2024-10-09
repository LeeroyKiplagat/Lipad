import { SlArrowDown } from "react-icons/sl";
const Frame = () => {
  return (
    <div className="flex justify-between items-center px-16 py-12 bg-white">
      <div className="max-w-md">
        <div className="bg-white border-4  text-[#1F2544] text-sm font-bold inline-block py-1 px-3 rounded-full mb-3">
          Why you should use LIPAD
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          One platform for all your business payments
        </h2>
        <p className="text-gray-600">
          Simplify your business with our all-in-one platform.
        </p>
      </div>

      <div className="w-96">
        <ul className="space-y-4 text-gray-800 font-medium">
          <li className="border-b py-2 flex justify-between hover:cursor-pointer">
            <p>Instant Activation to start transacting</p>{" "}
            <i>
              <SlArrowDown />
            </i>
          </li>
          <li className="border-b py-2 flex justify-between hover:cursor-pointer">
            <p>Simple pricing</p>{" "}
            <i>
              <SlArrowDown />
            </i>
          </li>
          <li className="border-b py-2 flex justify-between hover:cursor-pointer">
            <p>Built for all merchants</p>{" "}
            <i>
              <SlArrowDown />
            </i>
          </li>
          <li className="border-b py-2 flex justify-between hover:cursor-pointer">
            <p>Dashboard Reporting</p>{" "}
            <i>
              <SlArrowDown />
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Frame;
