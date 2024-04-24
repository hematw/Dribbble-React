import MarqueeItem from "./MarqueeItem.jsx"

export default function Marquee(props) {

    return (
        <div
            className="slider  overflow-hidden">
            <div
                className="slide-track flex items-center font-medium gap-8 overflow-hidden py-10 text-sm text-white">
                {
                    props.marqueeData &&
                    props.marqueeData.map(item => (
                        <MarqueeItem bigItem={item} key={item.title} />
                    ))
                }

                {
                    props.footerMarqueeData &&
                    props.footerMarqueeData.map(item => (
                        <MarqueeItem smallItem={item} key={item.title} />
                    ))
                }
            </div>
        </div>
    )
}