/**
 * Datos que recibe el backend para autenticar un usuario.
 */
export interface LoginDto {
  correo_Usuario: string;
  contra_Usuario: string;
}

/**
 * Datos que devuelve el backend al iniciar sesión correctamente.
 */
export interface UsuarioLoginDto {
  nombre_Usuario: string;
  apellidos_Usuario: string;
  sexo_Usuario: string;
  cedula_Usuario: string;
  departamento_Usuario: string;
  direccion_Usuario: string;
}
