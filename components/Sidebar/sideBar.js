import Link from 'next/link';
import styles from './sidebar.module.css';
import React, { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'
export default function SideBar() {
    const [navBar, setNavbar] = useState(false);
    return (
        <>
            <div className={styles.sideBarToggel}>
            <HamburgerIcon margin="5px" w={6} h={6} onClick={()=>{setNavbar(!navBar)}}/>
            </div>
            <div className={navBar?styles.toggledSidebar:styles.sidebar}>
                <Link href="/home">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/resume">
                    <a>Resume</a>
                </Link>
            </div>
        </>
    )
}