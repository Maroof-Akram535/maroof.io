import Link from 'next/link';
import styles from './sidebar.module.css';
export default function SideBar() {
    return (
        <>
        <div>

        </div>
            <div className={styles.sidebar}>
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