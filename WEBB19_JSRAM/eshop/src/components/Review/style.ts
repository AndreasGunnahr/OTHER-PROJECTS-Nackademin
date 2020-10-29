import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem 1rem 0 1rem;
  background: white;
  border-radius: 10px;
`;

export const ReviewDescription = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`;

export const ReviewTitle = styled(ReviewDescription)`
  font-size: 1.25rem;
  font-weight: 900;
  font-style: italic;
  margin: 0;
`;

export const BottomWrapper = styled.div`
  display: flex;
  border-top: 1px solid black;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

export const ReviewAuthor = styled(ReviewDescription)`
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

export const ReviewDate = styled.p``;

export const RateTag = styled.p`
  background: lightgrey;
  border-radius: 50px;
  padding: 0.25rem 0.75rem;
  font-weight: 900;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  color: black;
  margin-top: 0.5rem;
`;
