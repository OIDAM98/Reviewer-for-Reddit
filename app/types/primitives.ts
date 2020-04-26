export type Post = {
    img: string | undefined, // URL of post, may not contain one
    thumbnail: Thumbnail | undefined // Preview of post
    title: string,
    author: string,
    selftext: string, // Text of post 
    submition: Date, // Date when it was uploaded
    upvotes: number,
    comments: number,
    is_sticky: boolean,
    subreddit: string,
    permalink: string // Link to Reddit of this post
}

export type Thumbnail = {
    height: number,
    width: number,
    img: string
}

export interface Subreddit {
    name: string
}