import React, { useState } from "react";
import { Text, Box, HStack, VStack, Button } from "native-base";

export default function Calculator() {
  const [operation, setOperation] = useState(0);
  const [result, setResult] = useState(null);

  const insertNumber = (value) => {
    if (operation === 0) {
      setOperation(value);
    } else {
      setOperation(operation + "" + value);
    }
  };

  const insertOperator = (value) => {
    if (operation === 0) {
      setOperation(value);
    } else {
      setOperation(operation + "" + value);
    }
  };

  return (
    <Box>
      <VStack
        marginBottom={4}
        flexDir="column"
        justifyContent="space-between"
        bg="gray.200"
        height={32}
        borderRadius={10}
        paddingX={5}
        paddingY={3}
        borderColor="white"
      >
        <Text color="black" fontSize="2xl" fontFamily="Poppins">
          {operation}
        </Text>
        <Text
          color="black"
          fontSize="xl"
          fontWeight="bold"
          textAlign="right"
          fontFamily="Poppins"
        >
          {result}
        </Text>
      </VStack>

      <VStack>
        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={2.7}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => setOperation(0)}
          >
            AC
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => insertOperator("(")}
          >
            (
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => insertOperator(")")}
          >
            )
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(1)}
          >
            1
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(2)}
          >
            2
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(3)}
          >
            3
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => insertOperator(" + ")}
          >
            +
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(4)}
          >
            4
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(5)}
          >
            5
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(6)}
          >
            6
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => insertOperator(" - ")}
          >
            -
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(7)}
          >
            7
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(8)}
          >
            8
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32 }}
            onPress={() => insertNumber(9)}
          >
            9
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => insertOperator(" * ")}
          >
            *
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button flex={1} _text={{ fontSize: 32 }}>
            0
          </Button>
          <Button flex={1} _text={{ fontSize: 32 }}>
            .
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
          >
            =
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 32, color: "white" }}
            bg="gray.400"
            onPress={() => insertOperator(" / ")}
          >
            /
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
