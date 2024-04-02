import { Flex, Text } from "@chakra-ui/react";

export default function Message({ ownMessage }) {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Flex bg={"green.800"} maxW={"350px"} p={1} borderRadius={"md"}>
            <Text color={"white"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis, iure.
            </Text>
          </Flex>
        </Flex>
      ) : (
        <Flex gap={2}>
          <Text
            maxW={"350px"}
            bg={"gray.400"}
            p={1}
            borderRadius={"md"}
            color={"black"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </Flex>
      )}
    </>
  );
}
