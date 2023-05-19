// import React from 'react';

const Footer = () => {
  const fotterLinks = (e) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");

    switch (e) {
      case 0:
        allFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allFooterLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        allFooterLinks.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      default:
        allFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };
  const linksBackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };
  return (
    <>
      <footer>
        <h1>
          Let's <br /> #connectOnCutting?
        </h1>
        <aside onMouseLeave={linksBackToNormal}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => fotterLinks(0)}
            data-cursorpointermini
          >
            Home
          </a>
          <a
            href="/story"
            className="footerLinks"
            onMouseOver={() => fotterLinks(1)}
            data-cursorpointermini
          >
            Story
          </a>
          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => fotterLinks(2)}
            data-cursorpointermini
          >
            Media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => fotterLinks(3)}
            data-cursorpointermini
          >
            Franchise
          </a>
          <a
            href="/events"
            className="footerLinks"
            onMouseOver={() => fotterLinks(4)}
            data-cursorpointermini
          >
            Events
          </a>
          <a
            href="/chaiwalacares"
            className="footerLinks"
            onMouseOver={() => fotterLinks(5)}
            data-cursorpointermini
          >
            Chai Wala Cares
          </a>
        </aside>
        <div>
          <h5>Phone</h5>
          <a href="tel: +917362922033">+917362922033</a>
        </div>
        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            franchise@mbachaiwala.com
          </a>
        </div>
        <p>&copy; COPYRIGHT 2022 MBA CHAIWALA. MADE BY</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};
export default Footer;
