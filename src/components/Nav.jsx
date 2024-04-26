import { useState } from "react"
import dribbbleLogo from "/dribbble.svg"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    const navClass = isOpen ? "left-[-32px] w-screen" : "left-[-120%]"

    return (
        <nav className="flex justify-between px-6 sm:px-10 py-6 text-sm relative">
            <div className="flex items-center">
                <button
                    className="text-2xl mr-4 md:hidden"
                    onClick={handleClick}
                >
                    {
                        isOpen ?
                            <i className="bi bi-x"></i> :
                            <i className="bi bi-list"></i>
                    }
                </button>
                <img className="w-24" src={dribbbleLogo} alt="Dribbble Logo." />
                <ul
                    className={`${navClass} flex transition-all duration-1000 flex-col md:flex-row gap-8 ml-8 p-6 bg-white md:bg-transparent absolute md:static  top-24`}
                >
                    <li className="font-semibold">
                        <a href="#">
                            Find designers
                            <i className="bi bi-caret-down-fill"></i>
                        </a>
                    </li>

                    <li className="font-semibold">
                        <a href="#">Inspiration</a>
                    </li>

                    <li className="font-semibold">
                        <a href="#">Courses<i className="bi bi-caret-down-fill"></i></a>
                    </li>

                    <li className="font-semibold">
                        <a href="#">Jobs</a>
                    </li>

                    <li className="font-semibold">
                        <a href="#">Go Pro</a>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex w-12 sm:w-56 items-center justify-center sm:bg-white px-8 py-4 rounded-full">
                    <span className="flex items-center w-4 text-gray-500 text-xl sm:text-md">
                        <i className="bi bi-search"></i>
                    </span>

                    <input
                        type="text"
                        className="bg-transparent w-0 sm:w-48 focus:outline-none indent-4"
                        placeholder="Search..."
                    />
                </div>

                <button className="font-semibold hidden sm:block">
                    Login
                </button>

                <button className="px-6 py-3 font-semibold rounded-full bg-black text-white">
                    Sign up
                </button>
            </div>
        </nav>
    )
}