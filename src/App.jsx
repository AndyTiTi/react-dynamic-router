import { useContext, lazy } from "react";
import { Router, Route, useRoutes } from "react-router-dom";
import AppContext from "./store";
import Add from "./views/Add";
import List from "./views/List";
// import SettingsAccountPage from './components/SettingsAccountPage';

import "./App.css";
const routesData = [
  {
    path: "/",
    element: "HomePage",
    children: [
      {
        path: "profile",
        element: "ProfilePage",
      },
      {
        path: "settings",
        element: "SettingsPage",
        children: [
          {
            path: "profile",
            element: "SettingsProfilePage",
          },
          {
            path: "account",
            element: "SettingsAccountPage",
          },
        ],
      },
    ],
  },
];

// 动态导入组件的辅助函数
const loadComponent = (componentName) => {
  return lazy(() => import(`./components/${componentName}.jsx`), {
    loading: () => <div>Loading...</div>,
    ssr: false,
  });
};

// 递归函数生成路由
const generateRoutes = (routes) => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={loadComponent(route.element)}
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        {route.children && <generateRoutes routes={route.children} />}
      </Route>
    );
  });
};

function App() {
  const { list } = useContext(AppContext);
  console.log("🚀 ~ App ~ list:", list);

  // let element = useRoutes(routes);
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="/settings" element={<SettingsPage />}>
            <Route path="/profile" element={<SettingsProfilePage />} />
            <Route path="/account" element={<SettingsAccountPage />} />
          </Route>
        </Route>
      </Routes> */}
      <List />
      <Add />
      {list.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
