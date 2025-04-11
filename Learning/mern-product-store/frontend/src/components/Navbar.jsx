import { React, useState } from 'react';

import { Container, Flex, HStack, Text, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPlusSquare, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, setColorMode } = useState('light');
  
  function handleToggleColorMode() {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  return (
    <Container maxW={'1140px'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDir={{base: 'column', sm: 'row'}}>
        <Text fontSize={{base: '22', sm: '28'}} fontWeight={'bold'} textTransform={'uppercase'} textAlign={'center'} bgGradient={'linear(to-r, cyan.400, blue.500)'} bgClip={'text'}>
          <Link to={'/'}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
            <Button>
              <Icon fontSize={20}>
                <FaPlusSquare />
              </Icon>
            </Button>
          </Link>
          <Button onClick={handleToggleColorMode}>
            {colorMode === 'light' ? (<Icon fontSize={20} >
              <FaSun />
            </Icon>) : (<Icon fontSize={20}>
              <FaMoon />
            </Icon>)}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;