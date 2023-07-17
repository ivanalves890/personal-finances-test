import { Link, Outlet } from "react-router-dom";
import ItemsHeader from "../../components/ItemsHeader/ItemsHeader";

export default function ItemLayout() {
  return (
    <>
      <ItemsHeader />
      <Outlet />
    </>
  );
}
