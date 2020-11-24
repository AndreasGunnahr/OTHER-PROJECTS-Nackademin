import styled from "styled-components";
import { FlexColCenter } from "components/Shared";

export const PostListContainer = styled(FlexColCenter)`
  grid-column: 2;
  height: ${({ height }) => (height ? "" : "calc(100vh - 80px - 4rem)")};
  width: 100%;
`;

export const PostListWrapper = styled.div`
  overflow-y: scroll;
  padding-bottom: 2rem;
  width: 100%;
`;
