import { BiChevronRight } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
const BreadCrumb = () => {
  const location = useLocation();
  const arrayOfPaths = location.pathname
    ?.split("/")
    .filter((path) => path.length);
  let routes = [...new Set(arrayOfPaths)];
  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {routes?.map((path) => (
          <li className="inline-flex items-center">
            <Link
              to={routes[routes.length - 1] !== path ? `./${path}` : ""}
              className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <BiChevronRight size={23} />
              <span className="first-letter:uppercase">{path}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default BreadCrumb;