"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/app/Database";
import { Item, Review } from "@/app/Types";

export async function tryPostItem(state: string, formData: FormData) {
    try {
        const results = await db.query(
          'INSERT INTO `items` (`owner`, `category`, `name`, `description`) VALUES (?,?,?,?)',
          ["dhollema@pnw.edu", formData.get("category"), formData.get("name"), formData.get("description")]
        );
        console.log(results);
        revalidatePath("/");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}

export async function getCategories(): Promise<string[]> {
    const results = await db.query(
        'SELECT * FROM `itemcategories`'
    );
    const catagories = Array.from(results[0] as any).map((c) => (c as any).CategoryName as string);
    //console.log(catagories);
    return (catagories);
}

export async function getAllItems(): Promise<Item[]> {
    const results = await db.query(
        'SELECT * FROM `items`'
    );
    const items = Array.from(results[0] as any).map((c) => (c as any) as Item);
    //console.log(items);
    return (items);
}

export async function getSomeItems(param: string): Promise<Item[]> {
    const results = await db.query(
        'SELECT * FROM `items` WHERE `name` LIKE ? OR `description` LIKE ? OR `category` LIKE ?',
        ["%"+param+"%", "%"+param+"%", "%"+param+"%"]
    );
    const items = Array.from(results[0] as any).map((c) => (c as any) as Item);
    //console.log(items);
    return (items);
}

export async function getSingleItem(param: number): Promise<Item> {
    const results = await db.query(
        'SELECT * FROM `items` WHERE `id` = ?', [param]
    );
    const item = Array.from(results[0] as any).map((c) => (c as any) as Item)[0];
    //console.log(item);
    return (item);
}

export async function getItemReviews(param: number): Promise<Review[]> {
    const results = await db.query(
        'SELECT RentalId, Author, Rating, Content, Time ' +
        'FROM `reviews`, `rentals` WHERE rentals.Id = reviews.RentalId AND `ItemId` = ?', [param]
    );
    const reviews = Array.from(results[0] as any).map((c) => (c as any) as Review);
    //console.log(item);
    return (reviews);
}

export async function getUserRating(user: string) {
    const results = await db.query(
        'select AVG(re.rating) as CumulativeRating from reviews re join rentals rt on re.rentalId = rt.Id '+
        'where (case when rt.renter != re.author then rt.renter else rt.owner end) = ?',
        [user]
    );
    return parseFloat((results[0] as any)[0].CumulativeRating);
}

export async function startRental(state: string, formData: FormData) {
    try {
        const results = await db.query(
          'INSERT INTO `rentals` (`ItemId`, `Renter`, `Owner`) VALUES (?,?,?)',
          [formData.get("ItemId"), "dhollema@pnw.edu", formData.get("Owner")]
        );
        console.log(results);
        revalidatePath("/message");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/`);
}