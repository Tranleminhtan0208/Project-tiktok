// useState (trạng thái của dữ liệu)
// Dùng khi nào?
// ---------------Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)

// Cách sử dụng

// ```JSX

import {useState} from 'React'

function Component () {
    const [state, setState] = useState(initState)
    
}
/* Lưu ý
    1. Component được re-render sau khi `setState`
    2. Initial state chỉ dùng cho lần đầu 
    3. Set state với callback
    4. Initial state với callback
    5. Set state là thay thế state bằng giá trị mới
*/

// Use State

import { useState } from 'react'

const product = [100,200,300]
function App() {



  const [counter, setCouter] = useState(() => {
    const total = product.reduce((total,cur) => total + cur)
    console.log(total);
    return total // giá trị khởi tạo chỉ lấy cái return ra chứ không lấy nguyên code trong hàm - dùng callback
  })

  const handleCouter = () => {
    setCouter(counter + 1 )

    // Sử dụng setState với callback - chạy tổng 3 lần và in ra giá trị
    // 
    // setCouter(preState => preState + 1 )
    // setCouter(preState => preState + 1 )
    
  }

  // Sử dụng setState với callback
  return (
    <div className="App">
        <button onClick = {handleCouter}  
        >
          Click me!
        </button>


        <p style ={{padding: 20}}>Biến đếm sẽ là {counter}</p>
        
    </div>
  );
}

export default App;


// Bài tập useState - cho 1 mảng và 1 component
// Yêu cầu 1: Khi ứng dụng chạy sẽ hiện ra chưa có phần thưởng và nút lấy thưởng
// Yêu cầu 2: Khi click vào lấy thưởng nó sẽ ngẫu nhiên ra 1 phần thưởng trong mảng và hiển thị thay thế vào chữ chưa có phần thưởng
// Yêu cầu 3: Nếu bấm tiếp tục lấy thưởng nó sẽ tiếp tục ngầu nhiên các phần tử trong mảng  

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


// Two - way binding - ràng buộc 2 chiều

