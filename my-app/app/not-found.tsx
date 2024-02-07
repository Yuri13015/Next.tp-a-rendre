import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>NotFound</h2>
            <p> Desoler la page que vous avez demander n'existe pas</p>
            <Link href="/">Retour</Link>
        </div>
    )
}

export default NotFound