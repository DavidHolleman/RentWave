"use client";

import { Input } from "@/app/components/Input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage } from "@/app/message/MessageServe";

function SendButton() {
	const { pending } = useFormStatus();
	return (
        <button type="submit">
            {pending ? "Sending message..." : "Send message"}
        </button>
	);
}

export default function MessageBar() {
    let [error, formAction] = useActionState<string, FormData>(sendMessage, "");

    return (
        <form action={formAction} className="newMessage">
            <Input
                label=""
                type="text"
                id="message"
                name="message"
                required={true}
                placeholder="Type a message"
            />
            <SendButton />
            <p> {error} </p>
        </form>
    );
}