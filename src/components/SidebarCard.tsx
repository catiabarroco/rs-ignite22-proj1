import Button from "@components/common/Button";
import {SpritesCategories} from "@enums";
import {SpriteIcon} from "@components/common/SpriteIcon";
import {Avatar} from "@components/common/Avatar";

export function SidebarCard() {
    return (
        <article className="bg-secondary-800 w-1/3 rounded rounded-xl">
            <div className="w-full h-20 bg-[url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50')]"/>


            <div className="flex flex-col items-center -mt-8 pb-8">
                <Avatar src="https://github.com/catiabarroco-xgeeks.png"/>
                <div className="text-secondary-400 font-bold pt-4">Cátia Barroco</div>
                <div className="text-secondary-400 text-sm">Front-end Developer</div>
            </div>

            <footer className="flex border-t border-secondary-600 p-8 justify-center bg-secondary-800">
                <Button className="flex gap-2 rounded rounded-lg items-center" size="large">
                    <SpriteIcon
                        category={SpritesCategories.COMMON}
                        name="edit"
                        title="edit profile"
                        size="lg"
                    />
                    Edita seu perfil
                </Button>
            </footer>




        </article>
    )
}