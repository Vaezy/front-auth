import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await fetch("https://offers-api.digistos.com/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          const data = await response.json();
          const err = new Error(
            data.message || "Une erreur est survenue lors de la déconnexion."
          );
          err.status = response.status;
          throw err;
        }
      } catch (error) {
        console.error(`Error: ${err.message} (${err.status})`);
      } finally {
        localStorage.removeItem("auth");
        navigate("/connexion");
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
};

export default Logout;
