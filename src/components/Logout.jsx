import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch(
          "https://offers-api.digistos.com/api/auth/logout",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw { status: response.status, message: data.message };
        }
      } catch (error) {
        console.error(`Error: ${error.message} (${error.status})`);
      } finally {
        dispatch(logout());
        navigate("/login");
      }
    };

    handleLogout();
  }, []);

  return null;
};

export default Logout;
