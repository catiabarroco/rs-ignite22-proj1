import {Avatar} from "@components/common/Avatar";
import Button from "@components/common/Button";
import {SpritesCategories} from "@enums";
import {SpriteIcon} from "@components/common/SpriteIcon";

export function Comment() {
    return (
        <div className="flex gap-7">

            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className="w-full">
                <div className="bg-secondary-700 p-4 w-full rounded rounded-xl mb-4">
                    <header className="flex justify-between pb-4">
                        <div className="flex flex-col">
                            <strong>Diego Fernandes</strong>
                            <time className="text-secondary-400" title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <Button variant="iconStyleDangerHover" size="xsmall">
                            <SpriteIcon
                                category={SpritesCategories.COMMON}
                                name="trash"
                                title="trash"
                                size="xl"
                            />
                        </Button>
                    </header>

                    <p className="text-secondary-100">Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <Button variant="iconStyle" size="xsmall" className="flex gap-2 ">
                        <SpriteIcon
                            category={SpritesCategories.COMMON}
                            name="thumbs-up"
                            title="thumbs up"
                            size="xl"
                        />
                        Aplaudir <span>20</span>
                    </Button>
                </footer>
            </div>
        </div>
    )
}