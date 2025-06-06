import { Color, DisplayMode, Engine, FadeInOut } from "excalibur";
import ImperiousLoader from "./ImperiousLoader";
import { Game } from "./Game";

const GameEngine = new Engine({
  width: 800,
  height: 600,
  displayMode: DisplayMode.FitScreenAndFill,
  pixelArt: true,
  scenes: {
    game: Game,
  },
  // physics: {
  //   solver: SolverStrategy.Realistic,
  //   substep: 5 // Sub step the physics simulation for more robust simulations
  // },
  // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
});

await GameEngine.start("game", {
  loader: ImperiousLoader,
  inTransition: new FadeInOut({
    duration: 2000,
    direction: "in",
    color: Color.Brown,
  }),
});

// Do something after the game starts
