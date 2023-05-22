export default function AppReducer(state,action){
    switch(action.type){
        case 'deleteContact':
            return {contacts: state.contacts.filter((t)=>t.id!==action.payload)}

        case 'addContact':
            return {contacts:[...state.contacts,action.payload]}
        
        default:
            return state
    }
}