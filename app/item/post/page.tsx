"use client";

import { Input, InputBig } from "@/app/components/Input";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";

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

function tryPostItem(state: string, payload: FormData): string | Promise<string> {
    throw new Error("Function not implemented.");
}

export default function Create() {
    //note that Server component cannot return null or Class objects, only plain JSONs and primitive types
    let [error, formAction] = useFormState<string, FormData>(tryPostItem, "");

	return (
        <div className="box">
            <Image className="center"
                src="/logo.png"
                alt="rentwave logo"
                width={180}
                height={180}
                priority
            />
            <h1> Post an item </h1>
            <br />
            <div className="form">
                    <Input
                        label="Name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter item name"
                        required={true}
                    />
                    <label htmlFor="category">Choose a Category:</label>
                    <select name="category" id="category">
                        <option value="" disabled selected>Select a category</option>
                        <option value="books">Books</option>
                        <option value="clothing">Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                    <InputBig
                        label="Description"
                        id="description"
                        name="description"
                    />
                    <PostItemButton />
            </div>
        </div>
	);
}