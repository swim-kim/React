import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const [show, setShow] = useState(false);

    const [searchValue, setsearchValue] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setsearchValue(e.target.value); //바로 검색가능하다.
        navigate(`/search?q=${e.target.value}`);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

 

    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
                className="nav__logo"
                onClick={() => window.location.reload()}
            />

            <input
                value={searchValue}
                onChange={handleChange}
                className="nav__input"
                type="text"
                placeholder="영화제목을 입력해주세요."
            />

            <img
                alt="User logged"
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                className="nav__avater"
            />
        </nav>
    );
}