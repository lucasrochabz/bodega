import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),

  password: yup
    .string()
    .min(3, 'Senha deve ter mínimo de 3 caracteres')
    .required('Senha é obrigatória'),
});
