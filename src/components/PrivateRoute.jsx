import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const isValid = auth && new Date(auth) > new Date();

    if (!isValid) {
      localStorage.removeItem("auth");
      navigate("/connexion");
    }
  }, [navigate]);
  return <Outlet />;
};

export default PrivateRoute;
