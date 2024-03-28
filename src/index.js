
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {legacy_createStore as createstore} from 'redux'
import  reducer  from './simpleredux/store';
import UserList from './App';


import UpdateUser from './updateUser'

const store = createstore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<UserList/>}/>
      <Route path='/update-user/:id' element={<UpdateUser/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  

);

