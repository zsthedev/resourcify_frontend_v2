import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const DiscussionRoom = ({ title, image, status, id }) => {
  return (
    <Link to={`/discussion-room/${id}/book`}>
      <div className="w-full h-[350px] rounded-lg overflow-hidden relative group">
        {/* Image */}
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute hidden group-hover:flex top-0 left-0 w-full h-full bg-gradient-to-b from-[#ffffff18] to-[#000000e5] overlay p-[16px] flex-col justify-end transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="flex items-center justify-between">
            <p className="text-3xl text-white font-clemente-regular">{title}</p>
            <Link to={`/discussion-room/${id}/book`}>
              <GoArrowUpRight className="text-3xl text-white" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DiscussionRoom;
