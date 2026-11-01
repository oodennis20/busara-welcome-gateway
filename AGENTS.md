<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Import lovable-assets pointer JSON (`*.asset.json`) with a relative path (e.g. `../assets/x.png.asset.json`), not the `@/` alias — the SSR module loader fails to resolve the alias for these imports ("Could not find package '@/assets'"). Keep `src/assets/assets.d.ts` declaring the module shape.
