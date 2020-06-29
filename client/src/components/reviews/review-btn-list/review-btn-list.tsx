import * as React from "react";
import './review-btn-list.scss';

export interface ReviewButtonListProps {
    categories : string[];
    active: string;
    setActive: (event: React.MouseEvent) => void;
}

export const ReviewButtonList: React.FC<ReviewButtonListProps> = ({ categories, active, setActive }) => (
    <div className="rb"> 
        { categories.map((category, i) => <button key={category} value={category} onClick={setActive} className={ category === active ? 'cat-btn-active' : 'cat-btn'}>{category}</button>) }
    </div>
);