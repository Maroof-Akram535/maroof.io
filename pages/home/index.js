import { SimpleGrid, Box } from '@chakra-ui/react'
import styles from "./home.module.css";
import { Image } from '@chakra-ui/react';
export default function Home() {
  return (
    <SimpleGrid columns={2} bg="black">
      <Box >
        <div className={styles.imagewrapper}>
          <Image
            borderRadius='50%'
            src='/maroof.png'
          />
        </div>
      </Box>
      <Box >
        <div className={styles.nameWrapper}>
          <h1 className={styles.heading}>
            Hi There! <span className={styles.wave} >👋🏻</span>
          </h1>
          <h1 className={styles.headingname}>
            I'M
                <strong className={styles.mainname}> MAROOF</strong>
          </h1>
          <h1 className={styles.headingname}>
            <strong className={styles.mainname}> FULL STACK JS DEVELOPER.</strong>
          </h1>
        </div>
      </Box>
    </SimpleGrid>
  )
}