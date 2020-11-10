import styled from "styled-components";
import { H1, P, FlexColCenter } from "components/Shared";
import { OrangeLinkButton } from "components/Button";

export const CustomerListItemContainer = styled(FlexColCenter)`
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.color.blue};
  padding: 1.5rem;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const CustomerListItemLabel = styled(H1)`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-style: italic;
`;

export const CustomerListItemText = styled(P)`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CustomListItemReadMore = styled(OrangeLinkButton)`
  width: 150px;
  height: 35px;
  font-size: 0.85rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  border-radius: 5px;
  text-decoration: none;
`;

export const CustomListItemLabel = styled(H1)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 0.5rem;
  font-weight: 400;
  letter-spacing: 2px;
`;
