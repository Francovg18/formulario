# `useContext` en React

El **`useContext`** es un hook de React que permite manejar estados y datos de manera eficiente entre componentes. Su principal ventaja es evitar el "prop drilling", es decir, pasar datos de un componente a otro a través de múltiples niveles de jerarquía.

## ¿Qué es un Context?

Un **Context** es un lugar centralizado donde puedes guardar información y permitir que cualquier componente en la jerarquía acceda o modifique esa información directamente, sin necesidad de pasarla como props.

### Ventajas:

- Simplifica el flujo de datos en aplicaciones complejas.
- Reduce el número de props necesarias para compartir información entre componentes.

---

## Conceptos clave:

### 1. **`createContext`**

- Es una función que se utiliza para crear un Contexto.
- Un Contexto actúa como un contenedor para los datos que quieres compartir.

**Ejemplo básico:**

```javascript
import React, { createContext } from "react";

const MiContexto = createContext(); // Creamos un contexto vacío
```

---

### 2. **`useContext`**

- Es un hook que permite consumir un Contexto desde cualquier componente.
- Simplifica el acceso a los datos almacenados en el Contexto.

**Ejemplo básico:**

```javascript
import React, { useContext } from "react";

const datos = useContext(MiContexto); // Accedemos al contexto
```

---

### 3. **`Provider`**

- Es un componente especial que envuelve los componentes que necesitan acceder al Contexto.
- El **`Provider`** se utiliza para proporcionar el valor que se almacenará en el Contexto.

**Ejemplo básico:**

```javascript
import React, { createContext, useState } from "react";

const MiContexto = createContext();

function App() {
  const [valor, setValor] = useState("¡Hola, Mundo!");

  return (
    <MiContexto.Provider value={{ valor, setValor }}>
      <ComponenteHijo />
    </MiContexto.Provider>
  );
}
```

En este ejemplo, el **`Provider`** le da el valor de `valor` y `setValor` a todos los componentes dentro de él, como `ComponenteHijo`.

---

## **Comparación con `props`**

### ¿Qué son los `props`?

Los **`props`** son una forma de pasar datos de un componente padre a un componente hijo en React. Son una herramienta fundamental para compartir información entre componentes en React.

### Diferencias con `useContext`:

- **Props**: Para compartir datos entre componentes, tienes que pasar los datos explícitamente a través de las props, lo cual puede ser tedioso si tienes muchos componentes anidados.
- **useContext**: Permite compartir datos globalmente sin necesidad de pasar props a través de cada componente intermedio. Esto simplifica el flujo de datos en aplicaciones grandes y facilita la gestión de estados compartidos.

**Ejemplo con props**:

```javascript
function ComponentePadre() {
  const mensaje = "¡Hola desde el padre!";

  return <ComponenteHijo mensaje={mensaje} />;
}

function ComponenteHijo({ mensaje }) {
  return <h1>{mensaje}</h1>;
}
```

**Ejemplo con useContext**:

```javascript
import React, { createContext, useContext } from "react";

const MensajeContext = createContext();

function ComponentePadre() {
  return (
    <MensajeContext.Provider value="¡Hola desde el contexto!">
      <ComponenteHijo />
    </MensajeContext.Provider>
  );
}

function ComponenteHijo() {
  const mensaje = useContext(MensajeContext);
  return <h1>{mensaje}</h1>;
}
```

---

# Welcome to React🫡
