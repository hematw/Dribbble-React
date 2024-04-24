
import dribbbleLogo from "/dribbble.svg"

export default function FooterLinks() {
    return (
        <footer className="text-center">
            <div className="flex flex-col items-center sm:flex-row justify-between px-6 sm:px-10 py-6 text-sm">
                <img
                    className="w-24 "
                    src={dribbbleLogo}
                    alt="Dribbble Logo."
                />

                <div className="flex items-center">
                    <ul className="flex gap-6 my-4 sm:ml-8 flex-wrap justify-center">
                        <li className="font-semibold">
                            <a href="#">Find designers</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">Hire talent</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">Inspiration</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">Advertising</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">Blog</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">About</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">Careers</a>
                        </li>

                        <li className="font-semibold">
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <ul className="flex gap-4 sm:ml-8">
                        <li className="font-semibold text-lg">
                            <a href="#"><i className="bi bi-twitter"></i></a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="#"><i className="bi bi-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="flex justify-between flex-col sm:flex-row items-center px-6 sm:px-10 py-6 text-sm">
                <div className="flex items-center">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} Dribbble</p>
                    <ul className="flex gap-4 ml-8">
                        <li className="text-gray-500">
                            <a href="#">Terms</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Privacy</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Cookies</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-6">
                    <ul className="flex gap-4 my-4 sm:ml-8 flex-wrap justify-center">
                        <li className="text-gray-500">
                            <a href="#">Jobs</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Designers</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Freelancers</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Tags</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Places</a>
                        </li>

                        <li className="text-gray-500">
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}