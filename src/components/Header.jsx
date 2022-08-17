import styles from './Header.module.css';
import todoLogo from '../assets/Logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <header>
        <img src={todoLogo} />
      </header>
    </div>
  )
}