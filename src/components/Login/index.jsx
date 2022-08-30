import { Link } from "react-router-dom";
import "./styles.css";

function Login() {
  return (
    <>
      <div className="container-login">
        <div className="content-box">
          <div className="form-box">
            <h2>Ocean Login</h2>
            <form>
              <div className="input-box">
                <span>Usuario</span>
                <input type="email" placeholder="@mail.com" />
              </div>

              <div className="input-box">
                <span>Senha</span>
                <input type="password" placeholder="senha" />
              </div>

              <div className="remember">
                <label>
                  {" "}
                  <input type="checkbox" />Lembrar{" "}
                </label>
                <a href="#">Esqueceu a Senha?</a>
              </div>

              <div>
                <button className="input-box1">ENTRAR</button>
              </div>

              <div className="input-box">
                <p>
                  Não tem uma conta? <Link to="/cadastro">Inscrever-se</Link>
                </p>
              </div>
            </form>
            <h3>Logar Com</h3>
            <ul className="ul">
              <li>
                <a href="https://facebook.com" target="_blank">
                  <img src={require("../../assets/Facebook.png")} />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  <img src={require("../../assets/Google.png")} />
                </a>
              </li>
              <li>
                <a href="https:linkedin.com" target="_blank">
                  <img src={require("../../assets/Linkedin.png")} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
