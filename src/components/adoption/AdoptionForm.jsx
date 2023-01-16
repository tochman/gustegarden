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
  createStandaloneToast,
} from "@chakra-ui/react";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../utilities/emailRegex";


const AdoptionForm = ({ isOpen, setModalVisible }) => {
  const { toast } = createStandaloneToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const netlify = useNetlifyForm({
    name: "fadderprogram",
    action: "/adoption",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      toast({
        title: "Tack för din beställning/intresseanmälan!",
        status: "success",
      });
      setModalVisible(false);
    },
  });

  const handleFormSubmission = (data) => {
    netlify.handleSubmit(null, data);
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
            <NetlifyFormProvider {...netlify}>
              <NetlifyFormComponent
                onSubmit={handleSubmit(handleFormSubmission)}
                id="adoption-form"
              >
                <Honeypot />
                {netlify.error && <Text>Någonting blev tyvärr fel</Text>}
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
                      pattern: {
                        value: emailRegex,
                        message: t("forms.messages.invalidEmail"),
                      },
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
              </NetlifyFormComponent>
            </NetlifyFormProvider>
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
