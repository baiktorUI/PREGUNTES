# 🎯 TRIVIAL SANT FELIU DE GUÍXOLS

Aplicación de preguntas y respuestas con efectos visuales.

## 📱 PANTALLAS DE LA APP

### PANTALLA 1: Selección de Jugadores
- Botones grandes para elegir **2 JUGADORS** o **3 JUGADORS**
- Mismo diseño visual que el medidor de decibelios

### PANTALLA 2: Pregunta
- Pregunta: **AMB QUINS COLORS JUGA EL PRIMER EQUIP DEL CLUB DE FUTBOL SANT FELIU DE GUÍXOLS?**
- 5 opciones de respuesta (A-E)
- Navegación con teclado: ↑ ↓ o números 1-5
- **Enter** para confirmar

## ✨ EFECTOS VISUALES

### ❌ Respuesta Incorrecta:
- Bordes rojos alrededor de la pantalla (flash)
- **X gigante** en el centro de la pantalla
- Desaparece después de 3 segundos

### ✅ Respuesta Correcta (Blau i Vermell):
- **Efecto de agua** que moja la pantalla
- 40 gotas de agua cayendo aleatoriamente
- Efecto de transparencia azulada

## 🎮 CONTROLES

### Con el ratón:
- Haz clic en cualquier respuesta para seleccionarla
- Haz clic de nuevo en la respuesta seleccionada o presiona Enter para confirmar

### Con el teclado:
- **Teclas 1-5**: Seleccionar respuesta directa
- **↑ ↓**: Navegar entre respuestas
- **Enter**: Confirmar la respuesta seleccionada

## 🚀 INSTALACIÓN

### Paso 1: Subir a GitHub
Sube TODOS estos archivos a tu repositorio de GitHub manteniendo la estructura de carpetas:

```
trivial-sant-feliu/
├── .gitignore
├── .npmrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── src/
    ├── TriviaApp.css
    ├── TriviaApp.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── components/
    │   ├── PlayerSetup.tsx
    │   └── QuestionScreen.tsx
    ├── types/
    │   └── trivia.ts
    └── utils/
        └── waterEffect.ts
```

### Paso 2: Deploy en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio
3. Vercel detectará automáticamente que es un proyecto Vite
4. Click en **Deploy**

### Paso 3: Probar localmente (opcional)
Si quieres probarlo en tu ordenador antes de subirlo:

```bash
npm install
npm run dev
```

## 🎨 COLORES

- **Fondo**: Gradiente naranja → azul → morado
- **Respuesta seleccionada**: Amarillo dorado (#FFD700)
- **Respuesta correcta**: Verde (#6DFF6A)
- **Respuesta incorrecta**: Rojo (#ff0000)

## 📝 RESPUESTA CORRECTA

La respuesta correcta a la pregunta es la opción **D: Blau i Vermell**

## 🔧 MODIFICAR LA PREGUNTA

Si quieres cambiar la pregunta o las respuestas, edita el archivo:
`src/components/QuestionScreen.tsx`

Busca estas líneas:

```typescript
const QUESTION = 'AMB QUINS COLORS JUGA EL PRIMER EQUIP DEL CLUB DE FUTBOL SANT FELIU DE GUÍXOLS?';

const ANSWERS = [
  { id: 0, text: 'Taronja i blanc', correct: false },
  { id: 1, text: 'Blau i Blanc', correct: false },
  { id: 2, text: 'Vermell i Blanc', correct: false },
  { id: 3, text: 'Blau i Vermell', correct: true },  // ← La correcta
  { id: 4, text: 'Groc i Negre', correct: false },
];
```

Cambia el texto y marca `correct: true` en la respuesta que quieras que sea la correcta.

## 📦 ARCHIVOS INCLUIDOS

- **24 archivos** en total
- **13 archivos críticos** para que funcione
- Todos los archivos de configuración necesarios
- Estilos CSS completos
- Componentes React con TypeScript

## ✅ CHECKLIST DE SUBIDA

- [ ] Todos los archivos de la raíz subidos
- [ ] Carpeta `src/` con todos sus archivos
- [ ] Carpeta `src/components/` con PlayerSetup.tsx y QuestionScreen.tsx
- [ ] Carpeta `src/types/` con trivia.ts
- [ ] Carpeta `src/utils/` con waterEffect.ts
- [ ] Vercel conectado al repositorio
- [ ] Deploy exitoso

## 🎯 CARACTERÍSTICAS

✅ Diseño responsive 1280x720px
✅ Misma estética que el medidor de decibelios
✅ Navegación por teclado
✅ Efectos visuales animados
✅ Código limpio y organizado
✅ TypeScript para mayor seguridad

## 🆘 SI ALGO NO FUNCIONA

1. Verifica que todos los archivos estén subidos
2. Revisa que la estructura de carpetas sea correcta
3. Asegúrate de que `package.json` esté en la raíz
4. Mira los logs de Vercel si hay errores

---

**¡Listo para jugar!** 🎉
