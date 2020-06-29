import * as React from "react";
import "./review-content.scss";

export interface ReviewContentProps {
  content: string;
  backgroundColor: string;
}

export const ReviewContent: React.FC<ReviewContentProps> = ({ content, backgroundColor }) => (
  <div className="content-container">
    <div className="content-padding">
      <div className="content">
        <div className="fade" style={{ backgroundImage: `linear-gradient(rgba(0, 173, 187, 0) 0%, ${backgroundColor}` }}></div>
        <i>
          {content}
        </i>
      </div>
    </div>
  </div>
);
