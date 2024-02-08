import SearchUsers from "../lib/data"

export default async function Page(){


const listUsers = await SearchUsers()
return (
    <>
        <h1 className="text-center text-4xl font-bold my-6">Liste des utilisateurs</h1>
        <div className="overflow-x-auto">
           
                <div className="w-full lg:w-5/6">
                    <div className="bg-#0d0c22 shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Prénom</th>
                                    <th className="py-3 px-6 text-left">Email</th>
                                </tr>
                            </thead>
                           
                                {listUsers?.map((utilisateur) => (
                                    <tr key={utilisateur.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {utilisateur.name}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {utilisateur.email}
                                        </td>
                                    </tr>
                                ))}
                            
                        </table>
                    </div>
                </div>
            </div>
        
    </>
);
}