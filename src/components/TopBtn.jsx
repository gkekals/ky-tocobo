import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
const TopBtn = () => {
    const scrollTo = useSmoothScroll()
    return (
        <div>
            {/* icon_top.svg */}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo('Hero')
                }}
                className='top-btn'><img src="/img/icon_top.svg" alt="" /></button>

            {/* icon_talk.svg */}
            <button
                onClick={e => {
                    e.preventDefault()
                    scrollTo('TalkSection') // 원하는 섹션/액션
                }}
                className="talk-btn"
                aria-label="1:1 Talk"
            >
                <img src="/img/icon_talk.svg" alt="TCB" />
            </button>

            <p className="talk-label">
                <i>1:1 Talk</i>
            </p>
        </div>
    )
}

export default TopBtn