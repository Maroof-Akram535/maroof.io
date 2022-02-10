import { SimpleGrid, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import styles from "./imageSlider.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
export default function Home({ slideImages }) {
  const [index, setActiveStep] = useState(0);
  const collectionSize = slideImages.length;
  return (
    <SimpleGrid >
      <Box >
        <div >
          <Image src={slideImages[index].url}
          />
          <Button onClick={() => { setActiveStep(index - 1) }} disabled={index === 0} bg="black" className={styles.arrowLeftButton}> <ArrowLeftIcon /></Button>
          <Button onClick={() => { setActiveStep(index + 1) }} disabled={index === collectionSize - 1} bg="black" className={styles.arrowRightButton}><ArrowRightIcon /></Button>
        </div>
      </Box>
    </SimpleGrid>
  )
}