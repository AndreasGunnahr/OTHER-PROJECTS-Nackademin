import React, { useEffect } from "react";
import styled from "styled-components";

import PrimaryLayout from "layouts/PrimaryLayout";
import PostItem from "components/PostItem";
import Replies from "components/Replies";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "redux/actions/post.action";
import { useParams } from "react-router-dom";

import PostListSkeleton from "components/PostList/postListSkeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  width: 100%;
`;

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const replies = useSelector((state) => state.posts.replies);

  useEffect(() => {
    dispatch(postActions.getById(id));
    dispatch(postActions.getReplies(id));
  }, []);

  return (
    <PrimaryLayout col={1}>
      <Wrapper>
        {post ? (
          <PostItem post={post} height={"100%"} />
        ) : (
          <PostListSkeleton numberOfCards={1} height={"100%"} />
        )}
        {replies ? (
          <Replies replies={replies} />
        ) : (
          <PostListSkeleton
            numberOfCards={1}
            height={"100%"}
            style={{ marginTop: "2rem", overflowY: "hidden" }}
          />
        )}
      </Wrapper>
    </PrimaryLayout>
  );
};

export default PostDetail;
