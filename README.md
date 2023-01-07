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
    "editor.tabCompletion": "on",
    "editor.snippetSuggestions": "inline",
    "files.insertFinalNewline": true,
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
            "scope": [ "storage.type.class.qsc" ],
            "settings": {
                "foreground": "#0e4a8f",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.type.class.qsc" ],
            "settings": {
                "foreground": "#349df3",
                "fontStyle": "bold"
            }
        },

        // Option
        {
            "scope": [ "storage.type.enum.qsc" ],
            "settings": {
                "foreground": "#811818",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.type.enum.qsc" ],
            "settings": {
                "foreground": "#ef5350"
            }
        },

        // Label
        {
            "scope": [ "storage.type.namespace.qsc" ],
            "settings": {
                "foreground": "#ad1457",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.namespace.qsc" ],
            "settings": {
                "foreground": "#b64168",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "variable.parameter.qsc" ],
            "settings": {
                "foreground": "#5f3542",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [
                "punctuation.definition.parameters.begin.qsc",
                "punctuation.separator.comma.qsc",
                "punctuation.definition.parameters.end.qsc"
            ],
            "settings": {
                "foreground": "#4a4a4a"
            }
        },

        // Router
        {
            "scope": [ "keyword.control.loop.qsc" ],
            "settings": {
                "foreground": "#472399",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "keyword.control.flow.qsc" ],
            "settings": {
                "foreground": "#854be9"
            }
        },

        // Command
        {
            "scope": [ "storage.type.function.qsc" ],
            "settings": {
                "foreground": "#2e7d32",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.function.qsc" ],
            "settings": {
                "foreground": "#60a863",
                "fontStyle": "bold"
            }
        },

        // Condition
        {
            "scope": [ "keyword.control.conditional.qsc" ],
            "settings": {
                "foreground": "#008f9c",
                "fontStyle": "bold"
            }
        },

        // Directive
        {
            "scope": [ "punctuation.definition.directive.qsc" ],
            "settings": {
                "foreground": "#fbc02d",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "entity.name.other.preprocessor.macro.qsc" ],
            "settings": {
                "foreground": "#ffe600",
                "fontStyle": "bold"
            }
        },
        {
            "scope": [ "variable.other.global.qsc" ],
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
            "scope": [ "variable.other.constant.qsc" ],
            "settings": {
                "foreground": "#be5a09"
            }
        },
        {
            "scope": [ "variable.other.constant.text.qsc" ],
            "settings": {
                "foreground": "#fa9d52"
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
            "scope": [
                "keyword.operator.qsc",
                "punctuation.accessor",
                "punctuation.terminator.qsc"
            ],
            "settings": {
                "foreground": "#BBBBBB"
            }
        },
        {
            "scope": [ "meta.brace.round.qsc" ],
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
            "scope": [ "variable.qsc" ],
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
        },

        // Enumerators
        {
            "scope": [ "variable.other.enummember.qsc" ],
            "settings": {
                "foreground": "#238dec"
            }
        },
    ]
},
```
