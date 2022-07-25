import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://images.unsplash.com/photo-1658702983847-e974f4ed2d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="Khanh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Bùi Thị Ngọc Khánh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>bonggyeu</span>
            </div>
        </div>
    );
}

export default AccountItem;
