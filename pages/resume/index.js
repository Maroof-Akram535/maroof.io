import { SimpleGrid, Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import styles from "./resume.module.css";
export default function Home() {
  return (
    <SimpleGrid  bg="black">
      <Box h='100vh'>
      <div className={styles.resumecontainer}>
                <Image
                 borderRadius='full'
                 src='/MAROOF_AKRAM_Resume-1.jpg'
                 objectFit='cover'
                 height="500px"
                 />
        </div>
      </Box>
     
    </SimpleGrid>
  )
}