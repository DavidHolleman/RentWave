"use client";
import { Input } from "@/app/components/Input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import RentWaveLogo from "@/app/components/RentWaveLogo";


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

function trySearch(state: string, payload: FormData): string | Promise<string> {
  throw new Error("Function not implemented.");
}

export default function Home() {
  let [error, formAction] = useActionState<string, FormData>(trySearch, "");

  return (
    <div>
      <div className="box">
        <RentWaveLogo />
        <h1 className="center">RentWave</h1>
        <h2 className="center">A Global Renting Solution</h2>
            
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
      </div>

      <div className="box">
        <h2>Item 1</h2>
        <h2>Item 2</h2>
        <h2>Item 3</h2>
      </div>
    </div>
  );
}