import { SimpleGrid, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import styles from "./imageSlider.module.css";
 export default function Home({slideImages}) {
    const [index, setActiveStep] =useState(0);
    const collectionSize = slideImages.length;
  return (
    <SimpleGrid >
      <Box >
      
      <div >
          <Image src={slideImages[index].url}
           
          />
          <div className={styles.slider}>
              <Button  colorScheme='teal' variant='outline'  onClick={()=>{setActiveStep(index-1)}}   disabled={index === 0}>Back</Button>  
            <Button  colorScheme='teal' variant='outline' onClick={()=>{setActiveStep(index+1)}}   disabled={index === collectionSize-1}>Next</Button>
            </div>
      </div>
    
        
      </Box>
     
    </SimpleGrid>
  )
}