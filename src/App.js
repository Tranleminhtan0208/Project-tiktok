import { Fragment, useState } from 'react'
import Content from './Content'

const gifts = [
  'CPU i9',       // 0 
  'Ram 32GB RGB', // 1
  'RGB keyboard'  // 2
]

function App () {
  
  const [state,setState] = useState()
  const [name, setName] = useState()
  console.log(state);

  const handleClick = () => {

  }
 return (
  <div >
      <input 
      value= {state}
      onChange = {(e) => setState(e.target.value)}
      />

      <input  
      value= {name}
      onChange = {(e) => setName(e.target.value)}
      />

      <button onClick = {handleClick}>Register</button>
  </div>
 )
}
export default App;