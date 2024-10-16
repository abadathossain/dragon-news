import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

export default function BreakingNews() {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>BreakingNews</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
            </Marquee>

        </div>
    )
}
