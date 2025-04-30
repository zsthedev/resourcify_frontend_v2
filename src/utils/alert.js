import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useAlert = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const alert = (message, error, success_route) => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate(success_route);
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  };

  return alert;
};
