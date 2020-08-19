import React, { useState } from "react";
import { Container, UpdateForm, Wrapper, CloseButton } from "./style";
import {
  FormLabel,
  FormInput,
  FormTextArea,
  ActionButton,
  FormTitle,
} from "components/newPost/style";

const Popup = ({ show, setShow, post, updatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:4000/posts/${post._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);

        setTitle("");
        setContent("");
        setShow(!show);
        updatePost(title, content, post._id);
      });
  };

  return (
    <Container>
      <UpdateForm onSubmit={handleSubmit}>
        <FormTitle>Create a new post</FormTitle>
        <FormLabel>Title</FormLabel>
        <FormInput onChange={(e) => setTitle(e.target.value)} value={title} />
        <FormLabel>Content</FormLabel>
        <FormTextArea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <Wrapper>
          <ActionButton>Update</ActionButton>
          <CloseButton onClick={() => setShow(!show)}>Close</CloseButton>
        </Wrapper>
      </UpdateForm>
    </Container>
  );
};

export default Popup;
