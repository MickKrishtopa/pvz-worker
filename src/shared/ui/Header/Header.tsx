import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.header__logo}>Пункт поиска персонала</h1>
            <button className={style['header__login-btn']}>Войти</button>
        </header>
    );
};

export { Header };
