# Chase Loveless: Engineering Portfolio

Static site (HTML/CSS/JS, no build step).

```
index.html   style.css   script.js
images/      docs/       video/
```

## 1. Run it locally (localhost)

From inside this folder:

```
python3 -m http.server 8000
```

Open http://localhost:8000. Stop with Ctrl+C.

## 2. Publish free on GitHub Pages

1. On github.com, create a **public** repo named `<your-github-username>.github.io`.
2. In this folder:

```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```

3. In the repo: Settings > Pages > Source: "Deploy from a branch" > `main` / `(root)` > Save.
4. The site goes live at `https://<your-github-username>.github.io` in about a minute.

## 3. Updating it

- **Photos:** drop images in `images/` (JPG, under about 1.5 MB each) and replace a
  `<div class="ph">Photo coming soon</div>` block with
  `<img src="images/your-photo.jpg" alt="describe it" />`.
- **Resume:** add `resume.pdf` and uncomment the Resume button in `index.html`.
  Make sure that version doesn't contain your phone number.
- After any edit: `git add . && git commit -m "Update" && git push`.
