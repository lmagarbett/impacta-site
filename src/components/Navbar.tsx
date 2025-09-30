import { useState, useEffect } from "react";
import biglogo2 from "../assets/biglogo2.png";
import { Link } from "react-router-dom";

export default function Navbar({ defaultPage }: { defaultPage: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(defaultPage);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [useMobileNav, setUseMobileNav] = useState(false);

  useEffect(() => {
    setActivePage(defaultPage);
  }, [defaultPage]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const detect = () => {
      const width = window.innerWidth;
      const ua = navigator.userAgent || (navigator as any).vendor || "";
      const isIOSDevice = /iPad|iPhone|iPod/.test(ua);
      const isIpadOS13Plus =
        navigator.platform === "MacIntel" &&
        (navigator as any).maxTouchPoints > 1;
      const isTouch =
        "ontouchstart" in window || (navigator as any).maxTouchPoints > 0;
      const isTabletWidth = width >= 768 && width <= 1366;
      const forceMobile =
        (isIOSDevice || isIpadOS13Plus || isTouch) && isTabletWidth;
      setUseMobileNav(width < 640 || forceMobile);
    };
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (
        contactDropdownOpen &&
        !target.closest(".contact-dropdown-container")
      ) {
        setContactDropdownOpen(false);
      }
      if (
        sectorsDropdownOpen &&
        !target.closest(".sectors-dropdown-container")
      ) {
        setSectorsDropdownOpen(false);
      }
      if (aboutDropdownOpen && !target.closest(".about-dropdown-container")) {
        setAboutDropdownOpen(false);
      }
      if (
        servicesDropdownOpen &&
        !target.closest(".services-dropdown-container")
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactDropdownOpen(false);
        setSectorsDropdownOpen(false);
        setAboutDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    contactDropdownOpen,
    sectorsDropdownOpen,
    aboutDropdownOpen,
    servicesDropdownOpen,
  ]);

  return (
    <>
      <div className="bg-gray-100 text-gray-600 text-xs py-2 px-6 fixed w-full top-0 left-0 z-50 border-b border-gray-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="hidden sm:flex items-center space-x-2">
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/company/impactaltd/posts/?feedView=all"
                className="text-impacta11 hover:text-impacta9 hover:scale-110 transition-all duration-300 ease-in-out transform"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="font-semibold text-gray-500">
                +44 01902 496307
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="font-semibold text-gray-500">
                sales@impacta.co.uk
              </span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`
          fixed w-full left-0 z-40 transition-colors duration-300
          ${
            scrolled || useMobileNav
              ? "bg-white shadow-md"
              : "bg-white sm:bg-transparent"
          }
          py-3 px-6
        `}
        style={{
          top: "32px",
          ...(window.innerWidth < 640 ? { top: "32px" } : {}),
        }}
      >
        <nav className="relative max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => {
                setActivePage("Home");
                setMenuOpen(false);
                setContactDropdownOpen(false);
                setSectorsDropdownOpen(false);
                setAboutDropdownOpen(false);
                setServicesDropdownOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Go to homepage"
            >
              <img
                src={biglogo2}
                alt="Impacta Logo"
                className={`
                h-14 w-auto object-contain cursor-pointer
                transition-all duration-300
                ${
                  scrolled || useMobileNav
                    ? "opacity-100"
                    : "opacity-90 sm:filter sm:brightness-0 sm:invert"
                }
                ${
                  !scrolled && !useMobileNav
                    ? "sm:filter sm:brightness-0 sm:invert"
                    : ""
                }
              `}
                style={{ transition: "filter 0.3s, opacity 0.3s" }}
              />
            </Link>
          </div>
          <button
            className={`${
              useMobileNav ? "flex" : "hidden"
            } flex-col justify-center items-center w-8 h-8`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-1 w-6 bg-impacta11 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-impacta11 rounded my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-impacta11 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          <ul
            className={
              useMobileNav
                ? `fixed top-0 right-0 h-full w-4/5 max-w-[260px] bg-white shadow-lg z-50 flex flex-col gap-4 text-base font-medium items-start p-4 transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                  } mt-[56px]`
                : `static flex flex-row gap-6 shadow-none bg-transparent p-0 translate-x-0 h-auto w-auto items-center text-sm`
            }
          >
            {useMobileNav && (
              <button
                className="absolute top-4 right-4 text-impacta11 text-2xl"
                onClick={() => {
                  setMenuOpen(false);
                  setContactDropdownOpen(false);
                  setSectorsDropdownOpen(false);
                  setAboutDropdownOpen(false);
                  setServicesDropdownOpen(false);
                }}
                aria-label="Close menu"
              >
                &times;
              </button>
            )}
            <li>
              <Link
                to="/"
                className={`
                  transition-colors duration-300 relative
                  ${
                    scrolled || useMobileNav
                      ? "text-impacta1 hover:text-bluehover"
                      : "text-impacta1 sm:text-white hover:text-bluehover sm:hover:text-greyhover"
                  }
                  ${
                    activePage === "Home"
                      ? `after:absolute after:left-0 after:right-0 after:-bottom-3 after:h-0.5 after:rounded-full after:content-[""] ${
                          scrolled || useMobileNav
                            ? "after:bg-bluehover"
                            : "after:bg-bluehover sm:after:bg-white"
                        }`
                      : ""
                  }
                `}
                style={{ transition: "color 0.3s" }}
                onClick={() => setActivePage("Home")}
              >
                Home
              </Link>
            </li>
            <li className="about-dropdown-container flex items-end">
              <div
                className="relative"
                onMouseEnter={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setAboutDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setAboutDropdownOpen(false);
                }}
              >
                <button
                  className={`
                  transition-colors duration-300 relative flex items-center
                  ${
                    scrolled || useMobileNav
                      ? "text-impacta1 hover:text-bluehover"
                      : "text-impacta1 sm:text-white hover:text-bluehover sm:hover:text-greyhover"
                  }
                  ${
                    activePage === "About" ||
                    activePage === "About Us" ||
                    activePage === "Testimonials"
                      ? `after:absolute after:left-0 after:right-0 after:-bottom-3 after:h-0.5 after:rounded-full after:content-[""] ${
                          scrolled || useMobileNav
                            ? "after:bg-bluehover"
                            : "after:bg-bluehover sm:after:bg-white"
                        }`
                      : ""
                  }
                `}
                  style={{ transition: "color 0.3s" }}
                  aria-haspopup="menu"
                  aria-expanded={aboutDropdownOpen}
                  onClick={() => {
                    setAboutDropdownOpen((prev) => {
                      const next = !prev;
                      if (next) {
                        setContactDropdownOpen(false);
                        setSectorsDropdownOpen(false);
                        setServicesDropdownOpen(false);
                      }
                      return next;
                    });
                  }}
                >
                  About
                </button>
                {aboutDropdownOpen && (
                  <>
                    <div className="absolute left-0 right-0 top-full h-6 z-40 hidden sm:block"></div>
                    <div
                      className={`
                        absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-md py-2 w-52 sm:w-64 z-50
                        border-t-2 border-impacta1 rounded-lg text-sm
                      `}
                      style={{
                        filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
                      }}
                      onMouseEnter={() => {
                        if (!useMobileNav && window.innerWidth >= 640)
                          setAboutDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (!useMobileNav && window.innerWidth >= 640)
                          setAboutDropdownOpen(false);
                      }}
                    >
                      <Link
                        to="/about"
                        className={`
                        block px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors duration-300
                        ${
                          activePage === "About Us"
                            ? "text-impacta1 font-medium"
                            : "text-gray-600"
                        }
                      `}
                        onClick={() => {
                          setActivePage("About Us");
                          setAboutDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-4 mr-2 text-impacta1"
                          >
                            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                          </svg>
                          <p className="font-bold">About Us</p>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm ml-6">
                          Learn about our story, values, and commitment
                        </p>
                      </Link>
                      <Link
                        to="/testimonials"
                        className={`
                        block px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors duration-300
                        ${
                          activePage === "Testimonials"
                            ? "text-impacta1 font-medium"
                            : "text-gray-600"
                        }
                      `}
                        onClick={() => {
                          setActivePage("Testimonials");
                          setAboutDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-4 mr-2 text-impacta1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 0 0 1.33 0l1.713-3.293a.783.783 0 0 1 .642-.413 41.102 41.102 0 0 0 3.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.412-.993-2.67-2.43-2.902A41.289 41.289 0 0 0 10 2ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="font-bold">Testimonials</p>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm ml-6">
                          See what our clients say about us
                        </p>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </li>
            <li className="services-dropdown-container flex items-end">
              <div
                className="relative"
                onMouseEnter={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setServicesDropdownOpen(false);
                }}
              >
                <button
                  className={`
                  transition-colors duration-300 relative flex items-center
                  ${
                    scrolled || useMobileNav
                      ? "text-impacta1 hover:text-bluehover"
                      : "text-impacta1 sm:text-white hover:text-bluehover sm:hover:text-greyhover"
                  }
                  ${
                    activePage === "Services" ||
                    activePage === "Plastic Solutions" ||
                    activePage === "Steel Fabrication" ||
                    activePage === "Polyurethane Moulding" ||
                    activePage === "Industrial Textile Sewing" ||
                    activePage === "Repairs & Maintenance" ||
                    activePage === "Design and Prototyping"
                      ? `after:absolute after:left-0 after:right-0 after:-bottom-3 after:h-0.5 after:rounded-full after:content-[""] ${
                          scrolled || useMobileNav
                            ? "after:bg-bluehover"
                            : "after:bg-bluehover sm:after:bg-white"
                        }`
                      : ""
                  }
                `}
                  style={{ transition: "color 0.3s" }}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                </button>
                {servicesDropdownOpen && (
                  <>
                    <div className="absolute left-0 right-0 top-full h-6 z-40 hidden sm:block"></div>
                    <div
                      className={`
                        absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-md p-2 sm:p-3 w-72 sm:w-96 z-50
                        border-t-2 border-impacta1 rounded-lg text-sm
                      `}
                      style={{
                        filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
                      }}
                      onMouseEnter={() => {
                        if (!useMobileNav && window.innerWidth >= 640)
                          setServicesDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (!useMobileNav && window.innerWidth >= 640)
                          setServicesDropdownOpen(false);
                      }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                        <Link
                          to="/services/plastic-solutions"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Plastic Solutions");
                            setServicesDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z" />
                            </svg>
                            <p className="font-bold">Plastic Solutions</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm ml-6">
                            Durable, reusable plastic packaging solutions with
                            custom dunnage.
                          </p>
                        </Link>
                        <Link
                          to="/services/steel-fabrication"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Steel Fabrication");
                            setServicesDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.5 1A4.5 4.5 0 0 0 10 5.5V9H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1.5V5.5a3 3 0 1 1 6 0v2.75a.75.75 0 0 0 1.5 0V5.5A4.5 4.5 0 0 0 14.5 1Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <p className="font-bold">Steel Fabrication</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm ml-6">
                            High-quality UK steel manufacturing and fabrication.
                          </p>
                        </Link>
                        <Link
                          to="/services/polyurethane-moulding"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Polyurethane Moulding");
                            setServicesDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v4A1.5 1.5 0 0 0 2.5 10h6A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3h-6Zm11 2A1.5 1.5 0 0 0 12 6.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5h-4Zm-10 7A1.5 1.5 0 0 0 2 13.5v2A1.5 1.5 0 0 0 3.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 9.5 12h-6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <p className="font-bold">Polyurethane Moulding</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm ml-6">
                            Bespoke PU moulding solutions for various
                            applications.
                          </p>
                        </Link>
                        <Link
                          to="/services/industrial-textile-sewing"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Industrial Textile Sewing");
                            setServicesDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-5 mr-2 text-impacta1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1.469 3.75a3.5 3.5 0 0 0 5.617 4.11l.883.51c.025.092.147.116.21.043.15-.176.318-.338.5-.484.286-.23.3-.709-.018-.892l-.825-.477A3.501 3.501 0 0 0 1.47 3.75Zm2.03 3.482a2 2 0 1 1 2-3.464 2 2 0 0 1-2 3.464ZM9.956 8.322a2.75 2.75 0 0 0-1.588 1.822L7.97 11.63l-.884.51A3.501 3.501 0 0 0 1.47 16.25a3.5 3.5 0 0 0 6.367-2.81l10.68-6.166a.75.75 0 0 0-.182-1.373l-.703-.189a2.75 2.75 0 0 0-1.78.123L9.955 8.322ZM2.768 15.5a2 2 0 1 1 3.464-2 2 2 0 0 1-3.464 2Z"
                                clip-rule="evenodd"
                              />
                              <path d="M12.52 11.89a.5.5 0 0 0 .056.894l3.274 1.381a2.75 2.75 0 0 0 1.78.123l.704-.189a.75.75 0 0 0 .18-1.373l-3.47-2.004a.5.5 0 0 0-.5 0L12.52 11.89Z" />
                            </svg>
                            <p className="font-bold">
                              Industrial Textile Sewing
                            </p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm ml-6">
                            Custom textile packaging created with premium
                            materials.
                          </p>
                        </Link>
                        <Link
                          to="/services/repairs-maintenance"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Repairs & Maintenance");
                            setServicesDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M19 5.5a4.5 4.5 0 0 1-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 1 1-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 0 1 5.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 0 0-.11.494 3.01 3.01 0 0 0 1.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382ZM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <p className="font-bold">Repairs & Maintenance</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm ml-6">
                            Sustainable packaging repair and reuse services to
                            cut costs.
                          </p>
                        </Link>
                        <Link
                          to="/services/design-prototyping"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Design and Prototyping");
                            setServicesDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path d="M15.993 1.385a1.87 1.87 0 0 1 2.623 2.622l-4.03 5.27a12.749 12.749 0 0 1-4.237 3.562 4.508 4.508 0 0 0-3.188-3.188 12.75 12.75 0 0 1 3.562-4.236l5.27-4.03ZM6 11a3 3 0 0 0-3 3 .5.5 0 0 1-.72.45.75.75 0 0 0-1.035.931A4.001 4.001 0 0 0 9 14.004V14a3.01 3.01 0 0 0-1.66-2.685A2.99 2.99 0 0 0 6 11Z" />
                            </svg>
                            <p className="font-bold">Design & Prototyping</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm ml-6">
                            Tailored packaging design and prototyping services
                            with on-site support.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </li>
            <li className="sectors-dropdown-container flex items-end">
              <div
                className="relative"
                onMouseEnter={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setSectorsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setSectorsDropdownOpen(false);
                }}
              >
                <button
                  className={`
                    transition-colors duration-300 relative flex items-center
                    ${
                      scrolled || useMobileNav
                        ? "text-impacta1 hover:text-bluehover"
                        : "text-impacta1 sm:text-white hover:text-bluehover sm:hover:text-greyhover"
                    }
                    ${
                      activePage === "Sectors" ||
                      activePage === "Automotive" ||
                      activePage === "Ministry of Defence" ||
                      activePage === "Healthcare" ||
                      activePage === "General Fabrication" ||
                      activePage === "Agriculture"
                        ? `after:absolute after:left-0 after:right-0 after:-bottom-3 after:h-0.5 after:rounded-full after:content-[""] ${
                            scrolled || useMobileNav
                              ? "after:bg-bluehover"
                              : "after:bg-bluehover sm:after:bg-white"
                          }`
                        : ""
                    }
                  `}
                  style={{ transition: "color 0.3s" }}
                  aria-haspopup="menu"
                  aria-expanded={sectorsDropdownOpen}
                  onClick={() => {
                    setSectorsDropdownOpen((prev) => {
                      const next = !prev;
                      if (next) {
                        setContactDropdownOpen(false);
                        setAboutDropdownOpen(false);
                        setServicesDropdownOpen(false);
                      }
                      return next;
                    });
                  }}
                >
                  Sectors
                </button>
                {sectorsDropdownOpen && (
                  <>
                    <div className="absolute left-0 right-0 top-full h-6 z-40 hidden sm:block"></div>
                    <div
                      className={`
                        absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-md p-2 sm:p-3 w-72 sm:w-96 z-50
                        border-t-2 border-impacta1 rounded-lg text-sm
                      `}
                      style={{
                        filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
                      }}
                      onMouseEnter={() =>
                        window.innerWidth >= 640 && setSectorsDropdownOpen(true)
                      }
                      onMouseLeave={() =>
                        window.innerWidth >= 640 &&
                        setSectorsDropdownOpen(false)
                      }
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                        <Link
                          to="/sectors/automotive"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Automotive");
                            setSectorsDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                            <p className="font-bold">Automotive</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Returnable packaging solutions for automotive
                            manufacturing
                          </p>
                        </Link>
                        <Link
                          to="/sectors/defense"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Ministry of Defence");
                            setSectorsDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                            </svg>
                            <p className="font-bold">Ministry of Defence</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Secure packaging solutions for defense contracts
                          </p>
                        </Link>
                        <Link
                          to="/sectors/healthcare"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Healthcare");
                            setSectorsDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                            <p className="font-bold">Healthcare</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Sterile packaging for medical supply chains
                          </p>
                        </Link>
                        <Link
                          to="/sectors/general-fabrication"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("General Fabrication");
                            setSectorsDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                                clip-rule="evenodd"
                              />
                              <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                              <path
                                fill-rule="evenodd"
                                d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <p className="font-bold">General Fabrication</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Bespoke fabrication solutions for industrial needs
                          </p>
                        </Link>
                        <Link
                          to="/sectors/agriculture"
                          className="block p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-600"
                          onClick={() => {
                            setActivePage("Agriculture");
                            setSectorsDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 mr-2 text-impacta1"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <p className="font-bold">Agriculture</p>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Weather-resistant solutions for farming operations
                          </p>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </li>
            <li className="contact-dropdown-container flex items-end">
              <div
                className="relative"
                onMouseEnter={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setContactDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (!useMobileNav && window.innerWidth >= 640)
                    setContactDropdownOpen(false);
                }}
              >
                <button
                  className={`
                    transition-colors duration-300 relative flex items-center
                    ${
                      scrolled || useMobileNav
                        ? "text-impacta1 hover:text-bluehover"
                        : "text-impacta1 sm:text-white hover:text-bluehover sm:hover:text-greyhover"
                    }
                    ${
                      activePage === "Contact" || activePage === "Team"
                        ? `after:absolute after:left-0 after:right-0 after:-bottom-3 after:h-0.5 after:rounded-full after:content-[""] ${
                            scrolled || useMobileNav
                              ? "after:bg-bluehover"
                              : "after:bg-bluehover sm:after:bg-white"
                          }`
                        : ""
                    }
                  `}
                  style={{ transition: "color 0.3s" }}
                  aria-haspopup="menu"
                  aria-expanded={contactDropdownOpen}
                  onClick={() => {
                    setContactDropdownOpen((prev) => {
                      const next = !prev;
                      if (next) {
                        setSectorsDropdownOpen(false);
                        setAboutDropdownOpen(false);
                        setServicesDropdownOpen(false);
                      }
                      return next;
                    });
                  }}
                >
                  Contact
                </button>
                {contactDropdownOpen && (
                  <>
                    <div className="absolute left-0 right-0 top-full h-6 z-40 hidden sm:block"></div>
                    <div
                      className={`
                        absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-md py-2 w-52 sm:w-64 z-50
                        border-t-2 border-impacta1 rounded-lg text-sm
                      `}
                      style={{
                        filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
                      }}
                      onMouseEnter={() =>
                        window.innerWidth >= 640 && setContactDropdownOpen(true)
                      }
                      onMouseLeave={() =>
                        window.innerWidth >= 640 &&
                        setContactDropdownOpen(false)
                      }
                    >
                      <Link
                        to="/contact"
                        className={`
                        block px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors duration-300
                        ${
                          activePage === "Contact"
                            ? "text-impacta1 font-medium"
                            : "text-gray-600"
                        }
                      `}
                        onClick={() => {
                          setActivePage("Contact");
                          setContactDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-4 mr-2 text-impacta1"
                          >
                            <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
                            <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
                          </svg>
                          <p className="font-bold">Contact Us</p>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm ml-6">
                          Get in touch with our team, we are here to help!
                        </p>
                      </Link>
                      <Link
                        to="/team"
                        className={`
                        block px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors duration-300
                        ${
                          activePage === "Team"
                            ? "text-impacta1 font-medium"
                            : "text-gray-600"
                        }
                      `}
                        onClick={() => {
                          setActivePage("Team");
                          setContactDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-4 mr-2 text-impacta1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="font-bold">Meet the Team</p>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm ml-6">
                          Learn more about the people that bring Impacta
                          together.
                        </p>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
