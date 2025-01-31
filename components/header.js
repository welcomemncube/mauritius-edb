"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Document,
  SearchLocate,
  Result,
  Information,
} from "@carbon/icons-react";
import { Button } from "@carbon/react";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="div-one">
          <Image
            src="/mauritius.png"
            alt="Coat Of Arms Of Mauritius"
            className="image"
            width={53}
            height={52}
          />
          <p className="text">Mauritius Business Licensing Platform</p>
        </div>

        <div className="div-two">
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Home className="icon" />
              </div>
              <div>
                <Link href="/" className="link">
                  Home
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Document className="icon" />
              </div>
              <div>
                <Link href="/" className="link">
                  Licensing
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <SearchLocate className="icon" />
              </div>
              <div>
                <Link href="/" className="link">
                  Search Permits
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Result className="icon" />
              </div>
              <div>
                <Link href="/" className="link">
                  News
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Information className="icon" />
              </div>
              <div>
                <Link href="/" className="link">
                  FAQs & Notices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
