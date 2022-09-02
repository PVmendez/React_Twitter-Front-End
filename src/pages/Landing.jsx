import "./Landing.css";

function Landing() {
  return (
    <>
      <div className="row vh-100 m-0 ">
        <div className="col-6 landing-bg" id="landingImage"></div>
        <div className="col-6 bg-black d-flex align-items-center">
          <div className="text-white ms-4">
            <h1>Bienvenido a Twitter</h1>
            <h2 className="h3">Unete a twitter</h2>
            <a className="btn bg-white text-black" href="/register">
              Registrarse
            </a>
            <div className="d-flex align-items-center">
              <div className="divider"></div>
              <div>
                <span>o</span>
              </div>
              <div className="divider"></div>
            </div>
            <p className="mb-2">Ya tienes una cuenta?</p>
            <a className="btn bg-primary text-white" href="/login">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
