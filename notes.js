// teste auth
const isConnected = () => {
  const getAuth = window.localStorage.getItem('auth');
  console.log('A chave existe no localStorage?', getAuth);

  if (getAuth) {
    console.log('sim');
  } else {
    console.log('não');
  }
};

//teste
// const handleLogin = () => {
//   console.log('clicou no botão Entrar');
//   window.localStorage.setItem('auth', 'Está conectado');
// };
