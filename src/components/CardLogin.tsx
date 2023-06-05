import * as router from '@/pages/api/router';
import styles from '@/styles/cardLogin.module.css';
import { useState } from 'react';

export default function CardLogin() {
  const [usuario] = useState({
    email: '',
    senha: '',
    service: '',
  });

  function loginUsuario(e: any) {
    usuario.service = e.target.name;
    router.apiPost(usuario, 'usuario');
  }

  return (
    <div className={styles.card}>
      <h2>Login</h2>
      <label htmlFor="email">Digite seu email:</label>
      <input id="email" name="email" type="email" onChange={(e) => (usuario.email = e.target.value)} />
      <label htmlFor="password">Digite sua senha:</label>
      <input id="password" name="password" type="password" onChange={(e) => (usuario.senha = e.target.value)} />
      <a href="">Esqueceu sua senha?</a>
      <button name="loginUsuario" onClick={loginUsuario}>
        Entrar
      </button>
    </div>
  );
}
