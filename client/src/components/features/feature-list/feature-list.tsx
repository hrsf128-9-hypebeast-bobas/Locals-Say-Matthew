import * as React from "react";
import { IFeature } from "../../../interfaces";
import { Features } from "../feature/feature";
import './feature-list.scss';


export interface FeaturesListProps { features: IFeature[] }

export const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => (
        <div id="feature-list">
            { features.map( feature => {
                if (feature.pathData !== null) return (<Features key={ feature._id } data={ feature }/>)
            }) }
        </div>
    );