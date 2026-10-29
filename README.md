# Discord Wallpaper 🖼

> A lightweight BetterDiscord plugin to set a custom background — image, GIF or video — directly inside Discord.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![BetterDiscord](https://img.shields.io/badge/BetterDiscord-compatible-green)
![License](https://img.shields.io/badge/license-MIT-orange)
![Author](https://img.shields.io/badge/author-X0cadet0X-purple)

---

## ✨ Features

- 🖼 **3 background slots** — save up to 3 wallpapers and switch between them instantly
- 🎞 **GIF support** — animated backgrounds with full animation preserved
- 🎬 **Video support** — MP4 and WebM, autoplay, looped, muted (up to 20 MB)
- 🌗 **Dim slider** — adjust overlay darkness from 0% to 100%
- 🌐 **EN / RU language toggle** — switch interface language in one click
- 🔄 **One-click reset** — return to Discord's default look instantly
- 💾 **Persistent slots** — your backgrounds are saved across Discord restarts
- 📦 **No dependencies** — pure JavaScript, no installs beyond BetterDiscord

---

## 📋 Requirements

- [Discord](https://discord.com) (stable)
- [BetterDiscord](https://betterdiscord.app) v1.9.0+
- Windows 7 / 10 / 11

---

## 🚀 Installation

### Easy (Windows, double-click)
1. Install [BetterDiscord](https://betterdiscord.app) and launch Discord once.
2. Download the latest release and extract all files to one folder.
3. Double-click **install.vbs** — a success message will appear.
4. In Discord: **Settings → BetterDiscord → Plugins → enable Discord Wallpaper**.

### Manual
1. Copy `DiscordWallpaper.plugin.js` to:
```
%APPDATA%\BetterDiscord\plugins\
```
2. In Discord: **Settings → BetterDiscord → Plugins → enable Discord Wallpaper**.

---

## 🎮 How to Use

1. Click the **🖼 button** in the bottom-right corner of Discord.
2. Click **Upload 1 / 2 / 3** to load a background into a slot.
3. Click a **slot thumbnail** to apply that background.
4. Adjust the **Dim slider** to control overlay transparency.
5. Click **Reset to default** to remove the background.
6. Click **EN / RU** to switch the panel language.

### Supported formats
| Type   | Formats           | Notes                          |
|--------|-------------------|--------------------------------|
| Image  | PNG, JPG, WEBP    | Auto-resized to 1920px max     |
| GIF    | GIF               | Full animation, up to 20 MB    |
| Video  | MP4, WebM         | Autoplay, looped, muted, ≤20MB |

> 💡 **Tip:** For video backgrounds, use short 5–15 second looping clips for best performance.

---

## 🗑️ Uninstall

**Easy:** Double-click **uninstall.vbs** — removes plugin and saved data.

**Manual:** Delete `DiscordWallpaper.plugin.js` from `%APPDATA%\BetterDiscord\plugins\`

---

## 🔧 Troubleshooting

| Problem | Solution |
|--------|----------|
| Plugin not loading | Make sure filename is exactly `DiscordWallpaper.plugin.js` |
| Background not showing | Toggle plugin off and on, check file is under 20 MB |
| Button missing | Fully restart Discord (tray icon → Quit Discord) |
| BetterDiscord wiped after update | Reinstall BetterDiscord — your slots are saved |
| install.vbs: "BetterDiscord not found" | Install BetterDiscord first, launch Discord once, retry |

---

## ⚠️ Disclaimer

Modifying the Discord client is technically against Discord's Terms of Service.
Visual-only plugins like this one carry an extremely low ban risk, but **you use it at your own risk.**

No data is sent over the internet. Everything is stored locally on your machine.

---

## 📄 License

MIT License — free to use, modify and distribute.
Credit to **X0cadet0X** is appreciated but not required.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/X0cadet0X">X0cadet0X</a>
</div>

---
---

# Discord Wallpaper 🖼

> Лёгкий плагин для BetterDiscord — устанавливает пользовательский фон (изображение, GIF или видео) прямо в Discord.

![Версия](https://img.shields.io/badge/версия-2.0.0-blue)
![BetterDiscord](https://img.shields.io/badge/BetterDiscord-совместим-green)
![Лицензия](https://img.shields.io/badge/лицензия-MIT-orange)
![Автор](https://img.shields.io/badge/автор-X0cadet0X-purple)

---

## ✨ Возможности

- 🖼 **3 слота для фонов** — сохраняйте до 3 обоев и переключайтесь между ними мгновенно
- 🎞 **Поддержка GIF** — анимированные фоны с сохранением полной анимации
- 🎬 **Поддержка видео** — MP4 и WebM, автовоспроизведение, зацикливание, без звука (до 20 МБ)
- 🌗 **Ползунок затемнения** — регулировка от 0% до 100%
- 🌐 **Переключение языка EN / RU** — смена языка интерфейса в один клик
- 🔄 **Сброс в один клик** — мгновенный возврат к стандартному виду Discord
- 💾 **Постоянные слоты** — фоны сохраняются после перезапуска Discord
- 📦 **Без зависимостей** — чистый JavaScript, ничего лишнего кроме BetterDiscord

---

## 📋 Требования

- [Discord](https://discord.com) (стабильная версия)
- [BetterDiscord](https://betterdiscord.app) v1.9.0 и выше
- Windows 7 / 10 / 11

---

## 🚀 Установка

### Быстрая (Windows, двойной клик)
1. Установите [BetterDiscord](https://betterdiscord.app) и запустите Discord хотя бы один раз.
2. Скачайте последний релиз и распакуйте все файлы в одну папку.
3. Дважды кликните **install.vbs** — появится сообщение об успешной установке.
4. В Discord: **Настройки → BetterDiscord → Плагины → включите Discord Wallpaper**.

### Ручная
1. Скопируйте `DiscordWallpaper.plugin.js` в папку:
```
%APPDATA%\BetterDiscord\plugins\
```
2. В Discord: **Настройки → BetterDiscord → Плагины → включите Discord Wallpaper**.

---

## 🎮 Как пользоваться

1. Нажмите кнопку **🖼** в правом нижнем углу Discord.
2. Нажмите **Загрузить 1 / 2 / 3**, чтобы добавить фон в слот.
3. Нажмите на **миниатюру слота**, чтобы применить фон.
4. Настройте **ползунок затемнения** для управления прозрачностью наложения.
5. Нажмите **Сбросить** для удаления фона.
6. Нажмите **EN / RU** для переключения языка панели.

### Поддерживаемые форматы
| Тип        | Форматы           | Примечания                          |
|------------|-------------------|-------------------------------------|
| Изображение | PNG, JPG, WEBP   | Авторесайз до 1920px                |
| GIF        | GIF               | Полная анимация, до 20 МБ           |
| Видео      | MP4, WebM         | Автовоспроизведение, зацикл., ≤20МБ |

> 💡 **Совет:** Для видеофонов используйте короткие зацикленные клипы (5–15 секунд) для лучшей производительности.

---

## 🗑️ Удаление

**Быстрое:** Дважды кликните **uninstall.vbs** — удалит плагин и сохранённые данные.

**Ручное:** Удалите `DiscordWallpaper.plugin.js` из `%APPDATA%\BetterDiscord\plugins\`

---

## 🔧 Решение проблем

| Проблема | Решение |
|----------|---------|
| Плагин не загружается | Убедитесь, что имя файла точно `DiscordWallpaper.plugin.js` |
| Фон не отображается | Переключите плагин выкл/вкл, проверьте, что файл не превышает 20 МБ |
| Кнопка отсутствует | Полностью перезапустите Discord (значок в трее → Выйти из Discord) |
| BetterDiscord слетел после обновления | Переустановите BetterDiscord — слоты сохранены |
| install.vbs: «BetterDiscord не найден» | Сначала установите BetterDiscord, запустите Discord один раз, повторите |

---

## ⚠️ Предупреждение

Модификация клиента Discord технически нарушает Условия использования Discord.
Визуальные плагины несут крайне низкий риск блокировки, но **вы используете его на свой страх и риск.**

Данные не передаются через интернет. Всё хранится локально на вашем компьютере.

---

## 📄 Лицензия

Лицензия MIT — свободно использовать, изменять и распространять.
Упоминание **X0cadet0X** приветствуется, но не обязательно.

---

<div align="center">
Сделано с ❤️ автором <a href="https://github.com/X0cadet0X">X0cadet0X</a>
</div>
