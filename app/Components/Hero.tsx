import { useState, useEffect } from "react";
import { Link,  } from "@remix-run/react";
import HomeImage1 from "../assets/Images/HomeImage 1.jpg";
import HomeImage2 from "../assets/Images/HomeImage 2.jpg";
import HomeImage3 from "../assets/Images/HomeImage 3.jpg";
import HomeImage4 from "../assets/Images/HomeImage 4.jpg";
import HomeImage5 from "../assets/Images/HomeImage 5.jpg";

const images = [HomeImage1, HomeImage2, HomeImage3, HomeImage4, HomeImage5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative pt-[52px] font-lato">
      <div className="overflow-hidden max-h-[500px] w-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/3 text-white bg-black/80 px-10 py-3 overflow-hidden">
        <h2 className="text-6xl font-lato">See what{"'"}s new</h2>
        <p>Stay updated with all new movies in town</p>
        <div className=" mt-5 mb-6">
          <Link
            to="/login"
            className="text-black p-3 rounded-2xl font-bold bg-gradient-to-r from-[#a688fa] to-[#ba9ffb] hover:bg-[#a688fa]"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
