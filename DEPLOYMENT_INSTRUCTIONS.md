# 🚀 Instrucciones para Subir a GitHub y Vercel

## ✅ Estado Actual

Todo está listo para deployment:
- ✅ Links de Stripe configurados
- ✅ Git inicializado
- ✅ Commit inicial creado
- ✅ Remote configurado

## 📤 Paso 1: Subir a GitHub

Ejecuta este comando para subir el código:

```bash
cd /Users/s4sf/Downloads/landing-page-main-main
git push -u origin main
```

**Nota:** Si te pide autenticación, usa tu Personal Access Token de GitHub (no la contraseña).

## 🌐 Paso 2: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New Project"**
3. Importa el repositorio: `SASbot01/game-of-life-landingmain`
4. Configura el proyecto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click en **"Deploy"**

## 🔗 Links de Stripe Configurados

- **Mensual ($37/mo)**: `https://buy.stripe.com/test_14k7wO3Xv5mF3Oo5kk`
  - Product ID: `prod_Tm7zpWRZFcUizE`

- **Lifetime ($333)**: `https://buy.stripe.com/test_28o2cugQd5mF0Ca145`
  - Product ID: `prod_Tm80L71SULGIde`

## 📋 Verificación Post-Deployment

Después del deployment en Vercel, verifica:

1. ✅ Landing page carga correctamente
2. ✅ Botón de LOGIN redirige a `https://gol.blackwolfsec.io/auth`
3. ✅ Botón "Lock In $37/mo" abre el checkout de Stripe (mensual)
4. ✅ Botón "Claim Sovereignty" abre el checkout de Stripe (lifetime)
5. ✅ Toggle de idioma funciona (EN/ES)
6. ✅ Todas las páginas funcionan (/terms, /privacy)

## 🔧 Comandos Útiles

```bash
# Ver estado de git
git status

# Ver commits
git log --oneline

# Ver remote configurado
git remote -v

# Rebuild local
npm run build

# Preview local
npm run preview
```

## 📝 Notas Importantes

- Los links de Stripe están en **modo test** (`test_`)
- Recuerda cambiarlos a producción cuando estés listo
- El servidor local sigue corriendo en `http://localhost:5173/`

---

**¡Todo listo para deployment!** 🎉
