import React from 'react'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import './CartIcon.css'


export default function CartIcon({showWhenHover}) {
    return <>
        <NavbarBrand href="/cart" onMouseEnter={() => showWhenHover()}>
            <div>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-basket-fill" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                </svg>
            </div>
        </NavbarBrand>
    </>
}
