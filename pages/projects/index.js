import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import styles from "./projects.module.css";
import Modal from "../../components/Modal/modal";
import ImageSlider from "../../components/ImageSlider/imageSlider";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [Images, setImages] = useState([]);
  const [title, setTitle] = useState();
  const GoDispatchSlideImages = [
    {
      url: '/goDipatchMainScreen.png',
      caption: 'Slide 1',
      description: 'Go Dispatch is a Shuttle app and it is available for Android and   ios devices and offers travelers the ability to book rides from their mobile phones. There are  two apps one is for driver and other is for rider. Driver will  make himself available using driver app. When rider wants to book a ride ,the rider app will show the nearest shuttle and the ETA  to the rider based on rider’s geolocation.When driver accepts the request from rider the rider app will show the nearest stop to the rider,where the shuttle will arrive and rider can sit into the shuttle.'
    },
    {
      url: '/goDispatchAreaScreen.png',
      caption: 'Slide 2'
    },
    {
      url: '/addDriverScreen.png',
      caption: 'Slide 2'
    },
  ];
  const SuiteSlideImages = [
    {
      url: '/suitesMainPage.png',
      caption: 'Slide 1',
      description: 'The Suites was founded in August of 2020 by corporate attorney, business advisor and venture investor, Shimite Obialo, as an exclusive business community for executives and entrepreneurs of color.  We help our members access the right connections, coaching and capital to scale their businesses.  Through our mobile platform, peer masterminds and member mixers along with our network of coaches and capital relationships, we aim to empower, enlighten and elevate our members to supercharge their business growth. Learn more at www.jointhesuites.com.'
    },
    {
      url: '/settingssuites.png',
      caption: 'Slide 2'
    },
    {
      url: '/appactivitySuites.png',
      caption: 'Slide 3'
    },
  ];
  const CarouselSlideImages = [
    {
      url: '/carouselScoreSidebar.png',
      caption: 'Slide 1',
      description: 'Carousel is an Social Emotion Learninig app.It aims to learn new things through playing scorecard games.'
    },
    {
      url: '/carouselDasborad.png',
      caption: 'Slide 2'
    },
  ];
  return (
    <SimpleGrid bg="black" h="100vh" className={showModal && styles.isBlurred}>
      {showModal && (<Modal openModal={showModal} onClose={() => {
        setShowModal(false);
      }} modalTitle={title} description={Images[0].description}>
        <ImageSlider slideImages={Images} />
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
              src='/goDispatchLoginScreen.png'
              height="201px"
              width="379px"
              onClick={() => { setShowModal(true), setImages(GoDispatchSlideImages), setTitle("Go Dispatch") }}
            />
          </div>
          <div className={styles.projectNameDiv}>
            Go Dispatch-Shuttle App
                 </div>
        </div>
        <div className={styles.projectDivWrapper} >
          <div className={styles.projectImageWrapper}>
            <Image
              src='/suitesLoginPage.png'
              height="201px"
              width="379px"
              onClick={() => { setShowModal(true), setImages(SuiteSlideImages), setTitle("The Suites") }}
            />
          </div>
          <div className={styles.projectNameDiv}>
            The Suites
                 </div>
        </div>
        <div className={styles.projectDivWrapper} >
          <div className={styles.projectImageWrapper}>
            <Image
              src='/caroouselLogin.png'
              height="201px"
              width="379px"
              onClick={() => { setShowModal(true), setImages(CarouselSlideImages), setTitle("Carousel") }}
            />
          </div>
          <div className={styles.projectNameDiv}>
            Carousel
                 </div>
        </div>
      </Box>
    </SimpleGrid>
  )
}