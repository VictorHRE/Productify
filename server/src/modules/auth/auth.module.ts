import { AuthService } from "./application";
import { AuthController, authBuildRouter } from "./presentation";

const authService = new AuthService();
const authController = new AuthController(authService);

const authRouter = authBuildRouter(authController);

export { authRouter };
