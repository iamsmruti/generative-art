import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcSearch } from 'react-icons/fc'

import { sketchIndex } from "../sketches";

const Gallery = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mb-5 flex items-center">
        <FcSearch className="text-2xl mr-2" />
        <input placeholder="Search..." className="border-[1px] px-2 py-1 outline-none" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {sketchIndex.map((item) => (
          <div className="p-1 border-[1px]">
            <div className="cursor-pointer" onClick={() => {
              navigate(`/sketch/${item.slug}`)
              navigate(0)
            }}>
              <img src={item.headerImg} />
            </div>

            <div className="p-2">
              <div className="cursor-pointer w-fit" onClick={() => {
                navigate(`/sketch/${item.slug}`)
                navigate(0)
              }}>
                <p className="text-xl hover:text-red-400 w-fit cursor-pointer">
                  {item.name}
                </p>
              </div>
              <p className="text-sm font-light my-2 line-clamp-3">
                {item.description}
              </p>

              <div className="cursor-pointer" onClick={() => {
                navigate(`/sketch/${item.slug}`)
                navigate(0)
              }}>
                <p className="text-red-400">Read More </p>
              </div>
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
