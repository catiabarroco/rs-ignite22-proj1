import {SpritesCategories} from "@enums";


const sizeVariants = {
    // 32px
    '2xl': 'w-8 h-8',
    // 24px
    xl: 'w-6 h-6',
    // 20px
    lg: 'w-5 h-5',
    // 16px
    md: 'w-4 h-4',
    // 14px
    sm: 'w-3.5 h-3.5',
    // 12px
    xs: 'w-3 h-3',
} as const;

type Props = {
    title?: string;
    name: string;
    size?: keyof typeof sizeVariants;
    category: SpritesCategories;
    className?: string;
    rotateWhenRtl?: boolean;
    onClick?: () => void;
};

export const SpriteIcon = ({
                               title,
                               name,
                               size,
                               className = '',
                               rotateWhenRtl = false,
                               category,
                               onClick,
                               ...props
                           }: Props) => {
    const spritePath = `/assets/${category}-sprite.svg`;

    const svgStyle =
        !size && !className
            ? sizeVariants['md']
            : `${className} ${size ? sizeVariants[size] : ''} ${
                rotateWhenRtl ? 'rtl:-scale-x-100' : ''
            }`;

    return (
        <svg className={svgStyle} onClick={onClick} {...props}>
            {title ? <title>{title}</title> : null}
            <use href={`${spritePath}#${name}`}></use>
        </svg>
    );
};
