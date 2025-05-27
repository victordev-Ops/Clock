# Analog Clock with Ticking Sound

A responsive analogue clock built with **HTML**, **CSS**, and **JavaScript**. It features:

- A milky glass-like clock face
- Gray circular border
- Clock numbers (1–12)
- Moving hour, minute, and second hands
- Ticking sound every second

---

## Preview

![Analog Clock Screenshot](screenshot.png)  
*(Add a screenshot of your clock project here)*

---

## Features

- Fully responsive design (scales with screen size)
- Smooth visual layout with frosted glass effect
- Real-time time updates every second
- Customizable ticking sound using `.wav` or `.mp3`
- Easy to customize styles or extend features

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/analog-clock.git
cd analog-clock

2. Add the Tick Sound

Place your ticking audio file in the root directory.

Supported formats: .wav or .mp3

Example:

tick.wav

3. Run Locally

Just open index.html in your browser:

open index.html

> Tip: Use a live server for better development experience.




---

File Structure

.
├── index.html         # Clock UI
├── style.css          # Clock styling
├── script.js          # Clock logic and ticking sound
├── tick.wav           # Ticking audio (add this)
└── README.md          # Project description


---

Browser Notes

Browsers block autoplay sound by default. The ticking sound will start after the first user click.

If your sound doesn't play, try clicking anywhere on the page or use a different audio format (.mp3).



---

Customization

Change the clock size using vmin units in CSS

Replace the ticking sound with your own file

Add smooth hand motion, dark/light themes, or digital time



---

License

This project is open-source and free to use under the MIT License.


---

Author

Victor.dev

Inspired by classic analogue clocks with a modern CSS twist.

