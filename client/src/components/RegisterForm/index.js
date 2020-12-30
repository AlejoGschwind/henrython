import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

const RegisterForm = () => {

  const { register, errors, watch, handleSubmit } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="RegisterForm__wrapper">
      
      <i id="icono-login" class="material-icons">account_circle</i>
      
      <label>
        Nombres:
        <input name="firstName" ref={register({ required: "Ingrese sus nombres." })} />
        {errors.firstName && <span className="RegisterForm__error_msg">{errors.firstName.message}</span>}
      </label>

      <label>
        Apellidos:
        <input name="lastName" ref={register({ required: "Ingrese sus apellidos." })} />
        {errors.lastName && <span className="RegisterForm__error_msg">{errors.lastName.message}</span>}
      </label>

      <label>
        Email:
        <input name="email" type="email" ref={register({ required: "Ingrese su email." })} />
        {errors.email && <span className="RegisterForm__error_msg">{errors.email.message}</span>}
      </label>

      <label>
        Nombre de Usuario:
        <input name="username" ref={register({ required: "Ingrese su nombre de usuario." })} />
        {errors.username && <span className="RegisterForm__error_msg">{errors.username.message}</span>}
      </label>

      <label>
        Contraseña:
        <input name="password" type="password" ref={register({
        required: "Ingrese su contraseña.",
        minLength: {
          value: 8,
          message: "La contraseña debe tener 8 caracteres como minimo."
        },
      })} />
        {errors.password && <span className="RegisterForm__error_msg">{errors.password.message}</span>}
      </label>

      <label>
        Repita la contraseña:
        <input name="repassword" type="password" ref={register({
        required: true,
        validate: value => value === password.current || "Las contraseñas no coinciden."
      })} />
        {errors.repassword && <span className="RegisterForm__error_msg">{errors.repassword.message}</span>}
      </label>

      <label>
        
        <select className="browser-default" name="role" ref={register({ required: true })}>
          <option value="" disabled selected>--- Seleccione su Rol ---</option>
          <option value="student">Estudiante</option>
          <option value="proffesor">Profesor</option>
        </select>
        {errors.role && <span className="RegisterForm__error_msg">{errors.role.message}</span>}
      </label>

      <input className="btn waves-effect waves-light " type="submit" name="action" />
    </form>
  );
};

export default RegisterForm;
