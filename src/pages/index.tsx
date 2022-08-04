import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

const Home = () => {
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
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="cyan.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor="cyan.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button colorScheme="twitter" type="submit" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
