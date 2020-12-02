import React, { FC, HTMLAttributes, ReactNode, useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import Transition from '../transition';

type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface BaseAlertProps {
    type?: AlertType;
    isClose?: boolean;
    title: string | ReactNode;
    onClose?: (currentEvent: HTMLDivElement) => any;
}

export type AlertProps = BaseAlertProps & HTMLAttributes<HTMLDivElement>;

export const Alert: FC<AlertProps> = ({
    type,
    isClose,
    className,
    title,
    onClose,
    children,
    ...restProps
}) => {
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type
    });
    const [show, setShow] = useState<boolean>(true);
    const alertRef = useRef<HTMLDivElement>();

    const close = useCallback(() => {
        if (onClose) {
            onClose(alertRef.current!);
        }
        setShow(false);
    }, [onClose]);

    return (
        <Transition timeout={300} in={show} animation="zoom-in-left">
            <div className={classes} ref={alertRef as any} {...restProps}>
                {children ? <h3>{title}</h3> : <span>{title}</span>}
                {children && <span>{children}</span>}
                {isClose &&
                    <span className="close" onClick={close}>
                        <Icon icon="times" />
                    </span>
                }
            </div>
        </Transition>
    )
};

Alert.defaultProps = {
    type: 'default',
    isClose: true
};

export default Alert;
