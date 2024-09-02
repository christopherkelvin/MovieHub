import { NavLink } from "@remix-run/react";
import { headlinks } from "~/Data/HeaderLinks";
export const Header = () => {
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/cjs/react.production.min.js"
    integrity="sha512-wGcZXj/wGy0PrK1PUJpABds0CNVMN5FOvx6RJ4VFX6d1cP21LHdn32pqqHZxnlAyTY3MN6agJQnV/RkWiOTZzw=="
  ></script>;

  return (
    <>
      <div>
        <nav className="flex font-bebas justify-end gap-10 text-white py-3 px-5 bg-[#3f3f3f] md:px-9">
          {headlinks.map((link, index) => (
            <>
              <NavLink key={index} to={link.to} className="text-xl hover:underline">{link.label}</NavLink>
            </>
          ))}
        </nav>
      </div>
    </>
  );
};
