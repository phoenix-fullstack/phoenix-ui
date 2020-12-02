import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { library, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'warning' | 'dark' | 'light';

interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
    icon: IconProp;
    size?: SizeProp;
}

export const Icon: FC<IconProps> = ({ theme, className, ...restProps }) => {
    const classes = classNames('icon', className, {
        [`icon-${theme}`]: theme
    });
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
};

export default Icon;