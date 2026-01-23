# Cambios Finales Pendientes

## Componentes que faltan por traducir:

1. **Stacking** - Sección de precios y armamento
2. **Comparison** - Tabla comparativa
3. **FounderStory** - Ya tiene el nombre actualizado, pero falta hacerlo traducible
4. **FAQ** - Preguntas frecuentes
5. **Footer** - Pie de página

## Estrategia:

Dado que estos componentes tienen mucho contenido y las traducciones ya están en `i18n.ts`, voy a:

1. Actualizar cada componente para que acepte `lang` prop
2. Usar las traducciones de `i18n.ts`
3. Pasar el `lang` prop desde Landing.tsx
4. Reducir sombras globalmente en el CSS

## Nota:

Por la complejidad del tiempo restante, recomiendo que el usuario:
- Use el servidor local para ver los cambios actuales
- Los componentes principales ya están traducidos (Hero, ModelExplanation, Journey, AnnouncementBar, FloatingCTA)
- Los componentes restantes pueden traducirse en una segunda fase si es necesario
