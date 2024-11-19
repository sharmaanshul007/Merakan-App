import { Navbar, TextInput, NavbarLink } from "flowbite-react";
import { Button} from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import React from 'react'
import { useState } from "react";
import { useSelector } from "react-redux";
const NavbarHeader = () => {
  const {cart} = useSelector(state => state.cart);
  const totalItemsInCart = cart.length ;
  return (
    <Navbar className="border-b ">
        <Navbar.Brand href='/'><Button gradientDuoTone="purpleToBlue">Merakan</Button></Navbar.Brand>
        <form className="flex justify-center items-center gap-2">
            <TextInput placeholder="Search product" type="text"></TextInput>
            <IoIosSearch></IoIosSearch>
        </form>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="relative">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/cart">Cart</NavbarLink>
            {
              totalItemsInCart > 0 ? (<div className=" bg-green-400 absolute rounded-full w-[20px] h-[20px] flex items-center justify-center top-[-8px] right-[-10px] animate-bounce">{totalItemsInCart}</div>) : (<></>)
            }
            
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
