import Form from "components/Form";

import { createPortal } from "react-dom";
import {
  Overlay,
  Container,
  ModalWrapper,
  Title,
  ModalGridWrapper,
} from "./style";

const Modal = ({ title, data, validate, isShowing, hide, type }) => {
  return isShowing
    ? createPortal(
        <>
          <Overlay onClick={hide} />
          <Container>
            <ModalWrapper>
              <Title>{title}</Title>
              <ModalGridWrapper>
                <Form typeName={type} data={data} validate={validate} />
              </ModalGridWrapper>
            </ModalWrapper>
          </Container>
        </>,
        document.body
      )
    : null;
};

export default Modal;
