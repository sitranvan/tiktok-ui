import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import styels from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styels);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // Nếu có children sẽ là obj convert sang boolean
            const isParrent = !!item.children; // true

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
