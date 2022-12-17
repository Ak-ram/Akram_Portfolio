import { Octokit } from "@octokit/core";
import { useEffect, useState, useRef } from "react";
import { BsLink45Deg, BsPlusCircle, BsThreeDotsVertical } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import Icon from "./Icon";
import Spinner from "./Spinner";
import ToastDanger from "./toastDanger";
import ToastSuccess from "./toastSuccess";
// import Image from "./Image";
export default function Repos() {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  });

  const [repos, setRepos] = useState([]);
  const [repoConfig, setRepoConfig] = useState({ per_page: 5 });
  const [isLoad, setLoad] = useState(true);
  const [isRepoDeleted, setIsDeleted] = useState(false);
  const [isDeleteBtnActive, setDeleteBtnActivation] = useState(false);
  const [isRepoAdded, setIsAdded] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const inputOfRepoName = useRef<HTMLInputElement>(null);
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?visibility=all&per_page=${repoConfig.per_page || 5}`, // Fix Issue
        {}
      );

      setRepos(data);
      setLoad(false);
    }
    getRepos();
  }, [repoConfig, isRepoDeleted]);

  ///// ------------ Delete repo
  async function deleteRepo(event) {
    await octokit.request(
      `DELETE /repos/{owner}/{repo}`, // Fix Issue
      {
        owner: "ak-ram",
        repo: `${event.target.dataset.reponame}`
      }
    );
    console.log("event is fired", event.target.dataset.reponame);
  }

  ///// ------------- Create Repo
  async function createRepo() {
    await octokit.request("POST /user/repos", {
      name: `${inputOfRepoName?.current?.value}`,
      description: "This is your first repo!",
      homepage: "https://github.com",
      private: false,
      is_template: true,
    });
    if (inputOfRepoName.current!) {
      inputOfRepoName.current.value = "";
    }
    setIsHidden(true);
    setIsAdded(true);
    console.log("event is fired", inputOfRepoName?.current?.value);
  }

  let UIReposList = repos?.map(
    ({ size, name, has_issues, svn_url }, index: number) => (
      <div
        className="flex items-center mt-3 relative show-repo-size"
        key={index}
      >
        <div className="">{index + 1}</div>

        {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
        <div className="ml-2 whitespace-nowrap text-ellipsis mr-3 w-28">
          {name}
        </div>
        <div className="flex-grow" />
        <span
          className={`repo-size mr-2 text-sm whitespace-nowrap ${
            size > 2000
              ? "text-red-500"
              : size < 500
              ? "text-green-500"
              : "text-premium-yellow"
          }`}
        >
          {size} kb
        </span>
        <div className="">
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={svn_url}
          >
            <BsLink45Deg />
          </a>
        </div>
        <Icon
          path={
            has_issues
              ? "res-react-dash-country-up"
              : "res-react-dash-country-down"
          }
          className="w-4 h-4 mx-3"
        />
        <BsThreeDotsVertical className="w-2 h-2" />
        {/* <button data-reponame={name} onClick={(event) => {
        deleteRepo(event)
        setIsDeleted(true)
      }
      }>Del</button>  */}

        {/* //////////////// */}

        <button
          data-popover-target="popover-hover"
          data-popover-trigger="hover"
          type="button"
          onClick={(e) =>
            e?.currentTarget?.nextElementSibling?.classList.toggle("invisible")
          }
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </button>
        <div
          data-popover
          id="popover-hover"
          role="tooltip"
          className={`invisible absolute z-10 inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
        >
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold dark:text-red-500 dark:text-white">
              Confirm Deletion
            </h3>
          </div>
          <div className="px-3 py-2 flex flex-col">
            <p>This Repo will permenantly delete</p>
            <button className="mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            data-reponame={name}
            onClick={(event) => {
              deleteRepo(event)
              setIsDeleted(true)
      }}
      >
              Delete
            </button>
          </div>
          <div data-popper-arrow></div>
        </div>
        {/* ///////////////////////// */}
      </div>
    )
  );

  return (
    <div className="flex p-4 flex-col h-full overflow-y-auto relative">
      <ToastSuccess className={`${isRepoAdded ? "" : "hidden"}`} />
      <ToastDanger className={`${isRepoDeleted ? "" : "hidden"}`} />
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">GitHub Repos</div>
        <BsPlusCircle
          className="w-5 h-5 cursor-pointer	"
          onClick={() => setIsHidden(!isHidden)}
        />

        <div
          className={`${
            isHidden ? "hidden" : ""
          } right-10 z-10 p-3 add-new-repo absolute top-5 bg-[#050708] rounded-lg`}
        >
          <form>
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repo name:
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <VscRepoForked className="text-green-500" />
              </div>
              <input
                type="text"
                id="createNewRepoInput"
                className="outline-none block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="new-repo"
                ref={inputOfRepoName}
                required
              />
              <button
                onClick={() => createRepo()}
                type="button"
                className="text-white absolute right-2.5 bottom-1 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                New
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="">favourites</div>

      {UIReposList}

      {/* <div className="flex-grow" /> */}
      <div className="flex justify-center mt-4 relative">
        <button
          type="button"
          onClick={() => {
            setLoad(true);
            setRepoConfig({ ...repoConfig, per_page: repoConfig.per_page + 5 });
            console.log(repos);
          }}
          className="text-white bg-[#050708] hover:bg-[#050708]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 mr-2 mb-2"
        >
          Total Repos:
          <span className="ml-1 w-10 text-sm text-premium-yellow">
            {" "}
            {isLoad ? <Spinner /> : repos?.length}
          </span>
        </button>
      </div>
    </div>
  );
}
