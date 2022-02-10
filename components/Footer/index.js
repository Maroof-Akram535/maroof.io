import Link from 'next/link';
import styles from "./footer.module.css";
import { Image } from '@chakra-ui/react';
export default function Footer() {
    return (
        <>
            <div>
                <div className={styles.headingname}>
                    Find <strong className={styles.mainname}> Me ON</strong>
                </div>
                <div className={styles.imagewrapper}>
                    <Image
                        src='/github-brands.svg'
                        borderRadius='full'
                        height="50px"
                        width="50px"
                        bg="white"
                    />
                    <Image
                        src='/facebook-brands.svg'
                        borderRadius='full'
                        height="50px"
                        width="50px"
                        bg="white"
                    />
                    <Image
                        src='/instagram-brands.svg'
                        borderRadius='full'
                        height="50px"
                        width="50px"
                        bg="white"
                    />
                    <Image
                        src='/linkedin-in-brands.svg'
                        borderRadius='full'
                        height="50px"
                        width="50px"
                        bg="white"
                    />
                </div>
            </div>
        </>
    )
}