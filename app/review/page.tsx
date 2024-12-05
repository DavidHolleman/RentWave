"use client";

import { InputBig } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";

function PostReviewButton() {
	const { pending } = useFormStatus();
	return (
		<input
			className="mb-0"
			type="submit"
			value={pending ? "Posting Review..." : "Post Review"}
		/>
	);
}

function tryPostReview(state: string, payload: FormData): string | Promise<string> {
    throw new Error("Function not implemented.");
}

export default function Review() {
      let [error, formAction] = useFormState<string, FormData>(tryPostReview, "");

      return (
            <div>
                  <p> Items for you to review, Renters for you to review, and your reviews. </p> 
                  <div className="box">
                        <div className="form">
                              <InputBig
                                    label="Review Content"
                                    id="content"
                                    name="content"
                                    placeholder="Please leave a review here..."
                              />
                              <PostReviewButton />
                        </div>
                  </div>
            </div>
            
      );   
}