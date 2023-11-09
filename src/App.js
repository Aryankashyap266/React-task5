
import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  
  const [date,setDate]=useState('');
  const [age,setAge]=useState(null);
  return (
    <div className="App">
      <Header />
      <Body 
      date = {date}
      setDate = {setDate} 
      age = {age}
      setAge = {setAge}/>
    </div>
  );
}

export default App;
