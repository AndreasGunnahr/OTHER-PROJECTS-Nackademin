export const loginFormData = [
  {
    name: "email",
    type: "text",
    component: "input",
    required: true,
  },
  {
    name: "password",
    type: "password",
    component: "input",
    required: true,
  },
];

export const loginValidate = (values) => {
  let error;

  if (!values.email) return (error = "Email is required");
  if (!values.password) return (error = "Password is required");
  // return error;
};
