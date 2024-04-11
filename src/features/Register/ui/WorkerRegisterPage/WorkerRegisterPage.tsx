import { Form } from '../Form/Form';

import styles from './WorkerRegisterPage.module.scss';

const WorkerRegisterPage = () => {
    return (
        <div className={styles['worker-register-page']}>
            <Form title="Кабинет регистрации соискателя:"></Form>
        </div>
    );
};

export { WorkerRegisterPage };
