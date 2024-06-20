// components/Dropdown.jsx
import React from "react";
import Link from "next/link";

const Dropdown = ({ categories }) => {
    return (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="py-2">
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link href={category.path} passHref>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize">
                                {category.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;