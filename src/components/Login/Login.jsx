import React from "react";
import Vetor from "./img/vetor.png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
  const navegar = useNavigate();

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Esse campo é obrigatório."),
    password: yup
      .string()
      .min(8, "A senha deve conter 8 caractéres")
      .required("Esse é um campo obrigatório"),
  });

  const handleClickLogin = (values) => {
    axios
      .post("https://2ab6-2804-14c-70-243e-e864-cc7c-70cd-a546.ngrok-free.app/api/v1/user/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);

        if (response.status == 200) {
          navegar("/profile-choice");
        } else {
          alert(response.data); // Mensagem do servidor, como "Usuário já está cadastrado."
        }
      });
  };

  return (
    <section className="LoginPage">
      <div className="layout">
        <div className="fieldInformations">
          <div className="titleInf">
            <h2>Bem-vindo de volta!</h2>
          </div>
          <Formik
            className="informations"
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            <Form className="form-login">
              <div className="input-login">
                <Field
                  name="email"
                  type="email"
                  className="login-field"
                  placeholder="Email"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <Field
                name="password"
                type="password"
                className="login-field"
                placeholder="Senha"
              />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />

              <button
                className="button"
                type="submit"
                style={{
                  width: "20vh",
                  maxWidth: '100%',
                  marginLeft: '15px',
                  backgroundColor: "var(--honey)",
                  fontWeight: "700",
                  fontSize: "2rem",
                  borderRadius: "20px",
                  boxShadow: "6px -6px 0px var(--beehive)",
                  color: "var(--stinger)",
                }}
              >
                Entrar
              </button>
            </Form>
          </Formik>
        </div>
        <img src={Vetor} />
      </div>
    </section>
  );
};
export default Login;
