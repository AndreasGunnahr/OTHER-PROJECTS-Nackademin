import styled from "styled-components";
import { FlexRowCenter, H1 } from "components/Shared";
import { OrangeButton } from "components/Button";

export const CustomerListContainer = styled.div`
  width: 100%;
`;

export const CustomerListTitle = styled(H1)`
  font-size: 2rem;
  border-bottom: 3px solid ${({ theme }) => theme.color.orange};
`;

export const CustomListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 10px;
  margin-top: 2rem;
`;

export const CustomerTopWrapper = styled(FlexRowCenter)`
  justify-content: space-between;
`;

export const AddCustomerBtn = styled(OrangeButton)`
  max-width: 300px;
  font-size: 1rem;
  margin-left: 2rem;
`;
