import { Logo } from '../Logo/Logo';

import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <button className={style['header__login-btn']}>Войти</button>
        </header>
    );
};

export { Header };
