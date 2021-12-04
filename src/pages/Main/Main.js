import Loginform from "../../components/LoginForm/Loginform";
import "./Main.css";
import Home from "../Home";
import { useAuthContext } from "../../hooks/useAuthContext";

function Main(props) {
  const { user } = useAuthContext();

  return (
    <section>
      <div className="main-container wrapper">
        <div className="main-wrapper">
          <div className="main main-card">
            <h3 className="container-fluid">
              Get million ideas for your next book to read.
            </h3>
            <h5 className="container-fluid">
              Check out other readers review and give yours! Put books in
              Favourites and many more.
            </h5>
          </div>
          <div className="color-block"></div>
        </div>
        {!user && <Loginform />}
      </div>
      <Home />
    </section>
  );
}
export default Main;
