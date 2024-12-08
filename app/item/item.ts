"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/app/api/Database";

export async function tryPostItem(state: string, formData: FormData) {
    try {
        const results = await db.query(
          'INSERT INTO `items` (`owner`, `category`, `name`, `description`) VALUES (?,?,?,?)',
          ["dhollema@pnw.edu", formData.get("category"), formData.get("name"), formData.get("description")]
        );
        console.log(results); // results contains rows returned by server
        revalidatePath("/");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}