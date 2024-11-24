"use client";

import { Input } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import "@/app/globals.css";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<input
			className="mb-0"
			type="submit"
			value={pending ? "Singing in" : "Sign in"}
		/>
	);
}

export default function Login() {
	//note that Server component cannot return null or Class objects, only plain JSONs and primitive types
	let [error, formAction] = useFormState<string, FormData>(tryLogin, "");

	return (
        <div className="box">
            <Image className="center"
                src="/logo.png"
                alt="rentwave logo"
                width={180}
                height={180}
                priority
            />
            <h1> Sign into RentWave </h1>
            <br />
            <div className="form">
                <form action={formAction}>
                    <Input
                        label="Email"
                        type="text"
                        id="email"
                        name="email"
                        required={true}
                        placeholder="Enter your Email"
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        required={true}
                        placeholder="Enter your Password"
                    />
                    <SubmitButton />
                    <p> {error} </p>
                </form>
            </div>

            <a href="/user/create">
                <p className="link"> Don't have an account? Create one! </p>
            </a>
        </div>
	);
}

function tryLogin(state: string, payload: FormData): string | Promise<string> {
    throw new Error("Function not implemented.");
}
