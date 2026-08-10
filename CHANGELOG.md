# Change Log

Entries from 1.2.1 and earlier belong to the upstream project,
[geriyoco/vscode-image-gallery](https://github.com/geriyoco/vscode-image-gallery),
and are kept here for history. Entries from 2.0.1 onwards are this fork's.

## [2.0.1] - 2026-08-10

First release of the fork under its own identity, as **Image Grid**
(`LiamWang.image-grid`).

### Added
- MP4 video support: videos render as playable tiles in the grid, open in the viewer, and report their dimensions in the hover tooltip.
- Manual column count control in the toolbar, with an auto-fit toggle.
- Column count, sort field, and sort direction now persist to VS Code settings and are restored when a grid is reopened.

### Changed
- Renamed from "Image Gallery" to **Image Grid**, with a new logo and an extension ID of `LiamWang.image-grid`, to keep it clearly distinct from the upstream extension.
- **Breaking:** commands, the webview panel type, and the custom editor view type moved from the `gryc.*` namespace to `imageGrid.*`, so Image Grid registers its own identifiers and can be installed alongside other gallery extensions.
- **Breaking:** all settings moved under the `imageGrid.*` namespace — `gallery.columnCount` → `imageGrid.columnCount`, `sorting.byPathOptions.*` → `imageGrid.sorting.byPathOptions.*`, and so on. Previously configured values will need to be set again.
- The viewer's pan/zoom library is now bundled with the extension, so the viewer works offline and in firewalled environments.
- Toolbar and grid styling made more consistent.

### Removed
- All telemetry. Published builds have no analytics endpoint configured, the opt-in setting defaults to `false`, and nothing is sent.

## [1.2.1] - 2022-09-28
### Fixed
- Supported file extensions are now consistent between [`package.json`](package.json) and [`src/utils.ts`](src/utils.ts).

## [1.2.0] - 2022-09-21
### Added
- Telemetry for feature insights. We strive to be transparent at what we collect. See [`telemetry.json`](telemetry.json) for all the events we collect. Following the [Microsoft Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement), we do not collect any Personally Identifiable Information (PII). Check out the open-source repository at [here](https://github.com/geriyoco/vscode-image-gallery) to inspect the code. You can always opt-out of telemetry by setting `geriyocoImageGallery.isTelemetryEnabled` to `false` in your VS Code settings. Visit [here](https://code.visualstudio.com/docs/getstarted/telemetry) to learn more about VS Code telemetry.

### Fixed
- Image sort preference was not respected when file watcher is involved, e.g. after an image is added, deleted, or modified.

## [1.0.0] - 2022-09-12
### Added
- Support sorting by name, type, size, created time, and modified time
- Support supporting in both ascending order and descending order
- Folders are only sorted by name in ascending order

### Changed
- Separated the "collapse all" and "expand all" buttons
- Dropped support for web extension to improve performance (web support will be added back in the future)

### Fixed
- Icons are now consistent with the VS Code's codicons.
- Gallery view is automatically updated when an image is added, modified, or deleted. However, when changes are made to the folder structure, the user needs to manually refresh the view by reopening the gallery.

## [0.4.1] - 2022-08-01
### Fixed
- Buttons to expand/collapse all sub-folders were not showing up (temporary fix without using [@vscode/codicons](https://github.com/microsoft/vscode-codicons))

## [0.4.0] - 2022-07-30
### Added
- Buttons to expand/collapse all sub-folders in the gallery view
- Tooltip containing metadata appears with a delay when hovering over an image in the gallery view

### Changed
- Clicking (both single and double) an image on the gallery will focus the image on the Explorer side bar (see [here](https://github.com/geriyoco/vscode-image-gallery/pull/75#issue-1284403392)); a separate viewer will still be opened up

## [0.2.7] - 2022-06-26
### Changed
- Single clicking an image in Gallery view opens up the image in Preview Mode
- Double clicking an image in Gallery view opens up the image (not in Preview Mode)

### Fixed
- Files within sub-folders were not being sorted correctly

## [0.2.6] - 2022-06-23
### Added
- Gallery supports collapsible sub-folders
- Sort sub-folders and files by alphanumeric order

## [0.2.5] - 2022-05-14
### Added
- Sort filenames by alphanumeric order by default
- Added additional configuration for sorting in settings

## [0.2.4] - 2022-05-12

## [0.2.3] - 2022-05-01
### Added
- Display filename as tab title in the viewer
- Display filename underneath each image in gallery

## [0.2.2] - 2022-04-27
### Added
- Content persistence when switching between tabs

## [0.2.1] - 2022-04-20
### Added
- Auto refresh

## [0.2.0] - 2022-04-18
### Added
- Image viewer can be opened by left clicking images on the side bar (File Explorer)
- Print message when no image is found in the selected folder
- Support for web extension

### Changed
- Zoom center is set to cursor position
- Tab contents are now persistent until closed

## _[0.1.0 prerelease]_ - 2022-04-17
### Added
- Image viewer can be opened by left clicking images on the side bar (File Explorer)
- Print message when no image is found in the selected folder
- Support for web extension

### Changed
- Zoom center is set to cursor position
- Tab contents are now persistent until closed

## [0.0.2] - 2022-04-11
### Added
- Gallery can be opened by right clicking folders in the Explorer sidebar

## [0.0.1] - 2022-04-10
- Initial release
