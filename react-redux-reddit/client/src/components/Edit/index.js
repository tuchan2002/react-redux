import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";

const avatarUrl = [
  "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
  "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
  "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
  "https://i.redd.it/7ipyf6pvqac61.png",
  "https://i.redd.it/ksmb0m02ppy51.png",
  "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
  "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
];
const Edit = ({ setIsEdit }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.user.profile);

  const [profile, setProfile] = useState(userProfile);

  const { name, age, about, avatar, theme } = profile;

  const onChangeInput = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    dispatch(updateUser(profile));
  };
  return (
    <form className="p-5 flex flex-col gap-6" onSubmit={onSubmit}>
      <button className="common-style-button" type="submit">
        SAVE
      </button>
      <div className="flex flex-col gap-3">
        <h3>Edit Profile</h3>
        <input
          type="text"
          name="name"
          placeholder="Display name..."
          className="common-style-input"
          value={name}
          onChange={(e) => onChangeInput(e)}
        />
        <input
          type="number"
          name="age"
          placeholder="Age..."
          className="common-style-input"
          value={age}
          onChange={(e) => onChangeInput(e)}
        />
        <textarea
          placeholder="About..."
          name="about"
          className="common-style-input"
          rows="3"
          value={about}
          onChange={(e) => onChangeInput(e)}
        ></textarea>
      </div>
      <div className="flex flex-col gap-3">
        <h3>Avatar</h3>
        <div className="grid grid-cols-3 gap-5">
          {avatarUrl.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              className={`w-28 h-36 object-cover bg-white rounded-lg p-2 transition-all ${
                profile.avatar === url ? "bg-blue-600" : ""
              }`}
              value={avatar}
              onClick={(e) => {
                setProfile({ ...profile, avatar: e.target.src });
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-10">
        <h3>Theme:</h3>
        <input
          type="color"
          name="theme"
          onChange={(e) => onChangeInput(e)}
          value={theme}
        />
      </div>
    </form>
  );
};

export default Edit;
