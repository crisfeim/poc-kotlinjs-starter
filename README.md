# Kotlin/JS Minimal Project 🧪

This is a minimal Kotlin Multiplatform project that:

- Exports a simple Kotlin function (`printKotlin`) to JavaScript.
- Compiles it to a JS bundle  (`.js` + `.map`).
- Uses a plain HTML file to invoke the Kotlin function in the browser.
- Serves as a minimal working reference for future **cross-platform playgrounds**.

## Project Structure

```
kmp/
├── build.gradle.kts
├── settings.gradle.kts
├── src/
│   └── jsMain/
│       └── kotlin/
│           └── Printer.kt
├── webapp/
│   ├── index.html
│   └── js/
└── tasks.json
```

## Usage

### Build

```bash
./gradlew buildJS
```
