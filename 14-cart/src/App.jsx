import { useState } from 'react';
import { Box, Button, Center } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box fontSize={'24px'} textAlign={'center'} mt={24}>
        The count is {count}
      </Box>
      <Center w='100%'>
        <Button onClick={() => setCount(count - 1)} m={4}>
          -
        </Button>
        <Button onClick={() => setCount(count + 1)} m={4}>
          +
        </Button>
      </Center>
    </>
  );
}

export default App;
