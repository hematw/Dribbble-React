
import FooterCTA from "./FooterCTA"
import Marquee from "./Marquee"
import FooterLinks from "./FooterLinks"
import { footerMarqueeData } from "../data"

export default function Footer() {
    return (
        <footer>
            <FooterCTA />
            <Marquee footerMarqueeData={footerMarqueeData} />
            <FooterLinks />
        </footer>
    )
}