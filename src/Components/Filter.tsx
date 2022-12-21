import {FaFilter} from 'react-icons/fa';
import RadioItem from "./RadioItem"
import Combobox from "./Combobox"
const Filter=()=> {
    return (
        <> 
        <header>
            <h3 className="flex gap-2 items-center text-blue-400 font-semibold ">
                <FaFilter />
                <span>Filters</span>
                </h3>
        </header>
        <div className="mt-3 ">
            <div className="">
                <label className="block mb-2 font-medium">By project name:</label>
                <input placeholder="ex; amazon" type="search" id="small-input" className="block w-full p-1.5 text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='divider border-b my-4 dark:border-[#353535]'></div>
            <div className="">
                <Combobox />
            </div> 
        </div>
        </>
    )
}

export default Filter