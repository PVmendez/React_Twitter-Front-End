import UserNameInput from "../components/UserNameInput";
import UserPasswordInput from "../components/UserPasswordInput";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/Token/tokenSlice";
import { addUser } from "../redux/User/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    username: "",
    password: "",
  });

  const inputHandle = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const loginHandle = async (e) => {
    
    try {
      e.preventDefault();
      if (e.target.value === "") {
        return console.log("no enviar");
      }
      let response = await axios({
        method: "POST",
        url: "http://localhost:8000/login",
        data: datos,
      });
      dispatch(addToken(response.data.datos.token));
      dispatch(addUser(response.data.datos._doc));
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
    
    
  };

  return (
    <>
      <div className="landing-bg d-flex align-items-center vh-100">
        <div className="container w-50 rounded-3 bg-black p-5 shadow-lg">
          <div>
            <a className="text-decoration-none" href="/">
              Volver
            </a>
            <h2 className="text-white mb-4">Iniciar sesión</h2>
            <form onSubmit={loginHandle}>
              <UserNameInput inputHandle={inputHandle} datos={datos} />
              <UserPasswordInput inputHandle={inputHandle} datos={datos} />
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
