import UserNameInput from "../components/UserNameInput";
import UserPasswordInput from "../components/UserPasswordInput";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [datos, setDatos] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    description: "",
  });

  const inputHandle = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const registerHandle = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      return console.log("no enviar");
    }
    let response = await axios({
      method: "POST",
      url: "http://localhost:8000/register",
      data: datos,
    });
    console.log(datos);

    document.cookie = `token=${response.data.token}; max-age=${60 * 3}; path=/; samesite=strict`;
  };
  return (
    <>
      <div className="landing-bg d-flex align-items-center h-100 landingImage">
        <div className="container w-50 rounded-3 bg-black p-5 shadow-lg my-5 ">
          <form onSubmit={registerHandle}>
            <div>
              <a className="text-decoration-none" href="/">
                Volver
              </a>
              <h2 className="text-white">Crea tu cuenta</h2>
              <p className="text-primary">Paso 1 de 3 - Información de registro</p>
              <UserNameInput inputHandle={inputHandle} datos={datos} />

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control bg-black text-white"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  onChange={inputHandle}
                  value={datos.email}
                />
                <label className="text-white" htmlFor="email">
                  * Correo electrónico
                </label>
              </div>
              <UserPasswordInput inputHandle={inputHandle} datos={datos} />
            </div>
            <div>
              <p className="text-primary">Paso 2 de 3 - Datos personales</p>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-black text-white"
                  id="firstName"
                  name="firstName"
                  placeholder="name@example.com"
                  required
                  onChange={inputHandle}
                  value={datos.firstName}
                />
                <label className="text-white" htmlFor="firstName">
                  Nombre
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-black text-white"
                  id="lastName"
                  name="lastName"
                  placeholder="name@example.com"
                  required
                  onChange={inputHandle}
                  value={datos.lastName}
                />
                <label className="text-white" htmlFor="lastName">
                  Apellido
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control bg-black text-white"
                  id="age"
                  name="age"
                  placeholder="name@example.com"
                  required
                  onChange={inputHandle}
                  value={datos.age}
                />
                <label className="text-white" htmlFor="lastName">
                  Edad
                </label>
              </div>
            </div>
            <div>
              <p className="text-primary">Paso 3 de 3 - Perfil</p>

              <div className="form-floating">
                <textarea
                  className="form-control bg-black border border-white text-white"
                  placeholder="Leave a comment here"
                  id="description"
                  name="description"
                  style={{ height: "100px" }}
                  onChange={inputHandle}
                  value={datos.description}
                ></textarea>
                <label className="text-white" htmlFor="description">
                  Description (bio)
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div>
                <button type="submit" className="mt-4 btn bg-white text-black">
                  Siguiente
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
