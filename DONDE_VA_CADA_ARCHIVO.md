# 📦 GUÍA DE INSTALACIÓN - DÓNDE VA CADA ARCHIVO

## 🎯 ARCHIVOS QUE VAS A DESCARGAR

Has descargado **22 archivos** + 4 de documentación = **26 archivos en total**

---

## 📋 PASO 1: ARCHIVOS EN LA RAÍZ (13 archivos)

Estos archivos van **directamente en la raíz** de tu repositorio GitHub (al mismo nivel):

### ✅ Archivos de configuración:
1. `.gitignore` → **gitignore** (sin punto al principio cuando lo descargues)
2. `.npmrc` → **npmrc** (sin punto al principio)
3. `eslint.config.js`
4. `package.json` ← ⚠️ **MUY IMPORTANTE**
5. `postcss.config.js`
6. `tailwind.config.js`
7. `tsconfig.app.json`
8. `tsconfig.json`
9. `tsconfig.node.json`
10. `vercel.json`
11. `vite.config.ts`

### ✅ Archivo HTML:
12. `index.html`

### ✅ Documentación (opcional):
13. `README_TRIVIAL.md` → Renombrar a `README.md` (opcional)

---

## 📁 PASO 2: CREAR CARPETA `src/` Y SUBIR (5 archivos)

Crea una carpeta llamada **`src`** en tu repositorio y coloca estos archivos dentro:

1. `TriviaApp.tsx`
2. `TriviaApp.css`
3. `index.css`
4. `main.tsx` ← ⚠️ **MUY IMPORTANTE**
5. `vite-env.d.ts`

---

## 📁 PASO 3: CREAR CARPETA `src/components/` (2 archivos)

Dentro de la carpeta `src/`, crea una subcarpeta llamada **`components`** y coloca:

1. `PlayerSetup.tsx`
2. `QuestionScreen.tsx`

---

## 📁 PASO 4: CREAR CARPETA `src/types/` (1 archivo)

Dentro de la carpeta `src/`, crea una subcarpeta llamada **`types`** y coloca:

1. `trivia.ts`

---

## 📁 PASO 5: CREAR CARPETA `src/utils/` (1 archivo)

Dentro de la carpeta `src/`, crea una subcarpeta llamada **`utils`** y coloca:

1. `waterEffect.ts`

---

## 🗂️ ESTRUCTURA FINAL EN GITHUB

Tu repositorio debe verse así:

```
trivial-sant-feliu/           ← Tu repositorio
│
├── .gitignore                (renombrar de "gitignore")
├── .npmrc                    (renombrar de "npmrc")
├── eslint.config.js
├── index.html
├── package.json              ← ⚠️ CRÍTICO
├── postcss.config.js
├── README.md                 (opcional)
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
│
└── src/                      ← Crear esta carpeta
    ├── TriviaApp.tsx
    ├── TriviaApp.css
    ├── index.css
    ├── main.tsx              ← ⚠️ CRÍTICO
    ├── vite-env.d.ts
    │
    ├── components/           ← Crear esta carpeta
    │   ├── PlayerSetup.tsx
    │   └── QuestionScreen.tsx
    │
    ├── types/                ← Crear esta carpeta
    │   └── trivia.ts
    │
    └── utils/                ← Crear esta carpeta
        └── waterEffect.ts
```

---

## 🚀 PASOS PARA SUBIR A GITHUB

### Opción 1: Subir desde la web (RECOMENDADO)

#### 1. Crea el repositorio en GitHub:
- Ve a github.com
- Click en "New repository"
- Nombre: `trivial-sant-feliu`
- Click en "Create repository"

#### 2. Sube archivos de la raíz:
- Click en "uploading an existing file"
- Arrastra los **13 archivos de la raíz**
- Commit: "Archivos de configuración"

#### 3. Crea la carpeta src/:
- En el repositorio, click en "Add file" → "Create new file"
- Escribe: `src/README.md` (esto crea la carpeta)
- Pon cualquier texto
- Click en "Commit"

#### 4. Sube archivos a src/:
- Entra en la carpeta `src/`
- Click en "Add file" → "Upload files"
- Arrastra los **5 archivos de src**
- Commit: "Código fuente"

#### 5. Crea la carpeta src/components/:
- Dentro de `src/`, click en "Create new file"
- Escribe: `components/README.md`
- Commit

#### 6. Sube archivos a src/components/:
- Entra en `src/components/`
- Upload los **2 archivos**

#### 7. Repite para src/types/ y src/utils/:
- Crea `src/types/` y sube `trivia.ts`
- Crea `src/utils/` y sube `waterEffect.ts`

---

## ⚠️ NOTA IMPORTANTE SOBRE `.gitignore` Y `.npmrc`

Estos archivos empiezan con punto (`.`), pero cuando los descargues pueden aparecer sin el punto:
- `gitignore` → Tienes que renombrarlo a `.gitignore`
- `npmrc` → Tienes que renombrarlo a `.npmrc`

**Cómo hacerlo:**
- En Windows: Renombra el archivo y añade el punto al principio
- En GitHub web: Cuando lo subas, nómbralo con el punto

---

## ✅ CHECKLIST DE VERIFICACIÓN

Antes de hacer deploy en Vercel, verifica:

- [ ] `package.json` está en la raíz
- [ ] `index.html` está en la raíz
- [ ] Carpeta `src/` existe y contiene 5 archivos
- [ ] Carpeta `src/components/` existe y contiene 2 archivos
- [ ] Carpeta `src/types/` existe y contiene 1 archivo
- [ ] Carpeta `src/utils/` existe y contiene 1 archivo
- [ ] Total: 13 archivos en raíz + 9 archivos en src/ = 22 archivos

---

## 🎯 ARCHIVOS DE DOCUMENTACIÓN (4 archivos)

Estos son para que tú los leas, NO hace falta subirlos a GitHub:

1. `LEEME_PRIMERO.md` ← **EMPIEZA POR AQUÍ**
2. `GUIA_PASO_A_PASO.md` ← Guía detallada
3. `CHECKLIST_TRIVIAL.md` ← Lista de verificación
4. `README_TRIVIAL.md` ← Info del proyecto (opcional subir como README.md)

---

## 💡 CONSEJO

Si te pierdes, mira la sección **"ESTRUCTURA FINAL EN GITHUB"** de arriba.
Esa es exactamente cómo debe verse tu repositorio.

---

## 🆘 SI TIENES PROBLEMAS

### "No puedo crear carpetas en GitHub"
Usa el truco: Crear archivo `carpeta/README.md` y eso crea la carpeta

### "Los archivos .gitignore y .npmrc no funcionan"
Asegúrate de que tengan el punto (`.`) al principio del nombre

### "Vercel da error 'vite not found'"
Significa que `package.json` no está en la raíz o falta

---

¡Listo! Ahora ya sabes dónde va cada archivo. 🎉
