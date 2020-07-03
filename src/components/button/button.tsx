import React from 'react';
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


const Button: React.FC<BaseButtonProps> = (props) => {
    const { className, disabled, size, btnType, href, children } = props;
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
            >
                {children}
            </a>
        )
    }
    return (
        <button
            className={classes}
            disabled={disabled}
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
