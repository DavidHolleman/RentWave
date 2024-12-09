"use client";

import { Input, InputBig } from "@/app/components/Input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { tryPostItem } from "@/app/item/item";

function PostItemButton() {
	const { pending } = useFormStatus();
	return (
		<input
			className="mb-0"
			type="submit"
			value={pending ? "Posting Item..." : "Post Item"}
		/>
	);
}

export default function PostItemForm({ categories }: { categories: string[] }) {
    let [error, formAction] = useActionState<string, FormData>(tryPostItem, "");

    return (
        <div className="form">
            <form action={formAction}>
                <Input
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter item name"
                    required={true}
                />
                <label htmlFor="category">Category</label>
                <select name="category" id="category" defaultValue={""}>
                    <option value="" disabled>Select a category</option>
                    {categories.map((f:string) => (
                        <option key={f} value={f}> {f} </option>
                    ))}
                </select>
                <InputBig
                    label="Description"
                    id="description"
                    name="description"
                    placeholder="Enter a description"
                />
                <PostItemButton />
            </form>
        </div>
    );
}