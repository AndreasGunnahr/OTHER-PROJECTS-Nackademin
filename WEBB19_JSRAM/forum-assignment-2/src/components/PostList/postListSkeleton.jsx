import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  PostListItem,
  PostListTitle,
  PostListDescription,
  PostListBottomContainer,
  PostListAuthorWrapper,
} from "../PostItem/style";

import { PostListContainer, PostListWrapper } from "./style";

const PostListSkeleton = ({ numberOfCards, height }) => {
  return (
    <PostListContainer height={height}>
      <PostListWrapper>
        {[...Array(numberOfCards)].map((number, index) => (
          <PostListItem key={index} height={height}>
            <PostListTitle>
              <Skeleton />
            </PostListTitle>
            <PostListDescription>
              <Skeleton count={5} />
            </PostListDescription>
            <PostListBottomContainer>
              <PostListAuthorWrapper
                style={{ width: "100%", marginTop: "1rem" }}
              >
                <Skeleton />
              </PostListAuthorWrapper>
            </PostListBottomContainer>
          </PostListItem>
        ))}
      </PostListWrapper>
    </PostListContainer>
  );
};

export default PostListSkeleton;
