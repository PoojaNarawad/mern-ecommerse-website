import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "ffdsde", role: "admin" };

const Header = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    SetIsOpen(false);
  }

  return (
    <nav className="header">
      <Link onClick={() => SetIsOpen(false)} to={"/"}>
        Home
      </Link>
      <Link onClick={() => SetIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => SetIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => SetIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => SetIsOpen(false)} to="/admin/dashboard">
                    Admin</Link>
              )}
              <Link onClick={() => SetIsOpen(false)} to={"/orders"}>
                 Orders</Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
