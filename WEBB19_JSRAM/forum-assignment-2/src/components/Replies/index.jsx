import React from "react";
import moment from "moment";
import {
  RepliesContainer,
  RepliesTitle,
  RepliesWrapper,
  RepliesBottomWrapper,
  ReplyTitle,
  ReplyDescription,
  ReplyItem,
  ReplyBottomWrapper,
  ReplyCreateTitle,
  ReplyAuthor,
  ReplyAuthorWrapper,
  ReplyCreatedAt,
} from "./style";
import Form from "components/Form";
import { replyFormData, replyValidate } from "constants/replyFormRules";

const Replies = ({ replies }) => {
  return (
    <RepliesContainer>
      <RepliesTitle>Comments</RepliesTitle>
      <RepliesWrapper>
        {replies.length === 0 && (
          <ReplyTitle style={{ width: "100%" }}>
            No comments made yet.
          </ReplyTitle>
        )}
        {replies.map((reply, index) => (
          <ReplyItem key={index}>
            <ReplyTitle>{reply.title}</ReplyTitle>
            <ReplyDescription>{reply.content}</ReplyDescription>
            <ReplyBottomWrapper>
              <ReplyAuthor>
                Posted by
                <ReplyAuthorWrapper>{reply.author.email}</ReplyAuthorWrapper>
              </ReplyAuthor>
              <ReplyCreatedAt>
                {moment(reply.createdAt).fromNow()}
              </ReplyCreatedAt>
            </ReplyBottomWrapper>
          </ReplyItem>
        ))}
      </RepliesWrapper>
      <ReplyCreateTitle>Create a comment</ReplyCreateTitle>
      <RepliesBottomWrapper>
        <Form typeName="reply" data={replyFormData} validate={replyValidate} />
      </RepliesBottomWrapper>
    </RepliesContainer>
  );
};

export default Replies;
