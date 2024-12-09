"use server";

import RentWaveLogo from "@/app/components/RentWaveLogo";
import { getCategories } from "@/app/item/category";
import PostItemForm from "./PostForm";

export default async function PostItem() {
    let categorySet = await getCategories();

	return (
        <div className="box">
            <RentWaveLogo />
            <h1> Post an item </h1>
            <br />
            <PostItemForm categories={categorySet}></PostItemForm>
        </div>
	);
}