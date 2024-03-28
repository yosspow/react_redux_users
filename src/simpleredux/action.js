
export function Add(user){
    return{
        type:'ADD_USER',
        payload : user
    }

}
export function Modifier(newuser){
    return{
        type:"MODIFIER_USER",
        payload : newuser
    }

}
export function Delete_user(id){
    return{
        type:"DELETE",
        payload : id
       
    }

}