import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Image({ src, alt, fallBack = images.noImage, className }, ref) {
    const [srcFallback, setSrcFallback] = useState('');
    const handleError = () => {
        setSrcFallback(fallBack);
    };
    return (
        <img
            className={cx(styles.wrapper, className)}
            ref={ref}
            src={srcFallback || src}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
