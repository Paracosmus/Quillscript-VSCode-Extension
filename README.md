# Quillscript Visual Studio Code Extension

Visual Studio Code extension to provide support and syntax highlighting for Quillscript language.

---

## Recommended Settings

Copy and paste the following code to your settings.json to apply our recommended settings for Quillscript code.

```json
// Quillscript.
"[quillscript]": {
    "editor.tabSize": 2,
    "editor.fontSize": 16,
    "editor.wordWrap": "off",
    "editor.renderWhitespace": "trailing",
    "files.insertFinalNewline": true
},
```

---

## Recommended Style

Copy and paste the following code to your settings.json to apply our recommended color style to Quillscript code.

```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
        // Dialogue
        {
            "scope": [ "entity.name.type.class.dialogue.symbol.qsc" ],
            "settings": {
                "foreground": "#0e4a8f",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.type.class.dialogue.main.qsc" ],
            "settings": {
                "foreground": "#349df3",
                "fontStyle": "bold"
            }
        },

        // Option
        {
            "scope": [ "entity.name.type.enum.option.symbol.qsc" ],
            "settings": {
                "foreground": "#811818",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.type.enum.option.main.qsc" ],
            "settings": {
                "foreground": "#ef5350"
            }
        },

        // Label
        {
            "scope": [ "entity.name.namespace.label.symbol.qsc" ],
            "settings": {
                "foreground": "#ad1457",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.namespace.label.main.qsc" ],
            "settings": {
                "foreground": "#b64168",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.namespace.label.param.qsc" ],
            "settings": {
                "foreground": "#5f3542",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.namespace.label.template.qsc" ],
            "settings": {
                "foreground": "#4a4a4a"
            }
        },

        // Go To
        {
            "scope": [ "keyword.control.router.symbol.qsc" ],
            "settings": {
                "foreground": "#472399",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "keyword.control.router.main.qsc" ],
            "settings": {
                "foreground": "#854be9"
            }
        },

        // Command
        {
            "scope": [ "entity.name.function.command.symbol.qsc" ],
            "settings": {
                "foreground": "#2e7d32",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.function.command.main.qsc" ],
            "settings": {
                "foreground": "#60a863",
                "fontStyle": "bold"
            }
        },

        // Directive
        {
            "scope": [ "entity.name.other.preprocessor.macro.directive.symbol.qsc" ],
            "settings": {
                "foreground": "#fbc02d",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.other.preprocessor.macro.directive.main.qsc" ],
            "settings": {
                "foreground": "#ffe600",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.other.preprocessor.macro.directive.param.qsc" ],
            "settings": {
                "foreground": "#fff48f"
            }
        },


        // Comment
        {
            "scope": [ "comment.title.qsc" ],
            "settings": {
                "foreground": "#e0e0e0",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "comment.symbol.qsc" ],
            "settings": {
                "foreground": "#2D2D2D",
                "fontStyle": "bold italic"
            }
        },
        {
            "scope": [ "comment.qsc" ],
            "settings": {
                "foreground": "#4A4A4A",
                "fontStyle": "italic"
            }
        },
        {
            "scope": [ "comment.topic.qsc" ],
            "settings": {
                "foreground": "#000000"
            }
        },

        // Instructions
        {
            "name": "String",
            "scope": [ "string.qsc" ],
            "settings": {
                "foreground": "#7e99a7"
            }
        },

        {
            "scope": [ "variable.other.constant.tag.qsc" ],
            "settings": {
                "foreground": "#be5a09"
            }
        },
        {
            "scope": [ "variable.other.constant.qsc" ],
            "settings": {
                "foreground": "#fa9d52"
            }
        },
        {
            "scope": [ "keyword.operator.condition.qsc" ],
            "settings": {
                "foreground": "#008f9c",
                "fontStyle": "bold"
            }
        },

        // Operators
        {
            "scope": [ "keyword.operator.concat.qsc" ],
            "settings": {
                "foreground": "#303030",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "keyword.operator.qsc" ],
            "settings": {
                "foreground": "#BBBBBB"
            }
        },
        {
            "scope": [ "keyword.operator.parentheses.qsc" ],
            "settings": {
                "foreground": "#4a4a4a"
            }
        },

        // Number
        {
            "scope": [ "constant.number.qsc" ],
            "settings": {
                "foreground": "#008f9c"
            }
        },

        // Richtext
        {
            "scope": [ "entity.name.tag.qsc" ],
            "settings": {
                "foreground": "#226fff"
            }
        },

        // Variable
        {
            "scope": [ "variable.other.property.qsc" ],
            "settings": {
                "foreground": "#99defd"
            }
        },

        // Keywords
        {
            "scope": [ "constant.language.qsc" ],
            "settings": {
                "foreground": "#0059ff"
            }
        }
    ]
},
```
