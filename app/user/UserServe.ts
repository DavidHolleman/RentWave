"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/app/Database";

export async function tryLogin(state: string, formData: FormData) {
    try {
        const results = await db.query(
            'SELECT * FROM `users` WHERE `email` = ? and `password` = ?',
            [formData.get("email"), formData.get("password")]
        );
        console.log(results[0]);
        revalidatePath("/");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}

export async function tryCreateAccount(state: string, formData: FormData) {
    try {
        const results = await db.query(
            'INSERT INTO `users` VALUES (?,?,?,?,?,0,0)',
            [formData.get("email"), formData.get("firstname"), formData.get("lastname"), formData.get("password"), formData.get("location")]
        );
        console.log(results);
        revalidatePath("/");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}

export async function tryChangePassword(state: string, formData: FormData) {
    try {
        const results = await db.query(
            'UPDATE `users` SET `password` = ? WHERE `email` = ? AND `password` = ?',
            [formData.get("password"), formData.get("email"), formData.get("oldpass")]
        );
        console.log(results);
        revalidatePath("/");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}

export async function getUserRating(user:number) {
    const results = await db.query(
        'select AVG(re.rating) as CumulativeRating from reviews re join rentals rt on re.rentalId = rt.Id ' +
        'where (case when rt.renter != re.author then rt.renter else rt.owner end) = ?',
        [user]
    );
    return parseFloat((results[0] as any)[0].CumulativeRating);
}

export async function getUserInfo(user:number) {
    const results = await db.query(
        'select firstName, lastName, email, location from users',
        [user]
    );
    return parseFloat((results[0] as any)[0].CumulativeRating);
}