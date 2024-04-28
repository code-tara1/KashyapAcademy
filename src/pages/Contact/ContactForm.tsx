/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSendMessage } from "../../api";
import { TextInput } from "../../component/FormComponent/TextInput";
import { ContactSchema } from "../../utils/schema";

export const ContactForm = () => {
  const { mutateAsync, isLoading } = useSendMessage();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(ContactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    await mutateAsync(data);
    reset();
  };

  return (
    <Flex flexDir={"column"} gap={4} p={4}>
      <Heading textAlign={"center"} size={{ base: "lg", md: "xl" }}>
        Send us a message
      </Heading>
      <Text textAlign={"center"} fontSize={{ base: "md", md: "lg" }}>
        We will get back to you as soon as possible
      </Text>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={2} py={4}>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <TextInput
              label="Full Name"
              isRequired
              name="name"
              control={control}
              placeholder={"Enter your name"}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <TextInput
              label="Email Address"
              isRequired
              name="email"
              type="email"
              control={control}
              placeholder={"Enter your email"}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <TextInput
              label="Phone Number"
              isRequired
              name="phone"
              control={control}
              placeholder={"Enter your phone"}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <TextInput
              isRequired
              label="Message"
              type="textarea"
              name="message"
              control={control}
              placeholder={"Type your message here ..."}
              errors={errors}
            />
          </GridItem>
        </SimpleGrid>
        <Button
          type="submit"
          isLoading={isLoading}
          w={"full"}
          colorScheme="primary"
          borderRadius={0}
        >
          Send Message
        </Button>
      </form>
    </Flex>
  );
};
