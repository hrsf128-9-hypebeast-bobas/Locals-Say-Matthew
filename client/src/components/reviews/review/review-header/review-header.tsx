import * as React from "react";
import "./review-header.scss";
import { IReview } from "../../../../interfaces";

export interface ReviewHeaderProps { review: IReview }

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({ review }) => (
    <div className="review-header">
    <div className="icon-circle-box">
      <div className="svg-container">
        <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.598 10.564a4.485 4.485 0 1 0 8.97 0 4.485 4.485 0 0 0-8.97 0zm-2.66 0a7.145 7.145 0 1 1 14.29 0 7.145 7.145 0 0 1-14.29 0zm7.146 7.145c-4.021 0-7.318 3.238-7.318 6.938v.609h14.635v-.609c0-3.7-3.297-6.938-7.317-6.938zm0-2.66c5.424 0 9.977 4.365 9.977 9.598v3.269H6.106v-3.269c0-5.234 4.552-9.598 9.978-9.598z" fill="#869099"></path>
        </svg>
      </div>
    </div>
    <div className="user-info">
      <div className="user-name">
        {review.name}
      </div>
      <div className="user-data-container">
        <ul className="user-data">
          <li>Resident</li>
          <li className="review-date">1mo ago</li>
        </ul>
      </div>
    </div>
  </div>
);
