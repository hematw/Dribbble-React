

export default function Hero() {
    return (
        <div className="flex flex-col items-center px-6 sm:px-10 py-8 text-center">
            <div className="flex flex-col items-center md:w-[830px] font-medium">
                <p className="my-14 font-source-serif font-semibold tracking-wide rounded-full bg-pink-300 px-4 py-2">
                    Over 3 million ready-to-work creatives!
                </p>

                <h1 className="font-source-serif text-5xl md:text-7xl tracking-wider font-medium">
                    The world’s destination for design
                </h1>

                <p className="py-7">
                    Get inspired by the work of millions of top-rated designers & agencies around the world.
                </p>

                <button className="text-sm px-6 py-4 font-semibold rounded-full bg-black text-white">
                    Get started
                </button>
            </div>
        </div>
    )
}

