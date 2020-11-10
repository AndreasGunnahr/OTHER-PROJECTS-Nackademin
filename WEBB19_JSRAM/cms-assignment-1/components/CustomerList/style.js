import styled from "styled-components";
import { A, H1 } from "components/Shared";

export const CustomerListContainer = styled.div`
  width: 100%;
`;

export const CustomerListTitle = styled(H1)`
  font-size: 2rem;
`;

export const CustomListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 10px;
  margin-top: 2rem;
`;


