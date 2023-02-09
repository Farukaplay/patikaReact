import Header from './components/Header';
import User from './components/user';
import './App.css';

function App() {

  let friends = [
    {
      id:1,
      name:"Arzu"
    },
    {
      id:2,
      name:"Hüseyin"
    },
    {
      id:3,
      name:"ali"
    }
  ]

//   let adress = {
//     title: "Merkez/Hakkâri",
//     zip: 30000
// }

  return (
    <div>
      <User name="Faruk" surname="Kaplay" isLoggedIn={true} age={26} friends={friends} adress={{title: "Merkez/Hakkâri"}}/>
    </div>
  )
}

export default App;