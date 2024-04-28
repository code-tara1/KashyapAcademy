import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

export const Notice = () => {
  const [open, setOpen] = useState(true);
  const [id, setId] = useState<number | null>(null);

  const handleClose = (index: number) => {
    setOpen(index === id ? false : true);
  };

  return (
    <>
      <Modal isOpen={open} onClose={() => handleClose}>
        <ModalOverlay />
        {...Array(10)
          .fill(0)
          .map((_, index) => (
            <ModalContent>
              <ModalHeader>Title Goes Here</ModalHeader>
              <ModalBody>
                <ModalCloseButton
                  bg={"primary.500"}
                  textColor={"white"}
                  borderRadius={"full"}
                  top={-3}
                  right={-4}
                  onClick={() => {
                    setId(index);
                    handleClose(index);
                  }}
                />
                <Image
                  src="https://source.unsplash.com/random/800x600"
                  alt="Random Image"
                />
              </ModalBody>
            </ModalContent>
          ))}
      </Modal>
    </>
  );
};
