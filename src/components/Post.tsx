import {Avatar} from "@components/common/Avatar";
import Button from "@components/common/Button";
import {Comment} from "@components/Comment";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {enAU} from "date-fns/locale";

export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: enAU,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enAU,
        addSuffix: true
    });
    return (
        <article className="bg-secondary-800 rounded rounded-xl 2/3 p-10 mb-5">
            <header className="flex justify-between text-secondary-400 items-center pb-3">
                <div className="flex gap-7">
                    <Avatar src={author.avatarUrl}/>
                    <div className="flex flex-col gap-2">
                        <strong>{author.name}</strong>
                        <span className="text-secondary-400">{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className="text-secondary-300 flex flex-col gap-5 py-6">
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p className="text-primary"><a href="#">{line.content}</a></p>
                }
            })}




            </div>

            <form className="flex flex-col border-t gap-4 pb-8">
                <strong className="pt-6">Deixe seu feedback</strong>

                <textarea className="bg-secondary-900 p-4 rounded rounded-xl focus:border focus:border-primary hover:border hover:border-primary placeholder:text-secondary-400 text-secondary-300"
                    placeholder="Deixe um comentário..."
                />

                <footer>
                    <Button className="rounded rounded-lg" variant="primaryBorder" size="large">Publicar</Button>
                </footer>
            </form>
            <Comment />
        </article>
    )
}