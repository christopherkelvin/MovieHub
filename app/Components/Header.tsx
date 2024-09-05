import { headlinks } from "~/data/headerLinks";

import { Link as ScrollLink,} from "react-scroll";
import {
  useLocation,
  Link as RouteLink,
} from "@remix-run/react";
export const Header = () => {
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/cjs/react.production.min.js"
    integrity="sha512-wGcZXj/wGy0PrK1PUJpABds0CNVMN5FOvx6RJ4VFX6d1cP21LHdn32pqqHZxnlAyTY3MN6agJQnV/RkWiOTZzw=="
  ></script>;
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <div id="hero">
        <nav className="flex z-10 w-full fixed font-lato justify-center gap-7 text-white py-3 px-5 bg-gray-900 md:px-9">
          {isHomePage ? (
            headlinks.map((link, index) => (
              <ScrollLink
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                key={index}
                className="text-lg hover:underline cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            ))
          ) : (
            <>
              <RouteLink
                to="/"
                className="text-lg uppercase hover:underline cursor-pointer"
              >
                Home
              </RouteLink>
              <RouteLink
                to="/"
                className="text-lg uppercase hover:underline cursor-pointer"
              >
                Help
              </RouteLink>
            </>
          )}
        </nav>
      </div>
    </>
  );
};
