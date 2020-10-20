import React, { useState, useEffect } from "react";
import Image from "assets/image.jpg";
import {
  PostsContainer,
  Post,
  PostTitle,
  PostContent,
  PostImage,
  BottomContainer,
  DeleteButton,
  UpdateButton,
} from "./style";
import Popup from "../popup";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [clickedPost, setClickedPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch(`http://localhost:4000/posts/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts(posts.filter((post) => post._id !== id));
          alert(data.message);
        });
    }
  };

  const getPosts = async () => {
    const response = await fetch("http://localhost:4000/posts");
    const result = await response.json();
    setPosts(result);
  };

  const showPopup = (id) => {
    setClickedPost(posts.find((post) => post._id === id));
    setShow(!show);
  };

  const updatePost = (title, content, id) => {
    setPosts(
      posts.map((post) =>
        post._id === id ? { ...post, title, content } : post
      )
    );
  };

  return (
    <div>
      <PostsContainer>
        {posts &&
          posts.map((post, index) => (
            <Post key={index}>
              <PostImage src={Image} alt="" />
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <BottomContainer>
                <UpdateButton onClick={() => showPopup(post._id)}>
                  Update post
                </UpdateButton>
                <DeleteButton onClick={() => deletePost(post._id)}>
                  Delete post
                </DeleteButton>
              </BottomContainer>
            </Post>
          ))}
      </PostsContainer>
      {show && (
        <Popup
          show={show}
          setShow={setShow}
          post={clickedPost}
          updatePost={updatePost}
        />
      )}
    </div>
  );
};

export default Posts;
