import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Tour = ({ id, image, price, topic, details, data, setData }) => {
  const [showMore, setShowMore] = useState(false);

  const removeTour = (id) => {
    // console.log(`remove ${id}`);
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  return (
    <Box
      maxW='xl'
      pb={12}
      my={8}
      bg={'white'}
      color={'gray.700'}
      borderRadius={'10px'}
      boxShadow={' rgba(0, 0, 0, 0.1) 0px 10px 50px'}
    >
      <Box h={'350px'} overflow={'hidden'} borderRadius={'10px'}>
        <Image
          w={'100%'}
          src={image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
      </Box>
      <Stack p={8} spacing='3'>
        <Flex justify={'space-between'}>
          <Heading size='md'>{topic}</Heading>
          <Badge variant='subtle' colorScheme='blue' py={1} px={4}>
            ${price}
          </Badge>
        </Flex>
        <Text as={'span'} noOfLines={showMore ? undefined : 3}>
          {details}
        </Text>
        {details.length > 3 && (
          <Text
            fontSize={'12px'}
            fontWeight={600}
            cursor={'pointer'}
            color={'blue.500'}
            textAlign={'right'}
            mt={'-10px'}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </Text>
        )}
      </Stack>

      <Center>
        <Button
          variant='outline'
          colorScheme='red'
          py={4}
          px={8}
          onClick={() => removeTour(id)}
        >
          Not Interested
        </Button>
      </Center>
    </Box>
  );
};

Tour.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Tour;
