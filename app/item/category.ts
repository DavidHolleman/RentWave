"use server"
import db from "@/app/api/Database";
import { QueryResult } from "mysql2";

// export default class Categories {
//     public static async getCategories(): Promise<QueryResult|Error["message"]> {
//         try {
//             const results = await db.query(
//             'SELECT * FROM `itemcategories`'
//             );
//             console.log(results[0]);
//             return (results[0]); // results contains rows returned by server
//         } catch (e: any) {
//             console.log(e);
//             return (e as Error).message;
//         }
//     }
// }

export async function getCategories(): Promise<QueryResult|Error["message"]> {
    try {
        const results = await db.query(
        'SELECT * FROM `itemcategories`'
        );
        console.log(results[0]);
        return (results[0]); // results contains rows returned by server
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
}