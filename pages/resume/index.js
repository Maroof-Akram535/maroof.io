import { SimpleGrid, Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import styles from "./resume.module.css";
import {
  Button,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <SimpleGrid bg="black">
      <Box>
        <div className={styles.downloadButton}>
        <a href="/MAROOF_AKRAM_Resume-1.jpg" rel="noopener noreferrer" download>
        <Button  colorScheme='blue'>Download CV</Button>
        </a>
        </div>
        <div className={styles.resumecontainer}>
          <Image
            src='/MAROOF_AKRAM_Resume-1.jpg'
            height="1100px"
          />
        </div>
      </Box>
    </SimpleGrid>
  )
}