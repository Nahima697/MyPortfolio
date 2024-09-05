
import { Section } from "./Section"
import { Link } from "lucide-react"

export const Header = () => {
    return (
        <header className ="sticky top-0 py-4">
            <Section className ="flex items-baseline">
                <h1 className="text-lg font-bold text-primary"> Portfolio </h1>
                <div className ="flex-1">
                    <ul>
<Link href="" className="size-6">Accueil</Link>
                    </ul>
                </div>
                </Section> 
        </header>
    )
}