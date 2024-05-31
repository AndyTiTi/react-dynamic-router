import { createContext, useState } from "react";

const AppContext = createContext();
const { Provider } = AppContext;

export function AppProvider (props) {
  const [list, setList] = useState([{
    id: 1,
    text: 'Hello World',
  }, {
    id: 2,
    text: 'Hello React',
  }]);
  return (
    <Provider value={{ list, setList }}>
      {props.children}
    </Provider>
  )
}

export default AppContext;