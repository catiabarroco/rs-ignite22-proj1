import {Avatar} from "@components/common/Avatar";
import Button from "@components/common/Button";
import {Comment} from "@components/Comment";
import { format, formatDistanceToNow } from 'date-fns';
import {enAU} from "date-fns/locale";
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";
import {PostProps} from "@shared/types/types";

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Nice post'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: enAU,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: enAU,
        addSuffix: true
    });

    function handleCrateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className="bg-secondary-800 rounded rounded-xl 2/3 p-10 mb-5">
            <header className="flex justify-between text-secondary-400 items-center pb-3">
                <div className="flex gap-7">
                    <Avatar src={post.author.avatarUrl}/>
                    <div className="flex flex-col gap-2">
                        <strong>{post.author.name}</strong>
                        <span className="text-secondary-400">{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className="text-secondary-300 flex flex-col gap-5 py-6">
            {post.content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content} className="text-primary"><a href="#">{line.content}</a></p>
                }
            })}

            </div>

            <form onSubmit={handleCrateNewComment} className="flex flex-col border-t gap-4 pb-8">
                <strong className="pt-6">Leave your feedback</strong>

                <textarea className="bg-secondary-900 p-4 rounded rounded-xl focus:border focus:border-primary hover:border hover:border-primary placeholder:text-secondary-400 text-secondary-300"
                    placeholder="Leave your comment..."
                          name="comment"
                          value={newCommentText}
                          onChange={handleNewCommentChange}
                          onInvalid={handleNewCommentInvalid}
                          required
                />

                <footer>
                    <Button type="submit" className="rounded rounded-lg" variant="primary" size="large" disabled={isNewCommentEmpty}>Publish</Button>
                </footer>
            </form>


            {comments.map(comment => {
                return (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                )
            })}
        </article>
    )
}