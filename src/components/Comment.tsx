import {Avatar} from "@components/common/Avatar";
import Button from "@components/common/Button";

export function Comment() {
    return (
        <div className="flex gap-7">

            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className="flex flex-col gap-4">
                <div className="bg-secondary-700 p-4 flex flex-col gap-4 w-full rounded rounded-xl">
                    <header className="flex">
                        <div className="flex flex-col">
                            <strong>Diego Fernandes</strong>
                            <time className="text-secondary-400" title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <Button className="rounded rounded-lg" variant="primaryBorder" size="large">D</Button>
                    </header>

                    <p className="text-secondary-100">Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>

                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}