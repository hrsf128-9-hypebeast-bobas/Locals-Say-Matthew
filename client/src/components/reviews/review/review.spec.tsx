

import React from "react";
import { shallow } from 'enzyme';
import { Review } from "./review";
import { IReview } from "../../../interfaces";

describe('Review', () => {
    let reviewData: IReview = {
        name: 'Matthew H',
        content: 'This is a review',
        likes: 20,
        created_at: 'yup',
        reviewType: "Community"
    }


    it("2 + 2 = 4 in TS", () => {
        const a: number = 2;
        const b: number = 2;
    
        expect(a + b).toBe(4);
    });

  it('Renders link to Google', () => {
    const review = shallow(<Review review={reviewData} backgroundColor={'blue'} />);
    expect(review).toMatchSnapshot();
  });

  it('Renders link to Google with classname', () => {
    const review = shallow(<Review review={reviewData} backgroundColor={'blue'} />);
    expect(review).toMatchSnapshot();
  });
});
