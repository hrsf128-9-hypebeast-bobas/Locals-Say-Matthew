import * as React from "react";
import { IReview } from "../../../interfaces";
import './review-list.scss';
import { Review } from "../review/review";

export interface ReviewListProps { reviews: IReview[] }

const bColor = [
    "rgb(0, 173, 187)",
    "rgb(250, 140, 104)",
    "rgb(206, 182, 255)",
    "rgb(116, 6, 49)",
    "rgb(242, 196, 48)",
    "rgb(5, 34, 134)",
    "rgb(255, 94, 63)"
]

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => (
    <div id="review-list"> 
        <div id="review-list-container">
            { reviews.map((review, i) => <Review review={review} backgroundColor={bColor[i % 7]}/>) }
        </div>
    </div>
);