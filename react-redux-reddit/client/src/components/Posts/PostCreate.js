import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";

const tags = ["None", "Javascript", "HTML", "CSS", "Typescript", "Ruby", "PHP"];
const PostCreate = ({ setIsOpenPost }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagSelected, setTagSelected] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsOpenPost(false);
    const newPost = {
      title,
      description,
      tag: tagSelected,
    };

    dispatch(createPost(newPost));
  };

  return (
    <form
      className="p-5 flex flex-col gap-3"
      onSubmit={(e) => handleOnSubmit(e)}
    >
      <button className="common-style-button" type="submit">
        POST
      </button>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        className="common-style-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description..."
        name="description"
        className="common-style-input"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div>
        <h3>Tags</h3>
        <div className="mt-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`inline-block w-fit bg-yellow-600 mr-7 mb-3 px-2 rounded-xl transition-all ${
                tagSelected === index
                  ? "bg-blue-600 shadow-md shadow-blue-500"
                  : ""
              }`}
              onClick={() => setTagSelected(index)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default PostCreate;
