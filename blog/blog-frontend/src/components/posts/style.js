import styled from "styled-components";

export const PostsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
  padding: 2rem;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background: beige;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

export const PostImage = styled.img`
  height: 200px;
  border-radius: 1rem;
`;

export const PostTitle = styled.h1`
  margin-top: 1rem;
  font-size: 1.75rem;
`;

export const PostContent = styled.span`
  margin-top: 1rem;
  font-size: 1rem;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const UpdateButton = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
`;
