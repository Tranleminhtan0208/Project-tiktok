import { useEffect } from "react";
import Content from './Content'

// ----------Kiến thức cần biết khi học useEffect
// Events: Add / remove event listener
// Observer pattern: Subcribe / unsubcribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/* Những cái mà useEffect làm được
1. Update DOM 
    - F8 blog title 
2. Call API
3. Listen DOM events
    Scroll
    Resize
4. Cleanup
    Remove listener/ unsubcribe
    Clear timer
*/

// -------------------- useEffect chia làm 3 trườn hợp
//  Trường hợp 1. useEffect (callback)
//      - Gọi callback mỗi khi component re-render
//      - Gọi callback sau khi component thêm element vào DOM
//  Trường hợp 2. useEffect (callback, [])
//      - Chỉ gọi callback 1 lần khi component mounted
//  Trường hợp 3. useEffect (callback, [dependencies])
//      - Callback sẽ được gọi mỗi khi dependencies thay đổi

// ------------------------ So sánh 3 trường hợp giống nhau
// Cả 3 trường hợp luôn được gọi khi component mounted


// Code Update DOM
import { useState, useEffect } from 'react'

function Content () {

    const [content,setContent] = useState ([])

    console.log(content)

    useEffect(() => {
        document.title = content
    })
    return (
        <div>
        <input
            value={content}
            onChange = {e => setContent(e.target.value)}
        /> 
        </div>
    
    )
}

export default Content

// Code Call API
// Dùng trường hợp 2 để call api vì nó chỉ render 1 lần sau khi component mounted
import { useState, useEffect } from 'react'

function Content1 () {

    const [content,setContent] = useState ('')
    const [get, setGet] = useState([])

    

    useEffect(() => {
        // Hàm call API lấy ra 100 bài posts
        fetch ('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(posts => {
                        setGet(posts);
                    })
    }, ([]))

    
    
    return (
        <div>
        <input
            value={content}
            onChange = {e => setContent(e.target.value)}
        /> 

        <ul>
            {get.map(post => (
                <li key={post.id}>{post.title}</li>

            ))}
        </ul>

        </div>
        
    
    )
}
// Code Call API
// Bài toán dùng useEffect với trường hợp 3 - Tạo 1 tabs có 3 nút và khi click nút thì nội dung mỗi tab thay đổi khác nhau






