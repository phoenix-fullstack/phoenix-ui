import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
    timeout: number;
    in: boolean;
}

export const Transition: FC<TransitionProps> = ({
    classNames,
    animation,
    wrapper,
    children,
    ...restProps
}) => {
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )
};

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
};

export default Transition;
