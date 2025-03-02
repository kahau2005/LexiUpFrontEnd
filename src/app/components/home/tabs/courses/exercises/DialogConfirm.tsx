import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-transparent text-[#6157f1] font-bold text-[18px]">Submit</Button>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent className="text-black p-4 [&>button[aria-label='Close']]:hidden">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[20px] text-center">Do you want to submit your assignment now?</ModalHeader>
              <ModalBody>
                <p>Once you submit, you will not be able to edit your answers. The system will save your responses.</p>
              </ModalBody>
              <ModalFooter className="mt-4">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
