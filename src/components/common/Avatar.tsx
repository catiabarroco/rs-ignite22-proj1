import {AvatarProps} from "@shared/types/types";


export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
    return (
        <img
            className={`h-14 w-14 border rounded rounded-xl border-primary ${hasBorder ? 'h-16 w-16 outline outline-4 outline-primary  border-4 border-secondary-800' : ''}`}
            {...props}
        />
    );
}