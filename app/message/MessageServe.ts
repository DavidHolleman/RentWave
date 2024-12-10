"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/app/Database";
import Message from "@/app/message/MessageType";

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
        'SELECT * FROM `messages`'
    );
    const messages = Array.from(results[0] as any).map((c) => (c as any) as Message);
    //console.log(messages);
    return (messages);
}