import styles from '@/styles/cardLogin.module.css';
import { useState } from 'react';

export default function CardLogin() {
  const [usuario] = useState({
    nome: '',
    email: '',
    senha: '',
    service: '',
  });

  const [form, setForm] = useState('login');

  function loginUsuario(event: React.FormEvent) {
    event.preventDefault();
    // usuario.service = 'loginUsuario';
    // router.apiPost(usuario, 'usuario');
    console.log('Login');
  }

  function cadastroUsuario(event: React.FormEvent) {
    event.preventDefault();
    // usuario.service = 'cadastroUsuario;
    // router.apiPost(usuario, 'usuario');
    console.log('Cadastro');
  }

  return (
    <form onSubmit={form == 'login' ? loginUsuario : cadastroUsuario} className={styles.card}>
      {form == 'login' ? (
        <>
          <h2>Login</h2>
          <label htmlFor="email">Digite seu email:</label>
          <input id="email" type="email" onChange={(e) => (usuario.email = e.target.value)} />
          <label htmlFor="password">Digite sua senha:</label>
          <input id="password" type="password" onChange={(e) => (usuario.senha = e.target.value)} />
          <a className={styles.forgotPassword} href="">
            Esqueceu sua senha?
          </a>
          <button type="submit">Entrar</button>
          <div className={styles.registerContainer}>
            <p>Primeiro acesso?</p>
            <span onClick={() => setForm('cadastro')}>Cadastre-se</span>
          </div>
        </>
      ) : (
        <>
          <h2>Cadastro</h2>
          <label htmlFor="email">Digite seu nome:</label>
          <input id="nome" type="text" onChange={(e) => (usuario.email = e.target.value)} />
          <label htmlFor="email">Digite seu email:</label>
          <input id="email" type="email" onChange={(e) => (usuario.email = e.target.value)} />
          <label htmlFor="password">Digite sua senha:</label>
          <input id="password" type="password" onChange={(e) => (usuario.senha = e.target.value)} />
          <button type="submit">Cadastrar</button>
          <div className={styles.registerContainer}>
            <p>Já possui conta?</p>
            <span onClick={() => setForm('login')}>Fazer login</span>
          </div>
        </>
      )}
    </form>
  );
}
