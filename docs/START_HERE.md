# Start here — GitHub + Cloud Agents

One-time setup, then every project works the same way.

---

## The system (3 parts)

| Part | Repo | What it does |
|------|------|--------------|
| **Hub** | `karasu-kai/admin` | Showcase site + shared spec PDFs. Agents update links here. |
| **Projects** | one repo each | Real code lives here. Agents build here. |
| **Agents** | Cursor Cloud | You pick a repo, describe the task, agent codes and opens PRs. |

---

## One-time setup (do today)

### 1. Merge the hub PR

Open [PR #5 — Portfolio hub](https://github.com/karasu-kai/admin/pull/5) → **Merge pull request**.

This puts the showcase site and your spec docs in the right folders.

### 2. Create project repos (browser only)

Go to [github.com/new](https://github.com/new) for each name below.  
Public · check **Add a README** · Create.

**Do these first (priority order):**

| # | Repo name | Why now |
|---|-----------|---------|
| 1 | `geo-met` | You have zipped code ready |
| 2 | `neohawk` | Specs already uploaded to hub |
| 3 | `kodoco` | Code stuck on an admin branch |

**Do later when you have code:**

`aerotech-industries` · `yatagarasu` · `stock-order-collation` · `testplatform`

### 3. Upload Geo-Met zip

1. Open [github.com/karasu-kai/geo-met](https://github.com/karasu-kai/geo-met) (after you create it)
2. **Add file → Upload files**
3. Unzip on your Mac first, then drag **all files/folders** into GitHub
4. Commit message: `Initial Geo-Met codebase`
5. **Commit changes**

### 4. Ignore `geo-met-beta`

That repo is an empty stub. Use **`geo-met`** going forward.

---

## How to use Cloud Agents (every time)

### Rule: one agent = one repo = one task

| Task | Open agent on repo |
|------|-------------------|
| Build Geo-Met map UI | `karasu-kai/geo-met` |
| Fix Huddle Up bug | `karasu-kai/huddleup` |
| Update portfolio links | `karasu-kai/admin` |
| NeoHawk smart contract | `karasu-kai/neohawk` |

### In Cursor

1. **Agents** tab (or Cloud Agent)
2. **Repository:** pick the project repo (e.g. `geo-met`)
3. **Message:** be specific — e.g. *"Read the uploaded code and docs/portfolio specs in admin. Build the Leaflet map home screen from the UI blueprint."*
4. Agent works on a branch → opens a PR → you review and merge

### What agents CAN access

- Everything **in the repo** you selected
- GitHub (push branches, open PRs)
- They **cannot** read files on your Mac Desktop

### What agents CANNOT do (you do this in browser)

- Create new GitHub repos (you create at github.com/new)
- Upload your zip (you use Upload files on GitHub)

---

## Your checklist

Copy and tick off:

```
[ ] Merge PR #5 on admin
[ ] Create geo-met repo on GitHub
[ ] Upload Geo-Met zip to geo-met repo
[ ] Start Cloud Agent on geo-met: "Audit uploaded code and build from specs"
[ ] (Optional) Create neohawk, kodoco repos
[ ] (Optional) Migrate admin branch code into kodoco / yatagarasu / etc.
```

---

## Where things live

| Content | Location |
|---------|----------|
| Geo-Met / NeoHawk PDF specs | `admin` → `docs/portfolio/` |
| Geo-Met source code | `geo-met` repo (after upload) |
| Portfolio showcase site | `admin` → run `npm run dev` |
| Live Huddle Up app | `huddleup` repo |

---

## Stuck?

Reply in the agent with:

- **"geo-met uploaded"** — agent audits your zip and starts building
- **"created geo-met repo"** — agent walks you through upload step
- **"merge PR 5"** — agent handles the merge if you want

No terminal required for any of the setup steps above.
