import { Box, Text, Flex, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>William Angelis</Text>
          <Text color="gray.300" fontSize="small">
            willangelis@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Will Angelis"
        src="https://github.com/willangelis.png"
      />
    </Flex>
  );
}
