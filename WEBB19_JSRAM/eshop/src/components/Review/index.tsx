import React, { FC } from "react";
import {
  ReviewContainer,
  ReviewTitle,
  ReviewDescription,
  BottomWrapper,
  ReviewAuthor,
  RateTag,
} from "./style";

const Reviews: FC<any> = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewTitle>{review.title}</ReviewTitle>
      <ReviewDescription>{review.description}</ReviewDescription>
      <BottomWrapper>
        <ReviewAuthor>
          {review.author.name} - {review.date}
        </ReviewAuthor>
        <RateTag>🧡 {review.rating}</RateTag>
      </BottomWrapper>
    </ReviewContainer>
  );
};

export default Reviews;
