import * as React from "react";
const axios = require('axios').default;
import { FeaturesList } from "../features/feature-list/feature-list";
import { IFeature, IReview } from "../../interfaces";
import './app.scss';
import { ReviewButtonList } from "../reviews/review-btn-list/review-btn-list";
import { ReviewList } from "../reviews/review-list/review-list";

const categories: string[] = [
    "All",
    "Community",
    "Dog Owners",
    "Parents",
    "Commute"
] 

type AppState = {
    activeReviewType: string;
    seeMoreFeatures: boolean;
    features: IFeature[],
    reviews: IReview[],
    slideVal: string
}

interface AppProps { }

export class App extends React.Component<{}, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            activeReviewType: 'All',
            seeMoreFeatures: false,
            features: [],
            reviews: [],
            slideVal: '0'
        }

        axios.get('/features')
            .then( (result: { data: IFeature[] }) => this.setState({ features: result.data }))
            .catch( (err: Error) => console.log(err))

        axios.get('/reviews')
            .then( (result: { data: IReview[] }) => this.setState({ reviews: result.data }))
            .catch( (err: Error) => console.log(err))
    }

    setActiveState(event: React.MouseEvent) {
        const target = event.target as HTMLButtonElement;
        this.setState({
            activeReviewType: target.value
        })
    }

    filterActiveReviews(reviews: IReview[]) : IReview[] {
        const active = this.state.activeReviewType;
        return reviews.filter(review => active === 'All' || active === review.reviewType);
    }

    filterVisibleFeatures(features: IFeature[]) : IFeature[] {
        const active = this.state.seeMoreFeatures;
        return features.filter((feature, i) => i < 6 || active);
    }

    toggleVisibleFeatures() {
        console.log("hi")
        this.setState({
            seeMoreFeatures: !this.state.seeMoreFeatures
        })
    }

    toggleSlide() {
        console.log("toggle")
        this.setState({
            slideVal: this.state.slideVal === '0' ? '-100' : '0'
        })
    }

    render() {
        return (
            <div id="what-they-say">
                <div>
                    <div className="flex-container">
                        <h3 className="what-locals-say">What Locals Say about Buena Vista</h3>
                        <div id="what-is-said">
                            <div id="how-many">
                                <span>At least 50 Trulia users voted on each feature.</span> {/* Change 50 to dynamic */}
                            </div>
                            <FeaturesList features={this.filterVisibleFeatures(this.state.features)} />
                            <div className="see-toggle"><button type="button" onClick={this.toggleVisibleFeatures.bind(this)}>See All</button></div>
                            <div id="methodology">
                                <span><a href="/" target="_blank">Learn more</a> about our methodology.</span>
                            </div> 
                            <ReviewButtonList categories={categories} active={this.state.activeReviewType} setActive={this.setActiveState.bind(this)}/>
                            <ReviewList reviews={this.filterActiveReviews(this.state.reviews)} slideVal={this.state.slideVal} toggleSlide={this.toggleSlide.bind(this)}/>
                            <section>
                                <button type="button">Add Your Review</button>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}