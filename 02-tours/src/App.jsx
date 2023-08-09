import { Box, Button, Center, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tour from './components/Tour';

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const baseUrl = 'https://course-api.com/react-tours-project';

  const getData = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(baseUrl);
      setData(res.data);
      setisLoading(false);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log('Data', data);

  return (
    <Box>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <Heading color={'gray.700'} mt={8} textAlign={'center'}>
                Our Tours
              </Heading>
              <Center mt={2} mb={12}>
                <Box bg='blue.500' w={'100px'} h={'4px'}></Box>
              </Center>
              {data?.map((item) => (
                <Box key={item.id}>
                  <Tour
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    topic={item.name}
                    details={item.info}
                    data={data}
                    setData={setData}
                  />
                </Box>
              ))}
              <Center mt={4} mb={12}>
                <Button
                  colorScheme='red'
                  py={4}
                  px={8}
                  onClick={() => setData([])}
                >
                  Clear All Tours
                </Button>
              </Center>
            </>
          ) : (
            <>
              <Heading mt={8} textAlign={'center'}>
                No Tours Left
              </Heading>
              <Center mt={4} mb={12}>
                <Button
                  colorScheme='green'
                  py={4}
                  px={8}
                  onClick={() => getData()}
                >
                  Refresh
                </Button>
              </Center>
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default App;
