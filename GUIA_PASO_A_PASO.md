# 📚 GUÍA PASO A PASO - Para Victor (sin experiencia en código)

## 🎯 QUÉ VAS A HACER

Vas a subir una aplicación web de trivial a GitHub y luego a Vercel para que funcione en internet.

---

## 📦 PASO 1: DESCARGAR LOS ARCHIVOS

1. Descarga la carpeta **`trivia-completa`** que te he preparado
2. Verás que tiene esta estructura:

```
trivia-completa/
├── Archivos en la raíz (13 archivos)
└── src/
    ├── Archivos de código (5 archivos)
    ├── components/ (2 archivos)
    ├── types/ (1 archivo)
    └── utils/ (1 archivo)
```

**TOTAL: 22 archivos**

---

## 🌐 PASO 2: CREAR REPOSITORIO EN GITHUB

### 2.1 - Ir a GitHub
1. Abre tu navegador y ve a [github.com](https://github.com)
2. Inicia sesión con tu cuenta
3. Haz clic en el botón verde **"New"** (esquina superior derecha)

### 2.2 - Configurar el repositorio
1. **Repository name**: Pon `trivial-sant-feliu`
2. **Description**: (opcional) "App de trivia sobre el Sant Feliu de Guíxols"
3. **Public** o **Private**: Elige lo que prefieras
4. ❌ **NO marques** "Add a README file"
5. Haz clic en **"Create repository"**

### 2.3 - Verás una pantalla con instrucciones
- GitHub te mostrará varias opciones
- **IGNORA** todo lo que pone
- Vamos a subir los archivos de forma más fácil

---

## 📁 PASO 3: SUBIR LOS ARCHIVOS A GITHUB

### Opción A: Subir desde la web (MÁS FÁCIL)

1. **En la página de tu repositorio**, haz clic en **"uploading an existing file"**
   
2. **Arrastra TODOS los archivos de la raíz**:
   - `.gitignore`
   - `.npmrc`
   - `eslint.config.js`
   - `index.html`
   - `package.json`
   - `postcss.config.js`
   - `README.md`
   - `tailwind.config.js`
   - `tsconfig.app.json`
   - `tsconfig.json`
   - `tsconfig.node.json`
   - `vercel.json`
   - `vite.config.ts`

3. Escribe un mensaje: "Archivos de configuración"
   
4. Haz clic en **"Commit changes"**

5. **Ahora vamos a subir la carpeta `src/`**:
   - Haz clic en **"Add file"** → **"Upload files"**
   - Arrastra la **CARPETA COMPLETA `src/`** con todas sus subcarpetas
   - Mensaje: "Código fuente de la aplicación"
   - Haz clic en **"Commit changes"**

### ⚠️ IMPORTANTE:
- Asegúrate de que GitHub mantenga la estructura de carpetas
- Deberías ver: `src/components/`, `src/types/`, `src/utils/`

---

## 🚀 PASO 4: CONECTAR CON VERCEL

### 4.1 - Ir a Vercel
1. Abre [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"** o **"Login"**
3. Elige **"Continue with GitHub"**
4. Autoriza a Vercel para que acceda a tus repositorios

### 4.2 - Importar el proyecto
1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Busca tu repositorio **`trivial-sant-feliu`**
3. Haz clic en **"Import"**

### 4.3 - Configurar el proyecto
Vercel debería detectar automáticamente:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

**NO CAMBIES NADA**, simplemente haz clic en **"Deploy"**

### 4.4 - Esperar el deploy
- Verás una pantalla con confeti 🎉 cuando termine
- Vercel te dará una URL tipo: `https://trivial-sant-feliu.vercel.app`

---

## ✅ PASO 5: PROBAR LA APLICACIÓN

1. Haz clic en la URL que te dio Vercel
2. Deberías ver la **PANTALLA 1**: Selección de jugadores
3. Haz clic en "2 JUGADORS" o "3 JUGADORS"
4. Verás la **PANTALLA 2**: La pregunta con las 5 respuestas

### Prueba los efectos:
- **Selecciona una respuesta INCORRECTA** (cualquiera excepto "Blau i Vermell")
  - ❌ Deberías ver bordes rojos y una X gigante
  
- **Selecciona la respuesta CORRECTA** ("Blau i Vermell")
  - ✅ Deberías ver el efecto de agua cayendo

### Prueba el teclado:
- Presiona las teclas **1, 2, 3, 4, 5** para seleccionar
- Presiona **↑** o **↓** para navegar
- Presiona **Enter** para confirmar

---

## 🛠️ PASO 6: SI ALGO SALE MAL

### Error: "Command vite not found"
1. Ve a tu repositorio en GitHub
2. Verifica que el archivo `package.json` esté en la **RAÍZ** (no dentro de ninguna carpeta)
3. Ve a Vercel → Settings → General
4. Asegúrate de que:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Error: "Cannot find module"
1. Verifica que la carpeta `src/` tenga TODAS las subcarpetas:
   - `src/components/`
   - `src/types/`
   - `src/utils/`
2. Verifica que cada subcarpeta tenga sus archivos correspondientes

### La pantalla se ve mal
1. Verifica que el archivo `src/index.css` esté subido
2. Verifica que el archivo `src/TriviaApp.css` esté subido

### Los efectos visuales no funcionan
1. Verifica que el archivo `src/utils/waterEffect.ts` esté subido
2. Abre la consola del navegador (F12) y mira si hay errores

---

## 🎨 PASO 7: PERSONALIZAR (OPCIONAL)

### Cambiar la pregunta:
1. Ve a GitHub
2. Navega a `src/components/QuestionScreen.tsx`
3. Haz clic en el icono del lápiz (editar)
4. Busca la línea:
   ```typescript
   const QUESTION = 'AMB QUINS COLORS...'
   ```
5. Cambia el texto
6. Haz clic en **"Commit changes"**
7. Vercel hará redeploy automáticamente

### Cambiar las respuestas:
En el mismo archivo, busca:
```typescript
const ANSWERS = [
  { id: 0, text: 'Taronja i blanc', correct: false },
  ...
]
```
- Cambia los textos
- Marca `correct: true` en la respuesta correcta
- Solo puede haber UNA respuesta con `correct: true`

---

## 📊 RESUMEN DE ARCHIVOS

### Archivos en la RAÍZ (13):
1. `.gitignore` - Archivos que Git debe ignorar
2. `.npmrc` - Configuración de npm
3. `eslint.config.js` - Configuración de linter
4. `index.html` - Página HTML principal
5. `package.json` - **CRÍTICO** - Dependencias del proyecto
6. `postcss.config.js` - Configuración de PostCSS
7. `README.md` - Documentación
8. `tailwind.config.js` - Configuración de Tailwind
9. `tsconfig.app.json` - **CRÍTICO** - Config TypeScript app
10. `tsconfig.json` - **CRÍTICO** - Config TypeScript principal
11. `tsconfig.node.json` - **CRÍTICO** - Config TypeScript Node
12. `vercel.json` - Configuración de Vercel
13. `vite.config.ts` - **CRÍTICO** - Configuración de Vite

### Archivos en `src/` (5):
1. `TriviaApp.css` - Estilos de la app
2. `TriviaApp.tsx` - Componente principal
3. `index.css` - Estilos base
4. `main.tsx` - **CRÍTICO** - Punto de entrada
5. `vite-env.d.ts` - Tipos de Vite

### Archivos en `src/components/` (2):
1. `PlayerSetup.tsx` - Pantalla de selección de jugadores
2. `QuestionScreen.tsx` - Pantalla de pregunta

### Archivos en `src/types/` (1):
1. `trivia.ts` - Definiciones de tipos TypeScript

### Archivos en `src/utils/` (1):
1. `waterEffect.ts` - Efecto de agua

---

## ✨ CARACTERÍSTICAS DE LA APP

- ✅ Pantalla de selección: 2 o 3 jugadores
- ✅ Pregunta sobre Sant Feliu de Guíxols
- ✅ 5 opciones de respuesta
- ✅ Navegación con ratón y teclado
- ✅ Efecto de error (bordes rojos + X)
- ✅ Efecto de acierto (agua)
- ✅ Diseño responsive 1280x720px
- ✅ Mismo estilo visual que el medidor de decibelios

---

## 📞 SI NECESITAS AYUDA

Si te atascas en algún paso:
1. Comprueba que TODOS los archivos estén subidos
2. Verifica la estructura de carpetas en GitHub
3. Mira los logs de error en Vercel
4. Vuelve a leer esta guía paso a paso

**¡Mucha suerte!** 🎉
