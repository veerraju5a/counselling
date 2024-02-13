import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Show() {
  const [res,setRes]=useState([])
  const [formData, setFormData] = useState({ name: '', role: '', email: '', password: '' });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/showall');
      setRes(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
 
 const handleUpdate = async (id) => {
  try {
    await axios.put(`http://localhost:8081/users/${id}`, formData);
    console.log(formData)
    fetchData();
    console.log('updated1')
  } catch (error) {
    console.error('Error updating user:', error);
  }
};
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8081/users/${id}`);
    fetchData();
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
   return (
     <div><center><h1>Registrations</h1>
     <table border={1}>
         
           <tr>
           <th>ID</th>
             <th>Name</th>
             <th>Role</th>
             <th>Email</th>
             <th>Password</th>
           </tr>        
       {
       res.map((data, index) => (
             <tr key={index}>
               <td>{data._id}</td>
               <td>{data.name}</td>
               <td>{data.role}</td>
               <td>{data.email}</td>
               <td>{data.password}</td>
               <td>
                <input
                  type="text"
                  name="name"
                  placeholder="New name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="role"
                  placeholder="New role"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="New email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="New password"
                  onChange={handleChange}
                />
                <button onClick={() => handleUpdate(data._id)}>Update</button>
                <button onClick={() => handleDelete(data._id)}>Delete</button> 
                </td>
             </tr>
        ))}      
       </table>
       </center>
     </div>
   )
 }

export default Show