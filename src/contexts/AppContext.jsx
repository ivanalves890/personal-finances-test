import { useState } from "react";
import { createContext } from "react";
import { CATEGORIES } from "../entities/Item";

export const AppContext = createContext({});

export default function AppContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("personal-finances");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.date = new Date(item.date);
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  const addItem = (item) => {
    setItems((current) => {
      const updatedItems = [item, ...current];
      localStorage.setItem("personal-finances", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === +itemId);
  };

  const updateItem = (itemId, newAttributes) => {
    setItems((current) => {
      const itemIndex = current.findIndex((i) => i.id === itemId);
      const updatedItems = [...current];
      Object.assign(updatedItems[itemIndex], newAttributes, {
        updatedAt: new Date(),
      });
      localStorage.setItem("personal-finances", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItem = (itemId) => {
    setItems((current) => {
      const updatedItems = current.filter((item) => item.id !== itemId);
      localStorage.setItem("personal-finances", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const balance = items.reduce((sum, item) => {
    let value = 0;
    if (item.type === "Receita") {
      value = +item.value;
    } else if (item.type === "Gasto") {
      value = -item.value;
    }

    return sum + value;
  }, 0);

  const getExpenses = (initialPeriod, finalPeriod) => {
    let categoryItems = [];

    CATEGORIES.forEach((category, index) => {
      categoryItems[index] = {};

      categoryItems[index].name = category;

      categoryItems[index].items = items.filter(
        (item) =>
          item.category === category &&
          item.type === "Gasto" &&
          item.date >= initialPeriod &&
          item.date <= finalPeriod
      );

      categoryItems[index].sum = categoryItems[index].items.reduce(
        (sum, item) => sum + item.value,
        0
      );
    });

    return categoryItems;
  };

  const getIncomes = (initialPeriod, finalPeriod) => {
    let categoryItems = [];

    CATEGORIES.forEach((category, index) => {
      categoryItems[index] = {};

      categoryItems[index].name = category;

      categoryItems[index].items = items.filter(
        (item) =>
          item.category === category &&
          item.type === "Receita" &&
          item.date >= initialPeriod &&
          item.date <= finalPeriod
      );

      categoryItems[index].sum = categoryItems[index].items.reduce(
        (sum, item) => sum + item.value,
        0
      );
    });

    return categoryItems;
  };

  const app = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem,
    balance,
    getExpenses,
    getIncomes,
  };

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
}
