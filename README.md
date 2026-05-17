# Productify

Productify es una aplicación web diseñada para gestionar productos y usuarios de manera eficiente. Este proyecto está dividido en dos partes principales: el cliente (frontend) y el servidor (backend). Utiliza tecnologías modernas como React, TypeScript, Vite, Tailwind CSS, Node.js y Sequelize para ofrecer una experiencia de usuario rápida y confiable.

Productify is still under development.

## Características principales

- **Gestión de usuarios**: Registro, inicio de sesión y perfiles de usuario.
- **Gestión de productos**: Creación, edición y eliminación de productos.
- **Interfaz moderna**: Construida con React y Tailwind CSS.
- **Backend robusto**: Implementado con Node.js y Sequelize, conectado a una base de datos SQL Server.

## Estructura del proyecto

```
productify-main/
├── client/       # Código fuente del cliente (frontend)
├── server/       # Código fuente del servidor (backend)
└── README.md     # Documentación del proyecto
```

### Cliente (Frontend)

- **Framework**: React con TypeScript.
- **Estilos**: Tailwind CSS.
- **Herramienta de construcción**: Vite.

### Servidor (Backend)

- **Framework**: Node.js con TypeScript.
- **ORM**: Sequelize para la gestión de la base de datos.
- **Base de datos**: SQL Server.

## Variables de entorno del backend

Configura un archivo `server/.env` con estos valores mínimos:

```env
SERVER_PORT=3000
CLIENT_PORT=http://localhost:5173
DB_HOST=localhost
DB_DATABASE=productify
DB_USUARIO=sa
DB_PASSWORD=tu_password
```

## API principal

- `POST /api/auth/login` para autenticación.
- `GET /api/categoria/obtener-categorias` para listar categorías.
- `GET /api/categoria/obtener-categoria/:id` para obtener una categoría.
- `POST /api/categoria/registrar-categoria` para crear una categoría.
- `PUT /api/categoria/actualizar-categoria/:id` para actualizar una categoría.

## Requisitos previos

- Node.js (v16 o superior)
- SQL Server
- npm o yarn

## Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd productify-main
```

### 2. Configurar el cliente

```bash
cd client
npm install
```

### 3. Configurar el servidor

```bash
cd ../server
npm install
```

### 4. Configurar la base de datos

- Crear una base de datos en SQL Server.
- Actualizar las credenciales en el archivo `.env`.

### 5. Ejecutar el proyecto

#### Cliente

```bash
cd client
npm run dev
```

#### Servidor

```bash
cd ../server
npm run dev
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT.
