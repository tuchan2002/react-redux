import React from "react";

const Footer = ({ setIsOpenPost, isOpenPost }) => {
  return (
    <div
      className="font-bold text-5xl bg-gray-500 text-center pb-3 fixed bottom-0 left-0 right-0"
      onClick={() => {
        setIsOpenPost(!isOpenPost);
      }}
    >
      {isOpenPost ? "x" : "+"}
    </div>
  );
};

export default Footer;
