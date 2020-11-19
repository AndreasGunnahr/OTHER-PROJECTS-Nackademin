import styled from "styled-components";
import { H1, P, Span, FlexColCenter } from "components/Shared";
import { Button } from "components/Button";

export const SidebarContainer = styled(FlexColCenter)`
  justify-content: flex-start;
`;

export const SidebarActionBtn = styled(Button)``;

export const TopUserContainer = styled(FlexColCenter)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  margin-top: 2rem;
  background: white;
  height: 500px;
  width: 100%;
  border-radius: 5px;
`;

export const TopUserTitle = styled(H1)`
  font-size: 1.25rem;
`;
