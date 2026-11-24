# 3D Developer Portfolio (work in progress)

An interactive 3D portfolio: a desk scene with a laptop, phone, server and mug, where each object opens a part of my work (projects, resume, contact).

**Status:** early prototype. The 3D scene, HUD and projects modal are in place; the individual 3D models and the project, resume and contact pages are still being built.

## Tech stack

React 19 · TypeScript · Vite · three.js · React Three Fiber · drei · Framer Motion · Zustand · Tailwind CSS · glTF-Transform (model optimization)

## Run locally

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/3d/   scene and 3D objects (desk, laptop, phone, server, mug, lights)
  components/ui/   HUD, projects modal, project cards
  pages/           home, projects, project detail, resume, contact
  store/           app state (Zustand)
```
