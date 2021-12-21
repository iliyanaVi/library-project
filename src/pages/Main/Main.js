import Loginform from "../../components/LoginForm/Loginform";
import Home from "../Home";

import { useAuthContext } from "../../hooks/useAuthContext";

import "./Main.css";

function Main(props) {
  const { user } = useAuthContext();

  return (
    <section>
      <div className="main-container wrapper">
        <div className="main-wrapper">

        </div>
        {!user && <Loginform />}
      </div>
      <Home />
    </section>
  );
}
export default Main;
