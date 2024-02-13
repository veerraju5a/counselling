import axios from 'axios'
import React, {useState, useEffect} from 'react'

const FetchData = () => {
    
    const [posts, setPosts] = useState([])
    const[id, SetId] =useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        }).catch(err=>{
          console.log(err)
        })
    },[id])
    
    

  return (
    <div>
    <input type='text' value={id} onChange={e=> SetId(e.target.value) } />
        {posts.title}
        {/* <ul>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            )
            )}
        </ul> */}
    </div>
  )
}

export default FetchData