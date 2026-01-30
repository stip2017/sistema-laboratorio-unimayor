# Guía de Despliegue en la Nube 🚀

Esta guía te ayudará a poner tu sistema en línea y conectarlo a una base de datos real en MongoDB Atlas.

## 1. Configuración de MongoDB Atlas (Base de Datos)

1. **Crea una cuenta:** Ve a [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas/register) y regístrate.
2. **Crea un Cluster:** Elige el plan gratuito (Shared Cluster). Selecciona un proveedor (como AWS) y una región cercana.
3. **Seguridad de Red (Network Access):**
   - Ve a `Network Access` -> `Add IP Address`.
   - Selecciona **"Allow Access From Anywhere"** (0.0.0.0/0) para que el servidor en la nube pueda conectarse.
4. **Acceso a Base de Datos (Database Access):**
   - Crea un usuario (ejemplo: `admin`) y una contraseña segura. Recuerda estos datos.
5. **Obtén tu Cadena de Conexión (Connection String):**
   - Ve a `Database` -> `Connect` -> `Drivers`.
   - Copia la cadena que se parece a: `mongodb+srv://<db_username>:<db_password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
   - Reemplaza `<db_username>` y `<db_password>` con tus credenciales.

## 2. Configuración Local del Proyecto

1. Abre el archivo `.env` en la raíz del proyecto.
2. Reemplaza el valor de `MONGODB_URI` con tu cadena de conexión real de Atlas.

   ```env
   MONGODB_URI=mongodb+srv://tu_usuario:tu_password@cluster0.xxxxx.mongodb.net/laboratorio?retryWrites=true&w=majority
   ```

3. Verifica que todo funcione localmente ejecutando los comandos de siempre. El sistema ahora guardará los datos en la nube.

## 3. Despliegue del Servidor (Render.com)

[Render](https://render.com) es excelente para aplicaciones Node.js + React.

1. **Conecta tu código a GitHub:**
   - Sube todo el proyecto a un repositorio privado o público en GitHub.
2. **Crea un "Web Service" en Render:**
   - Conéctalo a tu repositorio de GitHub.
3. **Configuración del Entorno:**
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run server`
4. **Variables de Entorno (Environment Variables):**
   - Agrega una variable llamada `MONGODB_URI` y pega tu cadena de conexión de Atlas.
   - Agrega `NODE_ENV=production`.
5. **¡Listo!** Render te dará una URL (ej: `proyecto-laboratorio.onrender.com`) desde la cual podrás acceder desde cualquier lugar.

---

## Notas Importantes

- **CORS:** El backend ya está configurado para aceptar peticiones, pero si cambias de dominio, asegúrate de que el frontend apunte correctamente.
- **Persistencia:** Al usar MongoDB Atlas, tus datos nunca se borrarán aunque el servidor de Render se reinicie.
