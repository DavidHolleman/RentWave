"use client"

import { Input } from "@/app/components/Input";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<input
			className="mb-0"
			type="submit"
			value={pending ? "Searching" : "Search"}
		/>
	);
}

function trySearch(state: string, formData: FormData): string | Promise<string> {
    redirect("/item?p="+[formData.get("search")]);
}

export default function SearchBar() {
    let [error, formAction] = useActionState<string, FormData>(trySearch, "");
	return (
        <div className="form">
          <form action={formAction} className="search">
            <Input
              label=" "
              type="text"
              id="search"
              name="search"
              required={true}
              placeholder="Search"
            />
            <SubmitButton />
            <p> {error} </p>
          </form>
        </div>
    );
}