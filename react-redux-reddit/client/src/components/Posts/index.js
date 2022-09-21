import React from "react";
import { useSelector } from "react-redux";

const tags = ["None", "Javascript", "HTML", "CSS", "Typescript", "Ruby", "PHP"];
const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <div
          key={index}
          className="px-5 py-2 bg-gray-200 bg-opacity-30 mb-4 flex flex-col gap-1"
        >
          <h4>{post.title}</h4>
          <div className="inline-block w-fit bg-yellow-600 px-2 rounded-xl transition-all">
            {tags[post.tag]}
          </div>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
