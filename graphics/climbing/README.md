# Climbing photo albums

The gallery on `climbing.html` is generated from these folders by
[`build_climbing.py`](../../build_climbing.py). You do **not** edit the gallery
HTML by hand.

## Add or change an album

1. Make a folder here, one per album: `graphics/climbing/<album-name>/`
2. Drop the photos in it (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`).
3. Add an `album.txt` (see below).
4. Add the folder name to `order.txt` (see below) — usually at the top.
5. From the repo root, run:

   ```
   python build_climbing.py
   ```

   That rewrites the gallery block in `climbing.html`. Commit the result.

## `order.txt` — which albums show, and in what order

One folder name per line. **Top line = top of the page.** Only folders listed here
are displayed, which makes this the single knob for the page:

- **Add an album to the top:** put its folder name on the first line.
- **Reorder:** move lines up or down.
- **Hide an album:** delete its line. The folder and photos stay on disk untouched —
  they just don't appear until you add the line back.

Lines starting with `#` are comments. If `order.txt` is ever missing, every folder is
shown alphabetically (and the script warns you).

## `album.txt`

Plain text. Either just the album's title on one line, or `key: value` lines
(all keys optional):

```
title: Moab, Wall Street. May 2026.   # shown under the cover tile
cover: hero.jpg                        # cover image (default: a cover.* file, else 1st)
photos: hero.jpg, sunset.jpg           # optional explicit order; unlisted photos
                                       #   are appended in filename order
```

Album position on the page is set by `order.txt` (above), not here. If you omit
`photos:`, photos appear cover-first, then sorted by filename — so a quick way to
control order is to prefix filenames: `01_hero.jpg`, `02_sunset.jpg`.

## Per-photo captions / alt text (optional)

Next to a photo `hero.jpg`, add `hero.txt`:

```
caption: Camp, night one.              # the caption shown under the photo
alt: Tents below the wall at dusk.     # screen-reader description (a11y)
```

- A sidecar with only `alt:` gives alt text but **no** visible caption.
- A sidecar that's just plain text (no `caption:`/`alt:`) is used as both.
- No sidecar → the photo has no caption and falls back to the album title for alt.
  Prefer adding a real `alt:` — it's what screen-reader users hear.

## Notes

- Files starting with `OLD` (e.g. `OLDhero.jpg`) and dotfiles are ignored, so your
  local backups never show up on the site.
- Sidecars match by base name, so keep photo base names unique within a folder
  (don't have both `hero.jpg` and `hero.png`).
- The script reads the real files on disk, so filename case (e.g. `.JPG`) is always
  correct on the case-sensitive GitHub Pages server.
