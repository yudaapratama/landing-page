# How to Customize Your Portfolio

Edit `config.js` in any text editor. Save it, then refresh `index.html` in your browser. That's it.

---

## Quick Start

1. Open `config.js`
2. Change the values between quotes `' '` and inside brackets `[ ]`
3. Save the file
4. Open `index.html` in your browser

---

## What Each Field Does

### `name`
Your full name. Appears in large type at the top of the page.

```
name: 'Your Name',
```

### `title`
Your role or what you do. Appears below your name in the accent color.

```
title: 'Designer & Developer',
```

### `tagline`
A one-liner about you. Keep it under ~100 characters.

```
tagline: 'I make things that live on screens.',
```

### `bio`
A short paragraph about yourself. You can use `\n` for line breaks, or write across multiple lines using backtick quotes (`` ` ``).

```
bio: `I am a designer based in Portland.
I have been making websites for eight years.`,
```

### `avatar_url`
Path to your photo. Place the image file in the `images/` folder next to `index.html`, then write:

```
avatar_url: 'images/your-photo.jpg',
```

If you leave it empty (`''`), your initials will show instead.

### `social_links`
A list of your social profiles. Add or remove entries:

```
social_links: [
  { platform: 'GitHub',   url: 'https://github.com/yourname' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
],
```

Platform names appear as text on the page. You can use any name.

### `accent_color`
The highlight color for links and interactive elements. Use a hex color code:

```
accent_color: '#b84a3b',
```

**Best results come from warm tones:** terracotta, rust, burnt orange, deep gold, warm teal, or muted plum. Avoid neons and very light pastels — they won't have enough contrast.

### `projects`
Your work samples. Each project has:

- `title` — Project name
- `description` — 1-3 sentences about the project
- `image_url` — Path to a screenshot or photo (or leave empty `''`)
- `link_url` — Where the project lives online (or leave empty `''`)
- `alt` — Description of the image for accessibility (optional but helpful)

Example:

```
projects: [
  {
    title: 'Project Name',
    description: 'What this project is about.',
    image_url: 'images/project.jpg',
    link_url: 'https://example.com',
    alt: 'Screenshot of the project',
  },
],
```

You can have 1 project or up to 8. Add or remove entries from the array.

### `contact_email`
Your email address. Visitors click this to message you.

```
contact_email: 'hello@yourdomain.com',
```

### `footer_text`
Optional. If you want something different from the default footer, write it here:

```
footer_text: '© 2026 Your Name. All rights reserved.',
```

Leave it empty (`''`) and the page will auto-generate: "© [year] [name]. Crafted with care."

---

## Adding Images

1. Create a folder called `images` next to `index.html`
2. Put your images inside it
3. Reference them in `config.js` like: `'images/your-file.jpg'`

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

Recommended sizes:
- **Avatar:** 400x400px or larger (square)
- **Project images:** 1200x800px or larger (3:2 ratio looks best)

---

## Changing the Accent Color

The accent color affects links, hover states, and small decorative elements. Try these:

| Color | Hex | Vibe |
|---|---|---|
| Terracotta | `#b84a3b` | Warm, earthy |
| Rust | `#c1553c` | Bold, grounded |
| Burnt orange | `#c96b3e` | Energetic |
| Deep gold | `#b8863c` | Refined |
| Warm teal | `#3a7a7a` | Calm, cool |
| Muted plum | `#7a4a6a` | Creative |

After changing the accent color, preview both **light mode** and **dark mode** to make sure it looks good in both. If it feels too faint in dark mode, try a slightly lighter or more saturated color.

---

## Dark / Light Mode

The page automatically matches your system preference (dark or light mode). You can click the sun/moon icon in the top-right corner to toggle manually. Your choice is remembered for next time.

No configuration needed — this works out of the box.

---

## Troubleshooting

**Nothing changed after editing config.js?**
- Make sure you saved the file
- Refresh `index.html` in your browser (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)
- Check for missing quotes or commas — a single syntax error can break everything

**Image not showing?**
- Verify the file exists in your `images/` folder
- Check that the path in `config.js` is correct (case-sensitive)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

**Something looks broken?**
- Open your browser's developer console (F12 → Console tab)
- Any red error messages will point to the problem
- Most issues are a missing quote `'` or comma `,` in `config.js`

---

## Need Help?

If you get stuck, check that:
1. Every string has opening and closing quotes `'...'`
2. Every item in an array is separated by a comma `,`
3. The last item in an array or object does NOT have a trailing comma (though modern browsers forgive this)

Still stuck? Paste your `config.js` content into a JSON validator or ask a friend who codes.
