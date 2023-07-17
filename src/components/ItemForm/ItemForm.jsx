import Item, { CATEGORIES, TYPE } from "../../entities/Item";
import { useEffect, useRef, useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min";

//import "../../../node_modules/bulma-calendar/dist/js/bulma-calendar.min.js";

export default function ItemForm({ itemToUpdate }) {
  const navigate = useNavigate();

  useEffect(() => {
    const calendars = bulmaCalendar.attach('[type="date"]', {
      dateFormat: "dd/MM/yyyy",
    });

    calendars.forEach((calendar) => {
      // Add listener to select event
      calendar.on("select", (date) => {
        //console.log(date);
      });
    });

    const element = document.querySelector("#date");

    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on("select", (datepicker) => {
        //console.log(datepicker.data.value());
      });
    }
  }, []);

  const defaultItem = {
    type: "",
    description: "",
    value: 0,
    date: new Date(),
    category: "",
  };

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem);
  const { addItem, updateItem } = useAppContext();
  const inputRef = useRef(null);

  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item);
        alert("Item atualizado com sucesso!");
      } else {
        const validItem = new Item(item);
        addItem(validItem);
        setItem(defaultItem);
        alert("Item cadastrado com sucesso!");
      }
    } catch (err) {
      console.log(err.message);
      alert("Ocorreu um erro.");
    } finally {
      inputRef.current.focus();
      navigate("/items");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="type">Tipo</label>
          <div>
            <div className="select">
              <select
                name="type"
                id="type"
                required
                value={item.type}
                onChange={handleChange}
              >
                <option disabled value="">
                  Selecione um tipo...
                </option>
                {TYPE.map((type) => (
                  <option
                    key={type}
                    value={type}
                    defaultChecked={item.type === type}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <div>
            <input
              style={{ maxWidth: "400px" }}
              className="input"
              type="text"
              name="description"
              id="description"
              required
              ref={inputRef}
              value={item.description}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="value">Valor</label>
          <div>
            <input
              style={{ maxWidth: "200px" }}
              className="input"
              type="number"
              name="value"
              id="value"
              required
              min={0.0}
              step={0.01}
              value={item.value}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="category">Categoria</label>
          <div>
            <div className="select">
              <select
                name="category"
                id="category"
                required
                value={item.category}
                onChange={handleChange}
              >
                <option disabled value="">
                  Selecione uma categoria...
                </option>
                {CATEGORIES.map((category) => (
                  <option
                    key={category}
                    value={category}
                    defaultChecked={item.category === category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "200px" }}>
          <label htmlFor="date">Data</label>

          <input
            type="date"
            name="date"
            id="date"
            required
            value={item.date}
            onChange={handleChange}
          />
        </div>

        <div className="p-5">
          <button className="button is-primary">Salvar</button>
        </div>
      </form>
    </>
  );
}
