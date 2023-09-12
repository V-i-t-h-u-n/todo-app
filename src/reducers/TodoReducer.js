const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "EDIT_TODO": 
      // console.log(state[0])
      state?.map((stateItem) => {
        
        // console.log(stateItem);
        if (action.payload.id === stateItem.id) {
          // console.log(action.payload.id);
          return (stateItem.title = action.payload.title);
        }
        return stateItem;
      });
    return state;
    case "DELETE_TODO":
      console.log(action.payload.id);
      const deletedArray = state.filter((stateItem)=>
        stateItem.id !== action.payload.id
      )?.map((stateItem)=>{
        return stateItem
      })
      return deletedArray;
    default:
      return state;
  }
};
export default TodoReducer;
// state.filter((stateItem)=>stateItem.id === action.payload.id).
