import Logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <div className="  h-[100px] border-b-2 ">
      <div className="flex justify-between items-center p-[15px]">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-14">
            <li className="nav-text">Home</li>
            <li className="nav-text">Other Products</li>
            <li className="nav-text">Pricing</li>
            <li className="nav-text">FAQ</li>
            <li className="nav-text">Contact</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-[15px]">
            <button className=" border border-gray-900 p-2 rounded-full nav-text">
              Login
            </button>
            <button className=" border border-gray-900 p-2 rounded-full text-lg bg-[#1F2544] text-white">
              Get's Started
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
