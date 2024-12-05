
# Documentación: Implementación de un Header Animado con React y Framer Motion

## Introducción

Esta implementación utiliza **React**, **Framer Motion** y **React Router DOM** para crear un **Header animado**. El componente incluye un menú desplegable con animaciones y un diseño visual atractivo. Esta solución es perfecta para agregar interactividad y dinamismo a una página web.

### Instalación

Primero, asegúrate de instalar las dependencias necesarias en tu proyecto:

```bash
npm install framer-motion react-router-dom
```

## Explicación del Código

### 1. Importaciones

```javascript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
```

- **React**: Se utiliza para crear el componente funcional.
- **useState**: Maneja el estado de apertura/cierre del menú.
- **Link**: Navegación interna entre rutas usando React Router DOM.
- **motion**: Proporciona animaciones avanzadas.

### 2. Estructura General

El componente `Header` se divide en tres secciones principales:

- **Menú Desplegable (Fullscreen Navigation):** Un contenedor que ocupa toda la pantalla, mostrando opciones de navegación.
- **Botón Toggle:** Controla la apertura y cierre del menú.
- **Contenido Principal (Main Content):** Texto introductorio y efectos visuales.

### 3. Código Detallado

#### Menú Desplegable

```javascript
<motion.div
  initial={{ y: "-100%" }}
  animate={{ y: isOpen ? "0%" : "-100%" }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center z-50"
>
```

- **`initial` y `animate`**: Define la animación del menú al abrirse/cerrarse.
- **`transition`**: Controla la duración y suavidad de la animación.

#### Botón Toggle

```javascript
<button
  onClick={() => setIsOpen(!isOpen)}
  className="absolute top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
>
  {isOpen ? "Cerrar" : "Menú"}
</button>
```

- **`onClick`**: Alterna el estado del menú (`isOpen`).
- **Clases de estilo:** Botón con degradado, sombras y efecto de escala.

#### Contenido Principal

```javascript
<div className="flex flex-col items-center justify-center h-full text-center text-white">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-6xl font-extrabold tracking-wider mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
  >
    Diseña tus Sueños{" "}
    <motion.span
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      🌟
    </motion.span>
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-xl max-w-2xl text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
  >
    Explora una experiencia única en diseño web, donde cada detalle cobra vida.
  </motion.p>
</div>
```

- **`motion.h1` y `motion.p`**: Añaden animaciones de entrada para los textos.
- **Estilos avanzados:** Sombras y efectos visuales para mejorar la apariencia.

#### Navegación Interna

```javascript
<nav className="mt-8 space-y-6 text-lg">
  {["Inicio", "Nosotros", "Contacto"].map((item, index) => (
    <Link to={`/${item.toLowerCase()}`} key={index} className="nav-link">
      <motion.div
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
        className="text-2xl font-semibold text-gray-300 hover:text-white transition"
      >
        {item}
      </motion.div>
    </Link>
  ))}
</nav>
```

- **`Link`**: Permite la navegación entre rutas.
- **`motion.div`**: Agrega un efecto de escala al pasar el mouse.

## Resultado

El componente `Header` proporciona:

- Animaciones fluidas con **Framer Motion**.
- Un diseño moderno con **Tailwind CSS**.
- Navegación funcional entre rutas con **React Router DOM**.

## Recursos

- [Framer Motion](https://www.framer.com/motion/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
