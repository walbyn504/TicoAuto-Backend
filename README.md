# TicoAuto-Backend

## Descripción

Este proyecto corresponde al backend de **TicoAuto**, una plataforma para la publicación y búsqueda de vehículos.

El sistema permite que los usuarios se registren, inicien sesión, publiquen vehículos, consulten vehículos disponibles, filtren resultados y se comuniquen mediante preguntas y respuestas asociadas a cada vehículo.

---

## Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT** para autenticación
- **bcrypt** para encriptación de contraseñas
- **dotenv** para variables de entorno
- **cors**

---

## Funcionalidades principales

- Registro de usuarios
- Inicio de sesión con autenticación JWT
- Gestión de vehículos
  - Crear vehículo
  - Obtener vehículos
  - Obtener vehículo por ID
  - Actualizar vehículo
  - Eliminar vehículo
  - Marcar vehículo como vendido
- Filtros de búsqueda
  - Marca
  - Modelo
  - Año mínimo y máximo
  - Precio mínimo y máximo
  - Estado
- Sistema de preguntas y respuestas entre usuarios
- Visualización de conversaciones por vehículo

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/walbyn504/TicoAuto-Backend