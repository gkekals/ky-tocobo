import React from "react";
import instar from "../util/instar";
import "../styles/components/instargram.scss";

const Instargram = () => {
  return (
    <section className="instar">
      <div className="inner instar-inner">
        <div className="t-wrap">
          <h2 className="con-tit">Instagram</h2>
          <p className="txt-4">@tocobo_official</p>
        </div>

        <ul className="instar-lst" role="list">
          {instar.map(({ id, image, alt, link }) => (
            <li key={id} className="instar-item">
              <a href={link} aria-label={alt}>
                <img src={image} alt={alt} loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Instargram;
