# Internationalization (i18n) Documentation

## Overview

The EECalculator implements a comprehensive internationalization system supporting three languages:
- **Portuguese (pt-BR)** - Brazilian Portuguese (default)
- **English (en)** - English
- **Spanish (es)** - Spanish

## Architecture

### Core Files

1. **js/translations.js** - Main translation system
   - Contains all translation dictionaries for all three languages
   - Provides translation functions (`t()`, `changeLanguage()`, `translatePage()`)
   - Manages language persistence via localStorage

2. **index.html** - HTML markup with i18n attributes
   - Uses `data-i18n` attributes for text content translation
   - Uses `data-i18n-html` attributes for HTML content (formulas, rich text)
   - Uses `data-i18n-placeholder` attributes for input placeholders
   - Includes language selector dropdown

3. **js/calculations.js** - Calculator functions
   - All calculations are language-independent
   - Error and success messages are handled through the translation system

## How It Works

### 1. Translation Dictionary Structure

```javascript
const translations = {
    'pt-BR': {
        'key': 'Portuguese translation',
        'home': 'Início',
        'calculate': 'Calcular',
        // ... more keys
    },
    'en': {
        'key': 'English translation',
        'home': 'Home',
        'calculate': 'Calculate',
        // ... more keys
    },
    'es': {
        'key': 'Spanish translation',
        'home': 'Inicio',
        'calculate': 'Calcular',
        // ... more keys
    }
};
```

### 2. Core Functions

#### t(key)
Retrieves a translation for a given key in the current language.

```javascript
t('home') // Returns the translation for 'home' in the current language
```

**Fallback chain:**
1. Current language translation
2. Portuguese translation (default)
3. The key itself (if not found)

#### changeLanguage(lang)
Changes the current language and reloads the page to apply translations.

```javascript
changeLanguage('en');  // Switch to English
changeLanguage('es');  // Switch to Spanish
changeLanguage('pt-BR'); // Switch to Portuguese
```

The function:
- Sets the current language variable
- Stores the selection in localStorage
- Reloads the page to apply translations

#### translatePage()
Translates all elements on the page based on their `data-i18n` attributes.

Called automatically when:
- DOM is ready (DOMContentLoaded)
- Page is first loaded
- Language is changed

## Using i18n in HTML

### 1. Text Content Translation

Use `data-i18n` attribute for element text content:

```html
<h1 data-i18n="title">Calculadora para Estudantes, Técnicos e Engenheiros</h1>
<p data-i18n="subtitle">Calcule variáveis e parâmetros elétricos com precisão</p>
<button data-i18n="calculate">Calcular</button>
```

### 2. HTML Content Translation (Formulas, Rich Text)

Use `data-i18n-html` attribute for formulas or HTML content:

```html
<div data-i18n-html="rc-formula">
    <!-- Original Portuguese formula will be replaced with translated version -->
</div>
```

Translation example:
```javascript
'rc-formula': 'Fórmula: Vc(t) = V(1 - e^(-t/τ)) onde τ = RC<br>VL(t) = V - Vc(t)'
```

### 3. Input Placeholder Translation

Use `data-i18n-placeholder` attribute for input field placeholders:

```html
<input type="number" data-i18n-placeholder="enter-value" placeholder="Enter value">
```

### 4. Select Options Translation

Use `data-i18n` attribute on option elements:

```html
<select>
    <option value="pt-BR" data-i18n="portuguese">Português</option>
    <option value="en" data-i18n="english">English</option>
    <option value="es" data-i18n="spanish">Español</option>
</select>
```

## Language Selector

The language selector is implemented in the header as a dropdown:

```html
<select onchange="changeLanguage(this.value)" style="...">
    <option value="pt-BR" selected>Português</option>
    <option value="en">English</option>
    <option value="es">Español</option>
</select>
```

## Translation Keys

### Translation Coverage

The system includes 470+ translation keys covering:

1. **Navigation** - Menu items and page links
2. **UI Elements** - Buttons, labels, headings
3. **Formulas** - Mathematical equations and descriptions
4. **Error Messages** - Input validation errors
5. **Success Messages** - Calculation completion confirmations
6. **Electrical Engineering Terms** - Technical terminology
7. **Descriptive Text** - Explanations and instructions
8. **Parameters** - Input field labels

### Adding New Translations

To add a new translatable string:

1. **Add the key to all three language dictionaries in translations.js:**

```javascript
const translations = {
    'pt-BR': {
        // ... existing keys
        'new-key': 'Tradução em português',
    },
    'en': {
        // ... existing keys
        'new-key': 'Translation in English',
    },
    'es': {
        // ... existing keys
        'new-key': 'Traducción en español',
    }
};
```

2. **Use the key in HTML:**

```html
<element data-i18n="new-key">Default text in Portuguese</element>
```

### Best Practices for Translation Keys

1. **Naming Convention**
   - Use kebab-case (lowercase with hyphens): `my-key`, `error-invalid-value`
   - Be descriptive: `power-factor-label` not `pf-label`
   - Group related keys: `error-*`, `success-*`, `formula-*`

2. **Consistency**
   - Ensure all three language translations maintain the same meaning
   - Use consistent terminology across all languages
   - Keep punctuation consistent (periods, colons, etc.)

3. **Translation Quality**
   - Use proper electrical engineering terminology
   - Maintain professional tone
   - Ensure translations are accurate and culturally appropriate

## Language Persistence

The selected language is automatically saved to the browser's localStorage:

```javascript
localStorage.setItem('language', lang);
```

This means:
- When users return to the site, their language preference is remembered
- The language persists across browser sessions
- The default language is Portuguese (pt-BR) if no preference is saved

## Current Language Status

- **Portuguese (pt-BR)**: ~470+ keys (Complete)
- **English (en)**: ~470+ keys (Complete)
- **Spanish (es)**: ~470+ keys (Complete)

All translation keys are present in all three languages.

## Translation Statistics

As of current build:
- Total unique keys: 470+
- Coverage pt-BR: 100%
- Coverage en: 100%
- Coverage es: 100%

## Supported Pages and Features

The i18n system covers all 19+ calculator pages:

1. Resistance (Series/Parallel) ✓
2. Capacitance (Series/Parallel) ✓
3. Inductance (Series/Parallel) ✓
4. RC Circuit (Transient Analysis) ✓
5. RL Circuit (Transient Analysis) ✓
6. Voltage Divider ✓
7. Current Divider ✓
8. RC Filters (Low-Pass, High-Pass) ✓
9. Reactances (Capacitive, Inductive) ✓
10. Impedance Conversion ✓
11. Delta-Star Conversion ✓
12. Power Factor Correction ✓
13. Transformers ✓
14. Matrix Determinants ✓
15. Digital Conversion (Binary, Decimal, Hex) ✓
16. RLC Series Circuit ✓
17. RLC Parallel Circuit ✓
18. Solar Panels ✓
19. Energy Consumption ✓
20. Derivatives, Integrals & Transforms ✓

## Testing the i18n System

### Manual Testing

1. Load the application in a browser
2. Use the language dropdown in the header to switch languages
3. Verify all page content updates correctly
4. Test switching back and forth between languages
5. Verify calculator functions work in each language
6. Check localStorage shows the selected language

### Automated Testing Checklist

- [ ] Language selector changes selected value
- [ ] Page title updates when language changes
- [ ] All menu items translate
- [ ] All form labels translate
- [ ] Error messages display in current language
- [ ] Success messages display in current language
- [ ] Calculations still work correctly in all languages
- [ ] Language preference persists after reload
- [ ] Formulas and technical descriptions display correctly

## Troubleshooting

### Text Not Translating

1. Verify the key exists in translations.js
2. Check spelling of the key matches exactly
3. Ensure the HTML element has the `data-i18n` attribute
4. Verify the page is using the correct language selector

### Language Not Changing

1. Check browser console for JavaScript errors
2. Verify localStorage is enabled
3. Clear localStorage and try again:
   ```javascript
   localStorage.clear();
   ```
4. Try a different browser

### Missing Translation

1. Check if the key exists in all three language objects
2. Add the missing translation to translations.js
3. Reload the page

## Browser Compatibility

The i18n system uses standard JavaScript features and is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Opera 47+

## Future Enhancements

Possible improvements to the i18n system:

1. **Dynamic Language Switching** - Translate without page reload
2. **Additional Languages** - Support for more languages
3. **RTL Support** - Right-to-left language support
4. **Translation Management UI** - Admin interface for managing translations
5. **Export/Import** - Tools for managing translation files

## Support and Contribution

For translation improvements or to add new languages:

1. Submit translations to `pregis@ifce.edu.br`
2. Ensure translations maintain technical accuracy
3. Include all 470+ keys
4. Follow the naming conventions

---

**Last Updated**: 2024
**Version**: 1.0
**Supported Languages**: Portuguese, English, Spanish
