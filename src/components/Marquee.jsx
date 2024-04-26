import MarqueeItem from "./MarqueeItem.jsx"

export default function Marquee({ data, isBottom }) {

    const nameOfClass = isBottom ? "bottom-slide" : ""

    return (
        <div
            className="slider overflow-hidden my-10">
            <div
                className={`${nameOfClass} slide-track inline-block font-medium py-0 text-sm text-white`}>
                {
                    data.map(item => (
                        <MarqueeItem item={item} key={item.id} />
                    ))
                }
            </div>
            <div
                className={`${nameOfClass} slide-track inline-block font-medium py-0 text-sm text-white`}>
                {
                    data.map(item => (
                        <MarqueeItem item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}