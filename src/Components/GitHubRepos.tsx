import { useEffect, useState, useRef } from "react";
import { BsPlusCircle } from "react-icons/bs";
import SuccessMessage from "./SuccessMessage";
import { __createNewRepo } from "../Utils/github/__createNewRepo";
import { __getListOfRepos } from "../Utils/github/__getListOfRepos";
import RepoItem from "./repoItem";
import FetchMoreReposBtn from "./FetchMoreReposBtn";
import AddQuickRepo from "./addQuickRepo";
// import Image from "./Image";
export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [repoConfig, setRepoConfig] = useState({ per_page: 5 });
  const [isLoad, setLoad] = useState(true);
  const [isRepoDeleted, setIsDeleted] = useState(false);
  const [isDeleteBtnActive, setDeleteBtnActivation] = useState(false);
  const [isRepoAdded, setIsAdded] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const inputOfRepoName = useRef<HTMLInputElement>(null);

  ///// -------------Git repos list
  useEffect(() => {
    __getListOfRepos(repoConfig).then((fetchedRepos) => {
      setRepos(fetchedRepos);
      setLoad(false);
    });
  }, [repoConfig, isRepoDeleted, isRepoAdded]);

  ///// ------------- Create Repo
  async function createRepo() {
    __createNewRepo(inputOfRepoName?.current?.value!);
    if (inputOfRepoName.current!) {
      inputOfRepoName.current.value = "";
    }
    setIsHidden(true);
    setIsAdded(true);
  }
  ///// ------------ Delete repo
  async function deleteRepo(event: React.MouseEvent<HTMLElement>) {
    // To Make sure that event target is button https://stackoverflow.com/questions/49631688/property-dataset-does-not-exist-on-type-eventtarget
    if (!(event.target instanceof HTMLButtonElement)) return;
    // __deleteRepo(event.target.dataset.reponame!);
  }

  let UIReposList = repos?.map(
    ({ size, name, has_issues, svn_url, created_at }, index: number) => (
      <RepoItem
        key={`${index}__${name}--${size}`}
        index={index}
        name={name}
        size={size}
        has_issues={has_issues}
        svn_url={svn_url}
        isRepoDeleted={isRepoDeleted}
        createdAt={created_at}
      >
        <button
          className={`mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
          data-reponame={name}
          onClick={(event) => {
            deleteRepo(event);
            setIsDeleted(true);
          }}
        >
          Delete
        </button>
      </RepoItem>
    )
  );

  return (
    <div className="flex p-4 flex-col h-full overflow-y-auto relative">
      {/* <ToastSuccess className={`${isRepoAdded ? "" : "hidden"}`} /> */}
      <SuccessMessage isRepoAdded={isRepoAdded} setIsAdded={setIsAdded}/>
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">GitHub Repos</div>
        <button
        onClick={() => setIsHidden(!isHidden)}
        >
          <BsPlusCircle
          className="w-5 h-5 cursor-pointer	"

        />
          </button>
        <AddQuickRepo isHidden={isHidden} inputOfRepoName={inputOfRepoName}>
          <button
            onClick={() => createRepo()}
            type="button"
            className="text-white absolute right-2.5 bottom-1 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
          >
            New
          </button>
        </AddQuickRepo>
      </div>
      <div className="">favourites</div>

      {UIReposList}

      <FetchMoreReposBtn
        isLoad={isLoad}
        setLoad={setLoad}
        repoConfig={repoConfig}
        setRepoConfig={setRepoConfig}
        repos={repos}
      />
    </div>
  );
}
