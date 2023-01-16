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
  Textarea,
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
    const form = document.forms.fadderprogram;
    form.addEventListener("submit", (event) => event.preventDefault());
    form.elements.name.value = data.name;
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
    form.submit();

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: JSON.stringify({ "form-name": "fadderprogram", ...data }),
    // })
    //   .then(() => alert("Success!"))
    //   .catch((error) => alert(error));
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
              id="adoption-form"
              name="adoptionform"
              method="POST"
              onSubmit={handleSubmit(handleFormSubmission)}
            >
              <input type="hidden" name="form-name" value="fadderprogram" />
              <FormControl isInvalid={errors.name} mt={2}>
                <FormLabel htmlFor="name">Ditt namn</FormLabel>
                <Input
                  name="name"
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
              <FormControl isInvalid={errors.email} mt={2}>
                <FormLabel htmlFor="email">Din mailadress</FormLabel>
                <Input
                  name="email"
                  {...register("email", {
                    required: errorMessage,
                    minLength: {
                      value: 4,
                      message: "Minsta längd är 4 tecken",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.message} mt={2}>
                <FormLabel htmlFor="message">Meddelande/Önskemål</FormLabel>
                <Textarea
                  name="message"
                  {...register("message", {
                    required: errorMessage,
                    minLength: {
                      value: 4,
                      message: "Minsta längd är 4 tecken",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.message && errors.message.message}
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
