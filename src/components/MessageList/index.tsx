import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora do DoWhile 2021
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/heitor3.png" alt="Heitor Fernandes Pires" />
            </div>
            <span>Heitor Fernandes Pires</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora do DoWhile 2021
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/heitor3.png" alt="Heitor Fernandes Pires" />
            </div>
            <span>Heitor Fernandes Pires</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora do DoWhile 2021
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/heitor3.png" alt="Heitor Fernandes Pires" />
            </div>
            <span>Heitor Fernandes Pires</span>
          </div>
        </li>
      </ul>
    </div>
  );
}