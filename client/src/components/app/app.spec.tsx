

import React from "react";
import { shallow } from 'enzyme';
import { App } from "./app";

describe('Link', () => {
    it("2 + 2 = 4 in TS", () => {
        const a: number = 2;
        const b: number = 2;
    
        expect(a + b).toBe(4);
    });

  it('Renders link to Google', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('Renders link to Google with classname', () => {
    const link = shallow(<App />);
    expect(link).toMatchSnapshot();
  });
});