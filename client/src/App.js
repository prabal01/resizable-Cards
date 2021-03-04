import './App.css';
import CardHolder from './components/card_holder/card_holder';
import Header from './components/header_component/header';
import { useState } from 'react';


function App() {
  const [addCounter, setAddCounter] = useState(0)
  const [updateCounter, setUpdateCounter] = useState(0)

  // handling increase in number of add api and update api call
  const incAddHandler = () => {
    setAddCounter(addCounter + 1)
  }
  const IncUpdateHandler = () => {
    setUpdateCounter(updateCounter + 1)
  }

  return (
    <div className="App">
      <Header AddCount={addCounter} UpdateCount={updateCounter}/>
      <CardHolder IncAdd={incAddHandler} IncUpdate={IncUpdateHandler}/>
    </div>

  );
}

export default App;
