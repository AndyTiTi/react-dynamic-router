import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  // 这里是ProfileLayout组件的内容
  return (
    <div style={{ padding: "20px", backgroundColor: "#C3C3C3" }}>
      {/* ... 其他布局内容 ... */}
      {/* Outlet将在这里渲染匹配的子组件 */}
      【路由布局】 Page Layout
      <Outlet />
    </div>
  );
}
