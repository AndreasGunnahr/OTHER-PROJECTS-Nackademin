import styled from "styled-components";
import { H1, P, Span, FlexRowCenter } from "components/Shared";

export const PostListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border-radius: 5px;
  height: ${({ height }) => (height ? height : "300px")};
  padding: 2rem;
  margin-bottom: 2rem;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  grid-column: 2;
  cursor: pointer;
`;

export const PostListTitle = styled(H1)`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const PostListDescription = styled(P)`
  padding: 2rem 0;
  line-height: 1.5rem;
`;

export const PostListBottomContainer = styled(FlexRowCenter)`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  /* margin-top: 2rem; */
  /* padding-bottom: 2rem; */
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

export const PostDivider = styled.div`
  height: 50px;
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

export const PostCount = styled(P)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: ${({ theme }) => theme.color.white};
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border-radius: 20px;
  font-weight: 600;
`;
