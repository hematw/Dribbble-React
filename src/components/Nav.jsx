import dribbbleLogo from "/dribbble.svg"

export default function Nav() {
    return (
        <nav className="flex justify-between px-10 py-6 text-sm">
            <div className="flex items-center">
                <img className="w-24" src={dribbbleLogo} alt="Dribbble Logo." />
                <ul className="flex gap-8 ml-8">
                    <li className="font-semibold"><a href="#">Find designers</a></li>
                    <li className="font-semibold"><a href="#">Inspiration</a></li>
                    <li className="font-semibold"><a href="#">Courses</a></li>
                    <li className="font-semibold"><a href="#">Jobs</a></li>
                    <li className="font-semibold"><a href="#">Go Pro</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex w-56 items-center bg-white px-6 py-4 rounded-full">
                    <span className="flex items-center w-4 ">
                        <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="bg-transparent focus:outline-none indent-4" placeholder="Search..." />
                </div>
                <button className="font-semibold">Login</button>
                <button className="px-6 py-3 font-semibold rounded-full bg-black text-white">Sign up</button>
            </div>
        </nav>
    )
}