import React, { FC, useState, useEffect } from "react";
import { ReviewsContainer, ReviewTitle, NoReviewsFound } from "./style";
import firebase from "firebaseConfig";
import { Review } from "components";

const ReviewsList: FC<any> = ({ reviewId }: any) => {
  const [reviews, setReviews] = useState<any>(null);
  const reviewRef = firebase.database().ref(`/reviews/${reviewId}`);

  useEffect(() => {
    reviewRef.once("value", (snapshot) => {
      setReviews(snapshot.val());
    });
  }, []);

  return (
    <ReviewsContainer>
      <ReviewTitle>Reviews</ReviewTitle>
      {reviews ? (
        reviews.map((review: any, index: number) => (
          <Review key={index} review={review} />
        ))
      ) : (
        <NoReviewsFound>No reviews found</NoReviewsFound>
      )}
    </ReviewsContainer>
  );
};

export default ReviewsList;
