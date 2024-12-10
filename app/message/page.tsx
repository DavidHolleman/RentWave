"use sever";

import { getAllMessages } from "@/app/message/MessageServe";
import MessageBar from "./MessageBar";
import { formatDate } from "./MessageType";

export default async function Message() {
      let ItemSet = await getAllMessages();

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
                        <div className="messages">
                              {await ItemSet.map(async (f) => (
                                    <div className = "message">
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