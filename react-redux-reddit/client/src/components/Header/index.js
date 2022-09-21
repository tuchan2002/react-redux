import React from "react";
import { useSelector } from "react-redux";

const Header = ({ setIsEdit }) => {
  const userProfile = useSelector((state) => state.user.profile);
  const { name, age, about, avatar, theme } = userProfile;

  return (
    <div
      style={{
        backgroundColor: theme,
        backgroundImage: `linear-gradient(180deg, ${theme} 2%, ${theme}, 65%, #181818 100%)`,
      }}
      className={`p-5 flex flex-col`}
    >
      <button className="common-style-button" onClick={() => setIsEdit(true)}>
        EDIT
      </button>
      <img src={avatar} alt="avatar" className="w-28 h-36 object-cover" />
      <h3>{name}</h3>
      <div>{age} years old</div>
      <div>{about}</div>
    </div>
  );
};

export default Header;
