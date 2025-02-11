'use client'
import Header from "@/components/header"
import "./globals.scss"
import Footer from "@/components/footer"
import Script from "next/script"
import { useState } from "react"

export default function HeaderLayout({ children }) {  

  const [userName, setUsername] = useState((typeof window !== 'undefined' && window.localStorage) ? window.localStorage.getItem('username') : '')
  
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="Watsonx-Assistant">
          {`
            window.watsonAssistantChatOptions = {
            integrationID: "97768076-50d2-4044-87b4-b3a3e6aca4a6", // The ID of this integration.
            region: "eu-de", // The region your integration is hosted in.
            serviceInstanceID: "47799454-7e62-4abf-81b9-ca851cee5639", // The ID of your service instance.
            onLoad: async (instance) => { 
              await instance.render();
              instance.updateHomeScreenConfig({
                is_on: true,
                greeting: 'Welcome ${userName ? userName : ''} how may i help you today!'
              })
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