import React, { useState } from "react";
import contacts from "./contacts.json";
import './App.css';

function App() {
  const [contactList] = useState(contacts.slice(0, 5));

  const renderTrophy = (won) => {
    return won ? <span role="img" aria-label="trophy">🏆</span> : null;
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{renderTrophy(contact.wonOscar)}</td>
              <td>{renderTrophy(contact.wonEmmy)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
