import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./components/HomePage";
import ProfileLayout from "./components/ProfileLayout";
import SettingsPage from "./components/SettingsPage";
import SettingsProfilePage from "./components/SettingsProfilePage";
import { AppProvider } from "./store";
import "./index.css";
import { useRoutes } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "",
        element: <SettingsProfilePage />,
      },
      {
        path: "/profile/settings",
        element: <SettingsPage />,
      },
    ],
  },
  { path: "*", element: <div>404</div> },
];

const GetRoutes = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      {/* <GetRoutes /> */}
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
      <App />
    </BrowserRouter>
  </AppProvider>
);
