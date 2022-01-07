import cx from 'classnames';
import { StandardProps } from '../types';

import styles from './Card.module.scss';

type CardProps = StandardProps & {
    onClick?: React.MouseEventHandler;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    onClick
}) => <div
    className={cx(styles['card'], className)}
    onClick={onClick}
>
        {children}
    </div>;