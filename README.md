<p align="center">
  <img src="docs/logo-128.png" width="96" height="96" alt="Image Grid logo">
</p>

<h1 align="center">Image Grid</h1>

<p align="center">
  Browse images and MP4 videos as a resizable grid in VS Code — built for remote and cloud development.
</p>

---

> ### This is a fork
>
> **Image Grid** is an independent fork of [**Image Gallery**](https://github.com/geriyoco/vscode-image-gallery)
> by [GeriYoco](https://github.com/geriyoco) (Alex CHANDRA and TEH Chi-En). Nearly all of the original gallery, viewer,
> sorting, and file-watching code is theirs, used under the MIT license — full
> credit to them for building it.
>
> This fork is **not affiliated with or endorsed by GeriYoco**. It has a
> different name, logo, extension ID, and settings namespace, and it collects no
> telemetry. Please report problems with *this* extension
> [here](https://github.com/liamjwang/vscode-image-gallery/issues) rather than
> upstream. See [`NOTICE.md`](NOTICE.md) for full attribution.

## What this fork adds

Relative to upstream [v1.2.1](https://github.com/geriyoco/vscode-image-gallery/releases):

- **Video support** — `.mp4` files appear as playable tiles in the grid and open in the viewer, with dimensions reported in the hover tooltip.
- **Manual column count** — set an exact number of columns from the toolbar, or leave auto-fit enabled.
- **Persistent settings** — column count, sort field, and sort direction are saved to your VS Code settings and restored the next time you open a grid.

## Features

- **Remote-friendly**: designed for browsing images over [SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh), containers, and cloud workspaces
- **Grid view**: collapsible grid of every image in the selected folder and its sub-folders
- **Lazy loading**: thumbnails load as they scroll into view, so large folders stay responsive
- **Live refresh**: the view updates as files are added, changed, or deleted
- **Small**: well under 1 MB installed

## Usage

Right-click any folder in the Explorer and choose **Open Image Grid 🖼️**, or run
`Image Grid: Open Image Grid` from the Command Palette.

![demo](docs/demo-v1.0.0.gif)

> The demo above is inherited from the upstream project and predates this fork's
> video and column controls. Photo credits are in [`docs/photo_credits.md`](docs/photo_credits.md).

## Settings

All settings live under the `imageGrid.` namespace.

| Setting | Default | Description |
| --- | --- | --- |
| `imageGrid.autoColumns` | `true` | Fit the column count to the viewport width |
| `imageGrid.columnCount` | `4` | Column count used when `autoColumns` is off |
| `imageGrid.sortBy` | `name` | Sort by `name`, `ext`, `size`, `ctime`, or `mtime` |
| `imageGrid.sortAscending` | `true` | Sort direction |
| `imageGrid.sorting.byPathOptions.*` | — | Collation options passed to `String.localeCompare` for name sorting |

## Contributing

Issues and pull requests are welcome at
[liamjwang/vscode-image-gallery](https://github.com/liamjwang/vscode-image-gallery).

```sh
npm install
npm run compile
# then press F5 in VS Code to launch an Extension Development Host
```

## License

MIT — see [`LICENSE`](LICENSE), which carries both the original GeriYoco
copyright and this fork's. Third-party attributions are in
[`NOTICE.md`](NOTICE.md).
