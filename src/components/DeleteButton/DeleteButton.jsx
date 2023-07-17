import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

export default function DeleteButton({ itemId, itemDescription }) {
  const { deleteItem } = useAppContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemDescription}?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  };

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
