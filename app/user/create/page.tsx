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
			value={pending ? "Creating Account..." : "Create Account"}
		/>
	);
}

async function clientSideValidation(prevState: string, formData: FormData) {
	let password = formData.get("password");
	let confirmPassword = formData.get("confirm-password");

	if (password !== confirmPassword) {
		return "Passwords do not match!";
	}

	throw new Error("Function not implemented.");
}

export default function Create() {
	//note that Server component cannot return null or Class objects, only plain JSONs and primitive types
	let [error, formAction] = useFormState<string, FormData>(clientSideValidation, "");

	return (
        <div className="box">
            <Image className="center"
                src="/logo.png"
                alt="rentwave logo"
                width={180}
                height={180}
                priority
            />
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
                    <SubmitButton />
                    <p> {error} </p>
                </form>
            </div>

            <a href="/user/login">
                <p className="link"> Already have an account? Login! </p>
            </a>
        </div>
	);
}