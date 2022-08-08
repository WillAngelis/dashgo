import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  IconButton,
  Spinner,
} from '@chakra-ui/react';

import Link from 'next/link';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { useQuery } from '@tanstack/react-query';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { useEffect } from 'react';

export default function UserList() {
  const { data, isLoading, error } = useQuery(['users'], async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    return data;
  });

  console.log(data);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="md"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                cursor="pointer"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="messenger" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      {' '}
                      <Checkbox colorScheme="messenger" />{' '}
                    </Td>
                    <Td px={['4', '4', '6']}>
                      <Box>
                        <Text fontWeight="bold">William Angelis</Text>
                        <Text fontSize="sm" color="gray.300">
                          willangelis@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>05 de Agosto, 2022</Td>}
                    <Td>
                      {isWideVersion ? (
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="messenger"
                          leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                          cursor="pointer"
                        >
                          Editar
                        </Button>
                      ) : (
                        <IconButton
                          aria-label="Edit"
                          colorScheme="messenger"
                          icon={<Icon as={RiPencilLine} fontSize="16" />}
                        />
                      )}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
