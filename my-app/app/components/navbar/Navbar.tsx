import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-25 (or h-[100px] for specific height)">
            <div className="text-5xl font-bold">Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;
