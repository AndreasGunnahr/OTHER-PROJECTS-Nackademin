import React from "react";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import {
  PostListContainer,
  PostListWrapper,
  PostListItem,
  PostListTitle,
  PostListDescription,
  PostListBottomContainer,
  PostListAuthor,
  PostListAuthorWrapper,
  PostListCreated,
  PostListComments,
} from "./style";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <PostListContainer>
      <PostListWrapper>
        {posts.map((post, index) => (
          <PostListItem key={index}>
            <PostListTitle>{post.title}</PostListTitle>
            <PostListDescription>
              {post.content.slice(0, 250)}...
            </PostListDescription>
            <PostListBottomContainer>
              <PostListAuthor>
                Posted by
                <PostListAuthorWrapper>
                  {post.author && post.author.email
                    ? post.author.email
                    : "Anonym"}
                </PostListAuthorWrapper>
              </PostListAuthor>
              <PostListCreated>
                {moment(post.createdAt).fromNow()}
              </PostListCreated>
              <PostListComments>
                <FontAwesomeIcon icon={faCommentAlt} /> {post.countResponses}{" "}
                comment
              </PostListComments>
            </PostListBottomContainer>
          </PostListItem>
        ))}
      </PostListWrapper>
    </PostListContainer>
  );
};

export default PostList;
