# hyprconf-gen

A lightweight, web-based configuration (.conf) generator for [Hyprland](https://hyprland.org/). 

No more guessing syntax or constantly referencing the wiki—just tweak your settings visually, import your existing config, and export.

## Features

* **Categorized Settings:** Easily navigate through different configuration sections using the sidebar:
    * **Variables & Environment:** Set custom `$vars` and `env` configurations.
    * **Monitors:** Resolution, refresh rates, scaling, and transforms.
    * **Input Devices:** Keyboard layouts, mouse sensitivity, and touchpad behaviors.
    * **Keybinds:** Map your shortcuts with a visual keybind builder and modifier toggles.
    * **Window & Workspace Rules:** Set specific behaviors for different apps and workspaces.
    * **Autostart:** Manage `exec-once` background processes.
    * **Animations:** Define bezier curves with a live HTML5 canvas preview and assign animation styles.
    * **Decoration:** Corner rounding, opacity, blur effects, and drop shadows.
    * **Layouts:** Specific tweaks for Dwindle and Master layouts.
    * **Miscellaneous & Gestures:** Touchpad swipes, tearing, VRR, and more.
* **Live Preview:** See your configuration code generate in real-time as you change settings.
* **Config Import:** Upload your existing `hyprland.conf` and the parser will automatically map it to the UI.
* **Easy Export:** Copy the generated config straight to your clipboard or download it as a `.conf` file.

## Getting Started

Since this is a client-side web tool, there's no server setup required.

1.  Clone this repository or download the source code.
    ```bash
    git clone https://github.com/ufuayk/hyprconf-gen.git
    ```
2.  Navigate to the project folder.
3.  Open the `index.html` file in your preferred web browser.

## Project Structure

* `index.html`: The main layout, sidebar navigation, and forms for settings. All.
* `style.css`: Dark-mode styling for the web interface, utilizing Inter and JetBrains Mono fonts.
* `script.js`: Handles the logic for parsing existing configs, rendering the live bezier canvas, compiling user inputs into Hyprland syntax, and managing the copy/download features.

## License

[MIT License](LICENSE) - feel free to use, modify, and distribute this tool. Cool.