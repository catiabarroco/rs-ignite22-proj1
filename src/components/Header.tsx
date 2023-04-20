import {SpritesCategories} from "@enums/SpritesCategories";
import {SpriteIcon} from "@components/common/SpriteIcon";

export default function Header() {
    return (
        <header className="h-20 bg-secondary-800 font-bold text-3xl flex gap-5 items-center justify-center">
            <SpriteIcon
                category={SpritesCategories.COMMON}
                name="ignite-icon"
                title="ignite icon"
                className="h-16 w-16"
            />
            <strong>Ignite Feed</strong>
        </header>
    )
}