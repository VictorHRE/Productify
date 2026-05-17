import { Response } from "express";

import { PublicRequestWithBody } from "@/shared";
import { LoginDto } from "../../application";

/**
 * Contrato del controlador de autenticación.
 */
export interface IAuthController {
  login(
    request: PublicRequestWithBody<LoginDto>,
    response: Response,
  ): Promise<void>;
}
