
import {Link, useNavigate} from 'react-router-dom' ;
import {useState, useEffect} from 'react';
import * as All from './simpleredux/action'

import './App.css'
import { useSelector , useDispatch } from 'react-redux';

function UserList() {
  const dd = useSelector(data => data.users)
  const dispatch = useDispatch();
  const id = useSelector(data => data.users.length)
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");


  function handleClick(e) {
    e.preventDefault()
    dispatch(All.Add(
      {
        id: id + 1,
        name: nom,
        email: email
      }))

    navigate('/')


  }



  return (
    <div className="App" >
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Delete</th>
            <th>update</th>


          </tr>
        </thead>
        <tbody>
          {dd.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>

                  <button onClick={() => {
                    return dispatch(All.Delete_user(e.id))
                  }}>DELETE</button>

                </td>
                <td><Link to={`/update-user/${e.id}`}>
                  <button>Update</button>
                </Link>
                </td>
              </tr>

            )
          })}

        </tbody>
      </table>
      <form >

name: <input type="text" value={nom} onChange={(e) => { setNom(e.target.value) }} />
email:<input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

<button onClick={(e)=>handleClick(e)}  >Submit</button>

</form>
    </div>
  );
}


export default UserList;




