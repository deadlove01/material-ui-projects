const initialState = [
  {
    id: 1,
    text: "Learn React",
  },
  {
    id: 2,
    text: "Learn Material UI",
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
