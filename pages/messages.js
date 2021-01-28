import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IconButton, Grid } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import {
  getMessages,
  updateMessage,
  addMessage,
} from "../src/providers/messageProvider";

const Messages = (props) => {
  const [messages, setMessages] = useState(props.messages ?? []);
  const [isEditting, setisEdditing] = useState(null);
  const [messageToEdit, setMessageToEdit] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const deleteItem = async (id) => {
    await fetch("http://localhost:6005/api/message/delete-message/" + id, {
      method: "POST",
    });
    let currentMessages = await fetch(
      "http://localhost:6005/api/message/get-messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection: "messages",
        }),
      }
    ).then((res) => res.json());
    setMessages(currentMessages);
  };

  const editMessage = (message) => {
    setTitle(message.messageTitle);
    setBody(message.messageBody);
    setisEdditing(true);
    setMessageToEdit(message);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const handleClose = () => {
    setMessageToEdit({});
    setBody("");
    setTitle("");
    setisEdditing(false);
  };
  const handleUpdate = async () => {
    await updateMessage({
      collection: "messages",
      newMessage: {
        messageTitle: "title",
        messageBody: "body",
      },
    });
    let currentMessages = await getMessages().then((res) => res.data);
    setMessages(currentMessages);
  };

  const handleAddMessage = async () => {
    await addMessage({
      messageTitle: title,
      messageBody: body,
    }).then(() => {
      getMessages({ collection: "messages" }).then((res) => {
        setMessages(res.data);
      });
    });
  };

  useEffect(() => {
    if (!isEditting) {
      setMessageToEdit({});
    }
  }, []);

  return (
    <>
      <div style={{ padding: 30 }}>
        <div
          style={{ backgroundColor: "#ddd", padding: 20, borderRadius: "5px" }}
        >
          <div
            style={{
              width: "30vw",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingBottom: 20,
            }}
          >
            <TextField
              id="MessageTitle"
              value={title}
              label="Título"
              onChange={onChangeTitle}
            />
          </div>
          <div>
            <TextField
              id="MessageBody"
              value={body}
              label="Corpo"
              onChange={onChangeBody}
            />
          </div>
          {(!isEditting && (
            <div style={{ padding: "30px 30px 0px 0px" }}>
              <Button variant="contained" onClick={handleAddMessage}>
                Adicionar
              </Button>
            </div>
          )) || (
            <div style={{ padding: "30px 30px 0px 0px" }}>
              <IconButton>
                <SaveIcon onClick={handleUpdate} />
              </IconButton>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          )}
        </div>
        <List style={{ width: "100%" }}>
          {messages.map((message, index) => (
            <div
              style={{
                width: "30%",
                backgroundColor: "#ccc",
                borderRadius: "5px",
                marginBottom: 20,
              }}
            >
              <ListItem id={index}>
                <ListItemText
                  primary={String(message.messageTitle)}
                  secondary={message.messageBody}
                />
                <IconButton onClick={() => deleteItem(message._id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => editMessage(message)}>
                  <EditIcon />
                </IconButton>
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    </>
  );
};

export default Messages;

export async function getServerSideProps(context) {
  const messages = await getMessages({ collection: "messages" }).then(
    (res) => res.data
  );
  return {
    props: { messages },
  };
}
