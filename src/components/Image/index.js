import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';
const Image = forwardRef(({ className, src, alt, fallback: propFallback = images.errorImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleFallback = () => {
        setFallback(propFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleFallback}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
