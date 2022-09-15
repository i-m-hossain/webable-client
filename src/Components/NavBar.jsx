import React, { useEffect, useState } from "react";
import Input from "./Input";

const NavBar = ({setUrl}) => {
    const [pageMounted, setPageMounted]= useState(true)
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        if(!pageMounted){ //we don't want search functionality at first when page mounts
            const delayDebounceFn = setTimeout(() => {
                console.log(searchTerm.trim());
                setUrl(`http://localhost:5000/comments/searchTerm?searchTerm=${searchTerm}`)
            }, 1000);
            return () => clearTimeout(delayDebounceFn);
        }
        setPageMounted(false)
    }, [searchTerm, setUrl]);

    return (
        <nav className="bg-gray-200 py-2 flex items-center justify-between px-2">
            <h4 className="text-red-400 font-bold">Webable</h4>
            <ul className="w-1/4">
                <li className="list-none">
                    <Input
                        placeholder="Search comment"
                        type="text"
                        className="font-medium p-2 border rounded"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                </li>
            </ul>
        </nav>  
    );
};

export default NavBar;
