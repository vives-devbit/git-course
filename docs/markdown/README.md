# Markdown

Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats. Markdown is often used to format README files, for writing messages on online discussion forums, and to create rich text using a plain text editor. Lately is has also become very popular for creating content for static websites such as blogs.

Markdown allow us to concentrate on content instead of layout and styling. On top of that, markdown files are perfect for managing with version control systems such as GIT.

::: tip Semantics
Markdown is a markup language meaning it is not concerned with how the text is presented (that's the job of styling). It is only here to provide semantic meaning to the text.
:::

## Text

To create a text paragraph in markdown you just need to type text without any markup. Don't place enters after a sentence, **think paragraphs**. The code editor you use should have *wordwrap* functionality to make sure text is not outside of the viewable area of your editor. After each paragraph, leave a blank line.

```markdown
Paragraph text is just text without any markup.

After each paragraph we leave a blank line.
```

::: output
Paragraph text is just text without any markup.

After each paragraph we leave a blank line.
:::

## Headings

Just like in *Word*, webpages can have titles of different levels. In markdown a heading is prefixed with hashtags `#`, where the numbers of hashtags used determines the level of the heading. Just make sure to leave a space after the hashtag.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

::: output
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
:::

## Emphasizing Text

To emphasize certain parts of the text, one can make it **bold** or *italic*.

Text can be made italic by surrounding the text in *single asterisks* or *single underscores*.

Making text bold is achieved by surrounding the text in **double asterisks** or **double underscores**.

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can also** combine them_
```

::: output
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can also** combine them_
:::

## Creating Lists

Lists allow you display items in ordered fashion.

### Numbered Lists

Organizing items in an numbered list is achieved in markdown by placing a `1.` in front of the item. Sub-lists can be created by indenting each item in the sub-list by four spaces (or a tab).

Note that you don't have to increment the number yourself. The only requirement is that the first item needs to start with a `1.`.

```markdown
1. First
1. Second
1. Third
    1. Indented first
    1. Indented second
1. Fourth
```

::: output
1. First
1. Second
1. Third
    1. Indented first
    1. Indented second
1. Fourth
:::

### Bulleted Lists

To create an bulleted list, add dashes `-`, asterisks `*`, or a plus signs `+` in front of each item. Indent one or more items to create a nested list.

```markdown
* First
* Second
* Third
    * Indented first
    * Indented second
* Fourth
```

::: output
* First
* Second
* Third
    * Indented first
    * Indented second
* Fourth
:::

## Adding Images

Just about any document you create is likely to include some visual content in the form of images. Markdown offers a clean and fast syntax to include images into your documents.

Start with an exclamation mark `!`. Next add a caption between square brackets `[]` (considered good practice to aid in accessibility). Last add the url or relative local path between parentheses `()`.

```markdown
![Tux Pinguin](https://storage.needpix.com/rsynced_images/linux-155549_1280.png)
![GIT Logo](./assets/git_logo.jpg)
```

::: output
![Tux Pinguin](https://storage.needpix.com/rsynced_images/linux-155549_1280.png)
![GIT Logo](./assets/git_logo.jpg)
:::

## Links

A link can be created by placing the text to display between square brackets `[]` followed by the url or path between parentheses `()`.

Links can be created to external websites, to another document in the current VuePress website or to an anchor inside of a document.

```markdown
* [Link to external VIVES website](https://www.vives.be)
* [Relative Link to VuePress](../vuepress)
* [Anchor Link to Blockquote](#blockquote)
* [Anchored to Creating VuePress Project](../vuepress/#creating-a-new-vuepress-course)
```

::: output
* [Link to external VIVES website](https://www.vives.be)
* [Relative Link to VuePress](../vuepress)
* [Anchor Link to Blockquote](#blockquote)
* [Anchored to Creating VuePress Project](../vuepress/#creating-a-new-vuepress-course)
:::

## Code

Inline code needs to be placed between backticks ` `` ` while a code block needs to be surrounded by three backticks.

If you wish tyo activate syntax highlighting, you will need to specify the programming language after the opening backticks for a code block. Inline code does not support syntax highlighting.

````markdown
So for example to place a piece of `inline code`, you need single backticks.

While actual code blocks need triple backticks:

```cpp
for (int x = 0; x < 100; x++) {
  cout << "There is no coding like C++ coding." << endl;
}
```
````

::: output
So for example to place a piece of `inline code`, you need single backticks.

While actual code blocks need triple backticks:

```cpp
for (int x = 0; x < 100; x++) {
  cout << "There is no coding like C++ coding." << endl;
}
```
:::

## Blockquote

To create a blockquote, add a `>` in front of a paragraph.

```markdown
> When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris.
```

To add multiple paragraphs to a single blockquote, also prefix the blank line between the two paragraphs with a `>`.

```markdown
> Chuck Norris can divide by zero.
>
> Source: Top 25 Chuck Norris Jokes by LiveAboutDotCom
```

::: output
> Chuck Norris can divide by zero.
>
> Source: Top 25 Chuck Norris Jokes by LiveAboutDotCom
:::

## Horizontal Rule

To add a horizontal line between paragraphs or other elements, add `---`, `***` or `___`, surrounded by blank lines, to your text.

```markdown
Before the horizontal rule

---

After the horizontal rule
```

::: output
Before the horizontal rule

---

After the horizontal rule
:::

## VuePress Flavored Markdown

These are extensions provided by VuePress (often also GitHub or vice versa).

### Tables

Tables are actually an extension to markdown offered by for example Github and VuePress. They are no official component of the markdown standard.

Tables can be created by separating the cells with pipe characters `|`. The header of the table can be separeted from the actual table content by adding a row of three dashes `---` per cell.

To align items left or right by adding a colon `:` on the left or right side of the dashes. Add on both sides to center.

```markdown
Colons can be used to align columns.

| Tables | are | easy  |
| ------------- |:-------------:| -----:|
| Left aligned | Centered |  Right aligned |
| Can also contain `inline code` | `E = m * c * c` | **or bold text** |
| Last Row | Last Row | Last Row |
```

::: output
| Tables | are | easy  |
| ------------- |:-------------:| -----:|
| Left aligned | Centered |  Right aligned |
| Can also contain `inline code` | `E = m * c * c` | **or bold text** |
| Last Row | Last Row | Last Row |
:::

### Containers

Containers or callouts are a way to add tips, warning or danger note to a page. Surround the content that needs to be placed inside of the container with triple colons `:::` and add the name of the container after the opening colons.

A title can also be added to the containers after the container name.

````markdown
::: tip
This is a tip

```cpp
// You can even add code inside a container
while (true) {
  cout << "Markdown is nice!" << endl;
}
```
:::

::: warning
This is a warning with an image

![Warning image](./assets/warning.png)
:::

::: danger That is my middle name
This is a dangerous warning with unicode emoji 🚨
:::
````

:::: output
::: tip
This is a tip

```cpp
// You can even add code inside a container
while (true) {
  cout << "Markdown is nice!" << endl;
}
```
:::

::: warning
This is a warning with an image

![Warning image](./assets/warning.png)
:::

::: danger That is my middle name
This is a dangerous warning with unicode emoji 🚨
:::
::::

### Table of Content

A table of content can be automatically generated of the current document by using the `[[toc]]` tag.

```markdown
[[toc]]
```

::: output
[[toc]]
:::
