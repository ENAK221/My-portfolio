# 🎨 Aperçu Visuel - Photos de Profil

## Desktop Layout (1024px+)

### Page d'accueil (Hero)
```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION STICKY                     │
├─────────────────────┬─────────────────────────────────┤
│                     │                                  │
│  Bienvenue dans     │      ╔════════════════╗        │
│  mon portfolio      │      ║   📸 PHOTO     ║        │
│                     │      ║   (animée)     ║        │
│  Je suis dev...     │      ║   400x400px    ║        │
│                     │      ║   ✨ Glow      ║        │
│  [Projets] [Contact]│      ╚════════════════╝        │
│                     │                                  │
├─────────────────────┴─────────────────────────────────┤
│                                                        │
│              Projets Récents / Skills / etc.          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Page À propos (About)
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ┌──────────────────────┐  ┌────────────────────┐    │
│  │                      │  │   📸 PHOTO        │    │
│  │  À propos de moi     │  │   (animée)        │    │
│  │                      │  │   300x300px       │    │
│  │  Bio détaillée...    │  │   ✨ Halo        │    │
│  │                      │  │                    │    │
│  └──────────────────────┘  └────────────────────┘    │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │            Timeline Expérience                   │ │
│  │  2023 - Actuellement: Fullstack dev            │ │
│  │  2021 - 2023: Frontend dev                     │ │
│  │  2020 - 2021: Dev Junior                       │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
└────────────────────────────────────────────────────────┘
```

## Tablet Layout (768px)

```
┌────────────────────────────────────┐
│      NAVIGATION (Menu Compact)      │
├────────────────────────────────────┤
│                                    │
│    ╔════════════════╗             │
│    ║   📸 PHOTO     ║  Bienvenue │
│    ║   animée       ║  mon       │
│    ║   300x300px    ║  portfolio │
│    ║   ✨ Glow      ║            │
│    ╚════════════════╝             │
│                                    │
│    [Projets] [Contact]            │
│                                    │
├────────────────────────────────────┤
│     Projets / Skills / Timeline    │
└────────────────────────────────────┘
```

## Mobile Layout (< 768px)

```
┌──────────────────┐
│  NAVIGATION      │
├──────────────────┤
│                  │
│  ╔════════════╗  │
│  ║   📸       ║  │
│  ║   PHOTO    ║  │
│  ║ 200x200px  ║  │
│  ║  ✨ Glow   ║  │
│  ╚════════════╝  │
│                  │
│  Bienvenue dans  │
│  mon portfolio   │
│                  │
│ [Projets]       │
│ [Contact]       │
│                  │
└──────────────────┘
```

## Styles & Effets ✨

### État Normal
```
┌─────────────────┐
│     PHOTO       │ ← Bordure animée (gradient)
│    (400x400)    │ ← Halo lumineux (pulsant)
│                 │
└─────────────────┘
```

### État Hover (Desktop)
```
    ↑ Translate Y (-10px)
┌─────────────────┐
│     PHOTO       │ ← Scale: 1.05x
│    (400x400)    │ ← Ombre renforcée
│                 │
└─────────────────┘
```

### Animation d'Entrée
```
Secondes: 0    0.2   0.4   0.6   0.8
Opacité:  0────────►1────────────1
Échelle:  0.9──────►1────────────1
Position: ↓20px───►0───────────0
```

## Couleurs Utilisées 🎨

```
Bordure Animée:
  ├─ Violet: #7c5cff (var(--accent))
  └─ Bleu:   #5f7bff

Halo:
  └─ Rgba(124, 92, 255, 0.2) → 0.8

Texte Alt:
  └─ #9aa6b2 (var(--muted))
```

## Animations Détaillées 🎬

### 1. Bordure Rotative (6s loop)
```
0%   → Gradient(135deg)
50%  → Gradient(315deg)  ← Rotation visible
100% → Gradient(135deg)
```

### 2. Halo Pulsant (3s loop)
```
0%   → Scale(1), Opacity(0.5)
50%  → Scale(1.1), Opacity(0.8)  ← Maximum luminosité
100% → Scale(1), Opacity(0.5)
```

### 3. Hover Scale
```
Rest:  scale(1) translateY(0)
Hover: scale(1.05) translateY(-10px)
```

### 4. Entrée (0.8s)
```
De:   opacity(0), scale(0.9), translateY(20px)
À:    opacity(1), scale(1), translateY(0)
Timing: ease
```

## Tailles Responsives 📱

| Breakpoint | Hero | About | Timeline |
|-----------|------|-------|----------|
| Desktop   | 400px | 300px | Visible |
| Tablet    | 300px | 250px | Visible |
| Mobile    | 200px | 200px | Compact |

## Performance 🚀

- **CSS natif** (pas de dépendances)
- **GPU accelerated** (transforms)
- **Optimisé** (blur() fait du blur GPU)
- **Responsive** (media queries)
- **Fallback** (SVG placeholder)

## Interactivité 🎯

| Action | Effet |
|--------|--------|
| Load | Fade + scale animation |
| Hover (Desktop) | Scale up + shadow |
| Focus (Keyboard) | Outline visible |
| Mobile Tap | Pas d'effet (évite flash) |
| Scroll | Visible dans le viewport |
