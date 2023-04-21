import {ImgHTMLAttributes} from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export interface PostProps {
    post: PostType;
}


export interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}