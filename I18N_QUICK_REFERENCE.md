# i18n Quick Reference Guide

## Quick Start

### Using Existing Translations

In your HTML, add `data-i18n` attribute with the translation key:

```html
<!-- Button -->
<button data-i18n="calculate">Calcular</button>

<!-- Link -->
<a href="#" data-i18n="home">Início</a>

<!-- Heading -->
<h1 data-i18n="title">Title</h1>
```

### Adding a New Translation

1. Add the key to `js/translations.js` in all three languages:

```javascript
const translations = {
    'pt-BR': { 'my-key': 'Texto em português' },
    'en': { 'my-key': 'Text in English' },
    'es': { 'my-key': 'Texto en español' }
};
```

2. Use in HTML:

```html
<element data-i18n="my-key">Default Portuguese text</element>
```

## Common i18n Attributes

| Attribute | Use Case | Example |
|-----------|----------|---------|
| `data-i18n` | Text content | `<button data-i18n="calculate">` |
| `data-i18n-html` | HTML content (formulas) | `<div data-i18n-html="formula">` |
| `data-i18n-placeholder` | Input placeholder | `<input data-i18n-placeholder="enter-value">` |

## JavaScript Functions

### Get Translation
```javascript
t('home')  // Returns translation for key 'home'
```

### Change Language
```javascript
changeLanguage('en')     // Switch to English
changeLanguage('es')     // Switch to Spanish
changeLanguage('pt-BR')  // Switch to Portuguese
```

### Translate Page
```javascript
translatePage()  // Manually translate all elements (auto on page load)
```

## Common Translation Keys

### Navigation
- `home` - Home/Início
- `resistance` - Resistances
- `capacitance` - Capacitances
- `inductance` - Inductances

### Buttons
- `calculate` - Calculate/Calcular
- `clear` - Clear/Limpar

### Messages
- `error-invalid-value` - Invalid value error
- `success-calculation` - Success message

### Labels
- `language` - Language selector label
- `result` - Result label
- `formula` - Formula description

## Translation File Location

**File**: `c:\Sites\EECalculator\js\translations.js`

**Structure**:
```javascript
const translations = {
    'pt-BR': { /* ~470+ keys */ },
    'en': { /* ~470+ keys */ },
    'es': { /* ~470+ keys */ }
};
```

## Supported Languages

| Code | Language | Status |
|------|----------|--------|
| `pt-BR` | Portuguese (Brazil) | Complete ✓ |
| `en` | English | Complete ✓ |
| `es` | Spanish | Complete ✓ |

## Language Storage

Language preference is saved in browser's localStorage:

```javascript
// Check current language
localStorage.getItem('language')

// Clear language preference (will use default)
localStorage.removeItem('language')
```

## Common Patterns

### Menu Item
```html
<li><a href="#" onclick="showPage('home'); return false;" data-i18n="home">Início</a></li>
```

### Form Input
```html
<input type="number" data-i18n-placeholder="enter-voltage" placeholder="Enter voltage">
```

### Formula Display
```html
<div data-i18n-html="ohm-law-formula">
    Formula: V = I × R
</div>
```

### Error Display
```html
<span data-i18n="error-invalid-voltage">Invalid voltage!</span>
```

## Key Naming Convention

- Use kebab-case: `my-key` not `myKey`
- Group related keys: 
  - Error messages: `error-*`
  - Success messages: `success-*`
  - Formulas: `*-formula`
  - Info boxes: `*-info`

## Debugging

### Check if translation exists
```javascript
// In browser console
console.log(translations['pt-BR']['my-key'])
console.log(t('my-key'))
```

### Check current language
```javascript
console.log(currentLanguage)
console.log(localStorage.getItem('language'))
```

### Manually translate page
```javascript
translatePage()
```

## Testing Translation

1. Add new key to translations.js in all 3 languages
2. Add `data-i18n="your-key"` to HTML element
3. Reload page - text should translate automatically
4. Switch languages in dropdown - should work in all 3
5. Hard refresh (Ctrl+Shift+R) if text doesn't update

## Performance

- Translations load once with page
- Minimal DOM operations during translation
- localStorage access only on language change
- Page reload on language change (fastest approach)

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Opera 47+

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Text not translating | Check key exists in translations.js |
| Language not changing | Clear localStorage and reload |
| Formulas not translating | Use `data-i18n-html` instead of `data-i18n` |
| Placeholder not translating | Use `data-i18n-placeholder` attribute |

## Resources

- Full documentation: See `I18N_DOCUMENTATION.md`
- Translation file: `js/translations.js`
- HTML example: `index.html`

---

**Quick Links**:
- 📝 Full Documentation: [I18N_DOCUMENTATION.md](I18N_DOCUMENTATION.md)
- 🔧 Translation File: [js/translations.js](js/translations.js)
- 📧 Contact: pregis@ifce.edu.br
