import "./header.css";
import "../../utils.css";

function Header() {
    return (
        <header>
            <div className="wrapper flex">
                <div className="widh-50-pc" id="logo">
                    <span>Totally Awesome Library</span>
                </div>
                <div className="widh-50-pc d-flex justify-content-end">
                    <form id="login" action="" method="post">
                        <input type="email" name="" id="" />
                        <input type="password" name="" id="" />
                    </form>
                    <div>
                        <p>Not a member? Sign up!</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;