import "bootstrap/dist/css/bootstrap.min.css";
import UserNameInput from "../components/UserNameInput";
import UserPasswordInput from "../components/UserPasswordInput";

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
              <UserNameInput />
              <UserPasswordInput />
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
