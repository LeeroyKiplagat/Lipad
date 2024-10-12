import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiAlignRight } from "react-icons/fi";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavBar() {
  return (
    <div className="h-[70px]  md:h-[100px] w-screen border-b border-gray-400 fixed z-10 bg-white shadow-md  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 md:p-[15px] ">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem className="text-lg font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : "hover:text-green-500"
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold hover:text-green-500">
                  Other Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <NavLink key={component.title} to={component.href}>
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <h1 className="text-lg font-bold">
                            {component.title}
                          </h1>
                          {component.description}
                        </div>
                      </NavLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg font-semibold hover:text-green-500 ">
                <NavLink to="">FAQ</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg font-semibold">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : "hover:text-green-500"
                  }
                >
                  Contact
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-[15px]">
            <Button className=" border border-gray-900 p-2 rounded-full nav-text text-sm">
              Login
            </Button>
            <Button className=" border border-gray-900 p-2 rounded-full font-semibold text-sm bg-[#1F2544] text-white">
              Get's Started
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger className="pt-4">
              {" "}
              <FiAlignRight className="size-8 text-[#1F2544]" />{" "}
            </PopoverTrigger>
            <PopoverContent className="">
              <div className="">
                <ul className="flex-row space-y-3 font-bold">
                  <li className="hover:text-green-500">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="hover:text-green-500">
                    {" "}
                    <NavLink to="">Other Products</NavLink>
                  </li>
                  <li className="hover:text-green-500">
                    <NavLink to="">FAQs</NavLink>
                  </li>
                  <li className="hover:text-green-500">
                    <NavLink to="/contact">Contacts</NavLink>
                  </li>
                  <li className="flex justify-between">
                    {" "}
                    <button className="bg-white border border-gray-900 p-2 rounded-full font-bold text-sm">
                      Login
                    </button>
                    <Button className=" border border-gray-900 p-2 rounded-full font-semibold text-sm bg-[#1F2544] text-white">
                      Get's Started
                    </Button>
                  </li>
                </ul>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
