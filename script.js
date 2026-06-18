document.addEventListener('DOMContentLoaded', () => {

    // ────────────────────── Default Config State ──────────────────────

    const DEFAULT_CONFIG = {
        variables: [
            { name: 'mainMod', value: 'SUPER' },
            { name: 'terminal', value: 'kitty' },
            { name: 'fileManager', value: 'dolphin' },
            { name: 'menu', value: 'wofi --show drun' }
        ],
        monitors: [
            { name: '', resolution: 'preferred', position: 'auto', scale: 'auto', transform: 'normal' }
        ],
        execOnce: [],
        env: [
            { name: 'XCURSOR_SIZE', value: '24' },
            { name: 'HYPRCURSOR_SIZE', value: '24' }
        ],
        input: {
            kb_layout: 'us',
            kb_variant: '',
            kb_model: '',
            kb_options: '',
            kb_rules: '',
            numlock_by_default: false,
            repeat_rate: 25,
            repeat_delay: 600,
            sensitivity: 0,
            accel_profile: '',
            follow_mouse: 1,
            focus_on_close: 0,
            left_handed: false,
            scroll_method: '',
            scroll_button: 0,
            natural_scroll: false,
            touchpad: {
                natural_scroll: false,
                disable_while_typing: true,
                'tap-to-click': true,
                'tap-and-drag': true,
                drag_lock: false,
                scroll_factor: 1.0,
                middle_button_emulation: false,
                clickfinger_behavior: 0,
            }
        },
        general: {
            gaps_in: 5,
            gaps_out: 20,
            gaps_workspaces: 0,
            border_size: 2,
            'col.active_border': 'rgba(33ccffee) rgba(00ff99ee) 45deg',
            'col.inactive_border': 'rgba(595959aa)',
            'col.nogroup_border': 'rgba(ff000055)',
            resize_on_border: false,
            extend_border_grab_area: 15,
            hover_icon_on_border: true,
            allow_tearing: false,
            layout: 'dwindle',
            snap: {
                enabled: false,
                window_gap: 10,
                monitor_gap: 10,
            }
        },
        decoration: {
            rounding: 10,
            rounding_power: 2,
            active_opacity: 1.0,
            inactive_opacity: 1.0,
            fullscreen_opacity: 1.0,
            dim_inactive: false,
            dim_strength: 0.5,
            dim_special: 0.2,
            dim_around: 0.4,
            shadow: {
                enabled: true,
                range: 4,
                render_power: 3,
                color: 'rgba(1a1a1aee)',
                color_inactive: '',
                offset: '0 0',
                scale: 1.0,
            },
            blur: {
                enabled: true,
                size: 8,
                passes: 1,
                ignore_opacity: false,
                new_optimizations: true,
                xray: false,
                noise: 0.0117,
                contrast: 0.8916,
                brightness: 0.8172,
                vibrancy: 0.1696,
                vibrancy_darkness: 0.0,
                popups: false,
                popups_ignorealpha: 0.2,
            },
        },
        animations: {
            enabled: true,
            first_launch_animation: true,
            beziers: [
                { name: 'easeOutQuint', curve: '0.23,1,0.32,1' },
                { name: 'easeInOutCubic', curve: '0.65,0.05,0.36,1' },
                { name: 'linear', curve: '0,0,1,1' },
                { name: 'almostLinear', curve: '0.5,0.5,0.75,1.0' },
                { name: 'quick', curve: '0.15,0,0.1,1' }
            ],
            assignments: [
                { name: 'global', enabled: true, speed: 10, curve: 'default' },
                { name: 'border', enabled: true, speed: 5.39, curve: 'easeOutQuint' },
                { name: 'windows', enabled: true, speed: 4.79, curve: 'easeOutQuint' },
                { name: 'windowsIn', enabled: true, speed: 4.1, curve: 'easeOutQuint', style: 'popin 87%' },
                { name: 'windowsOut', enabled: true, speed: 1.49, curve: 'linear', style: 'popin 87%' },
                { name: 'fadeIn', enabled: true, speed: 1.73, curve: 'almostLinear' },
                { name: 'fadeOut', enabled: true, speed: 1.46, curve: 'almostLinear' },
                { name: 'fade', enabled: true, speed: 3.03, curve: 'quick' },
                { name: 'layers', enabled: true, speed: 3.81, curve: 'easeOutQuint' },
                { name: 'layersIn', enabled: true, speed: 4, curve: 'easeOutQuint', style: 'fade' },
                { name: 'layersOut', enabled: true, speed: 1.5, curve: 'linear', style: 'fade' },
                { name: 'fadeLayersIn', enabled: true, speed: 1.79, curve: 'almostLinear' },
                { name: 'fadeLayersOut', enabled: true, speed: 1.39, curve: 'almostLinear' },
                { name: 'workspaces', enabled: true, speed: 1.94, curve: 'almostLinear', style: 'fade' },
                { name: 'workspacesIn', enabled: true, speed: 1.21, curve: 'almostLinear', style: 'fade' },
                { name: 'workspacesOut', enabled: true, speed: 1.94, curve: 'almostLinear', style: 'fade' }
            ]
        },
        dwindle: {
            pseudotile: true,
            preserve_split: true,
            force_split: 0,
            smart_split: false,
            smart_resizing: true,
            use_active_for_splits: true,
            default_split_ratio: 1.0,
        },
        master: {
            new_status: 'master',
            new_on_top: false,
            mfact: 0.55,
            orientation: 'left',
            always_center_master: false,
            allow_small_split: false,
        },
        gestures: {
            workspace_swipe: false,
            workspace_swipe_fingers: 3,
            workspace_swipe_min_fingers: false,
            workspace_swipe_distance: 300,
            workspace_swipe_invert: true,
            workspace_swipe_touch: false,
            workspace_swipe_use_r: false,
            workspace_swipe_cancel_ratio: 0.5,
            workspace_swipe_speed_with_velocity: true,
        },
        misc: {
            force_default_wallpaper: -1,
            disable_hyprland_logo: false,
            disable_splash_rendering: false,
            'col.splash': '',
            focus_on_activate: false,
            new_window_takes_over_fullscreen: 0,
            initial_workspace_tracking: 1,
            vfr: true,
            vrr: 0,
            enable_swallow: false,
            swallow_regex: '',
            swallow_exception_regex: '',
            animate_manual_resizes: false,
            animate_mouse_windowdragging: false,
            render_ahead_of_time: false,
            disable_autoreload: false,
            layers_hog_keyboard_focus: true,
            close_special_on_empty: true,
            middle_click_paste: true,
        },
        devices: [
            { name: 'epic-mouse-v1', sensitivity: -0.5 }
        ],
        keybinds: [
            { type: 'bind', mods: ['$mainMod'], key: 'Q', action: 'exec', arg: '$terminal' },
            { type: 'bind', mods: ['$mainMod'], key: 'C', action: 'killactive', arg: '' },
            { type: 'bind', mods: ['$mainMod'], key: 'M', action: 'exit', arg: '' },
            { type: 'bind', mods: ['$mainMod'], key: 'E', action: 'exec', arg: '$fileManager' },
            { type: 'bind', mods: ['$mainMod'], key: 'V', action: 'togglefloating', arg: '' },
            { type: 'bind', mods: ['$mainMod'], key: 'R', action: 'exec', arg: '$menu' },
            { type: 'bind', mods: ['$mainMod'], key: 'P', action: 'pseudo', arg: '' },
            { type: 'bind', mods: ['$mainMod'], key: 'J', action: 'togglesplit', arg: '' },
            { type: 'bind', mods: ['$mainMod'], key: 'left', action: 'movefocus', arg: 'l' },
            { type: 'bind', mods: ['$mainMod'], key: 'right', action: 'movefocus', arg: 'r' },
            { type: 'bind', mods: ['$mainMod'], key: 'up', action: 'movefocus', arg: 'u' },
            { type: 'bind', mods: ['$mainMod'], key: 'down', action: 'movefocus', arg: 'd' },
            ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => ({ type: 'bind', mods: ['$mainMod'], key: String(n), action: 'workspace', arg: n === 0 ? '10' : String(n) })),
            ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => ({ type: 'bind', mods: ['$mainMod', 'SHIFT'], key: String(n), action: 'movetoworkspace', arg: n === 0 ? '10' : String(n) })),
            { type: 'bind', mods: ['$mainMod'], key: 'S', action: 'togglespecialworkspace', arg: 'magic' },
            { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: 'S', action: 'movetoworkspace', arg: 'special:magic' },
            { type: 'bind', mods: ['$mainMod'], key: 'mouse_down', action: 'workspace', arg: 'e+1' },
            { type: 'bind', mods: ['$mainMod'], key: 'mouse_up', action: 'workspace', arg: 'e-1' },
            { type: 'bindm', mods: ['$mainMod'], key: 'mouse:272', action: 'movewindow', arg: '' },
            { type: 'bindm', mods: ['$mainMod'], key: 'mouse:273', action: 'resizewindow', arg: '' },
            { type: 'bindel', mods: [], key: 'XF86AudioRaiseVolume', action: 'exec', arg: 'wpctl set-volume -l 1 @DEFAULT_AUDIO_SINK@ 5%+' },
            { type: 'bindel', mods: [], key: 'XF86AudioLowerVolume', action: 'exec', arg: 'wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-' },
            { type: 'bindel', mods: [], key: 'XF86AudioMute', action: 'exec', arg: 'wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle' },
            { type: 'bindel', mods: [], key: 'XF86AudioMicMute', action: 'exec', arg: 'wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle' },
            { type: 'bindel', mods: [], key: 'XF86MonBrightnessUp', action: 'exec', arg: 'brightnessctl s 10%+' },
            { type: 'bindel', mods: [], key: 'XF86MonBrightnessDown', action: 'exec', arg: 'brightnessctl s 10%-' },
            { type: 'bindl', mods: [], key: 'XF86AudioNext', action: 'exec', arg: 'playerctl next' },
            { type: 'bindl', mods: [], key: 'XF86AudioPause', action: 'exec', arg: 'playerctl play-pause' },
            { type: 'bindl', mods: [], key: 'XF86AudioPlay', action: 'exec', arg: 'playerctl play-pause' },
            { type: 'bindl', mods: [], key: 'XF86AudioPrev', action: 'exec', arg: 'playerctl previous' }
        ],
        windowrules: [
            { rule: 'suppressevent', matchers: 'class:.*', value: 'maximize' },
            { rule: 'nofocus', matchers: 'class:^$,title:^$,xwayland:1,floating:1,fullscreen:0,pinned:0', value: '' }
        ],
        workspacerules: []
    };

    let hyprConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    // ────────────────────── Constants ──────────────────────

    const KEYBIND_TYPES = ['bind', 'bindm', 'bindl', 'binde', 'bindel', 'bindr', 'bindn', 'unbind'];
    const KEYBIND_ACTIONS = [
        '', 'exec', 'killactive', 'exit', 'togglefloating', 'fullscreen', 'fakefullscreen',
        'movetoworkspace', 'movetoworkspacesilent', 'workspace', 'movewindow', 'resizewindow',
        'resizeactive', 'pseudo', 'focusmonitor', 'movefocusedmon', 'focuswindow', 'cyclenext',
        'swapnext', 'movecursortocorner', 'pass', 'togglegroup', 'changegroupactive',
        'focuscurrentorlast', 'togglesplit', 'dpms', 'togglespecialworkspace', 'moveoutofgroup',
        'moveintogroup', 'lockgroups', 'pin', 'closewindow', 'forcerendererreload', 'centerwindow',
        'submap', 'swapwindow', 'layoutmsg', 'tagwindow', 'focusurgentorlast', 'movecursor'
    ];
    const MODIFIERS = ['$mainMod', 'SUPER', 'ALT', 'CTRL', 'SHIFT', 'LOCK', 'MOD2', 'MOD3', 'MOD5'];
    const WINDOW_RULES_V2 = [
        '', 'float', 'tile', 'fullscreen', 'maximize', 'fullscreenstate',
        'nofocus', 'noborder', 'noblur', 'noshadow', 'nodim', 'nomaximizerequest',
        'noinitialfocus', 'opacity', 'workspace', 'monitor', 'size', 'minsize', 'maxsize',
        'move', 'idleinhibit', 'center', 'pseudo', 'rounding', 'animation', 'pin',
        'windowdance', 'unset', 'dimaround', 'suppressevent', 'forceinput', 'keepaspectratio',
        'stayfocused', 'group', 'scrolltouchpad', 'xray', 'bordercolor', 'bordersize'
    ];
    const WORKSPACE_RULE_KEYS = ['monitor', 'default', 'gapsin', 'gapsout', 'bordersize', 'border', 'shadow', 'rounding', 'decorate', 'persistent', 'on-created-empty', 'layoutopt:orientation', 'layoutopt:mfact'];
    const TRANSFORM_OPTIONS = ['normal', '90', '180', '270', 'flipped', 'flipped-90', 'flipped-180', 'flipped-270'];
    const ANIMATION_NAMES = [
        'global', 'windows', 'windowsIn', 'windowsOut', 'windowsMove',
        'border', 'borderangle', 'fade', 'fadeIn', 'fadeOut', 'fadeDim', 'fadeShadow',
        'workspaces', 'workspacesIn', 'workspacesOut', 'specialWorkspace',
        'specialWorkspaceIn', 'specialWorkspaceOut',
        'layers', 'layersIn', 'layersOut', 'fadeLayersIn', 'fadeLayersOut',
    ];
    const BEZIER_PRESETS = {
        linear: '0.0, 0.0, 1.0, 1.0',
        easeInSine: '0.12, 0, 0.39, 0',
        easeOutSine: '0.61, 1, 0.88, 1',
        easeInOutSine: '0.37, 0, 0.63, 1',
        easeInQuad: '0.11, 0, 0.5, 0',
        easeOutQuad: '0.5, 1, 0.89, 1',
        easeInOutQuad: '0.45, 0, 0.55, 1',
        easeInCubic: '0.32, 0, 0.67, 0',
        easeOutCubic: '0.33, 1, 0.68, 1',
        easeInOutCubic: '0.65, 0, 0.35, 1',
        easeInQuart: '0.5, 0, 0.75, 0',
        easeOutQuart: '0.25, 1, 0.5, 1',
        easeInOutQuart: '0.76, 0, 0.24, 1',
        easeInQuint: '0.64, 0, 0.78, 0',
        easeOutQuint: '0.23, 1, 0.32, 1',
        easeInOutQuint: '0.83, 0, 0.17, 1',
        easeInExpo: '0.7, 0, 0.84, 0',
        easeOutExpo: '0.16, 1, 0.3, 1',
        easeInOutExpo: '0.87, 0, 0.13, 1',
        easeInBack: '0.36, 0, 0.66, -0.56',
        easeOutBack: '0.34, 1.56, 0.64, 1',
        almostLinear: '0.5, 0.5, 0.75, 1.0',
        quick: '0.15, 0, 0.1, 1',
    };

    // ────────────────────── DOM References ──────────────────────

    const sidebarLinks = document.querySelectorAll('#sidebar li[data-category]');
    const settingsFormsContainer = document.getElementById('settings-forms');
    const allForms = settingsFormsContainer.querySelectorAll('.settings-form');
    const outputCodeElement = document.getElementById('generated-config');
    const copyButton = document.getElementById('copy-button');
    const lineCountEl = document.getElementById('line-count');
    const sectionCountEl = document.getElementById('section-count');
    const toastEl = document.getElementById('toast');

    const monitorListContainer = document.getElementById('monitor-list');
    const keybindListContainer = document.getElementById('keybind-list');
    const windowruleListContainer = document.getElementById('windowrule-list');
    const workspaceruleListContainer = document.getElementById('workspacerule-list');
    const autostartListContainer = document.getElementById('autostart-list');
    const bezierListContainer = document.getElementById('bezier-list');
    const animationAssignmentListContainer = document.getElementById('animation-assignment-list');
    const envListContainer = document.getElementById('env-list');
    const variableListContainer = document.getElementById('variable-list');

    // ────────────────────── Toast ──────────────────────

    let toastTimeout;
    function showToast(message, type = 'default') {
        clearTimeout(toastTimeout);
        toastEl.textContent = message;
        toastEl.className = `toast ${type}`;
        requestAnimationFrame(() => {
            toastEl.classList.add('show');
        });
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
        }, 2500);
    }

    // ────────────────────── Color Helpers ──────────────────────

    function formatColorToRgba(hexColor) {
        hexColor = String(hexColor).replace('#', '').toLowerCase();
        if (hexColor.length === 6) return `rgba(${hexColor}ff)`;
        if (hexColor.length === 8) return `rgba(${hexColor})`;
        if (hexColor.startsWith('rgba(') || hexColor.includes(' ')) return hexColor;
        return 'rgba(000000ff)';
    }

    function formatRgbaToHex(rgbaColor) {
        rgbaColor = String(rgbaColor);
        if (rgbaColor.includes(' ') || !rgbaColor.toLowerCase().startsWith('rgba(')) return '#000000';
        const hexPart = rgbaColor.substring(5, rgbaColor.length - 1).split(',')[0].trim();
        if (hexPart && hexPart.length >= 6) return `#${hexPart.substring(0, 6)}`;
        return '#000000';
    }

    // ────────────────────── Config Value Update ──────────────────────

    function updateConfigValue(keyString, value) {
        const keys = keyString.split('.');
        let current = hyprConfig;
        try {
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]] = current[keys[i]] || {};
            }
            const finalKey = keys[keys.length - 1];
            const el = document.querySelector(`[data-config-key="${keyString}"]:not(.color-text-display)`);
            const inputType = el ? el.type : 'text';

            if (inputType === 'checkbox') {
                current[finalKey] = Boolean(value);
            } else if (inputType === 'number') {
                const num = parseFloat(value);
                current[finalKey] = isNaN(num) ? 0 : num;
            } else if (inputType === 'color') {
                current[finalKey] = value;
                const displayEl = el?.parentElement?.querySelector('.color-text-display');
                if (displayEl) displayEl.value = value;
                if (el) el.value = formatRgbaToHex(value);
            } else {
                current[finalKey] = value;
            }
            updateConfigOutput();
        } catch (err) {
            console.error(`Config update error for "${keyString}":`, err);
        }
    }

    // ────────────────────── Config Generation ──────────────────────

    function generateConfigString() {
        const lines = [];
        const push = (...l) => lines.push(...l);
        const br = () => lines.push('');
        let anySections = 0;

        const startSection = (comment) => {
            if (anySections++) br();
            push(`# ${comment}`);
        };

        // Variables
        const vars = (hyprConfig.variables || []).filter(v => v.name);
        if (vars.length) {
            startSection('Variables');
            vars.forEach(v => {
                const name = v.name.startsWith('$') ? v.name : `$${v.name}`;
                push(`${name} = ${v.value}`);
            });
        }

        // Monitors
        const monitors = (hyprConfig.monitors || []).filter(m => m.resolution);
        if (monitors.length) {
            startSection('Monitors');
            monitors.forEach(m => {
                const parts = [m.name || '""', m.resolution || 'preferred', m.position || 'auto', String(m.scale ?? 'auto')];
                if (m.transform && m.transform !== 'normal') parts.push(`transform,${m.transform}`);
                push(`monitor=${parts.join(',')}`);
            });
        }

        // Env
        const envVars = (hyprConfig.env || []).filter(e => e.name);
        if (envVars.length) {
            startSection('Environment Variables');
            envVars.forEach(e => push(`env = ${e.name},${e.value}`));
        }

        // exec-once
        const execs = (hyprConfig.execOnce || []).filter(c => typeof c === 'string' && c.trim());
        if (execs.length) {
            startSection('Autostart');
            execs.forEach(c => push(`exec-once = ${c.trim()}`));
        }

        // ── input block ──
        const inp = hyprConfig.input;
        if (inp) {
            const inputLines = [];
            const skipTouchpad = new Set(['touchpad']);
            for (const k in inp) {
                if (skipTouchpad.has(k)) continue;
                const v = inp[k];
                if (v === '' || v === null || v === undefined) continue;
                if (typeof v === 'boolean' || v || v === 0) inputLines.push(`    ${k} = ${v}`);
            }
            if (inp.touchpad && typeof inp.touchpad === 'object') {
                const tpLines = [];
                for (const k in inp.touchpad) {
                    const v = inp.touchpad[k];
                    if (v === '' || v === null || v === undefined) continue;
                    if (typeof v === 'boolean' || v || v === 0) tpLines.push(`        ${k} = ${v}`);
                }
                if (tpLines.length) inputLines.push(`    touchpad {\n${tpLines.join('\n')}\n    }`);
            }
            if (inputLines.length) {
                startSection('Input');
                push(`input {\n${inputLines.join('\n')}\n}`);
            }
        }

        // ── general block ──
        const gen = hyprConfig.general;
        if (gen) {
            const genLines = [];
            for (const k in gen) {
                if (k === 'snap') continue;
                const v = gen[k];
                if (v === null || v === undefined) continue;
                if (typeof v === 'boolean' || v || v === 0 || v === '') genLines.push(`    ${k} = ${v}`);
            }
            if (gen.snap && typeof gen.snap === 'object') {
                const snapLines = [];
                for (const k in gen.snap) {
                    const v = gen.snap[k];
                    if (v === null || v === undefined) continue;
                    if (typeof v === 'boolean' || v || v === 0) snapLines.push(`        ${k} = ${v}`);
                }
                if (snapLines.length) genLines.push(`    snap {\n${snapLines.join('\n')}\n    }`);
            }
            if (genLines.length) {
                startSection('General');
                push(`general {\n${genLines.join('\n')}\n}`);
            }
        }

        // ── decoration block ──
        const dec = hyprConfig.decoration;
        if (dec) {
            const decLines = [];
            for (const k in dec) {
                if (k === 'blur' || k === 'shadow') continue;
                const v = dec[k];
                if (v === null || v === undefined) continue;
                if (typeof v === 'boolean' || v || v === 0) decLines.push(`    ${k} = ${v}`);
            }
            if (dec.shadow && typeof dec.shadow === 'object') {
                const shadowLines = [];
                for (const k in dec.shadow) {
                    const v = dec.shadow[k];
                    if (v === null || v === undefined || v === '') continue;
                    if (typeof v === 'boolean' || v || v === 0) shadowLines.push(`        ${k} = ${v}`);
                }
                if (shadowLines.length) decLines.push(`    shadow {\n${shadowLines.join('\n')}\n    }`);
            }
            if (dec.blur && typeof dec.blur === 'object') {
                const blurLines = [];
                for (const k in dec.blur) {
                    const v = dec.blur[k];
                    if (v === null || v === undefined) continue;
                    if (typeof v === 'boolean' || v || v === 0) blurLines.push(`        ${k} = ${v}`);
                }
                if (blurLines.length) decLines.push(`    blur {\n${blurLines.join('\n')}\n    }`);
            }
            if (decLines.length) {
                startSection('Decoration');
                push(`decoration {\n${decLines.join('\n')}\n}`);
            }
        }

        // ── animations block ──
        const anim = hyprConfig.animations;
        if (anim) {
            const animLines = [`    enabled = ${anim.enabled ? 'true' : 'false'}`];
            if (anim.first_launch_animation !== undefined) animLines.push(`    first_launch_animation = ${anim.first_launch_animation}`);
            (anim.beziers || []).forEach(b => {
                if (b.name && b.curve) animLines.push(`    bezier = ${b.name.trim()}, ${b.curve.trim()}`);
            });
            (anim.assignments || []).forEach(a => {
                if (!a.name) return;
                const parts = [a.name, a.enabled ? '1' : '0'];
                if (a.speed !== undefined && a.speed !== null) parts.push(a.speed);
                if (a.curve) parts.push(a.curve.trim());
                if (a.style && String(a.style).trim()) parts.push(String(a.style).trim());
                animLines.push(`    animation = ${parts.join(', ')}`);
            });
            startSection('Animations');
            push(`animations {\n${animLines.join('\n')}\n}`);
        }

        // ── layout blocks ──
        const pushLayout = (name, obj) => {
            if (!obj || typeof obj !== 'object') return;
            const lLines = [];
            for (const k in obj) {
                const v = obj[k];
                if (v === null || v === undefined) continue;
                if (typeof v === 'boolean' || v || v === 0 || v === '') lLines.push(`    ${k} = ${v}`);
            }
            if (lLines.length) {
                startSection(`${name.charAt(0).toUpperCase() + name.slice(1)} Layout`);
                push(`${name} {\n${lLines.join('\n')}\n}`);
            }
        };
        pushLayout('dwindle', hyprConfig.dwindle);
        pushLayout('master', hyprConfig.master);

        // ── gestures block ──
        const gest = hyprConfig.gestures;
        if (gest) {
            const gestLines = [];
            for (const k in gest) {
                const v = gest[k];
                if (v === null || v === undefined) continue;
                if (typeof v === 'boolean' || v || v === 0) gestLines.push(`    ${k} = ${v}`);
            }
            if (gestLines.length) {
                startSection('Gestures');
                push(`gestures {\n${gestLines.join('\n')}\n}`);
            }
        }

        // ── misc block ──
        const misc = hyprConfig.misc;
        if (misc) {
            const miscLines = [];
            for (const k in misc) {
                const v = misc[k];
                if (v === null || v === undefined || v === '') continue;
                if (typeof v === 'boolean' || v || v === 0) miscLines.push(`    ${k} = ${v}`);
            }
            if (miscLines.length) {
                startSection('Miscellaneous');
                push(`misc {\n${miscLines.join('\n')}\n}`);
            }
        }

        // ── per-device blocks ──
        const devices = (hyprConfig.devices || []).filter(d => d && d.name);
        if (devices.length) {
            startSection('Per-Device Config');
            devices.forEach(d => {
                const dLines = [`    name = ${d.name}`];
                for (const k in d) {
                    if (k === 'name') continue;
                    const v = d[k];
                    if (v === null || v === undefined) continue;
                    if (typeof v === 'boolean' || v || v === 0) dLines.push(`    ${k} = ${v}`);
                }
                push(`device {\n${dLines.join('\n')}\n}`);
            });
        }

        // ── workspace rules ──
        const wsRules = (hyprConfig.workspacerules || []).filter(w => w.workspace);
        if (wsRules.length) {
            startSection('Workspace Rules');
            wsRules.forEach(w => {
                const rules = [];
                if (w.monitor) rules.push(`monitor:${w.monitor}`);
                if (w.default) rules.push(`default:true`);
                if (w.persistent) rules.push(`persistent:true`);
                if (w.gapsin) rules.push(`gapsin:${w.gapsin}`);
                if (w.gapsout) rules.push(`gapsout:${w.gapsout}`);
                if (w.bordersize) rules.push(`bordersize:${w.bordersize}`);
                if (w.decorate === false) rules.push(`decorate:false`);
                if (w.shadow === false) rules.push(`shadow:false`);
                if (w.rounding === false) rules.push(`rounding:false`);
                if (w.on_created_empty) rules.push(`on-created-empty:${w.on_created_empty}`);
                if (rules.length) push(`workspace = ${w.workspace}, ${rules.join(', ')}`);
                else push(`workspace = ${w.workspace}`);
            });
        }

        // ── keybinds ──
        const keybinds = (hyprConfig.keybinds || []).filter(b => b && b.key && (b.type === 'unbind' || b.action));
        if (keybinds.length) {
            startSection('Keybinds');
            keybinds.forEach(b => {
                const modStr = Array.isArray(b.mods) ? b.mods.filter(Boolean).join('') : '';
                let line = `${b.type || 'bind'} = `;
                if (modStr) line += `${modStr}, `;
                line += b.key;
                if (b.type !== 'unbind') {
                    line += `, ${b.action}`;
                    if (b.arg && String(b.arg).trim()) line += `, ${String(b.arg).trim()}`;
                }
                push(line);
            });
        }

        // ── window rules v2 ──
        const wrules = (hyprConfig.windowrules || []).filter(r => r && r.rule && r.matchers);
        if (wrules.length) {
            startSection('Window Rules');
            wrules.forEach(r => {
                let line = `windowrulev2 = ${r.rule}`;
                if (r.value && String(r.value).trim()) line += ` ${String(r.value).trim()}`;
                line += `, ${r.matchers}`;
                push(line);
            });
        }

        const configStr = lines.join('\n').trim() + '\n';
        return configStr;
    }

    function updateConfigOutput() {
        const cfg = generateConfigString();
        outputCodeElement.textContent = cfg;
        const lineCount = cfg.split('\n').length;
        const sectionCount = (cfg.match(/^# /gm) || []).length;
        if (lineCountEl) lineCountEl.textContent = `${lineCount} lines`;
        if (sectionCountEl) sectionCountEl.textContent = `${sectionCount} sections`;
    }

    // ────────────────────── Form Navigation ──────────────────────

    function showForm(category) {
        allForms.forEach(f => f.classList.remove('active-form'));
        const form = document.getElementById(`form-${category}`);
        if (form) form.classList.add('active-form');
        sidebarLinks.forEach(l => l.classList.toggle('active', l.getAttribute('data-category') === category));
        // Scroll to top of content
        document.getElementById('main-content')?.scrollTo({ top: 0 });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => showForm(link.getAttribute('data-category')));
    });

    // ────────────────────── Input Handling ──────────────────────

    function handleInputChange(event) {
        const target = event.target;
        if (!target) return;

        const listName = target.getAttribute('data-list');
        const indexStr = target.getAttribute('data-index');
        const prop = target.getAttribute('data-prop');
        let value = target.type === 'checkbox' ? target.checked : target.value;

        // Static config key fields
        if (target.matches('[data-config-key]') && !listName) {
            if (target.matches('.color-text-display')) {
                const picker = target.parentElement?.querySelector('input[type="color"]');
                if (picker) updateConfigValue(picker.getAttribute('data-config-key'), value);
            } else if (target.type === 'color') {
                const rgba = formatColorToRgba(value);
                updateConfigValue(target.getAttribute('data-config-key'), rgba);
                const textEl = target.parentElement?.querySelector('.color-text-display');
                if (textEl) { textEl.value = rgba; }
            } else {
                updateConfigValue(target.getAttribute('data-config-key'), value);
            }
            return;
        }

        // Dynamic list items
        if (listName && indexStr !== null && prop !== null) {
            const index = parseInt(indexStr, 10);
            if (isNaN(index)) return;

            let targetArray;
            if (listName === 'beziers' || listName === 'assignments') {
                targetArray = hyprConfig.animations?.[listName];
            } else {
                targetArray = hyprConfig[listName];
            }

            if (!Array.isArray(targetArray) || targetArray[index] === undefined) return;
            const item = targetArray[index];

            if (listName === 'keybinds' && prop === 'mods' && target.type === 'checkbox') {
                if (!Array.isArray(item.mods)) item.mods = [];
                if (target.checked) { if (!item.mods.includes(target.value)) item.mods.push(target.value); }
                else item.mods = item.mods.filter(m => m !== target.value);
            } else if (listName === 'execOnce' && prop === 'command') {
                targetArray[index] = typeof value === 'string' ? value : '';
            } else if (typeof item === 'object' && item !== null) {
                const numericProps = new Set(['scale', 'sensitivity', 'speed', 'mfact', 'shadow_range', 'shadow_render_power', 'rounding', 'rounding_power', 'size', 'passes', 'active_opacity', 'inactive_opacity', 'fullscreen_opacity', 'vibrancy', 'vibrancy_darkness', 'noise', 'contrast', 'brightness', 'dim_strength', 'dim_special', 'dim_around', 'scroll_factor', 'repeat_rate', 'repeat_delay', 'workspace_swipe_fingers', 'workspace_swipe_distance', 'workspace_swipe_cancel_ratio', 'gapsin', 'gapsout', 'bordersize']);
                if (target.type === 'number' || numericProps.has(prop)) {
                    if (prop === 'scale' && value === 'auto') item[prop] = 'auto';
                    else { const num = parseFloat(value); item[prop] = isNaN(num) ? 0 : num; }
                } else if (target.type === 'checkbox') {
                    item[prop] = target.checked;
                } else {
                    item[prop] = value;
                }
                if (listName === 'keybinds' && prop === 'type') renderKeybindList();
                if (listName === 'beziers' && prop === 'name') renderAnimationAssignmentList();
            }
            updateConfigOutput();
        }

        // Bezier preset selector
        if (target.matches('.bezier-preset-selector')) {
            const ti = parseInt(target.getAttribute('data-target-index'), 10);
            const preset = target.value;
            if (!isNaN(ti) && preset && hyprConfig.animations?.beziers?.[ti]) {
                hyprConfig.animations.beziers[ti].curve = preset;
                renderBezierList();
                updateConfigOutput();
                target.value = '';
            }
        }
    }

    settingsFormsContainer.addEventListener('input', handleInputChange);
    settingsFormsContainer.addEventListener('change', handleInputChange);
    settingsFormsContainer.addEventListener('blur', (e) => {
        if (e.target?.matches('.color-text-display')) handleInputChange(e);
    }, true);

    // ────────────────────── Click Delegation ──────────────────────

    document.body.addEventListener('click', (event) => {
        const target = event.target.closest('button, label.import-btn, [data-list][data-index]') || event.target;
        if (!target) return;

        const actionMap = {
            'copy-button': copyConfigToClipboard,
            'download-button': downloadConfigFile,
            'reset-btn': resetConfig,
            'add-monitor-btn': addMonitor,
            'add-autostart-btn': addAutostart,
            'add-keybind-btn': addKeybind,
            'add-windowrule-btn': addWindowRule,
            'add-workspacerule-btn': addWorkspaceRule,
            'add-bezier-btn': addBezier,
            'add-animation-assignment-btn': addAnimationAssignment,
            'add-env-btn': addEnvVar,
            'add-variable-btn': addVariable,
        };

        const id = target.id || (target.tagName === 'BUTTON' ? target.id : null);
        if (id && actionMap[id]) { actionMap[id](); return; }

        // Env presets
        if (target.matches('.preset-btn')) {
            const name = target.getAttribute('data-env-name');
            const value = target.getAttribute('data-env-value');
            if (name) {
                if (!Array.isArray(hyprConfig.env)) hyprConfig.env = [];
                const existing = hyprConfig.env.find(e => e.name === name);
                if (existing) { showToast(`${name} already exists`, 'error'); return; }
                hyprConfig.env.push({ name, value: value || '' });
                renderEnvList();
                updateConfigOutput();
                showToast(`Added ${name}`, 'success');
            }
            return;
        }

        // Remove buttons
        if (target.matches('.remove-btn[data-list][data-index]')) {
            const listName = target.getAttribute('data-list');
            const index = parseInt(target.getAttribute('data-index'), 10);
            if (!isNaN(index)) removeFromList(listName, index);
        }
    });

    // ────────────────────── List Management ──────────────────────

    function removeFromList(listName, index) {
        let arr;
        if (listName === 'beziers' || listName === 'assignments') arr = hyprConfig.animations?.[listName];
        else arr = hyprConfig[listName];

        if (!Array.isArray(arr) || index < 0 || index >= arr.length) return;

        if (listName === 'beziers') {
            const removedName = arr[index].name;
            arr.splice(index, 1);
            (hyprConfig.animations?.assignments || []).forEach(a => { if (a.curve === removedName) a.curve = 'default'; });
            renderAnimationAssignmentList();
        } else {
            arr.splice(index, 1);
        }

        const renderMap = {
            monitors: renderMonitorList,
            execOnce: renderAutostartList,
            keybinds: renderKeybindList,
            windowrules: renderWindowRuleList,
            workspacerules: renderWorkspaceRuleList,
            assignments: renderAnimationAssignmentList,
            env: renderEnvList,
            variables: renderVariableList,
        };
        (renderMap[listName] || (() => { }))();
        if (listName === 'beziers') renderBezierList();
        updateConfigOutput();
    }

    // ────────────────────── Helpers ──────────────────────

    const createOptions = (options, selectedValue, addEmpty = false) => {
        let html = addEmpty ? '<option value="">-- Select --</option>' : '';
        html += (Array.isArray(options) ? options : []).map(opt => {
            const v = opt ?? '';
            return `<option value="${v}" ${String(selectedValue) === String(v) ? 'selected' : ''}>${v || '-- Select --'}</option>`;
        }).join('');
        return html;
    };

    function escAttr(str) {
        return String(str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    }

    // ────────────────────── Render: Monitors ──────────────────────

    function renderMonitorList() {
        monitorListContainer.innerHTML = '';
        (hyprConfig.monitors || []).forEach((m, i) => {
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            const transformOpts = createOptions(TRANSFORM_OPTIONS, m.transform);
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>Monitor ${i + 1}${m.name ? ` — ${m.name}` : ''}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="monitors">✕ Remove</button>
                </div>
                <div class="form-group"><label>Name</label><div class="form-input-wrapper"><input type="text" value="${escAttr(m.name)}" data-index="${i}" data-list="monitors" data-prop="name" placeholder="e.g. DP-1 (blank = any)"></div></div>
                <div class="form-group"><label>Resolution</label><div class="form-input-wrapper"><input type="text" value="${escAttr(m.resolution)}" data-index="${i}" data-list="monitors" data-prop="resolution" placeholder="1920x1080@144 or preferred"><span>Use <code>preferred</code> for native resolution.</span></div></div>
                <div class="form-group"><label>Position</label><div class="form-input-wrapper"><input type="text" value="${escAttr(m.position)}" data-index="${i}" data-list="monitors" data-prop="position" placeholder="0x0 or auto"><span>Pixel position offset. <code>auto</code> places monitors right of each other.</span></div></div>
                <div class="form-group"><label>Scale</label><div class="form-input-wrapper"><input type="text" value="${escAttr(m.scale)}" data-index="${i}" data-list="monitors" data-prop="scale" placeholder="1 or auto"><span>HiDPI scale factor. Use <code>auto</code> or a number like <code>1.5</code>.</span></div></div>
                <div class="form-group"><label>Transform</label><div class="form-input-wrapper"><select data-index="${i}" data-list="monitors" data-prop="transform">${transformOpts}</select><span>Screen rotation. Normal = no rotation.</span></div></div>
            `;
            monitorListContainer.appendChild(div);
        });
    }
    function addMonitor() {
        if (!Array.isArray(hyprConfig.monitors)) hyprConfig.monitors = [];
        hyprConfig.monitors.push({ name: '', resolution: 'preferred', position: 'auto', scale: 'auto', transform: 'normal' });
        renderMonitorList(); updateConfigOutput();
    }

    // ────────────────────── Render: Autostart ──────────────────────

    function renderAutostartList() {
        autostartListContainer.innerHTML = '';
        (hyprConfig.execOnce || []).forEach((cmd, i) => {
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            const val = typeof cmd === 'string' ? cmd : '';
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>Entry ${i + 1}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="execOnce">✕ Remove</button>
                </div>
                <div class="form-group"><label>Command</label><div class="form-input-wrapper"><input type="text" value="${escAttr(val)}" data-index="${i}" data-list="execOnce" data-prop="command" placeholder="e.g. waybar &amp;"><span>Full command with arguments. Will be run as <code>exec-once = ...</code></span></div></div>
            `;
            autostartListContainer.appendChild(div);
        });
    }
    function addAutostart() {
        if (!Array.isArray(hyprConfig.execOnce)) hyprConfig.execOnce = [];
        hyprConfig.execOnce.push('');
        renderAutostartList();
    }

    // ────────────────────── Render: Env Vars ──────────────────────

    function renderEnvList() {
        envListContainer.innerHTML = '';
        (hyprConfig.env || []).forEach((e, i) => {
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>${e.name || `Variable ${i + 1}`}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="env">✕ Remove</button>
                </div>
                <div class="form-group"><label>Name</label><div class="form-input-wrapper"><input type="text" value="${escAttr(e.name)}" data-index="${i}" data-list="env" data-prop="name" placeholder="VARIABLE_NAME"></div></div>
                <div class="form-group"><label>Value</label><div class="form-input-wrapper"><input type="text" value="${escAttr(e.value)}" data-index="${i}" data-list="env" data-prop="value" placeholder="value"></div></div>
            `;
            envListContainer.appendChild(div);
        });
    }
    function addEnvVar() {
        if (!Array.isArray(hyprConfig.env)) hyprConfig.env = [];
        hyprConfig.env.push({ name: '', value: '' });
        renderEnvList();
    }

    // ────────────────────── Render: Variables ──────────────────────

    function renderVariableList() {
        variableListContainer.innerHTML = '';
        (hyprConfig.variables || []).forEach((v, i) => {
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>${v.name ? `$${v.name.replace('$', '')}` : `Variable ${i + 1}`}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="variables">✕ Remove</button>
                </div>
                <div class="form-group"><label>Name</label><div class="form-input-wrapper"><input type="text" value="${escAttr(v.name)}" data-index="${i}" data-list="variables" data-prop="name" placeholder="mainMod"><span>Without the <code>$</code> prefix — it's added automatically.</span></div></div>
                <div class="form-group"><label>Value</label><div class="form-input-wrapper"><input type="text" value="${escAttr(v.value)}" data-index="${i}" data-list="variables" data-prop="value" placeholder="SUPER"></div></div>
            `;
            variableListContainer.appendChild(div);
        });
    }
    function addVariable() {
        if (!Array.isArray(hyprConfig.variables)) hyprConfig.variables = [];
        hyprConfig.variables.push({ name: '', value: '' });
        renderVariableList();
        updateConfigOutput();
    }

    // ────────────────────── Render: Keybinds ──────────────────────

    function renderKeybindList() {
        keybindListContainer.innerHTML = '';
        (hyprConfig.keybinds || []).forEach((bind, i) => {
            if (!bind || typeof bind !== 'object') return;
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            const typeOpts = createOptions(KEYBIND_TYPES, bind.type);
            const actionOpts = createOptions(KEYBIND_ACTIONS, bind.action, true);
            const currentMods = Array.isArray(bind.mods) ? bind.mods : [];
            const modBoxes = MODIFIERS.map(m =>
                `<label class="modifier-label"><input type="checkbox" value="${m}" data-index="${i}" data-list="keybinds" data-prop="mods" ${currentMods.includes(m) ? 'checked' : ''}><span>${m}</span></label>`
            ).join('');
            const isUnbind = bind.type === 'unbind';
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>Keybind ${i + 1}${bind.key ? ` — ${currentMods.join('+')}${currentMods.length ? '+' : ''}${bind.key}` : ''}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="keybinds">✕ Remove</button>
                </div>
                <div class="form-group"><label>Type</label><div class="form-input-wrapper"><select data-index="${i}" data-list="keybinds" data-prop="type">${typeOpts}</select><span><code>bind</code>=normal, <code>binde</code>=repeat, <code>bindl</code>=lock screen, <code>bindm</code>=mouse, <code>bindr</code>=on release</span></div></div>
                <div class="form-group"><label>Modifiers</label><div class="form-input-wrapper"><div class="modifier-group">${modBoxes}</div></div></div>
                <div class="form-group"><label>Key</label><div class="form-input-wrapper"><input type="text" value="${escAttr(bind.key)}" data-index="${i}" data-list="keybinds" data-prop="key" placeholder="e.g. Q, Return, mouse:272"><span>Key name or <code>mouse:272</code> for left click, <code>mouse:273</code> for right.</span></div></div>
                <div class="form-group"><label>Action</label><div class="form-input-wrapper"><select data-index="${i}" data-list="keybinds" data-prop="action" ${isUnbind ? 'disabled' : ''}>${actionOpts}</select></div></div>
                <div class="form-group"><label>Argument</label><div class="form-input-wrapper"><input type="text" value="${escAttr(bind.arg)}" data-index="${i}" data-list="keybinds" data-prop="arg" placeholder="(optional)" ${isUnbind ? 'disabled' : ''}></div></div>
            `;
            keybindListContainer.appendChild(div);
        });
    }
    function addKeybind() {
        if (!Array.isArray(hyprConfig.keybinds)) hyprConfig.keybinds = [];
        hyprConfig.keybinds.push({ type: 'bind', mods: ['$mainMod'], key: '', action: 'exec', arg: '' });
        renderKeybindList();
        updateConfigOutput();
    }

    // ────────────────────── Render: Window Rules ──────────────────────

    function renderWindowRuleList() {
        windowruleListContainer.innerHTML = '';
        (hyprConfig.windowrules || []).forEach((r, i) => {
            if (!r || typeof r !== 'object') return;
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            const ruleOpts = createOptions(WINDOW_RULES_V2, r.rule, true);
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>Rule ${i + 1}${r.rule ? ` — ${r.rule}` : ''}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="windowrules">✕ Remove</button>
                </div>
                <div class="form-group"><label>Rule</label><div class="form-input-wrapper"><select data-index="${i}" data-list="windowrules" data-prop="rule">${ruleOpts}</select><span>What action to apply to the matched window.</span></div></div>
                <div class="form-group"><label>Value</label><div class="form-input-wrapper"><input type="text" value="${escAttr(r.value)}" data-index="${i}" data-list="windowrules" data-prop="value" placeholder="(optional) e.g. 0.8, 1, special:name"><span>Rule argument, if the rule requires one.</span></div></div>
                <div class="form-group"><label>Matchers</label><div class="form-input-wrapper"><input type="text" value="${escAttr(r.matchers)}" data-index="${i}" data-list="windowrules" data-prop="matchers" placeholder="e.g. class:^(kitty)$, title:.*"><span>Comma-separated matchers. Supported: <code>class</code>, <code>title</code>, <code>xwayland</code>, <code>floating</code>, <code>fullscreen</code>, <code>workspace</code>, <code>pinned</code>, <code>focus</code>, <code>onworkspace</code></span></div></div>
            `;
            windowruleListContainer.appendChild(div);
        });
    }
    function addWindowRule() {
        if (!Array.isArray(hyprConfig.windowrules)) hyprConfig.windowrules = [];
        hyprConfig.windowrules.push({ rule: '', matchers: '', value: '' });
        renderWindowRuleList();
        updateConfigOutput();
    }

    // ────────────────────── Render: Workspace Rules ──────────────────────

    function renderWorkspaceRuleList() {
        workspaceruleListContainer.innerHTML = '';
        (hyprConfig.workspacerules || []).forEach((w, i) => {
            if (!w || typeof w !== 'object') return;
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>Workspace Rule ${i + 1}${w.workspace ? ` — ${w.workspace}` : ''}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="workspacerules">✕ Remove</button>
                </div>
                <div class="form-group"><label>Workspace</label><div class="form-input-wrapper"><input type="text" value="${escAttr(w.workspace)}" data-index="${i}" data-list="workspacerules" data-prop="workspace" placeholder="e.g. 1, name:browser, special:magic"><span>Workspace name or number this rule applies to.</span></div></div>
                <div class="form-group"><label>Monitor</label><div class="form-input-wrapper"><input type="text" value="${escAttr(w.monitor)}" data-index="${i}" data-list="workspacerules" data-prop="monitor" placeholder="e.g. DP-1"><span>Bind workspace to this monitor.</span></div></div>
                <div class="form-group"><label>Default</label><div class="form-input-wrapper checkbox-row"><input type="checkbox" data-index="${i}" data-list="workspacerules" data-prop="default" ${w.default ? 'checked' : ''}><label>Make this workspace the default for its monitor.</label></div></div>
                <div class="form-group"><label>Persistent</label><div class="form-input-wrapper checkbox-row"><input type="checkbox" data-index="${i}" data-list="workspacerules" data-prop="persistent" ${w.persistent ? 'checked' : ''}><label>Don't destroy workspace when it becomes empty.</label></div></div>
                <div class="form-group"><label>Gaps In</label><div class="form-input-wrapper"><input type="number" value="${w.gapsin ?? ''}" data-index="${i}" data-list="workspacerules" data-prop="gapsin" placeholder="inherit"><span>Override inner gaps for this workspace.</span></div></div>
                <div class="form-group"><label>Gaps Out</label><div class="form-input-wrapper"><input type="number" value="${w.gapsout ?? ''}" data-index="${i}" data-list="workspacerules" data-prop="gapsout" placeholder="inherit"></div></div>
                <div class="form-group"><label>Border Size</label><div class="form-input-wrapper"><input type="number" value="${w.bordersize ?? ''}" data-index="${i}" data-list="workspacerules" data-prop="bordersize" placeholder="inherit"></div></div>
                <div class="form-group"><label>On Created Empty</label><div class="form-input-wrapper"><input type="text" value="${escAttr(w.on_created_empty)}" data-index="${i}" data-list="workspacerules" data-prop="on_created_empty" placeholder="e.g. kitty"><span>Command to run when this workspace is first opened empty.</span></div></div>
            `;
            workspaceruleListContainer.appendChild(div);
        });
    }
    function addWorkspaceRule() {
        if (!Array.isArray(hyprConfig.workspacerules)) hyprConfig.workspacerules = [];
        hyprConfig.workspacerules.push({ workspace: '', monitor: '', default: false, persistent: false, gapsin: '', gapsout: '', bordersize: '', on_created_empty: '' });
        renderWorkspaceRuleList();
        updateConfigOutput();
    }

    // ────────────────────── Render: Beziers ──────────────────────

    function drawBezierPreview(canvas, curve) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const parts = curve.split(',').map(s => parseFloat(s.trim()));
        if (parts.length < 4 || parts.some(isNaN)) {
            ctx.fillStyle = 'rgba(127,132,156,0.3)';
            ctx.fillRect(0, 0, w, h);
            return;
        }
        const [x1, y1, x2, y2] = parts;

        ctx.strokeStyle = 'rgba(137,180,250,0.9)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();

        const pad = 8;
        const bw = w - pad * 2, bh = h - pad * 2;

        // Draw bezier by approximation
        ctx.moveTo(pad, h - pad);
        for (let t = 0; t <= 1; t += 0.01) {
            const mt = 1 - t;
            // Cubic bezier: P0=(0,0) P1=(x1,y1) P2=(x2,y2) P3=(1,1)
            const bx = 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t;
            const by = 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t;
            ctx.lineTo(pad + bx * bw, h - pad - by * bh);
        }
        ctx.stroke();

        // Control point indicators
        ctx.strokeStyle = 'rgba(203,166,247,0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(pad, h - pad);
        ctx.lineTo(pad + x1 * bw, h - pad - y1 * bh);
        ctx.moveTo(pad + bw, pad);
        ctx.lineTo(pad + x2 * bw, h - pad - y2 * bh);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function renderBezierList() {
        bezierListContainer.innerHTML = '';
        (hyprConfig.animations?.beziers || []).forEach((b, i) => {
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            const presetOpts = Object.keys(BEZIER_PRESETS).map(p =>
                `<option value="${BEZIER_PRESETS[p]}">${p}</option>`
            ).join('');
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>${b.name || `Curve ${i + 1}`}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="beziers">✕ Remove</button>
                </div>
                <div class="bezier-item-inner">
                    <canvas class="bezier-preview-canvas" width="80" height="80" data-bezier-index="${i}"></canvas>
                    <div class="bezier-item-fields" style="flex:1">
                        <div class="form-group"><label>Name</label><div class="form-input-wrapper"><input type="text" value="${escAttr(b.name)}" data-index="${i}" data-list="beziers" data-prop="name" placeholder="myCurve"></div></div>
                        <div class="form-group"><label>Control Points</label><div class="form-input-wrapper"><input type="text" value="${escAttr(b.curve)}" data-index="${i}" data-list="beziers" data-prop="curve" placeholder="0.1, 0.9, 0.2, 1.0"><span>Format: <code>x1, y1, x2, y2</code> — cubic bezier control points.</span></div></div>
                        <div class="form-group"><label>Preset</label><div class="form-input-wrapper"><select class="bezier-preset-selector" data-target-index="${i}"><option value="">— Apply Preset —</option>${presetOpts}</select></div></div>
                    </div>
                </div>
            `;
            bezierListContainer.appendChild(div);
            const canvas = div.querySelector('.bezier-preview-canvas');
            if (canvas) drawBezierPreview(canvas, b.curve || '');
        });

        // Redraw preview on curve input
        bezierListContainer.querySelectorAll('[data-prop="curve"]').forEach(input => {
            input.addEventListener('input', () => {
                const idx = parseInt(input.getAttribute('data-index'), 10);
                const canvas = bezierListContainer.querySelector(`[data-bezier-index="${idx}"]`);
                if (canvas) drawBezierPreview(canvas, input.value);
            });
        });
    }
    function addBezier() {
        if (!hyprConfig.animations) hyprConfig.animations = { enabled: true, beziers: [], assignments: [] };
        if (!Array.isArray(hyprConfig.animations.beziers)) hyprConfig.animations.beziers = [];
        hyprConfig.animations.beziers.push({ name: '', curve: '0.25, 1, 0.5, 1' });
        renderBezierList();
    }

    // ────────────────────── Render: Animation Assignments ──────────────────────

    function renderAnimationAssignmentList() {
        animationAssignmentListContainer.innerHTML = '';
        const availableCurves = ['default', 'linear', ...(hyprConfig.animations?.beziers || []).map(b => b.name).filter(Boolean)];
        (hyprConfig.animations?.assignments || []).forEach((anim, i) => {
            if (!anim || typeof anim !== 'object') return;
            const div = document.createElement('div');
            div.className = 'dynamic-list-item';
            const nameOpts = createOptions(ANIMATION_NAMES, anim.name, true);
            const curveOpts = createOptions(availableCurves, anim.curve);
            div.innerHTML = `
                <div class="list-item-header">
                    <h5>${anim.name || `Animation ${i + 1}`}</h5>
                    <button type="button" class="remove-btn" data-index="${i}" data-list="assignments">✕ Remove</button>
                </div>
                <div class="form-group"><label>Type</label><div class="form-input-wrapper"><select data-index="${i}" data-list="assignments" data-prop="name">${nameOpts}</select></div></div>
                <div class="form-group"><label>Enabled</label><div class="form-input-wrapper checkbox-row"><input type="checkbox" data-index="${i}" data-list="assignments" data-prop="enabled" ${anim.enabled ? 'checked' : ''}><label>Enable this animation.</label></div></div>
                <div class="form-group"><label>Speed</label><div class="form-input-wrapper"><input type="number" value="${anim.speed ?? 7}" min="0.1" step="0.1" data-index="${i}" data-list="assignments" data-prop="speed"><span>Duration as a fraction of the bezier's period. Lower = faster.</span></div></div>
                <div class="form-group"><label>Curve</label><div class="form-input-wrapper"><select data-index="${i}" data-list="assignments" data-prop="curve">${curveOpts}</select><span>Bezier curve defined above (or <code>default</code>/<code>linear</code>).</span></div></div>
                <div class="form-group"><label>Style</label><div class="form-input-wrapper"><input type="text" value="${escAttr(anim.style)}" data-index="${i}" data-list="assignments" data-prop="style" placeholder="(optional) e.g. popin 80%, fade, slide"><span>Optional animation style modifier.</span></div></div>
            `;
            animationAssignmentListContainer.appendChild(div);
        });
    }
    function addAnimationAssignment() {
        if (!hyprConfig.animations) hyprConfig.animations = { enabled: true, beziers: [], assignments: [] };
        if (!Array.isArray(hyprConfig.animations.assignments)) hyprConfig.animations.assignments = [];
        hyprConfig.animations.assignments.push({ name: '', enabled: true, speed: 7, curve: 'default', style: '' });
        renderAnimationAssignmentList();
    }

    // ────────────────────── Init: Static Fields ──────────────────────

    function initStaticFields() {
        document.querySelectorAll('[data-config-key]').forEach(el => {
            const keyStr = el.getAttribute('data-config-key');
            const keys = keyStr.split('.');
            let value = hyprConfig;
            try {
                keys.forEach(k => { value = value[k]; });
                if (value === undefined || value === null) return;

                if (el.type === 'checkbox') {
                    el.checked = Boolean(value);
                } else if (el.type === 'color') {
                    const textEl = el.parentElement?.querySelector('.color-text-display');
                    if (textEl) textEl.value = String(value);
                    el.value = formatRgbaToHex(String(value));
                } else if (el.matches('.color-text-display')) {
                    // handled by color picker logic
                } else if (el.tagName === 'SELECT') {
                    const exists = [...el.options].some(o => o.value == value);
                    if (exists) el.value = String(value);
                } else {
                    el.value = value;
                }
            } catch (_) { /* key path doesn't exist in config, skip */ }
        });
    }

    // ────────────────────── Actions ──────────────────────

    function copyConfigToClipboard() {
        const cfg = outputCodeElement.textContent;
        navigator.clipboard.writeText(cfg).then(() => {
            copyButton.textContent = '✓ Copied!';
            copyButton.classList.add('copied');
            showToast('Config copied to clipboard!', 'success');
            setTimeout(() => {
                copyButton.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy to Clipboard`;
                copyButton.classList.remove('copied');
            }, 1800);
        }).catch(() => {
            showToast('Copy failed — try manually', 'error');
        });
    }

    function downloadConfigFile() {
        const cfg = outputCodeElement.textContent;
        const blob = new Blob([cfg], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'hyprland.conf';
        document.body.appendChild(a); a.click();
        document.body.removeChild(a); URL.revokeObjectURL(url);
        showToast('Downloaded hyprland.conf', 'success');
    }

    function resetConfig() {
        if (!confirm('Reset all settings to defaults?')) return;
        hyprConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        renderAll();
        initStaticFields();
        updateConfigOutput();
        showToast('Config reset to defaults', 'success');
    }

    // ────────────────────── Import Config ──────────────────────

    document.getElementById('import-file-input')?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                parseAndImportConfig(ev.target.result);
                showToast('Config imported successfully!', 'success');
            } catch (err) {
                showToast('Import failed: ' + err.message, 'error');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    });

    function parseAndImportConfig(text) {
        // Basic parser for hyprland.conf format
        const lines = text.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));

        // Reset to defaults first
        hyprConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        hyprConfig.monitors = [];
        hyprConfig.execOnce = [];
        hyprConfig.env = [];
        hyprConfig.keybinds = [];
        hyprConfig.windowrules = [];
        hyprConfig.workspacerules = [];
        hyprConfig.variables = [];

        let sectionStack = [];
        const currentSection = () => sectionStack.join('.');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.endsWith('{')) {
                const sectionName = line.replace('{', '').trim();
                sectionStack.push(sectionName);
                continue;
            }
            if (line === '}') { sectionStack.pop(); continue; }

            // Top-level assignments
            const eqIdx = line.indexOf('=');
            if (eqIdx === -1) continue;
            const key = line.substring(0, eqIdx).trim();
            const val = line.substring(eqIdx + 1).trim();

            if (key.startsWith('$')) {
                hyprConfig.variables.push({ name: key.substring(1), value: val });
                continue;
            }
            if (key === 'monitor') {
                const parts = val.split(',');
                hyprConfig.monitors.push({
                    name: parts[0]?.trim() === '""' ? '' : (parts[0]?.trim() || ''),
                    resolution: parts[1]?.trim() || 'preferred',
                    position: parts[2]?.trim() || 'auto',
                    scale: parts[3]?.trim() || 'auto',
                    transform: 'normal'
                });
                continue;
            }
            if (key === 'exec-once') { hyprConfig.execOnce.push(val); continue; }
            if (key === 'env') {
                const commaIdx = val.indexOf(',');
                hyprConfig.env.push({ name: val.substring(0, commaIdx).trim(), value: val.substring(commaIdx + 1).trim() });
                continue;
            }
            if (['bind', 'bindm', 'bindl', 'binde', 'bindel', 'bindr', 'bindn', 'unbind'].includes(key)) {
                const parts = val.split(',').map(s => s.trim());
                const mods = parts[0] ? parts[0].split('').includes('$') ? [parts[0]] : parts[0].split('').reduce((acc) => acc, [parts[0]]) : [];
                hyprConfig.keybinds.push({
                    type: key,
                    mods: parts[0] ? parts[0].split('').join('') === '' ? [] : [parts[0]] : [],
                    key: parts[1] || '',
                    action: parts[2] || '',
                    arg: parts.slice(3).join(',') || ''
                });
                continue;
            }
            if (key === 'windowrulev2' || key === 'windowrule') {
                const parts = val.split(',');
                hyprConfig.windowrules.push({
                    rule: parts[0]?.trim() || '',
                    matchers: parts.slice(1).join(',').trim(),
                    value: ''
                });
                continue;
            }
            if (key === 'workspace') {
                const parts = val.split(',');
                const rule = { workspace: parts[0]?.trim() || '' };
                parts.slice(1).forEach(p => {
                    const [k, v] = p.split(':').map(s => s.trim());
                    if (k === 'monitor') rule.monitor = v;
                    if (k === 'default') rule.default = v === 'true';
                    if (k === 'persistent') rule.persistent = v === 'true';
                    if (k === 'gapsin') rule.gapsin = parseFloat(v);
                    if (k === 'gapsout') rule.gapsout = parseFloat(v);
                    if (k === 'bordersize') rule.bordersize = parseFloat(v);
                    if (k === 'on-created-empty') rule.on_created_empty = v;
                });
                hyprConfig.workspacerules.push(rule);
                continue;
            }

            // Section-based keys
            const section = currentSection();
            if (!section) continue;

            const setNestedValue = (obj, pathParts, value) => {
                let cur = obj;
                for (let j = 0; j < pathParts.length - 1; j++) {
                    if (!cur[pathParts[j]]) cur[pathParts[j]] = {};
                    cur = cur[pathParts[j]];
                }
                const finalKey = pathParts[pathParts.length - 1];
                if (value === 'true') cur[finalKey] = true;
                else if (value === 'false') cur[finalKey] = false;
                else if (!isNaN(parseFloat(value)) && !/[a-df-z]/i.test(value)) cur[finalKey] = parseFloat(value);
                else cur[finalKey] = value;
            };

            const sectionParts = section.split('.');
            const rootSection = sectionParts[0];

            if (rootSection === 'animations') {
                if (key === 'bezier') {
                    const p = val.split(',').map(s => s.trim());
                    if (!Array.isArray(hyprConfig.animations.beziers)) hyprConfig.animations.beziers = [];
                    hyprConfig.animations.beziers.push({ name: p[0], curve: p.slice(1).join(',').trim() });
                } else if (key === 'animation') {
                    const p = val.split(',').map(s => s.trim());
                    if (!Array.isArray(hyprConfig.animations.assignments)) hyprConfig.animations.assignments = [];
                    hyprConfig.animations.assignments.push({
                        name: p[0] || '',
                        enabled: p[1] !== '0',
                        speed: parseFloat(p[2]) || 7,
                        curve: p[3] || 'default',
                        style: p[4] || ''
                    });
                } else {
                    setNestedValue(hyprConfig.animations, [key], val);
                }
            } else if (hyprConfig[rootSection] !== undefined || ['general', 'decoration', 'input', 'gestures', 'misc', 'dwindle', 'master'].includes(rootSection)) {
                if (!hyprConfig[rootSection]) hyprConfig[rootSection] = {};
                setNestedValue(hyprConfig[rootSection], [...sectionParts.slice(1), key], val);
            }
        }

        renderAll();
        initStaticFields();
        updateConfigOutput();
    }

    // ────────────────────── Render All Lists ──────────────────────

    function renderAll() {
        renderMonitorList();
        renderAutostartList();
        renderEnvList();
        renderVariableList();
        renderKeybindList();
        renderWindowRuleList();
        renderWorkspaceRuleList();
        renderBezierList();
        renderAnimationAssignmentList();
    }

    // ────────────────────── Init ──────────────────────

    function init() {
        initStaticFields();
        renderAll();
        showForm('general');
        updateConfigOutput();
    }

    init();
});