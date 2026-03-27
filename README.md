# Simon Says

> Classic memory challenge with color, sound, and timing — now in a clean, modern browser UI.

![Simon Says Game Screenshot](./screenshot.png)

## 🚀 Quick Start

### Option 1: Open locally
1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Simon_Says.git
   cd Simon_Says
   ```
2. Open `index.html` in any modern web browser.
3. Press **Start** and follow the sequence of lights + tones.

### Option 2: Live preview (recommended)
- Use a lightweight server (Live Server extension, `python -m http.server`, etc.)
- Navigate to `http://localhost:8000`

## 🎮 How to Play
1. Click **Start**.
2. Watch/listen to the generated pattern.
3. Repeat the pattern by tapping the colored pads.
4. Score increases each successful level.
5. A mistake shows **Game Over** and resets the round.

## 🧩 Project Structure

- `index.html` — game layout and controls.
- `style.css` — responsive style, animations, hover states.
- `app.js` — gameplay logic (sequence, timing, user input, scoring).

## ✨ Features

- Adaptive random sequence generator.
- Strict input validation and instant feedback.
- Progressive level and score tracking.
- Sound + visual pattern reproduction.
- Mobile-friendly + accessible controls.

## ⚙️ Customization

- Change palette/animation in `style.css`.
- Tweaks for difficulty or speed in `app.js`:
  - sequence interval
  - sound duration
  - max level behavior

## 🛠️ Development Tips

- Set a breakpoint in `startGame()` to trace round initialization.
- Use `console.log(currentSequence, playerSequence)` for debugging.
- Add `keydown` support in `app.js` to control with keyboard.

## 📄 License
MIT License

---

Built with love for JavaScript learning and game prototypes.

