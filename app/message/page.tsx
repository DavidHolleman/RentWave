"use client";

import { Input } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<input
			className="mb-0"
			type="submit"
			value={pending ? "Sending message" : "Send message"}
		/>
	);
}

function tryMessage(state: string, payload: FormData): string | Promise<string> {
      throw new Error("Function not implemented.");
  }

export default function Message() {
      //note that Server component cannot return null or Class objects, only plain JSONs and primitive types
      let [error, formAction] = useFormState<string, FormData>(tryMessage, "");

      return (
            <div className="fillwidth">
                  <div className="leftcolumn">
                        <div className="person">
                              <div className="stack"> <p>Item 1</p> </div>
                              <div className="stack"> <p>Person 1</p> </div>
                        </div>
                        <div className="person">
                              <div className="stack"> <p>Item 2</p> </div>
                              <div className="stack"> <p>Person 2</p> </div>
                        </div>
                        <div className="person">
                              <div className="stack"> <p>Item 3</p> </div>
                              <div className="stack"> <p>Person 3</p> </div>
                        </div>
                  </div>
                  
                  <div className="rightcolumn">
                        <div className = "message">
                              <div className="stack"> 
                                    <p className="inline left">Sender 1</p>
                                    <p className="inline right">Time 1</p>
                              </div>
                              <div className="stack"> <p>Message 1</p> </div>
                        </div>
                        <div className = "message">
                              <div className="stack"> 
                                    <p className="inline left">Sender 2</p>
                                    <p className="inline right">Time 2</p>
                              </div>
                              <div className="stack"> <p>Message 2</p> </div>
                        </div>
                        <div className = "message">
                              <div className="stack"> 
                                    <p className="inline left">Sender 3</p>
                                    <p className="inline right">Time 3</p>
                              </div>
                              <div className="stack"> <p>Message 3</p> </div>
                        </div>

                        <form action={formAction} className="newMessage">
                              <Input
                                    label=""
                                    type="text"
                                    id="message"
                                    name="message"
                                    required={true}
                                    placeholder="Type a message"
                              />
                              <SubmitButton />
                              <p> {error} </p>
                        </form>
                  </div>
            </div>
      );
}