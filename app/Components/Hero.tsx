import { Link } from "@remix-run/react";
import HomeImage from "../assets/Images/HomeImage.jpg";
const Hero = () => {
  return (
    <>
      <div className=" relative">
        <img src={HomeImage} alt="" className="h-[500px] w-full object-fit" />
        <div className="absolute top-1/3 text-white bg-black/80 px-10 py-3  overflow-hidden">
          <h2 className=" text-6xl font-bebas">See what{"'"}s new</h2>
          <p>Stay updated with all new movies in town</p>
          <div className="text-center mt-10 mb-6">
            <Link
              to="/login"
              className="  text-black p-3 rounded-2xl font-bold bg-gradient-to-r from-[#a688fa] to-[#ba9ffb] hover:bg-[#a688fa]"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;