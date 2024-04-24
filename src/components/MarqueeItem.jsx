export default function MarqueeItem(props) {
    return (
        <>
            {
                props.bigItem &&
                <div
                    className="slide-big marquee-item shadow-lg shadow-gray-300"
                    style={{
                        backgroundImage: `url(${props.bigItem.imageUrl})`,
                    }}
                >
                    <div
                        className="marquee-item-overlay flex items-end"
                    >
                        <div>
                            <p>{props.bigItem.name}</p>
                            <p>{props.bigItem.title}</p>
                            <div className="mt-2">
                                {
                                    props.bigItem.skills.map(skill => {
                                        return (
                                            <span
                                                className="border border-gray-400 rounded-full px-2 py-1 mr-2"
                                                key={skill}
                                            >
                                                {skill}
                                            </span>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                props.smallItem &&
                <div
                    className="w-48 marquee-item"
                >
                    <img
                        className="block rounded-md w-full shadow-lg shadow-gray-300 "
                        src={props.smallItem.imageUrl}
                        alt="" />
                    <p
                        className="text-black mt-4"
                    >
                        {props.smallItem.title}
                    </p>
                </div>
            }
        </>
    )
}