import { Color, DisplayMode, Engine, FadeInOut } from "excalibur";
import ImperiousLoader from "./ImperiousLoader";
import { Board } from "./Board";

const Game = new Engine({
  width: 800,
  height: 600,
  displayMode: DisplayMode.FitScreenAndFill,
  pixelArt: true,
  scenes: {
    game: Board,
  },
  // physics: {
  //   solver: SolverStrategy.Realistic,
  //   substep: 5 // Sub step the physics simulation for more robust simulations
  // },
  // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
});

await Game.start("game", {
  loader: ImperiousLoader,
  inTransition: new FadeInOut({
    // Optional in transition
    duration: 1000,
    direction: "in",
    color: Color.ExcaliburBlue,
  }),
});

// Do something after the game starts
