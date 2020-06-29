export interface IFeature {
    _id: string;
    text: string;
    pathData: IPathData;
    specialPath?: ISpecial;
    helpfulPercent: number;
}

interface IPathData {
    d?: string;
    fill?: string;
    fillRule?: "nonzero" | "evenodd" | "inherit";
}

interface ISpecial {
    gData: IPathData;
    paths: IPathData[];
}

export interface IReview {
    name: string;
    created_at: string; // change to date
    content: string;
    likes: number;
    reviewType: "Community" | "Dog Owners" | "Parents" | "Commute";
}