export const registerFormData = [
  {
    name: "email",
    type: "email",
    component: "input",
    required: true,
  },

  {
    name: "firstName",
    type: "text",
    component: "input",
    required: true,
  },
  {
    name: "lastName",
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
  {
    name: "country",
    type: "number",
    component: "dropdown",
    required: true,
  },
];

export const registerValidate = (values) => {
  let error;


  if (!values.email) return (error = "Email is required");
  if (!values.firstName) return (error = "Firstname is required");
  if (!values.lastName) return (error = "Lastname is required");
  if (!values.password) return (error = "Password is required");
  if (!values.country) return (error = "Country is required");
};
