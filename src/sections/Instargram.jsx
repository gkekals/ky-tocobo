import React from 'react'
import instar from "../util/instar"
import "../styles/sections/instargram.scss"

const Instargram = () => {

    const stagger = (base, idx, step = 100) => base + idx * step

    return (
        <div className='inner instar-inner'>
            <div className="t-wrap">
                <h2 className="tit">
                    Instargram
                </h2>
                <p className="txt-4">
                    @tocobo_official
                </p>
            </div>
            <ul className="instar-lst">
                {instar.map((i, index) => (   // ✅ index 추가
                    <li key={i.id}
                        data-aos="fade-up"
                        data-aos-delay={stagger(1000, index, 100)} // ✅ index 사용
                    >
                        <a
                            style={{ backgroundImage: `url(${i.image})` }}
                            href={i.link}
                            aria-label={i.alt} // alt 대신 aria-label 권장
                        >
                            {i.alt}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Instargram
