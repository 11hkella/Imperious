import { Loader } from "excalibur";
import { Resources } from "./resources";

const ImperiousLoader = new Loader();

await ImperiousLoader.addResources(Object.values(Resources));

console.log("ImperiousLoader", ImperiousLoader);

export default ImperiousLoader;
