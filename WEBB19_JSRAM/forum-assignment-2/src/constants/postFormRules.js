export const postFormData = [
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
  {
    name: "category",
    type: "number",
    component: "dropdown",
    required: true,
  },
];

export const postValidate = (values) => {
  let error;

  if (!values.title) error = "Title is required";
  else if (!values.content) error = "Content is required";
  else if (!values.category) error = "Category is required";
  return error;
};
