import { useContext } from "react";
import UserContext from "../../context/UserContext";

export function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Header Start</h1>
      <pre>{JSON.stringify(user)}</pre>
      <h5>Header end</h5>
    </>
  );
}
