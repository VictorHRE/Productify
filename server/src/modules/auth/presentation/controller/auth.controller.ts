import { Response } from "express";

import { PublicRequestWithBody, ResponseSuccess } from "@/shared";
import { LoginDto, IAuthService } from "../../application";

import { IAuthController } from "./auth.controller.interface";

/**
 * Controlador de autenticación.
 */
export class AuthController implements IAuthController {
  constructor(private readonly authService: IAuthService) {}

  public login = async (
    request: PublicRequestWithBody<LoginDto>,
    response: Response,
  ): Promise<void> => {
    const usuario = await this.authService.login(request.body);
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(usuario, "Inicio de sesión exitoso");
  };
}
