# 🚀 GUÍA DE INICIO RÁPIDO

## Sistema Web de Reservas y Préstamos

### Laboratorio de Física y Sistemas Embebidos

---

## ✅ ESTADO DEL SISTEMA

**Backend:** ✅ Corriendo en <http://localhost:3001>
**Frontend:** ✅ Corriendo en <http://localhost:5173>

---

## 📌 PASOS PARA ACCEDER AL SISTEMA

### 1. Abre tu navegador web (Chrome, Firefox, Edge, etc.)

### 2. Navega a la siguiente dirección

```
http://localhost:5173
```

### 3. ¡Listo! Deberías ver la página de inicio del sistema

---

## 🎯 NAVEGACIÓN DEL SISTEMA

El sistema tiene **4 secciones principales** en el menú superior:

### 🏠 **INICIO**

- Vista general del sistema
- Características principales
- Instrucciones de uso
- Tarjetas informativas con iconos

### 📅 **RESERVAS**

Aquí encontrarás:

**Columna Izquierda:**

- **Formulario de Nueva Reserva:**
  - Nombre y Apellidos
  - Programa Académico (selector)
  - Fecha (calendario)
  - Hora Inicio
  - Hora Fin
  - Botón "Crear Reserva"

- **Calendario Mensual:**
  - Navegación entre meses (flechas)
  - Días clickeables
  - Indicadores de días con reservas
  - Leyenda de colores

**Columna Derecha:**

- **Tabla de Reservas Actuales:**
  - Lista de todas las reservas
  - Datos: Docente, Programa, Fecha, Horarios
  - Botón "Eliminar" por cada reserva
  - Botón "Exportar" (CSV)
  - Botón "Imprimir"
  - Contador total de reservas

### 📦 **PRÉSTAMOS**

**Columna Izquierda:**

- **Formulario de Nuevo Préstamo:**
  - Nombre del Docente
  - Programa Académico (selector)
  - Equipo Prestado (selector con opciones como Arduino, Raspberry Pi, etc.)
  - Fecha
  - Hora
  - Botón "Registrar Préstamo"

**Columna Derecha:**

- **Historial de Préstamos:**
  - Tarjetas con información de cada préstamo
  - Docente, programa, equipo, fecha y hora
  - Botón eliminar en cada tarjeta
  - Botón "Exportar"
  - Contador total

### 📞 **CONTACTO**

- Información institucional completa
- Ubicación y dirección
- Teléfono y email
- Horario de atención
- Servicios del laboratorio
- Requisitos para reservas
- Sección de soporte técnico

---

## 🎨 CARACTERÍSTICAS DE DISEÑO

### Colores Institucionales

- **Azul Primario:** Encabezados y botones principales
- **Azul Secundario:** Acentos y elementos interactivos
- **Blanco y Grises:** Fondos y textos
- **Naranja Acento:** Hover effects

### Efectos Visuales

- ✨ Animaciones suaves al cambiar de página
- 🎯 Botones con efecto hover (se agrandan ligeramente)
- 💫 Cards con sombra que se eleva al pasar el mouse
- 🎭 Transiciones de color en todos los elementos interactivos

### Responsive

- 📱 Funciona perfectamente en móviles
- 💻 Adaptado para tablets
- 🖥️ Óptimo en escritorio

---

## ⚡ FUNCIONALIDADES CLAVE

### 1. Validación de Horarios

El sistema **NO permite** crear dos reservas que se solapen en el mismo día y hora.
Si intentas crear una reserva en un horario ocupado, verás un mensaje de error.

### 2. Calendario Interactivo

- Navega entre meses con las flechas
- Los días con reservas tienen un **punto azul** debajo
- El día de hoy tiene un **borde azul**
- El día seleccionado se muestra en **azul sólido**

### 3. Exportación de Datos

Ambas secciones (Reservas y Préstamos) permiten:

- **Exportar a CSV:** Descarga un archivo Excel-compatible
- **Imprimir:** Abre el diálogo de impresión del navegador

### 4. Mensajes de Confirmación

- ✅ **Verde:** Operación exitosa
- ❌ **Rojo:** Error o validación fallida
- Los mensajes desaparecen automáticamente después de 5 segundos

---

## 🧪 PRUEBA EL SISTEMA

### Crear una Reserva

1. Ve a **Reservas**
2. Llena el formulario con tus datos
3. Ejemplo:
   - Nombre: Juan Pérez García
   - Programa: Ingeniería de Sistemas
   - Fecha: [Selecciona mañana]
   - Hora Inicio: 08:00
   - Hora Fin: 10:00
4. Click en "Crear Reserva"
5. ¡Deberías ver tu reserva en la tabla inmediatamente!

### Crear un Préstamo

1. Ve a **Préstamos**
2. Llena el formulario
3. Ejemplo:
   - Nombre: María López
   - Programa: Ingeniería Electrónica
   - Equipo: Arduino UNO
   - Fecha: [Hoy]
   - Hora: 14:00
4. Click en "Registrar Préstamo"
5. ¡Aparecerá en el historial!

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### El sitio no carga

1. Verifica que ambos servidores estén corriendo
2. Revisa que las URLs sean correctas:
   - Frontend: <http://localhost:5173>
   - Backend: <http://localhost:3001>

### Error al crear reserva

- Asegúrate de llenar **todos los campos**
- Verifica que la hora de fin sea **posterior** a la hora de inicio
- Comprueba que **no haya otra reserva** en ese horario

### Los datos no aparecen

- Refresca la página (F5)
- Verifica que el backend esté corriendo
- Abre la consola del navegador (F12) para ver errores

---

## 🎓 EQUIPO DE LABORATORIO DISPONIBLE

El sistema incluye estos equipos predefinidos para préstamo:

- Osciloscopio Digital
- Generador de Señales
- Fuente de Alimentación
- Multímetro Digital
- Arduino UNO
- Raspberry Pi
- Kit de Sensores
- Protoboard
- Kit de Resistencias
- Kit de Capacitores
- Motor DC
- Servo Motor
- Kit de LEDs
- Otro (personalizado)

---

## 📊 DATOS IMPORTANTES

### El sistema almacena

- ✅ Nombre del docente
- ✅ Programa académico
- ✅ Fechas y horarios
- ✅ Equipos prestados
- ✅ Historial completo

### El sistema valida

- ✅ Campos obligatorios
- ✅ Conflictos de horarios
- ✅ Formato de fechas y horas
- ✅ Coherencia de datos

---

## 💡 CONSEJOS DE USO

1. **Planifica con anticipación:** Registra tus reservas al menos 24 horas antes
2. **Verifica el calendario:** Revisa las reservas existentes antes de crear una nueva
3. **Exporta periódicamente:** Descarga los datos para tener un respaldo
4. **Elimina reservas canceladas:** Mantén el sistema actualizado
5. **Usa el contacto:** Ante cualquier duda, consulta la sección de contacto

---

## 🎯 ¡DISFRUTA DEL SISTEMA

¡Todo está configurado y listo para usar! El sistema está diseñado para ser:

- **Intuitivo:** Fácil de navegar
- **Rápido:** Respuestas instantáneas
- **Confiable:** Validaciones automáticas
- **Profesional:** Diseño institucional

---

**Desarrollado para:** Institución Universitaria Colegio Mayor del Cauca  
**Laboratorio:** Física y Sistemas Embebidos  
**Ubicación:** Popayán, Cauca, Colombia
