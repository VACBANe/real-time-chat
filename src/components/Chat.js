import React, { useContext, useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "..";
import Loader from "./Loader";
import firebase from "firebase";

const Chat = () => {
    const containerRef = useRef(null);
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );
    useEffect(() => {
        if (containerRef && containerRef.current) {
            const element = containerRef.current;
            element.scroll({
                top: element.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [containerRef, messages]);

    const sendMessage = async () => {
        firestore.collection("messages").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setValue("");
    };
    if (loading) {
        return <Loader />;
    }
    return (
        <div className={"container pt-4"}>
            <div className="row d-flex justify-content-center">
                <div
                    className="border border-2 border-primary rounded-3 pt-3"
                    ref={containerRef}
                    style={{
                        width: "80%",
                        height: "70vh",
                        overflowY: "auto",
                    }}
                >
                    {messages.map((message) => (
                        <div
                            className="border border-2 border-primary rounded p-3 mb-3"
                            style={{
                                marginLeft:
                                    user.uid === message.uid ? "auto" : "10px",
                                width: "fit-content",
                                wordWrap: "break-word",
                                maxWidth: "40%",
                                minWidth: "20%",
                            }}
                        >
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={message.photoURL}
                                    className="rounded-3"
                                    alt="avatar"
                                    style={{
                                        left: 0,
                                        width: "50px",
                                        marginRight: "20px",
                                    }}
                                />
                                <div>{message.displayName}</div>
                            </div>
                            <div>{message.text}</div>
                        </div>
                    ))}
                </div>
                <div
                    className="d-flex pt-4"
                    style={{ width: "82%", height: "13vh"}}
                >
                    <textarea
                        className="form-control"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={sendMessage}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
