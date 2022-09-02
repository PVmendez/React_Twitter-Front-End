import UserNameInput from "../components/UserNameInput";
import UserPasswordInput from "../components/UserPasswordInput";

function Register() {
  return (
    <>
      <div className="landing-bg d-flex align-items-center h-100">
        <div className="container w-50 rounded-3 bg-black p-5 shadow-lg my-5">
          <form action="/register" method="POST">
            <div>
              <a className="text-decoration-none" href="/">
                Volver
              </a>
              <h2 className="text-white">Crea tu cuenta</h2>
              <p className="text-primary">Paso 1 de 3 - Información de registro</p>
              <UserNameInput />
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control bg-black"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
                <label className="text-white" for="email">
                  * Correo electrónico
                </label>
              </div>
              <UserPasswordInput />
            </div>
            <div>
              <p className="text-primary">Paso 2 de 3 - Datos personales</p>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-black"
                  id="firstName"
                  name="firstName"
                  placeholder="name@example.com"
                  required
                />
                <label className="text-white" for="firstName">
                  Nombre
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-black"
                  id="lastName"
                  name="lastName"
                  placeholder="name@example.com"
                  required
                />
                <label className="text-white" for="lastName">
                  Apellido
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control bg-black"
                  id="age"
                  name="age"
                  placeholder="name@example.com"
                  required
                />
                <label className="text-white" for="lastName">
                  Edad
                </label>
              </div>
            </div>
            <div>
              <p className="text-primary">Paso 3 de 3 - Perfil</p>

              <div className="form-floating">
                <textarea
                  className="form-control bg-black border border-white"
                  placeholder="Leave a comment here"
                  id="description"
                  name="description"
                  style={{ height: "100px" }}
                ></textarea>
                <label className="text-white" for="description">
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
