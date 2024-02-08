import { sql } from "@vercel/postgres";
import { Users } from "./definition";


export default async function SearchUsers(){

    try {

        const tableUsers = sql<Users>`
        SELECT *
        FROM users
        ORDER BY users.name DESC;
        `;

        return (await tableUsers).rows;


    } catch{

    }
}