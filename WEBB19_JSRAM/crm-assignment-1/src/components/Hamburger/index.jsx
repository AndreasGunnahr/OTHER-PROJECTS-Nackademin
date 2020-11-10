import { Lines, Container } from "./style";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Lines />
      <Lines />
      <Lines />
    </Container>
  );
};

export default Hamburger;
