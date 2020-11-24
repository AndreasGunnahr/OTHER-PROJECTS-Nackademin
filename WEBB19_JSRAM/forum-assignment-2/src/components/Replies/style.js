import styled from "styled-components";
import {
  FlexColCenter,
  FlexRowCenter,
  H1,
  Input,
  P,
  Span,
} from "components/Shared";
import { Button } from "components/Button";

export const RepliesContainer = styled.div`
  grid-column: 2;
  background: white;
  padding: 2rem;
  border-radius: 5px;
`;

export const RepliesWrapper = styled(FlexColCenter)`
  position: relative;
  margin-top: 2rem;
`;

export const ReplyItem = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  &:last-child {
    margin: 0;
  }
`;

export const ReplyTitle = styled(P)`
  font-weight: 600;
  font-style: italic;
  font-size: 1rem;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ReplyDescription = styled(P)`
  margin-top: 1rem;
  font-size: 0.825rem;
`;

export const RepliesBottomWrapper = styled(FlexRowCenter)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  flex-direction: column;
`;

export const ReplyBottomWrapper = styled(FlexRowCenter)`
  margin-top: 1.5rem;
  justify-content: space-between;
  border-top: 2px solid white;
`;

export const ReplyInput = styled(Input)`
  background: ${({ theme }) => theme.color.white};
  margin-right: 1rem;
  width: 100%;
  &:first-child {
    margin-bottom: 1rem;
  }
`;

export const ReplyActionBtn = styled(Button)`
  max-width: 300px;
  margin-top: 1rem;
  margin-left: auto;
`;

export const RepliesTitle = styled(H1)`
  font-size: 1.5rem;
`;

export const ReplyComment = styled(P)`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 600;
  svg {
    margin-right: 0.5rem;
    margin-top: 0.25rem;
  }
`;

export const ReplyAuthor = styled(Span)`
  margin-top: 1rem;
  font-size: 0.825rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 600;
`;

export const ReplyAuthorWrapper = styled(ReplyComment)`
  color: ${({ theme }) => theme.color.blue};
  margin: 0 0 0 0.25rem;
`;

export const ReplyCreatedAt = styled(ReplyComment)`
  color: ${({ theme }) => theme.color.grey};
`;

export const ReplyCreateTitle = styled(H1)`
  margin-top: 2.5rem;
  font-size: 1.25rem;
`;
