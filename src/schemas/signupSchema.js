import * as yup from 'yup';

export const signupSchema = yup.object({
  firstName: yup.string().required(),

  lastName: yup.string().required(),

  zipCode: yup.number().required(),

  street: yup.string().required(),

  number: yup.number().required(),

  neighborhood: yup.string().required(),

  city: yup.string().required(),

  state: yup.string().required(),

  email: yup.string().email('Email inválido').required('Email é obrigatório'),

  password: yup
    .string()
    .min(3, 'Senha deve ter mínimo de 3 caracteres')
    .required('Senha é obrigatória'),
});
