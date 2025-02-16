# 🚀 Monorepo Starter

A modern monorepo boilerplate that supports:

- 🔄 Front-end and back-end separation
- 📦 Synchronized API types via contracts
- 🐳 Docker build support for each app in monorepo
- 🧪 Template of custom eslint rule for your needs
- ⚛️ Micro frontend/services for deployment and testing

## ⚡ Tech Stack

**Core Technologies**

| Category     | Technologies        |
| ------------ | ------------------- |
| Language     | TypeScript, Node.js |
| Build Tools  | Turborepo, Vite     |
| API Layer    | oRPC                |
| Code Quality | ESLint, Prettier    |

**Frontend Stack**
| Category | Technologies |
| ---------- | ------------------------ |
| Framework | React 19 |
| API Client | React Query, ORPC Client |
| Styling | Tailwind CSS |

## 📁 Project Structure

```
.
├── apps/
│   ├── service-*/       # Backend services
│   └── web/             # Frontend application
├── packages/
│   ├── config-*/        # Shared configurations
│   ├── service-core/    # Core service utilities
│   ├── shared-contracts/# Contract definitions
│   └── utils/           # Common utilities
```

## 🎯 Upcoming Features

- [x] Vitest integration
- [ ] Dockerfile for each app with root-level build support
- [x] GitHub actions for test
- [ ] Additional service examples
- [ ] Authentication API examples
- [ ] Custom ESLint rule examples
- [ ] Micro frontend examples

## 🛠️ Getting Started

```sh
pnpm i
pnpm run dev
```

## 📝 License

MIT
