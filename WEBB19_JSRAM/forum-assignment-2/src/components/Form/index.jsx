import React from "react";
import useForm from "hooks/useForm";
import Select from "react-select";

import {
  FormContainer,
  FormTitle,
  FormItem,
  FormLabel,
  FormInput,
  RequiredStar,
  FormActionBtn,
  FormError,
  DescriptionText,
  ActionText,
} from "./style";
import { useSelector } from "react-redux";

const Form = ({ data, typeName, validate, title }) => {
  const categories = useSelector((state) => state.categories);
  const countries = useSelector((state) => state.countries);
  const { handleSubmit, handleChange, error } = useForm(typeName, validate);

  const generateOptions = () => {
    if (typeName === "post") {
      return categories.map((category) => ({
        value: category.id,
        label: category.title,
      }));
    }

    return countries.map((country) => ({
      value: country.id,
      label: country.title,
    }));
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      cursor: "pointer",
      fontFamily: "'Raleway', sans-serif",
      fontSize: "1rem",
      boxShadow: "none",
      border: "none",
    }),
    option: (provided) => ({
      ...provided,
      fontFamily: "'Raleway', sans-serif",
      cursor: "pointer",
      fontSize: "1rem",
    }),
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{title}</FormTitle>
      {data.map((field, index) => (
        <FormItem key={index}>
          <FormLabel>
            {field.name}
            <RequiredStar>{field.required ? "*" : ""}</RequiredStar>
          </FormLabel>
          {field.component === "input" ? (
            <FormInput
              name={field.name}
              type={field.type}
              typeName={typeName}
              placeholder={`Enter a ${field.name.toLowerCase()}`}
              onChange={handleChange}
            />
          ) : (
            <Select
              name={field.name}
              placeholder={"Select a category"}
              styles={customStyles}
              options={generateOptions()}
              isSearchable={false}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: field.name,
                    value: e.value,
                  },
                })
              }
            />
          )}
        </FormItem>
      ))}
      {typeName === "login" && (
        <DescriptionText>
          Don't have a account?<ActionText to="/register">Sign up</ActionText>
        </DescriptionText>
      )}
      {typeName === "register" && (
        <DescriptionText>
          Already have a account?<ActionText to="/login">Sign in</ActionText>
        </DescriptionText>
      )}

      <FormError>{error ? error : ""}</FormError>
      <FormActionBtn type="submit">
        {typeName === "login"
          ? "Sign in"
          : typeName === "register"
          ? typeName
          : "Create"}
      </FormActionBtn>
    </FormContainer>
  );
};

export default Form;
