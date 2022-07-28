import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const NavBar = () => {

    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3" bg="dark" variant="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src='/img/streetwear-logo.png' alt="streetWEar" width={200}/>
                </Link>
                <div className="navbar-nav px-md-5">
            
                            <CartWidget width="40"/>

                            <DropdownButton id="dropdown-basic-button" title="CATEGORÍAS">
                                <Dropdown.Item onClick={() => {navigate("/")}}> TODOS </Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate("/category/camperas")}}> CAMPERAS </Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate("/category/camisas")}}> CAMISAS </Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate("/category/buzos")}}> BUZOS </Dropdown.Item>
                            </DropdownButton>
       
               
                </div>
            </div>
        </nav>
    );
};