import { useState } from 'react'

const gifts = [
  'CPU i9',       // 0 
  'Ram 32GB RGB', // 1
  'RGB keyboard'  // 2
]

function App () {

  const [gift,setGift] = useState()

  const handle = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  return (
    <div className = "App">
        <h1>{gift|| 'Chưa có phần thưởng'}</h1>
        <button onClick = {handle}> Lấy thưởng</button>
    </div>
  )
}


export default App;