import React from 'react';

type ButtonProps = {
    disabled?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    font?: 'font-bold' | 'font-medium';
    size?: keyof typeof sizeVariants;
    variant?: keyof typeof buttonVariants;
} & JSX.IntrinsicElements['button'];

export const buttonVariants = {
    primaryBorder: {
        default: 'border border-primary bg-transparent hover:bg-primary text-primary hover:text-secondary-white',
        disabled:
            'bg-transparent border-brand-secondary-200 border text-font-light',
    },
    primary: {
        default: 'bg-primary hover:bg-primary-light text-secondary-white',
        disabled:
            'cursor-not-allowed opacity-50 bg-primary',
    },
    iconStyleDangerHover: {
        default: 'text-secondary-400 hover:text-danger',
        disabled: '',
    },
    iconStylePrimaryHover: {
        default: 'text-secondary-400 hover:text-primary',
        disabled: '',
    },
} as const;

const sizeVariants = {
    xsmall: 'h-7 text-body-12',
    small: 'h-9 px-4 text-caption-15',
    medium: 'h-11 px-[18px] py-[9px] text-body-16',
    large: 'h-12 px-5 py-[9.5px] text-body-18',
    extraLarge: 'py-[9.5px] md:py-[14px] text-body-20',
} as const;

const Button = (
    {
        variant = 'primary',
        size = 'medium',
        disabled = false,
        type = 'button',
        fullWidth = false,
        rounded = false,
        font = 'font-bold',
        onClick,
        className = '',
        ...rest
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
) => {
    const buttonStyle =
        buttonVariants[variant][disabled ? 'disabled' : 'default'];
    const buttonSize = sizeVariants[size];

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            ref={ref}
            type={type}
            className={`${font} text-center ${buttonStyle} ${buttonSize} ${
                fullWidth ? 'w-full' : ''
            } ${rounded ? 'rounded-full' : ''} ${className}`}
            {...rest}
        />
    );
};

Button.displayName = 'Button';

export default React.forwardRef(Button);
