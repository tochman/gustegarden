import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  chakra,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const AdoptionForm = ({ isOpen, setModalVisible }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleFormSubmission = (data) => {
    setModalVisible(false);
    console.table(data);
  };

  const errorMessage = "Det här fältet är obligatoriskt";
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setModalVisible(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Intresseanmälan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lämna dina uppgifter och önskemål om vilket fadderprogram du vill
              teckna dig för, så kontaktar vi dig snarast.
            </Text>
            <form
              name="fadderprogram"
              id="adoption-form"
              data-netlify="true"
              method="POST"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit(handleFormSubmission)}
            >
              <input type="hidden" name="form-name" value="fadderprogram" />
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Ditt namn</FormLabel>
                <Input
                  id="name"
                  {...register("name", {
                    required: errorMessage,
                    minLength: {
                      value: 4,
                      message: "Minsta längd är 4 tecken",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={4}
              colorScheme="orange"
              variant="outline"
              onClick={() => setModalVisible(false)}
            >
              Stäng
            </Button>
            <Button colorScheme="orange" type="submit" form="adoption-form">
              Skicka
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdoptionForm;
