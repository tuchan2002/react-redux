import { useState } from "react";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import PostCreate from "./components/Posts/PostCreate";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  return (
    <div className="bg-black min-h-screen">
      {isEdit ? (
        <Edit setIsEdit={setIsEdit} />
      ) : (
        <>
          <Header setIsEdit={setIsEdit} />
          {isOpenPost ? (
            <PostCreate setIsOpenPost={setIsOpenPost} />
          ) : (
            <Posts />
          )}
          <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      )}
    </div>
  );
}

export default App;
