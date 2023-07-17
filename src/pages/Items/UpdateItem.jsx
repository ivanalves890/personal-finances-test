import { useParams } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import ItemForm from "../../components/ItemForm/ItemForm";

export default function UpdateItem() {
  const { getItem } = useAppContext();
  const { id } = useParams();

  const item = getItem(id);

  return (
    <>
      <h2>Atualizar Item - {item.description}</h2>
      <ItemForm itemToUpdate={item} />
    </>
  );
}
