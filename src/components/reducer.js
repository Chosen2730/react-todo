export const reducer = (state, action) => {
  const date = new Date();
  const minute = () => {
    if (date.getMinutes() < 10) {
      return `0${date.getMinutes()}`;
    }
    return date.getMinutes();
  };
  const hour = () => {
    if (date.getHours() < 10) {
      return `0${date.getHours()}`;
    }
    return date.getHours();
  };
  const time = `${hour()}:${minute()}`;
  const newItem = {
    time: time,
    desc: state.value,
    id: new Date().getTime().toString(),
  };

  if (action.type === "NEW_VALUE") {
    return {
      ...state,
      value: action.payload,
    };
  }
  if (action.type === "SUBMIT") {
    if (state.value) {
      return {
        ...state,
        todo: [...state.todo, newItem],
        value: "",
      };
    }
    return {
      ...state,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const filteredItem = state.todo.filter(
      (item) => item.id !== action.payload
    );
    const todoFilter = state.complete.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      todo: filteredItem,
      complete: todoFilter,
    };
  }

  if (action.type === "COMPLETE") {
    const filteredItem = state.todo.filter(
      (item) => item.id !== action.payload
    );
    const completeItem = state.todo.filter(
      (item) => item.id === action.payload
    );
    const newItem = {
      time: time,
      desc: completeItem[0].desc,
      id: new Date().getTime().toString(),
    };
    return {
      ...state,
      todo: filteredItem,
      complete: [...state.complete, newItem],
    };
  }
  throw new Error("No matching action type");
};
