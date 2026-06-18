# 📸 GUÍA DE UBICACIÓN DE IMÁGENES
## Página de Ventas - 3 Picos de Dopamina (Español)

Este documento describe exactamente dónde debe colocar cada imagen en la página de ventas.

---

## 🎯 RESUMEN RÁPIDO

**Total de imágenes necesarias: 11**

1. Imagen de fondo del Hero
2. Gráfico de dopamina/cerebro
3. Efecto "50 Sombras de Grey"
4-6. Testimonios (3 imágenes)
7. App móvil/celular
8-10. Screenshots de conversaciones (3 imágenes)
11. Sello de garantía 30 días

---

## 📍 UBICACIONES DETALLADAS

### IMAGEN 1: Fondo del Hero
**Ubicación en el código:**
- **Archivo:** `style.css`
- **Línea:** Aproximadamente línea 240 (sección `.hero`)
- **Código actual:**
```css
.hero {
    /* ... otras propiedades ... */
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #667eea 100%);
    /* IMAGEN 1: Agregue aquí la imagen de fondo */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```

**Para reemplazar:**
```css
.hero {
    /* ... otras propiedades ... */
    background: linear-gradient(135deg, rgba(30, 60, 114, 0.8) 0%, rgba(42, 82, 152, 0.8) 50%, rgba(102, 126, 234, 0.8) 100%),
                url('ruta/a/tu/imagen-hero.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```

**Tipo de imagen recomendada:**
- Pareja feliz, hombre seguro y exitoso, o escena romántica
- Dimensiones: Mínimo 1920x1080px
- Formato: JPG o WebP

---

### IMAGEN 2: Gráfico de Dopamina/Cerebro
**Ubicación en el código:**
- **Archivo:** `index.html`
- **Sección:** Science Section (línea ~168)
- **Elemento:** `<div class="science-image">`

**Código actual:**
```html
<div class="science-image">
    <div class="image-placeholder">
        [IMAGEN 2: Gráfico de picos de dopamina / cerebro]
    </div>
</div>
```

**Para reemplazar:**
```html
<div class="science-image">
    <img src="ruta/a/tu/imagen-dopamina.jpg" alt="Gráfico de Picos de Dopamina">
</div>
```

**Tipo de imagen recomendada:**
- Gráfico de ondas de dopamina
- Ilustración de cerebro con actividad
- Infografía científica
- Dimensiones: 600x600px mínimo
- Formato: JPG, PNG o WebP

---

### IMAGEN 3: Efecto "50 Sombras de Grey"
**Ubicación en el código:**
- **Archivo:** `index.html`
- **Sección:** Error Section (línea ~206)
- **Elemento:** Dentro de `.column`

**Código actual:**
```html
<div class="image-placeholder">
    [IMAGEN 3: Efecto 50 Sombras de Grey]
</div>
```

**Para reemplazar:**
```html
<img src="ruta/a/tu/imagen-50-sombras.jpg" alt="Efecto 50 Sombras de Grey" style="width: 100%; border-radius: 15px;">
```

**Tipo de imagen recomendada:**
- Portada del libro 50 Sombras de Grey
- Mujer leyendo emocionada
- Pareja apasionada
- Dimensiones: 500x700px (vertical) o 700x500px (horizontal)
- Formato: JPG o WebP

---

### IMÁGENES 4, 5, 6: Testimonios (3 imágenes)
**Ubicación en el código:**
- **Archivo:** `index.html`
- **Sección:** Testimonials Section (líneas ~365-400)

**Código actual (se repite 3 veces):**
```html
<div class="testimonial-image">
    <div class="image-placeholder">
        [IMAGEN 4: Testimonio 1]
    </div>
</div>
```

**Para reemplazar:**
```html
<!-- Testimonio 1 -->
<div class="testimonial-image">
    <img src="ruta/a/tu/testimonio-1.jpg" alt="Testimonio Carlos M.">
</div>

<!-- Testimonio 2 -->
<div class="testimonial-image">
    <img src="ruta/a/tu/testimonio-2.jpg" alt="Testimonio Diego R.">
</div>

<!-- Testimonio 3 -->
<div class="testimonial-image">
    <img src="ruta/a/tu/testimonio-3.jpg" alt="Testimonio Andrés P.">
</div>
```

**Tipo de imágenes recomendadas:**
- Fotos de perfil de hombres (pueden ser stock photos)
- Hombres en situaciones sociales exitosas
- Variedad de edades y apariencias
- Dimensiones: 400x400px (cuadrado)
- Formato: JPG o WebP

---

### IMAGEN 7: App Móvil/Celular
**Ubicación en el código:**
- **Archivo:** `index.html`
- **Sección:** App Section (línea ~596)

**Código actual:**
```html
<div class="app-image">
    <div class="image-placeholder">
        [IMAGEN 7: App Arsenal Digital]
    </div>
</div>
```

**Para reemplazar:**
```html
<div class="app-image">
    <img src="ruta/a/tu/app-mockup.png" alt="App Arsenal Digital">
</div>
```

**Tipo de imagen recomendada:**
- Mockup de celular mostrando la app
- Pantalla de la interfaz de la app
- Diseño de UI/UX moderno
- Dimensiones: 600x1200px (vertical)
- Formato: PNG con transparencia o JPG

---

### IMÁGENES 8, 9, 10: Screenshots de Conversaciones (3 imágenes)
**Ubicación en el código:**
- **Archivo:** `index.html`
- **Sección:** Results Section (líneas ~755-775)

**Código actual (se repite 3 veces):**
```html
<div class="result-image">
    <div class="image-placeholder">
        [IMAGEN 8: Screenshot de conversación exitosa 1]
    </div>
</div>
```

**Para reemplazar:**
```html
<!-- Screenshot 1 -->
<div class="result-image">
    <img src="ruta/a/tu/chat-1.jpg" alt="Conversación Exitosa 1">
</div>

<!-- Screenshot 2 -->
<div class="result-image">
    <img src="ruta/a/tu/chat-2.jpg" alt="Conversación Exitosa 2">
</div>

<!-- Screenshot 3 -->
<div class="result-image">
    <img src="ruta/a/tu/chat-3.jpg" alt="Conversación Exitosa 3">
</div>
```

**Tipo de imágenes recomendadas:**
- Screenshots de WhatsApp o Instagram
- Conversaciones que muestren éxito
- Mensajes de mujeres interesadas
- Dimensiones: 400x800px (vertical, formato móvil)
- Formato: JPG o PNG

---

### IMAGEN 11: Sello de Garantía 30 Días
**Ubicación en el código:**
- **Archivo:** `index.html`
- **Sección:** Guarantee Section (línea ~922)

**Código actual:**
```html
<div class="guarantee-badge">
    <div class="image-placeholder">
        [IMAGEN 11: Sello de Garantía 30 Días]
    </div>
</div>
```

**Para reemplazar:**
```html
<div class="guarantee-badge">
    <img src="ruta/a/tu/garantia-30-dias.png" alt="Garantía de 30 Días">
</div>
```

**Tipo de imagen recomendada:**
- Badge/sello circular o escudo
- Texto: "Garantía 30 Días" o "100% Satisfacción"
- Colores: Verde, dorado o azul
- Dimensiones: 400x400px (cuadrado)
- Formato: PNG con transparencia

---

## 🎨 CÓMO GENERAR IMÁGENES

### Opción 1: Usar Stock Photos
**Sitios recomendados (gratuitos):**
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)

### Opción 2: Crear con IA
Puedes pedirme que genere las imágenes con el comando:
```
"Genera una imagen de [descripción] para [ubicación]"
```

### Opción 3: Diseñar en Canva
- Canva (canva.com) - Gratis con templates

---

## 📁 ESTRUCTURA DE CARPETAS RECOMENDADA

Organiza tus imágenes en una carpeta:

```
OFERTA RELACIONAMENTO ESPANHOL TESTE/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── hero-background.jpg          [IMAGEN 1]
│   ├── dopamina-grafico.png         [IMAGEN 2]
│   ├── 50-sombras.jpg               [IMAGEN 3]
│   ├── testimonio-1.jpg             [IMAGEN 4]
│   ├── testimonio-2.jpg             [IMAGEN 5]
│   ├── testimonio-3.jpg             [IMAGEN 6]
│   ├── app-mockup.png               [IMAGEN 7]
│   ├── chat-1.jpg                   [IMAGEN 8]
│   ├── chat-2.jpg                   [IMAGEN 9]
│   ├── chat-3.jpg                   [IMAGEN 10]
│   └── garantia-30-dias.png         [IMAGEN 11]
└── README_IMAGENES.md
```

**Rutas en el código serían:**
```html
<img src="images/nombre-imagen.jpg">
```

O en CSS:
```css
background-image: url('images/nombre-imagen.jpg');
```

---

## ✅ CHECKLIST

Marca cuando hayas colocado cada imagen:

- [ ] IMAGEN 1: Fondo del Hero
- [ ] IMAGEN 2: Gráfico de dopamina
- [ ] IMAGEN 3: Efecto 50 Sombras
- [ ] IMAGEN 4: Testimonio 1
- [ ] IMAGEN 5: Testimonio 2
- [ ] IMAGEN 6: Testimonio 3
- [ ] IMAGEN 7: App móvil
- [ ] IMAGEN 8: Chat 1
- [ ] IMAGEN 9: Chat 2
- [ ] IMAGEN 10: Chat 3
- [ ] IMAGEN 11: Garantía 30 días

---

## 🚀 PRÓXIMOS PASOS

1. **Consigue o genera las 11 imágenes**
2. **Crea la carpeta `images/` en tu proyecto**
3. **Coloca todas las imágenes en esa carpeta**
4. **Edita los archivos HTML y CSS** según las instrucciones arriba
5. **Prueba la página** abriendo `index.html` en tu navegador
6. **Optimiza las imágenes** (usa TinyPNG.com para reducir tamaño)

---

## 💡 TIPS IMPORTANTES

### Optimización de Imágenes:
- **Tamaño máximo:** 500KB por imagen
- **Formato recomendado:** WebP (mejor compresión)
- **Alternativa:** JPG con 80-85% de calidad

### SEO y Accesibilidad:
- Siempre usa el atributo `alt=""` descriptivo
- Nombres de archivo descriptivos (ej: `testimonio-carlos-mexico.jpg`)

### Performance:
- Considera usar lazy loading para imágenes
- Usa responsive images con `srcset` si es necesario

---

## 🆘 AYUDA RÁPIDA

**Si una imagen no aparece:**
1. Verifica la ruta del archivo
2. Revisa que el nombre sea exacto (case-sensitive)
3. Asegúrate de que la imagen esté en la carpeta correcta
4. Abre la consola del navegador (F12) para ver errores

**¿Necesitas que genere las imágenes?**
Solo pídeme: "Genera [IMAGEN X] para la página"

---

## 📞 CONTACTO

Si tienes dudas sobre dónde colocar alguna imagen específica, ¡solo pregunta!

---

**Última actualización:** Enero 2026
**Versión:** 1.0
