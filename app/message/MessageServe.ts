"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/app/Database";
import { Message } from "@/app/Types";

export async function sendMessage(state: string, formData: FormData) {
    try {
        const results = await db.query(
          'INSERT INTO `messages` (RentalId, Sender, Content) VALUES (?,?,?)',
          ["1", "dhollema@pnw.edu", formData.get("message")]
        );
        console.log(results);
        revalidatePath("/message");
    } catch (e: any) {
        console.log(e);
        return (e as Error).message;
    }
    redirect(`/message`);
}

export async function getAllMessages(): Promise<Message[]> {
    const results = await db.query(
        'SELECT * FROM `messages` WHERE RentalId = ?', [1]
    );
    const messages = Array.from(results[0] as any).map((c) => (c as any) as Message);
    //console.log(messages);
    return (messages);
}

export async function getAllConversations(): Promise<string[]> {
    const results = await db.query(
        'select case when renter != ? then renter else owner end as receiver from rentals '+
        'where Id = (SELECT DISTINCT RentalId FROM `messages`)',
        ["dhollema@pnw.edu"]
    );
    const conversations = Array.from(results[0] as any).map((c) => (c as any).receiver as string);
    console.log(conversations);
    return (conversations);
}