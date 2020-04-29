export interface Subreddit {
    subreddit: string
}

export interface PostResponse {
    img: string | null,
    thumbnail_img: string | null,
    thumbnail_width: number | null,
    thumbnail_height: number | null,
    name: string,
    title: string,
    author: string,
    selftext: string,
    submition: string,
    upvotes: number,
    comments: number,
    is_sticky: boolean,
    subreddit: string,
    permalink: string
}

export interface User {
    id: number
}

export type Success = {
    status: string
}

export type Failure = {
    status: string,
    message: JSON
}