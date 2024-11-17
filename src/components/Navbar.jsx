import { Navbar, TextInput, NavbarLink } from "flowbite-react";
import { Button} from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import React from 'react'
import { useState } from "react";
const NavbarHeader = () => {
  return (
    <Navbar className="border-b ">
        <Navbar.Brand href='/'><Button gradientDuoTone="purpleToBlue">Merakan</Button></Navbar.Brand>
        <form className="flex justify-center items-center gap-2">
            <TextInput placeholder="Search product" type="text"></TextInput>
            <IoIosSearch></IoIosSearch>
        </form>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/login">Login</NavbarLink>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
