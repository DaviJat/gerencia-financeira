import * as router from '@/pages/api/router';
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
  const [mensagemErro, setMensagemErro] = useState('');

  async function loginUsuario(event: React.FormEvent) {
    event.preventDefault();
    usuario.service = 'loginUsuario';
    const res = router.apiPost(usuario, 'usuario');

    if (usuario.email == '' || usuario.senha == '') {
      setMensagemErro('Preencha todos os campos.');
    } else {
      res.then((value) => {
        if (value.error) {
          setMensagemErro(value.error);
        } else {
          setMensagemErro('');
          console.log('Cliente encontrado');
        }
      });
    }
  }

  function cadastroUsuario(event: React.FormEvent) {
    event.preventDefault();
    usuario.service = 'cadastroUsuario';
    router.apiPost(usuario, 'usuario');
    console.log('Cadastro');
  }

  function alteraForm(form: string) {
    setMensagemErro('');
    setForm(form);
  }
  return (
    <form onSubmit={form == 'login' ? loginUsuario : cadastroUsuario} className={styles.card}>
      <h2>{form == 'login' ? 'Login' : 'Cadastro'}</h2>

      {form == 'cadastro' && (
        <>
          <label htmlFor="nome">Digite seu nome:</label>
          <input id="nome" type="text" onChange={(e) => (usuario.nome = e.target.value)} />
        </>
      )}

      <label htmlFor="email">Digite seu email:</label>
      <input id="email" type="email" onChange={(e) => (usuario.email = e.target.value)} />
      <label htmlFor="password">Digite sua senha:</label>
      <input id="password" type="password" onChange={(e) => (usuario.senha = e.target.value)} />
      {form == 'login' && (
        <a className={styles.forgotPassword} href="">
          Esqueceu sua senha?
        </a>
      )}
      {mensagemErro !== '' && <p className={styles.mensagemErro}>{mensagemErro}</p>}
      {form == 'login' ? (
        <>
          <button type="submit">Entrar</button>
          <div className={styles.registerContainer}>
            <p>Primeiro acesso?</p>
            <span onClick={() => alteraForm('cadastro')}>Cadastre-se</span>
          </div>
        </>
      ) : (
        <>
          <button type="submit">Cadastrar</button>
          <div className={styles.registerContainer}>
            <p>Já possui conta?</p>
            <span onClick={() => alteraForm('login')}>Fazer login</span>
          </div>
        </>
      )}
    </form>
  );
}
