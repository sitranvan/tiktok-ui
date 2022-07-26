import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    onClick,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
    className,
    type,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    // passProps lấy tất cả thuộc tính vd target=_blank...
    let Component = 'button';
    const props = { onClick };
    // Trường hợp disbaled cần phải loại bỏ các event
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        // Khi nào class được add nó sẽ thêm vào classes => và được module hóa
        // Nếu truyền ngắn gọn dùng type  [type]: type. small,large ...
        // [className]: className, dùng custom các style riêng

        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
        leftIcon,
        rightIcon,
    });

    return (
        <Component className={classes} {...props} {...passProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
