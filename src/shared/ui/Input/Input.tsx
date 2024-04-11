import styles from './Input.module.scss';

interface IProps {
    type: string;
    placeholder: string;
}

const Input = ({ type, placeholder }: IProps) => {
    return (
        <>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
};

export { Input };
