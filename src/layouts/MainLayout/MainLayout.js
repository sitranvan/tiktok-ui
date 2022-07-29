import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Slidebar from './Slidebar/Sidebar';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);
function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Slidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default MainLayout;
