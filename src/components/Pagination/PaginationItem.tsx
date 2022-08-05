import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="messenger"
        disabled
        _disabled={{
          bg: '#0078FF',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: '#0078FF',
      }}
    >
      {number}
    </Button>
  );
}
