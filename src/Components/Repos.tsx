import { useOctokitResponse } from "../Contexts/OCTOKITAPIContext";
import Icon from "./Icon";
// import Image from "./Image";

export default function Repos() {
  const {  gitHubData } = useOctokitResponse();
  console.log(gitHubData);

  return (
    <div className="flex p-4 flex-col h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">GitHub Repos</div>
        <Icon path="res-react-dash-plus" className="w-5 h-5" />
      </div>
      <div className="">
        Result:{" "}
        <span className="text-sm text-premium-yellow">
          {gitHubData.isLoading
            ? "wait..."
            : `${gitHubData?.items?.length} of ${gitHubData?.total_count}`}
        </span>
      </div>
      {gitHubData?.items?.map(
        ({ name, has_issues, svn_url }, index: number) => (
          <div className="flex items-center mt-3" key={index}>
            <div className="">{index + 1}</div>

            {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
            <div className="ml-2 whitespace-nowrap text-ellipsis mr-3">
              {name}
            </div>
            <div className="flex-grow" />
            <div className="">
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href={svn_url}
              >
                Visit
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
            <Icon path="res-react-dash-options" className="w-2 h-2" />
          </div>
        )
      )}

      {/* <div className="flex-grow" /> */}
      <div className="flex justify-center mt-4">
        <button
          type="button"

          className="text-white bg-[#050708] hover:bg-[#050708]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 mr-2 mb-2"
        >
          GitHub Account
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            className="fill-white w-6 ml-2 octicon octicon-mark-github v-align-middle"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
