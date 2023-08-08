import { Box, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box mt={20}>
      <Spinner boxSize={'200px'} thickness='4px' color='red.500' />
    </Box>
  );
};

export default Loading;
