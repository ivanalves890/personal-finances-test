import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import DeleteButton from "../DeleteButton/DeleteButton";
import UpdateButton from "../UpdateButton/UpdateButton";
import { useState } from "react";

export default function ItemsTable() {
  const { items } = useAppContext();

  const [showingItems, setShowingItems] = useState(items);

  const [ascending, setAscending] = useState(true);

  const orderById = () => {
    if (ascending) {
      setShowingItems((current) => [...current].sort((a, b) => b.id - a.id));
    } else {
      setShowingItems((current) => [...current].sort((a, b) => a.id - b.id));
    }
    setAscending(!ascending);
  };

  const orderByDate = () => {
    if (ascending) {
      setShowingItems((current) =>
        [...current].sort((a, b) => b.date - a.date)
      );
    } else {
      setShowingItems((current) =>
        [...current].sort((a, b) => a.date - b.date)
      );
    }
    setAscending(!ascending);
  };

  const orderByType = () => {
    if (ascending) {
      setShowingItems((current) =>
        [...current].sort((a, b) => {
          if (a.type < b.type) return 1;
          if (a.type > b.type) return -1;
          return 0;
        })
      );
    } else {
      setShowingItems((current) =>
        [...current].sort((a, b) => {
          if (a.type > b.type) return 1;
          if (a.type < b.type) return -1;
          return 0;
        })
      );
    }
    setAscending(!ascending);
  };

  const orderByDescription = () => {
    if (ascending) {
      setShowingItems((current) =>
        [...current].sort((a, b) => {
          if (a.description < b.description) return 1;
          if (a.description > b.description) return -1;
          return 0;
        })
      );
    } else {
      setShowingItems((current) =>
        [...current].sort((a, b) => {
          if (a.description > b.description) return 1;
          if (a.description < b.description) return -1;
          return 0;
        })
      );
    }
    setAscending(!ascending);
  };

  const orderByValue = () => {
    if (ascending) {
      setShowingItems((current) =>
        [...current].sort((a, b) => b.value - a.value)
      );
    } else {
      setShowingItems((current) =>
        [...current].sort((a, b) => a.value - b.value)
      );
    }
    setAscending(!ascending);
  };

  const orderByCategory = () => {
    if (ascending) {
      setShowingItems((current) =>
        [...current].sort((a, b) => {
          if (a.category < b.category) return 1;
          if (a.category > b.category) return -1;
          return 0;
        })
      );
    } else {
      setShowingItems((current) =>
        [...current].sort((a, b) => {
          if (a.category > b.category) return 1;
          if (a.category < b.category) return -1;
          return 0;
        })
      );
    }
    setAscending(!ascending);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr style={{ cursor: "pointer" }}>
            <th onClick={() => orderById()}>ID</th>
            <th onClick={() => orderByDate()}>Data</th>
            <th onClick={() => orderByType()}>Tipo</th>
            <th onClick={() => orderByDescription()}>Descrição</th>
            <th onClick={() => orderByValue()}>Valor</th>
            <th onClick={() => orderByCategory()}>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {showingItems?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date.toLocaleDateString()}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>R$ {item.value}</td>
              <td>{item.category}</td>
              <td>
                <div className="columns">
                  <div className="column">
                    <Link to={`/items/${item.id}`}>
                      <button className="button is-success is-small">
                        Ver
                      </button>
                    </Link>
                  </div>
                  <div className="column">
                    <UpdateButton itemId={item.id} />
                  </div>
                  <div className="column">
                    <DeleteButton
                      itemId={item.id}
                      itemDescription={item.description}
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
