# APEX

**Real Humanoid Combat League**

APEX es una plataforma web de un campeonato ficticio de combate entre robots humanoides, inspirada en la presentación de eventos deportivos profesionales como las artes marciales mixtas (MMA).

El proyecto busca ofrecer una experiencia visual moderna e interactiva en la que los usuarios puedan conocer a los atletas robóticos, consultar sus estadísticas, explorar eventos y descubrir los momentos destacados de los combates.

## Características

- **Eventos y boletería:** información de próximos combates y selector interactivo de entradas.
- **Atletas T800:** fichas técnicas con estadísticas y características de cada robot.
- **Telemetría:** ventanas modales con información detallada de los atletas.
- **Hall of Fame:** sección dedicada a los robots más destacados de la liga.
- **Highlights:** galería de repeticiones y momentos destacados.
- **Integración con API:** consulta de información de criptomonedas mediante CoinGecko.
- **Diseño responsive:** interfaz adaptable a dispositivos móviles, tablets y computadores.
- **Modo claro y oscuro:** diferentes apariencias visuales para la plataforma.

## Identidad visual

### Logo

![Logo de APEX](./img/logo.png)

El logotipo de APEX utiliza una composición tipográfica de alto impacto, con letras blancas sobre fondo oscuro y un punto rojo que refuerza la identidad de la marca.

### Paleta de colores

La identidad visual combina tonos oscuros, rojos intensos y grises neutros.

| Color | Código HEX | Aplicación |
|---|---|---|
| Onyx | `#0B090A` | Fondo principal |
| Carbon | `#161A1D` | Tarjetas y contenedores |
| Garnet | `#660708` | Superficies y detalles |
| Mahogany | `#A4161A` | Elementos secundarios |
| Red Dark | `#BA181B` | Acentos |
| Red | `#E5383B` | Botones y elementos destacados |
| Silver | `#B1A7A6` | Textos secundarios |
| Grey | `#D3D3D3` | Bordes y elementos neutros |
| Smoke | `#F5F3F4` | Textos y títulos |

[Ver paleta completa en Coolors](https://coolors.co/palette/0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff)

### Tipografía

APEX utiliza dos familias tipográficas:

- **Teko:** utilizada en títulos y elementos destacados.
- **Oswald:** utilizada en textos generales y componentes de la interfaz.

### Concepto visual

APEX combina la estética de las competiciones deportivas profesionales con elementos de ingeniería robótica.

Su diseño utiliza fondos oscuros, tipografía de alto impacto, imágenes de combate y componentes de interfaz inspirados en plataformas deportivas.

El modo claro ofrece una apariencia alternativa, conservando los colores y elementos representativos de la marca.

## Diseño de interfaz

### Wireframe

El wireframe presenta la estructura inicial y la distribución de las secciones principales de la plataforma.

[Ver wireframe de APEX](https://robot-rumble-wireframe.lovable.app)

### Mockup

El mockup representa la propuesta visual del sitio, incluyendo colores, tipografía, imágenes y componentes de interfaz.

[Ver mockup de APEX](https://robot-rumble-wireframe.lovable.app)

## Tecnologías

- **HTML5:** estructura semántica de las páginas.
- **Tailwind CSS v4:** estilos personalizados y diseño responsive.
- **JavaScript:** interactividad y funcionalidades de la interfaz.
- **CoinGecko API:** consulta de información de criptomonedas.
- **Git y GitHub:** control de versiones y colaboración.
- **GitHub Pages:** despliegue de la plataforma web.

## Integración con API REST

APEX incorpora una integración con la API de CoinGecko para consultar información de criptomonedas.

La comunicación se realiza mediante JavaScript utilizando `fetch()`, que permite enviar solicitudes HTTP a los endpoints de la API y procesar las respuestas en formato JSON.

Esta integración permite trabajar con conceptos como:

- API REST.
- Solicitudes HTTP.
- Endpoints y URL.
- Método GET.
- Respuestas JSON.
- Programación asíncrona con `async/await`.

## Ejecución local

### Requisitos

- Visual Studio Code o cualquier editor de código.
- Un navegador web.
- Node.js y npm, si se desea recompilar Tailwind CSS.

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Riwi-Coders/apex-kombat.git
   ```

2. Acceder a la carpeta:

   ```bash
   cd apex-kombat
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecutar Tailwind CSS en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir `index.html` utilizando Live Server.

**Nota:** si el archivo CSS compilado ya está disponible, la página puede visualizarse sin ejecutar nuevamente la compilación de Tailwind CSS.

## Organización del proyecto

El desarrollo utiliza Git y GitHub para facilitar el trabajo colaborativo.

Las principales ramas son:

- `main`: versión principal del proyecto.
- `dev`: integración de funcionalidades y correcciones.
- `feature/index`: desarrollo de la página principal.
- `feature/events`: desarrollo de eventos y boletería.
- `feature/athletes`: desarrollo de atletas y estadísticas.

Las funcionalidades se integran mediante Pull Requests para mantener organizado el desarrollo.

## Estado del proyecto

**En desarrollo.**

APEX es un proyecto académico y demostrativo.

Las funcionalidades relacionadas con la compra de entradas y las reproducciones de video forman parte de una simulación y no representan transacciones ni transmisiones reales.

## Equipo

Proyecto desarrollado colaborativamente por la célula **Ex Machina**, durante el proceso de formación en desarrollo de software en RIWI.

**Integrantes:**

- Daniel Felipe Lombana Guevara.
- Samuel González López.
- Juan David Castañeda Gómez.
