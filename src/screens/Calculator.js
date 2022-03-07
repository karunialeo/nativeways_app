import React, { useState } from "react";
import { Text, HStack, VStack, Button, ScrollView } from "native-base";

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

  const erase = () => {
    setOperation(operation.slice(0, -1));
  };

  const insertOperator = (value) => {
    setOperation(operation + "" + value);
  };

  const countResult = () => {
    let count = eval(operation);
    setResult(count);
  };

  return (
    <ScrollView backgroundColor="white">
      <VStack
        marginBottom={4}
        flexDir="column"
        justifyContent="space-between"
        bg="primary.100"
        height={32}
        paddingX={5}
        paddingY={3}
        borderColor="white"
      >
        <Text color="primary.500" fontSize="2xl" fontFamily="Poppins">
          {operation}
        </Text>
        <Text
          color="black"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="right"
          fontFamily="Poppins"
        >
          {result}
        </Text>
      </VStack>

      <VStack marginX={5}>
        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 16, color: "white" }}
            bg="primary.500"
            onPress={() => {
              setOperation(0);
              setResult(null);
            }}
          >
            AC
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => erase()}
          >
            ←
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => insertOperator("(")}
          >
            (
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => insertOperator(")")}
          >
            )
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(1)}
          >
            1
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(2)}
          >
            2
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(3)}
          >
            3
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => insertOperator("+")}
          >
            +
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(4)}
          >
            4
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(5)}
          >
            5
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(6)}
          >
            6
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => insertOperator("-")}
          >
            -
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(7)}
          >
            7
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(8)}
          >
            8
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(9)}
          >
            9
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => insertOperator("*")}
          >
            *
          </Button>
        </HStack>

        <HStack justifyContent="space-between" space={3}>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertNumber(0)}
          >
            0
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20 }}
            onPress={() => insertOperator(".")}
          >
            .
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => countResult()}
          >
            =
          </Button>
          <Button
            flex={1}
            _text={{ fontSize: 20, color: "white" }}
            bg="primary.500"
            onPress={() => insertOperator("/")}
          >
            /
          </Button>
        </HStack>
      </VStack>
    </ScrollView>
  );
}
