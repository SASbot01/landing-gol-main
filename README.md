# Game of Life - Landing Page

Landing page para **Game of Life**, una plataforma de productividad gamificada. Incluye soporte bilingüe (Inglés/Español), integración con Stripe para pagos, y redirección a autenticación externa.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

La aplicación estará disponible en [http://localhost:5173/](http://localhost:5173/)

## 📄 Páginas

- **/** - Landing page con hero, características y precios
- **/terms** - Términos y Condiciones
- **/privacy** - Política de Privacidad

## 🔐 Autenticación

El botón de login redirige a la aplicación SaaS externa:
- **URL de autenticación**: `https://gol.blackwolfsec.io/auth`

## 💳 Integración con Stripe

La landing page soporta dos productos de Stripe:

### Configuración

1. Crea dos productos en Stripe:
   - **Producto 1**: Suscripción mensual ($37/mes)
   - **Producto 2**: Acceso de por vida ($333 pago único)

2. Genera los Payment Links en Stripe Dashboard

3. Actualiza las constantes en `src/lib/constants.ts`:
   ```typescript
   export const STRIPE_MONTHLY_LINK = 'https://buy.stripe.com/TU_LINK_MENSUAL';
   export const STRIPE_LIFETIME_LINK = 'https://buy.stripe.com/TU_LINK_LIFETIME';
   ```

## 🌍 Internacionalización

La landing page soporta Inglés (por defecto) y Español. Usa el toggle de idioma en el navbar para cambiar instantáneamente.

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Estilos**: Tailwind CSS 3
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Routing**: React Router 6
- **Pagos**: Stripe

## 📦 Estructura del Proyecto

```
landing-page-main-main/
├── public/
│   ├── dashboard-preview.png
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── landing/
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── SystemHeader.tsx
│   │   │   ├── Stacking.tsx
│   │   │   ├── FloatingCTA.tsx
│   │   │   └── ...
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   └── LanguageToggle.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── i18n.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Terms.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Despliegue

### GitHub

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Initial commit"

# Conectar con GitHub
git remote add origin https://github.com/SASbot01/game-of-life-landingmain.git
git branch -M main
git push -u origin main
```

### Vercel

1. Importa el repositorio en Vercel
2. Configura el proyecto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Despliega

## 🎨 Sistema de Diseño

### Colores

- **ops** (Cyan): `hsl(187, 100%, 50%)` - OpsCenter, CTA primario
- **bio** (Pink): `hsl(340, 100%, 50%)` - BioDome, salud/hábitos
- **vault** (Gold): `hsl(43, 100%, 50%)` - The Vault, precios
- **red** (Red): `hsl(0, 73%, 55%)` - Acciones principales

### Tipografía

- **Display**: Orbitron - Títulos y encabezados
- **Mono**: JetBrains Mono - Código y texto técnico
- **Sans**: Inter - Texto del cuerpo

## 📄 Licencia

© 2026 SASbot01 Corp. Todos los derechos reservados.

---

**¡Listo para lanzar!** 🚀

Configura tus productos de Stripe y despliega a producción.
