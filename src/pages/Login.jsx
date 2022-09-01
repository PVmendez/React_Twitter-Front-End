import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <>
      <div className="landing-bg d-flex align-items-center vh-100">
        <div className="container w-50 rounded-3 bg-black p-5 shadow-lg">
          <div>
            <a className="text-decoration-none" href="/">
              Volver
            </a>
            <h2 className="text-white mb-4">Iniciar sesión</h2>
            <form action="/login" method="POST">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-black"
                  id="username"
                  name="username"
                  placeholder="name@example.com"
                  required
                />
                <label className="text-white" for="username">
                  Nombre de usuario
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control bg-black text-white"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <label className="text-white" for="password">
                  Contraseña
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="mt-4 btn bg-primary text-white">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
