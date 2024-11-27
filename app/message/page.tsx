"use client";

export default function Message() {
      return (
            <div className="fillwidth">
                  <div className="leftcolumn">
                        <table> <tbody>
                              <tr className="person">
                                    <td className="stack"> <p>Item 1</p> </td>
                                    <td className="stack"> <p>Person 1</p> </td>
                              </tr>
                              <tr className="person">
                                    <td className="stack"> <p>Item 2</p> </td>
                                    <td className="stack"> <p>Person 2</p> </td>
                              </tr>
                              <tr className="person">
                                    <td className="stack"> <p>Item 3</p> </td>
                                    <td className="stack"> <p>Person 3</p> </td>
                              </tr>
                        </tbody> </table>
                  </div>
                  
                  <div className="rightcolumn">
                        <table > <tbody>
                              <tr>
                                    <div className = "message">
                                          <td className="stack"> 
                                                <p className="inline left">Sender 1</p>
                                                <p className="inline right">Time 1</p>
                                          </td>
                                          <td className="stack"> <p>Message 1</p> </td>
                                    </div>
                              </tr>
                              <tr>
                                    <div className = "message">
                                          <td className="stack"> 
                                                <p className="inline left">Sender 2</p>
                                                <p className="inline right">Time 2</p>
                                          </td>
                                          <td className="stack"> <p>Message 2</p> </td>
                                    </div>
                              </tr>
                              <tr>
                                    <div className = "message">
                                          <td className="stack"> 
                                                <p className="inline left">Sender 3</p>
                                                <p className="inline right">Time 3</p>
                                          </td>
                                          <td className="stack"> <p>Message 3</p> </td>
                                    </div>
                              </tr>
                        </tbody> </table>
                  </div>
            </div>
      );
}