import styled from "styled-components";
import { H1, P, Span, FlexColCenter, FlexRowCenter } from "components/Shared";

export const PostListContainer = styled(FlexColCenter)`
  grid-column: 2;
  height: calc(100vh - 80px - 4rem);
  width: 100%;
  margin: 0 auto;
`;

export const PostListWrapper = styled.div`
  overflow-y: scroll;
  padding-bottom: 2rem;
`;

export const PostListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border-radius: 5px;
  height: 300px;
  padding: 2rem;
  margin-top: 2rem;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  cursor: pointer;
  &:first-child {
    margin: 0;
  }
`;

export const PostListTitle = styled(H1)`
  font-size: 1.5rem;
`;

export const PostListDescription = styled(P)`
  margin-top: 2rem;
  line-height: 1.5rem;
`;

export const PostListBottomContainer = styled(FlexRowCenter)`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  width: calc(100% - 4rem);
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.color.white};
`;

export const PostListComments = styled(P)`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 600;
  svg {
    margin-right: 0.5rem;
    margin-top: 0.25rem;
  }
`;

export const PostListAuthor = styled(Span)`
  margin-top: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 600;
`;

export const PostListAuthorWrapper = styled(PostListComments)`
  color: ${({ theme }) => theme.color.blue};
  margin: 0 0 0 0.25rem;
`;

export const PostListCreated = styled(PostListComments)`
  color: ${({ theme }) => theme.color.grey};
`;
