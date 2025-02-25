"use client";
import Header from "@/components/header";
import "./globals.scss";
import Footer from "@/components/footer";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function HeaderLayout({ children }) {
  const [userName, setUsername] = useState(
    typeof window !== "undefined" && window.localStorage
      ? window.localStorage.getItem("username")
      : ""
  );
  
  useEffect(() => {
    fetch("https://api.eu-de.assistant.watson.cloud.ibm.com/instances/47799454-7e62-4abf-81b9-ca851cee5639", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_ACCESS_TOKEN"
      },
      body: JSON.stringify({
        input: { text: "Hello!" },
        context: { user_input: "Hello, Watson!" } // Passing the parameter
      })
    })
    .then(response => response.json())
    .then(data => console.log("Response from Watsonx Assistant:", data))
    .catch(error => console.error("Error:", error));    
  },[])

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="Watsonx-Assistant">
          {`
  window.watsonAssistantChatOptions = {
    integrationID: "84140568-8153-43e0-954e-0e54a6506430", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "47799454-7e62-4abf-81b9-ca851cee5639", // The ID of your service instance.
    onLoad: async (instance) => { 
    instance.on({ type: "customEvent:sessionStarted", handler: function() {
      instance.send({
        input: { text: " " }, // A space instead of an empty string to prevent errors
        context: {
          session_variables: {
            username: "John Doe"
          }
        }
      });
    }});
      await instance.render(); 
    }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
              `}
        </Script>
      </body>
    </html>
  );
}
