"use server"
import db from "@/app/api/Database";

export async function getCategories(): Promise<string[]> {
    const results = await db.query(
        'SELECT * FROM `itemcategories`'
    );
    const catagories = Array.from(results[0] as any).map((c) => (c as any).CategoryName as string);
    console.log(catagories);
    return (catagories); // results contains rows returned by server
}