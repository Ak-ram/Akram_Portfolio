import clsx from "clsx";
import SidebarIcons from "./SidebarIcons";
import { Link, useLocation } from "react-router-dom";
function MenuItem({ item: { id, title, notifications }, onClick }) {
  const location = useLocation();
  const currentRoute = location.pathname.slice(1, location.pathname.length);
  return (


// 🐛 BUG: matching selected sidebarItem with the current route

// Bug: When changing route directly from the URL bar, there is no updating in the selected sidbarItem.
// Solve: Use `useLocation` react hock to check if the current route matched with the selected sidebarItem or NOT.

    <Link
      to={title.toLowerCase()}
      className={clsx(
        "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
        title.toLowerCase() === currentRoute
          ? "sidebar-item-selected"
          : "sidebar-item"
      )}
      onClick={() => {
        onClick(id);
        console.log();
      }}
    >
      <SidebarIcons id={id} />
      <span className="block sm:hidden xl:block ml-2">{title}</span>
      <div className="block sm:hidden xl:block flex-grow" />
      {notifications && (
        <div className="flex sm:hidden xl:flex dark:bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
          <div className="text-white text-sm">{notifications}</div>
        </div>
      )}
    </Link>
  );
}

export default MenuItem;
