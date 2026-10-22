/* Salman Motion V17 — reusable ScriptUI setup. ES3-style source.
 * This module defines SalmanMotionSetup; it imports/builds/saves nothing.
 * Load the trusted bundled file with $.evalFile(), then call .show(defaults).
 * Use only controls whose features the project's builder actually implements.
 */
var SalmanMotionSetup = (function () {
    function clean(v) { return String(v === undefined || v === null ? "" : v).replace(/^\s+|\s+$/g, ""); }
    function number(v) {
        var a = "٠١٢٣٤٥٦٧٨٩", b = "۰۱۲۳۴۵۶۷۸۹", t = clean(v), i;
        if (!t.length) return NaN;
        for (i = 0; i < 10; i++) {
            t = t.split(a.charAt(i)).join(String(i));
            t = t.split(b.charAt(i)).join(String(i));
        }
        return Number(t.replace(/٫/g, "."));
    }
    function validate(c, req) {
        req = req || {};
        var e = [];
        if (!c.fontPS) e.push("أدخل اسم PostScript للخط.");
        if (!isFinite(c.offset) || c.offset < -5 || c.offset > 5) e.push("إزاحة النص بين -5 و5 ثوانٍ.");
        if (!isFinite(c.motion) || c.motion < 0.5 || c.motion > 2) e.push("قوة الحركة بين 0.5 و2.");
        if (!isFinite(c.width) || c.width < 16 || c.width > 30000 || c.width % 1) e.push("عرض صحيح بين 16 و30000.");
        if (!isFinite(c.height) || c.height < 16 || c.height > 30000 || c.height % 1) e.push("ارتفاع صحيح بين 16 و30000.");
        if (!isFinite(c.fps) || c.fps < 1 || c.fps > 120) e.push("معدل إطارات بين 1 و120.");
        if (req.audio && !c.audioPath) e.push("اختر ملف الصوت.");
        if (req.images && !c.imagesPath) e.push("اختر مجلد الصور.");
        if (req.timing && !c.timingPath) e.push("اختر ملف التوقيت.");
        if (c.audioPath && !new File(c.audioPath).exists) e.push("ملف الصوت غير موجود.");
        if (c.imagesPath && !new Folder(c.imagesPath).exists) e.push("مجلد الصور غير موجود.");
        if (c.timingPath && !new File(c.timingPath).exists) e.push("ملف التوقيت غير موجود.");
        if (c.outputPath && !/\.aep$/i.test(c.outputPath)) e.push("اسم مشروع الإخراج ينتهي بـ .aep.");
        if (c.outputPath && new File(c.outputPath).exists) e.push("اختر اسم مشروع جديدًا؛ الملف موجود بالفعل.");
        if (req.output && !c.outputPath) e.push("اختر مسار حفظ جديدًا.");
        return e;
    }
    function installedFonts() {
        var out = [], seen = {}, groups, i, j, ps;
        try {
            groups = app.fonts.allFonts;
            for (i = 0; i < groups.length; i++) for (j = 0; j < groups[i].length; j++) {
                ps = String(groups[i][j].postScriptName || "");
                if (ps && !seen["f_" + ps]) { seen["f_" + ps] = true; out.push(ps); }
            }
        } catch (ignored) {}
        out.sort(); return out;
    }
    function show(d) {
        d = d || {};
        var win = new Window("dialog", "سلمان للموشن — إعداد المشروع");
        win.orientation = "column"; win.alignChildren = "fill";
        var tabs = win.add("tabbedpanel"), base = tabs.add("tab", undefined, "الملفات والإعداد"),
            fx = tabs.add("tab", undefined, "الحركة والمؤثرات"), credits = tabs.add("tab", undefined, "العنوان والاعتمادات");
        base.orientation = fx.orientation = credits.orientation = "column";
        base.alignChildren = fx.alignChildren = credits.alignChildren = "fill";
        function field(parent, label, value) {
            var row = parent.add("group"); row.add("statictext", undefined, label);
            var ed = row.add("edittext", undefined, clean(value)); ed.characters = 28; return ed;
        }
        function pathField(label, value, kind) {
            var row = base.add("group"); row.add("statictext", undefined, label);
            var ed = row.add("edittext", undefined, clean(value)); ed.characters = 23;
            var button = row.add("button", undefined, "اختيار");
            button.onClick = function () {
                var file;
                if (kind === "folder") file = Folder.selectDialog(label);
                else if (kind === "output") file = File.saveDialog(label, "*.aep");
                else file = File.openDialog(label);
                if (file) ed.text = file.fsName;
            }; return ed;
        }
        var width = field(base, "العرض", d.width || 1920), height = field(base, "الارتفاع", d.height || 1080),
            fps = field(base, "FPS", d.fps || 30), font = field(base, "الخط PostScript", d.fontPS || "");
        var fonts = installedFonts();
        if (fonts.length) {
            var dd = base.add("dropdownlist", undefined, fonts);
            dd.onChange = function () { if (dd.selection) font.text = dd.selection.text; };
        } else base.add("statictext", undefined, "تعذر سرد الخطوط؛ تحقق من تطبيق الخط عند البناء.");
        var audio = pathField("الصوت", d.audioPath, "file"), images = pathField("مجلد الصور", d.imagesPath, "folder"),
            timing = pathField("التوقيت JSON", d.timingPath, "file"), output = pathField("مشروع AEP جديد", d.outputPath, "output");
        var offset = field(fx, "إزاحة الكلمات (+ تأخير)", d.offset === undefined ? 0 : d.offset),
            motion = field(fx, "قوة الحركة 0.5–2", d.motion === undefined ? 1 : d.motion);
        fx.add("statictext", undefined, "تظهر مفاتيح الميزات المنفذة في هذا المشروع فقط.");
        var available = d.availableEffects || [], toggles = [], k;
        for (k = 0; k < available.length; k++) {
            var cb = fx.add("checkbox", undefined, available[k].label);
            cb.value = !!available[k].enabled; toggles.push(cb);
        }
        var title = field(credits, "العنوان", d.title), author = field(credits, "كلمات", d.author),
            vocals = field(credits, "أداء وألحان", d.vocals), editor = field(credits, "مونتاج", d.editor),
            producer = field(credits, "إنتاج (اختياري)", d.producer);
        credits.add("statictext", undefined, "املأ البيانات المؤكدة فقط؛ لا توجد أسماء افتراضية.");
        var row = win.add("group"); row.alignment = "right";
        row.add("button", undefined, "إلغاء", {name:"cancel"});
        var build = row.add("button", undefined, "بناء المشروع", {name:"ok"}), result = null;
        build.onClick = function () {
            var c = {width:number(width.text), height:number(height.text), fps:number(fps.text),
                fontPS:clean(font.text), offset:number(offset.text), motion:number(motion.text),
                audioPath:clean(audio.text), imagesPath:clean(images.text), timingPath:clean(timing.text), outputPath:clean(output.text),
                title:clean(title.text), author:clean(author.text), vocals:clean(vocals.text), editor:clean(editor.text),
                producer:clean(producer.text), effects:{}};
            var i; for (i = 0; i < available.length; i++) c.effects[available[i].id] = toggles[i].value;
            var errors = validate(c, d.required);
            if (!errors.length && typeof d.preflight === "function") {
                try { errors = d.preflight(c) || []; }
                catch (error) { errors = [String(error)]; }
            }
            if (errors.length) { alert(errors.join("\n")); return; }
            result = c; win.close(1);
        };
        tabs.selection = base;
        if (win.show() !== 1) return null;
        return result;
    }
    return {show:show, validate:validate, number:number, installedFonts:installedFonts};
})();
