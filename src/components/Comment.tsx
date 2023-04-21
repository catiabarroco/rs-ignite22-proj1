import {Avatar} from "@components/common/Avatar";
import Button from "@components/common/Button";
import {SpritesCategories} from "@enums";
import {SpriteIcon} from "@components/common/SpriteIcon";
import {useState} from "react";
import {CommentProps} from "@shared/types/types";


export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className="flex gap-7">

            <Avatar hasBorder={false} src="https://github.com/catiabarroco-xgeeks.png" alt="avatar"/>

            <div className="w-full">
                <div className="bg-secondary-700 p-4 w-full rounded rounded-xl mb-4">
                    <header className="flex justify-between pb-4">
                        <div className="flex flex-col">
                            <strong>Cátia Barroco</strong>
                            <time className="text-secondary-400" title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <Button variant="iconStyleDangerHover" size="xsmall" onClick={handleDeleteComment} title="Delete comment">
                            <SpriteIcon
                                category={SpritesCategories.COMMON}
                                name="trash"
                                title="trash"
                                size="xl"
                            />
                        </Button>
                    </header>

                    <p className="text-secondary-100">{content}</p>
                </div>

                <footer>
                    <Button variant="iconStylePrimaryHover" size="xsmall" className="flex gap-2 " onClick={handleLikeComment}>
                        <SpriteIcon
                            category={SpritesCategories.COMMON}
                            name="thumbs-up"
                            title="thumbs up"
                            size="xl"
                        />
                        Like <span>{likeCount}</span>
                    </Button>
                </footer>
            </div>
        </div>
    )
}