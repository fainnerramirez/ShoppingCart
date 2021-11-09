import {Text} from "@chakra-ui/react";

type props = {
    footer: string
}

const Footer: React.FC<props> = ({footer}: props) => {
    return (
        <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            textAlign="center"
            mt={20}
        >
        { footer }
    </Text>
    )
}

export default Footer;