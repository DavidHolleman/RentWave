"use sever";

import { getAllConversations, getAllMessages } from "@/app/message/MessageServe";
import MessageBar from "./MessageBar";
import { formatDate } from "@/app/Types";

export default async function Message() {
      let ItemSet = await getAllMessages();
      let Conversations = await getAllConversations();

      return (
            <div className="fillwidth">
                  <div className="leftcolumn">
                        {Conversations.map((f:string) => (
                              <a href={"/message"}  key={f}>
                                    <div className="person">
                                          <div className="stack"> {f} </div>
                                    </div>
                              </a>
                        ))}
                  </div>
                  
                  <div className="rightcolumn">
                        <div className="messages">
                              {await ItemSet.map(async (f) => (
                                    <div className = "message" key={f.Time.getTime()}>
                                          <div className="stack"> 
                                                <p className="inline left">{f.Sender}</p>
                                                <p className="inline right">{formatDate(f.Time)}</p>
                                          </div>
                                          <div className="stack"> <p>{f.Content}</p> </div>
                                    </div>
                              ))}
                        </div>
                        
                        <MessageBar />
                  </div>
            </div>
      );
}