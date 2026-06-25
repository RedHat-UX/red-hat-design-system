# Red Hat Design System

[Documentation][docs], [design tokens][tokens], and [Web Components][elements] for building uniform experiences with the Red Hat brand.

## 🎨 For Designers

RHDS provides Figma libraries and subsystems to aid in your design work.

## 💻 For Developers

RHDS provides a collection of ready-made, framework-agnostic Web Components with Red Hat branding, user experience, accessibility, and style guidelines built in.

```html
<rh-card>
  <h2 slot="heading">Red Hat Branded Web Components</h2>
  <p>So you can focus more on your content or app, and less on implementation details.</p>
  <rh-cta slot="footer">
    <a href="https://ux.redhat.com">Read the Docs</a>
  </rh-cta>
</rh-card>
```

## LGTM Tradition

On this team, PR approvals come with a creative twist — reviewers leave a **backronym** for LGTM (four words starting with L, G, T, M). See [lgtms.md](docs/lgtms.md) for the full collection.

### Top 10 Leaderboard

| Author | Count |
|--------|-------|
| @adamjohnson | 114 |
| @zeroedin | 87 |
| @markcaron | 59 |
| @bennypowers | 32 |
| @hellogreg | 26 |
| @nikkimk | 15 |
| @marionnegp | 10 |
| @coreyvickery | 4 |
| @brianferry | 3 |
| @gradymcgee | 1 |

### Hall of Fame

- **"Leevee Geevee Teevee Meevee"** — @zeroedin
- **"lines géniales, tooltips magnifiques"** — @hellogreg
- **"Linux Ghouls Trick Mortals"** — @zeroedin
- **"Local Grandma Tramples Musician"** — @marionnegp
- **"Lucid groundhog; tiny meteorologist"** — @nikkimk

## Submodules

This repo uses a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for the AI guidelines content at `docs/ai-guidelines`, sourced from [project-felt/ai-guidelines](https://github.com/project-felt/ai-guidelines).

**Cloning:** include `--recurse-submodules` to pull the submodule content automatically:

```bash
git clone --recurse-submodules https://github.com/RedHat-UX/red-hat-design-system.git
```

If you've already cloned without it, run:

```bash
git submodule update --init
```

**Updating:** to pull the latest content from the ai-guidelines repo:

```bash
cd docs/ai-guidelines
git pull origin main
cd ../..
git add docs/ai-guidelines
git commit -m "chore: update ai-guidelines submodule"
```

## Contributions are Welcome

Would you like to contribute to the **documentation** or **design specs**? Read [the site contributing guide][contributing].  
Would you like to contribute to **component development**? Read [the developer contributing guide][development].

[docs]: https://ux.redhat.com
[tokens]: https://red-hat-design-tokens.netlify.app
[elements]: https://ux.redhat.com/elements/
[contributing]: https://github.com/RedHat-UX/red-hat-design-system/tree/main/CONTRIBUTING_DESIGN.md
[development]: https://github.com/RedHat-UX/red-hat-design-system/tree/main/CONTRIBUTING_DEV.md
