import { extendTheme, NativeBaseProvider, StatusBar } from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { SSRProvider } from "@react-aria/ssr";

import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
} from "@expo-google-fonts/montserrat";

import Container from "./Container";

import {
  AddListModalProvider,
  ShowListModalProvider,
} from "./src/contexts/ModalContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
  });

  const fontConfig = {
    Poppins: {
      400: {
        normal: "Poppins_400Regular",
        italic: "Poppins_400Regular_Italic",
      },
      600: {
        normal: "Poppins_600SemiBold",
      },
      700: {
        normal: "Poppins_700Bold",
      },
    },
    Montserrat: {
      400: {
        normal: "Montserrat_400Regular",
        italic: "Montserrat_400Regular_Italic",
      },
      600: {
        normal: "Montserrat_600SemiBold",
        italic: "Montserrat_600SemiBold_Italic",
      },
      700: {
        normal: "Montserrat_700Bold",
        italic: "Montserrat_700Bold_Italic",
      },
    },
  };

  // Configuration Native Base Custom Theme
  const customTheme = extendTheme({
    components: {
      Button: {
        defaultProps: {
          variant: "unstyled",
        },
        baseStyle: {
          width: 12,
          height: 12,
          borderRadius: 7,
          marginBottom: 3,
          bg: "primary.200",
          _text: {
            color: "primary.700",
            fontWeight: "bold",
          },
          _pressed: {
            bg: "primary.300",
          },
        },
      },
      Text: {
        defaultProps: {
          color: "black",
          fontFamily: "Montserrat",
        },
      },
    },
    fontConfig,
    fonts: {
      Poppins: "Poppins",
      Montserrat: "Montserrat",
    },
    config: {
      initialColorMode: "dark",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SSRProvider>
        <NativeBaseProvider theme={customTheme}>
          <AddListModalProvider>
            <ShowListModalProvider>
              <StatusBar backgroundColor="white" barStyle="dark-content" />
              <Container />
            </ShowListModalProvider>
          </AddListModalProvider>
        </NativeBaseProvider>
      </SSRProvider>
    );
  }
}
