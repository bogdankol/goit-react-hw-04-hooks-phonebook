import "./App.css";
import Container from "./components/Container";
import Phonebook from "./components/Phonebook";
import {  useState } from "react";

function App() {
  const [contacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter] = useState("");

  return (
    <Container>
      <Phonebook contactsArr={contacts} filterInput={filter} />
    </Container>
  );
}

export default App;
