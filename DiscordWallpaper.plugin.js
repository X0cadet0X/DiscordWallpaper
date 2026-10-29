/**
 * @name Discord Wallpaper
 * @author X0cadet0X
 * @version 2.0.0
 * @description Change your Discord background with 3 slots. Supports images, GIF and video. Made by X0cadet0X.
 */
module.exports = class DiscordWallpaper {
  constructor() {
    this.name = "Discord Wallpaper";
    this.styleId = "dw-style";
    this.uiId = "dw-ui";
    this.videoId = "dw-video";
    this.lang = "ru";
    this.i18n = {
      ru: {
        title: "Фон Discord",
        load: "Загрузить",
        replace: "Заменить",
        empty: "Пусто",
        apply: "Применить",
        dim: "Затемнение",
        reset: "Вернуть исходный фон",
        tooBig: "Файл больше 20 МБ — выбери файл поменьше.",
        badType: "Поддерживаются: png, jpg, gif, webp, mp4, webm.",
        slot: "Слот",
        lang: "EN"
      },
      en: {
        title: "Discord Wallpaper",
        load: "Upload",
        replace: "Replace",
        empty: "Empty",
        apply: "Apply",
        dim: "Dim",
        reset: "Reset to default",
        tooBig: "File is larger than 20 MB — choose a smaller file.",
        badType: "Supported: png, jpg, gif, webp, mp4, webm.",
        slot: "Slot",
        lang: "RU"
      }
    };
  }

  t(key) { return this.i18n[this.lang][key]; }

  start() {
    this.slots = BdApi.Data.load(this.name, "slots") || [null, null, null];
    this.types = BdApi.Data.load(this.name, "types") || [null, null, null];
    this.active = BdApi.Data.load(this.name, "active");
    if (this.active === undefined) this.active = null;
    const d = BdApi.Data.load(this.name, "dim");
    this.dim = typeof d === "number" ? d : 45;
    const l = BdApi.Data.load(this.name, "lang");
    this.lang = l === "en" ? "en" : "ru";
    this.buildUI();
    this.applyBackground();
  }

  stop() {
    BdApi.DOM.removeStyle(this.styleId);
    const ui = document.getElementById(this.uiId);
    if (ui) ui.remove();
    this.removeVideo();
  }

  save() {
    BdApi.Data.save(this.name, "slots", this.slots);
    BdApi.Data.save(this.name, "types", this.types);
    BdApi.Data.save(this.name, "active", this.active);
    BdApi.Data.save(this.name, "dim", this.dim);
    BdApi.Data.save(this.name, "lang", this.lang);
  }

  removeVideo() {
    const v = document.getElementById(this.videoId);
    if (v) v.remove();
  }

  applyBackground() {
    BdApi.DOM.removeStyle(this.styleId);
    this.removeVideo();
    if (this.active === null) return;
    const img = this.slots[this.active];
    const type = this.types[this.active];
    if (!img) return;
    const a = (this.dim / 100).toFixed(2);
    const overlayVars = [
      "--background-primary", "--background-secondary", "--background-secondary-alt",
      "--background-tertiary", "--background-floating",
      "--background-base-low", "--background-base-lower", "--background-base-lowest",
      "--bg-overlay-1", "--bg-overlay-2", "--bg-overlay-3", "--bg-overlay-chat"
    ].map(v => `${v}: rgba(0,0,0,${a}) !important;`).join("\n");

    if (type === "video") {
      const video = document.createElement("video");
      video.id = this.videoId;
      video.src = img;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;object-fit:cover;z-index:-1;pointer-events:none;";
      document.body.appendChild(video);
      BdApi.DOM.addStyle(this.styleId, `
        .theme-dark, .theme-light, .theme-darker, .theme-midnight { ${overlayVars} --chat-background: transparent !important; }
        [class*="bg_"], [class*="chatContent_"], [class*="sidebar_"] { background: transparent !important; }
      `);
    } else {
      BdApi.DOM.addStyle(this.styleId, `
        body, #app-mount { background: url("${img}") center / cover no-repeat fixed !important; }
        .theme-dark, .theme-light, .theme-darker, .theme-midnight { ${overlayVars} --chat-background: transparent !important; }
        [class*="bg_"], [class*="chatContent_"], [class*="sidebar_"] { background: transparent !important; }
      `);
    }
  }

  pickFile(slot) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/gif,image/webp,video/mp4,video/webm";
    input.onchange = () => {
      const file = input.files && input.files[0];
      if (!file) return;
      const ext = file.name.split(".").pop().toLowerCase();
      const allowed = ["png","jpg","jpeg","gif","webp","mp4","webm"];
      if (!allowed.includes(ext)) { alert(this.t("badType")); return; }
      if (file.size > 20 * 1024 * 1024) { alert(this.t("tooBig")); return; }
      const isVideo = ["mp4","webm"].includes(ext);
      const isGif = ext === "gif";
      const reader = new FileReader();
      reader.onload = () => {
        if (isVideo || isGif) {
          this.slots[slot] = reader.result;
          this.types[slot] = isVideo ? "video" : "image";
          this.active = slot;
          this.save();
          this.applyBackground();
          this.renderPanel();
        } else {
          const im = new Image();
          im.onload = () => {
            const max = 1920;
            const k = Math.min(1, max / Math.max(im.width, im.height));
            const c = document.createElement("canvas");
            c.width = Math.round(im.width * k);
            c.height = Math.round(im.height * k);
            c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
            this.slots[slot] = c.toDataURL("image/jpeg", 0.85);
            this.types[slot] = "image";
            this.active = slot;
            this.save();
            this.applyBackground();
            this.renderPanel();
          };
          im.src = reader.result;
        }
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }

  buildUI() {
    const old = document.getElementById(this.uiId);
    if (old) old.remove();
    const root = document.createElement("div");
    root.id = this.uiId;
    root.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:9999;font-family:sans-serif;";
    const btn = document.createElement("button");
    btn.textContent = "🖼";
    btn.title = "Discord Wallpaper";
    btn.style.cssText = "width:36px;height:36px;border-radius:50%;border:none;cursor:pointer;font-size:18px;background:#5865f2;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.5);";
    btn.onclick = () => {
      this.panel.style.display = this.panel.style.display === "none" ? "block" : "none";
    };
    this.panel = document.createElement("div");
    this.panel.style.cssText = "display:none;position:absolute;right:0;bottom:46px;width:250px;padding:12px;border-radius:8px;background:#1e1f22;color:#f2f3f5;box-shadow:0 4px 16px rgba(0,0,0,.6);";
    root.appendChild(this.panel);
    root.appendChild(btn);
    document.body.appendChild(root);
    this.renderPanel();
  }

  renderPanel() {
    const p = this.panel;
    p.innerHTML = "";

    // Header
    const header = document.createElement("div");
    header.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";
    const title = document.createElement("div");
    title.textContent = this.t("title");
    title.style.cssText = "font-weight:bold;font-size:14px;";
    const langBtn = document.createElement("button");
    langBtn.textContent = this.t("lang");
    langBtn.style.cssText = "border:none;border-radius:4px;padding:3px 8px;cursor:pointer;color:#fff;background:#4e5058;font-size:11px;";
    langBtn.onclick = () => {
      this.lang = this.lang === "ru" ? "en" : "ru";
      this.save();
      this.renderPanel();
    };
    header.appendChild(title);
    header.appendChild(langBtn);
    p.appendChild(header);

    const mk = (text, bg) => {
      const b = document.createElement("button");
      b.textContent = text;
      b.style.cssText = `border:none;border-radius:4px;padding:6px 8px;cursor:pointer;color:#fff;background:${bg};font-size:12px;`;
      return b;
    };

    // Slots
    for (let i = 0; i < 3; i++) {
      const row = document.createElement("div");
      row.style.cssText = "display:flex;align-items:center;gap:8px;margin-bottom:8px;";
      const has = !!this.slots[i];
      const isActive = this.active === i;
      const type = this.types[i];

      const thumb = document.createElement("div");
      const emoji = type === "video" ? "🎬" : type === "image" && this.slots[i] && this.slots[i].includes("data:image/gif") ? "🎞" : "🖼";
      thumb.style.cssText = `width:52px;height:34px;border-radius:4px;flex:none;
        display:flex;align-items:center;justify-content:center;font-size:18px;
        cursor:${has ? "pointer" : "default"};
        background:${has ? (type === "video" ? "#2b2d31" : `url("${this.slots[i]}") center/cover`) : "#2b2d31"};
        border:2px solid ${isActive ? "#5865f2" : "transparent"};`;
      if (type === "video") thumb.textContent = "🎬";
      thumb.title = has ? this.t("apply") : this.t("empty");
      thumb.onclick = () => {
        if (!has) return;
        this.active = i;
        this.save();
        this.applyBackground();
        this.renderPanel();
      };

      const col = document.createElement("div");
      col.style.cssText = "display:flex;flex-direction:column;gap:4px;flex:1;";

      const label = document.createElement("div");
      label.style.cssText = "font-size:10px;color:#aaa;";
      label.textContent = `${this.t("slot")} ${i + 1}${has ? (type === "video" ? " 🎬" : "") : ""}`;

      const up = mk(has ? this.t("replace") : this.t("load"), "#4e5058");
      up.style.width = "100%";
      up.onclick = () => this.pickFile(i);

      col.appendChild(label);
      col.appendChild(up);
      row.appendChild(thumb);
      row.appendChild(col);
      p.appendChild(row);
    }

    // Divider
    const hr = document.createElement("div");
    hr.style.cssText = "border-top:1px solid #3a3b3e;margin:8px 0;";
    p.appendChild(hr);

    // Dim slider
    const dimLabel = document.createElement("div");
    dimLabel.textContent = `${this.t("dim")}: ${this.dim}%`;
    dimLabel.style.cssText = "font-size:12px;margin-bottom:4px;";
    const dimInput = document.createElement("input");
    dimInput.type = "range";
    dimInput.min = 0;
    dimInput.max = 100;
    dimInput.value = this.dim;
    dimInput.style.width = "100%";
    dimInput.oninput = () => {
      this.dim = parseInt(dimInput.value, 10);
      dimLabel.textContent = `${this.t("dim")}: ${this.dim}%`;
      this.applyBackground();
    };
    dimInput.onchange = () => this.save();
    p.appendChild(dimLabel);
    p.appendChild(dimInput);

    // Reset button
    const reset = mk(this.t("reset"), "#da373c");
    reset.style.cssText += "width:100%;margin-top:8px;";
    reset.onclick = () => {
      this.active = null;
      this.save();
      this.applyBackground();
      this.renderPanel();
    };
    p.appendChild(reset);
  }
};
