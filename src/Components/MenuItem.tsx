import SidebarIcons from "./SidebarIcons";

function MenuItem({ item: { id, title, notifications }, onClick, selected }) {
    function clsx(arg0: string, arg1: string): string | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <div
            className={clsx(
                'w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer',
                selected === id ? 'sidebar-item-selected' : 'sidebar-item',
            )}
            onClick={() => onClick(id)}
        >
            <SidebarIcons id={id} />
            <div className="block sm:hidden xl:block ml-2">{title}</div>
            <div className="block sm:hidden xl:block flex-grow" />
            {notifications && (
                <div className="flex sm:hidden xl:flex bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
                    <div className="text-white text-sm">{notifications}</div>
                </div>
            )}
        </div>
    );
}

export default MenuItem