import { useState } from "react";
import data from "./data";

import { createPortal } from "react-dom";
import {
  Overlay,
  Container,
  ModalWrapper,
  Wrapper,
  Title,
  InputField,
  RequiredStar,
  EditButton,
  ModalGridWrapper,
  CustomerLabel,
  InputWrapper,
} from "./style";

const CustomerModal = ({
  isShowing,
  hide,
  handleSubmit,
  title,
  customers,
  customerId,
}) => {
  const values =
    customers && customers.find((customer) => customer.id === customerId);
  const [userInput, setUserInput] = useState(values ? values : {});

  return isShowing
    ? createPortal(
        <>
          <Overlay onClick={hide} />
          <Container>
            <ModalWrapper>
              <Title>{title}</Title>
              <ModalGridWrapper>
                {data.map((customer, key) => (
                  <InputWrapper key={key}>
                    <CustomerLabel>
                      {customer.name}
                      <RequiredStar>{customer.required}</RequiredStar>
                    </CustomerLabel>
                    <InputField
                      name={customer.type}
                      placeholder={"Enter a " + customer.name.toLowerCase()}
                      value={
                        userInput[customer.type] ? userInput[customer.type] : ""
                      }
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </InputWrapper>
                ))}
              </ModalGridWrapper>

              <Wrapper>
                <EditButton onClick={() => handleSubmit(userInput)}>
                  {title}
                </EditButton>
              </Wrapper>
            </ModalWrapper>
          </Container>
        </>,
        document.body
      )
    : null;
};

export default CustomerModal;
