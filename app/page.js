'use client'
import { Button } from "@carbon/react"
import Image from "next/image"

export default function Home() {
    return (
        <div className="container">
          <div className="left-side">
            <div>
              <p className="header">Welcome to the National Electronic</p>
              <p className="header">Licensing System of Mauritius</p>
            </div>
            <Button className="btn1" kind="primary" size="lg">Apply for permit</Button>
          </div>
          <div className="right-side">
            <Image src="/landing.png" width={612} height={408} alt="Landing Image"/>
          </div>
        </div>
    )
}