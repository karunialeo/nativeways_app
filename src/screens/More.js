import React from "react";
import { Text, HStack, ScrollView, List } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function More() {
  return (
    <>
      <ScrollView backgroundColor="white">
        <Text color="gray.500" fontSize="lg" padding={4} fontFamily="Poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          cupiditate nostrum beatae reiciendis in quis vel molestiae, tempora,
          sit, praesentium libero aspernatur quod explicabo. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nam cupiditate nostrum beatae
          reiciendis in quis vel molestiae, tempora, sit, praesentium libero
          aspernatur quod explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam cupiditate nostrum beatae reiciendis in quis vel
          molestiae, tempora, sit, praesentium libero aspernatur quod explicabo.
        </Text>
      </ScrollView>
    </>
  );
}
