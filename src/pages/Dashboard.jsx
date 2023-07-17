import useAppContext from "../hooks/useAppContext";
import { useState } from "react";
import PieChart from "../components/PieChart/PieChart";

export default function Dashboard() {
  const { items, balance } = useAppContext();

  const [period, setPeriod] = useState(1800);

  const itemsOrderedByDate = items;
  itemsOrderedByDate.sort((a, b) => b.date - a.date);

  function handleChangePeriod(ev) {
    setPeriod(ev.target.value);
  }

  return (
    <div class="section">
      <div class="box has-background-light is-flex is-align-items-center is-flex is-justify-content-center">
        <label htmlFor="period" class="px-1">
          Período
        </label>
        <div className="select">
          <select
            name="period"
            id="period"
            value={period}
            onChange={(ev) => handleChangePeriod(ev)}
          >
            <option disabled>Selecione um período...</option>
            <option value={30}>Últimos 30 dias</option>
            <option value={60}>Últimos 60 dias</option>
            <option value={90}>Últimos 3 meses</option>
            <option value={180}>Últimos 6 meses</option>
            <option value={360}>Último ano</option>
            <option value={1800}>Total</option>
          </select>
        </div>
      </div>

      <div class="box has-background-light is-flex is-justify-content-center">
        <div style={{ maxWidth: "20%" }}>
          <PieChart type="expenses" period={period} />
        </div>

        <br />

        <div style={{ maxWidth: "20%" }}>
          <PieChart type="incomes" period={period} />
        </div>
      </div>

      <br />

      <div class="box has-background-light is-flex is-justify-content-center">
        <h1 class="title">Saldo: {balance.toFixed(2)}</h1>
      </div>
    </div>
  );
}
