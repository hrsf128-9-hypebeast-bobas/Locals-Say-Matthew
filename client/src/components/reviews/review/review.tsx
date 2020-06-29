import * as React from "react";
import "./review.scss";
import { IReview } from "../../../interfaces";
import { ReviewHeader } from "./review-header/review-header";
import { ReviewContent } from "./review-content/review-content";
import { ReviewFooter } from "./review-footer/review-footer";

export interface ReviewProps {
  review: IReview;
  backgroundColor: string;
}

export const Review: React.FC<ReviewProps> = ({ review, backgroundColor }) => (
  <div className="review-container">
    <div className="review" style={{ backgroundColor }}>
      <div className="review-padding">
        <ReviewHeader review={review}/>
        <ReviewContent content={review.content} backgroundColor={backgroundColor}/>
        <ReviewFooter review={review}/>
      </div>
    </div>
  </div>
);
