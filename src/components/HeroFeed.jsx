import { feedData } from "../data";
import Card from "./Card";


export default function HeroFeed() {
    return (
        <div className="p-6 sm:p-16">
            <h1 className="text-4xl text-center">Explore inspiring designs</h1>
            <div className="flex flex-wrap  font-medium gap-8 overflow-hidden py-10 text-sm">
                {
                    feedData.map(item => (
                        <Card item={item} key={item.title} />
                    ))
                }
            </div>
        </div>
    )
}