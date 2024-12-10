"use client";

import { Input } from "@/app/components/Input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import RentWaveLogo from "@/app/components/RentWaveLogo";
import { tryCreateAccount } from "@/app/user/UserServe";

function CreateAccountButton() {
	const { pending } = useFormStatus();
	return (
        <button type="submit">
            {pending ? "Creating Account..." : "Create Account"}
        </button>
	);
}

async function clientSideValidation(state: string, formData: FormData) {
	let password = formData.get("password");
	let confirmPassword = formData.get("confirm-password");

	if (password !== confirmPassword) {
		return "Passwords do not match!";
	}

	return await tryCreateAccount(state, formData);
}

export default function Create() {
	let [error, formAction] = useActionState<string, FormData>(clientSideValidation, "");

	return (
        <div className="box">
            <RentWaveLogo />
            <h1> Create an account</h1>
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
                        label="First Name"
                        type="text"
                        id="firstname"
                        name="firstname"
                        required={true}
                        placeholder="Enter your First Name"
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        id="lastname"
                        name="lastname"
                        required={true}
                        placeholder="Enter your Last Name"
                    />
                    <Input
                        label="Location"
                        type="text"
                        id="location"
                        name="location"
                        required={false}
                        placeholder="Enter your Location"
                    />
                    <Input
                        required={true}
                        label="Password"
                        type="password"
                        id="pass1"
                        name="password"
                        placeholder="Choose your Password"
						/>
                    <Input
                        required={true}
                        label="Confirm Password"
                        type="password"
                        id="pass2"
                        name="confirm-password"
                        placeholder="Confirm your Password"
                    />
                    <CreateAccountButton />
                    <p> {error} </p>
                </form>
            </div>

            <a href="/user/login">
                <p className="link"> Already have an account? Login! </p>
            </a>
        </div>
	);
}