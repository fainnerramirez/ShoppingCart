import { Box, Image, Text } from "@chakra-ui/react";
import NotFound from "../assets/NotFound404.jpg";
import { Link } from "react-router-dom"

const NotFound404: React.FC = () => {
    return(
        <Box>
            <Box>
                <Image src={ NotFound } alt="image Not Found" />
            </Box>
            <Text>Lo sentimos, esta página no existe</Text>
            <Link to="/" className="btn btn-info text-white mt-3">Go Home</Link>
        </Box>
    )
}

export default NotFound404;