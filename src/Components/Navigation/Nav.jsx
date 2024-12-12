import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Employee from '../Employee/Employee';
import CountUp from '../CountUp/CountUp';
import About from '../Pages/About';
import Home from '../Pages/Home';

export class Nav extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>

                    <Link to="/">Home</Link> &nbsp;
                    <Link to="/about">About</Link> &nbsp;
                    <Link to="/employee">Employee</Link>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/employee" element={<Employee />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Nav