import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import styles from "./modal.module.css";
export default function ProjectModal({ openModal, onClose, children, modalTitle, description }) {
  return (
    <>
      <div>
        <Modal isOpen={openModal} onClose={() => onClose()} isCentered={true} size="2xl" className={styles.modal}>
          <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              {children}
            </ModalBody>
            <ModalFooter>
              <p>{description}</p>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}