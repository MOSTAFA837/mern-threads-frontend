import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Link to="/mostafa">
      <Flex w="full" justifyContent="center">
        <Button mx="auto">visit profilepage</Button>
      </Flex>
    </Link>
  );
}
