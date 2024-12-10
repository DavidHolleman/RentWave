"use client";

import { Input } from "@/app/components/Input";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import RentWaveLogo from "@/app/components/RentWaveLogo";
import { tryChangePassword } from "@/app/user/UserServe";

function ChangePasswordButton() {
	const { pending } = useFormStatus();
	return (
        <button type="submit">
            {pending ? "Changing Password..." : "Change Password"}
        </button>
	);
}

async function clientSideValidation(state: string, formData: FormData) {
	let password = formData.get("password");
	let confirmPassword = formData.get("confirm-password");

	if (password !== confirmPassword) {
		return "Passwords do not match!";
	}

	return await tryChangePassword(state, formData);
}

export default function ChangePassword() {
	let [error, formAction] = useActionState<string, FormData>(clientSideValidation, "");

	return (
        <div className="box">
            <RentWaveLogo />
            <h1> Change your password</h1>
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
                        required={true}
                        label="Old Password"
                        type="password"
                        id="oldpass"
                        name="oldpass"
                        placeholder="Enter your old Password"
					/>
                    <Input
                        required={true}
                        label="Password"
                        type="password"
                        id="pass1"
                        name="password"
                        placeholder="Choose your new Password"
					/>
                    <Input
                        required={true}
                        label="Confirm Password"
                        type="password"
                        id="pass2"
                        name="confirm-password"
                        placeholder="Confirm your new Password"
                    />
                    <ChangePasswordButton />
                    <p> {error} </p>
                </form>
            </div>
        </div>
	);
}