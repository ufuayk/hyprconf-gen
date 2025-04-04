document.addEventListener('DOMContentLoaded', () => {
    let hyprConfig = {
        variables: [ // Değişkenler eklendi
            { name: 'mainMod', value: 'SUPER' },
            { name: 'terminal', value: 'kitty' },
            { name: 'fileManager', value: 'dolphin' },
            { name: 'menu', value: 'wofi --show drun' }
        ],
        monitors: [ { name: '', resolution: 'preferred', position: 'auto', scale: 'auto', transform: 'normal' } ],
        execOnce: [],
        env: [ { name: 'XCURSOR_SIZE', value: '24' }, { name: 'HYPRCURSOR_SIZE', value: '24' } ],
        input: { kb_layout: 'us', kb_variant: '', kb_model: '', kb_options: '', kb_rules: '', follow_mouse: 1, sensitivity: 0, touchpad: { natural_scroll: false } },
        general: { gaps_in: 5, gaps_out: 20, border_size: 2, 'col.active_border': 'rgba(33ccffee) rgba(00ff99ee) 45deg', 'col.inactive_border': 'rgba(595959aa)', resize_on_border: false, allow_tearing: false, layout: 'dwindle' },
        decoration: { rounding: 10, active_opacity: 1.0, inactive_opacity: 1.0, shadow: { enabled: true, range: 4, render_power: 3, color: 'rgba(1a1a1aee)' }, blur: { enabled: true, size: 3, passes: 1, vibrancy: 0.1696 } },
        animations: { enabled: true, beziers: [ { name: 'easeOutQuint', curve: '0.23,1,0.32,1' }, { name: 'easeInOutCubic', curve: '0.65,0.05,0.36,1' }, { name: 'linear', curve: '0,0,1,1' }, { name: 'almostLinear', curve: '0.5,0.5,0.75,1.0' }, { name: 'quick', curve: '0.15,0,0.1,1' } ], assignments: [ { name: 'global', enabled: true, speed: 10, curve: 'default' }, { name: 'border', enabled: true, speed: 5.39, curve: 'easeOutQuint' }, { name: 'windows', enabled: true, speed: 4.79, curve: 'easeOutQuint' }, { name: 'windowsIn', enabled: true, speed: 4.1, curve: 'easeOutQuint', style: 'popin 87%' }, { name: 'windowsOut', enabled: true, speed: 1.49, curve: 'linear', style: 'popin 87%' }, { name: 'fadeIn', enabled: true, speed: 1.73, curve: 'almostLinear' }, { name: 'fadeOut', enabled: true, speed: 1.46, curve: 'almostLinear' }, { name: 'fade', enabled: true, speed: 3.03, curve: 'quick' }, { name: 'layers', enabled: true, speed: 3.81, curve: 'easeOutQuint' }, { name: 'layersIn', enabled: true, speed: 4, curve: 'easeOutQuint', style: 'fade' }, { name: 'layersOut', enabled: true, speed: 1.5, curve: 'linear', style: 'fade' }, { name: 'fadeLayersIn', enabled: true, speed: 1.79, curve: 'almostLinear' }, { name: 'fadeLayersOut', enabled: true, speed: 1.39, curve: 'almostLinear' }, { name: 'workspaces', enabled: true, speed: 1.94, curve: 'almostLinear', style: 'fade' }, { name: 'workspacesIn', enabled: true, speed: 1.21, curve: 'almostLinear', style: 'fade' }, { name: 'workspacesOut', enabled: true, speed: 1.94, curve: 'almostLinear', style: 'fade' } ] },
        dwindle: { pseudotile: true, preserve_split: true },
        master: { new_status: 'master' },
        gestures: { workspace_swipe: false },
        misc: { force_default_wallpaper: -1, disable_hyprland_logo: false },
        devices: [ { name: 'epic-mouse-v1', sensitivity: -0.5 } ],
        keybinds: [ { type: 'bind', mods: ['$mainMod'], key: 'Q', action: 'exec', arg: '$terminal' }, { type: 'bind', mods: ['$mainMod'], key: 'C', action: 'killactive', arg: '' }, { type: 'bind', mods: ['$mainMod'], key: 'M', action: 'exit', arg: '' }, { type: 'bind', mods: ['$mainMod'], key: 'E', action: 'exec', arg: '$fileManager' }, { type: 'bind', mods: ['$mainMod'], key: 'V', action: 'togglefloating', arg: '' }, { type: 'bind', mods: ['$mainMod'], key: 'R', action: 'exec', arg: '$menu' }, { type: 'bind', mods: ['$mainMod'], key: 'P', action: 'pseudo', arg: '' }, { type: 'bind', mods: ['$mainMod'], key: 'J', action: 'togglesplit', arg: '' }, { type: 'bind', mods: ['$mainMod'], key: 'left', action: 'movefocus', arg: 'l' }, { type: 'bind', mods: ['$mainMod'], key: 'right', action: 'movefocus', arg: 'r' }, { type: 'bind', mods: ['$mainMod'], key: 'up', action: 'movefocus', arg: 'u' }, { type: 'bind', mods: ['$mainMod'], key: 'down', action: 'movefocus', arg: 'd' }, { type: 'bind', mods: ['$mainMod'], key: '1', action: 'workspace', arg: '1' }, { type: 'bind', mods: ['$mainMod'], key: '2', action: 'workspace', arg: '2' }, { type: 'bind', mods: ['$mainMod'], key: '3', action: 'workspace', arg: '3' }, { type: 'bind', mods: ['$mainMod'], key: '4', action: 'workspace', arg: '4' }, { type: 'bind', mods: ['$mainMod'], key: '5', action: 'workspace', arg: '5' }, { type: 'bind', mods: ['$mainMod'], key: '6', action: 'workspace', arg: '6' }, { type: 'bind', mods: ['$mainMod'], key: '7', action: 'workspace', arg: '7' }, { type: 'bind', mods: ['$mainMod'], key: '8', action: 'workspace', arg: '8' }, { type: 'bind', mods: ['$mainMod'], key: '9', action: 'workspace', arg: '9' }, { type: 'bind', mods: ['$mainMod'], key: '0', action: 'workspace', arg: '10' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '1', action: 'movetoworkspace', arg: '1' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '2', action: 'movetoworkspace', arg: '2' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '3', action: 'movetoworkspace', arg: '3' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '4', action: 'movetoworkspace', arg: '4' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '5', action: 'movetoworkspace', arg: '5' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '6', action: 'movetoworkspace', arg: '6' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '7', action: 'movetoworkspace', arg: '7' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '8', action: 'movetoworkspace', arg: '8' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '9', action: 'movetoworkspace', arg: '9' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: '0', action: 'movetoworkspace', arg: '10' }, { type: 'bind', mods: ['$mainMod'], key: 'S', action: 'togglespecialworkspace', arg: 'magic' }, { type: 'bind', mods: ['$mainMod', 'SHIFT'], key: 'S', action: 'movetoworkspace', arg: 'special:magic' }, { type: 'bind', mods: ['$mainMod'], key: 'mouse_down', action: 'workspace', arg: 'e+1' }, { type: 'bind', mods: ['$mainMod'], key: 'mouse_up', action: 'workspace', arg: 'e-1' }, { type: 'bindm', mods: ['$mainMod'], key: 'mouse:272', action: 'movewindow', arg: '' }, { type: 'bindm', mods: ['$mainMod'], key: 'mouse:273', action: 'resizewindow', arg: '' }, { type: 'bindel', mods: [], key: 'XF86AudioRaiseVolume', action: 'exec', arg: 'wpctl set-volume -l 1 @DEFAULT_AUDIO_SINK@ 5%+' }, { type: 'bindel', mods: [], key: 'XF86AudioLowerVolume', action: 'exec', arg: 'wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-' }, { type: 'bindel', mods: [], key: 'XF86AudioMute', action: 'exec', arg: 'wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle' }, { type: 'bindel', mods: [], key: 'XF86AudioMicMute', action: 'exec', arg: 'wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle' }, { type: 'bindel', mods: [], key: 'XF86MonBrightnessUp', action: 'exec', arg: 'brightnessctl s 10%+' }, { type: 'bindel', mods: [], key: 'XF86MonBrightnessDown', action: 'exec', arg: 'brightnessctl s 10%-' }, { type: 'bindl', mods: [], key: 'XF86AudioNext', action: 'exec', arg: 'playerctl next' }, { type: 'bindl', mods: [], key: 'XF86AudioPause', action: 'exec', arg: 'playerctl play-pause' }, { type: 'bindl', mods: [], key: 'XF86AudioPlay', action: 'exec', arg: 'playerctl play-pause' }, { type: 'bindl', mods: [], key: 'XF86AudioPrev', action: 'exec', arg: 'playerctl previous' } ],
        windowrules: [ { rule: 'suppressevent', condition: 'maximize, class:.*', value: '' }, { rule: 'nofocus', condition: 'class:^$,title:^$,xwayland:1,floating:1,fullscreen:0,pinned:0', value: ''} ]
    };

    const sidebarLinks = document.querySelectorAll('#sidebar li[data-category]');
    const settingsFormsContainer = document.getElementById('settings-forms');
    const allForms = settingsFormsContainer.querySelectorAll('.settings-form');
    const outputCodeElement = document.getElementById('generated-config');
    const copyButton = document.getElementById('copy-button');
    const downloadButton = document.getElementById('download-button');

    const monitorListContainer = document.getElementById('monitor-list');
    const keybindListContainer = document.getElementById('keybind-list');
    const windowruleListContainer = document.getElementById('windowrule-list');
    const autostartListContainer = document.getElementById('autostart-list');
    const bezierListContainer = document.getElementById('bezier-list');
    const animationAssignmentListContainer = document.getElementById('animation-assignment-list');

    const KEYBIND_TYPES = ['bind', 'bindm', 'bindl', 'binde', 'unbind'];
    const KEYBIND_ACTIONS = [ '', 'exec', 'killactive', 'exit', 'togglefloating', 'fullscreen', 'movetoworkspace', 'workspace', 'movewindow', 'resizewindow', 'pseudo', 'focusmonitor', 'movefocusedmon', 'focuswindow', 'cyclenext', 'swapnext', 'movecursortocorner', 'pass', 'togglegroup', 'changegroupactive', 'focuscurrentorlast', 'togglesplit', 'dpms', 'togglespecialworkspace', 'movetoworkspacesilent' ];
    const MODIFIERS = ['$mainMod', 'SUPER', 'ALT', 'CTRL', 'SHIFT', 'LOCK', 'MOD2', 'MOD3', 'MOD5'];
    const WINDOW_RULES = [ '', 'float', 'tile', 'fullscreen', 'maximize', 'nofocus', 'noborder', 'noinitialfocus', 'opacity', 'workspace', 'monitor', 'size', 'move', 'idleinhibit', 'center', 'pseudo', 'rounding', 'animation', 'pin', 'windowdance', 'unset', 'nomaxsize', 'dimaround', 'suppressevent' ];
    const TRANSFORM_OPTIONS = ['normal', '90', '180', '270', 'flipped', 'flipped-90', 'flipped-180', 'flipped-270'];
    const ANIMATION_NAMES = ['global', 'windows', 'windowsIn', 'windowsOut', 'border', 'borderangle', 'fade', 'fadeIn', 'fadeOut', 'workspaces', 'workspacesIn', 'workspacesOut', 'specialWorkspace', 'layers', 'layersIn', 'layersOut', 'fadeLayersIn', 'fadeLayersOut'];
    const BEZIER_PRESETS = {
        linear: '0.0, 0.0, 1.0, 1.0', easeInSine: '0.12, 0, 0.39, 0', easeOutSine: '0.61, 1, 0.88, 1', easeInOutSine: '0.37, 0, 0.63, 1', easeInQuad: '0.11, 0, 0.5, 0', easeOutQuad: '0.5, 1, 0.89, 1', easeInOutQuad: '0.45, 0, 0.55, 1', easeInCubic: '0.32, 0, 0.67, 0', easeOutCubic: '0.33, 1, 0.68, 1', easeInOutCubic: '0.65, 0, 0.35, 1', easeOutQuint: '0.23,1,0.32,1', almostLinear: '0.5,0.5,0.75,1.0', quick: '0.15,0,0.1,1'
    };

    function formatColorToRgba(hexColor) {
        hexColor = String(hexColor).replace('#', '').toLowerCase();
        if (hexColor.length === 6) { return `rgba(${hexColor}ff)`; }
        else if (hexColor.length === 8) { return `rgba(${hexColor})`; }
        else if (hexColor.startsWith('rgba(') || hexColor.includes(' ')) { return hexColor; }
        return 'rgba(000000ff)';
    }

    function formatRgbaToHex(rgbaColor) {
         rgbaColor = String(rgbaColor);
         if (rgbaColor.includes(' ') || !rgbaColor.toLowerCase().startsWith('rgba(')) { return '#000000'; }
        const hexPart = rgbaColor.substring(5, rgbaColor.length - 1).split(',')[0].trim();
        if (hexPart && hexPart.length >= 6) { return `#${hexPart.substring(0, 6)}`; }
        return '#000000';
    }

    function updateConfigValue(keyString, value) {
        const keys = keyString.split('.');
        let current = hyprConfig;
        try {
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]] = current[keys[i]] || {};
            }
            const finalKey = keys[keys.length - 1];
            const inputElement = document.querySelector(`[data-config-key="${keyString}"]`);
            const inputType = inputElement ? inputElement.type : 'text';

            if (inputType === 'checkbox') { current[finalKey] = Boolean(value); }
            else if (inputType === 'number') { const num = parseFloat(value); current[finalKey] = isNaN(num) ? 0 : num; }
            else if (inputType === 'color') {
                current[finalKey] = value;
                const displayElement = inputElement?.parentElement?.querySelector('.color-text-display');
                if (displayElement) displayElement.value = value;
                if (inputElement) inputElement.value = formatRgbaToHex(value);
            } else { current[finalKey] = value; }

            updateConfigOutput();
        } catch (error) { console.error(`Error updating config value for key: ${keyString}`, error); }
    }

    function generateConfigString() {
        let config = `# Generated by hyprconf-gen\n\n`;
        let sectionAdded = false;

        const addNewlineIfNeeded = () => {
            if (sectionAdded) { config += '\n'; }
            sectionAdded = false;
        };

        if (Array.isArray(hyprConfig.variables) && hyprConfig.variables.length > 0) {
            config += "# Variables\n";
            let variableContentAdded = false;
            hyprConfig.variables.forEach(variable => {
                if (variable.name && variable.value !== undefined && variable.value !== null) {
                    const varName = variable.name.startsWith('$') ? variable.name : `$${variable.name}`;
                    config += `${varName} = ${variable.value}\n`;
                    variableContentAdded = true;
                }
            });
            if (variableContentAdded) sectionAdded = true;
        }

        if (hyprConfig.monitors?.length > 0) {
            addNewlineIfNeeded();
            config += "# Monitors\n";
            hyprConfig.monitors.forEach(mon => {
                const parts = [ mon.name || '""', mon.resolution || 'preferred', mon.position || 'auto', String(mon.scale ?? 'auto') ];
                if (mon.transform && mon.transform !== 'normal') parts.push(`transform,${mon.transform}`);
                config += `monitor=${parts.join(',')}\n`;
            });
            sectionAdded = true;
        }

        if (Array.isArray(hyprConfig.env) && hyprConfig.env.length > 0) {
             addNewlineIfNeeded();
            config += "# Environment Variables\n";
            let envContentAdded = false;
            hyprConfig.env.forEach(envVar => {
                if (envVar.name && envVar.value !== undefined && envVar.value !== null) {
                    config += `env = ${envVar.name},${envVar.value}\n`;
                    envContentAdded = true;
                }
            });
            if (envContentAdded) sectionAdded = true;
        }

        const execs = (hyprConfig.execOnce || []).filter(cmd => typeof cmd === 'string' && cmd.trim());
        if (execs.length > 0) {
             addNewlineIfNeeded();
            config += "# Autostart\n";
            execs.forEach(cmd => { config += `exec-once = ${cmd.trim()}\n`; });
            sectionAdded = true;
        }

        let inputHasContent = false; let inputBlockContent = '';
        if (hyprConfig.input && typeof hyprConfig.input === 'object') {
            for (const key in hyprConfig.input) {
                const value = hyprConfig.input[key];
                if (key === 'touchpad' && typeof value === 'object' && value !== null) {
                    let touchpadBlock = ''; let tpHasContent = false;
                    for (const tpKey in value) {
                         const tpValue = value[tpKey];
                         if (tpValue !== '' && tpValue !== null && tpValue !== undefined) { if (typeof tpValue === 'boolean' || tpValue || tpValue === 0) { touchpadBlock += `        ${tpKey} = ${tpValue}\n`; tpHasContent = true; } }
                    }
                    if (tpHasContent) { inputBlockContent += `    touchpad {\n${touchpadBlock}    }\n`; inputHasContent = true; }
                } else if (key !== 'touchpad' && value !== '' && value !== null && value !== undefined) {
                     if (typeof value === 'boolean' || value || value === 0) { inputBlockContent += `    ${key} = ${value}\n`; inputHasContent = true; }
                }
            }
        }
        if (inputHasContent) { addNewlineIfNeeded(); config += "# Input\n"; config += `input {\n${inputBlockContent}}\n`; sectionAdded = true; }

        let gestureHasContent = false; let gestureBlockContent = '';
        if (hyprConfig.gestures && typeof hyprConfig.gestures === 'object' && Object.keys(hyprConfig.gestures).length > 0) {
             for (const key in hyprConfig.gestures) {
                  const value = hyprConfig.gestures[key];
                  if (value !== '' && value !== null && value !== undefined) { if (typeof value === 'boolean' || value || value === 0) { gestureBlockContent += `    ${key} = ${value}\n`; gestureHasContent = true; } }
             }
        }
        if (gestureHasContent) { addNewlineIfNeeded(); config += "# Gestures\n"; config += `gestures {\n${gestureBlockContent}}\n`; sectionAdded = true; }

        let generalHasContent = false; let generalBlockContent = '';
        if(hyprConfig.general && typeof hyprConfig.general === 'object') {
            for (const key in hyprConfig.general) {
                 const value = hyprConfig.general[key];
                 if (value !== null && value !== undefined) { if (typeof value === 'boolean' || value || value === 0 || value === '') { generalBlockContent += `    ${key} = ${value}\n`; generalHasContent = true; } }
            }
        }
        if (generalHasContent) { addNewlineIfNeeded(); config += "# General\n"; config += `general {\n${generalBlockContent}}\n`; sectionAdded = true; }

        let decorationHasContent = false; let decorationBlockContent = '';
         if(hyprConfig.decoration && typeof hyprConfig.decoration === 'object') {
            for (const key in hyprConfig.decoration) {
                const value = hyprConfig.decoration[key];
                if (key === 'blur' && typeof value === 'object' && value !== null) {
                     let blurBlock = ''; let blurHasContent = false;
                     for (const blurKey in value) { if (value[blurKey] !== null && value[blurKey] !== undefined) { if (typeof value[blurKey] === 'boolean' || value[blurKey] || value[blurKey] === 0) { blurBlock += `        ${blurKey} = ${value[blurKey]}\n`; blurHasContent = true; } } }
                     if (blurHasContent) { decorationBlockContent += `    blur {\n${blurBlock}    }\n`; decorationHasContent = true; }
                } else if (key === 'shadow' && typeof value === 'object' && value !== null) {
                    let shadowBlock = ''; let shadowHasContent = false;
                    for (const shadowKey in value) { if (value[shadowKey] !== null && value[shadowKey] !== undefined) { if (typeof value[shadowKey] === 'boolean' || value[shadowKey] || value[shadowKey] === 0) { shadowBlock += `        ${shadowKey} = ${value[shadowKey]}\n`; shadowHasContent = true; } } }
                    if (shadowHasContent) { decorationBlockContent += `    shadow {\n${shadowBlock}    }\n`; decorationHasContent = true; }
                } else if (key !== 'blur' && key !== 'shadow' && value !== null && value !== undefined) {
                     if (typeof value === 'boolean' || value || value === 0) { decorationBlockContent += `    ${key} = ${value}\n`; decorationHasContent = true; }
                }
            }
         }
         if (decorationHasContent) { addNewlineIfNeeded(); config += "# Decoration\n"; config += `decoration {\n${decorationBlockContent}}\n`; sectionAdded = true; }

        let animationsHasContent = false; let animationsBlockContent = '';
        if(hyprConfig.animations && typeof hyprConfig.animations === 'object') {
            animationsBlockContent += `    enabled = ${hyprConfig.animations.enabled ? 'true' : 'false'}\n`;
            if (hyprConfig.animations.enabled || hyprConfig.animations.beziers?.length > 0 || hyprConfig.animations.assignments?.length > 0) {
                animationsHasContent = true;
                 (hyprConfig.animations.beziers || []).forEach(bezier => { if (bezier.name && bezier.curve) { animationsBlockContent += `    bezier = ${bezier.name.trim()}, ${bezier.curve.trim()}\n`; } });
                  (hyprConfig.animations.assignments || []).forEach(anim => {
                     if (anim.name) {
                          const parts = [anim.name, anim.enabled ? '1' : '0'];
                          if (anim.speed !== undefined && anim.speed !== null) parts.push(anim.speed);
                          if (anim.curve) parts.push(anim.curve.trim());
                          if (anim.style && typeof anim.style === 'string' && anim.style.trim()) parts.push(anim.style.trim());
                          animationsBlockContent += `    animation = ${parts.join(', ')}\n`;
                     }
                 });
            } else if (!hyprConfig.animations.enabled) { animationsHasContent = true; }
        }
        if (animationsHasContent) { addNewlineIfNeeded(); config += "# Animations\n"; config += `animations {\n${animationsBlockContent}}\n`; sectionAdded = true; }

        const addLayoutBlock = (layoutName, layoutSettings) => {
             if (!layoutSettings || typeof layoutSettings !== 'object') return false;
             let blockContent = ''; let hasContent = false;
             for (const key in layoutSettings) {
                 const value = layoutSettings[key];
                 if (value !== null && value !== undefined) { if (typeof value === 'boolean' || value || value === 0 || value === '') { blockContent += `    ${key} = ${value}\n`; hasContent = true; } }
             }
             if (hasContent) {
                 addNewlineIfNeeded(); config += `# ${layoutName} Layout\n`;
                 config += `${layoutName} {\n${blockContent}}\n`; sectionAdded = true; return true;
             }
             return false;
        };
        if (hyprConfig.general?.layout === 'dwindle') addLayoutBlock('dwindle', hyprConfig.dwindle);
        if (hyprConfig.general?.layout === 'master') addLayoutBlock('master', hyprConfig.master);

        let miscHasContent = false; let miscBlockContent = '';
         if(hyprConfig.misc && typeof hyprConfig.misc === 'object') {
            for (const key in hyprConfig.misc) {
                 const value = hyprConfig.misc[key];
                if (value !== null && value !== undefined) { if (typeof value === 'boolean' || value || value === 0) { miscBlockContent += `    ${key} = ${value}\n`; miscHasContent = true; } }
            }
         }
         if (miscHasContent) { addNewlineIfNeeded(); config += "# Miscellaneous\n"; config += `misc {\n${miscBlockContent}}\n`; sectionAdded = true; }

        let devicesContent = ''; let devicesAdded = false;
        if(Array.isArray(hyprConfig.devices) && hyprConfig.devices.length > 0) {
             (hyprConfig.devices || []).forEach(device => {
                if(device && device.name) {
                    devicesContent += `device {\n    name = ${device.name}\n`;
                     for(const key in device) {
                         if(key !== 'name') {
                            const value = device[key];
                             if (value !== null && value !== undefined) { if (typeof value === 'boolean' || value || value === 0 || value === '') { devicesContent += `    ${key} = ${value}\n`; } }
                         }
                     }
                    devicesContent += '}\n'; devicesAdded = true;
                }
            });
        }
        if(devicesAdded) { addNewlineIfNeeded(); config += "# Per-Device Input Settings\n"; config += devicesContent; sectionAdded = true;}

        let keybindsContent = ''; let keybindsAdded = false;
        (hyprConfig.keybinds || []).forEach(bind => {
            if (!bind || !bind.key || (bind.type !== 'unbind' && !bind.action)) return;
            const bindType = bind.type || 'bind';
            const modString = Array.isArray(bind.mods) ? bind.mods.filter(m => m).join('') : '';
            const modsArray = Array.isArray(bind.mods) ? bind.mods : [];

            let bindLine = `${bindType} = `;
            if (modString) { bindLine += `${modString}, `; }
            bindLine += `${bind.key}`;
            if (bindType !== 'unbind') {
                bindLine += `, ${bind.action}`;
                if (bind.arg && typeof bind.arg === 'string' && bind.arg.trim()) { bindLine += `, ${bind.arg.trim()}`; }
            }
            keybindsContent += `${bindLine}\n`; keybindsAdded = true;

            const isModMain = modsArray.includes('$mainMod');
            const isModMainShift = modsArray.includes('$mainMod') && modsArray.includes('SHIFT');

            if (bindType === 'bind' && isModMain && bind.key === 'down' && bind.action === 'movefocus' && bind.arg === 'd') { keybindsContent += '\n'; }
            else if (bindType === 'bind' && isModMain && bind.key === '0' && bind.action === 'workspace' && bind.arg === '10') { keybindsContent += '\n'; }
            else if (bindType === 'bind' && isModMainShift && bind.key === '0' && bind.action === 'movetoworkspace' && bind.arg === '10') { keybindsContent += '\n'; }
            else if (bindType === 'bind' && isModMain && bind.key === 'mouse_up' && bind.action === 'workspace' && bind.arg === 'e-1') { keybindsContent += '\n'; }
            else if (bindType === 'bindm' && isModMain && bind.key === 'mouse:273' && bind.action === 'resizewindow') { keybindsContent += '\n'; }

        });
        if (keybindsAdded) { addNewlineIfNeeded(); config += "# Keybinds\n"; config += keybindsContent.trimEnd() + '\n'; sectionAdded = true; }

        let rulesContent = ''; let rulesAdded = false;
        (hyprConfig.windowrules || []).forEach(rule => {
            if (!rule || !rule.rule || !rule.condition) return;
            const parts = [ rule.rule, rule.condition ];
             if (rule.value && typeof rule.value === 'string' && rule.value.trim()) { parts.push(rule.value.trim()); }
            rulesContent += `windowrule=${parts.join(',')}\n`; rulesAdded = true;
        });
        if (rulesAdded) { addNewlineIfNeeded(); config += "# Window Rules\n"; config += rulesContent; sectionAdded = true; }

        config = config.trimEnd();
        if (config.length > 0) { config += '\n'; }

        return config;
    }

    function updateConfigOutput() {
        const configString = generateConfigString();
        outputCodeElement.textContent = configString;
    }

    function showForm(category) {
        allForms.forEach(form => form.classList.remove('active-form'));
        const formToShow = document.getElementById(`form-${category}`);
        if (formToShow) { formToShow.classList.add('active-form'); }
        else { console.warn(`Form for category '${category}' not found.`); }
        sidebarLinks.forEach(link => { link.classList.toggle('active', link.getAttribute('data-category') === category); });
    }

    function copyConfigToClipboard() {
        const configString = outputCodeElement.textContent;
        if (!configString) { return; }
        navigator.clipboard.writeText(configString).then(() => {
            copyButton.textContent = 'Copied!'; copyButton.classList.add('copied');
            setTimeout(() => { copyButton.textContent = 'Copy to Clipboard'; copyButton.classList.remove('copied'); }, 1500);
        }).catch(err => {
            console.error('Failed to copy config: ', err); copyButton.textContent = 'Copy Failed!';
             setTimeout(() => { copyButton.textContent = 'Copy to Clipboard'; }, 2000);
        });
    }

    function downloadConfigFile() {
        const configString = outputCodeElement.textContent;
        const blob = new Blob([configString], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'hyprland.conf';
        document.body.appendChild(a); a.click();
        document.body.removeChild(a); URL.revokeObjectURL(url);
    }

    const createOptions = (options, selectedValue, addEmptyOption = false) => {
        const opts = Array.isArray(options) ? options : [];
        let html = addEmptyOption ? '<option value="">-- Select --</option>' : '';
        html += opts.map(opt => {
            const value = opt ?? "";
            const text = value === "" ? "-- Select --" : value;
            return `<option value="${value}" ${selectedValue == value ? 'selected' : ''}>${text}</option>`;
        }).join('');
        return html;
    };

    function renderMonitorList() {
        monitorListContainer.innerHTML = '';
         (hyprConfig.monitors || []).forEach((monitor, index) => {
            const div = document.createElement('div'); div.classList.add('dynamic-list-item');
            const transformOptions = createOptions(TRANSFORM_OPTIONS, monitor.transform);
            div.innerHTML = `<h5>Monitor ${index + 1}</h5> <div class="form-group"> <label>Name:</label> <input type="text" value="${monitor.name || ''}" data-index="${index}" data-list="monitors" data-prop="name" placeholder="e.g., DP-1 (blank=any)"> </div> <div class="form-group"> <label>Resolution:</label> <input type="text" value="${monitor.resolution || 'preferred'}" data-index="${index}" data-list="monitors" data-prop="resolution" placeholder="1920x1080@144 or preferred"> </div> <div class="form-group"> <label>Position:</label> <input type="text" value="${monitor.position || 'auto'}" data-index="${index}" data-list="monitors" data-prop="position" placeholder="0x0 or auto"> </div> <div class="form-group"> <label>Scale:</label> <input type="text" value="${monitor.scale ?? 'auto'}" data-index="${index}" data-list="monitors" data-prop="scale" placeholder="e.g., 1, 1.5, auto"> </div> <div class="form-group"> <label>Transform:</label> <select data-index="${index}" data-list="monitors" data-prop="transform"> ${transformOptions} </select> </div> <button type="button" class="remove-btn" data-index="${index}" data-list="monitors">Remove</button>`;
            monitorListContainer.appendChild(div);
        });
    }
    function addMonitor() {
        if (!Array.isArray(hyprConfig.monitors)) hyprConfig.monitors = [];
        hyprConfig.monitors.push({ name: '', resolution: 'preferred', position: 'auto', scale: 'auto', transform: 'normal' });
        renderMonitorList(); updateConfigOutput();
    }

    function renderAutostartList() {
        if (!autostartListContainer) { return; }
        autostartListContainer.innerHTML = '';
        const execOnceCommands = hyprConfig.execOnce || [];
        if (!Array.isArray(execOnceCommands)) { return; }
        execOnceCommands.forEach((command, index) => {
            const div = document.createElement('div'); div.classList.add('dynamic-list-item');
            const commandValue = typeof command === 'string' ? command : '';
            div.innerHTML = `<div class="form-group" style="grid-template-columns: auto 1fr auto; align-items: center; gap: 5px 10px;"> <label style="grid-column: 1; text-align: left; min-width: auto; padding-right: 5px; color: var(--text-color-dark);">Command:</label> <input type="text" value="${commandValue.replace(/"/g, '"')}" data-index="${index}" data-list="execOnce" data-prop="command" placeholder="e.g., waybar &" style="grid-column: 2; max-width: none;"> <button type="button" class="remove-btn" data-index="${index}" data-list="execOnce" style="grid-column: 3; position: static; transform: scale(0.9);">Remove</button> </div>`;
            autostartListContainer.appendChild(div);
        });
   }
    function addAutostart() {
        if (!Array.isArray(hyprConfig.execOnce)) { hyprConfig.execOnce = []; }
        hyprConfig.execOnce.push('');
        renderAutostartList();
    }

    function renderKeybindList() {
       keybindListContainer.innerHTML = '';
        (hyprConfig.keybinds || []).forEach((bind, index) => {
           const div = document.createElement('div'); div.classList.add('dynamic-list-item');
           if (!bind || typeof bind !== 'object') return;
           const typeOptions = createOptions(KEYBIND_TYPES, bind.type);
           const currentMods = Array.isArray(bind.mods) ? bind.mods : [];
           const modCheckboxes = MODIFIERS.map(mod => `<label class="modifier-label"><input type="checkbox" value="${mod}" data-index="${index}" data-list="keybinds" data-prop="mods" ${currentMods.includes(mod) ? 'checked' : ''}><span>${mod}</span></label>`).join('');
           const actionOptions = createOptions(KEYBIND_ACTIONS, bind.action, true);
           div.innerHTML = `<h5>Keybind ${index + 1}</h5> <div class="form-group"> <label>Type:</label> <select data-index="${index}" data-list="keybinds" data-prop="type">${typeOptions}</select> </div> <div class="form-group"> <label>Modifiers:</label> <div class="modifier-group">${modCheckboxes}</div> </div> <div class="form-group"> <label>Key:</label> <input type="text" value="${bind.key || ''}" data-index="${index}" data-list="keybinds" data-prop="key" placeholder="e.g., Q, Return, mouse:272" required> </div> <div class="form-group"> <label>Action:</label> <select data-index="${index}" data-list="keybinds" data-prop="action" ${bind.type === 'unbind' ? 'disabled' : ''} required>${actionOptions}</select> </div> <div class="form-group"> <label>Argument:</label> <input type="text" value="${bind.arg || ''}" data-index="${index}" data-list="keybinds" data-prop="arg" ${bind.type === 'unbind' ? 'disabled' : ''} placeholder="(Optional) e.g., kitty, special:magic"> </div> <button type="button" class="remove-btn" data-index="${index}" data-list="keybinds">Remove</button>`;
           keybindListContainer.appendChild(div);
       });
   }
    function addKeybind() {
        if (!Array.isArray(hyprConfig.keybinds)) hyprConfig.keybinds = [];
        hyprConfig.keybinds.push({ type: 'bind', mods: ['$mainMod'], key: '', action: '', arg: '' });
        renderKeybindList();
    }

    function renderWindowRuleList() {
       windowruleListContainer.innerHTML = '';
        (hyprConfig.windowrules || []).forEach((rule, index) => {
           const div = document.createElement('div'); div.classList.add('dynamic-list-item');
            if (!rule || typeof rule !== 'object') return;
           const ruleOptions = createOptions(WINDOW_RULES, rule.rule, true);
           div.innerHTML = `<h5>Window Rule ${index + 1}</h5> <div class="form-group"> <label>Rule:</label> <select data-index="${index}" data-list="windowrules" data-prop="rule" required>${ruleOptions}</select> </div> <div class="form-group"> <label>Condition:</label> <input type="text" value="${rule.condition || ''}" data-index="${index}" data-list="windowrules" data-prop="condition" placeholder="e.g., class:^(kitty)$" required> </div> <div class="form-group"> <label>Value:</label> <input type="text" value="${rule.value || ''}" data-index="${index}" data-list="windowrules" data-prop="value" placeholder="(Optional) e.g., 0.8, name:myws"> </div> <button type="button" class="remove-btn" data-index="${index}" data-list="windowrules">Remove</button>`;
           windowruleListContainer.appendChild(div);
       });
   }
    function addWindowRule() {
        if (!Array.isArray(hyprConfig.windowrules)) hyprConfig.windowrules = [];
        hyprConfig.windowrules.push({ rule: '', condition: '', value: '' });
        renderWindowRuleList();
    }

    function renderBezierList() {
       bezierListContainer.innerHTML = '';
        (hyprConfig.animations?.beziers || []).forEach((bezier, index) => {
           const div = document.createElement('div'); div.classList.add('dynamic-list-item');
           if (!bezier || typeof bezier !== 'object') return;
           const presetOptions = Object.keys(BEZIER_PRESETS).map(p => `<option value="${BEZIER_PRESETS[p]}">${p}</option>`).join('');
           div.innerHTML = `<h5>Bezier Curve ${index + 1}</h5> <div class="form-group"> <label>Name:</label> <input type="text" value="${bezier.name || ''}" data-index="${index}" data-list="beziers" data-prop="name" placeholder="e.g., myCurve" required style="grid-column: 2 / -1;"> </div> <div class="form-group" style="grid-template-columns: 130px 1fr auto; gap: 8px 10px;"> <label style="grid-column: 1;">Curve:</label> <input type="text" value="${bezier.curve || ''}" data-index="${index}" data-list="beziers" data-prop="curve" placeholder="e.g., 0.1,0.9,0.2,1.0" required style="grid-column: 2;"> <select class="bezier-preset-selector" data-target-index="${index}" style="grid-column: 3; max-width: 150px;"> <option value="">-- Apply Preset --</option> ${presetOptions} </select> </div> <button type="button" class="remove-btn" data-index="${index}" data-list="beziers">Remove</button>`;
           bezierListContainer.appendChild(div);
       });
   }
    function addBezier() {
        if (!hyprConfig.animations) hyprConfig.animations = { enabled: true, beziers: [], assignments: [] };
        if (!Array.isArray(hyprConfig.animations.beziers)) hyprConfig.animations.beziers = [];
        hyprConfig.animations.beziers.push({ name: '', curve: '' });
        renderBezierList();
    }

    function renderAnimationAssignmentList() {
       animationAssignmentListContainer.innerHTML = '';
       const availableBeziers = ['default', 'linear', ...(hyprConfig.animations?.beziers || []).map(b => b.name).filter(Boolean)];
        (hyprConfig.animations?.assignments || []).forEach((anim, index) => {
            const div = document.createElement('div'); div.classList.add('dynamic-list-item');
             if (!anim || typeof anim !== 'object') return;
            const nameOptions = createOptions(ANIMATION_NAMES, anim.name, true);
            const curveOptions = createOptions(availableBeziers, anim.curve);
            const styleInputHtml = `<div class="form-group"> <label>Style:</label> <input type="text" value="${anim.style || ''}" data-index="${index}" data-list="assignments" data-prop="style" placeholder="(Optional) e.g., popin 80%, fade"> </div>`;
            div.innerHTML = `<h5>Animation Assignment ${index + 1}</h5> <div class="form-group"> <label>Type:</label> <select data-index="${index}" data-list="assignments" data-prop="name" required>${nameOptions}</select> </div> <div class="form-group"> <label>Enabled:</label> <input type="checkbox" data-index="${index}" data-list="assignments" data-prop="enabled" ${anim.enabled ? 'checked' : ''}> <label></label> </div> <div class="form-group"> <label>Speed:</label> <input type="number" value="${anim.speed ?? 7}" min="0" step="0.1" data-index="${index}" data-list="assignments" data-prop="speed"> </div> <div class="form-group"> <label>Curve:</label> <select data-index="${index}" data-list="assignments" data-prop="curve" required>${curveOptions}</select> </div> ${styleInputHtml} <button type="button" class="remove-btn" data-index="${index}" data-list="assignments">Remove</button>`;
            animationAssignmentListContainer.appendChild(div);
       });
   }
    function addAnimationAssignment() {
        if (!hyprConfig.animations) hyprConfig.animations = { enabled: true, beziers: [], assignments: [] };
        if (!Array.isArray(hyprConfig.animations.assignments)) hyprConfig.animations.assignments = [];
        hyprConfig.animations.assignments.push({ name: '', enabled: true, speed: 7, curve: 'default', style: '' });
        renderAnimationAssignmentList();
    }

    function removeFromList(listName, index) {
        let targetArray; let removedItemName = null;
        if (listName === 'beziers' || listName === 'assignments') { targetArray = hyprConfig.animations?.[listName]; if (listName === 'beziers' && targetArray?.[index]) { removedItemName = targetArray[index].name; } }
        else { targetArray = hyprConfig[listName]; }

        if (Array.isArray(targetArray) && targetArray.length > index && index >= 0) {
            targetArray.splice(index, 1);
            if (listName === 'beziers' && removedItemName) {
                let curveResetOccurred = false;
                 (hyprConfig.animations?.assignments || []).forEach(anim => { if (anim.curve === removedItemName) { anim.curve = 'default'; curveResetOccurred = true; } });
                if(curveResetOccurred) renderAnimationAssignmentList();
            }
        } else { console.error(`List ${listName} or index ${index} invalid for removal.`); return; }

        switch (listName) {
            case 'monitors': renderMonitorList(); break;
            case 'execOnce': renderAutostartList(); break;
            case 'keybinds': renderKeybindList(); break;
            case 'windowrules': renderWindowRuleList(); break;
            case 'beziers': renderBezierList(); renderAnimationAssignmentList(); break;
            case 'assignments': renderAnimationAssignmentList(); break;
            default: console.warn(`Unknown list type for rendering after removal: ${listName}`);
        }
        updateConfigOutput();
    }

    sidebarLinks.forEach(link => { link.addEventListener('click', (e) => { const cat = e.currentTarget.getAttribute('data-category'); if(cat) showForm(cat); }); });

    function handleInputChange(event) {
        const target = event.target; if (!target) return;
        const listName = target.getAttribute('data-list'); const indexStr = target.getAttribute('data-index'); const prop = target.getAttribute('data-prop');
        let value = target.type === 'checkbox' ? target.checked : target.value;

        if (target.matches('[data-config-key]') && !listName) {
             if (target.matches('.color-text-display')) {
                 const keyStringForColor = target.parentElement?.querySelector('input[type="color"]')?.getAttribute('data-config-key');
                 if(keyStringForColor) { updateConfigValue(keyStringForColor, value); }
            } else { updateConfigValue(target.getAttribute('data-config-key'), value); }
        }
        else if (listName && indexStr !== null && prop) {
            const index = parseInt(indexStr, 10); if (isNaN(index)) return;
            let targetArray; let targetItem;
            if (['beziers', 'assignments'].includes(listName)) { targetArray = hyprConfig.animations?.[listName]; }
            else { targetArray = hyprConfig[listName]; }

            if (Array.isArray(targetArray) && targetArray[index] !== undefined) {
                 targetItem = targetArray[index];
                 if (listName === 'keybinds' && prop === 'mods' && target.type === 'checkbox') {
                      const modValue = target.value; if (!Array.isArray(targetItem.mods)) targetItem.mods = [];
                      if (target.checked) { if (!targetItem.mods.includes(modValue)) targetItem.mods.push(modValue); }
                      else { targetItem.mods = targetItem.mods.filter(m => m !== modValue); }
                 } else if (listName === 'execOnce' && prop === 'command') { targetArray[index] = typeof value === 'string' ? value.trim() : ''; }
                 else {
                      if (typeof targetItem !== 'object' || targetItem === null) { if(listName !== 'execOnce') { console.error(`Item not object: ${listName}[${index}]`); return; } }
                      const isNumericProp = ['scale', 'sensitivity', 'speed', 'mfact', 'shadow_range', 'shadow_render_power', 'rounding', 'size', 'passes', 'active_opacity', 'inactive_opacity', 'vibrancy'].includes(prop);
                      if (target.type === 'number' || isNumericProp) {
                          if(prop === 'scale' && value === 'auto') { targetItem[prop] = 'auto'; }
                          else { const num = parseFloat(value); targetItem[prop] = isNaN(num) ? (prop === 'scale' ? 1 : 0) : num; }
                      } else { targetItem[prop] = value; }
                      if (listName === 'keybinds' && prop === 'type') { renderKeybindList(); }
                      if(listName === 'beziers' && prop === 'name') { renderAnimationAssignmentList(); }
                 }
                 updateConfigOutput();
            } else { console.warn(`Target array/index invalid: ${listName}[${index}]`); }
        }
        else if (target.matches('.bezier-preset-selector')) {
             const targetIndexStr = target.getAttribute('data-target-index'); const presetValue = target.value;
             if (targetIndexStr !== null && presetValue) {
                 const targetIndex = parseInt(targetIndexStr, 10);
                 if (!isNaN(targetIndex) && hyprConfig.animations?.beziers?.[targetIndex]) {
                     hyprConfig.animations.beziers[targetIndex].curve = presetValue;
                     renderBezierList(); updateConfigOutput(); target.value = "";
                 }
             }
        }
    }
    settingsFormsContainer.addEventListener('input', handleInputChange);
    settingsFormsContainer.addEventListener('change', handleInputChange);
    settingsFormsContainer.addEventListener('blur', (event) => {
         if (event.target && event.target.matches('.color-text-display')) { handleInputChange(event); }
    }, true);

    document.body.addEventListener('click', (event) => {
        const target = event.target; if (!target) return;
        const actionMap = { 'copy-button': copyConfigToClipboard, 'download-button': downloadConfigFile, 'add-monitor-btn': addMonitor, 'add-autostart-btn': addAutostart, 'add-keybind-btn': addKeybind, 'add-windowrule-btn': addWindowRule, 'add-bezier-btn': addBezier, 'add-animation-assignment-btn': addAnimationAssignment };
        if (target.id && actionMap[target.id]) { actionMap[target.id](); }
        else if (target.matches('.remove-btn[data-list][data-index]')) {
            const listName = target.getAttribute('data-list'); const indexStr = target.getAttribute('data-index');
            if (listName && indexStr !== null) { const index = parseInt(indexStr, 10); if (!isNaN(index)) { removeFromList(listName, index); } }
        }
    });


    function init() {
        document.querySelectorAll('[data-config-key]').forEach(inputElement => {
            const keyString = inputElement.getAttribute('data-config-key'); const keys = keyString.split('.');
            let value = hyprConfig;
            try { keys.forEach(k => { value = value[k]; });
                if (value !== undefined && value !== null) {
                     if (inputElement.type === 'checkbox') { inputElement.checked = Boolean(value); }
                     else if (inputElement.type === 'color') {
                         const displayElement = inputElement.parentElement?.querySelector('.color-text-display');
                         if (displayElement) displayElement.value = String(value);
                         inputElement.value = formatRgbaToHex(String(value));
                     } else {
                          if(inputElement.tagName === 'SELECT') { if([...inputElement.options].some(opt => opt.value == value)) { inputElement.value = value; } else { /* Warn? */ } }
                          else { inputElement.value = value; }
                     }
                }
            } catch (e) { /* Ignore */ }
        });

        renderMonitorList();
        renderAutostartList();
        renderKeybindList();
        renderWindowRuleList();
        renderBezierList();
        renderAnimationAssignmentList();

        showForm('general');
        updateConfigOutput();
        console.log("Hyprland Config Editor Initialized.");
    }

    init();
});