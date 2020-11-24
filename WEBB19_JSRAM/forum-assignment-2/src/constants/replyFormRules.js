export const replyFormData = [
    {
      name: "title",
      type: "text",
      component: "input",
      required: true,
    },
    {
      name: "content",
      type: "text",
      component: "input",
      required: true,
    },
  ];
  
  export const replyValidate = (values) => {
    let error;
  
    if (!values.title) error = "Title is required";
    else if (!values.content) error = "Content is required";
    return error;
  };
  