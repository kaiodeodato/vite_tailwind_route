import { Link } from "react-router-dom";

const Topbar = () => {
 
    return (
    <div className="flex justify-between items-center rounded-md px-3">
        <div className="flex justify-center items-center gap-2 p-2">
            <Link  to={"/"}>
                <div className="p-2 rounded-full hover:text-indigo-600 transition duration-300" >
                    home
                </div>
            </Link>
            <Link to={"/list"}>
                <div className="p-2 rounded-full hover:text-indigo-600 transition duration-300" >
                    list
                </div>
            </Link>
        </div>
    </div>
)
};

export default Topbar;