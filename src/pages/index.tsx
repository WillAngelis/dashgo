import { Button, Flex, Stack } from '@chakra-ui/react';
import Input from '../components/Form/Input';

const Signin = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" />
          <Input type="password" label="Senha" />
        </Stack>

        <Button colorScheme="twitter" type="submit" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Signin;
