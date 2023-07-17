import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

export default function UpdateButton({ itemId }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/items/${itemId}/update`);
  };

  return (
    <button className="button is-warning is-small" onClick={handleUpdate}>
      Atualizar
    </button>
  );
}
