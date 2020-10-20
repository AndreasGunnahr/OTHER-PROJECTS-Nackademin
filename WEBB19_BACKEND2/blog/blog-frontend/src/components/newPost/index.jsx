import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  FormLabel,
  FormInput,
  FormTextArea,
  ActionButton,
  FormTitle,
} from "./style";

const NewPost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTitle("");
        setContent("");
        alert(data.message);
        history.push("/");
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Create a new post</FormTitle>
        <FormLabel>Title</FormLabel>
        <FormInput onChange={(e) => setTitle(e.target.value)} value={title} />
        <FormLabel>Content</FormLabel>
        <FormTextArea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <ActionButton disabled={title && content ? false : true}>
          Create
        </ActionButton>
      </Form>
    </Container>
  );
};

export default NewPost;
