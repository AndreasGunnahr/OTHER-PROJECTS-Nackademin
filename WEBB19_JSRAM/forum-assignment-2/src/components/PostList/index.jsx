import React from "react";
import { useHistory } from "react-router-dom";

import PostItem from "components/PostItem";
import PostListSkeleton from "./postListSkeleton";
import { PostListContainer, PostListWrapper } from "./style";

const PostList = ({ posts }) => {
  const history = useHistory();
  if (posts) {
    return (
      <PostListContainer>
        <PostListWrapper>
          {posts.map((post, index) => (
            <PostItem
              shortDescription={true}
              key={index}
              post={post}
              onClick={() => history.push(`/post/${post.id}`)}
            />
          ))}
        </PostListWrapper>
      </PostListContainer>
    );
  }
  return <PostListSkeleton numberOfCards={3} />;
};

export default PostList;
