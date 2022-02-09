import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  import styles from "./modal.module.css";
export default function ProjectModal({openModal,onClose,children}) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
     <>
        <div>
        <Modal isOpen={openModal} onClose={()=>onClose()}  isCentered={true} size="4xl">
        
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              {children}
            </ModalBody>
  
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
        </div>
        </>
    )
  }