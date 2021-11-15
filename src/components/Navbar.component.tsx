import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiCool } from "react-icons/bi";
import { propsNavbar } from "../utils/Types";
import * as COLOR from "../utils/Colors";
import { Link } from "react-router-dom";

const Navbar: React.FC<propsNavbar> = ({ brand }) => {
  const LinksUser = ["Perfil", "Mis compras"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue(COLOR.dark, "gray.50");
  const colorButton = useColorModeValue("gray.900", "gray.50");
  const bgButton = useColorModeValue(COLOR.primary, "gray.900");
  const bgNavbar = useColorModeValue("gray.50", COLOR.darkMin);

  return (
    <Box bg={bgNavbar} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          color={colorButton}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Link to="/">
              <Text
                bgGradient={COLOR.bgGradientText}
                bgClip="text"
                fontSize={{ sm: "1rem", md: "1.2rem", lg: "1.3rem" }}
              >
                {brand}
              </Text>
            </Link>
          </Box>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            color={color}
          >
            <Link to="/products">
              <Text color={COLOR.primary} fontWeight={"bold"}>
                Categorías
              </Text>
            </Link>
            <Link to="/">
              <Button
                color={COLOR.primary}
                fontWeight={"bold"}
                variant="outline"
                colorScheme={COLOR.primary}
              >
                Inicio
              </Button>
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button m={2} color="gray.50" bg={bgButton} onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"sm"} src={"https://i.imgur.com/l4LFUyW.jpg"} />
            </MenuButton>
            <MenuList>
              <MenuItem>DATOS</MenuItem>
              <MenuDivider />
              {LinksUser.map((link) => {
                return (
                  <MenuItem key={link} icon={<BiCool />}>
                    {link}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link to="/perfil">
              <Text color={color}>Perfil</Text>
            </Link>
            <Link to="/misCompras">
              <Text color={color}>Mis Compras</Text>
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
