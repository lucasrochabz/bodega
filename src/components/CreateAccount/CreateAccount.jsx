import './CreateAccount.css';

export const CreateAccount = () => {
  return (
    <div>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="senha">Senha</label>
      <input type="text" id="senha" name="senha" />
    </div>
  );
};
