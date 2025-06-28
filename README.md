# GneissEditor

Easy-to-reuse content editor for any React project. Allowing your users to create rich content is a hard problem and GneissEditor solves it for you. GneissEditor allows you to easily add user generated rich content to your product. GneissEditor generates semantic, accessible, easily styled HTML for you.

## Features

Allows users to create rich content with the following elements:

### Text Elements

- Paragraphs
- Block Quotes
- Headings
- Lists (Bulleted and Ordered)

### Text Formatting

Allows users to format text in the following ways:

- Styling (Bold, Italics, Underline and Strikethrough)
- Alignment (Left, Center, Right and Justify)
- Color

### Undo/Redo

Allows users to easily edit their work without worry by undoing/redoing recent changes.

### Themes (Light & Dark)

Allows users to theme their rich content in both Light and Dark Themes. This can be controlled or automatic.

### Toolbar Modes

Style the toolbar as hovering above the content, positioned the top/bottom of the editor, or turned of entirely.

### Export to Text & Markdown

Serializers, such as`exportToPlaintext` and `exportToMarkdown`, offer users a way to reuse their content by converting it into popular forms.

## Component API

### GneissEditor

**readOnly**

- Renders the editor in read only (or edit) mode.
- _Values:_ true or false

**onChange**

- Function that's called whenever there is a change in the editor's content.

**toolbarMode**

- Configures the location and style of the editor's toolbar.
- _Values:_ "hover", "top", "bottom", "none"

**theme** (optional):

- Renders editor and content in whatever Theme the user configures.
- _Values:_ See "Theme" type definition

**themeType** (optional):

- Manually controls which theme (light or dark) is shown in the editor
- _Values:_ See "ThemeTypes" definition

**content** (optional):

- Rich content to be rendered by Editor. When not passed, an empty document is created.

## Serializer API

### exportToPlaintext

Converts a list of ElasticElement nodes from GneissEditor into Plaintext.

```ts
function exportToPlaintext(nodes: ElasticElement[]): string {}
```

### exportToMarkdown

Converts a list of ElasticElement nodes from GneissEditor into Markdown.

```ts
function exportToMarkdown(nodes: ElasticElement[]): string {}
```
