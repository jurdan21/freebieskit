# Typography Tokens - Geist Font

Token typography untuk font Geist dengan ukuran dan line-height yang telah ditentukan.

## Usage

### Tailwind Classes

```jsx
// Headings
<h1 className="text-h1 font-geist">Heading 1</h1>
<h2 className="text-h2 font-geist">Heading 2</h2>
<h3 className="text-h3 font-geist">Heading 3</h3>
<h4 className="text-h4 font-geist">Heading 4</h4>
<h5 className="text-h5 font-geist">Heading 5</h5>
<h6 className="text-h6 font-geist">Heading 6</h6>

// Body Text
<p className="text-description font-geist">Description text</p>
<p className="text-caption font-geist">Caption text</p>
```

### CSS Custom Properties

```css
/* Menggunakan CSS variables */
.heading-1 {
  font: var(--font-geist-h1);
}

.heading-2 {
  font: var(--font-geist-h2);
}

.description {
  font: var(--font-geist-description);
}
```

## Token Specifications

| Token | Size | Line Height | Tailwind Class | CSS Variable |
|-------|------|-------------|----------------|--------------|
| H1 | 72px | 84px | `text-h1` | `--font-geist-h1` |
| H2 | 52px | 64px | `text-h2` | `--font-geist-h2` |
| H3 | 48px | 56px | `text-h3` | `--font-geist-h3` |
| H4 | 28px | 40px | `text-h4` | `--font-geist-h4` |
| H5 | 24px | 36px | `text-h5` | `--font-geist-h5` |
| H6 | 20px | 32px | `text-h6` | `--font-geist-h6` |
| Description | 18px | 28px | `text-description` | `--font-geist-description` |
| Caption | 14px | 24px | `text-caption` | `--font-geist-caption` |

## Font Weight

Semua token menggunakan `font-weight: 400` (normal) secara default. Untuk mengubah weight, tambahkan class Tailwind:

```jsx
<h1 className="text-h1 font-geist font-bold">Bold Heading</h1>
<p className="text-description font-geist font-light">Light description</p>
```

## Responsive Usage

```jsx
// Responsive typography
<h1 className="text-h3 sm:text-h2 lg:text-h1 font-geist">
  Responsive Heading
</h1>
``` 