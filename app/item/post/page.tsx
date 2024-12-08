"use client";

import { Input, InputBig } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";
import RentWaveLogo from "@/app/components/RentWaveLogo";
import { tryPostItem } from "@/app/item/item";
import { getCategories } from "@/app/item/category";

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

function queryResultToArray<T>(queryResult: any): T[] {
    return Array.from(queryResult);
}

export default function PostItem() {
    let [error, formAction] = useFormState<string, FormData>(tryPostItem, "");

    let categorySet = getCategories;
    console.log(categorySet)
    const categories = queryResultToArray<any>(categorySet);
    // let categorySet = new Set<string>;
    // for(let category of tryGetCategories) {
    //     categorySet.add(category);
    // }
    // let categories = Array.from(categorySet);

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
                    <select name="category" id="category" defaultValue={""}>
                        <option value="" disabled>Select a category</option>
                        {/* <option value="books">Books</option>
                        <option value="clothing">Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools</option>
                        <option value="miscellaneous">Miscellaneous</option> */}
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
        </div>
	);
}