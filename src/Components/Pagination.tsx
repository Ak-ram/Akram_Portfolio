const Pagination = ({ isLoad, setLoad, setRepoConfig, repoConfig, repos }) => {
  return (
    <nav aria-label="Page navigation" className="w-fit mt-8 mx-auto">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                per_page: repoConfig.per_page - 1,
              });
            }}
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 1,
              });
            }}
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 2,
              });
            }}
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 3,
              });
            }}
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 4,
              });
            }}
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                per_page: repoConfig.per_page + 1,
              });
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
