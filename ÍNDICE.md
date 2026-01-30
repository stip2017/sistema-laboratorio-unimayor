# 📚 ÍNDICE DE DOCUMENTACIÓN

## Sistema de Reservas y Préstamos - Laboratorio Unimayor

---

## 🎯 ¿QUÉ ARCHIVO DEBO LEER?

### 🚀 **QUIERO INICIAR EL SISTEMA AHORA**

👉 **Archivo:** `INICIAR_SISTEMA.bat`  
📝 **Acción:** Doble click en este archivo  
⏱️ **Tiempo:** 10 segundos  
✅ **Resultado:** Sistema funcionando completo

---

### 📖 **PRIMERA VEZ USANDO EL SISTEMA**

👉 **Archivo:** `COMO_USAR.md`  
📝 **Contenido:**

- Guía visual paso a paso
- Capturas de pantalla descritas
- Cómo navegar el sistema
- Cómo crear reservas
- Cómo registrar préstamos
- Preguntas frecuentes

⏱️ **Tiempo de lectura:** 10-15 minutos  
🎯 **Para:** Usuarios finales (docentes)

---

### 🎓 **QUIERO ENTENDER EL PROYECTO COMPLETO**

👉 **Archivo:** `RESUMEN_PROYECTO.md`  
📝 **Contenido:**

- Resumen ejecutivo
- Arquitectura del sistema
- Características implementadas
- Checklist de requisitos
- Estructura de archivos
- Paleta de colores
- Componentes principales
- Casos de uso

⏱️ **Tiempo de lectura:** 20-25 minutos  
🎯 **Para:** Desarrolladores, administradores, evaluadores

---

### 📋 **NECESITO INSTRUCCIONES DETALLADAS**

👉 **Archivo:** `GUIA_INICIO.md`  
📝 **Contenido:**

- Estado del sistema
- Pasos para acceder
- Navegación detallada
- Funcionalidades clave
- Solución de problemas
- Equipo disponible
- Consejos de uso

⏱️ **Tiempo de lectura:** 15-20 minutos  
🎯 **Para:** Usuarios avanzados, administradores

---

### 💻 **SOY DESARROLLADOR / TÉCNICO**

👉 **Archivo:** `README.md`  
📝 **Contenido:**

- Descripción técnica
- Stack tecnológico
- Instalación paso a paso
- Comandos disponibles
- API Endpoints
- Estructura del proyecto
- Configuración
- Scripts de desarrollo

⏱️ **Tiempo de lectura:** 10-15 minutos  
🎯 **Para:** Desarrolladores, DevOps, soporte técnico

---

## 📁 ARCHIVOS EJECUTABLES

### ⚡ **INICIAR_SISTEMA.bat**

**Descripción:** Inicia backend y frontend automáticamente  
**Uso:** Doble click  
**Resultado:** Sistema completo funcionando  
**Recomendado:** ✅ Usar este para inicio rápido

### 🔧 **install.bat**

**Descripción:** Instala dependencias npm  
**Uso:** Doble click (ya ejecutado)  
**Resultado:** Instala node_modules  
**Nota:** Solo necesario la primera vez

### 🖥️ **start-backend.bat**

**Descripción:** Solo inicia el backend  
**Uso:** Doble click  
**Puerto:** 3001  
**Para:** Desarrollo o pruebas de API

### 🎨 **start-frontend.bat**

**Descripción:** Solo inicia el frontend  
**Uso:** Doble click  
**Puerto:** 5173  
**Nota:** Requiere que el backend esté corriendo

---

## 📊 ARCHIVOS DE CÓDIGO

### Frontend (React)

#### `src/main.jsx`

Punto de entrada de React

#### `src/App.jsx`

Componente principal con navegación

#### `src/index.css`

Estilos globales + Tailwind + sistema de diseño

#### **Componentes:**

- `src/components/Header.jsx` - Encabezado institucional
- `src/components/Calendar.jsx` - Calendario mensual
- `src/components/ReservationForm.jsx` - Formulario de reservas
- `src/components/ReservationTable.jsx` - Tabla de reservas

#### **Páginas:**

- `src/pages/Home.jsx` - Página de inicio
- `src/pages/Reservas.jsx` - Gestión de reservas
- `src/pages/Prestamos.jsx` - Gestión de préstamos
- `src/pages/Contacto.jsx` - Información de contacto

### Backend (Express)

#### `server/index.js`

API REST completa con:

- Endpoints de reservas
- Endpoints de préstamos
- Validaciones
- Almacenamiento en memoria

---

## ⚙️ ARCHIVOS DE CONFIGURACIÓN

### `package.json`

Dependencias y scripts npm

### `vite.config.js`

Configuración de Vite (bundler)

### `tailwind.config.js`

Configuración de Tailwind CSS  
**Incluye:** Paleta institucional, fuentes

### `postcss.config.js`

Configuración de PostCSS

### `.gitignore`

Archivos ignorados en Git

### `index.html`

HTML base de la aplicación

---

## 🎨 RECURSOS

### `public/logo 1.jpg`

Logo institucional  
**Uso:** Header del sitio  
**Formato:** JPG

### `logo 1.jpg` (raíz)

Copia original del logo

---

## 📚 MAPA DE LECTURA SEGÚN OBJETIVO

### 🎯 OBJETIVO: Usar el sistema como docente

```
1. Lee: COMO_USAR.md (completo)
2. Ejecuta: INICIAR_SISTEMA.bat
3. Navega a: http://localhost:5173
4. Referencia: GUIA_INICIO.md (si tienes dudas)
```

### 🎯 OBJETIVO: Presentar el proyecto

```
1. Lee: RESUMEN_PROYECTO.md (completo)
2. Revisa: README.md (sección de características)
3. Ejecuta: INICIAR_SISTEMA.bat
4. Demuestra: Las 4 secciones del sistema
```

### 🎯 OBJETIVO: Mantener/modificar el código

```
1. Lee: README.md (completo)
2. Lee: RESUMEN_PROYECTO.md (arquitectura)
3. Revisa: Estructura de src/
4. Estudia: Componentes individuales
5. Prueba: Modificaciones en desarrollo
```

### 🎯 OBJETIVO: Instalar en otro equipo

```
1. Copia toda la carpeta
2. Verifica: Node.js instalado (v16+)
3. Ejecuta: install.bat
4. Ejecuta: INICIAR_SISTEMA.bat
5. Sigue: README.md (sección instalación)
```

### 🎯 OBJETIVO: Resolver problemas

```
1. Lee: GUIA_INICIO.md (Solución de problemas)
2. Verifica: Servidores corriendo
3. Revisa: Consola del navegador (F12)
4. Consulta: COMO_USAR.md (FAQ)
```

---

## 📖 RESUMEN DE CADA ARCHIVO

| Archivo | Tipo | Para Quién | Tiempo | Propósito |
|---------|------|------------|--------|-----------|
| `INICIAR_SISTEMA.bat` | Ejecutable | Todos | 1 min | Iniciar sistema |
| `COMO_USAR.md` | Guía | Usuarios | 15 min | Aprender a usar |
| `GUIA_INICIO.md` | Guía | Usuarios | 20 min | Referencia completa |
| `RESUMEN_PROYECTO.md` | Documentación | Evaluadores | 25 min | Entender proyecto |
| `README.md` | Documentación | Desarrolladores | 15 min | Setup técnico |
| `install.bat` | Ejecutable | Instaladores | 5 min | Instalar deps |
| `start-backend.bat` | Ejecutable | Desarrolladores | 1 min | Solo backend |
| `start-frontend.bat` | Ejecutable | Desarrolladores | 1 min | Solo frontend |

---

## 🎯 ACCESOS RÁPIDOS

### URLs del Sistema

- **Frontend:** <http://localhost:5173>
- **Backend:** <http://localhost:3001>
- **API Reservas:** <http://localhost:3001/api/reservations>
- **API Préstamos:** <http://localhost:3001/api/prestamos>

### Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar frontend
npm run dev

# Iniciar backend
node server/index.js

# Build para producción
npm run build
```

---

## ✅ CHECKLIST DE INICIO

Para empezar a usar el sistema:

- [ ] Verifica que Node.js esté instalado
- [ ] Ejecuta `install.bat` (solo primera vez)
- [ ] Ejecuta `INICIAR_SISTEMA.bat`
- [ ] Espera mensaje "Sistema iniciado"
- [ ] Abre navegador en <http://localhost:5173>
- [ ] Lee `COMO_USAR.md` para aprender
- [ ] ¡Empieza a crear reservas!

---

## 📞 SOPORTE

Si necesitas ayuda:

1. **Primero:** Lee `GUIA_INICIO.md` → Solución de problemas
2. **Luego:** Consulta `COMO_USAR.md` → FAQ
3. **Finalmente:** Contacta soporte del laboratorio

**Email:** <laboratorio@unimayor.edu.co>  
**Teléfono:** +57 (2) 820 9800

---

## 🎓 ESTRUCTURA COMPLETA DE ARCHIVOS

```
proyecto-unimayor-laboratorio/
│
├── 📄 ÍNDICE.md                 ← ¡ESTÁS AQUÍ! Mapa de navegación
├── 📄 INICIAR_SISTEMA.bat       ← Inicio rápido
├── 📄 COMO_USAR.md              ← Guía de usuario visual
├── 📄 GUIA_INICIO.md            ← Referencia completa
├── 📄 RESUMEN_PROYECTO.md       ← Visión general del proyecto
├── 📄 README.md                 ← Documentación técnica
│
├── 🔧 install.bat               ← Instalación de dependencias
├── 🔧 start-backend.bat         ← Solo backend
├── 🔧 start-frontend.bat        ← Solo frontend
│
├── ⚙️ package.json              ← Config npm
├── ⚙️ vite.config.js           ← Config Vite
├── ⚙️ tailwind.config.js       ← Config Tailwind
├── ⚙️ postcss.config.js        ← Config PostCSS
├── 📄 index.html                ← HTML base
├── 📄 .gitignore                ← Git ignore
│
├── 📁 public/
│   └── logo 1.jpg               ← Logo (usado por el sitio)
│
├── 📁 server/
│   └── index.js                 ← Backend API Express
│
├── 📁 src/
│   ├── main.jsx                 ← Entry point React
│   ├── App.jsx                  ← App principal
│   ├── index.css                ← Estilos globales
│   │
│   ├── 📁 components/
│   │   ├── Header.jsx
│   │   ├── Calendar.jsx
│   │   ├── ReservationForm.jsx
│   │   └── ReservationTable.jsx
│   │
│   └── 📁 pages/
│       ├── Home.jsx
│       ├── Reservas.jsx
│       ├── Prestamos.jsx
│       └── Contacto.jsx
│
├── 📁 node_modules/             ← Dependencias (auto-generado)
└── 📄 package-lock.json         ← Lock de versiones (auto-generado)
```

---

## 🎯 INICIO RÁPIDO (TL;DR)

### Para Usuarios

1. **Doble click:** `INICIAR_SISTEMA.bat`
2. **Abre:** <http://localhost:5173>
3. **Lee:** `COMO_USAR.md`
4. **¡Usa el sistema!**

### Para Desarrolladores

1. **Lee:** `README.md`
2. **Instala:** `npm install`
3. **Backend:** `node server/index.js`
4. **Frontend:** `npm run dev`
5. **Edita:** Archivos en `src/`

### Para Evaluadores

1. **Lee:** `RESUMEN_PROYECTO.md`
2. **Ejecuta:** `INICIAR_SISTEMA.bat`
3. **Prueba:** Todas las funcionalidades
4. **Valida:** Checklist de requisitos

---

## 💡 RECOMENDACIONES

### Primera vez

1. Lee este índice completo
2. Lee `COMO_USAR.md` o `GUIA_INICIO.md`
3. Ejecuta `INICIAR_SISTEMA.bat`
4. Explora el sistema
5. Consulta documentación según necesites

### Uso diario

1. Ejecuta `INICIAR_SISTEMA.bat`
2. Usa el sistema
3. Consulta FAQ si tienes dudas

### Problemas

1. Lee sección "Solución de problemas" en `GUIA_INICIO.md`
2. Verifica que ambos servidores estén corriendo
3. Revisa consola del navegador (F12)
4. Contacta soporte si persiste

---

## 🎉 ¡TODO LISTO

El sistema está completamente documentado y listo para usar.

**Empieza por:**

- 🚀 Usuarios → `COMO_USAR.md`
- 💻 Técnicos → `README.md`
- 📊 Evaluadores → `RESUMEN_PROYECTO.md`

**¡Disfruta del sistema!** 🎓✨

---

**Desarrollado para:** Institución Universitaria Colegio Mayor del Cauca  
**Laboratorio:** Física y Sistemas Embebidos  
**Ubicación:** Popayán, Cauca, Colombia
