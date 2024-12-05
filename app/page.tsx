"use client";
import { Input } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";

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
  let [error, formAction] = useFormState<string, FormData>(trySearch, "");
  return (
    <div style={{ height: "90vh", display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20}}>
      <h2>RentWave</h2>
      <Image
        src="/logo.png"
        alt="rentwave logo"
        width={180}
        height={180}
        priority
      />
      <h2>A Global Renting Solution</h2>
      <div className="box">
            
            
            <div className="form">
                <form action={formAction}>
                    <Input
                        label=""
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
      <h2>Item 1</h2>
      <h2>Item 2</h2>
      <h2>Item 3</h2>
    </div>
    
  );
}