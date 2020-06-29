import * as React from "react";
import { IFeature } from "../../../interfaces";
import { Thumbs } from "../thumbs/thumbs";
import './feature.scss';

export interface FeatureProps { data: IFeature }

export const Features: React.FC<FeatureProps> = ({ data }) => (
    <div className="feature">
        <Thumbs data={data.helpfulPercent}/>
        <div className="featured">
            <div style={{display: 'flex', alignItems: 'center', width: '32px', height: '32px'}}>
                <div className="svgContainer" style={{width: '28px', height: '28px'}}>
                    <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d={data.pathData.d} fill={data.pathData.fill} fillRule={data.pathData.fillRule}></path>
                    </svg>
                </div>
            </div>
            <div className="f-text">
                {data.text}
            </div>
        </div>
    </div>
    
);