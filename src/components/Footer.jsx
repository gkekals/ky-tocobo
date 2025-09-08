import React from "react";
import { logoData, companyData, customerCenterData, footerMenus } from "../util/footer";
import Nav from "./Nav";
import "../../styles/components/footer.scss"; // 경로 한 단계 올림

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner foot-inner">
        <div className="left">
          <h3>
            <a href={logoData.href} aria-label={logoData.alt}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>

          <ul className="foot-lst-1">
            {companyData.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu) => (
              <div key={menu.title} className="foot-menu-col">
                <h4>{menu.title}</h4>
                <ul>
                  {menu.items.map((it) => (
                    <li key={it.href}>
                      <a href={it.href}>{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="cs">
            <h4>{customerCenterData.title}</h4>
            <p className="cs-box">
              <a href={customerCenterData.tel.href}>{customerCenterData.tel.value}</a>
            </p>
            <p>{customerCenterData.hours}</p>
            <p>{customerCenterData.notice}</p>
            <a className="talk-btn" href={customerCenterData.talk.href}>
              {customerCenterData.talk.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
