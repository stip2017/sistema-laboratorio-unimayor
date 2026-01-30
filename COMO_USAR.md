# 🎯 CÓMO USAR EL SISTEMA - GUÍA VISUAL

## Sistema de Reservas y Préstamos - Laboratorio Unimayor

---

## ⚠️ IMPORTANTE: EL SISTEMA YA ESTÁ CORRIENDO

✅ **Backend:** Activo en <http://localhost:3001>  
✅ **Frontend:** Activo en <http://localhost:5173>

**¡Solo necesitas abrir tu navegador!**

---

## 🌐 PASO 1: ABRIR EL SISTEMA

### Opción A: Abrir directamente en el navegador

1. Abre tu navegador favorito (Chrome, Firefox, Edge, etc.)
2. En la barra de dirección, escribe: `http://localhost:5173`
3. Presiona Enter
4. ¡El sistema se cargará!

### Opción B: Hacer click en un link

Si estás leyendo esto en un editor que permite links:
[Abrir Sistema](http://localhost:5173)

---

## 🎨 QUÉ VERÁS AL ABRIR

### ENCABEZADO (siempre visible)

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO] Institución Universitaria Colegio Mayor del Cauca│
│        Laboratorio de Física y Sistemas Embebidos       │
├─────────────────────────────────────────────────────────┤
│  [Inicio] [Reservas] [Préstamos] [Contacto]            │
└─────────────────────────────────────────────────────────┘
```

- **Fondo azul institucional** (#003f87)
- **Logo** en la esquina izquierda
- **Título institucional** en blanco
- **Menú de navegación** con 4 opciones

---

## 📱 PÁGINA: INICIO

### Lo que verás

1. **Banner principal** (azul con degradado)
   - Título grande: "Sistema de Reservas y Préstamos"
   - Descripción del sistema

2. **6 tarjetas de características** (2 filas de 3)
   Cada tarjeta tiene:
   - Icono azul en círculo
   - Título de la característica
   - Descripción breve

3. **Sección de instrucciones**
   - Números del 1 al 4 en círculos azules
   - Paso a paso de cómo usar el sistema

### Colores

- Fondo general: Gris muy claro
- Cards: Blanco con sombras
- Íconos: Azul secundario (#0066cc)
- Textos: Gris oscuro

---

## 📅 PÁGINA: RESERVAS

### Distribución (2 columnas en desktop, apilado en móvil)

```
┌─────────────────────┬─────────────────────┐
│  COLUMNA IZQUIERDA  │  COLUMNA DERECHA    │
│                     │                     │
│  ┌───────────────┐  │  ┌───────────────┐  │
│  │ FORMULARIO    │  │  │ TABLA DE      │  │
│  │ Nueva Reserva │  │  │ RESERVAS      │  │
│  │               │  │  │ ACTUALES      │  │
│  │ • Nombre      │  │  │               │  │
│  │ • Programa    │  │  │ [Exportar]    │  │
│  │ • Fecha       │  │  │ [Imprimir]    │  │
│  │ • Hora Inicio │  │  │               │  │
│  │ • Hora Fin    │  │  │ Lista de      │  │
│  │               │  │  │ reservas      │  │
│  │ [Crear]       │  │  │ con botón     │  │
│  └───────────────┘  │  │ [Eliminar]    │  │
│                     │  │               │  │
│  ┌───────────────┐  │  └───────────────┘  │
│  │ CALENDARIO    │  │                     │
│  │ MENSUAL       │  │                     │
│  │               │  │                     │
│  │  ←  Feb 2026 →│  │                     │
│  │               │  │                     │
│  │ D L M X J V S │  │                     │
│  │ 1 2 3 4 5 6 7 │  │                     │
│  │ ...           │  │                     │
│  └───────────────┘  │                     │
└─────────────────────┴─────────────────────┘
```

### FORMULARIO - Campos

1. **Nombre y Apellidos** *
   - Caja de texto blanca
   - Placeholder: "Ej: Juan Pérez García"

2. **Programa Académico** *
   - Selector dropdown
   - Opciones: Ing. Sistemas, Ing. Electrónica, etc.

3. **Fecha** *
   - Selector de fecha (calendario)
   - No permite fechas pasadas

4. **Hora Inicio** *
   - Selector de hora (HH:MM)
   - Formato 24 horas

5. **Hora Fin** *
   - Selector de hora (HH:MM)
   - Debe ser mayor que hora inicio

6. **Botón "Crear Reserva"**
   - Azul grande (#003f87)
   - Efecto hover: se agranda ligeramente

### Mensajes que pueden aparecer

✅ **Mensaje de ÉXITO** (verde):

```
┌────────────────────────────────┐
│ ✓ ¡Éxito!                      │
│ Reserva creada correctamente   │
└────────────────────────────────┘
```

❌ **Mensaje de ERROR** (rojo):

```
┌────────────────────────────────────────────┐
│ ✗ Error                                    │
│ Ya existe una reserva en este horario.     │
│ Por favor selecciona otro horario.         │
└────────────────────────────────────────────┘
```

### CALENDARIO

**Navegación:**

- Flecha izquierda ← : Mes anterior
- Flecha derecha → : Mes siguiente
- Título central: "Febrero 2026"

**Días:**

- Normal: Fondo blanco
- Hoy: Borde azul (#0066cc)
- Seleccionado: Fondo azul sólido, texto blanco
- Con reservas: Punto azul pequeño debajo del número

**Leyenda:**

- □ Hoy (borde azul)
- ■ Seleccionado (azul sólido)
- ⊙ Con reservas (punto azul)

### TABLA DE RESERVAS

**Encabezado** (azul oscuro, texto blanco):
| Docente | Programa | Fecha | Hora Inicio | Hora Fin | Acciones |

**Filas** (blanco, hover azul claro):

- Datos de cada reserva
- Botón rojo "Eliminar" en la última columna

**Botones superiores:**

- **Exportar** (outline azul): Descarga CSV
- **Imprimir** (azul sólido): Abre diálogo de impresión

**Estado vacío:**
Si no hay reservas, verás:

```
┌───────────────────────────────┐
│     [Icono calendario]        │
│                               │
│ No hay reservas registradas   │
│ ¡Crea tu primera reserva!     │
└───────────────────────────────┘
```

---

## 📦 PÁGINA: PRÉSTAMOS

### Distribución similar a Reservas

```
┌─────────────────────┬─────────────────────┐
│  FORMULARIO         │  HISTORIAL          │
│  Nuevo Préstamo     │  de Préstamos       │
│                     │                     │
│  • Nombre Docente   │  [Exportar]         │
│  • Programa         │                     │
│  • Equipo           │  ┌───────────────┐  │
│  • Fecha            │  │ Card Préstamo │  │
│  • Hora             │  │ Dr. X         │  │
│                     │  │ Arduino UNO   │  │
│  [Registrar]        │  │ 15/02 14:00   │  │
│                     │  └───────────────┘  │
└─────────────────────┴─────────────────────┘
```

### FORMULARIO - Campos

1. **Nombre del Docente** *
   - Similar a reservas

2. **Programa Académico** *
   - Mismo selector que reservas

3. **Equipo Prestado** *
   - Selector con opciones:
     - Osciloscopio Digital
     - Arduino UNO
     - Raspberry Pi
     - Kit de Sensores
     - ... (14 opciones)

4. **Fecha** *
   - Selector de fecha

5. **Hora** *
   - Selector de hora

6. **Botón "Registrar Préstamo"**
   - Azul grande

### HISTORIAL

Cada préstamo se muestra en una **tarjeta** (card):

```
┌─────────────────────────────────────┐
│ Dr. Carlos Martínez          [✗]    │
│ Ingeniería de Sistemas               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│ 🔧 Arduino UNO                       │
│ 📅 mié, 15 feb 2026 • 14:00         │
└─────────────────────────────────────┘
```

- Fondo azul claro (#e3f2fd)
- Nombre del docente (grande y bold)
- Programa (gris)
- Icono de equipo + nombre
- Fecha y hora con iconos
- Botón [✗] para eliminar (arriba derecha)

---

## 📞 PÁGINA: CONTACTO

### Distribución

```
┌─────────────────────┬─────────────────────┐
│  INFORMACIÓN        │  SERVICIOS Y        │
│  DE CONTACTO        │  REQUISITOS         │
│                     │                     │
│  [📍] Ubicación     │  Servicios:         │
│  [📞] Teléfono      │  • Lista de         │
│  [✉️] Email         │    servicios        │
│  [🕐] Horario       │                     │
│                     │  Requisitos:        │
│                     │  • Lista de         │
│                     │    requisitos       │
│                     │                     │
│                     │  [SOPORTE]          │
│                     │  [Email] [Llamar]   │
└─────────────────────┴─────────────────────┘
```

### Elementos

1. **Cards de información** con iconos:
   - Institución (🏢)
   - Ubicación (📍)
   - Teléfono (📞)
   - Email (✉️)
   - Horario (🕐)

2. **Card de Servicios**
   - Lista con checkmarks verdes
   - 5 servicios del laboratorio

3. **Card de Requisitos**
   - Lista con bullets azules
   - 5 requisitos para reservas

4. **Card de Soporte** (fondo azul degradado)
   - Botones blancos para:
     - "Enviar Email"
     - "Llamar Ahora"

---

## 🎨 INDICADORES VISUALES

### Botones

- **Hover:** Se agrandan ligeramente (scale 1.05)
- **Activo:** Cambian de color
- **Disabled:** Opacidad 50%, cursor normal

### Cards

- **Hover:** Sombra más pronunciada, se levanta
- **Normal:** Sombra suave

### Formularios

- **Focus:** Borde azul brillante
- **Error:** Borde rojo
- **Válido:** Borde verde (opcional)

### Animaciones

- **Cambio de página:** Fade in suave
- **Aparece mensaje:** Desliza desde arriba
- **Hover botones:** Transición suave 300ms

---

## 🖱️ INTERACCIONES COMUNES

### Crear una Reserva

1. Click en "Reservas" (menú)
2. Llenar todos los campos del formulario
3. Click en "Crear Reserva"
4. Ver mensaje de éxito/error
5. Si éxito: La reserva aparece en la tabla
6. El formulario se limpia automáticamente

### Ver Calendario

1. En página de Reservas
2. Scroll hasta el calendario
3. Click flechas ← → para cambiar mes
4. Click en un día para seleccionarlo
5. El día seleccionado se pone azul
6. Días con reservas tienen punto azul

### Eliminar Reserva

1. En tabla de reservas
2. Localiza la reserva a eliminar
3. Click botón rojo "Eliminar"
4. Confirma en el diálogo
5. La reserva desaparece de la tabla

### Exportar Datos

1. Click botón "Exportar"
2. Se descarga archivo CSV
3. Abre con Excel o Google Sheets
4. Contiene todas las reservas/préstamos

### Imprimir

1. Click botón "Imprimir"
2. Se abre diálogo de impresión del navegador
3. Selecciona impresora
4. Configura opciones
5. Click "Imprimir"

---

## 🎯 FLUJO DE TRABAJO TÍPICO

### Escenario: Reservar Laboratorio

```
INICIO
  ↓
Navegar a "Reservas"
  ↓
Ver calendario - ¿Hay espacio disponible?
  ↓ Sí
Llenar formulario:
  - Nombre: "Dr. García"
  - Programa: "Ing. Sistemas"
  - Fecha: [Click calendario]
  - Hora inicio: "14:00"
  - Hora fin: "16:00"
  ↓
Click "Crear Reserva"
  ↓
Sistema valida:
  - ¿Todos los campos llenos? ✓
  - ¿Hora fin > hora inicio? ✓
  - ¿Sin conflictos? ✓
  ↓
✅ ÉXITO
  ↓
Mensaje verde aparece
Formulario se limpia
Reserva aparece en tabla
Calendario muestra punto en ese día
  ↓
FIN
```

---

## ❓ PREGUNTAS FRECUENTES

### ❓ ¿Por qué no puedo crear una reserva?

**Posibles causas:**

1. ❌ Campos vacíos → Llena todos los campos marcados con *
2. ❌ Hora fin ≤ hora inicio → La hora de fin debe ser posterior
3. ❌ Horario ocupado → Ya hay una reserva en ese horario
4. ❌ Fecha pasada → Selecciona una fecha futura

### ❓ ¿Cómo sé si un día tiene reservas?

Mira el calendario:

- Día con **punto azul** debajo = Tiene reservas
- Día sin punto = Sin reservas

### ❓ ¿Puedo hacer dos reservas en fechas diferentes?

¡Sí! No hay límite de reservas por persona, siempre que no se crucen horarios.

### ❓ ¿Los datos se guardan permanentemente?

Los datos se mantienen mientras los servidores estén activos. Al cerrar los servidores, se pierden (almacenamiento en memoria).

Para persistencia permanente, se requeriría base de datos.

### ❓ ¿Puedo usar el sistema desde mi celular?

¡Sí! El diseño es responsive. Se adapta automáticamente a pantallas pequeñas.

### ❓ ¿Qué navegadores funcionan?

El sistema funciona en todos los navegadores modernos:

- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

---

## 🎨 TIPS DE DISEÑO

### Para mejor experiencia

1. **Usa pantalla completa** (F11)
2. **Zoom al 100%** (Ctrl+0)
3. **Desactiva bloqueadores** que puedan interferir
4. **Actualiza el navegador** a la última versión

---

## 🚀 ¡EMPIEZA A USAR EL SISTEMA

### El sistema está diseñado para ser

- ✅ **Intuitivo:** No necesitas manual
- ✅ **Rápido:** Respuestas instantáneas
- ✅ **Confiable:** Validaciones automáticas
- ✅ **Atractivo:** Diseño profesional

### Solo

1. Abre <http://localhost:5173>
2. Explora las secciones
3. Prueba crear una reserva
4. Disfruta del sistema

---

**¡El sistema está listo y esperándote!** 🎓✨
