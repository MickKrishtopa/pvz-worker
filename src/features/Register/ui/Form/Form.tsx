import { Input } from '@chakra-ui/react';

import styles from './Form.module.scss';

interface IProps {
    title: string;
}

const Form = ({ title }: IProps) => {
    return (
        <div className={styles.form__wrapper}>
            <h2 className={styles.form__title}>{title}</h2>
            <form className={styles.form}>
                <div className={styles.form__row}>
                    <Input type="tel" placeholder="Телефон" />
                    <Input type="email" placeholder="Email" />
                </div>
                <Input type="password" placeholder="Пароль" />
                <Input type="text" placeholder="Имя" />

                <input type="submit" />
            </form>
        </div>
    );
};

export { Form };
