import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container pt-4 text-center pb-2">
                © {new Date().getFullYear()}
                <a
                    className="btn-lg text-dark m-1"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://sleepy-ramanujan-3178c1.netlify.app/"
                    target="_blank"
                    role="button"
                ><i className="fab fa-facebook-f"></i
                ></a>
                <a
                    className="btn-lg text-dark m-1"
                    href="https://twitter.com/intent/tweet?url=https://sleepy-ramanujan-3178c1.netlify.app/"
                    role="button"
                ><i className="fab fa-twitter"></i
                ></a>
                <a
                    className="btn-lg text-dark m-1"
                    href="https://www.instagram.com/"
                    role="button"
                ><i className="fab fa-instagram"></i
                ></a>
                <a
                    className="btn-lg text-dark m-1"
                    href="#"
                    role="button"
                ><i className="fab fa-linkedin"></i
                ></a>
                <a
                    className="btn-lg text-dark m-1"
                    href="#"
                    role="button"
                ><i className="fab fa-github"></i
                ></a>
            </div>
        </footer>
    )
}

export default Footer;