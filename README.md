# 🏪 inventario-salsamentaria

Sistema web de gestión de inventario desarrollado para una salsamentaria familiar. Permite registrar productos, controlar entradas y salidas de stock, y recibir alertas cuando un producto está por agotarse.

## Tecnologías Utilizadas

- Frontend : Vue.js, Vue Router, Pinia, Axios
- Backend : Node.js, Express
- Base de datos : PostgreSQL
- Herramientas : Nodemon, Git

## Funcionalidades

- Gestión de productos (crear, editar, desactivar)
- Registro de movimientos de stock (entradas y salidas)
- Alertas automáticas de stock bajo
- Categorías y unidades de medida personalizadas

## 🚀 Cómo correr el proyecto

### Requisitos

- Node.js v18+
- PostgreSQL 16

### Base de datos

```sql
CREATE DATABASE inventario_salsamentaria;
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run d
```

El backend corre en `http://localhost:3000` y el frontend en `http://localhost:5173`.

## 📁 Estructura del proyecto

inventario-salsamentaria/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── db/
│ └── index.js
└── frontend/
└── src/
├── views/
├── router/
└── services/

## 👨🏻‍💻 Autor

**Jhoan Daner Borja Sánchez** - Estudiante de Tecnología en Desarrollo de Software de la Universidad del Valle
[Github] (https://github.com/Borja-777)
[Linkedin] (https://www.linkedin.com/in/jhoan-daner-a65603314)
