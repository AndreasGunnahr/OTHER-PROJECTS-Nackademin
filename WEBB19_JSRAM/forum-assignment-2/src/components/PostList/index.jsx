import React from "react";
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
  PostListCreated,
  PostListComments,
} from "./style";

const PostList = () => {
  return (
    <PostListContainer>
      <PostListWrapper>
        <PostListItem>
          <PostListTitle>What does the fox say?</PostListTitle>
          <PostListDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui
            sint perferendis eveniet excepturi adipisci laborum facere nostrum
            quidem dolore totam iure rem, ipsam placeat, magni nihil delectus
            odit accusantium.
          </PostListDescription>
          <PostListBottomContainer>
            <PostListAuthor>Posted by Joe Dohn</PostListAuthor>
            <PostListCreated>12hr ago</PostListCreated>
            <PostListComments>
              <FontAwesomeIcon icon={faCommentAlt} /> 50+
            </PostListComments>
          </PostListBottomContainer>
        </PostListItem>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </PostListWrapper>
    </PostListContainer>
  );
};

export default PostList;
