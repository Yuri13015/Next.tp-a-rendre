import Link from "next/link";


const Navbar = () => {
    return (
        <><div>Logo</div><div>
            <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

        </div></>
    )
}

export default Navbar