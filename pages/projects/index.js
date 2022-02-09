import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import styles from "./projects.module.css";
import Modal from "../../components/Modal/modal";
import ImageSlider from "../../components/ImageSlider/imageSlider";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const GoDispatchSlideImages = [
    {
      url: '/profileImage.jpeg',
      caption: 'Slide 1'
    },
    {
      url: '/about.aee0f771.png',
      caption: 'Slide 2'
    },
  ];
  
  return (
    <SimpleGrid  bg="black">
      {showModal&&( <Modal openModal={showModal} onClose={()=>{
        setShowModal(false);
      }}>
         <ImageSlider slideImages={GoDispatchSlideImages}/>
      </Modal>)}
     
      <Box>
      <div className={styles.headingmain}>
          My Recent <strong className={styles.mainname}>  Works</strong>
        </div>
        <div className={styles.subHeading}>
        Here are a few projects I've worked on recently.
        </div>
      </Box>
      <Box className={styles.projectBoxWrapper}>
          <div className={styles.projectDivWrapper} >
            <div className={styles.projectImageWrapper}>
          <Image
                 src='/taxi1.jfif'
                 height= "201px"
                 width="379px"
                 onClick={()=>setShowModal(true)}
                 />
                 </div>
                 <div className={styles.projectNameDiv}>
                   Go Dispatch-Shuttle App
                 </div>
          </div>
          <div  className={styles.projectDivWrapper} >
            <div className={styles.projectImageWrapper}>
          <Image
                 src='/taxi1.jfif'
                 height= "201px"
                 width="379px"
                 />
                 </div>
                 <div className={styles.projectNameDiv}>
                   Go Dispatch-Shuttle App
                
                 </div>
          </div>
          <div className={styles.projectDivWrapper} >
            <div className={styles.projectImageWrapper}>
          <Image
                 src='/taxi1.jfif'
                 height= "201px"
                 width="379px"
                 />
                 </div>
                 <div className={styles.projectNameDiv}>
                   Go Dispatch-Shuttle App
                
                 </div>
          </div>
         
      </Box>
    </SimpleGrid>
  )
}