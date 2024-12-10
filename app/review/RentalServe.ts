"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/app/Database";
import { Rental } from "@/app/Types";

export async function tryPostReview(state: string, formData: FormData) {
    try {
        const results = await db.query(
          'INSERT INTO `reviews` (`RentalId`, `Author`, `Rating`, `Content`) VALUES (?,?,?,?)',
          [formData.get("rental"), "dhollema@pnw.edu", formData.get("rating"), formData.get("review")]
        );
        console.log(results);
        revalidatePath("/");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}

export async function getRentals(): Promise<Rental[]> {
    const results = await db.query(
        'SELECT * FROM `rentals`'
    );
    const rentals = Array.from(results[0] as any).map((c) => (c as any) as Rental);
    //console.log(rentals);
    return (rentals);
}