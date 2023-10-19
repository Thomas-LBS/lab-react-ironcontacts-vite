import "./App.css";
import { useState } from 'react';
import contacts from "./contacts.json"

function App() {
  const firstFiveActors = contacts.slice(0, 5);
  const [contactsData, setContactData] = useState(firstFiveActors);

  {/* Function Add Random Contact */ }
  function handleClickRandom(array) {

    const minArrayLength = 5
    const maxArrayLength = array.length

    if (maxArrayLength <= minArrayLength) {
      return -1
    }

    const randomContact = Math.floor(Math.random() * (maxArrayLength - minArrayLength) + minArrayLength)

    setContactData((actualState) => {
      const updatedState = [...actualState]

      updatedState.push(contacts[randomContact])

      return updatedState
    })
  }


  {/* Function Sort by Name */ }


  {/* Function Sort by Popularity */ }


  {/* Function Delete Contact */ }
  function handleClickDelete(actorId) {
    setContactData((actualState) => {
      const updatedState = [...actualState]
      return updatedState.filter((actor) => actor.id !== actorId)
    })
  }


  return (
    <div className="App">

      <div className="title">
        <h1>IronContacts</h1>
      </div>


      {/* buttons bar */}

      <div className="sticky">
        <div className="button">
          <button className="randomBtn" onClick={() => handleClickRandom(contacts)}>
            Add Random Contact
          </button>
          <button className="randomBtn" onClick={() => handleClickSortName()}>
            Sort by Name
          </button>
          <button className="randomBtn" onClick={() => handleClickSortPopularity()}>
            Sort by Popularity
          </button>
        </div>
       
          <table>
            <tbody>
              <tr className="title">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th> Won Emmy</th>
                <th>Action</th>
              </tr>
            </tbody>
          </table>
        
      </div>



      {/* Actors Table */}
      <table className="actorsTb">
        <tbody>
          {contactsData.map((actor, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    alt=""
                    style={{ width: "75px" }}
                  />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity.toFixed(2)}</td>
                {actor.wonOscar ? <td><span className="glory">🏆</span><span className="glory">🏆</span><span className="glory">🏆</span></td> : <td></td>}
                {actor.wonEmmy ? <td><span className="glory">🌟</span><span className="glory">🌟</span><span className="glory">🌟</span></td> : <td></td>}
                <td>
                  <button className="randomBtn" onClick={() => handleClickDelete(actor.id)}>Delete</button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default App;

