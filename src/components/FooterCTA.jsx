

export default function FooterCTA() {
    return (
        <div className="flex flex-col items-center px-6 sm:px-10 py-40 text-center bg-yellow-200">
            <div className="flex flex-col items-center sm:w-[600px] font-medium">
                <h1 className="font-source-serif text-4xl sm:text-6xl tracking-wider font-medium leading-tight">
                    Find your next designer today
                </h1>

                <p className="py-7 tracking-wider leading-relaxed">
                    The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
                </p>

                <div className="mt-8">
                    <button className="text-sm px-4 py-4 font-semibold rounded-full bg-black text-white">
                        Get started now
                    </button>

                    <button className="text-sm px-4 py-4 font-semibold rounded-full bg-white ml-2">
                        Learn about hiring
                    </button>
                </div>
                
                <p className="mt-12 tracking-wider leading-relaxed">
                    Are you a designer?

                    <a href="#" className="underline">
                        Join Dribbble
                    </a>
                </p>
            </div>
        </div>
    )
}

