import styles from '../styles/cardLogin.module.css';

export default function CardLogin() {
  return (
    <div className={styles.card}>
      <h2>Login</h2>
      <label htmlFor="">Digite seu email:</label>
      <input type="text" />
      <label htmlFor="">Digite sua senha:</label>
      <input type="text" />
      <a href="">Esqueceu sua senha?</a>
      <button>Entrar</button>
    </div>
  );
}
