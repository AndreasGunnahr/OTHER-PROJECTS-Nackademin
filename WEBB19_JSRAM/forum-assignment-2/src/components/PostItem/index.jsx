import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

import {
  PostListItem,
  PostListTitle,
  PostListDescription,
  PostListBottomContainer,
  PostListAuthor,
  PostListAuthorWrapper,
  PostListCreated,
  PostListComments,
  PostCount,
  PostDivider,
} from "./style";

const PostItem = ({ post, onClick, shortDescription, height }) => {
  return (
    <PostListItem onClick={onClick} height={height}>
      <PostListTitle>{post.title}</PostListTitle>
      <PostCount>{post.viewCount} views</PostCount>
      <PostListDescription>
        {post?.content
          ? shortDescription
            ? post.content.slice(0, 250) + "..."
            : post.content
          : "No content"}
      </PostListDescription>
      <PostDivider />
      <PostListBottomContainer>
        <PostListAuthor>
          Posted by
          <PostListAuthorWrapper>
            {post.author && post.author.email ? post.author.email : "Anonym"}
          </PostListAuthorWrapper>
        </PostListAuthor>
        <PostListCreated>{moment(post.createdAt).fromNow()}</PostListCreated>
        <PostListComments>
          <FontAwesomeIcon icon={faCommentAlt} /> {post.countResponses} comment
        </PostListComments>
      </PostListBottomContainer>
    </PostListItem>
  );
};

export default PostItem;
