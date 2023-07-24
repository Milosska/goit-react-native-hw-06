import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

export const AuthBackground = ({ isKeyboardShown, children }) => {
  const bgImage = indicateBgImage();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: isKeyboardShown ? -250 : 0,
        }}
        source={bgImage}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
