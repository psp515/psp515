<!--
  README template — psp515
  ------------------------
  Rule: the README is a landing card, not a manual. Keep it under ~60 lines.
  Anything longer than a paragraph goes to docs/ (see "Docs" below) and is
  linked from here.

  Fill in: {{REPO}} {{TAGLINE}} {{ONE_PARAGRAPH}} {{RUN_CMD}}
  Owner is psp515 throughout. Delete any section that has nothing to say —
  an empty section is worse than a missing one.
-->

<div align="center">

# {{REPO}}

{{TAGLINE}}

[![last commit](https://img.shields.io/github/last-commit/psp515/{{REPO}})](https://github.com/psp515/{{REPO}}/commits)
[![stars](https://img.shields.io/github/stars/psp515/{{REPO}})](https://github.com/psp515/{{REPO}}/stargazers)
[![issues](https://img.shields.io/github/issues/psp515/{{REPO}})](https://github.com/psp515/{{REPO}}/issues)
[![license](https://img.shields.io/github/license/psp515/{{REPO}})](LICENSE)

<!-- Docs site, only once it exists. Otherwise delete this line. -->
[**Docs →**](https://psp515.github.io/{{REPO}}/)

</div>

## What it is

{{ONE_PARAGRAPH}} <!-- 2–4 sentences. What it does, who it's for, why it exists. -->

Built with:
![](https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white)
![](https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white)
![](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
<!-- 3–6 badges, the ones a reader actually needs to recognise. Not a résumé. -->

## Quick start

```
git clone https://github.com/psp515/{{REPO}}.git
cd {{REPO}}
{{RUN_CMD}}
```

Anything beyond this — prerequisites, configuration, environment variables —
lives in [docs/getting-started.md](docs/getting-started.md).

## Docs

| | |
|---|---|
| [Getting started](docs/getting-started.md) | Install, configure, run. |
| [Usage](docs/usage.md) | Commands, API, examples. |
| [Architecture](docs/architecture.md) | How it is put together, and why. |
| [Roadmap](docs/roadmap.md) | What is planned, what is dropped. |

<!--
  Two ways to run docs/, pick one per repo:

  1. Plain Markdown (default) — docs/*.md, links above resolve on GitHub.
     Zero setup. Use this unless the project needs more.

  2. Astro site — same as psp515/psp515: docs/ is an Astro project deployed
     to GitHub Pages by .github/workflows/deploy-docs.yml. Add the
     "Docs →" link at the top and point the table rows at the live URLs.

  If a section has no docs page, drop its row instead of linking a stub.
-->

## License

MIT — see [LICENSE](LICENSE).

---

<div align="center">
  <a href="https://github.com/psp515"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/lukasz-psp515-kolber/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</div>
