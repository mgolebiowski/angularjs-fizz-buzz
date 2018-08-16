module.exports = {
    "env": {
        "browser": true,
      },
    "globals": {
      "angular": true
    },
    "extends": ["eslint:recommended", "plugin:angular/johnpapa"],
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "indent": [
          "error",
          2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};