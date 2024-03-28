

const ADD_USER="ADD_USER";
const MODIFIER_USER="MODIFIER_USER" ;
const DELETE="DELETE" ;


const initialState = {
    users :[
        {id : "1",name: "elhabachi youssef", email :"youssefhabachi111@gmail.com"},
        

    ]
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER :
            return {...state,users :[...state.users,action.payload]}
        case MODIFIER_USER :
            const user = state.users.find((u)=>{
                return u.id === parseInt(action.payload.id)
            });
            if (user){ 
                user.name = action.payload.name ;
                user.email = action.payload.email;

            }
            return state
        case DELETE :
            return {...state,users :[...state.users.filter((e)=>{
                return e.id !== parseInt(action.payload)
            })]}
        default :
        return state    
    }

}
export default reducer