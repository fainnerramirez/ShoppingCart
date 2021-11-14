import { Box, Heading, Button} from "@chakra-ui/react"
import { propsCard } from "../utils/Types";

const Card: React.FC<propsCard> = ({ name, description }) => {    

    return(
        <Box maxW="18rem">
            <Heading fontSize="2xl">
                { name }
            </Heading>
            <Box>
                { description }
            </Box>
            <Box>
                <Button>
                    Agregar al carrito
                </Button>
                <Button>
                    Details
                </Button>
            </Box>
        </Box>
    )
}

export default Card;