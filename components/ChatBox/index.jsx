import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { steps } from "./Steps/steps";
import logo from "./../../assets/img/Bakeryshop.jpg";

const theme = {
  background: "#f5f8fb",
  // fontFamily: "Helvetica Neue",
  headerBgColor: "#cc6600",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#fff",
  botFontColor: "#cc6600",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const ChatBox = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="BakeryShop Chatbot"
          floating={true}
          steps={steps}
          botAvatar={logo}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatBox;
