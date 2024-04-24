export default function MarqueeItem(props) {
    return (
        props.item &&
        <div
            className="slide-big marquee-item"
            style={{
                backgroundImage: `url(${props.item.imageUrl})`,
            }}
        >
            <div className="marquee-item-overlay flex items-end">
                <div>
                    <p>{props.item.name}</p>
                    <p>{props.item.title}</p>
                    <div className="mt-2">
                        {
                            props.item.skills.map(skill => {
                                return <span className="border border-gray-400 rounded-full px-2 py-1 mr-2">{skill}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}