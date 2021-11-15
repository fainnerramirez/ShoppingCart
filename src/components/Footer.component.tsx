import { Text } from "@chakra-ui/react";
import { propsFooter } from "../utils/Types";

const Footer: React.FC<propsFooter> = ({ footer }) => {
    return (
        <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            textAlign="center"
            mt={10}
        >
        { footer }
    </Text>
    )
}

export default Footer;