"use client";

import { Input, InputBig } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";
import RentWaveLogo from "@/app/components/RentWaveLogo";
import { tryPostItem, tryGetCategories } from "@/app/item/item";

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

export default function PostItem() {
    let [error, formAction] = useFormState<string, FormData>(tryPostItem, "");

	return (
        <div className="box">
            <RentWaveLogo />
            <h1> Post an item </h1>
            <br />
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
                        placeholder="Enter a description"
                    />
                    <PostItemButton />
                </form>
            </div>
        </div>
	);
}