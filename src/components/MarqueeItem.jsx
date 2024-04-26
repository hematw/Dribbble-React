
export default function MarqueeItem({ item }) {

    return (
        <>
            {
                item.isBig ?
                    <div
                        className="slide-big overflow-hidden marquee-item shadow-lg shadow-gray-300"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`,
                        }}
                    >
                        <div
                            className="marquee-item-overlay flex items-end"
                        >
                            <div>
                                <p>{item.name}</p>
                                <p>{item.title}</p>
                                <div className="mt-2">
                                    {
                                        item.skills.map(skill => {
                                            return (
                                                <span
                                                    className="border border-gray-400 rounded-full px-2 py-1 mr-2"
                                                    key={skill}>
                                                    {skill}
                                                </span>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div
                        className="slide-small w-48 marquee-item">
                        <img
                            className="block rounded-md w-full shadow-lg shadow-gray-300 "
                            src={item.imageUrl}
                            alt="" />
                        <p className="text-black mt-4">
                            {item.title}
                        </p>
                    </div>
            }
        </>
    )
}