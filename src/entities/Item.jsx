const categories = [
  "Alimentação",
  "Transporte",
  "Saúde",
  "Salário",
  "Vestuário",
  "Compras parceladas",
].sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

categories.unshift("Outros");

export const CATEGORIES = categories;

export const TYPE = ["Receita", "Gasto"];

export default class Item {
  constructor({ type, description, value, category, date }) {
    this.id = Math.floor(Math.random() * 10000000);
    this.type = type;
    this.description = description;
    this.value = Number(value);
    this.category = category;
    this.date = new Date(date);
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.#validate();
  }

  #validate() {
    const validType = TYPE.includes(this.type);
    const validDescription = typeof this.description === "string";
    const validValue = typeof this.value === "number" && this.value > 0;
    const validCategory = CATEGORIES.includes(this.category);
    if (!(validType && validDescription && validValue && validCategory)) {
      throw new Error("Item inválido!");
    }
  }
}
