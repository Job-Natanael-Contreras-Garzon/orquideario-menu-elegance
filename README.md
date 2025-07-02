# 🌸 El Orquideario - Menú Digital

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Menú digital interactivo para El Orquideario, un espacio único que combina la belleza de las orquídeas con una experiencia gastronómica excepcional.

## 🚀 Características

- Interfaz moderna y receptiva
- Modo claro/oscuro
- Visualización de productos con imágenes y descripciones
- Sección de combos especiales
- Integración con WhatsApp para reservas
- Diseño elegante y minimalista

## 🛠 Tecnologías

- **Frontend**: React 18 con TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **UI**: Componentes personalizados
- **Formato de precios**: Intl.NumberFormat

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Job-Natanael-Contreras-Garzon/orquideario-menu-elegance.git
   cd orquideario-menu-elegance
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🎨 Personalización

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_APP_TITLE="El Orquideario"
VITE_WHATSAPP_NUMBER="+1234567890"
VITE_INSTAGRAM_USERNAME="orquideario"
```

### Temas

Los colores del tema se pueden modificar en:
- `tailwind.config.ts` - Configuración de colores y fuentes
- `src/index.css` - Estilos globales y animaciones

## 📱 Componentes principales

- **ProductCard**: Tarjeta de producto con imagen, descripción y precios
- **ProductModal**: Modal con detalles completos del producto
- **ComboCard**: Visualización de combos especiales
- **Footer**: Pie de página con información de contacto y redes sociales

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

---

Desarrollado con ❤️ por [JobContreras](https://github.com/Job-Natanael-Contreras-Garzon) para [BrandingBrothers](https://brandingbrothers.com)
