import React, { useState } from "react";
import "./style.css";
import { ReactComponent as Robot } from "../../pics/Robot.svg";
import { ReactComponent as Hand } from "../../pics/Hand.svg";
import { ReactComponent as Message } from "../../pics/Message.svg";
import Button from "../Button";

function ChatBox() {
  const [show, setShow] = useState(false)

  return (
    <div>
     <Button onClick={() => setShow(!show)} />
      <div className="box" style={{ display: show ? "flex" : "none" }}>
        <div className="second-half">
          <div className="first-half">
            <div className="welcome-message">
              <div className="line-1">IRIS</div>
              <div className="line-2">
                <p>Hello</p> <Hand className="hand" />
              </div>
              <div className="line-3">
                I am Iris, a Virtual Assistant How may I help you?
              </div>
            </div>
          
          </div>
          <div className="middle-block">
          <div className="robot-container">
              <Robot className="robot" />
            </div>
            <h4 className="heading">Frequently Asked Questions ?</h4>
            <div className="chat-container c-1">
              <span className="note-point"></span>
              <span className="message-container">
                Can I redeem my FB before the original term?
              </span>
            </div>
            <div className="chat-container c-2">
              <span className="note-point"></span>
              <span className="message-container">
                How do I pay my Credit card bill?
              </span>
            </div>
            <div className="chat-container c-3">
              <span className="note-point"></span>
              <span className="message-container">
                How can I get my Account Statement?
              </span>
            </div>
            <div className="chat-container c-4">
              <span className="note-point"></span>
              <span className="message-container">
                What is the tenure of Fixed Deposit?
              </span>
            </div>
            <div className="chat-button">
              <span className="button-message">
                <Message className="message" />
                <p>Start a New Conversation</p>
              </span>
            </div>
           
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default ChatBox;
