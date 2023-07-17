import { Link, useParams } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import UpdateButton from "../../components/UpdateButton/UpdateButton";

export default function ViewItem() {
  const { getItem } = useAppContext();
  const { id } = useParams();

  const item = getItem(id);

  return (
    <div className="section">
      <h2>{item.name}</h2>

      <UpdateButton itemId={item.id} />
      <DeleteButton itemId={item.id} itemDescription={item.description} />
      <div>
        <p>Tipo: {item.type}</p>
        <p>Categoria: {item.category}</p>
        <p>Valor: {item.value}</p>
      </div>
      <p>{item.description}</p>
      <div>
        <p>Cadastrado em: {item.createdAt.toLocaleDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
