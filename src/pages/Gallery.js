import React from "react";
import { Link } from "react-router-dom";
import { FcSearch } from 'react-icons/fc'

import { sketchIndex } from "../sketches";

const Gallery = () => {
  return (
    <div>
      <div className="mb-5 flex items-center">
        <FcSearch className="text-2xl mr-2" />
        <input placeholder="Search..." className="border-[1px] px-2 py-1 outline-none" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {sketchIndex.map((item) => (
          <div className="p-1 border-[1px]">
            <Link to={`/sketch/${item.slug}`}>
              <img src={item.headerImg} />
            </Link>

            <div className="p-2">
              <Link to={`/sketch/${item.slug}`}>
                <p className="text-xl hover:text-red-400 w-fit cursor-pointer">
                  {item.name}
                </p>
              </Link>
              <p className="text-sm font-light my-2 line-clamp-3">
                {item.description}
              </p>

              <Link to={`/sketch/${item.slug}`}>
                <p className="text-red-400">Read More </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

{
  /* <Link to={`/sketch/${item.slug}`}>
            {item.name}
          </Link> */
}
