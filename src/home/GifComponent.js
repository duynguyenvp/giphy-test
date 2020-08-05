import React from "react";
import { Gif } from "@giphy/react-components";
const HeartIcon = React.memo(({ like, isActive }) => <div className={`gif-like-icon ${isActive ? 'active' : ''}`}
    onClick={like}>
    <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="60px"
        y="60px"
        viewBox="0 0 477.534 477.534"
        style={{ fill: "red" }}
        xmlSpace="preserve">
        <g>
            <path d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909    l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778    c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654    c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z" />
        </g>
    </svg>
</div>)
const GifComponent = ({ gif, like, isActive = false }) => {
    const handleLike = () => {
        like(gif)
    }
    return <div className="gif-wrapper">
        {gif && <Gif gif={gif} width={200} height={200} style={{ margin: 4 }} />}
        <HeartIcon like={handleLike} isActive={isActive} />
    </div>
}

export default React.memo(GifComponent)