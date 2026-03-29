# 📸 Guide - Ajouter votre photo de profil

## ✅ Comment ajouter votre photo

### Étape 1: Préparez votre image
- Téléchargez/recadrez une photo professionnelle
- **Format recommandé:** Carré (1000x1000px)
- **Formats acceptés:** JPG, PNG, WebP, GIF
- **Optimisation:** Compressez l'image (~100-200 KB max)

### Étape 2: Placez le fichier
1. Naviguez vers le dossier: `public/images/`
2. Renommez votre image en **`profile.jpg`** (ou votre format)
3. Placez-la dans ce dossier

### Étape 3: C'est fait! 🎉
Votre photo s'affichera automatiquement:
- **Page d'accueil (Hero)** - Grande taille (400x400px)
- **Page À propos** - Taille moyenne (300x300px)

## 🎨 Caractéristiques de l'affichage

Votre photo sera stylisée avec:
- ✨ **Bordure animée** - Gradient violet/bleu en rotation
- 🌟 **Effet de brillance** - Halo lumineux pulsant
- 🎬 **Animations fluides** - Entrée au chargement + hover
- 📱 **Responsive** - S'adapte à tous les écrans
- 🖼️ **Image cover** - Recadrée pour être carrée

## 📋 Chemins d'accès

```
portfolio/
├── public/
│   └── images/
│       ├── profile.jpg          ← VOTRE PHOTO À AJOUTER
│       ├── profile-placeholder.svg  (fallback)
│       └── README.md

```

## 🔧 Personnaliser l'apparence

Si vous voulez changer la taille ou les styles, modifiez:

**Fichier:** `src/components/ProfileImage.jsx`
```jsx
// Changer la taille dans les pages
<ProfileImage size="large" />    // Hero (400x400px)
<ProfileImage size="medium" />   // About (300x300px)
<ProfileImage size="small" />    // Autre (150x150px)
```

**Fichier:** `src/index.css` (lignes ~165-240)
```css
.profile-image-wrapper.profile-image-large {
  width: 400px;
  height: 400px;
}
/* Modifier les dimensions ici */
```

## 🎨 Personnaliser les couleurs

Dans `src/index.css`, trouvez la section `.profile-image-border` et modifiez:
```css
background: linear-gradient(135deg, var(--accent), #5f7bff) border-box;
/* #7c5cff (violet) et #5f7bff (bleu) - changez ces codes couleur */
```

## ✨ Effets disponibles

- **Bordure animée:** Change d'angle (6s)
- **Halo lumineux:** Pulse (3s)
- **Hover effect:** Scale + Y translation
- **Animation d'entrée:** Fade + scale

## ❌ Troubleshooting

**La photo ne s'affiche pas?**
1. Vérifiez que le fichier est bien nommé `profile.jpg`
2. Vérifiez qu'il est dans `public/images/`
3. Rafraîchissez la page (Ctrl+F5)
4. Vérifiez que le format de l'image est correct

**Elle s'affiche mal?**
1. Assurez-vous que c'est une image carrée
2. Vérifiez la résolution (min 400x400px)
3. Essayez de convertir en JPG

## 📞 Support

Si vous avez des questions, consultez:
- [README.md](../README.md) - Vue d'ensemble du portfolio
- Composant: `src/components/ProfileImage.jsx`
- Styles: `src/index.css` (lignes 165-240)
