"use client";

import { useEffect, useState } from "react";
import { headerContent } from "@/data/siteContent";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 99999,
        backgroundColor: "#ffffff",
        height: isScrolled ? "54px" : "80px",
        boxShadow: isScrolled
          ? "0px 0px 7px 0px rgba(0, 0, 0, 0.1)"
          : "0px 1px 0px 0px rgba(0, 0, 0, 0.1)",
        transition: "all 0.4s ease-in-out",
        fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
      }}
    >
      <div
        className="et-container"
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        {/* Logo on the RIGHT */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <a href="#" style={{ display: "inline-flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={headerContent.logo}
              alt={headerContent.logoAlt}
              style={{
                height: isScrolled ? "29.15px" : "43.2px",
                width: "auto",
                maxWidth: "100%",
                display: "inline-block",
                transition: "all 0.4s ease-in-out",
              }}
            />
          </a>
        </div>

        {/* Desktop Navigation on the LEFT */}
        <nav
          id="et-top-navigation"
          className="hidden min-[981px]:block"
          style={{
            float: "left",
            paddingTop: isScrolled ? "20px" : "33px",
            paddingRight: "229px",
            transition: "all 0.4s ease-in-out",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "14px",
          }}
        >
          <ul
            id="top-menu"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              direction: "rtl",
            }}
          >
            {headerContent.navItems.map((item, idx) => (
              <li
                key={item.id}
                id={item.id}
                style={{
                  display: "inline-block",
                  paddingRight: idx === 0 ? "0px" : "22px",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "14px",
                }}
              >
                <a
                  href={item.href}
                  className="et-nav-link"
                  style={{
                    display: "block",
                    paddingBottom: isScrolled ? "20px" : "33px",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div
          className="flex min-[981px]:hidden items-center"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
          }}
        >
          <button
            type="button"
            aria-label="فتح القائمة"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#2ea3f2",
              display: "inline-flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#2ea3f2",
                display: "block",
              }}
            />
            <span
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#2ea3f2",
                display: "block",
              }}
            />
            <span
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#2ea3f2",
                display: "block",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="min-[981px]:hidden"
          style={{
            backgroundColor: "#ffffff",
            borderTop: "3px solid #2ea3f2",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "16px 10%",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {headerContent.navItems.map((item) => (
              <li
                key={item.id}
                style={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
