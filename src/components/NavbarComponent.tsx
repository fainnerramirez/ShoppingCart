import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Container
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Icon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";

import { propsNavbar } from "../const/Types";
import * as COLOR from '../const/Colors';

const Navbar: React.FC<propsNavbar> = ({ brand }: propsNavbar) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('gray.50', COLOR.dark)
  const color = useColorModeValue('pink.600', 'pink.400');
  const colorText = useColorModeValue('purple.600', 'gray.50');
  
  return (
    <Container maxW="container.xl">
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex>
            <Link to="/">
              <Text
                  bgGradient={ COLOR.bgGradientText }
                  bgClip="text"
                  fontSize="2xl"
                  fontWeight="extrabold"
              >
                  { brand }
            </Text>
            </Link>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Flex flexDir="row" w={350} justifyContent="space-around">
                <Text color={colorText} fontSize='1.1em' fontWeight="bold" mt={2}>
                  <Link to="/">Inicio</Link>
                </Text>
                <Text color={colorText} fontSize='1.1em' fontWeight="bold" mt={2}>
                  <Link to="/products">Productos</Link>
                </Text>

                <Flex flexDir="row">
                  <Icon as={ AiOutlineShoppingCart } color={colorText} fontSize='1.6em' fontWeight="bold" mt={2}></Icon>
                  <Text color={colorText} fontSize='1.1em' fontWeight="bold" mt={2}>(0)</Text>
                </Flex>
              </Flex>

              <Button onClick={toggleColorMode} bg={ bg } _focus={{color: "#fffff"}}>
                {colorMode === 'light' ? <MoonIcon color={COLOR.primary} /> : <SunIcon color={COLOR.secondary} />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  >
                  <Avatar
                    size={'sm'}
                    src={'https://i.imgur.com/l4LFUyW.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://i.imgur.com/l4LFUyW.jpg'}
                    />
                  </Center>
                  <br />
                  <Center color={color}>
                    <p>Fainner Ramirez</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem color={color}>Tus Compras</MenuItem>
                  <MenuItem color={color}>Configuración</MenuItem>
                  <MenuItem color={color}>Salir</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Navbar;