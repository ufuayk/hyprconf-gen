# hyprconf-gen

A lightweight, web-based configuration generator for [Hyprland](https://hyprland.org/). 

No more guessing syntax or constantly referencing the wiki—just tweak your settings visually and export.

## Features

* **Categorized Settings:** Easily navigate through different configuration sections using the sidebar:
    * **General & Appearance:** Borders, gaps, colors, and default layouts.
    * **Monitors:** Resolution, refresh rates, and scaling.
    * **Input Devices:** Keyboard layouts, mouse sensitivity, and touchpad natural scrolling.
    * **Keybinds:** Map your shortcuts and modifier keys.
    * **Window Rules:** Set specific behaviors for different apps using RegEx.
    * **Autostart:** Manage `exec-once` background processes.
    * **Animations:** Tweak global animations, define bezier curves, and assign animation styles.
    * **Decoration:** Corner rounding, opacity, blur effects, and drop shadows.
    * **Layouts:** Specific tweaks for Dwindle and Master layouts.
    * **Miscellaneous:** Wallpaper forcing and logo disabling.
* **Live Preview:** See your configuration code generate in real-time as you change settings.
* **Easy Export:** Copy the generated config straight to your clipboard or download it as a `.conf` file.

## Getting Started

Since this is a client-side web tool, there's no server setup required.

1.  Clone this repository or download the source code.
    ```bash
    git clone https://github.com/ufuayk/hyprconf-gen
    ```
2.  Navigate to the project folder.
3.  Open the `index.html` file in your preferred web browser.

## Project Structure

* `index.html`: The main layout, sidebar navigation, and forms for all settings. All.
* `style.css`: Styling for the web interface, utilizing Inter and JetBrains Mono fonts.
* `script.js`: Handles the logic for taking user inputs, compiling them into Hyprland syntax, and managing the copy/download features.

## License

[MIT License](LICENSE) - feel free to use, modify, and distribute this tool. Cool.
