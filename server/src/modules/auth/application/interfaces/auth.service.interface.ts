import { LoginDto, UsuarioLoginDto } from "../dtos/login.dto";

/**
 * Contrato del servicio de autenticación.
 */
export interface IAuthService {
  login(data: LoginDto): Promise<UsuarioLoginDto>;
}
