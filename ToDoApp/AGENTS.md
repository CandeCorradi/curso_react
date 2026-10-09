# AGENTS.md

React 19 + TypeScript + Vite 8 to-do app. UI text is Spanish (`<html lang="es">`) and so are most identifiers — keep new UI strings Spanish.

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck runs here; there is no separate typecheck script)
- `npm run lint` — `oxlint` (NOT eslint; no eslint config exists)
- No test framework is configured.

## Structure
- Components live in `src/Components/<Name>/<Name>.tsx` with a sibling `.css` — one folder per component.
- Preserve existing naming quirks: the folder is misspelled `CreateTodoButtom/`, and the header is `TodoHeader/ToDoHeader.tsx` (folder/file casing mismatch). Don't "fix" these unless asked.
- Shared state is in `src/Components/TodoContext/TodoContext.tsx` (`TodoProvider` + `TodoContext`). Todos are keyed by `text`, not id — `completeTodo`/`deleteTodo`/`addTodo` take the text, though the exported `TodoContextType` types misleadingly say `id: string`.

## Gotchas
- `TodoProvider` is defined but never mounted in `src/main.tsx`; `App.tsx` destructures `React.useContext(TodoContext)!`, so the app currently throws on mount. Wire new features by wrapping `<App />` in `<TodoProvider>` in main.tsx.
- `Modal.tsx` portals into the `#modal` div in `index.html`. `Modal`, `TodoForm`, and `openModal`/`addTodo` exist but aren't wired into any component yet.
- `App.tsx` still contains a dead `AppOriginal` (Vite template leftovers); only the default-exported `App` renders.
- React Compiler is enabled via `@rolldown/plugin-babel` `reactCompilerPreset()` in `vite.config.ts` — memoization is automatic, so don't add manual `useMemo`/`useCallback`.

## TypeScript strictness (fails `npm run build`)
- `verbatimModuleSyntax`: type-only imports must use `import type`.
- `erasableSyntaxOnly`: no enums, namespaces, or parameter properties.
- `noUnusedLocals` / `noUnusedParameters` are enabled.
