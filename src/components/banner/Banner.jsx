import React from "react";
import bannerImage from '../../assets/hero_img.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen container mx-auto mt-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-10">Books to freshen up <br/>your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-white text-lg font-semibold rounded-sm border-none">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
