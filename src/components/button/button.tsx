import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

type ButtonSize = 'lg' | 'sm';
type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type NativeAnchorProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;

export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        href,
        children,
        ...restProps
    } = props;

    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    }, className);

    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    }
    return (
        <button
            className={classes}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
};

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button;
