import './App.css';
import CardHolder from './components/card_holder/card_holder';
import Header from './components/header_component/header';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [addCounter, setAddCounter] = useState(0)
  const [updateCounter, setUpdateCounter] = useState(0)

  useEffect(()=>{
    axios.get("http://localhost:9000/count").then((res)=>{
      console.log(res)
        setAddCounter(res.data.countAdd)
        setUpdateCounter(res.data.countUpdate)
    }).catch((err)=>{
      console.log(err)
    })
  })


  // handling increase in number of add api and update api call
  const incAddHandler = () => {
    setAddCounter(addCounter + 1)

    axios.patch("http://localhost:9000/count",{countAdd:addCounter+1,countUpdate:updateCounter})
  }
  const IncUpdateHandler = () => {
    setUpdateCounter(updateCounter + 1)
    axios.patch("http://localhost:9000/count",{countAdd:addCounter,countUpdate:updateCounter+1})
  }

  return (
    <div className="App">
      <Header AddCount={addCounter} UpdateCount={updateCounter}/>
      <CardHolder IncAdd={incAddHandler} IncUpdate={IncUpdateHandler}/>
    </div>

  );
}

export default App;
