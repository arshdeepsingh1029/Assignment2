import React, { useEffect, useReducer, useCallback } from "react";
import "./Pages/Styles/Checklist.css";

const initialState = {
  items: [
    { id: 1, text: "Item 1", checked: false },
    { id: 2, text: "Item 2", checked: false },
    { id: 3, text: "Item 3", checked: false },
  ],
  newItemText: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = {
        id: state.items.length + 1,
        text: action.payload,
        checked: false,
      };
      return {
        ...state,
        items: [...state.items, newItem],
        newItemText: "",
      };
    case "DELETE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, items: filteredItems };
    case "TOGGLE_CHECKED":
      const updatedItems = state.items.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );
      return { ...state, items: updatedItems };
    case "UPDATE_NEW_ITEM_TEXT":
      return { ...state, newItemText: action.payload };
    default:
      return state;
  }
}

function Checklist() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Items have changed:", state.items);
  }, [state.items]);

  const handleCheck = useCallback(
    (id) => {
      dispatch({ type: "TOGGLE_CHECKED", payload: id });
    },
    [dispatch]
  );

  const handleAddItem = useCallback(() => {
    dispatch({ type: "ADD_ITEM", payload: state.newItemText });
  }, [dispatch, state.newItemText]);

  const handleDeleteItem = useCallback(
    (id) => {
      dispatch({ type: "DELETE_ITEM", payload: id });
    },
    [dispatch]
  );

  const handleUpdateNewItemText = useCallback(
    (e) => {
      dispatch({ type: "UPDATE_NEW_ITEM_TEXT", payload: e.target.value });
    },
    [dispatch]
  );

  return (
    <div className="checklist-container">
      <h2 className="checklist-heading">Checklist</h2>
      <ul className="checklist-items">
        {state.items.map((item) => (
          <li key={item.id} className="checklist-item">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
              className="checklist-item-input"
            />
            <label className="checklist-item-label">{item.text}</label>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="checklist-item-delete"
            >
              <i className="checklist-item-delete-icon"></i>
            </button>
          </li>
        ))}
      </ul>
      <div className="checklist-add-item">
        <input
          type="text"
          value={state.newItemText}
          onChange={handleUpdateNewItemText}
          placeholder="Enter item"
          className="checklist-input"
        />
        <button onClick={handleAddItem} className="checklist-button">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Checklist;
