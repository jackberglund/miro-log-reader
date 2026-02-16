# Log Reader

A simple web app for viewing and filtering log files.

## Features

- **Load logs** from a file (`.log`, `.txt`) or use built-in sample logs
- **Level detection** for ERROR, WARN, INFO, and DEBUG with color coding
- **Search** to filter lines by text
- **Level filters** to show/hide ERROR, WARN, INFO, DEBUG
- **Auto-scroll** to follow the bottom of the log (toggles off when you scroll up)
- **Timestamps** parsed from ISO and simple time formats

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .

# Then open http://localhost:8080
```

Click **Load sample logs** to see example entries, or **Load file** to open your own log file.
# miro-log-reader
