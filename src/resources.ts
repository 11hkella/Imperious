import { ImageSource, Loader } from "excalibur";

// Resources are a way to load and manage assets in Excalibur
export const Resources = {
  Sword: new ImageSource("./images/sword.png"),
};
export const loader = new Loader();

loader.addResources(Object.values(Resources));
