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
  HStack,
  Select,
  Radio,
  RadioGroup,
  Box,
} from "@chakra-ui/react";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../../utilities/emailRegex";

const FurForm = ({ isOpen, setModalVisible }) => {
  const { toast } = createStandaloneToast();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const netlify = useNetlifyForm({
    name: "fur_order",
    action: "/furs",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      toast({
        title: "Tack för din beställning/intresseanmälan!",
        status: "success",
      });
      setModalVisible(false);
    },
  });

  const variantWatch = watch("variant");
  const colors = [
    { label: "Ljusgrå", value: "ljusgrå" },
    { label: "Mellangrå", value: "mellangrå" },
    { label: "Mörkgrå", value: "mörkgrå" },
    { label: "Vitt", value: "vitt" },
  ];
  const handleFormSubmission = (data) => {
    netlify.handleSubmit(null, data);
  };

  const errorMessage = "Det här fältet är obligatoriskt";
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setModalVisible(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Beställning fårskinn & fällar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lämna dina uppgifter och önskemål om vilket typ av fäll du är
              intresserad av, så kontaktar vi dig snarast.
            </Text>
            <NetlifyFormProvider {...netlify}>
              <NetlifyFormComponent
                onSubmit={handleSubmit(handleFormSubmission)}
                id="fur-form"
              >
                <Honeypot />
                {netlify.error && <Text>Någonting blev tyvärr fel...</Text>}
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
                        message: "Var god ange ett giltigt mailadress.",
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
                <FormControl isInvalid={errors.phone} mt={2}>
                  <FormLabel htmlFor="phone">Ditt telefonnumer</FormLabel>
                  <Input
                    name="phone"
                    {...register("phone", {
                      required: errorMessage,
                      minLength: {
                        value: 4,
                        message: "Minsta längd är 4 tecken",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.phone && errors.phone.message}
                  </FormErrorMessage>
                </FormControl>
                <RadioGroup>
                  <HStack mt={4}>
                    <Radio
                      name="variant"
                      value="lamm"
                      {...register("variant")}
                      data-cy="lamm"
                      id="lamm"
                    >
                      Lammfäll
                    </Radio>
                    <Radio
                      name="variant"
                      value="sheep"
                      {...register("variant")}
                      data-cy="sheep"
                      id="sheep"
                    >
                      Fårfäll
                    </Radio>
                  </HStack>
                </RadioGroup>
                <Box mt={2}>
                  {variantWatch && (
                    <>
                      <Text>Färgsättning</Text>
                      <Select
                        placeholder="Var god välj..."
                        {...register("color")}
                      >
                        {colors.map((size) => (
                          <option key={size.value} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </Select>
                    </>
                  )}
                </Box>
                <FormControl isInvalid={errors.message} mt={2}>
                  <FormLabel htmlFor="message">Meddelande/Önskemål</FormLabel>
                  <Textarea name="message" {...register("message")} />
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
            <Button colorScheme="orange" type="submit" form="fur-form">
              Skicka
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FurForm;
