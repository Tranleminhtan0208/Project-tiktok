import { useState, useEffect } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content () {

    const [content,setContent] = useState ('')
    const [get, setGet] = useState([])
    const [type, setType] = useState('')

    console.log(type)

    useEffect(() => {
        // Hàm call API
        fetch (`https://jsonplaceholder.typicode.com/${type}`)
                    .then(res => res.json())
                    .then(posts => {
                        setGet(posts);
                    })
    }, ([type]))

    
    
    return (
        <div>
        
            {tabs.map(tab => (
                <button 
                key = {tab}
                onClick = {() => setType(tab)}
                style = {type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } : {}}
                
                >
                    {tab}
                </button>
                
            ))}
        
        <input
            value={content}
            onChange = {e => setContent(e.target.value)}
        /> 

        <ul>
            {get.map(post => (
                <li key={post.id}>{post.title || post.name}</li>

            ))}
        </ul>

        </div>
        
    
    )
}

export default Content