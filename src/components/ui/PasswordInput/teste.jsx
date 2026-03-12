// fix: resolver isso
const PasswordInput = ({ label, name, id, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Input
        label={label}
        type={showPassword ? 'text' : 'password'}
        name={name}
        id={id}
        {...props}
      />

      <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
};
