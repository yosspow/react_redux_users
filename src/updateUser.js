import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as t from './simpleredux/action'


export default function UpdateUser(){
    const navigate = useNavigate()
    const {id} = useParams()
    const user = useSelector((data)=>data.users.find( e => e.id == id ))
    const dispatch = useDispatch();

    const [nom,setNom] = useState(user.name);
    const [email,setEmail] = useState(user.email);
   
    const handleClick = ()=>{
        dispatch(t.Modifier({id:id,name:nom,email:email}))

       
        
         navigate('/')
    
    }
    return(
        <>

        <form>
        name: <input type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
      email:<input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <button onClick={handleClick}  >Submit</button>
      </form>
        </>
     
    )
}