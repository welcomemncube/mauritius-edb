"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Document,
  SearchLocate,
  Result,
  Information,
  Account,
  UserAvatar,
  Settings,
} from "@carbon/icons-react";
import { Button } from "@carbon/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Header() {

  const [userName, setUsername] = useState('') ;

  useEffect(() => {
      setUsername(localStorage.getItem('username'))
  },[])

  const logout = () => {
    localStorage.removeItem('username')
    window.location.href = '/login'
  }

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
          <p className="logo">Mauritius Business Licensing Platform</p>
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
          {
            userName ? (
              <>
                <div className="block">
                  <div style={{ display: "flex" }}>
                <div>
                  <Settings className="icon" />
                  <UserAvatar className="icon" />
                </div>
                <div style={{marginTop: '2px'}}>
                  <span>{userName}</span>
                </div>
                <Button size="sm" style={{padding: "5px 15px",marginTop: "-5px", borderRadius: "5px",marginLeft: '10px'}} onClick={logout}>Logout</Button>
                </div>
              </div>
              </>
            ) :
            <>    
              <div className="block">
              <div >
              <div>
                <Button kind="tertiary" size="sm" style={{padding: "5px 15px",marginTop: "-10px", borderRadius: "5px"}}><Link href='/register' className="btn-link">Register</Link></Button>
              </div>
            </div>
          </div>
          <div className="block">
            <div >
              <div>
                <Button kind="tertiary" size="sm" style={{padding: "5px 15px",marginTop: "-10px", borderRadius: "5px"}}><Link href='/login' className="btn-link">Login</Link></Button>
              </div>
            </div>
          </div>
            </>
          }

        </div>
      </div>
    </nav>
  );
}
