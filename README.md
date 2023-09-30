# Granite

Easy-to-reuse content editor for any React project. Allowing your users to create rich content is a complex problem and Granite solves it for you. Granite allows you to easily add user generated rich content to your product. Granite generates semantic, accessible, easily styled HTML for you and allows you to focus on your business.

## Features

Allows users to create rich content with the following elements:

### Text/Content Elements

- Paragraphs
- Block Quotes
- Headings (6 sizes)
- Lists (Bulleted and Ordered)

### Text Formatting

Allows users to format text in the following ways:

- Text Styling (Bold, Italics, Underline and Strikethrough)
- Text Alignment (Left, Center, Right and Justify)
- Text Color

### Themes (Light & Dark)

Allows users to theme their rich content in both Light and Dark Themes. This can be controlled or automatic.

### Toolbar Modes

Style the toolbar as hovering or static. The static toolbar can be positioned at the top or bottom of the editor.

## Component API

### Granite

**readOnly**

- Renders the editor in read only (or edit) mode.
- _Values:_ true or false

**onChange**

- Function that's called whenever there is a change in the editor's content.

**toolbarMode**

- Configures the location and style of the editor's toolbar.
- _Values:_ "hovering", "static-top", "static-bottom"

**theme** (optional):

- Renders editor and content in whatever Theme the user configures.
- _Values:_ See "Theme" type definition

**themeType** (optional):

- Manually controls which theme (light or dark) is shown in the editor
- _Values:_ See "ThemeTypes" definition

**content** (optional):

- Rich content to be rendered by Editor. When not passed, an empty document is created.
