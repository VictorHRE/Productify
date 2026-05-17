import { Router } from "express";

import { asyncWrapper } from "@/shared";
import { validateRequest } from "@/infrastructure";
import { IAuthController } from "../controller/auth.controller.interface";
import { LoginSchema } from "../schemas/login.schema";

export function authBuildRouter(controller: IAuthController): Router {
  const router = Router();

  router.post(
    "/login",
    validateRequest(LoginSchema),
    asyncWrapper(controller.login),
  );

  return router;
}
