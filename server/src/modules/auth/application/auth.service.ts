import { UnauthorizedError } from "@/shared";

import { UsuarioSequelize } from "../../usuario/infrastructure";

import { LoginDto, UsuarioLoginDto } from "./dtos/login.dto";
import { IAuthService } from "./interfaces/auth.service.interface";

/**
 * Servicio de autenticación.
 */
export class AuthService implements IAuthService {
  public async login(data: LoginDto): Promise<UsuarioLoginDto> {
    const usuario = await UsuarioSequelize.findOne({
      where: {
        correo_usuario: data.correo_Usuario,
        contra_usuario: data.contra_Usuario,
        estado_usuario: "activo",
      },
    });

    if (!usuario) {
      throw new UnauthorizedError("Credenciales invalidas o usuario inactivo");
    }

    return {
      nombre_Usuario: usuario.nombre_usuario,
      apellidos_Usuario: usuario.apellidos_usuario,
      sexo_Usuario: usuario.sexo_usuario,
      cedula_Usuario: usuario.cedula_usuario,
      departamento_Usuario: usuario.departamento_usuario ?? "",
      direccion_Usuario: usuario.direccion_usuario ?? "",
    };
  }
}
