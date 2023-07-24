import { PixelRatio } from "react-native";

export const indicateBgImage = () => {
  const bgPath = {
    general: require("../../images/bg/bg-min.jpg"),
    big: require("../../images/bg/bg-min-2x.jpg"),
    extrabig: require("../../images/bg/bg-min-3x.jpg"),
  };

  const currentPixelRatio = PixelRatio.get();
  const overagePixelRatio = Math.round(currentPixelRatio);

  switch (overagePixelRatio) {
    case 3:
      return bgPath.extrabig;
    case 2:
      return bgPath.big;
    default:
      return bgPath.general;
  }
};
