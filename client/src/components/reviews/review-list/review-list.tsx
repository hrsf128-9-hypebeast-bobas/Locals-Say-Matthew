import * as React from "react";
import { IReview } from "../../../interfaces";
import "./review-list.scss";
import { Review } from "../review/review";

export interface ReviewListProps {
  reviews: IReview[];
  toggleSlide: () => void;
  slideVal: string;
}

const bColor = [
  "rgb(0, 173, 187)",
  "rgb(250, 140, 104)",
  "rgb(206, 182, 255)",
  "rgb(116, 6, 49)",
  "rgb(242, 196, 48)",
  "rgb(5, 34, 134)",
  "rgb(255, 94, 63)",
];

export const ReviewList: React.FC<ReviewListProps> = ({ reviews, slideVal, toggleSlide }) => (
  <div id="review-list">
    <div id="button-wrapper">
      <button type="button" aria-label="user Review card next page" onClick={toggleSlide}>
        <div id="svg-wrapper">
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#869099"></path>
          </svg>
        </div>
      </button>
    </div>
    <div id="review-list-container-wrapper">
      <div id="review-list-container" style={{ transform: `translateX(${slideVal}%)` }}>
        {reviews.map((review, i) => (
          <Review review={review} backgroundColor={bColor[i % 7]} />
        ))}
      </div>
    </div>
  </div>
);
