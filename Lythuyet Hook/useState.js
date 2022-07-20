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



// One - way binding -  ràng buộc 1 chiều 
import { useState } from 'react'



function App1 () {

  const [name, setName] = useState()
  console.log(name)
  return (
    <div style = {{padding: 20}}>
      <input
        onChange={e => setName(e.target.value)} // Lắng nghe sự kiện khi người dùng nhập giá trị vào
       />
    </div>
  )
}
// export default App;

// Two - way binding - ràng buộc 2 chiều 
// Two - way binding - Form - input
function App () {

  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleSubmit = () => {
    // call API
    console.log({
      name,
      email
    })
  }


  console.log(name)
  return (
    <div style = {{padding: 20}}>
      <input
          value={name}
            onChange={e => setName(e.target.value)}
          />

      <input
          value={email}
            onChange={e => setEmail(e.target.value)}
          />

       <button onClick = {handleSubmit}>Register</button>
    </div>
  )
}

// Two - way binding - input - radio
const courses = [
  {
    id: '1',
    name: 'HTML, CSS'
  },
  {
    id: '2',
    name: 'Javascript'
  },
  {
    id: '3',
    name: 'ReactJS'
  }
]

function App () {
  const [check, setChecked] = useState(2)

  console.log(check);
  const handle = () => {
    console.log({id : check});
  }
  return (
    <div style = {{padding: 20}}>
            {courses.map(course => (
                  <div key={course.id}>
                        <input 
                          type= "radio" 
                          check={check === course.id}
                          onChange={() => setChecked(course.id)}
                        />
                        {course.name}
                  </div>
            ))}
            <button onClick={handle}> Register </button>
    
    </div>
  )
}

// Two - way binding - input - checkbox
const courses1 = [
  {
    id: '1',
    name: 'HTML, CSS'
  },
  {
    id: '2',
    name: 'Javascript'
  },
  {
    id: '3',
    name: 'ReactJS'
  }
]

function App () {
  const [checked, setChecked] = useState()

  const handleCheck =  (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        // return checked.filter(item => !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handle = () => {
    // Call API
    console.log({id : checked});
  }
  return (
    <div style = {{padding: 20}}>
            {courses.map(course => (
                  <div key={course.id}>
                        <input 
                          type= "checkbox" 
                          checked={checked.includes(course.id)}
                          
                          onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                  </div>
            ))}
            <button onClick={handle}> Register </button>
    
    </div>
  )
}

// Todolist with useState 
// Bài tập: Nhập giá trị vào input và in ra giá trị vừa nhập vào 1 danh sách
// Và lưu vào Local Storage
function App () {
const [write, setWrite] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storagejob = JSON.parse(localStorage.getItem('jobs')) // parse để chuyển thành chuỗi thì State mới nhận đc
    console.log(storagejob)
    return storagejob
    
  })

  const handle = () => {
      setJobs(prev => {
        const newJobs = [...prev, write]

        // Save to local storage
        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs', jsonJobs)
        return newJobs
      })


      setWrite() // trả về input trống và nhấp tiếp
  }
  
  return (
    <div style = {{padding: 20}}>
           <input
              write={write}
              onChange = {e => setWrite(e.target.value)}
           />
           <button onClick = {handle}>Add</button>

            <ul>
                  {jobs.map((job, index) => (
                    <li key = {index}>{job}</li>
              ))}         
            </ul>
    
    </div>
  )
}

// Mounted & Unmounted?  - Hiện và ẩn
import { useState } from 'react'
import Content from './Content'



function App () {
  const [show, setShow] = useState(false)
  return (
    <div style = {{padding: 20}}>
      <button onClick = {() => setShow(!show)}>Toggle</button>
       {show && <Content />}
    </div>
  )
}


