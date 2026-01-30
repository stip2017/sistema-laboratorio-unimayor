# Sistema Web de Reservas y Préstamos

## Laboratorio de Física y Sistemas Embebidos
**Institución Universitaria Colegio Mayor del Cauca**

---

## 📋 Descripción

Sistema web institucional para la gestión de reservas del laboratorio y préstamos de equipos, diseñado específicamente para docentes. Permite:

- ✅ Reservar el laboratorio por fecha y horario
- ✅ Registrar préstamos de equipos
- ✅ Visualizar calendario mensual interactivo
- ✅ Consultar historial de reservas y préstamos
- ✅ Exportar información en formato CSV
- ✅ Validación automática de conflictos de horarios

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React** 18.2
- **Vite** 5.0
- **Tailwind CSS** 3.4
- Diseño responsive y mobile-first

### Backend
- **Node.js** + **Express** 4.18
- API REST
- Almacenamiento en memoria

---

## 📦 Instalación

### Prerrequisitos
- Node.js v16 o superior
- npm v8 o superior

### Pasos

1. **Clonar o navegar al directorio del proyecto**
```bash
cd "c:\Users\Jupiter\Desktop\proyecto unimayor-laboratorio"
```

2. **Instalar dependencias**
```bash
npm install
```

---

## 🎯 Uso

### Opción 1: Ejecutar Frontend y Backend por separado

**Terminal 1 - Backend:**
```bash
npm run server
```
El backend estará disponible en `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
El frontend estará disponible en `http://localhost:5173`

### Opción 2: Acceder directamente
Abre tu navegador en: `http://localhost:5173`

---

## 📱 Funcionalidades

### 1️⃣ Inicio
- Vista general del sistema
- Características principales
- Instrucciones de uso

### 2️⃣ Reservas
- **Formulario de nueva reserva:**
  - Nombre y apellidos
  - Programa académico
  - Fecha
  - Hora de inicio y fin
- **Calendario mensual** con indicadores visuales
- **Tabla de reservas actuales** con opciones de:
  - Eliminar
  - Exportar a CSV
  - Imprimir
- **Validación automática** de conflictos de horario

### 3️⃣ Préstamos
- **Registro de préstamo:**
  - Nombre del docente
  - Programa académico
  - Equipo prestado
  - Fecha y hora
- **Historial de préstamos**
- **Exportar** información

### 4️⃣ Contacto
- Información institucional
- Ubicación y horarios
- Servicios del laboratorio
- Requisitos para reservas

---

## 🎨 Diseño

El sistema utiliza una paleta de colores institucional:

- **Azul Primario:** `#003f87`
- **Azul Secundario:** `#0066cc`
- **Azul Claro:** `#e3f2fd`
- **Azul Oscuro:** `#002855`
- **Acento:** `#ffa726`

Tipografía: **Inter** (Google Fonts)

---

## 🔌 API Endpoints

### Reservaciones
- `GET /api/reservations` - Obtener todas las reservas
- `POST /api/reservations` - Crear nueva reserva
- `GET /api/reservations/:id` - Obtener reserva por ID
- `PUT /api/reservations/:id` - Actualizar reserva
- `DELETE /api/reservations/:id` - Eliminar reserva

### Préstamos
- `GET /api/prestamos` - Obtener todos los préstamos
- `POST /api/prestamos` - Crear nuevo préstamo
- `GET /api/prestamos/:id` - Obtener préstamo por ID
- `PUT /api/prestamos/:id` - Actualizar préstamo
- `DELETE /api/prestamos/:id` - Eliminar préstamo

---

## 📂 Estructura del Proyecto

```
proyecto-unimayor-laboratorio/
├── public/
│   └── logo 1.jpg          # Logo institucional
├── server/
│   └── index.js            # Backend Express
├── src/
│   ├── components/
│   │   ├── Calendar.jsx
│   │   ├── Header.jsx
│   │   ├── ReservationForm.jsx
│   │   └── ReservationTable.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Reservas.jsx
│   │   ├── Prestamos.jsx
│   │   └── Contacto.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + diseño personalizado
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## ⚙️ Configuración

### Cambiar Puerto del Backend
Edita `server/index.js` línea 6:
```javascript
const PORT = 3001 // Cambiar al puerto deseado
```

### Cambiar Puerto del Frontend
Edita `vite.config.js`:
```javascript
server: {
  port: 5173 // Cambiar al puerto deseado
}
```

---

## 🛠️ Desarrollo

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo frontend
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run server` - Inicia el servidor backend

---

## 📋 Requisitos Cumplidos

✅ Diseño institucional limpio y profesional  
✅ Mobile-first y responsive  
✅ Sin autenticación (acceso directo)  
✅ Calendario mensual interactivo  
✅ Validación de horarios (sin solapamiento)  
✅ Exportación e impresión de datos  
✅ Historial de reservas y préstamos  
✅ Logo institucional integrado  
✅ Navegación clara (Inicio, Reservas, Préstamos, Contacto)  
✅ Formularios con validación completa  
✅ Mensajes de error y éxito  
✅ API REST funcional  
✅ Persistencia de datos (en memoria)  

---

## 👥 Soporte

Para consultas o soporte técnico:
- **Email:** laboratorio@unimayor.edu.co
- **Teléfono:** +57 (2) 820 9800

---

## 📄 Licencia

Este proyecto es de uso exclusivo de la Institución Universitaria Colegio Mayor del Cauca.

---

**Desarrollado para:** Laboratorio de Física y Sistemas Embebidos  
**Institución:** Institución Universitaria Colegio Mayor del Cauca  
**Ubicación:** Popayán, Cauca, Colombia
