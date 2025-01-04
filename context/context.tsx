import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import reducer from "./reducers";
export const Store = createContext({});
const initialState = {
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  modal: {
    show: false,
    children: "",
    title: "",
    buttons: [
      { title: "", response: 0 },
      { title: "", response: 0 },
    ],
  },
  custom_states: {},
};

export function StoreProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
