import styles from "./footer.module.css";
import { Image } from '@chakra-ui/react';
export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingname}>
                    Find <strong className={styles.mainname}> Me ON</strong>
                </div>
                <div className={styles.imagewrapper}>
                <a className={styles.hoverEffect} target="_blank" href="https://github.com/Maroof-Akram535">
                    <Image
                        src='/github-brands.svg'
                        borderRadius='full'
                        height="22px"
                        width="22px"
                        bg="white"
                        marginRight="8px"
                    />
                     </a>
                     <a className={styles.hoverEffect} target="_blank" href="https://www.facebook.com/rana.maroof.12">
                    <Image
                        src='/facebook-brands.svg'
                        borderRadius='full'
                        height="22px"
                        width="22px"
                        bg="white"
                        marginRight="8px"
                    />
                     </a>
                     <a className={styles.hoverEffect} target="_blank" href="https://www.facebook.com/rana.maroof.12">
                    <Image
                        src='/instagram-brands.svg'
                        borderRadius='full'
                        height="22px"
                        width="22px"
                        bg="white"
                        marginRight="8px"
                    />
                     </a>
                     <a className={styles.hoverEffect} target="_blank" href="https://www.linkedin.com/in/maroof-akram-18336b1b3">
                    <Image
                        src='/linkedin-in-brands.svg'
                        borderRadius='full'
                        height="22px"
                        width="22px"
                        bg="white"
                        marginRight="8px"
                    />
                     </a>
                </div>
            </div>
        </>
    )
}