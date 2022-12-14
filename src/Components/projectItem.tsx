import { Link } from "react-router-dom";
import {
  AiOutlineBook,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { BsDashCircle } from "react-icons/bs";
import { VscIssueDraft, VscIssues } from "react-icons/vsc";

const ProjectItem = ({
  name,
  createdAt,
  language,
  fork,
  visibility,
  id,
  hasIssues,
  forksCount,
  i,
  repoConfig,
}) => {
  const indexingSys =
    i + 1 + repoConfig.per_page * (repoConfig.page - 1) || i + 1;
  return (
    <tr className="group hover:bg-[#050708]/20">
      <td className="sm:p-3 py-2 px-1 border-b border-b-gray-200 border-l-4 dark:border-l-transparent dark:group-hover:border-l-blue-400 dark:border-gray-600/20">
        <div className="flex  items-center">
          {indexingSys}. {name}
          <em className="ml-2 text-yellow-600 hidden lg:inline opacity-0 group-hover:opacity-100">
            #{id}
          </em>
        </div>
      </td>
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-600/20">
        <div className="flex">
          {fork ? (
            <>
              <BiGitRepoForked size={18} className="dark:text-green-500" />
              <span className="xs:block hidden ml-2">Frok</span>
            </>
          ) : language ? (
            <>
              <img
                className="w-5 h-5 rounded"
                src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${language?.toLowerCase()}/${language?.toLowerCase()}.png`}
                alt={language}
              />
              <span className="xs:block hidden ml-2">{language}</span>
            </>
          ) : name.toLowerCase() === "Ak-ram".toLocaleLowerCase() ? (
            <>
              <AiOutlineBook size={18} className="dark:text-blue-500" />
              <span className="xs:block hidden ml-2">README File</span>
            </>
          ) : (
            <>
              <BsDashCircle size={18} className="dark:text-red-500" />
              <span className="xs:block hidden ml-2"> Empty Repo</span>
            </>
          )}
        </div>
      </td>

      <td className=" sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-600/20">
        <span className="text-xs text-gray-600 mr-1">{forksCount}</span>
        <BiGitRepoForked
          size={18}
          className="inline dark:text-green-500 mr-1"
        />
        {/* {visibility === "public" ? (
          <AiOutlineEye size={23} className="inline dark:text-green-500 mx-1" />
        ) : (
          <AiOutlineEyeInvisible
            size={23}
            className="inline dark:text-red-500 mx-1"
          />
        )} */}
        {hasIssues ? (
          <VscIssues
            data-hint="has open issues"
            size={18}
            className="showHint inline dark:text-green-500 mx-1"
          />
        ) : (
          <VscIssueDraft
            data-hint="has no issues"
            size={18}
            className="showHint inline dark:text-red-500 mx-1"
          />
        )}
      </td>
      <td className="flex sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-600/20">
        <div className="flex items-center">
          <div className="sm:flex hidden flex-col">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            <div className="text-gray-400 text-xs">
              {new Date(createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          {/* <BsCalendarDate size={18} /> */}
          <span className="sm:hidden p-1 border bg-card rounded border-gray-600/30">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </span>
        </div>
        <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-2 xs:ml-auto">
          <Link to={name.toLowerCase()}>
            <AiOutlineInfoCircle size={18} className="text-yellow-500" />
          </Link>
        </button>
      </td>
    </tr>
  );
};

export default ProjectItem;
