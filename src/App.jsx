import "./App.css";
import { useState } from 'react';
import contacts from "./contacts.json"

function App() {
  
  const fiveContacts = contacts
  
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

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
        {/*Contact 1*/}
          <tr>
            <td><img src={fiveContacts[0].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{fiveContacts[0].name}</td>
            <td>{fiveContacts[0].popularity.toFixed(2)}</td>
            <td>{fiveContacts[0].wonOscar && <span>🏆</span>}</td>
            <td>{fiveContacts[0].wonEmmy && <span>🌟</span>}</td>
          </tr>

          {/*Contact 2*/} 
          <tr>
            <td><img src={fiveContacts[1].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{fiveContacts[1].name}</td>
            <td>{fiveContacts[1].popularity.toFixed(2)}</td>
            <td>{fiveContacts[1].wonOscar && <span>🏆</span>}</td>
            <td>{fiveContacts[1].wonEmmy && <span>🌟</span>}</td>
          </tr>

          {/*Contact 3*/} 
          <tr>
            <td><img src={fiveContacts[2].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{fiveContacts[2].name}</td>
            <td>{fiveContacts[2].popularity.toFixed(2)}</td>
            <td>{fiveContacts[2].wonOscar && <span>🏆</span>}</td>
            <td>{fiveContacts[2].wonEmmy && <span>🌟</span>}</td>
          </tr>

          {/*Contact 4*/} 
          <tr>
            <td><img src={fiveContacts[3].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{fiveContacts[3].name}</td>
            <td>{fiveContacts[3].popularity.toFixed(2)}</td>
            <td>{fiveContacts[3].wonOscar && <span>🏆</span>}</td>
            <td>{fiveContacts[3].wonEmmy && <span>🌟</span>}</td>
          </tr>

          {/*Contact 5*/} 
          <tr>
            <td><img src={fiveContacts[4].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{fiveContacts[4].name}</td>
            <td>{fiveContacts[4].popularity.toFixed(2)}</td>
            <td>{fiveContacts[4].wonOscar && <span>🏆</span>}</td>
            <td>{fiveContacts[4].wonEmmy && <span>🌟</span>}</td>
          </tr>


        </tbody>
      </table>

    </div>
  );
}

export default App;
