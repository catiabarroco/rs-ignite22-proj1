import {Avatar} from "@components/common/Avatar";
import Button from "@components/common/Button";

export function Post() {
    return (
        <article className="bg-secondary-800 rounded rounded-xl 2/3 p-10">
            <header className="flex justify-between text-secondary-400 items-center pb-3">
                <div className="flex gap-7">
                    <Avatar src="https://github.com/catiabarroco-xgeeks.png"/>
                    <div className="flex flex-col gap-2">
                        <strong>Cátia Barroco</strong>
                        <span className="text-secondary-400">Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
            </header>

            <div className="text-secondary-300 flex flex-col gap-5 py-6">
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p className="text-primary"><a href="">👉 jane.design/doctorcare</a></p>
                <p className="text-primary">
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className="flex flex-col border-t gap-4">
                <strong className="pt-6">Deixe seu feedback</strong>

                <textarea className="bg-secondary-900 p-4 rounded rounded-xl focus:border focus:border-primary hover:border hover:border-primary placeholder:text-secondary-400 text-secondary-300"
                    placeholder="Deixe um comentário..."
                />

                <footer>
                    <Button className="rounded rounded-lg" variant="primaryBorder" size="large">Publicar</Button>
                </footer>
            </form>
        </article>
    )
}