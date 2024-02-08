import SearchUsers from "../lib/data"

export default async function Page(){


const listUsers = await SearchUsers()
return(
    <>
    <h1>Liste des utilisateurs</h1>

        {listUsers?.map((utilisateur) => (
            <div className="" key={utilisateur.id}>
                <h3 className="text-white text-3xl">Prenom : {utilisateur.name}</h3>
            </div>
           
        ))}

    </>
)

}