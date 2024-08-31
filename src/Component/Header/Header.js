import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="row text-center py-5 ">
                    <div className="col-3 "><Link className='text-danger text-decoration-none' to='/React'>React.JS</Link></div>
                    <div className="col-3 "><Link className='text-danger text-decoration-none' to='/Js'>JavaScript</Link></div>
                    <div className="col-3 "><Link className='text-danger text-decoration-none' to='/Node'>Node.Js</Link></div>
                    <div className="col-3 "><Link className='text-danger text-decoration-none' to='/Express'>Express.JS</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
