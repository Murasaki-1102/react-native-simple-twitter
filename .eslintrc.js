module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true,
    "browser": true,
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "__DEV__": true
  },
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "max-len": [
      1,
      140,
      2
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": ["src/**", "__tests__/**"],
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/destructuring-assignment": [0]
  }
}