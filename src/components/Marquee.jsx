import MarqueeItem from "./MarqueeItem.jsx"

export default function Marquee(props) {
    return (
        <div className="slider">
            <div className="slide-track flex items-center font-medium gap-8 overflow-hidden py-10 text-sm text-white">
                {
                    props.data.map(item => (
                        <MarqueeItem item={item} />
                    ))
                }
            </div>
        </div>
    )
}