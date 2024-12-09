"use client";

import { Input } from "@/app/components/Input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import RentWaveLogo from "@/app/components/RentWaveLogo";
import { tryLogin } from "@/app/user/user";
 
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
	let [error, formAction] = useActionState<string, FormData>(tryLogin, "");

	return (
        <div className="box">
            <RentWaveLogo />
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