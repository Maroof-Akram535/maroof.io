import { SimpleGrid, Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import styles from "./about.module.css";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <SimpleGrid columns={2} bg="black">
      <Box >
        <div className={styles.introParagraphWrapper}>
          <h3 className={styles.heading}>
            Know Who I'M
          </h3>
          <p>
            Hi Everyone,<strong className={styles.mainname}> I'm  Maroof Akram</strong> from <strong className={styles.mainname}>Lahore, Pakistan. </strong>
            I am working as a Software Engineer for the last 1 Year with experience in building websites for small and medium-sized businesses.
          </p>
          <span>Apart from coding, some other activities that I love to do!</span>
          <UnorderedList>
            <ListItem>Travelling</ListItem>
            <ListItem>Playing Cricket</ListItem>
            <ListItem>Birds Keeping</ListItem>
          </UnorderedList>
          <p className={styles.testimonial}>"Compromise for your Dream but NEVER Compromise on your Dream."</p>
        </div>
      </Box>
      <Box >
        <div className={styles.imagewrapper}>
                <Image
                 src='/about.aee0f771.png'
                 objectFit='cover'
                 height="450px"
                 />
        </div>
      </Box>
      <Box  bg ="black" gridArea= "3 / 1 / span 4 / span 2;">
        <div>
               <h1 className={styles.professionalSkillHeading}>Professional ,<strong className={styles.mainname}> Skill Set</strong></h1>
               <div className={styles.iconWrapper}>
                 <div className={styles.techIcon}>
                 <Image
                 src='/node-svgrepo-com.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
                 <div className={styles.techIcon}>
                 <Image
                 src='/reactjs-icon.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
                 <div className={styles.techIcon}>
                 <Image
                 src='/Amazon_Web_Services-Logo.wine.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
                 <div className={styles.techIcon}>
                 <Image
                 src='/mongodb-icon-1.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
               </div>
               <div className={styles.iconWrapper}>
               <div className={styles.techIcon}>
                 <Image
                 src='/docker.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
               <div className={styles.techIcon}>
                 <Image
                 src='/expressjs-ar21.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
               <div className={styles.techIcon}>
                 <Image
                 src='/nextjs.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
               <div className={styles.techIcon}>
                 <Image
                 src='/132619.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
              </div>
         </div>
      </Box>
      <Box  bg ="black" gridArea= "8 / 1 / span 2 / span 2;">
        <div>
               <h1 className={styles.professionalSkillHeading}>Tools ,<strong className={styles.mainname}> I use</strong></h1>
               <div className={styles.iconWrapper}>
                 <div className={styles.techIcon}>
                 <Image
                 src='/visual-studio-code-1.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
                 <div className={styles.techIcon}>
                 <Image
                 src='/getpostman-icon.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
                 <div className={styles.techIcon}>
                 <Image
                 src='/MySQL-Logo.wine.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
                 <div className={styles.techIcon}>
                 <Image
                 src='/261532.svg'
                 height="100px"
                 width="100px"
                 />
                 </div>
               </div>
         </div>
      </Box>
    </SimpleGrid>

  )
}