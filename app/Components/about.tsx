import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
// import myImage from "../assets/Images/cryser.jpg";
export const About = () => {
  return (
    <>
      <div className=" sticky bottom-0 w-full bg-[#31312F] text-sm pt-2 font-bebas grid grid-cols-[1fr,100px]">
        <div className="text-center">
          © 2024 - All rights reserved | Developed by Christopher Kelvin
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/cryser14/?igsh=bGhtMjR5ejBqNDhr"
            className=""
          >
            <FaInstagram />
          </a>
          <a href="https://github.com/christopherkelvin">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085946756182&mibextid=ZbWKwL">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div
        id="about"
        className="bg-[#484845] grid grid-cols-[1fr,200px,400px] pt-5"
      >
        <div className="flex border h-32 overflow-hidden p-3 border-gray-800 ">
          <p className="text-sm">
            This is a simple movie hub web application that uses the TMDb API to
            fetch and display movie data. You can search for movies by title,
            release year, or genre. The application also includes a feature to
            add movies to your favorite list and view your list.
          </p>
        </div>
        <div className=" pl-4">
          <h2 className="text-lg font-bold">Technologies Used</h2>
          <ul className="pl-2 text-sm">
            <li>Remix</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>TMDb API</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg">Contact Me</h2>
          <p className="text-sm">
            If you have any questions or need further assistance, feel free to
            contact me at{" "}
            <a href="mailto:christopher.kelvin@gmail.com">
              christopher.kelvin@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
