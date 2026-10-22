# مهارة سلمان للموشن جرافيك - النسخة الموحّدة V14

هذا الملف مولّد من ملفات المصدر في المستودع. اقرأ التعليمات الأساسية أولًا، ثم المراجع والقوالب المناسبة للمشروع. يتضمن الكود النصي كاملًا، ولا يتضمن أصولًا ثنائية أو مشاريع خاصة أو إثباتًا لتشغيل After Effects.

## فهرس الملفات

1. [SKILL.md](#file-1)
2. [references/PRE_DELIVERY_CHECKLIST.md](#file-2)
3. [references/brand-led-scene-review.md](#file-3)
4. [references/direction-rhythm-and-render-review.md](#file-4)
5. [references/extendscript-defensive-rules.md](#file-5)
6. [references/illustration-depth-and-glass-shine.md](#file-6)
7. [references/logo-animation-gallery-ae.md](#file-7)
8. [references/logo-animation-production.md](#file-8)
9. [references/motion-styles-and-choreography.md](#file-9)
10. [references/packaging-and-windows-zip-rules.md](#file-10)
11. [templates/mp3_vocal_onset_analyzer.py](#file-11)
12. [templates/salman_motion_starter_template.js](#file-12)
13. [templates/stereo_wav_sfx_generator.py](#file-13)
14. [templates/svg_to_ae_bezier_parser.py](#file-14)
15. [scripts/validate_png_assets.py](#file-15)

---

<a id="file-1"></a>

## SKILL.md

---
name: salman-after-effects-motion
description: >
  Salman Motion V14: build editable Arabic motion graphics and Adobe After Effects projects
  with ExtendScript JSX, native shapes, SVG/Bezier paths, Arabic typography, camera tours,
  3D map dives, nasheed vocal sync and synchronized stereo SFX. Use for logo/brand animation,
  motion storyboards, brand-consistent scene redesign and open AE project requests. Includes Styles A-F plus 17 Motalim-inspired
  logo recipes L01-L17: line draw, handwriting, assembly, morph, geometric, liquid fill,
  mask wipe, light sweep, connected Arabic typing, elastic, character, 3D flip, particles,
  glitch, neon, brand hero and design canvas. Adds brand-led direction, shot handoffs,
  AE timing curves, calm Arabic pacing, illustration grounding, brush mattes, continuous brand backgrounds,
  camera parallax, selective glass shine, Aqleeat identity rules, verse-led human scenes,
  Arabic review handoffs and honest render review. Includes ES3 rules and packaging.
---

# Salman After Effects Motion (V14 — هوية دقيقة ومشهد يخدم المعنى)

## الهوية ومعنى المشهد وتسليم المراجعة — V14

عند إعادة تصميم لقطات أو مراجعة ستوريبورد أو تنفيذ عمل للتدريبات العقلية، اقرأ
[الهوية ومعنى المشهد والمراجعة العربية](references/brand-led-scene-review.md).
استخرج المعنى من البيت الظاهر، وثبّت الهوية لكل عنصر: الملابس والفرش والكتب والجبال وواجهة الشاشة، لا الخلفية وحدها.
طبّق ملف التدريبات العقلية داخل المرجع على أعمال المؤسسة فقط؛ لا تفرض أخضرها أو زيها أو نقوشها على عملاء آخرين.
قدّم تصحيح المستخدم الخاص باللقطة على خطة التنويع العامة؛ أبقِ السماء فاتحة عندما يطلب ذلك.
فرّق بين التصميم الكامل للتسليم كصورة وبين عناصر AE الشفافة؛ لا تفرض إزالة خلفية مشهد كامل.
استعمل أداة توليد/تحرير الصور المتاحة للرسوم النقطية؛ حدّد دور كل مرجع وافحصه، ولا تعِد توليد الشعار والنص القرآني بوصفهما أصلًا موثوقًا.
اجمع آخر نسخة مختارة لكل مشهد فقط عند طلب الحزمة، مع PDF عربي يشرح الملاحظة السابقة والتعديل المنفذ وترقيم مطابق.
لا تدّع فهم صوت لم تتمكن من سماعه أو تفريغه، ولا تدّع مشاهدة قناة لم تتوفر نماذجها بصريًا.

## الإخراج والإيقاع والتحقق — V12

قبل تخطيط موشن جديد أو تحسين مشروع، اقرأ
[الإخراج والإيقاع ومراجعة الرندر](references/direction-rhythm-and-render-review.md).
حدّد الرسالة والنبرة، واختر فكرة مرتبطة بالهوية، وخطّط لوصلة كل لقطة بما بعدها.
اختبر أصعب لقطة أولًا، ثم راجع القراءة والحركة والصوت في الرندر عندما يتوفر.
اعتبر مدد الظهور والارتداد والختام في بقية المهارة قيمًا افتراضية قابلة للتكييف؛
قدّم طلب المستخدم ووقت القراءة، واسمح بالسكون المقصود في الأعمال العربية الهادئة.
لا تطبّق حظرًا عامًا على وصفات الكتابة أو الارتداد المختارة، ولا تضف مؤثرات إلى Style D دون طلب.
حافظ على قواعد سلامة JSX؛ ميّز الفحص الساكن والمحاكاة عن تشغيل AE والرندر الفعلي.

## صقل مشاهد الرسوم — V13

عند تحسين مونتاج بصور PNG أو طلب الظلال والأقنعة واللمعة والعمق، اقرأ
[احتواء الرسوم والكاميرا واللمعة الزجاجية](references/illustration-depth-and-glass-shine.md).
قِس حدود الرسم المرئي، أنهِ الحواف المقطوعة بقاعدة أو قناع مناسب، وافصل النص والرسم في Z مع كاميرا فعلية عند طلب العمق.
اجعل الخلفية مستمرة والمشاهد شفافة، واستخدم السعف وTrim Paths واللمعات انتقائيًا وفق الهوية.
احصر الضوء داخل ألفا مثبتة؛ لا تفرغ الملابس البيضاء أو تخمّن معاملات CC Glass.
افحص PNG كاملًا بـ`scripts/validate_png_assets.py` قبل التعبئة؛ توقيع PNG ووجود IEND داخل JSX فحص أولي فقط.
سلّم Outro ذا ثبات واضح، وميّز البرمجة والمحاكاة عن تشغيل After Effects والرندر.

## مسار الشعارات — L01–L17

عند طلب تحريك شعار أو الإشارة إلى معرض Motalim، اقرأ أولًا
[مكتبة الشعارات L01–L17](references/logo-animation-gallery-ae.md)، ثم
[قواعد بناء الشعارات والتحقق](references/logo-animation-production.md).
استخدم هذه الوصفات لتوسيع Style B؛ حافظ على الأنماط A–F وخصائصها السابقة.
اختر وصفة مناسبة لهندسة شعار المستخدم، ثم ابنِ مشروع JSX فعليًا عند طلب التنفيذ.
هذه مكتبة وصفات وتحويل تقني إلى AE؛ لا تدّع وجود 17 محركًا جاهزًا أو أن المشروع اختُبر داخل AE لمجرد قراءة الوصفات.
لا تنسخ شعار المرجع أو ألوانه أو موكاباته إلى عمل المستخدم.

## 1. الهدف الأساسي (Core Goal)

بناء مشاريع موشن جرافيك احترافية ومفتوحة وقابلة للتعديل داخل **Adobe After Effects** عبر سكربتات **ExtendScript (`.jsx`)**، بالاعتماد على:
- `Shape Layers` و`Bezier Paths` و`Trim Paths` (مع دعم تلقائي للصيغتين الكاملة والمختصرة لنقاط الفيكتور `vertices || v`)
- `Editable Arabic Text Layers` (مع التحقق التلقائي من تطبيق الخط الفعلي ورصف الكلمات ديناميكيًا عبر `sourceRectAtTime`)
- `Null Objects` و`3D Cameras` (`CAM_RIG` + `CAM_CTRL` + `CAM_CONTROLS` مع معالجة إزاحة الكاميرا في AE 2026)
- `Parented Multi-Scale 3D Z-Space Hierarchy` ("حرّك الكاميرا وكل شي يتحرك معك" — وضع المشاهد المتعددة في عمق `Z = 0, 2400, 4800, 7200` بقيادة متحكم كاميرا واحد `MASTER_CAM_CTRL`)
- `Split-Slide Diagonal Logo Lockup` (حركة تلاحم الشعار الهندسية المنزلقة من زاويتين متقابلتين مع انبثاق النجوم وارتفاع النصوص من التمويه البؤري)
- `Precomps` منظمة ومقسمة بوضوح مع تسريع كرت الشاشة (`CUDA GPU`) وعمق لوني `16-Bit` (مع توفير نسختين `9:16 Reels` و`16:9 Wide` عند الحاجة)
- مؤثرات صوتية متزامنة (`48kHz 16-bit Stereo WAV SFX`) للموشن جرافيك والشعارات والخرائط العقارية، أو مزامنة صوتية طيفية دقيقة (`Acoustic MP3 Vocal-Onset Sync`) للأناشيد والقصائد بدون مؤثرات اصطناعية مشوّشة
- حزمة `.zip` متكاملة جاهزة للتنفيذ الفوري على Windows وmacOS بدون أي نقص في الملفات.

عند طلب مشروع After Effects مفتوح، لا تسلّم فيديو مسطحًا (`MP4`) بدل المشروع. عند طلب صور أو ستوريبورد أو PDF فقط، سلّم النوع المطلوب دون فرض مشروع JSX. ميّز قابلية تحريك طبقة PNG عن قابلية تعديل أعضائها وتفاصيلها؛ لا تصف صورة مدمجة بأنها رسوم متجهية قابلة للتحرير بالكامل.

---

## 2. قواعد التسمية العربية والثنائية وهيكل الحزمة (Mandatory Naming & ZIP Packaging Rules)

طبّق قواعد وجود JSX وAssets أدناه على حزم مشاريع AE فقط. حزمة المهارة تحتوي SKILL.md ومراجعها وقوالبها، وحزمة الصور المطلوبة تحتوي الصور النهائية فقط؛ لا تضف JSX أو ملفات المشروع إلى أي منهما لمجرد اجتياز فحص التعبئة.

### أ. تسمية الملفات النهائية باللغة العربية (Arabic Deliverable Filenames)
- يجب أن يبدأ اسم ملف السكربت النهائي (`.jsx`) واسم الملف المضغوط (`.zip`) بعنوان عربي واضح يسهّل الفرز والأرشفة عند كثرة المشاريع:
  - مثال للسكربت المستقل: `إعلان_التدريبات_العقلية_غوص_الكاميرا_V02_AQLEEAT_DIVE.jsx`
  - مثال للحزمة المضغوطة: `إعلان_التدريبات_العقلية_غوص_الكاميرا_V02_Package.zip`

### ب. القاعدة الذهبية لتضمين ملف `.jsx` داخل ملف `.zip` (Windows Explorer ZIP Compatibility Rule)
منعًا لاختفاء ملف `.jsx` عند فك الضغط في مستكشف ويندوز (`Windows Explorer / zipfldr.dll`) أو بسبب اختلاف مسار مجلد `Assets/`:
1. **ضع دائمًا ملف السكربت `.jsx` في الجذر المباشر للحزمة (`Root Level`) بجانب مجلد `Assets/` مباشرةً**، بالإضافة إلى نسخة داخل مجلد المشروع الفرعي.
2. **ضع نسختين من ملف `.jsx` بجانب `Assets/`**:
   - نسخة بالاسم الإنجليزي القياسي (`PROJECT_NAME_V01.jsx`) لضمان عدم قيام مستكشف ويندوز بإخفاء الملف بسبب ترميز UTF-8 في ترويسة ZIP القديمة.
   - نسخة بالاسم العربي الكامل (`اسم_المشروع_بالعربي_V01.jsx`).
3. **اكتب دالة البحث عن الأصول (`findAssetFile`) في السكربت بحيث تبحث في عدة مسارات تلقائيًا**:
   - `new File(scriptFolder.fsName + "/Assets/" + fileName)` (عندما يكون السكربت بجانب `Assets/`).
   - `new File(scriptFolder.parent.fsName + "/Assets/" + fileName)` (في حال وضع المستخدم السكربت داخل مجلد فرعي أو العكس).
   - البحث داخل أي مجلد فرعي مباشر يحتوي على `Assets/`.
4. **التحقق الإلزامي قبل التسليم**: قبل إرسال ملف `.zip` للمستخدم، افحص محتوياته برمجيًا (`zipfile.ZipFile.namelist()`) وتأكد من وجود ملف `.jsx` غير فارغ (`file_size > 10000 bytes`) في جذر الأرشيف وبجانب `Assets/`.

### ج. التسمية الثنائية داخل المشروع (Bilingual Arabic + English Project Structure)
جميع المجلدات، الكومبوزيشنات، المشاهد الفرعية (`Precomps`)، وطبقات التحكم (`Nulls`) والـ`Layers` يجب أن تحمل اسمًا ثنائيًا (`ENGLISH | عربي`):
- `01_Compositions | الكومبوزيشنات_الرئيسية`
- `02_Precomps | المشاهد_الفرعية_للمستويات`
- `03_Visual_Assets | الأصول_البصرية_والخرائط`
- `04_Audio_SFX | المؤثرات_الصوتية_المتزامنة`
- `01_MAIN_COMP_REELS | المشهد_الرئيسي_عمودي_9x16`
- `02_MAIN_COMP_WIDE | المشهد_الرئيسي_عريض_16x9`

### د. التفصيل الخاص بالمشروع ورسالة النجاح باللغة العربية (Arabic Project Details & Completion Alert)
- أضف دائمًا تعليقًا عربيًا تفصيليًا (`mainComp.comment`) يشرح مراحل المشهد وتوزيع الطبقات.
- اجعل نافذة التنبيه الختامية `alert(...)` عند انتهاء تشغيل السكربت مكتوبة باللغة العربية الواضحة، وتعرض:
  1. اسم المشروع ورقم الإصدار بالعربية والإنجليزية.
  2. اسم الخط الذي تم تطبيقه فعليًا بعد التحقق (`postScriptName` مثل `LinaRound-SemiBold` أو `LinaRound-Bold` أو `Shubbak-Bold`).
  3. تفصيل المراحل الزمنية (`Intro -> Stations/Pillars/Scenes -> Hold -> Outro`).
  4. حالة الصوتيات والمؤثرات المربوطة في أسفل التايملاين.

---

## 3. الحل الجذري لتطبيق الخطوط العربية (`Lina round W05` / `LinaRound` & `Shubbak`)

### المشكلة التقنية في After Effects
عند تمرير اسم عرض يحتوي على مسافات مثل `doc.font = "Lina round W05 Bold"` إلى `txtDocProp.setValue(doc)`، فإن After Effects **لا يُطلق خطأ (`Exception`)**، بل يتجاهل الاسم بصمت ويُبقي الخط الافتراضي! وإذا كان الكود يحتوي على `break;` غير مشروطة داخل `try/catch`، فسيتوقف عند أول اسم فاشل دون تطبيق الخط.
كذلك في كثير من الأجهزة يكون الاسم الفعلي للخط داخل قاعدة بيانات After Effects هو `LinaRound-Bold` أو `LinaRound-SemiBold` أو `LinaRound-Regular` (بدون `W05` في الـPostScript Name) أو `LinaRoundW05-Bold`.

### الحل الإلزامي المعتمد (Two-Step Auto-Discovery + Read-Back Verification)
1. **الخطوة الأولى — البحث التلقائي في `app.fonts.allFonts`**:
   افحص جميع الخطوط المثبتة في الجهاز بحثًا عن أي خط يحتوي اسمه العائلي (`familyName`) أو اسمه البرمجي (`postScriptName`) على كلمة `"lina"` (أو `"shubbak"`) مع مطابقة الوزن المطلوب (`"bold"`, `"semibold"`, `"medium"`, `"regular"`).
2. **الخطوة الثانية — التحقق القرائي (`Read-Back Verification`)**:
   بعد استدعاء `txtDocProp.setValue(doc)`، اقرأ `var verifyDoc = txtDocProp.value;` وتأكد فعليًا من أن `String(verifyDoc.font).toLowerCase().indexOf(fk) !== -1` قبل الخروج من الحلقة!

```javascript
function resolveAndApplyArabicFont(txtDocProp, doc, familyKey, weightKey, candidates) {
    var fk = familyKey.toLowerCase();
    var wk = weightKey.toLowerCase();
    var resolvedPS = null;
    try {
        if (app.fonts && app.fonts.allFonts) {
            var allF = app.fonts.allFonts;
            var i, j;
            for (i = 0; i < allF.length; i++) {
                var famGroup = allF[i];
                for (j = 0; j < famGroup.length; j++) {
                    var fo = famGroup[j];
                    var famStr = String(fo.familyName || "").toLowerCase();
                    var psStr  = String(fo.postScriptName || "").toLowerCase();
                    var stStr  = String(fo.styleName || "").toLowerCase();
                    if (famStr.indexOf(fk) !== -1 || psStr.indexOf(fk) !== -1) {
                        if (stStr.indexOf(wk) !== -1 || psStr.indexOf(wk) !== -1) {
                            resolvedPS = fo.postScriptName;
                            break;
                        } else if (!resolvedPS) {
                            resolvedPS = fo.postScriptName;
                        }
                    }
                }
                if (resolvedPS && String(resolvedPS).toLowerCase().indexOf(wk) !== -1) {
                    break;
                }
            }
        }
    } catch (e) {}

    var tryList = [];
    if (resolvedPS) {
        tryList.push(resolvedPS);
    }
    var cIdx;
    for (cIdx = 0; cIdx < candidates.length; cIdx++) {
        tryList.push(candidates[cIdx]);
    }

    for (cIdx = 0; cIdx < tryList.length; cIdx++) {
        try {
            doc.font = tryList[cIdx];
            txtDocProp.setValue(doc);
            var verifyDoc = txtDocProp.value;
            var actualFont = String(verifyDoc.font || "").toLowerCase();
            var actualFam  = String(verifyDoc.fontFamily || "").toLowerCase();
            if (actualFont.indexOf(fk) !== -1 || actualFam.indexOf(fk) !== -1) {
                return verifyDoc.font;
            }
        } catch (fErr) {}
    }
    return doc.font;
}
```

### قوائم المرشحين القياسية (Standard Font Candidate Lists)
- **لعائلة خط لينا (`Lina round`)**:
  - Bold: `["LinaRound-Bold", "LinaRoundW05-Bold", "LinaroundW05-Bold", "LinaRound-SemiBold", "LinaRoundW05-SemiBold", "Lina-round-W05-Bold", "LinaRoundBold", "Lina round W05 Bold"]`
  - SemiBold / Medium: `["LinaRound-SemiBold", "LinaRoundW05-SemiBold", "LinaRound-Medium", "LinaRound-Bold", "LinaRoundW05-Regular", "Lina round W05 Regular"]`
  - Regular: `["LinaRound-Regular", "LinaRoundW05-Regular", "LinaRound-SemiBold", "LinaRound-Book", "Lina round W05 Regular"]`
- **لعائلة خط شباك (`Shubbak`)**:
  - Bold / ExtraBold: `["Shubbak-ExtraBold", "Shubbak-Bold", "ShubbakBold", "Shubbak"]`
  - Regular / Medium: `["Shubbak-Regular", "Shubbak-Medium", "ShubbakRegular", "Shubbak"]`

---

## 4. الأنماط الحركية المعتمدة (Supported Motion Styles & Choreography)

### النمط الأول (Style A): لوحة الإنفوجرافيك الواسعة وتنقل الكاميرا (`MASTER_BOARD` Tour)
- **متى يُستخدم**: عند وجود Storyboard متعدد المحطات أو موضوع تعليمي/إسلامي/تحريري تتنقل فيه الكاميرا بين البطاقات ثم تختم بـ`Final Zoom Out`.
- **البنية المكانية**:
  - `MAIN_COMP` بمقاس `1920×1080`، وبداخله `MASTER_BOARD` بمقاس `3840×2160` (مع خلفية Overscan `6400×3600` لمنع الحواف السوداء).
  - **قاعدة الكاميرا ثلاثية الأبعاد الحاسمة**: عند وضع `MASTER_BOARD` (الذي يحتوي على طبقات 2D) داخل `MAIN_COMP` كطبقة 3D (`threeDLayer = true`)، يجب ضبط:
    `boardInMain.collapseTransformation = false;`
    لأن تفعيل `collapseTransformation = true` على Precomp ثنائي الأبعاد يلغي تأثير الكاميرا ويجعل اللوحة ثابتة في الشاشة!
  - خطوط الربط المنحنية (`Curved Bezier Connectors`) تستخدم `Trim Paths` مع نبضة ذهبية مرافقة (`Travelling Tracer`) ورأس سهم يتبع المسار عبر `pointOnPath()` و`tangentOnPath()`.

### النمط الثاني (Style B): تحريك الشعارات والهويات البصرية (`Logo & Identity Animation`)
- **متى يُستخدم**: عند إرفاق شعار بصيغة `SVG` أو فيديو مرجعي لتحريك شعار مؤسسة أو علامة تجارية، أو كمشهد ختامي (`Outro / Brand Lockup`) في الإعلانات.
- **البنية الإلزامية والأساليب المعتمدة**:
  1. **تحويل ملف الـ`SVG` بالكامل إلى طبقات `Shape Layers` أصلية** (`vertices`, `inTangents`, `outTangents`) باستخدام أداة التحليل المرفقة في `templates/svg_to_ae_bezier_parser.py` حتى تبقى أجزاء الشعار فيكتور 100% قابلة للتعديل.
  2. **الأسلوب الأول لتحريك الشعار — التلاحم الهندسي المنزلق من زاويتين متقابلتين (`Signature Split-Slide Diagonal Logo Lockup`)**:
     - **حركة مفضّلة ومعتمدة لجمالها وسلاستها العالية**:
     - تنزلق الكتلة الأساسية للشعار (`LOGO_GREEN_BASE`) قطريًا من أسفل اليسار (`[targetX - 260, targetY + 130] -> [targetX, targetY]`) خلال `0.82s` بمنحنى سرعة `EaseCopy` (`Influence = 86% / 86%`) مع ظهور تدريجي سريع (`Opacity: 0 -> 100%` في `0.40s`).
     - في نفس اللحظة وبفارق زمني دقيق (`Stagger = 0.06s .. 0.08s`)، تنزلق الأجنحة أو الكتل المقابلة (`LOGO_WING_LOWER` و`LOGO_WING_UPPER`) من الاتجاه القطري المعاكس أعلى اليمين (`[targetX + 260, targetY - 130]` و`[targetX + 290, targetY - 160] -> [targetX, targetY]`) لتلتقي الكتلتان وتلتحما مغناطيسيًا في مركز الشعار!
     - لحظة التلاحم (`tLock - 0.15s`)، تنبثق النجوم أو العناصر التفصيلية (`LOGO_STAR_01..05`) بالتتابع (`Stagger = 0.07s`) بحركة ارتداد مرن `elasticBounceReveal` (`0% -> 132% -> 88% -> 106% -> 100%`).
     - بالتزامن مع التلاحم، ترتفع نصوص الهوية (`الاسم العربي` + `الاسم الإنجليزي` + `الموقع/حساب التواصل`) من الأسفل (`+55px -> 0px`) بمنحنى `84%` مع تلاشي التمويه البؤري (`Rack-Focus Blur: 38px -> 0px`) ونغمة توافقية دافئة (`Harmonic Brand Chord + Sub Boom`).
  3. **الأسلوب الثاني لتحريك الشعار — كوكبة المدارك والاندماج الحلزوني (`Cognitive Constellation & Spiral Fusion`)**:
     - ابتكار عناصر وأيقونات فيكتور تعبّر عن تخصص المؤسسة تندمج حلزونيًا في نجوم الشعار، متبوعة بشعاع مسح ضوئي (`Optical Scan Beam`) وأيقونات تواصل اجتماعي فردية بـ`Trim Paths` + `elasticBounceReveal` ودورة حياة كاملة (`Intro -> Living Hold -> Outro`).

### النمط الثالث (Style C): المشاهد ثلاثية الأبعاد والبطاقات المتعددة الطبقات (`2.5D Multi-Plane & Bento Motion`)
- **متى يُستخدم**: عند محاكاة عروض البطاقات أو المشاهد ذات العمق البصري بدون لوحة مسطحة واحدة.
- **قواعد الجودة العالية**:
  - لا تستخدم بطاقات مسطحة باهتة؛ ابنِ كل بطاقة من طبقات غنية (خلفية متدرجة، إطار زخرفي، شارة رقمية، أيقونة فيكتور متعددة الأجزاء تتحرك داخليًا عبر `Trim Paths` و`Rotation`، وعنوان ونص فرعي).
  - وزّع العناصر على مستويات عمق حقيقية (`Z-Depth`) مع إضاءة محيطية وظلال ناعمة وحركة كاميرا سينمائية سلسة.

### النمط الرابع (Style D): مونتاج الأناشيد والأعمال الروحانية والوعظية (`Spiritual Nasheed & Poetic Kinetic Typography Montage`)
- **متى يُستخدم**: عند طلب مونتاج أنشودة أو قصيدة صوتية بمشاهد بصرية متتابعة ونصوص تظهر كلمةً بكلمة (`Kinetic Typography Booklet`).
- **القواعد الإلزامية لهذا النمط**:
  1. **عدم إضافة مؤثرات صوتية اصطناعية (`No Synthetic SFX by Default`)**: في مشاريع الأناشيد والقصائد لا تضف ملفات `WAV SFX` (مثل `whoosh` و`pop`) إلا إذا طلب المستخدم ذلك صراحةً؛ اكتفِ بملف الأنشودة الأصلي فقط حتى لا تشوّش المؤثرات على اللحن والصوت.
  2. **المزامنة الصوتية الطيفية الفعلية (`Acoustic MP3 Onset Synchronization`)**: عند توفر الملف الصوتي (`.mp3` أو `.wav`)، حلّل الموجة الصوتية عبر مرشح ترددات الصوت البشري (`250Hz - 3400Hz Bandpass Filter` عبر `templates/mp3_vocal_onset_analyzer.py`) لاستخراج فواصل التنفس ولحظة نطق كل شطر وكل كلمة بالمللي ثانية، مع مراعاة المدود الصوتية في نهاية الشطور والقوافي.
  3. **بطاقة العنوان الافتتاحي في المقدمة (`Intro Title Card`)**: في مشهد المقدمة الصوتية (`آهات / Intro`)، يُعرض عنوان الأنشودة بحجم كبير وبارز في الأعلى (`106pt+`)، يفصل تحته خط زخرفي متحرك عبر `Trim Paths`، ثم يُكتب تحته اسم الشاعر (`كلمات: ...`) متبوعًا باسم المنشد والملحن (`أداء وألحان: ...`).
  4. **رصف الكلمات العربية ديناميكيًا بدون تداخل (`Dynamic RTL Word Layout via sourceRectAtTime`)**: قس العرض الفعلي لكل كلمة بعد تطبيق الخط عبر `sourceRectAtTime(0, false).width` وارصف كلمات كل سطر من اليمين إلى اليسار بفراغ ثابت داخل المساحة الفارغة المخصصة للمشهد (`TOP`, `BOTTOM`, `RIGHT`, `LEFT`) بدون خطوط زخرفية زائدة فوق الأبيات، واضبط `txtLyr.inPoint = localStart` ليسهل تحريك شريط أي كلمة بالماوس.
  5. **منع التقطيع الكرتوني أو الـ 2.5D المزيف للصور الفردية**: لا تقم بمضاعفة صورة المشهد الواحدة وقصها بأقنعة (`2.5D Masks`) لأن ذلك يسبب ازدواجية الحواف (`Ghosting`)؛ أبقِ المشهد في طبقة واحدة صافية (`BG_MAIN_SCENE`) مع دعم الاستبدال التلقائي بملفات الفيديو المتحركة (`.mp4` / `.mov` من نماذج `Image-to-Video / Omni Router`).
  6. **انتقالات سينمائية شاعرية بدل فواصل البرامج (`Cinematic Rack-Focus & Light-Leak Transitions`)**: تجنب انتقالات السحب الكرتونية أو الفواصل الحادة التي تشبه فواصل البرامج؛ استخدم انتقال التمويه البؤري المتبادل (`ADBE Gaussian Blur 2` من `0px` إلى `40px` مع `Repeat Edge Pixels = 1` وحركة `Scale` انسيابية) مقترنًا بنبضة إشراق ضوئية خفيفة جدًا (`18% Opacity Screen Light-Leak Pulse`).

### النمط الخامس (Style E): الغوص البصري المتدرج بالكاميرا عبر الخرائط والمخططات العقارية والمؤسسية (`Multi-Scale Map / Earth Zoom & Masterplan 3D Z-Space Camera Dive — "حرك الكاميرا وكل شي يتحرك معك"`)
- **متى يُستخدم**: في إعلانات المشاريع العقارية، الخرائط الجغرافية التفاعلية، الإعلانات المؤسسية السريعة، أو أي مشهد يبدأ من نظرة إقليمية واسعة ثم يغوص بالكاميرا عبر عدة مستويات مكانية (`Macro Region -> City District -> Masterplan Subdivision -> Split-Slide Brand Lockup`) مع بناء نسختين داخل المشروع نفسه: عمودية (`1080×1920` Reels/TikTok) وعريضة (`1920×1080` YouTube/X).
- **الهندسة البرمجية والبصرية المعتمدة والمجرّبة لهذا النمط**:
  1. **الترتيب الفضائي ثلاثي الأبعاد والربط بمتحكم كاميرا واحد (`4-Level 3D Z-Space Stacking + Single Master Camera Controller`)**:
     - يتم بناء كل مستوى في Precomp مستقل (`1080×1920`) ثم إضافته داخل `MAIN_COMP` كطبقة ثلاثية الأبعاد (`threeDLayer = true`) مع ضبط **`collapseTransformation = false`** (`LayerQuality.BEST`) على مسافات متساوية على محور العمق `Z`:
       - `01_LEVEL_MACRO_REGION`: عند `Z = 0` (يظهر من `0.0s` إلى `6.5s`)
       - `02_LEVEL_CITY_LANDMARKS`: عند `Z = 2400` (يظهر من `5.5s` إلى `14.1s`)
       - `03_LEVEL_MASTERPLAN_GRID`: عند `Z = 4800` (يظهر من `13.1s` إلى `21.1s`)
       - `04_LEVEL_BRAND_LOCKUP`: عند `Z = 7200` (يظهر من `20.1s` إلى `24.0s`)
     - يقود المشهد بالكامل متحكم واحد **`MASTER_CAM_CTRL | متحكم_الكاميرا_الشامل`** يتحرك على محور `Z` من `-520` -> `0..320` -> `2400..2820` -> `4800..5060` -> `7200..7280` بمنحنى سرعة `EaseCopy` (`In/Out Influence = 86%`) وتصفير المماسات المكانية (`zeroSpatialTangents`).
  2. **طبقة التمويه البؤري المرتبطة بسرعة الغوص (`FX_RACK_FOCUS_BLUR Adjustment Layer`)**:
     - توضع طبقة `Adjustment Layer` في أعلى `MAIN_COMP` عليها مؤثر `ADBE Gaussian Blur 2` مع تفعيل `Repeat Edge Pixels = 1`.
     - ترتفع قيمة التمويه من `0px` إلى `38..46px` في منتصف كل قفزة كاميرا بالضبط (`0.0s`, `6.05s`, `13.65s`, `20.65s`) ثم تعود إلى `0px` عند وصول الكاميرا للمستوى الجديد، بالتزامن مع تداخل شفافية (`Opacity Cross-Fade` مدته `0.65s`) بين المستوى السابق والمستوى التالي.
  3. **تفاصيل المستويات الأربعة وتوليد خرائطها البرمجية عالية الدقة (`Procedural Cartographic & CAD Asset Generation`)**:
     - **المستوى 1 (الخريطة الإقليمية)**: توليد خريطة إقليمية بألوان هوية الجهة مع توهج الساحل ومسار `Trim Paths` متحرك وهالة نبض حول المدينة المركزية (`جدة`).
     - **المستوى 2 (خريطة المدينة ودبوس الرادار)**: توليد خريطة الشوارع الرئيسية والخور والمطار مع تسميات المعالم المحيطة، وهبوط **دبوس الموقع الفيكتوري (`HERO_LOCATION_PIN`)** من الأعلى بارتداد مرن (`elasticBounceReveal`) تتبعه **4 موجات رادار دائرية متتالية (`RADAR_PULSE_RING_01..04`)** تتوسع (`Scale: 10% -> 295%`) وتتلاشى (`Opacity: 88% -> 0%`) مع صوت نبض القلب والرادار.
     - **المستوى 3 (المخطط الهندسي وإضاءة القطع/المسارات الثلاثة)**: توليد مخطط تقسيم الأراضي والشوارع (`CAD Subdivision Grid`) مع شريان مروري رأسي على اليمين (`Rotation = -90°`) بخط انسياب `Trim Paths`، ثم إضاءة 3 قطع رئيسية تتابعيًا (`PARCEL_01..03`) بلون ذهبي/كريمي دافئ مع انبثاق شارة كل مسار/مشروع فوق قطعته.
     - **المستوى 4 (ختام الهوية بحركة `Split-Slide Diagonal Logo Lockup`)**: انزلاق أجزاء الشعار الفيكتوري من زاويتين متقابلتين ليلتحما في المركز مع انبثاق النجوم الخمس وارتفاع اسم الجهة بالعربية والإنجليزية من التمويه.


### النمط السادس (Style F): خطاف السؤال التفاعلي وتتبع المسار المضيء عبر الشوارع والمباني البارزة 2.5D وشعار الشريط ثلاثي الطبقات (`Kinetic Question Hook + Isometric 2.5D Street Route Tracer + 3-Layer Glossy Ribbon Logo`)
- **متى يُستخدم**: في إعلانات الشركات التقنية، مساحات العمل، المراكز التدريبية، والعقارات التي تبدأ بسؤال تفاعلي خاطف (مثل *"وين مسارك؟"*) ثم تنتقل عبر خريطة إقليمية ذات أمواج بحرية وسحب بارالاكس إلى شبكة الشوارع والدوارات المحلية لتتبع مسار مضيء يصل إلى مبنى الجهة المميز، وتختم بمسحة سحابة بيضاء وشعار شريطي ثلاثي الطبقات.
- **الخدع البصرية الـ7 المعتمدة في هذا النمط (`The 7 Signature Tricks of Style F`)**:
  1. **Trick 1 — خطاف السؤال التفاعلي (`Bracket-to-Underline-to-8Bit-Pixel-Question-Mark + Two-Tone Fill Shift`)**:
     - يبدأ المشهد على خلفية كريمية دافئة (`#F5F5F3`) بقوس برتقالي يرسم عبر `Trim Paths` ثم يستقيم كخط مائل (`-4°`) تحت الكلمة، ليتفكك في طرفه الأيسر إلى **علامة استفهام بكسلية (`8-Bit Pixelated ؟`)** مكونة من 7 مربعات فيكتور تنبثق بارتداد مرن.
     - تظهر الكلمة الأولى في الأعلى بكشيدة ممتدة (`"ويــــن"`)، وترتفع الكلمة الرئيسية تحتها (`"مسارك"`) مع مؤثر `ADBE Fill` يتحول لونيًا من التركواز (`#4A90A4`) إلى الكحلي الملكي (`#1F3E6B`) ومؤثر صوتي لنقرات آلة كاتبة ميكانيكية.
  2. **Trick 2 — أمواج الساحل المتدرجة (`5-Layer Bathymetric Wave Wiggle`) والحافة ثلاثية الأبعاد للمحافظة**:
     - يُبنى البحر من 5 طبقات فيكتور متموجة ومتداخلة (من الأزرق البحري العميق `#0563AF` إلى السماوي الفاتح `#99DAFA` مع خط شاطئ أبيض)، وتُحرّك كل طبقة بتعبير تموج جيبي مختلف الطور (`Wave Wiggle`).
     - يُرسم مضلع المدينة/المحافظة المستهدفة باللون البرتقالي الدافئ (`#EA6C10`) مع طبقة حافة سفلية بيضاء بارزة (`3D White Extruded Rim`) تمنحه عمقًا مجسمًا.
  3. **Trick 3 — سحب البارالاكس العائمة (`Aerial Drone Multi-Z Blurred Clouds`)**:
     - توضع طبقات سحب بيضاء مضببة (`ADBE Gaussian Blur 2: 28px–38px`) في مستويات عمق أقرب للكاميرا (`Z = -340` و`Z = 1380`) بحيث تتحرك بسرعة نسبية مختلفة أثناء غوص الكاميرا وتحاكي تصوير الطائرات المسيرة (`Drone Parallax`).
  4. **Trick 4 — القطع المتطابق لونيًا (`Same-Palette Scale Match-Cut: Macro Region -> Urban CAD Grid`)**:
     - تتطابق درجة اللون البرتقالي للأرضية (`#EA6C10`) وزاوية ساحل البحر العلوي بين كومبوزيشن الخريطة الإقليمية وكومبوزيشن شبكة الشوارع التفصيلية، مما يجعل الغوص الانتقالي يبدو كخريطة فيكتور واحدة لا نهائية الدقة.
  5. **Trick 5 — المباني البارزة بأسلوب `2.5D Isometric` وانبثاق أيقونة السقف ثلاثية الأبعاد**:
     - تُبنى المباني المحيطة بالدوارات والشوارع عبر دالة `addIsometricBuilding` من مضلعين: مضلع امتداد جانبي وظل داكن (`#2D231E`) ومضلع سقف علوي كريمي (`#FCE48C`).
     - يُميّز **المبنى الهدف (Hero Building)** بسقف سماوي متوهج (`#0FB5FC`) يبقى صافيًا حتى لحظة وصول شعاع المسار إليه، فينبثق فوقه شعار الموجة الأبيض ثلاثي الأبعاد بارتداد مرن ورنين ماريمبا مزدوج (`Marimba/Sonar UI Chime`).
  6. **Trick 6 — شعاع تتبع المسار الأبيض المتوهج (`Dual Trim Paths Start/End + Add Glow + Multi-Hop Camera`)**:
     - يُرسم مسار الوصول فوق الشوارع الذهبية بطبقتين متطابقتين (قلب أبيض صلب `#FFFFFF` + هالة ذهبية `#FFD54F` بوضع `BlendingMode.ADD`) مع تحريك `Trim Paths End` و`Trim Paths Start` معًا كنبضة ضوئية تنطلق من المدخل (`دوار الأقصى`)، وتلتف بنعومة حول الدوار المركزي (`دوار النص`)، وتتجه إلى المبنى الهدف بالتزامن مع 3 قفزات تتبع كاميرا (`EaseCopy 86%`).
  7. **Trick 7 — مسحة السحابة البيضاء وشعار الشريط ثلاثي الطبقات (`Cloud Whiteout Wipe & 3-Layer Glossy Ribbon Logo`)**:
     - تعبر سحابة بيضاء عملاقة بحواف ناعمة جدًا (`Gaussian Blur = 140px`) أمام الكاميرا لتمسح الخريطة وتعيد المشهد طبيعيًا إلى الخلفية الكريمية (`#F5F5F3`).
     - يُرسم الشعار الخطي عبر **3 طبقات `Trim Paths` متتابعة**:
       1. طبقة الحفر الغائر الرمادي (`Groove Outline #CCCBC6` عند `t0`).
       2. طبقة الشريط البرتقالي الأساسي (`Brand Orange Ribbon #F07D1A` عند `t0 + 0.15s`).
       3. طبقة اللمعة الذهبية الساطعة (`Golden Specular Sweep #FFD54F` بوضع `BlendingMode.ADD` وحزمة `Trim Start/End` عند `t0 + 0.40s`) مع ظهور الاسم الإنجليزي والوصف العربي بإيقاع الآلة الكاتبة.

  8. **Trick 8 — الانتقال الثلاثي المنغلق للخريطة مع وميض الكلمة البرتقالي (`3-Direction Clamshell Map Closure + Orange Word Flash`)**:
     - قبل إغلاق المشهد الأول مباشرة، تومض كلمة `"مسارك"` باللون البرتقالي الهوياتي (`#F07D1A`) ثم تتحول للرمادي الفاتح، بينما تنغلق الخريطة الإقليمية من **3 زوايا مستقلة** (كتلة البحر من أعلى اليسار + الإقليم الجنوبي من الأسفل + مضلع المحافظة البرتقالي المجسم من أسفل اليسار إلى أعلى اليمين) لتغلق المثلث الأبيض المتبقي في وسط الشاشة كأحجية هندسية.
  9. **Trick 9 — المنظور ثلاثي الأبعاد الحقيقي والتجول المتعامد حول الدوارات (`True 3D Multi-Plane Z-Space + 2-Street 90° Banking Roaming`)**:
     - تُبنى خريطة الشوارع والمباني كطبقات ثلاثية الأبعاد حقيقية (`threeDLayer = true`) مع تفعيل **`collapseTransformation = true`** على طبقة الكومبوزيشن الفرعي داخل المشهد الرئيسي وإمالتها في الفضاء (`Rotate X = 26°..32°`)، وتوزيع الطبقات على أعماق `Z` فعلية: الشوارع (`Z = -4..-6`)، الشعاع الضوئي (`Z = -10`)، قاع وظلال المباني (`Z = -8`)، جدران المباني (`Z = -22`)، أسقف المباني (`Z = -38`)، سقف المبنى الهدف (`Z = -54`)، وأيقونة الهوية العائمة فوق السقف (`Z = -82`).
     - لا تتحرك الكاميرا في خط مستقيم واحد، بل تتجول في **مسارين متعامدين (`L-Shaped Roaming`)**: تنطلق أولًا باتجاه الشمال الغربي من الدوار الأول نحو الدوار المركزي، وعند التفاف الشعاع الضوئي حول حلقة الدوار بزاوية `90°` تلتف الكاميرا ثلاثية الأبعاد (`Rotate Z: +4° -> -15.5°`, `Rotate Y: -8° -> +9°`, `Rotate X: +18° -> +22°`) ثم تنطلق في الاتجاه الجديد (الشمال الشرقي) على طول الشارع الثاني حتى تتوقف فوق المبنى الهدف.
  10. **Trick 10 — انتقال تيار السحابة المخروطي الصاعد (`Conical Cloud-Jet Stream Wipe + Camera Ascent`)**:
      - للانتقال من الخريطة ثلاثية الأبعاد إلى شاشة الشعار النهائية، يندفع تيار سحابي مخروطي مائل (`+34°`) من جهة الساحل الأيسر ليغمر المبنى الهدف بالضباب الأبيض أولًا، ثم يتوسع أُسّيًا (`Scale: 65% -> 340%` مع `Gaussian Blur = 95px`) بالتزامن مع صعود الكاميرا للأعلى (`Rotate X -> +38°`) ليفتح الخلفية الكريمية الصافية للشعار بنعومة تامة.

---

## 5. المؤثرات الصوتية المتزامنة (`Synchronized 48kHz Stereo WAV SFX` — للأنماط A وB وC وE)

- في مشاريع الإنفوجرافيك وتحريك الشعارات والبطاقات والخرائط العقارية (الأنماط `A`, `B`, `C`, `E` — وليس في الأناشيد `Style D` إلا بطلب صريح)، يتضمن مجلد `Assets/Audio_SFX/` مسارًا صوتيًا شاملًا (`sfx_00_master_dive_soundtrack.wav`) بالإضافة إلى 6 مؤثرات صوتية منفصلة مصممة برمجيًا بدقة `48000 Hz, 16-bit Stereo WAV` ومتزامنة بالإطار (`Frame-Accurate`) مع أحداث المشهد:
  1. `sfx_01_intro_map_reveal.wav`: هواء افتتاحي عميق مع ظهور الخريطة الإقليمية.
  2. `sfx_02_dive1_whoosh_boom.wav`: اندفاع هوائي وضربة Sub-Bass للغوص الأول بالكاميرا.
  3. `sfx_03_pin_drop_radar_heartbeat.wav`: ارتداد دبوس الموقع متبوعًا بنغمات سونار الرادار ونبضات إيقاعية عميقة (`Lub-Dub Sub Heartbeat`).
  4. `sfx_04_dive2_masterplan_whoosh.wav`: اندفاع هوائي للغوص الثاني داخل الدبوس نحو المخطط الهندسي.
  5. `sfx_05_parcels_1_2_3_pop.wav`: نقرات تقنية متناغمة (`Pentatonic UI Pops`) عند إضاءة القطع/المسارات الثلاثة.
  6. `sfx_06_dive3_logo_split_lockup.wav`: غوص ختامي متبوع برنين توافقي دافئ (`Harmonic Brand Chord`) لحظة التحام نصفي الشعار.
- يتم استيراد جميع ملفات الصوت ووضعها في أسفل التايملاين (`moveToEnd()`) مع `audioEnabled = true`.

---

## 6. القواعد الهندسية الصارمة لـExtendScript وV8 (Defensive Engineering Rules)

1. **التوافق الصارم مع ES3**: يُمنع استخدام `let`, `const`, Arrow Functions `=>`, `.forEach()`, `.map()`, `.filter()`, Template Literals, أو Optional Chaining `?.`.
2. **استخدام Match Names حصريًا**: للعمل على جميع لغات واجهة After Effects (`ADBE Transform Group`, `ADBE Root Vectors Group`, `ADBE Vector Shape - Group`, `ADBE Vector Filter - Trim`, إلخ).
3. **إعادة جلب المراجع بعد `addProperty()` (حماية من `Object is invalid`)**:
   إضافة عنصر جديد داخل مجموعة مفهرسة (`ADBE Root Vectors Group` أو `ADBE Vectors Group` أو `ADBE Effect Parade`) يُبطل مراجع العناصر الشقيقة. أضف جميع العناصر وسمِّها أولًا، ثم أعد جلب المجموعة والعناصر بالاسم قبل تعيين القيم.
4. **دعم الصيغتين الكاملة والمختصرة لمسارات الـBezier (`Dual-Schema Bezier Vertices Guard — حماية من خطأ Unable to set vertices`)**:
   - قد تأتي بيانات الفيكتور المستخرجة من `SVG` بصيغة مفاتيح كاملة (`{ vertices, inTangents, outTangents, closed }`) أو مختصرة (`{ v, i, o, c }`)، وقد تكون مغلفة داخل `.subpaths` أو ككائن مسار مباشر.
   - **القاعدة الإلزامية**: يجب على دالة `addBezierSubpathsGroup` قبول الصيغتين تلقائيًا (`var verts = spData.vertices || spData.v;`) وفحص `if (pathProp && verts && verts.length)` قبل إنشاء `new Shape()`، كما يجب فحص السكربت في Node.js عبر محاكي يرفض أي تعيين فارغ أو `undefined` لخاصية `Shape.vertices`.
5. **توافق محرك التعبيرات الحديث (V8 Expression Engine)**:
   - لا تكتب أبدًا `value + [dx, dy, dz]` لأن محرك V8 يحول المصفوفات إلى نص؛ اكتب دائمًا `[value[0] + dx, value[1] + dy, value[2] + dz]`.
   - أضف `.value` عند قراءة أي Slider Control داخل التعبير: `effect("...")("ADBE Slider Control-0001").value`.
6. **أبعاد الـTemporal Ease للخصائص المكانية**:
   - الخصائص المكانية (`ADBE Position` من نوع `TwoD_SPATIAL` أو `ThreeD_SPATIAL`) تقبل مصفوفة من **عنصر واحد فقط** `[inEase], [outEase]` في `setTemporalEaseAtKey`.
   - الخصائص غير المكانية (`ADBE Scale` ثنائية أو ثلاثية الأبعاد) تقبل عنصرين أو 3 عناصر.
   - صفّر المماسات المكانية `setSpatialTangentsAtKey(k, [0,0,0], [0,0,0])` أثناء فترات الثبات لمنع الانجراف التلقائي (`Auto-Bezier Drift`).

---

## 7. قواعد التوافق والأداء المتقدمة لـ After Effects 2024–2026 (GPU & Camera Fixes — V06–V08)

1. **إصلاح إزاحة الكاميرا في After Effects 2026 (`One-Node Camera [-960, -540] Bug Fix`)**:
   في إصدارات After Effects الحديثة (2025/2026)، تنشئ الدالة `comp.layers.addCamera(name, [960, 540])` كاميرا من نوع `One-Node` في النقطة العالمية `[0, 0, -zoom]`؛ وعند ربطها بطبقة `CAM_CTRL` (`Position = [960, 540, 0]`) يتحول موقع الكاميرا المحلي إلى `[-960, -540, -zoom]` فينزاح المشهد إلى زاوية الشاشة!
   - **الحل الإلزامي**: اضبط `Anchor Point` للـ`Null` على `[0, 0, 0]` وموقعه على `[comp.width * 0.5, comp.height * 0.5, 0]` قبل الربط، ثم **بعد** تنفيذ `cam.parent = camNull;` اضبط صراحةً موقع الكاميرا المحلي `ADBE Position` على **`[0, 0, -zoomDist]`** ونقطة ارتكازها على `[0, 0, 0]` واتجاهها `ADBE Orientation` على `[0, 0, 0]`.
2. **تصفير نقاط ارتكاز طبقات الأشكال (`Shape Layer Anchor Point Reset`)**:
   بسبب خيار *"Center Anchor Point in New Shape Layers"* في إعدادات After Effects، يجب دائمًا تعيين `safeSetVal(safeProp(tr, "ADBE Anchor Point"), [0, 0, 0])` لكل طبقة `Shape Layer` بعد الانتهاء من بناء مجموعات الفيكتور داخلها.
3. **التحجيم التلقائي لملء الشاشة (`Dynamic Footage Auto-Fit 1920x1080 / 1080x1920`)**:
   احسب دائمًا معامل التكبير الأساسي من أبعاد الأصل المستورد (`Math.max(comp.width / footageItem.width, comp.height / footageItem.height) * 100.0`) مع هامش حركة (`1.06x - 1.09x`) لمنع ظهور أي حواف سوداء.
4. **تفعيل تسريع كرت الشاشة (`CUDA GPU`) ومنع اختناق المعالج (`CPU Bottlenecks`)**:
   - فعّل تسريع كرت الشاشة برمجيًا في بداية السكربت عبر `app.project.gpuAccelType = GpuAccelType.CUDA;` (مع بدائل `VULKAN` و`OPENCL` داخل `try/catch`).
   - استخدم عمق `16-Bit` (`app.project.bitsPerChannel = 16`) مع توهج خفيف جدًا (`ADBE Glo2`: `Threshold = 82%`, `Radius = 26-50`, `Intensity = 0.12-0.15`) لمنع انفجار الإضاءة الساطعة في وضع `32-Bit Float`.
   - تجنب الفلاتر القديمة أحادية النواة مثل `ADBE Noise2` على طول التايملاين أو تكرار `ADBE Drop Shadow` عشرات المرات على الكلمات؛ استعمل حدود النص الأصلية (`doc.applyStroke = true; doc.strokeOverFill = false;`) لضمان معاينة فورية وسلسة.

---

## 8. المراجع والقوالب المرفقة داخل المهارة (Bundled Skill Resources)

- [references/brand-led-scene-review.md](references/brand-led-scene-review.md): قواعد V14 لتوحيد الهوية في العناصر، تفسير الأبيات، ملف التدريبات العقلية، مراجعة العربية والمصحف، وإعداد ZIP الصور وPDF الملاحظات.

- `references/extendscript-defensive-rules.md`: الدليل التفصيلي لقواعد ExtendScript ES3 ومحرك V8 وإصلاحات AE 2026 للكاميرا والـGPU وحارس نقاط الـBezier (`Dual-Schema Bezier Guard`).
- `references/motion-styles-and-choreography.md`: خرائط التحريك التفصيلية للأنماط الخمسة (`Style A` إلى `Style E`) وحركة تلاحم الشعار المنزلقة (`Split-Slide Diagonal Logo Lockup`).
- `references/packaging-and-windows-zip-rules.md`: قواعد بناء الحزمة المضغوطة وضمان ظهور ملف `.jsx` في جميع أنظمة التشغيل.
- `references/PRE_DELIVERY_CHECKLIST.md`: قائمة الفحص البرمجية الإلزامية قبل تسليم أي مشروع (بما فيها فحص `Shape.vertices` الصارم في Node.js).
- `templates/salman_motion_starter_template.js`: القالب البرمجي الدفاعي الجاهز (شامل دوال الغوص بالكاميرا عبر الخرائط، دبوس الرادار، وحركة تلاحم الشعار `buildSplitSlideLogoLockup`).
- `templates/svg_to_ae_bezier_parser.py`: أداة بايثون لتحويل أي ملف `SVG` إلى مسارات After Effects Bezier أصلية.
- `templates/stereo_wav_sfx_generator.py`: مولّد المؤثرات الصوتية (`48kHz Stereo WAV`) المتزامنة مع الموشن جرافيك والغوص البصري.
- `templates/mp3_vocal_onset_analyzer.py`: محلل الطيف الصوتي (`250Hz - 3400Hz Vocal Bandpass`) لاستخراج توقيت الكلمات والشطور للأناشيد والقصائد.

- [references/logo-animation-gallery-ae.md](references/logo-animation-gallery-ae.md): فهرس 17 حركة مع خطط توقيت مقترحة وتحويلها إلى أدوات AE.
- [references/logo-animation-production.md](references/logo-animation-production.md): إعداد الشعار، المسارات الوسطية، توافق Morph، الشفافية، أداء الجزيئات وفحص الختام.

- [references/direction-rhythm-and-render-review.md](references/direction-rhythm-and-render-review.md): مبادئ إخراج منتقاة من motionmaxxing ومكيّفة لـAE والعربية، مع مراجعة رندر مستقلة عن أدوات الويب.

---

<a id="file-2"></a>

## references/PRE_DELIVERY_CHECKLIST.md

# قائمة الفحص الإلزامية قبل التسليم (PRE-DELIVERY CHECKLIST V14)

قبل تسليم المشروع، افحص البنود المنطبقة أدناه. سجّل ما اختُبر برمجيًا وما اختُبر داخل AE وما لم يُختبر؛ لا تعلن نجاح بند يحتاج تشغيلًا فعليًا بناءً على فحص ساكن.

حدّد نوع التسليم أولًا: طبّق بنود JSX وAssets على مشروع AE، لا حزمة صور أو حزمة المهارة. لحزم الصور، طبّق بند الهوية والمراجعة في النهاية وفحوص PNG وZIP وPDF المنطبقة.

- [ ] **1. وجود ملف `.jsx` داخل ملف الـ`.zip` فعليًا**:
  - فحص أرشيف `.zip` عبر `zipfile.ZipFile(zip_path).namelist()` والتأكد من وجود ملف `.jsx` (بالاسمين العربي والإنجليزي) في الجذر المباشر (`Root`) وبجانب مجلد `Assets/` مباشرةً، وأن حجمه أكبر من `10 KB`.
- [ ] **2. التسمية العربية والثنائية (`Arabic & Bilingual Naming`)**:
  - اسم ملف `.zip` الخارجي واسم ملف `.jsx` يبدآن بعنوان عربي واضح.
  - جميع المجلدات والكومبوزيشنات والطبقات داخل After Effects تحمل اسمًا ثنائيًا (`ENGLISH | عربي`).
  - نافذة التنبيه الختامية `alert(...)` مكتوبة باللغة العربية الواضحة وتتضمن تفصيل المشروع والخط المطبق فعليًا.
- [ ] **3. التحقق القرائي من الخطوط العربية (`Font Auto-Resolution + Read-Back`)**:
  - استخدام دالة `resolveAndApplyArabicFont` التي تفحص `app.fonts.allFonts` أولًا ثم تقرأ `txtDocProp.value.font` بعد `setValue(doc)` للتأكد من تطبيق خط `LinaRound` أو `Shubbak` وعدم تجاهله بصمت.
- [ ] **4. إصلاحات الكاميرا والأداء لـ After Effects 2026 (`Camera & CUDA GPU Fixes`)**:
  - استخدام `createCenteredCameraRig` لتصفير إزاحة `[-960, -540]` بعد ربط الكاميرا بالـ`Null`.
  - تصفير `ADBE Anchor Point` على `[0, 0, 0]` لكل `Shape Layer` بعد إضافة عناصر الفيكتور.
  - تفعيل `enableGpuAnd16Bit()` (`GpuAccelType.CUDA` + `bitsPerChannel = 16`).
  - ضبط `collapseTransformation = false` على طبقة `MASTER_BOARD` ثلاثية الأبعاد داخل `MAIN_COMP`.
- [ ] **5. التوافق الصارم مع ExtendScript ES3 ومحرك V8**:
  - خلو الكود تمامًا من `let`, `const`, `=>`, `.forEach`, `.map`, `.filter`, Template Literals.
  - عدم استخدام جمع المصفوفات المباشر `value + [dx, dy, dz]` داخل تعبيرات After Effects.
  - استخدام مصفوفة من عنصر واحد `[inEase], [outEase]` عند تطبيق `setTemporalEaseAtKey` على الخصائص المكانية (`ADBE Position`).
  - إعادة جلب المراجع بالاسم بعد كل استدعاء لـ`addProperty()` داخل مجموعات الأشكال أو المؤثرات.

- [ ] **6. الفحص الصارم لمسارات الفيكتور (`Strict Shape.vertices Setter Validation`)**:
  - التأكد من أن دالة `addBezierSubpathsGroup` تقرأ `spData.vertices || spData.v` و`spData.inTangents || spData.i` و`spData.outTangents || spData.o`.
  - تشغيل محاكي Node.js الصارم (`Object.defineProperty(Shape.prototype, 'vertices', ...)`) للتأكد من عدم تمرير `undefined` لأي خاصية `vertices` في جميع طبقات الشعار والأشكال.

- [ ] **7. الإخراج والإيقاع والعربية (V12)**:
  - تحديد الرسالة والنبرة والعنصر الرئيسي، وتخطيط وصلات المشاهد حسب [مرجع الإخراج](direction-rhythm-and-render-review.md).
  - تكييف التوقيت مع القراءة، وعدم فرض الارتداد أو الحركة المستمرة على العمل الهادئ.
  - عند توفر AE، اختبار أصعب لقطة وفحص الرندر بصريًا وسماع الصوت عند وجوده؛ وإلا التصريح بعدم الاختبار.
  - مقارنة قفل الشعار بالأصل وفحص اتصال العربية والتشكيل والشفافية عند انطباقها.
  - عدم استخدام نجاح فاحص HTML/DOM أو محاكي JSX كدليل على صحة AEP أو جودة الرندر.

- [ ] **8. الهوية ومعنى المشهد وتسليم الصور (V14)**:
  - ربط الفعل بمعنى البيت المعتمد دون تغيير نصه أو تفسيره حرفيًا بثمار زراعية في مشهد تنمية القدرات.
  - توحيد ألوان جميع العناصر وفق هوية العميل، وقصر ملف التدريبات العقلية على أعمال المؤسسة.
  - تقديم تصحيح السماء أو أي تعديل موضعي أخير على خطة تنويع الخلفيات، وإزالة سواد واجهة لقطة الشاشة فقط.
  - التحقق من الزي العربي والنشاط التعليمي وارتكاز الأقدام والأيدي عند انطباقها.
  - مطابقة الشعار بمصدره ومراجعة النص القرآني والترقيم؛ عدم اعتماد الكتابة المولدة مرجعًا.
  - اختيار آخر نسخة لكل مشهد فقط، وتطابق ترقيم ZIP الصور مع PDF الملاحظات العربية بعد مراجعة الرندر.

---

<a id="file-3"></a>

## references/brand-led-scene-review.md

# الهوية ومعنى المشهد والمراجعة العربية - V14

## المحتويات

1. ثبّت المعنى والمرجع قبل التعديل
2. طبّق هوية التدريبات العقلية في نطاقها
3. نوّع الخلفيات دون كسر المشهد
4. أخرج مشاهد بشرية واضحة ومرتكزة
5. اضبط العربية والمصحف والشعار
6. حوّل الملاحظات إلى تعديلات محددة
7. جهّز الرسم للتحريك دون ادعاء طبقات غير موجودة
8. سلّم الصور النهائية ومرجع الملاحظات

## 1. ثبّت المعنى والمرجع قبل التعديل

- اقرأ البيت الشعري أو العبارة الظاهرة في اللقطة، واربط بها الفعل والعناصر والتكوين. لا تطلب من المستخدم إعادة شرح معنى يمكن استخلاصه من الصورة وملاحظته.
- اقرأ النص كما هو؛ لا تخمّن كلمة غير واضحة أو تستبدلها ببيت مرتجل. كبّر المرجع أو استخرج النص وراجعه؛ اطلب الكلمة الناقصة فقط إذا بقيت مؤثرة في المعنى.
- فرّق بين ملاحظة المشرفة المنقولة باللهجة الليبية وبين النص المراد كتابته داخل التصميم. حوّل اللهجة إلى تعليمات عربية واضحة في تقرير التسليم، ولا تنسخ الترددات أو العبارات الحوارية.
- افحص الصورة محليًا عند توفرها. إذا أرفق المستخدم ملاحظة صوتية، استخدم الاستماع أو التفريغ المتاح فعلًا؛ عند تعذره اطلب نص الملاحظة ولا تدّع سماعها. واصل فقط ما لا يعتمد على المعلومة المفقودة.
- حدّد دور كل صورة في طلب التوليد: هدف التحرير، مرجع الأسلوب، مصدر الشعار، أو مرجع الألوان. امنع انتقال عناصر غير مطلوبة من مرجع الأسلوب إلى المشهد الجديد.
- عند الإشارة إلى قناة أو معرض، راجع نماذج مرئية يمكن الوصول إليها. العثور على اسم القناة أو رابطها لا يثبت الاطلاع على أسلوب الفيديوهات. استمر بالمرجع الذي قدّمه المستخدم إذا تعذرت المعاينة، ولا تختلق مشاهدات أو مصادر إلهام.
- استلهم البساطة والتكوين والإيقاع من المرجع، مع إبقاء هوية العميل؛ لا تنقل لوحة ألوان مرجع خارجي لمجرد اختيار وصفته الحركية.

## 2. طبّق هوية التدريبات العقلية في نطاقها

اعتبر الآتي ملف مشروع خاصًا بمؤسسة التدريبات العقلية وإنعاش العقل، مستخلصًا من مراجعة مشاهدها. قدّم عليه أي دليل هوية أحدث أو تصحيح صريح من المستخدم. لا تعمّمه على جميع أعمال مهارة سلمان.

| العنصر | التنفيذ |
| --- | --- |
| اللون الرئيسي | أخضر الهوية `#B3C727`؛ حافظ على درجته ولا تدفعه إلى أصفر نيون. |
| المساحات الفاتحة | أبيض `#FFFFFF` ودرجات خضراء باهتة مشتقة من اللون الرئيسي. |
| الظلال والخلفية الداكنة | استعمل درجات زيتونية مشتقة؛ `#30370F` خيار إنتاجي داعم، وليس ادعاءً بأنه كود رسمي ثانٍ. |
| الأسود والفحمي | احتفظ بهما للنص والشعار والشعر والتفاصيل المناسبة. إزالة سواد لقطة الشاشة لا تعني حذف الأسود من الشعار. |
| البشرة | حافظ على لون بشري طبيعي؛ لا تلوّن الوجوه بالأخضر بحجة الهوية. |
| النقش | نجوم ثمانية خفيفة مستلهمة من الهوية؛ لا تضف فوانيس أو مساجد أو زخارف جانبية كثيفة تلقائيًا. |
| الأشخاص | اعتمد الزي العربي في المشاهد المطلوب تعريبها: ثوب وطاقية أو غترة مناسبة؛ لا تجعلهم بقمصان وبناطيل غربية دون طلب. |
| الأصول | استخدم الشعار الأصلي بنسبة صحيحة ومواقع عناصره؛ لا تعتمد شعارًا تخيليًا مرسومًا داخل صورة مولدة كأصل رسمي. |

راجع الألوان في كل عنصر، لا الجدار فقط: فرش السرير والوسادة، الملابس، الكرسي، الجبال والصخور، الكتاب وتجليده وفاصله، النباتات، المصباح وواجهة شاشة الدرس. استبدل التركواز والأزرق والبني والزخارف البرتقالية أو الذهبية غير المطلوبة؛ لا تُبقها لأنها تبدو طبيعية في مرجع أجنبي.

استخدم الأبيض لإراحة الكادر والتباين؛ لا تصبغ المشهد كله بالأخضر. افحص لون الهوية في مناطق غير متأثرة بالضوء والظل بدل توقع تطابق كل بكسل في رسم مظلل مع الكود الأساسي.

## 3. نوّع الخلفيات دون كسر المشهد

- نوّع بين خلفية بيضاء بنقش خفيف ولقطة زيتونية داكنة عندما يخدم ذلك الفكرة وطلب المستخدم. لا تنفّذ تناوبًا آليًا يلوّن السماء بالداكن لمجرد أن اللقطة السابقة كانت بيضاء.
- في مشاهد السماء الفاتحة، استخدم أبيض أو أخضر شديد البهتان وسحبًا بيضاء وظلالًا محايدة لطيفة. قلّل الأزرق الواضح عندما تقتضي هوية المشروع ذلك.
- قدّم التصحيح الموضعي الأخير: إذا طلب المستخدم تفتيح سماء لقطة، عدّل السماء والنقش المرتبط بها فقط، واحتفظ بالشخصيات والكتب والجبال والنص وبقية التكوين.
- افصل سواد واجهة الهاتف وأشرطة لقطة الشاشة عن الفن المقصود؛ أزلها مع الإشعارات وأيقونات التطبيق والمصغرات. أبقِ أي عنصر أسود مقصود داخل المشهد.
- احفظ نسبة عرض المشهد دون تمديد الأشخاص أو قص النص والعلم والقمة. تحقّق من الأبعاد المطلوبة بالبكسل؛ لا تكتفِ بكتابة «16:9» في وصف صورة تقارب النسبة فقط.
- عند طلب صور كاملة، سلّم خلفية معتمة نظيفة. عند بناء AE متعدد اللقطات، ضع الخلفية المستمرة في الكومبوزيشن الرئيسي واستخدم شفافية فعلية للعناصر عند الحاجة، وفق مرجع V13.

## 4. أخرج مشاهد بشرية واضحة ومرتكزة

- عبّر عن ثمار التدريب بإنسان يحفظ أو يراجع أو يكتب أو يستمع بثقة وتركيز. لا تستبدل نمو العقل بفاكهة وخضار وقطف ثمار عندما يشير البيت إلى تنمية القدرات.
- اجعل وضعيات التعلم مقروءة: نظر إلى الصفحة، كتاب مفتوح بحجم مناسب، سماعات مستعملة، معلّم يستمع، يد كتابة مقنعة. لا تكتفِ بوضع أشخاص واقفين بلا فعل على قمم بعيدة.
- اربط الصعود بالمؤسسة حين تطلب الملاحظة ذلك: علم واضح على القمة المقصودة أو في يد الشخص. وجّه نظره ومسار حركته إلى الهدف، ولا تضع علمًا صغيرًا غير مقروء بلا علاقة بالفعل.
- ثبّت القدم على الصخور واليد على موضع الإمساك مع ظل تماس. لا تجعل المتسلق يركب شعاعًا أو جسيمات ضوئية، ولا تستخدم الوهج بديلًا عن الصخرة التي تحمله.
- اختر كتلة رئيسية واضحة، وقرّب الأشخاص الثانويين بما يكفي لقراءة نشاطهم، مع منظور متماسك. لا تكرر وجوهًا أو أيدي أو أعضاء لإيهام فصل العمق.
- أنهِ الصور المقطوعة بقاعدة أو تدرج أو Brush Matte يناسب اللقطة وظل خفيف عند الحاجة؛ لا تفرض الفرشاة على منظر كامل مكتمل الأرضية. احمِ أطراف المصحف والعلم والرأس من القص.
- عالج الفراغ غير المقصود بتكبير متزن للعنصر أو النص، مع هوامش قراءة. أبقِ نقوش الهوية ثانوية بعيدة عن الوجه والكلمات.

## 5. اضبط العربية والمصحف والشعار

- احتفظ بنص الأبيات المعتمد دون تبديل كلمات أو إضافة تشكيل تخميني. افصل النص عن الرسم في طبقة عربية قابلة للتعديل عند بناء AE أو الحاجة إلى ضبط طباعي دقيق.
- اكتب عناوين الكتب المطلوبة بوضوح: «مساق المتون» على الكتاب التعليمي، و«القرآن الكريم» على المصحف أو عنوان صفحته بحسب التكوين. لوّن التجليد والفاصل أيضًا بالهوية.
- لا تعامل الكتاب المفتوح على أنه مصحف إذا كانت صفحاته فارغة أو تحمل شبه حروف. استخدم صفحة موثوقة من المصحف أو نصًا قرآنيًا متحققًا منه، مع ضبط اتجاه القراءة وترتيب الآيات.
- فضّل تركيب النص القرآني والشعار من أصل صحيح فوق الرسم بدل تكليف مولّد الصور بإعادة نسخهما نهائيًا. لا تتخذ الصورة المولدة مصدرًا لإثبات النص أو هيئة الشعار.
- راجع نص الآيات حرفيًا والتشكيل وترقيم الآيات وتقسيمها؛ لا تضف رقم آية لكل سطر، فالآية قد تمتد إلى أكثر من سطر. صحّح أي خطأ قبل التسليم؛ حذف رقم خاطئ لا يثبت وحده صحة النص الباقي.
- لا تنشئ نموذج صفحة مقسومًا اعتباطيًا وتصفه بأنه تصوير مطابق لصفحة مصحف رسمية. ميّز الرسم التعليمي عن الاستنساخ الدقيق عندما تهم المطابقة.
- في PDF العربي، استخدم خطًا يدعم اتصال العربية واتجاه RTL، وافحص الرندر. استخراج النص أو نجاح الحفظ لا يثبت سلامة القراءة بصريًا.

## 6. حوّل الملاحظات إلى تعديلات محددة

استخدم أمثلة العمل الآتية كقرارات إخراجية، لا كقالب لتكرار كل العناصر في كل لقطة:

| اللقطة | الملاحظة | القرار |
| --- | --- | --- |
| شاب على السرير | الفرش والملابس خارج الهوية | غطاء وملابس بأخضر الهوية، أبيض للملاءة والوسادة، ظلال تماس. |
| كتاب عند نافذة ممطرة | سماء شديدة اللون وزي غربي وتجليد بني | سماء فاتحة، ثوب عربي، تجليد أخضر أو أسود معتمد. |
| عقل ومسار درجات | مشهد غير موحّد وقمة بلا ارتباط بالمؤسسة | درجات خضراء وبيضاء وعلم الشعار عند القمة الأخيرة. |
| العقول أخصبت | فاكهة تعطي معنى زراعيًا | معلّم ومتعلّم يحفظ وآخر يكتب؛ خلفية داكنة ممكنة لخدمة التنويع. |
| اعتلاء القمم | جبل بلون أجنبي وصعود على إضاءة | صخور بأخضر الهوية وارتكاز واضح وعلم عند وجهة الصعود. |
| متعلّمون على قمم | وقوف بلا دراسة وزي غير عربي | ثياب عربية وكتب وسماعات، مع سماء فاتحة إذا طلبها المستخدم. |
| مساق وكتاب مفتوح | أغلفة بلا عناوين وصفحات فارغة | مساق المتون واضح ومصحف ذو نص موثوق وتجليد هوياتي. |
| درس عن بُعد | كرسي وواجهة شاشة وأثاث تركوازي | أخضر وأبيض لكل العناصر، شعار أصلي ومعلّم داخل واجهة درس واضحة. |

## 7. جهّز الرسم للتحريك دون ادعاء طبقات غير موجودة

- عند تحرير صورة نقطية، استخدم أداة الصور المناسبة وافحص الهدف أولًا. صِف العناصر الثابتة والتعديل المطلوب والألوان المسموحة والممنوعة ودور كل مرجع. في التصحيح الموضعي، عدّل الخاصية المطلوبة دون إعادة إخراج جميع التفاصيل.
- عند طلب مشروع مفتوح، افصل النص والشعار والخلفية والرسوم القابلة للفصل إلى طبقات فعلية. إن بقي الرسم PNG مدمجًا، صرّح بأنه طبقة صورة قابلة للتحريك، وليس شخصيات وأعضاء متجهية مستقلة.
- لا تعِد كتابة نص قرآني أو شعار عبر تشويه الحركة؛ أبقِ محتواهما سليمًا. طبّق اللمعات المحدودة والأقنعة من مرجع V13 عند الحاجة فقط.
- حافظ على نبرة الأنشودة الهادئة ووقت قراءة البيت، ونوّع التكوين والفعل ووصلات اللقطات بدل تكرار مؤثر واحد. احتفظ بقواعد Style D بشأن عدم إضافة SFX دون طلب.
- استبق القص عند التحريك: وفّر امتدادًا مناسبًا للخلفية وهوامش كافية حول العلم والكتاب والشخص، ثم افحص الكادر عند أقصى حركة كاميرا.

## 8. سلّم الصور النهائية ومرجع الملاحظات

عند طلب ZIP صور وPDF ملاحظات:

1. اربط كل رقم مشهد بآخر نسخة اختارها المستخدم. قدّم النسخة ذات السماء الفاتحة أو التصحيح الأخير على النسخة السابقة حتى لو كانت الأقدم أجمل في رأيك.
2. اكتب بيانات المراجعة: رقم المشهد، العنوان، اسم الصورة النهائية، الملاحظة السابقة، ما نُفّذ. لا تصف الملاحظة على نسخة قديمة وكأنها عيب باقٍ في النهائية.
3. ضع الصور النهائية فقط داخل ZIP إذا طلب ذلك؛ استبعد الأصل ولقطات الشاشة والتجارب والنسخ الملغاة والصوتيات والسكربتات. ضع PDF بجوار ZIP كملف مستقل.
4. أنشئ صفحة عربية لكل مشهد، تتضمن الصورة النهائية بحجم واضح وبندين منفصلين: «الملاحظة على المشهد السابق» و«ما تم في المشهد النهائي». طابق الأرقام وأسماء الصور مع الحزمة.
5. افحص فتح PNG بالكامل، وعدد الصور وعدم تكرار المشهد. افحص ZIP CRC وتطابق الصور المضغوطة مع النسخ المختارة، وارندر صفحات PDF وافحص العربية والهوامش والصور بصريًا.
6. احفظ المخرجات بطريقة الحفظ الدائمة المتاحة، وقدّم رابطَي التحميل. لا تحوّل طلب حزمة صور إلى إنشاء JSX؛ تظل قواعد حزمة مشروع AE منفصلة.

قبل التسليم، افحص المعنى، والهوية في جميع العناصر، واللباس، والسماء، والارتكاز، والشعار، والنص، والنسخة المختارة. سجّل حدود التحقق الفعلي دون ادعاء رندر After Effects لمجرد تجهيز صور أو تقرير.

---

<a id="file-4"></a>

## references/direction-rhythm-and-render-review.md

# الإخراج والإيقاع ومراجعة الرندر — V12

## المحتويات

1. المصدر وحدود الاستفادة
2. الفكرة والهوية
3. تخطيط اللقطات والربط
4. الإيقاع ومنحنيات الحركة في AE
5. العربية والأسلوب الهادئ
6. اختبار أصعب لقطة
7. مراجعة الرندر والتسليم

## 1. المصدر وحدود الاستفادة

استفد من منهج [motionmaxxing](https://github.com/Tejashmakwana/motionmaxxing)، خصوصًا [SKILL.md](https://github.com/Tejashmakwana/motionmaxxing/blob/main/SKILL.md)، و[دليل الحركة](https://github.com/Tejashmakwana/motionmaxxing/blob/main/references/motion.md)، و[الحدود المعلنة](https://github.com/Tejashmakwana/motionmaxxing/blob/main/docs/KNOWN-LIMITS.md)، كما قُرئت في 2026-10-19. هذه صياغة مستقلة لمبادئ منتقاة وتكييفها لـAfter Effects؛ لم يُضمّن كود المستودع أو أصوله أو محركه.

ميّز بين إرشاد إخراجي وقياس مثبت: إحصاءات المصدر تخص عينات قصيرة يغلب عليها الإعلان التقني، وبعض قواعده مستخرجة بتحليل نماذج، وتجارب التفضيل محدودة. لا تقدّمها كقوانين عامة للموشن أو كاختبارات مستقلة نفذناها.

يعمل محرك المصدر عبر HTML وGSAP وThree.js؛ لا يُنتج JSX أو AEP مباشرة. ترجم الفكرة إلى أدوات AE، ولا تثبّت محرك المصدر تلقائيًا. اعتبر أدواته الخارجية اختيارية بعد قراءة متطلباتها واختبارها على الملف المقصود. فاحص DOM لا يراجع طبقات AE، واختبار إطار HTML لا يثبت صحة تعبيرات AE.

طبّق هذا المرجع على قرارات الإخراج المشتركة للأنماط A–F ووصفات L01–L17. عند تعارض القيم الافتراضية، قدّم طلب المستخدم وهندسة الشعار والنبرة ووقت القراءة. حافظ على قواعد سلامة JSX والأصول. لا تلغِ وصفة كتابة أو ارتداد اختارها المستخدم بحجة منعها في المصدر.

## 2. الفكرة والهوية

- قبل التحريك لخّص: الرسالة، الجمهور، النتيجة المطلوبة، والشعور. استخدم الأصول والألوان والخطوط المعتمدة؛ لا تنشئ هوية بديلة إذا زوّد المستخدم بهويته.
- استخرج سببًا بصريًا للحركة: انحناءة في الشعار، فعل تمثله الخدمة، حركة قلم، أو انتقال في معنى النص. لا تختر مؤثرًا لمجرد ملء الثواني.
- عند إعداد فيلم جديد كوّن داخليًا ثلاثة اتجاهات مختلفة فعلًا، ثم اختر الأنسب واذكر السبب باختصار. لا تحوّل ذلك إلى ثلاث موافقات إلزامية أو تعطل التنفيذ المأذون به.
- اختبر الفكرة بإخفاء الشعار: هل تبقى خصائص الجهة أو الرسالة في المشهد؟ هذا سؤال لتقوية التخصيص، وليس شرطًا يفشل إعلانًا بسيطًا يحتاج هوية ختامية فقط.
- اجعل لكل لقطة هدفًا يمكن قوله بجملة: ما الذي يفهمه المشاهد أو يشعر به بعدها؟ احذف التكرار أو اجمعه. لا تختلق أرقامًا أو واجهات أو شهادات لتبدو اللقطة مقنعة.

## 3. تخطيط اللقطات والربط

استخدم جدولًا مختصرًا قبل بناء المشاهد. اجعله خطة داخلية أو جزءًا من الستوريبورد المطلوب، دون إلزام المستخدم بوثائق إضافية.

| البداية–النهاية | ما تضيفه اللقطة | العنصر الرئيسي | النص/الصوت | حركة الدخول والاستقرار | الوصلة إلى التالية | زمن القراءة |
|---|---|---|---|---|---|---|
| مثال 0–2 ث | تقديم عنوان العمل | العنوان | النص الحقيقي | كشف RTL وتباطؤ | امتداد الخط إلى مسار | يراجع بالحجم الفعلي |

- اعمل بعنصر رئيسي واضح في كل لحظة. خفّض تباين وحركة العناصر الثانوية أثناء قراءة النص، واترك فراغًا مقصودًا حول الخط العربي.
- خطط لآخر إطار من اللقطة وأول إطار من التالية معًا: موضع العنصر، الحجم، اتجاه السرعة، اللون، وزاوية الكاميرا. استخدم Cut on Motion عندما يخدم الربط، مع استمرار الاتجاه بعد القطع.
- استخدم Match Cut أو مسارًا ممتدًا أو عنصرًا ينتقل وظيفيًا بين المشهدين. لا تفرض عنصرًا ناقلًا على كل مشروع، ولا تكرر مسحة اللون في كل انتقال.
- اختر منطقًا واحدًا غالبًا للكاميرا والتمويه والضوء والخامة. يمكن أن يكون العمل مسطحًا ونظيفًا إذا كانت هذه هويته؛ لا تضف نسيجًا أو زجاجًا أو 3D لإثبات الجودة.
- مثال عربي: عنوان يظهر في الوسط، ثم يمتد خطه السفلي ويقود الكاميرا إلى مشهد الشرح، ثم تتراجع الكاميرا لتكشف التكوين والشعار. لا تستخدم هذا المثال قالبًا لكل موضوع.

## 4. الإيقاع ومنحنيات الحركة في AE

اعتبر القيم التالية نقاط بدء خاصة بهذه المهارة، لا نقلًا حرفيًا لإحصاءات المصدر ولا وعدًا بإعادة منحنياته الاثني عشر. مدد الجدول بالثواني لتبقى ثابتة عند تغيير FPS؛ حوّلها إلى إطارات بـ`Math.round(seconds * comp.frameRate)`.

| الوظيفة | اتجاه السرعة | نقطة بدء عملية | أداة AE والمراجعة |
|---|---|---|---|
| وصول نص أو عنصر | سفر سريع ثم تباطؤ | 0.3–0.5 ث للإعلان | Position/Scale ثم Temporal Ease أو مفاتيح منحنى مأخوذة عيناتها |
| خروج إلى قطع | تسارع نحو حافة الكادر | 0.2–0.45 ث | Ease In على الزمن، واقطع أثناء الحركة إذا كان الربط مستمرًا |
| كشف بؤري مساعد | Blur يهبط إلى صفر | 0.15–0.3 ث | تمويه خفيف دون محو تفاصيل الحروف |
| تتابع عناصر متجاورة | بدايات متداخلة | فواصل 0.05–0.12 ث | Stagger مربوط بالقراءة وحجم المجموعة |
| ارتداد مقصود | تجاوز صغير ثم رجوع | حدث بارز واحد كبداية | مفاتيح صريحة أو معادلة مخمّدة، دون نبض كل عنصر |
| قراءة هادئة | وصول لطيف ثم سكون | حسب طول النص والصوت | يمكن إطالة الظهور إلى 0.6–1 ث مع وقت قراءة مستقل |

- لا تستخدم Influence ثابتًا مثل 86% لكل حركة. اختر المنحنى بحسب الوزن والدور والمسافة؛ قارِن السرعة عند بداية الحركة ووسطها ونهايتها. أسماء softLand وsnapSettle في المصدر ليست دوال مدمجة في AE.
- عند تقريب منحنى من دالة زمنية احسب قيمًا عند أزمنة معلومة، وطبّقها على مفاتيح أو تعبير ES3 متوافق، ثم راجع الحركة. لا تنسخ معاملات GSAP إلى `KeyframeEase` باعتبارها متكافئة؛ السرعة في AE تعتمد على فرق القيمة ووحدتها والمدة.
- حافظ على قاعدة الأبعاد: Temporal Ease للـPosition المكاني بمصفوفة من عنصر واحد، وللـScale بعدد الأبعاد. راجع المماسات المكانية لمنع الانجراف غير المقصود.
- اجعل الحركة أداة الدخول الأساسية حين يلائمها المشهد، واستعمل Opacity مساعدًا. أبقِ التلاشي أو الانتقال البؤري للأعمال الشاعرية عندما يخدمان النبرة.
- قلّل الارتداد العام؛ احتفظ به في L10 أو L11 أو أي طلب مرح صريح. لا تستبدل كل ظهور من الصفر بتصغير من حجم هائل؛ اختر وفق هندسة العنصر واللقطة.
- للكاميرا حرّك Rig مشتركًا بدل تحريك كل طبقة كأنها منفصلة. عند تكبير متعدد المرات يمكن استخدام استيفاء لوغاريتمي موجب `exp(log(a)+(log(b)-log(a))*u)`، مع اختبار التأطير والقص والدقة.

## 5. العربية والأسلوب الهادئ

- أعطِ النص زمن قراءة فعليًا بالحجم المتوقع على الجوال، ثم راجع مع الصوت. لا تستورد إيقاع حرف لاتيني لكل إطار إلى المخطوطة أو الآية أو البيت الشعري.
- حرّك الكلمات أو الأسطر مع الحفاظ على التشكيل والاتصال. للكتابة بالقلم اتبع L02 ومساراتها الوسطية؛ للكتابة المتصلة المتدرجة اتبع L09 وحدود الوصل. لا تمنعهما بسبب حظر عام في مرجع خارجي.
- للأعمال الإسلامية الخفيفة استخدم لونين أو ثلاثة، عنوانًا أو كتابة تستثمر الوسط، وخطًا واضحًا؛ لا تفرض فوانيس أو زخارف جانبية أو مسجدًا في الخلفية.
- اسمح بالسكون المقصود بعد معنى مهم أو عند عرض مخطوطة. لا تعتبر ثلاثة إطارات ساكنة فشلًا، ولا تضف wiggle أو Grain لمجرد إحداث فرق بين الإطارات.
- اجعل الختام بالقدر الذي يحتاجه الشعار والنص. للإعلان السريع يمكن البدء بنحو 0.8–1.5 ث؛ احتفظ بمدد L16/L17 أو تمديد القراءة عند الحاجة. لا تفرض سقف 1.4 ث على جميع الأنماط.
- احترم Style D: صوت الأنشودة أو القصيدة هو الأساس، ولا تضف SFX أو موسيقى اصطناعية إلا بطلب صريح. لا تربط الاستفادة من مبادئ الإخراج باشتراك ElevenLabs أو خدمة توليد صوت.

## 6. اختبار أصعب لقطة

1. ابنِ أصعب انتقال أو لقطة بطل أولًا في Precomp محدد؛ جرّب النص والخط والأقنعة ومسار الكاميرا بأصول حقيقية أو بدائل معنونة بوضوح.
2. عند توفر AE شغّل JSX، ثم ارندر تلك الفترة فقط بمعاينة منخفضة الدقة. افحص الإطار قبل الانتقال وذروة السرعة وبعد الاستقرار، وشاهدها بسرعة التشغيل الفعلية.
3. أصلح التأطير والاتصال والقراءة قبل بناء بقية المشروع، ثم عمّم الحركة التي نجحت. لا تجعل اجتياز محاكي JavaScript بديلًا عن هذا الاختبار.
4. عند عدم توفر AE أكمل الأجزاء الممكنة والفحص الساكن، وصرّح أن التشغيل والرندر غير منفذين. لا تختلق معاينة أو أرقام جودة أو تقرير نجاح.

## 7. مراجعة الرندر والتسليم

استخدم حالات: نجح / يحتاج إصلاحًا / لم يُختبر / لا ينطبق. افصل ما قرأه برنامج عما شاهدته أو سمعته؛ نجاح القياس لا يساوي حكمًا على جمال الفيلم.

| المراجعة | الأسلوب | ما يسجل |
|---|---|---|
| الملف والمدة | فك ترميز وffprobe عند توفر رندر | مدة فعلية، دقة، FPS، وجود مسار الصوت إذا طُلب |
| المشاهد الفارغة | لقطات متتابعة وبحث اختياري عن السواد | موضع الفراغ وسببه؛ الخلفية السوداء المقصودة ليست خطأ تلقائيًا |
| القراءة والعربية | مشاهدة بالحجم الفعلي | اتصال، تشكيل، تباين، وقت قراءة، عدم قصّ الذيول |
| التركيز البصري | مشاهدة اللقطات مع تغطية النص أحيانًا | العنصر الرئيسي وما إذا كانت الحركة الثانوية تنافسه |
| الوصلات | إطارات قبل/عند/بعد القطع وسرعة فعلية | اتجاه مستمر أو قطع متعمد؛ لا قفزات Anchor غير مقصودة |
| السكون والختام | فرق إطارات إن توفر ثم حكم بصري | وقت السكون ووظيفته؛ لا عتبة حركة إلزامية لكل عمل |
| الهوية وAlpha | مقارنة الأصل وعرض على خلفيات مختلفة | النسبة، الألوان، التفاصيل، الحواف، عدم تسرب التأثير |
| الصوت | استماع متزامن وقياس عند توفره | سلامة البداية والنهاية، توقيت الضربة، وضوح الصوت، عدم القص |

- أنشئ Contact Sheet مؤقتة من الرندر عند توفره، وافحصها مع لقطات انتقال كثيفة؛ اختيار لقطات جميلة فقط قد يخفي العيوب. شاهد الفيديو بالسرعة الحقيقية أيضًا.
- تعامل مع فرق الإطارات كمؤشر: الضجيج أو حركة مؤشر صغير قد يخفيان سكونًا فعليًا، والتصميم الهادئ قد يغير قليلًا رغم نجاحه. أدوات المصدر `look.py` تحتاج اختبارًا وتهيئة على فيديو AE قبل الاعتماد على أرقامها؛ لم تُضمّن أو تُختبر ضمن هذا التحديث.
- لا تنسب اجتياز G0–G5 إلى مشروع AE من فحص JSX؛ فاحص `lint.mjs` يقرأ DOM ولا يستطيع فحص AEP. حوّل أفكاره المناسبة إلى مراجعة بصرية للأركان والعناوين والتكرار، واسمح بالعناصر الوظيفية التي طلبها المستخدم.
- أصلح بهذا الترتيب: خطأ تقني أو معلومة غير صحيحة؛ فكرة اللقطة؛ الربط؛ القراءة والتكوين؛ التوقيت؛ التشطيب؛ مزج الصوت.
- سلّم JSX والأصول والمشروع المفتوح عند إمكان إنتاجه، مع معاينة فقط إذا طُلبت أو كانت مفيدة. لخّص التحقق والحدود في رسالة التسليم؛ لا تضف NOTE.md أو ملفات تقارير إلزامية لكل عمل بسيط.

---

<a id="file-5"></a>

## references/extendscript-defensive-rules.md

# قواعد ExtendScript الدفاعية ومحرك V8 وتوافق AE 2026 (Defensive Engineering Rules V06)

## 1. جدول Match Names القياسي (Language-Independent Match Names)

| المجموعة / الخاصية | Match Name | ملاحظات مهمة |
| :--- | :--- | :--- |
| مجموعة التحويل | `ADBE Transform Group` | موجودة في جميع الطبقات ومجموعات الأشكال |
| نقطة الارتكاز | `ADBE Anchor Point` | `TwoD_SPATIAL` أو `ThreeD_SPATIAL` (1D Ease) |
| الموقع | `ADBE Position` | `TwoD_SPATIAL` أو `ThreeD_SPATIAL` (1D Ease) |
| الحجم | `ADBE Scale` | `TwoD` أو `ThreeD` (2D/3D Ease) |
| الدوران (2D / Z) | `ADBE Rotate Z` / `ADBE Rotation` | استخدم `safeProp(tr, "ADBE Rotate Z") || safeProp(tr, "ADBE Rotation")` |
| الدوران ثلاثي الأبعاد | `ADBE Orientation`, `ADBE Rotate X`, `ADBE Rotate Y` | للبطاقات والكاميرات ثلاثية الأبعاد |
| الشفافية | `ADBE Opacity` | `OneD` (`0` إلى `100`) |
| جذر أشكال الفيكتور | `ADBE Root Vectors Group` | Indexed Group — يُبطل المراجع عند `addProperty` |
| مجموعة شكل | `ADBE Vector Group` | تحتوي بداخلها على `ADBE Vectors Group` و`ADBE Vector Transform Group` |
| مسار حر (Bezier) | `ADBE Vector Shape - Group` -> `ADBE Vector Shape` | يقبل كائن `new Shape()` |
| مستطيل | `ADBE Vector Shape - Rect` | `ADBE Vector Rect Size`, `ADBE Vector Rect Position`, `ADBE Vector Rect Roundness` |
| دائرة / قطع ناقص | `ADBE Vector Shape - Ellipse` | `ADBE Vector Ellipse Size`, `ADBE Vector Ellipse Position` |
| تعبئة لونية | `ADBE Vector Graphic - Fill` | `ADBE Vector Fill Color`, `ADBE Vector Fill Opacity` |
| حدود (Stroke) | `ADBE Vector Graphic - Stroke` | `ADBE Vector Stroke Color`, `ADBE Vector Stroke Width`, `ADBE Vector Stroke Line Cap` |
| قص المسار (Trim Paths) | `ADBE Vector Filter - Trim` | `ADBE Vector Trim Start`, `ADBE Vector Trim End`, `ADBE Vector Trim Offset` |
| خصائص النص | `ADBE Text Properties` -> `ADBE Text Document` | استخدم `resolveAndApplyArabicFont` لتعيين الخط |
| إعدادات الكاميرا | `ADBE Camera Options Group` -> `ADBE Camera Zoom` | اضبط `autoOrient = AutoOrientType.NO_AUTO_ORIENT` |
| تمويه غاوسي سريع | `ADBE Gaussian Blur 2` | `ADBE Gaussian Blur 2-0001` (Blurriness), `ADBE Gaussian Blur 2-0003` (Repeat Edge Pixels = 1) |
| توهج سينمائي | `ADBE Glo2` | استخدم عمق `16-Bit` مع `Threshold = 82%`, `Intensity = 0.12-0.15` |
| مستويات الصوت | `ADBE Audio Group` -> `ADBE Audio Levels` | مصفوفة `[left_dB, right_dB]` مثل `[0, 0]` |

## 2. إصلاح إزاحة الكاميرا في After Effects 2026 (`One-Node Camera [-960, -540] Bug Fix`)

في إصدارات After Effects الحديثة (2025/2026)، تنشئ الدالة `comp.layers.addCamera(name, [960, 540])` كاميرا من نوع `One-Node` في النقطة العالمية `[0, 0, -zoom]`؛ وعند ربطها بطبقة `CAM_CTRL` (`Position = [960, 540, 0]`) يتحول موقع الكاميرا المحلي إلى `[-960, -540, -zoom]` فينزاح المشهد إلى زاوية الشاشة!
- **الحل الإلزامي**:
  1. اضبط `Anchor Point` للـ`Null` على `[0, 0, 0]` وموقعه على `[comp.width * 0.5, comp.height * 0.5, 0]` قبل الربط.
  2. نفّذ `cam.parent = camNull;`.
  3. **بعد الربط مباشرةً**، اضبط صراحةً موقع الكاميرا المحلي `ADBE Position` على **`[0, 0, -zoomDist]`** ونقطة ارتكازها على `[0, 0, 0]` واتجاهها `ADBE Orientation` على `[0, 0, 0]`.

## 3. دورة المرحلتين لبناء طبقات الـShape وتصفير نقطة الارتكاز

1. **المرحلة الأولى (الهيكلة والتسمية)**:
   أضف المجموعة عبر `rootVec.addProperty("ADBE Vector Group")`، سمِّها فورًا، ثم أضف جميع العناصر الداخلية (`Shape`, `Fill`, `Stroke`, `Trim`) وسمِّ كل عنصر فور إضافته دون الاحتفاظ بمراجع قديمة.
2. **المرحلة الثانية (إعادة الجلب وتعيين القيم)**:
   أعد جلب المجموعة بالاسم من `layer.property("ADBE Root Vectors Group").property(groupName)`، ثم اجلب كل خاصية فرعية بالاسم وعيّن قيمتها.
3. **المرحلة الثالثة (تصفير الـAnchor Point للطبقة)**:
   عيّن دائمًا `safeSetVal(safeProp(layer.property("ADBE Transform Group"), "ADBE Anchor Point"), [0, 0, 0])` بعد اكتمال بناء أشكال الطبقة لإلغاء تأثير خيار *"Center Anchor Point in New Shape Layers"*.

## 4. رصف الكلمات العربية ديناميكيًا (`Dynamic RTL Word Layout via sourceRectAtTime`)

لمنع تداخل الكلمات العربية أو التصاقها عند تحريك النصوص كلمةً بكلمة:
1. أنشئ طبقة نصية لكل كلمة وطبّق عليها الخط العربي أولًا عبر `resolveAndApplyArabicFont`.
2. قس أبعاد الكلمة الفعلية عبر `var rect = wordLayer.sourceRectAtTime(0, false);`.
3. اضبط نقطة ارتكاز الكلمة في منتصفها: `[rect.left + rect.width * 0.5, rect.top + rect.height * 0.5]`.
4. احسب العرض الإجمالي للسطر مع مسافة فاصلة ثابتة (`wordGap = 22..28px`)، ثم ارصف الكلمات من اليمين إلى اليسار (`curRightX -= wordWidth * 0.5` ثم `curRightX -= (wordWidth * 0.5 + wordGap)`).

---

<a id="file-6"></a>

## references/illustration-depth-and-glass-shine.md

# احتواء الرسوم والعمق واللمعة الزجاجية — V13

## المحتويات

1. التكوين واحتواء الحواف
2. الخلفية والسعف ومسارات التأكيد
3. الكاميرا والعمق والوضوح
4. لمعة محصورة داخل العنصر
5. المقدمة والخاتمة
6. فحص الأصول وحدود التحقق

## 1. التكوين واحتواء الحواف

- قِس حدود المحتوى المرئي في PNG قبل اختيار Scale؛ قد تكون نصف الصورة هوامش بيضاء. احفظ Bounding Box الأصلية في بيانات البناء، ولا تستبدلها بمقاس الملف كله. استبعد ضجيج الضغط والنقاط شبه البيضاء عند القياس، ثم راجع ألا تكون قد استبعدت طرفًا فاتحًا مهمًا.
- احسب `s = min(zoneW / visibleW, zoneH / visibleH)`، واجعل Anchor Point وسط حدود المحتوى. أضف هامشًا 3–6%، واختبر الكادر عند أقصى اقتراب للكاميرا.
- أنهِ الصورة المقطوعة أسفلًا بقناع عضوي ناعم أو Brush Matte ملائم، مع قاعدة أو تدرج سفلي وظل تماس عند الحاجة. لا تترك قطع الجذع خطًا أفقيًا في الهواء؛ لا تقص الرأس أو المصحف لتصحيح الأسفل.
- اجعل ظل التماس أضيق من الرسم، منخفض العتامة وناعمًا، تحت نقطة ارتكازه. ضع ظل احتواء خافتًا خلف الرسم إذا احتاج فصلًا عن الخلفية. لا تستخدم Drop Shadow على مستطيل PNG معتم وتصفه بأنه ظل الشخصية.
- عند تلاشي عنصر خافت، احتفظ بعتامته المستهدفة: اقرأ Opacity قبل إضافة المفاتيح واجعل الدخول من صفر إلى تلك القيمة. لا تجعل دالة Fade العامة ترفع الظل من 4% إلى 100%، وافحص ذروة مفاتيح العتامة برمجيًا.
- أبقِ الأبيض داخل الملابس والكتب. لا تطبق White Key على الرسم الأصلي كله لإزالة الخلفية؛ قد يفرغ الملابس والصفحات. عند الحاجة لألفا حقيقية استخدم أصلًا شفافًا أو قناعًا دقيقًا، وصرّح ببقاء الأصل لوحة مسطحة.
- كبّر العنصر أو النص لمعالجة الفراغ غير المقصود؛ أبقِ هوامش آمنة وتوازنًا بين كتلة النص وكتلة الرسم. لا تكبّر لمجرد ملء كل بكسل. راجع أربع حالات: نص يمين/يسار/فوق/تحت، واللقطة النصية المنفردة بعدد ما طلبه المستخدم فقط.
- راجع تباين الحروف داخل شريط الهوية؛ عند انخفاض تباين الأبيض فوق لون فاتح استعمل الحبر الداكن المعتمد.

## 2. الخلفية والسعف ومسارات التأكيد

- استمد الزخرفة من مرجع الهوية؛ إن كان يحتوي نجومًا ثمانية استخدمها بخفة، ولا تستبدلها بفانوس أو مسجد عام.
- ضع الخلفية المتحركة المستمرة في الكومبوزيشن الرئيسي، واجعل المشاهد المتعاقبة شفافة. لا تضع White Solid داخل كل مشهد فيحجب الخلفية أو يعيد حركتها عند القطع.
- ابدأ بعتامة 3–6% وحركة بطيئة حول الأطراف. لا تجعل النجوم تدور خلف الكلمات كعناصر رئيسية. عاير حسب التباين الفعلي على شاشة العرض.
- استخدم Palm Shadow Overlay على لقطات منتقاة: سعف متجهي أو أصل ظلال مرخص، Blur ناعم، عتامة تقارب 3–6% على الأبيض، تأرجح محدود. أبعد الكتلة الداكنة عن منطقة القراءة والوجه.
- أضف Trim Paths لمسار له وظيفة: قاعدة، خط تأكيد، امتداد من رمز الهوية، أو تسليم بين لقطتين. ارسمه ثم هدّئه أو امسحه؛ لا تجعل إطارًا دوارًا يطارد كل صورة. لا تسمِّ رسم محيط الحروف كتابة بالقلم.

## 3. الكاميرا والعمق والوضوح

- وزّع النص والرسم والزخارف على طبقات 3D منفصلة، ثم استخدم كاميرا فعلية. تغيير Scale لطبقة المشهد كاملة لا يحقق Parallax بين النص والرسم.
- استخدم فصلًا معتدلًا، مثل النص `Z=-70` والرسم `Z=35` والقاعدة `Z=60` والزخرفة `Z=180`. هذا مثال في كاميرا تنظر نحو +Z؛ ليس نظام إحداثيات إلزاميًا.
- عوّض المنظور عند حفظ تكوين 2D: عند Zoom ثابت `q` والكاميرا في `-q`، يكون `f=(q+z)/q`؛ ضع `xWorld=cx+(xScreen-cx)*f` و`yWorld=cy+(yScreen-cy)*f`، واضرب Scale في `f`. يجب أن يبقى `q+z` موجبًا.
- عند ربط الكاميرا بـRig في مركز الكادر، أعد Position المحلي إلى `[0,0,-q]` وOrientation إلى صفر، وعطّل Auto Orient. لا تعتمد على الإزاحة التي خلّفتها عملية Parenting في AE 2026.
- اضبط Anchor/Position بمصفوفة ثلاثية وScale ثلاثية بعد `threeDLayer=true`. Temporal Ease للـPosition المكاني بمصفوفة Ease واحدة، وللـScale بثلاثة عناصر.
- أبقِ Precomp الكلمات والرسم المسطح `collapseTransformation=false` إذا كانا لوحتين داخل كاميرا المشهد؛ لا تفعّل Collapse عشوائيًا. لا تقص PNG إلى أعضاء مكررة لمحاكاة عمق داخلي غير موجود.
- استخدم حركة Rig هادئة، لا اهتزازًا مستمرًا، وMotion Blur على الكومبوزيشن والطبقات مع Shutter Angle نحو 180°. اضبط عمق المجال بحيث تبقى العربية حادة؛ خفّض Aperture أو عطّل DOF إن صار التشكيل ضبابيًا.
- اضبط جميع مفاتيح الطبقة في زمن الكومبوزيشن الحاوي، حتى مع Start Time غير صفري. يظل زمن مفاتيح المصدر داخل الـPrecomp مستقلًا.

## 4. لمعة محصورة داخل العنصر

طبّق اللمعة انتقائيًا وفق طبيعة العنصر؛ كتب وأيقونات أو بعض الشخصيات، مع لمعان واحد للشعار عند الطلب. لا تلمّع كل مشهد أو كل كلمة.

1. أنشئ `MASTER_ALPHA` أو Matte مستقلة للعنصر، مع نسخة Bump بيضاء في Precomp. اخفِ طبقة Bump عن الرندر مع إبقائها متاحة للتأثير.
2. ابنِ شريطًا أبيض رفيعًا مائلًا، مع Feather/Blur. حرّكه عبر العنصر مرة واحدة في نحو 1–1.5 ثانية كنقطة بدء قابلة للتكييف.
3. أضف `ADBE Turbulent Displace` إلى شريط الضوء فقط: Amount محدود وSize ملائم، وحرّك Offset بالتزامن. لا تشوّه وجوه الأشخاص أو المصحف أو المخطوطة الأصلية.
4. احصر الشريط داخل Alpha العنصر بعلاقة صريحة: `target.setTrackMatte(matte, TrackMatteType.ALPHA)` في AE 23+؛ في البديل القديم ضع Matte مباشرة فوق الهدف قبل ضبط Track Matte. اخفِ طبقة Matte نفسها (`enabled=false`) كي لا تظهر كتلة بيضاء في الرندر. لا تحرّك ترتيب البديل القديم بعد الربط.
5. أضف `CC Glass` إلى الشريط، واربط Bump Map بنسخة بيضاء ذات ألفا صحيحة. ابدأ بـSoftness صغير وHeight وDisplacement محدودين؛ لا تغيّر هندسة الأصل.
6. أضف Outer Glow أو Glow المدمج كهالة خفيفة، وامزج اللمعة بـScreen/Add حسب الخلفية. عند استعمال Glow بدل Layer Style Outer Glow قل ذلك إذا كان المستخدم طلب مطابقة درس محدد.
7. اجعل قلب اللمعة مقصوصًا؛ يمكن أن تمتد هالة خافتة حول الحد. راجعها على الأبيض والأسود ولون مشبع لمنع مستطيل أبيض أو تسرب الضوء إلى الخلفية.

عند وجود Brush Mask إضافية على الرسم، اجعلها تشمل اللمعة أيضًا؛ إما اشتق Matte من MASTER المقصوص، أو طبّق قناع الاحتواء نفسه على طبقة اللمعة. استخراج ألفا من PNG الخام قد يعيد إضاءة أجزاء قُصّت من الرسم.

### التعامل مع PNG أبيض وخصائص التأثير

- يمكن استخراج Matte للضوء من المناطق الملونة باستخدام Color Key أبيض، ثم Fill أبيض في Precomp منفصلة. هذا يلمع المناطق الملونة فقط؛ لا يوفر ألفا كاملة للملابس البيضاء. لا تستخدمه كبديل لألفا الرسم الأصلي أو تدّع مطابقة لمعان زجاج كامل على كل مساحته.
- `ADBE Color Key` تأثير قديم مدمج يدعم 16-bit؛ لا تخلطه مع Match Name الخاص بـLinear Color Key. اختبر وجوده، ولا تجعل غيابه يوقف بناء النصوص والمشاهد.
- أضف كل بنية مجموعة Indexed ثم أعد جلب مراجع الخصائص. لا تحتفظ بمرجع Effect بعد إضافة Effect شقيق ثم تكتب فيه.
- استعمل Match Names المثبتة. معاملات `CC Glass` قد تكون مجموعات متداخلة؛ اقرأ `numProperties` و`name` و`matchName` فعليًا. لا تخمّن أن `CC Glass-0002` هو Bump Map. إذا لم تستطع إثبات المعامل، عطّل الانكسار فقط ودوّن السبب؛ أبقِ الشريط المقصوص والتوهج إن كانا صالحين.
- لا تدّع نجاح إعداد Glass إذا أضاف السكربت التأثير ثم فشل ضبطه. افصل عدد اللمعات المنشأة عن نتيجة تشغيل التأثير الفعلية.
- عرّف مرجع Glass قبل `try`؛ إذا وقع خطأ بعد إضافة التأثير عطّله في `catch` أيضًا، كي لا يبقى التأثير الافتراضي نشطًا مع رسالة تدّعي غيابه.

## 5. المقدمة والخاتمة

- افصل `LOGO_MASTER` النظيف الشفاف عن طبقات الظهور واللمعة. حافظ على النسب ومواقع النجوم والفتحات؛ عند إعادة استخدام Geometry تأكد أن النصوص والأجزاء لها Scale موحد بعد Parenting.
- عند وجود شعار مرسوم كأصل استخدمه كما هو. إن كانت الملفات السابقة تحتوي الرمز فقط واسم الجهة Text، صف ذلك بوضوح ولا تدّع وجود Wordmark متجهي مطابق لمصدر غير متاح.
- اجعل عنوان الأنشودة بعد المقدمة بارزًا وواضحًا. نفّذ علامات الترقيم كما طلبها المستخدم؛ لا تضع نقطتين بعد «أنشودة» إذا رفضهما.
- ابنِ Outro حقيقيًا: سلّم من آخر رسم إلى الشعار، خفّف الزخرفة واترك Hold واضحًا، ولا تُخفِ الشعار في آخر إطار بقاعدة Fade شاملة للمشاهد.
- حافظ على المدة الصوتية المتاحة إذا كان الحيز يكفي؛ إذا مددتها، اذكر مدة الإضافة ولا تزعم مزامنتها دون التسجيل.

## 6. فحص الأصول وحدود التحقق

- شغّل `scripts/validate_png_assets.py` على كل صور الحزمة. افحص CRC لكل Chunk، وجود IEND، فك zlib وتيار الصفوف، وFull Decode عند توفر Pillow. قراءة IHDR أو ZIP CRC وحدهما لا تكشف PNG المقطوع.
- أضف فحصًا أوليًا داخل JSX للتوقيع ونهاية IEND قبل أي Import. هذا فحص سريع، وليس بديلًا عن فك الترميز الكامل خارج AE. لا تضع ملفات AE جزئية إذا كانت الأصول ناقصة.
- اختبر ES3، مراجع Indexed، الأبعاد، Bounds الزمنية، غياب الصوت، الخط البديل، إصدار Track Matte القديم، وتعذر Glass. افحص أن الخلفية تبقى مرئية وأن آخر إطار يحمل الشعار.
- راجع بصريًا عند توفر AE: الحافة السفلية، قناع اللمعة، الظل فوق الأرض، النص في أقصى حركة الكاميرا، أول وآخر إطار للوصلة، وخاتمة الشعار. اصغِ للتسجيل الحقيقي قبل ادعاء التزامن النهائي.
- صرّح بمستوى التحقق: فحص ساكن / محاكاة AE / تشغيل ورندر AE. المعاينة التخطيطية خارج AE لا تثبت المظهر النهائي، ولا تحوّل JSX إلى AEP محفوظ لمجرد تغيير الامتداد.

المراجع التقنية: [Adobe — Stylize effects](https://helpx.adobe.com/after-effects/using/stylize-effects.html)، [Effect Match Names](https://ae-scripting.docsforadobe.dev/matchnames/effects/firstparty/)، [AVLayer Track Matte API](https://ae-scripting.docsforadobe.dev/layer/avlayer/#avlayersettrackmatte). اعتبر أسماء العرض والخيارات الخاصة بالإصدار قابلة للتغير؛ تحقق منها في البيئة الفعلية.

---

<a id="file-7"></a>

## references/logo-animation-gallery-ae.md

# مكتبة تحريك الشعارات — V11 / L01–L17

## المحتويات

1. المصدر وحدود النقل
2. فهرس الاختيار
3. وصفات L01–L08
4. وصفات L09–L15
5. عروض الهوية L16–L17

## 1. المصدر وحدود النقل

المصدر: [معرض Motalim لتحريك الشعارات](https://motalim-ai.github.io/motion-starter-kit/gallery/logo/)، تمت مراجعته في 2026-10-19. احتفظ بمعرّفات الحركات لتسهيل الرجوع إلى الفيديو المقابل: `videos/<ID>.mp4` نسبةً إلى صفحة المعرض.
المعرض الأصلي موجّه إلى Remotion/React/SVG/CSS. الأدوات والخطط التالية إعادة صياغة وتنفيذ مقترح داخل After Effects، وليست نسخًا لكود الموقع أو ضمانًا لتطابق بكسلي. أزمنة الأقسام اقتراحات تأليف؛ المدد الإجمالية هي مدد المعرض المرجعية. عاير الحركة على الشعار الجديد.

اقرأ [قواعد الإنتاج](logo-animation-production.md) قبل التنفيذ. اختر أسلوبًا واحدًا أساسيًا؛ اجعل أي مزج مقصودًا، مثل L01 ينتهي بلمعة L08 واحدة. لا تجمع المؤثرات كلها.

## 2. فهرس الاختيار

| المعرّف | الحركة | المدة المرجعية | أنسب مدخل / تكلفة نسبية |
|---|---|---:|---|
| L01-LineDraw | رسم الحدود | 6 ث | مسارات فيكتور / متوسطة |
| L02-Handwriting | كتابة فعلية بالقلم | 8.4 ث | هيكل وسطي للحروف / عالية |
| L03-Assembly | تجميع الأجزاء | 6 ث | رمز قابل للفصل / منخفضة |
| L04-Morph | تحوّل الأشكال | 6 ث | مسارات متوافقة طوبولوجيًا / عالية |
| L05-Geometric | بناء هندسي | 6 ث | رمز هندسي وألوان هوية / متوسطة |
| L06-LiquidFill | تعبئة سائلة | 6 ث | هيئة مغلقة تحفظ السائل / متوسطة |
| L07-MaskWipe | شرائط ومسحة | 6 ث | أجزاء أو شعار كامل / منخفضة |
| L08-LightSweep | لمعة واحدة | 6 ث | شعار كامل؛ يدعم أصلًا شفافًا / منخفضة |
| L09-Kinetic | كتابة عربية متصلة | 6 ث | مواضع الوصل على الكلمة / متوسطة |
| L10-Elastic | كلمة مطاطية | 6 ث | هيكل وسطي أو تشوّه مضبوط / عالية |
| L11-Character | الرمز شخصية | 6 ث | رمز مناسب للتعبير / متوسطة |
| L12-Flip3D | قلبة وميدالية | 6 ث | وجه وحافة وخلفية / عالية |
| L13-Particles | تجمع الجزيئات | 6 ث | حدود فيكتور وأهداف موزعة / عالية |
| L14-Glitch | تشويش يتلاشى | 6 ث | شعار كامل في Precomp / متوسطة |
| L15-Neon | إشعال نيون | 6 ث | حدود واضحة أو هيكل حروف / متوسطة |
| L16-Hero | فيلم تقديم هوية | 12.4 ث | هندسة الرمز وصور موكاب / عالية |
| L17-Canvas | لوحة تصميم وهوية | 17.4 ث | أجزاء هندسية وموكاب وألوان / عالية |

## 3. وصفات L01–L08

### L01-LineDraw — رسم الحدود ثم التعبئة

- خطّط: 0–0.4 ث تهيئة خافتة؛ 0.4–3.4 رسم؛ 3.4–4.4 تعبئة؛ 4.4–6 ث استقرار.
- افصل الرمز والكلمة والتفاصيل والوصف. ابنِ حدودًا بـShape Paths وTrim Paths، مع تتابع يبدأ بالرمز وينتهي بالوصف. اجعل التداخل 0.04–0.12 ث تقريبًا بدل تشغيل كل المسارات معًا.
- أضف رأسًا صغيرًا يتبع مسار الرسم نفسه عبر `pointOnPath()` داخل إحداثيات الطبقة أو مسار حركة محسوب. لا تستخدم نسبة Trim على مجموعة مسارات وكأنها مسار منفرد.
- اكشف التعبئة الأصلية للرمز بقناع دائري متسع، وللكلمة بقناع من اليمين. أخفِ حدود الإنشاء تدريجيًا؛ نبضة اكتمال لا تتجاوز 102% ثم 100%.
- الصوت المقترح: احتكاك قلم خفيف، حركة تعبئة، رنين ختامي. افحص سماكة الحدود عند أحجام العرض الصغيرة.

### L02-Handwriting — الكتابة بالقلم على الهيكل

- خطّط: 0–1.6 ث الرمز؛ 1.6–5.8 الكلمة؛ 5.8–6.9 التفاصيل والوصف؛ 6.9–8.4 اتساع الكادر وثبات.
- ابنِ `STROKE_GUIDES` وسطية مفتوحة للكلمة، منفصلة عن حدود الحروف المغلقة. اكشف نسخة الشعار الأصلية بقناع Alpha من ضربات ذات سماكة تغطي كل ضربة، مع رفع القلم بين الأجزاء المنفصلة.
- احسب طول كل ضربة بوحدات الكومبوزيشن ثم خصص زمنًا متناسبًا معها؛ لا تنقل سرعة وحدات SVG إلى بكسلات AE بلا تحويل. اجعل سن القلم ملاصقًا لمقدمة الكشف، وميله تابعًا للمماس مع انحراف فني بسيط.
- حافظ على الوصلات والتشكيل؛ اكتب جسم الكلمة ثم النقاط في ترتيب مقصود. تابع القلم بتقريب معتدل ثم ابتعد حتى يظهر الشعار كاملًا.
- عند غياب الهيكل الوسطي ارسمه يدويًا أو اطلب أصلًا ملائمًا. لا تسمِّ كشفًا مستطيليًا أو رسم محيط الحرف كتابة بالقلم.

### L03-Assembly — التجميع المقصوص

- خطّط: 0–0.8 ث القاعدة؛ 0.6–2.4 العناصر الداخلية؛ 2–3.6 الكلمة؛ 3.3–4.5 التفاصيل؛ 4.5–6 ث ثبات.
- حرّك قاعدة الرمز من حجم صغير بارتداد مخمّد. أدخل عناصره الداخلية من اتجاهات مرتبطة بهندستها، واقصصها بقناع هيئة الرمز.
- اجعل الكلمة تبدو خارجة من خلف الرمز عبر ترتيب الطبقات وMatte مستقل، ثم ضع النقاط من اليمين إلى اليسار بفواصل قصيرة.
- استخدم Null لكل مجموعة، مع إزاحة الطبقة حول مرجع الشعار الأصلي. لا تجعل الحركة تمرّ فوق أجزاء يفترض أنها أمامها. ضع صوت التثبيت عند الوصول، لا عند بدء السقوط.

### L04-Morph — تحوّل متوافق مع هندسة الشعار

- خطّط: 0–1.8 ث نقطة ثم هيئة الرمز؛ 1.8–3.8 تكوّن الكلمة؛ 3.8–4.7 التفاصيل؛ الباقي ثبات.
- حوّل نقطة إلى شكل بسيط ثم إلى حدود الرمز، بعد توحيد عدد الرؤوس واتجاه المسار ونقطة البداية. أنشئ أولًا أشكالًا صغيرة غير منعدمة المساحة لتجنب مسارات غير صالحة.
- افصل الكونتورات الخارجية والثقوب؛ حافظ على التعبئة الصحيحة. عند اختلاف عدد الثقوب جذريًا استخدم تبديل طبقات مقصوصًا أو نموًا بدل وصل نقاط عشوائي.
- ابنِ ظهور الكلمة من هيكلها المتموج، ثم سلّم بصريًا للفيكتور الأصلي. لا تحوّل كتلة غريبة إلى الكلمة العربية كلها بقفزة شكلية.
- افحص الإطارات الوسطية؛ سلامة أول وآخر إطار وحدها لا تكشف تقاطع الحواف أثناء التحول.

### L05-Geometric — بناء من قطاعات

- خطّط: 0–0.4 ث شبكة؛ 0.4–2.4 قطاعات؛ 2.2–3.8 الكلمة؛ 3.8–4.6 التفاصيل؛ ثبات حتى 6.
- كرر هيئة الرمز في أربعة أقنعة ربعية مع Pivot مضبوط؛ أدخل القطاعات بدوران وانزلاق، ثم وحّد ألوانها إلى لون الرمز النهائي.
- اكشف الكلمة بأعمدة Alpha متعاقبة من اليمين، مع إبقاء أصلها متصلًا. زد عرض الأقنعة قليلًا أو أدخل تداخلًا لتجنب شقوق بين الأعمدة.
- استخدم ألوان الهوية المتاحة فقط؛ عند وجود لونين اكتفِ بدرجاتهما. اجعل الشبكة والأشكال الطافية تهدأ قبل نهاية العمل.

### L06-LiquidFill — مستوى سائل داخل الرمز

- خطّط: 0–0.6 ث وعاء؛ 0.5–2.8 صب وتعبئة؛ 2.5–3.7 سقوط داخلي؛ 3.3–4.8 حبر الكلمة؛ ثبات.
- ابنِ سطح السائل من نقاط Bezier تتحرك بمجموع موجتين جيبيتين مختلفتي الطور. حرّك المستوى رأسيًا بقيمة مستقلة عن سعة التموج، واخفض السعة عند الاستقرار.
- اقصص السائل والفقاعات بقناع الرمز. افصل تيار الصب الخارجي عن السائل المحصور؛ اسمح برذاذ خارجي مؤقت فقط كحدث مقصود يختفي.
- اربط الارتطام والقطرات بلحظة دخول الجزء الداخلي. استخدم كشفًا بحافة متموجة للكلمة، ثم أظهر الأصل الثابت دون بقايا تعبيرات تحرّكه.

### L07-MaskWipe — المسحة المائلة بألوان الهوية

- خطّط: 0–1.5 ث عبور شرائط؛ 1–2.2 الرمز؛ 2–3.6 الكلمة؛ 3.6–4.5 الوصف؛ ثبات.
- ابنِ ثلاثة شرائط كبيرة مائلة تدخل من اليمين بفاصل يقارب 0.08 ث، مع Overscan يمنع كشف أطرافها أثناء الحركة.
- اكشف الرمز عند مرور آخر شريط. اكشف الكلمة بقناع مائل، ومعه حافة لونية رفيعة تحمل اتجاه الحركة.
- ضع Matte الكلمة داخل Precomp الكلمة فقط كي لا يخفي الرمز. لا تجعل الشرائط تحجب الشعار بعد اكتماله.

### L08-LightSweep — لمعة أنيقة واحدة

- خطّط: 0–1.2 ث ظهور ناعم؛ 1.4–2.9 عبور الضوء؛ 2.9–4 ث استقرار؛ 4–6 ث ثبات.
- استخدم `LOGO_MASTER` كاملًا؛ لا تشترط تقسيم الشعار. ابنِ شريط ضوء مائلًا يقارب 22°، مع قلب ضيق وهالة أخف، مقصوصًا بـAlpha الشعار وممزوجًا بـScreen.
- اجعل العبور من اليمين إلى اليسار بسرعة شبه ثابتة. أضف تنفس Scale لا يتجاوز 1.2% ثم أعده بدقة إلى 100%.
- في النسخة الشفافة احذف الخلفية والهالة التي تقع خلف الشعار. افحص أن اللمعة لا تصنع مستطيلًا معتمًا أو تتسرّب خارج Alpha.
- تجنّب تكرار اللمعات أو توهج يطمس تفاصيل الخط. صوت هوائي رقيق واحد يكفي عند اختيار الصوت.

## 4. وصفات L09–L15

### L09-Kinetic — الكتابة مع بقاء اتصال العربية

- خطّط: 0–0.5 ث مؤشر؛ 0.5–2.8 كشف الكلمة؛ 2.8–3.8 التفاصيل والوصف؛ 3.8–4.5 ظهور الرمز؛ ثبات.
- حدّد قيم X بين الحروف عند الوصلات الرفيعة في صورة الشعار الحقيقي. حرّك حافة Mask للكلمة بقيم Hold من اليمين إلى اليسار، بمراحل تكشف حرفًا كاملًا متصلًا بسابقه.
- حرّك المؤشر إلى حافة الكشف، وأنهِ وميضه بعد ضغطة Enter التي تكشف الرمز. افصل التشكيل فقط عندما يكون منفصلًا في الأصل.
- لا تُبدّل النص بسلاسل جزئية؛ إعادة التشكيل الآلية قد تغيّر هيئة الحروف ومقاس الكلمة. لا تقص منتصف حرف أو تفك الكلمة إلى حروف طائرة.

### L10-Elastic — موجة مطاطية عبر كلمة متصلة

- خطّط: 0–1.1 ث شد الخيط؛ 1.1–3 ث النبضة؛ 3–4.4 ث ارتداد الرمز؛ ثبات.
- مثّل الخيط بمسار مفتوح، ثم انقله بصريًا إلى هيكل الكلمة. أعطِ كل رأس إزاحة Y محدودة تعتمد على X: `A * exp(-d*u) * sin(w*u)` حيث `u = max(0, time-start-delayX)`، ورتّب delayX من يمين الكلمة إلى يسارها.
- حرّك مماسات المنحنيات بما يحافظ على نعومتها؛ لا تقسّم الكلمة إلى شرائح. يمكن استعمال تشوّه محدود على Precomp كحل بديل موصوف بوضوح، وليس ادعاء بناء هيكل متجهي.
- استخدم Squash/Stretch خفيفًا للرمز؛ بعد خمود الموجة أظهر الأصل المطابق وأخفِ الهيكل. لا تترك الحروف متموجة في الختام.

### L11-Character — شخصية مؤقتة من الرمز

- خطّط: 0–1.8 ث دخول قوسي وثلاث نطات متناقصة؛ 1.8–3.1 تحية؛ 2.8–4.4 ظهور الاسم؛ 4.4–6 عودة للهوية.
- حرّك الرمز على قوس Position مع Squash/Stretch حول قاعدة تماس واضحة. حرّك ظلًا أرضيًا وفق الارتفاع؛ لا تصغّر الرمز كله بدل محاكاة القفز.
- أضف عينين قابلتين للإخفاء، وحرّك جزءًا مناسبًا للتحية فقط إن سمحت بنية الرمز. وجّه النظرة نحو ظهور الاسم.
- احذف العينين والظل والحركات التعبيرية قبل الـHold النهائي؛ يجب أن يعود الشعار إلى الأصل بلا إضافات. اختر الأسلوب لرمز يقبل التشخيص وبحسب نبرة الجهة.

### L12-Flip3D — ميدالية ذات سماكة

- خطّط: 0–2.6 ث اقتراب ودوران؛ 2.4–3.5 الاسم؛ 3.3–4.5 الوصف؛ ثبات.
- جهّز وجهًا وخلفًا وحافة ظاهرة. استخدم Renderer يدعم Extrusion إن توفر، أو طبقات Shape/Precomp متعددة موزعة على Z كبديل 2.5D؛ صرّح بالفرق. لا تتوقع من `threeDLayer=true` وحده إنشاء حجم.
- اربط الميدالية بـNull؛ أدخلها من العمق مع نحو 2.25 دورة Y، ثم استقرار صغير على الوجه الأمامي الصحيح. عاير زاوية البدء بحيث تنتهي مقروءة دون انعكاس.
- اقلب اسم الجهة كلوحة حول مفصلة سفلية على X، مع الحفاظ على الكلمة كاملة. تأكد من تباينها على الخلفية الداكنة، وأن صوت السحب ينتهي عند التوقف.

### L13-Particles — دوامة ثم أهداف على الحدود

- خطّط: 0–1.2 ث طفو؛ 1.2–2.7 دوامة؛ 2.7–4.1 تجمّع؛ 4.1–4.5 ظهور الأصل؛ 4.5–6 ث Hold.
- وزّع 80–150 جزيئًا للمعاينة وحتى 250 عند الحاجة على أطوال حدود الرمز والكلمة والوصف. استعمل توليدًا عشوائيًا ببذرة ثابتة، مع مسارات انتقال محسوبة مسبقًا أو تعبيرات حتمية.
- أعطِ كل جزيء هدفًا ثابتًا وتوقيت انفلات من الدوامة. لا تستخدم Random جديدًا لكل معاينة. لا تنفّذ بحث أقرب نقطة شاملًا على جميع الحدود في كل إطار.
- اكشف الفيكتور الصلب بهدوء عند التجمع، ثم أخفِ الجزيئات والخيوط. أضف حلقة خافتة اختيارية من الرمز؛ لا تجعل الختام مجرد نقاط غير مقروءة.

### L14-Glitch — دفعات تتناقص ثم صفاء

- خطّط: 0–0.7 ث مؤشر ومسح؛ 0.7–3.8 ث ثلاث دفعات متناقصة؛ 3.8–4.5 ث تثبيت؛ 4.5–6 ث ختام نظيف.
- كرر `LOGO_MASTER` في شرائح أفقية مقصوصة، وأزحها X بإزاحات محددة حسب seed ورقم الإطار. أضف نسختين ملونتين مقصوصتين للألفا مع Screen، بدل إفساد ألوان الأصل نفسه.
- خفّض شدة ومدة كل دفعة تالية. أخفِ الشرائح والانقسام اللوني والضجيج بالكامل في آخر 1.5 ثانية على الأقل.
- تجنّب الوميض الأبيض الواسع والمتكرر؛ اجعل التشويش حدثًا قصيرًا مقروءًا، لا حالة ثابتة.

### L15-Neon — أنابيب تُشعَل بالتتابع

- خطّط: 0–0.7 ث حدود مطفأة؛ 0.7–3.4 ث إشعال؛ 3.4–4.2 انقطاع قصير؛ 4.2–4.7 تعبئة؛ ثبات.
- ابنِ Stroke خافتًا دائمًا، وفوقه نواة مضيئة وهالة منخفضة الشدة. استخدم حدود الفيكتور أو مسارات وسطية ملائمة؛ لا تفترض استخراج أنبوب نيون دقيق تلقائيًا من أي تعبئة معقدة.
- أضئ الرمز ثم الاسم ثم الوصف بـOpacity Hold متعاقب محسوب، مع ومضات قصيرة محددة بدل wiggle عشوائي مفتوح.
- اختم بالتعبئة الأصلية للشعار وهالة خفيفة؛ عاير Blur بالنسبة إلى الدقة، وحدد نطاقه بدل تكديس فلاتر كثيرة. اجعل الطنين هادئًا وينتهي بتلاشي.

## 5. عروض الهوية L16–L17

### L16-Hero — هندسة مضيئة ثم تطبيقات الهوية

- مدة المرجع 12.4 ث. اقترح: 0–3.8 ث ولادة الرمز؛ 3.8–4.4 الاسم؛ 4.4–5 ث خلفية فاتحة؛ 5–9.8 ستة موكابات ×0.8 ث؛ 9.8–12.4 ختام.
- حلّل عرض خطوط الرمز ومراكز أقواسه أولًا. ابنِ شرائط عريضة شفافة بمحاذاة تلك الخطوط، مع حافتين أوضح ومزج Screen. ابدأ تقريبًا بـ7.5% للتعبئة و32% للحواف، ثم عاير على الخلفية.
- أدخل الشرائط بفواصل نحو 0.25 ث. أضف قوسًا مميزًا زاويته نحو 70° يدور قرابة 1.5 لفة ويستقر في موضعه البنيوي؛ هذه قيم مرجعية لا قوالب مفروضة على كل شعار.
- نفّذ حركة كاميرا واحدة من تفصيل الرمز إلى قفل الهوية. استعمل منحنى تكبير أُسّيًا/لوغاريتميًا من تقريب يقارب 6× إلى 1×؛ لا تخلط مفاتيح Zoom ومسافة الكاميرا اعتباطيًا. وجّه Focus نحو التفصيل ثم الرمز ثم الاسم.
- عند الاكتمال أخفِ الشرائط واترك الفيكتور الأصلي، ثم اكشف الاسم بقناع RTL ناعم. لا تستبدل الشرائط العريضة بخطوط إنشاء رفيعة إذا كان المطلوب فيلم هوية سينمائيًا.
- استخدم صور موكاب حقيقية مرخّصة أو مولّدة بحسب طلب المستخدم. ركّب الشعار عبر Corner Pin/قناع سطح عند الحاجة، مع Multiply على الورق الفاتح أو ظلال خفيفة للحفر. الصورة تظل أصلًا مستوردًا والشعار والتحويل قابلين للتعديل.
- حرّك كل صورة نحو 4.5% حول نقطة التركيز مع Cover وOverscan. أعد التركيب للطولي بدل القص التلقائي فقط. اختتم بشعار واضح ثابت 2.6 ث.

### L17-Canvas — قصة بناء الهوية داخل لوحة تصميم

- مدة المرجع 17.4 ث. اقترح: 0–3 ث رسم؛ 3–4.5 تعبئة؛ 4.5–6 تفكيك وتجميع؛ 6–8 دوران؛ 8–10 مواصفات؛ 10–13.2 كروت هوية؛ 13.2–15.2 موكاب؛ 15.2–17.4 ختام.
- ابنِ بيئة تصميم مقتصدة: شبكة، مؤشر واضح، مربع تحديد بأربعة مقابض، خطوط إرشاد وقائمة قصيرة. حرّك المؤشر بمنحنى تسارع وتوقف واضح عند النقر؛ لا تجعل كل حركة خطية ثابتة.
- دع المؤشر يسحب أشكالًا أولية لها علاقة بهندسة الرمز، ثم حوّلها بالـPath أو اكشف الجزء الحقيقي. أظهر شريط تعبئة 0–100% مربوطًا بكشف الرمز نفسه، لا بمؤشر تجميلي منفصل.
- فكك الأجزاء على اتجاهات مرتبطة بمحاورها، ثم أعدها عند النقر بارتداد مخمد. أنشئ لقطة حجم أبيض ثم شبه زجاجي؛ استخدم أدوات AE المتاحة مع التصريح بمحاكاة 2.5D عند استعمالها.
- اعرض صفحة قياسات: baseline وارتفاع الكلمة وحافة الرمز، ثم بطاقات ألوان بأكوادها الفعلية. اكشف الكلمة العربية كاملة بقناع؛ يجوز تمريرها كبيرة ككتلة واحدة، ولا تفك اتصال حروفها.
- أضف تنويعات سريعة من الهوية ثم موكاب صورة يحدده المؤشر. عند الخلفية بلون الرمز استخدم نسخة معكوسة معتمدة للتباين؛ لا تغيّر هوية الشعار عشوائيًا.
- احذف واجهة التصميم من قفل الهوية الأخير، واترك ثباتًا واضحًا 2.2 ث. الصورة الأصلية للموكاب تحتاج أصلًا مناسبًا؛ لا تصف الأثواب أو الأسطح المصوّرة بأنها فيكتور قابل للتحرير بالكامل.

---

<a id="file-8"></a>

## references/logo-animation-production.md

# قواعد إنتاج الشعارات في After Effects — V11

## إعداد الأصل واختيار الأسلوب

1. اجمع ما ينقص فقط: SVG/AI أو PNG شفاف، الأسلوب أو النبرة، مدة الاستخدام، النسبة والدقة، الخلفية والشفافية، الصوت أو الصمت. استنتج التفاصيل المعقولة من الطلب ولا تعِد الأسئلة المجاب عنها.
2. اقرأ فهرس [L01–L17](logo-animation-gallery-ae.md). عند عدم تحديد حركة اختر أسلوبًا يناسب هيئة الرمز: L08 للأصل الكامل، L03 للأجزاء المنفصلة، L02 للخط العربي مع هيكل رسم، L16 لفيلم هوية مع موكابات.
3. جهّز مرجعًا ثابتًا `LOGO_REFERENCE` بحجم ومكان ولون نهائيين. حافظ على نسبه وفراغاته وثقوبه واتصال حروفه. لا تعِد كتابة اسم مرسوم بخط آخر.
4. افصل مجموعات دلالية: `ICON_BASE`، `ICON_INNER`، `WORDMARK`، `DOTS_DIACRITICS`، `TAGLINE`، مع أسماء عربية مرافقة. لا تفصل نقاطًا ملتصقة عشوائيًا بسبب كونها مسارات SVG منفردة.
5. راجع SVG قبل التحويل: transforms وviewBox وfill-rule والأقنعة والقص وcompound paths. لا تفترض أن المحلل المرفق يغطي جميع أوامر SVG؛ طبّع الأوامر غير المدعومة ثم قارن الشكل بصريًا. إذا كان الأصل PNG فقط، استخدمه بوضوح كأصل مستورد؛ لا تدّع أنه صار فيكتور قابلًا لتعديل الرؤوس.

## إعداد المشهد والتحكم

- اجعل `LOGO_MASTER` فيكتورًا نظيفًا مستقلًا، وطبقة `LOGO_FINAL` للختام المطابق. ضع التأثيرات في Precomps منفصلة؛ لا تغيّر الأصل الدائم أثناء إعداد النسخ المتحركة.
- جهّز `LOGO_CTRL | تحكم_الشعار` مع Start وDuration وIntensity وSeed وSFX_Level حيث تفيد. اجعل تعديل المدة يعيد توزيع الأحداث مع بقاء زمن ختام واضح، لا يضغط الثبات إلى صفر.
- حوّل الوحدات إلى نسبة من أبعاد الكومبوزيشن، وكمّم التوقيت بـ`Math.round(t * fps) / fps` عند إنشاء المفاتيح. احفظ ترتيب الأحداث بعد التقريب، خصوصًا فواصل 0.04 ث عند 24fps.
- احتفظ بثبات نهائي 1–1.5 ث عادةً، و1.5 ث على الأقل لـGlitch، و2.6 ث لـHero و2.2 ث لـCanvas وفق الخطة المرجعية. قلّل الزخارف مبكرًا إذا كانت المدة المطلوبة أقصر.
- اجعل الصوت اختيارًا يحترم طلب الصمت. عند إضافة مؤثرات استخدم أحداثًا مرتبطة بالتثبيت والاصطدام والكشف، لا ملف الغوص العقاري ذي الستة أصوات تلقائيًا لكل شعار. استعمل WAV ستيريو 48kHz وفق قواعد المهارة، مع Headroom وتلاشي النهايات.

## فصل الحدود عن هيكل الحروف

- استخدم حدود الحروف المغلقة للرسم المحيطي L01، والهيكل الوسطي المفتوح للكتابة L02 والموجة L10. Trim Paths على محيط الحرف لا يتتبع مسار القلم داخل الحرف.
- أنشئ Stroke Guide يغطي سمك كل ضربة كـAlpha Matte فوق الأصل الحقيقي. راجع تقاطعات الضربات كي لا يكشف قناع عريض حرفًا مجاورًا قبل موعده.
- اربط سن القلم بقمة الكشف في مساحة الإحداثيات نفسها، باستخدام تحويل `toComp()`/`fromComp()` عند اختلاف الطبقات. عند تعدد الضربات أضف مرحلة رفع وانتقال لا ترسم خلالها حبرًا.
- للكتابة المتقطعة L09 حدد حدود الوصل بصريًا؛ لا تستخدم عرض الكلمة مقسومًا على عدد الأحرف. يتغير عرض الحروف ومواضع النقاط ولا يصلح التوزيع المتساوي.

## شروط Path Morph

- وحّد عدد الرؤوس، closed، اتجاه الدوران، وترتيب نقاط البداية لكل زوج. تحقق من أن أطوال `vertices` و`inTangents` و`outTangents` متساوية وأن القيم عددية محدودة.
- إذا أعدت أخذ العينات فاحسبها بطول القوس التقريبي، لا بمعامل Bezier متساوٍ فقط؛ صحح اتجاه winding ثم حاذِ نقطة البداية لتقليل الالتواء.
- افصل الثقوب إلى كونتورات مستقلة وحافظ على قاعدة التعبئة. استخدم انتقال Matte عند تغير الطوبولوجيا بدل رسم خطوط تعبر فراغات الشعار.
- اختبر 25% و50% و75% من التحول، وليس الطرفين فقط. أعد الشكل الأصلي تمامًا عند التسليم من الشكل الوسيط إلى النهائي.

## الأقنعة والعمق والأداء

- استخدم Alpha Matte بعلاقة صريحة عندما تدعم نسخة AE ذلك؛ في البديل القديم اجعل طبقة الـMatte فوق طبقة الهدف مباشرةً واضبط `trackMatteType`. لا تعِد ترتيبهما لاحقًا دون إعادة الربط.
- تجنّب فقدان حدة النص بسبب Precomp منخفض الدقة. اختبر Continuous Rasterization/Collapse Transformations على بنية المشهد الفعلية، ولا تعمم قيمة واحدة على مشاهد 2D وطبقات العمق جميعًا.
- ابنِ L12 بسماكة مرئية فعلية أو 2.5D موصوفة. لا تدّع زجاجًا حجميًا واقعيًا من طبقة شفافة واحدة. اعرض الفرق بين محاكاة بصرية وRenderer ذي بثق وخامات.
- في L13 اجعل Seed ثابتًا؛ اجمع النقاط في Shape Groups إن أمكن بدل مئات الفلاتر والطبقات. خزّن نقاط الأهداف والمسارات قبل التشغيل، واخفض العدد في المعاينة.
- في L08/L15 اجمع Glow على Precomp حيث يصلح، مع بقاء حروف الشعار حادة. عاير قيمة blur على دقة العمل؛ قيم CSS ليست بكسلات AE مكافئة تلقائيًا.
- في L16/L17 استخدم صور الموكاب كصور مستوردة مع تركيب شعار مستقل قابل للتعديل. لا تولّد هاتفًا أو قماشًا بدائيًا بالأشكال الهندسية وتصفه بأنه موكاب فوتوغرافي.

## الشفافية والتصدير

- احذف الخلفية فعليًا عند طلب Alpha؛ لا تستخدم مربعات الشطرنج كخلفية فيديو. عاين الشعار على الأبيض والأسود ولون مشبع لكشف الحواف والألفا غير الصحيحة.
- سلّم المشروع المفتوح وJSX والأصول بحسب الطلب. الفيديو معاينة إضافية عند طلبه؛ لا يستبدل المشروع المفتوح.
- MP4 لا يحمل قناة Alpha. اختر QuickTime ProRes 4444 أو PNG Sequence مع RGB+Alpha، واحتفظ بضبط Straight/Premultiplied الصحيح وتجنب هالات سوداء أو بيضاء. اضبط قوالب Output Module المتاحة فعليًا بدل افتراض أسماء ثابتة.
- أعد توزيع الكاميرا والموكابات والنصوص للعمودي؛ لا تقص نسخة عريضة في الوسط وتفترض صلاحيتها.

## التحقق قبل التسليم

- افحص بنية المهارة والروابط عند تحديثها. عند إنشاء مشروع افحص JSX وفق ES3، ومراجع الخصائص بعد addProperty، ومسارات الأصول، وShape.vertices وقواعد الكاميرا الواردة في المرجع الدفاعي.
- اعرض أو ارندر الإطار الأول، ومنتصف الأحداث، وآخر 1.5 ث. افحص لقطة الختام بمقارنة `LOGO_REFERENCE`: النسبة والمكان واللون والوصلات والتشكيل والثقوب.
- اختبر: لا سائل خارج Matte، لا عينين في ختام L11، لا شرائح glitch متبقية، لا جزيئات تحجب الاسم، لا قفزة كاميرا، لا مؤشر تصميم فوق الشعار النهائي، ولا ألمعة تتجاوز Alpha.
- دوّن مستوى التحقق بصدق: مراجعة وصفة، فحص ساكن، محاكاة برمجية، أو تشغيل ورندر داخل AE. لا يعادل فحص النص تشغيل After Effects. لا تدّع أن الـ17 وصفة قوالب تنفيذ جاهزة عند عدم بناء سكربتاتها واختبارها.

---

<a id="file-9"></a>

## references/motion-styles-and-choreography.md

# أنماط التحريك والكوريوغرافي المعتمدة (Motion Styles & Choreography Guide — V06)

## 1. معادلات الظهور والخروج (Signature Reveal & Exit Curves)

### أ. الظهور الناعم بارتداد راقٍ (`popReveal` — للمحطات والبطاقات والنصوص)
- `Scale`: `0%` (عند `t0`) -> `109%` (عند `t0 + 55%`) -> `98%` (عند `t0 + 82%`) -> `100%` (عند `t0 + 100%`).
- `Opacity`: `0%` -> `100%` خلال أول `45%` من مدة الظهور.
- `Stagger` داخل كل بطاقة:
  1. خلفية البطاقة وإطارها (`t0`)
  2. الأيقونة أو العنصر البصري (`t0 + 0.08s`)
  3. العنوان الرئيسي (`t0 + 0.16s`)
  4. النص الفرعي (`t0 + 0.24s`)

### ب. الانبثاق المرن متعدد الارتدادات (`elasticBounceReveal` — للأيقونات وأيقونات التواصل الاجتماعي)
- `Scale`: `0% -> 132% -> 88% -> 106% -> 98% -> 100%`
- مصحوب بدوران افتتاحي (`Rotation`: `-25° -> +8° -> -3° -> 0°`) وشعاع `Trim Paths` دائري يسبق ظهور الأيقونة أو يحيط بها.

### ج. حركة الخروج السينمائية (`popExit` — لإغلاق المشهد `Outro`)
- تبدأ بترتيب عكسي متدرج (`Reverse Stagger`):
  1. اختفاء شريط التواصل والنصوص الفرعية أولًا.
  2. انسحاب العنوان الرئيسي والشعار بارتداد عكسي خفيف (`100% -> 108% -> 0%`) مع دوران طفيف.
  3. تلاشي الهالات الخلفية وظهور ومضة ختامية (`Final Spark Pop`) قبل نهاية التايملاين بـ`0.2s`.

## 2. حركة الكاميرا في أسلوب `MASTER_BOARD` (Style A)
- تتبع الكاميرا تسلسل:
  `Move -> Ease In -> Settle -> Hold (with Micro Motion) -> Move to Next Station -> Final Zoom Out`
- أثناء فترة الـ`Hold`، يتم تفعيل `Hold_Gate = 1` على طبقة `CAM_CONTROLS` لتوليد اهتزاز حي خفيف جدًا (`Amplitude: 5-7px`, `Frequency: 0.45Hz`) يعود إلى الصفر تمامًا أثناء انتقال الكاميرا.

## 3. قواعد مونتاج الأناشيد والكلمات الشاعرية (Style D — Spiritual Nasheed & Poetic Montage)
- **المقدمة (`Intro Title Card`)**:
  - عنوان العمل في الأعلى بحجم كبير (`106pt+`)، تحته خط زخرفي بـ`Trim Paths`، وتحته `كلمات: ...` ثم `أداء وألحان: ...`.
- **حركة الكلمات العربية (`Word-by-Word Poetic Reveal`)**:
  - كل كلمة في طبقة نصية مستقلة يبدأ شريطها (`inPoint`) عند لحظة نطق المنشد لها بالضبط.
  - ترتفع الكلمة بنعومة (`Position Y + 28px -> Y`) مع `Scale (84% -> 103% -> 100%)` و`Opacity (0% -> 100%)`.
- **الانتقالات بين المشاهد (`Rack-Focus & Soft Light-Leak`)**:
  - في آخر `0.45s` من المشهد، يرتفع `ADBE Gaussian Blur 2` من `0` إلى `40` مع `Repeat Edge Pixels = 1` وتكبير ناعم، ويبدأ المشهد التالي من `Blur = 40` إلى `0` مع نبضة إضاءة دافئة (`Opacity 0% -> 18% -> 0%` بوضع `BlendingMode.SCREEN`).


## 4. قواعد الغوص البصري المتدرج بالكاميرا عبر الخرائط والمخططات العقارية (Style E — Multi-Scale Map & Real-Estate Camera Dive)

### أ. المبدأ الأساسي ("حرّك الكاميرا وكل شي يتحرك معك")
- تُربط جميع مستويات الخريطة (`Macro Region` -> `City Landmarks` -> `CAD Subdivision Masterplan` -> `Brand Lockup`) بمتحكم كاميرا واحد (`MASTER_CAM_RIG`) أو توضع على مسافات عمق متتالية في الفضاء ثلاثي الأبعاد (`3D Z-Space`).
- يتم تطبيق منحنى تسارع موحّد عالي التأثير (`EaseCopy` S-Curve: `inInfluence = 86%`, `outInfluence = 86%`) على جميع انتقالات الكاميرا الأربعة، مع حركة اقتراب بطيئة ومستمرة (`Slow Dolly-In +5%..+8%`) أثناء فترات القراءة (`Hold`) حتى لا تتجمد الصورة أبدًا.

### ب. التبديل السلس بين مستويات تفاصيل الخريطة (`Seamless Multi-LOD Map Cross-Fade`)
- عند الانتقال من خريطة إقليمية (Level 1) إلى خريطة أحياء (Level 2) أو مخطط شوارع وأراضٍ (Level 3):
  1. خلال فترة القفزة (`0.75s` – `0.90s`)، يتضاعف حجم الخريطة الحالية أُسّيًا (`Scale: 100% -> 420%`) مع تلاشي `Opacity (100% -> 0%)` في النصف الثاني من القفزة.
  2. في نفس اللحظة، تدخل خريطة المستوى التالي من حجم مصغّر (`Scale: 24% -> 100%`) مع `Opacity (0% -> 100%)`.
  3. يُربط المؤثر البؤري `ADBE Gaussian Blur 2` (مع `Repeat Edge Pixels = 1`) بذروة سرعة الانتقال (`0px -> 38px -> 0px`) ليدمج المستويين بصريًا كأنهما خريطة فيكتور واحدة لا نهائية الدقة!

### ج. دبوس الموقع وموجات الرادار والقطع العقارية (`Pin Drop, Radar Ripples & Parcel Highlights`)
- **دبوس الموقع (`Location Pin`)**: يهبط من الأعلى مع ارتداد مرن (`Scale + Position Y Bounce`) وفور ملامسته للأرض تنطلق منه `3` حلقات رادار دائرية متتابعة (`Scale: 10% -> 260%` مع `Opacity: 85% -> 0%`).
- **إضاءة القطع العقارية (`Sequential Parcel Pop`)**: تضيء كل قطعة أرض داخل المخطط بلون مميز (`#F2D8A7`) عبر `Opacity + Scale Pop` متبوعة بانبثاق شعار المشروع الفرعي (`جوار 1`، `جوار 2`، `جوار 3`) بفاصل زمني `0.65s` بين كل قطعة وأخرى.


## 5. حركة تلاحم الشعار الهندسية المنزلقة من زاويتين متقابلتين (`Signature Split-Slide Diagonal Logo Lockup`)

حركة معتمدة ومفضّلة لإظهار الشعارات الفيكتورية في المشاهد الختامية (`Style E` و`Style B`):
1. **انزلاق الكتلة الأساسية (`Base Mass Slide`)**:
   - تنطلق طبقة القاعدة الفيكتورية للشعار من الإزاحة القطرية السفلية اليسرى `[targetX - 260, targetY + 130]` إلى مركزها النهائي `[targetX, targetY]` خلال `0.82s` مع `EaseCopy` S-Curve (`Influence = 86% / 86%`) وشفافية `0% -> 100%` خلال أول `0.40s`.
2. **انزلاق الأجنحة المقابلة (`Counter-Wings Diagonal Slide`)**:
   - تنطلق طبقات الأجنحة من الإزاحة القطرية العلوية اليمنى `[targetX + 260, targetY - 130]` و`[targetX + 290, targetY - 160]` بفارق زمني `0.06s` لتلتحم مغناطيسيًا بالقاعدة في المركز عند `tLock`.
3. **إشراق النجوم والتفاصيل (`Sequential Star Elastic Ignition`)**:
   - قبل اكتمال الالتحام بـ`0.15s`، تنبثق النجوم أو النقاط الفيكتورية تباعًا (`Stagger = 0.07s`) بحركة `elasticBounceReveal` (`0% -> 132% -> 88% -> 106% -> 100%`).
4. **ارتفاع النصوص وتلاشي التمويه (`Rising Typography + Rack-Focus Clear`)**:
   - ترتفع نصوص اسم الجهة بالعربية والإنجليزية من `+55px` أسفل موقعها النهائي خلال `0.65s` (`Influence = 84%`) بالتزامن مع نزول التمويه البؤري العام (`Gaussian Blur 2`) من `38px` إلى `0px`.


## 5. قواعد خطاف السؤال وتتبع المسار المضيء والمباني 2.5D وشعار الشريط اللامع (Style F — V09)

1. **خطاف السؤال البكسلي (`Bracket -> Underline -> 8-Bit Pixel Question Mark`)**:
   - يبدأ القوس البرتقالي بـ`Trim Paths` ثم يستقيم تحت الكلمة ويتفكك إلى 7 مربعات فيكتور تشكل علامة استفهام بكسلية (`؟`)، مع تحول لوني `ADBE Fill` للكلمة الرئيسية من التركواز (`#4A90A4`) إلى الكحلي (`#1F3E6B`).
2. **شعاع المسار الأبيض المتوهج (`Dual Trim Paths Start/End Route Tracer`)**:
   - طبقتان متطابقتان (`Core #FFFFFF` + `Glow #FFD54F` بوضع `BlendingMode.ADD`) تتحركان معًا عبر `Trim Paths End` متبوعًا بـ`Trim Paths Start` للالتفاف حول الدوارات والوصول إلى المبنى الهدف.
3. **ختام الشعار ثلاثي الطبقات (`3-Layer Glossy Ribbon Logo Lockup`)**:
   - طبقة حفر غائر رمادي (`Groove #CCCBC6`) -> طبقة الشريط البرتقالي (`#F07D1A`) -> طبقة لمعة ذهبية متحركة (`Specular Sweep #FFD54F` بوضع `ADD`).

---

<a id="file-10"></a>

## references/packaging-and-windows-zip-rules.md

# قواعد بناء الحزمة المضغوطة وتوافق ويندوز (ZIP Packaging & Windows Compatibility Rules)

## نطاق التطبيق

طبّق قواعد JSX التالية على تسليم مشروع After Effects فقط. عند طلب ZIP للصور، ضمّن الصور النهائية المطلوبة وحدها وقدّم PDF الملاحظات بجواره وفق [الهوية والمراجعة العربية](brand-led-scene-review.md). عند تصدير المهارة نفسها، احفظ SKILL.md ومراجعها وقوالبها داخل مجلد مهارة واحد؛ لا تفرض ملف JSX تنفيذيًا في جذرها.

## لماذا قد يختفي ملف `.jsx` عند فك الضغط في بعض أجهزة Windows؟
1. مستكشف ويندوز المدمج (`zipfldr.dll`) قد يخفي أو يتجاهل الملفات التي تحتوي مساراتها الداخلية داخل الأرشيف على أحرف غير لاتينية إذا لم تتطابق أعلام UTF-8 مع صفحة الترميز المحلية، أو عندما يبحث المستخدم عن ملف `.jsx` في الجذر المباشر (`Root`) بينما يكون الملف مدفونًا داخل مجلد فرعي.
2. إذا قام المستخدم بنسخ ملف الـ`.jsx` يدويًا إلى مجلد آخر غير المجلد الذي يحتوي على `Assets/`، فإن مسار `scriptFolder.fsName + "/Assets/"` قد يفشل إن لم يكن هناك مسار احتياطي (`Fallback Path`).

## القواعد الإلزامية في كل تسليم (Mandatory Packaging Checklist)
1. **توفير ملف `.jsx` في جذر الـZIP مباشرةً وبجانب `Assets/`**:
   يجب أن يكون هيكل ملف الـ`.zip` مسطحًا وواضحًا في الجذر، مع وجود نسخة إضافية، كالتالي:
   ```
   ├── PROJECT_CODE_V01.jsx                        # اسم إنجليزي قياسي في الجذر (يظهر دائمًا في كل برامج فك الضغط)
   ├── اسم_المشروع_بالعربي_V01.jsx                  # اسم عربي واضح في الجذر
   ├── README.md                                   # دليل التشغيل السريع بالعربية
   ├── SCENE_BREAKDOWN.md                          # تفصيل المشهد والتايملاين بالعربية
   ├── COMPATIBILITY_NOTES.md                      # ملاحظات التوافق
   └── Assets/                                     # مجلد الأصول البصرية والصوتية مباشرة في الجذر
       ├── Audio/                                  # ملفات الصوت المتزامنة
       └── ...
   ```
2. **دالة البحث الذكي عن الأصول (`Smart Asset Resolver`) داخل `.jsx`**:
   يبحث السكربت عن مجلد `Assets/` في:
   - نفس مجلد السكربت (`scriptFolder/Assets/`)
   - المجلد الأب (`scriptFolder.parent/Assets/`)
   - أي مجلد فرعي مباشر داخل مجلد السكربت يحتوي على `Assets/`
   وبذلك يعمل السكربت فورًا سواء وُضع في الجذر أو داخل مجلد فرعي!

---

<a id="file-11"></a>

## templates/mp3_vocal_onset_analyzer.py

```python
"""
Acoustic MP3/WAV Vocal-Onset Analyzer (250Hz - 3400Hz Bandpass Filter) for Style D
(Spiritual Nasheed & Poetic Kinetic Typography Montage).
Extracts breath pauses and millisecond-accurate onset windows for Arabic verses and words.
"""
import subprocess
import wave
import struct
import math

def extract_vocal_envelope(audio_path, sr=16000, hop_sec=0.02):
    """
    Uses ffmpeg bandpass (250Hz-3400Hz) to isolate human vocals and returns RMS energy envelope.
    """
    tmp_wav = "/tmp/_vocal_bandpass.wav"
    subprocess.run([
        "ffmpeg", "-y", "-i", str(audio_path),
        "-af", "highpass=f=250,lowpass=f=3400",
        "-ac", "1", "-ar", str(sr), tmp_wav
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    with wave.open(tmp_wav, "rb") as wf:
        n_frames = wf.getnframes()
        raw = wf.readframes(n_frames)
        samples = struct.unpack(f"<{n_frames}h", raw)

    hop = int(sr * hop_sec)
    env = []
    for start in range(0, len(samples) - hop, hop):
        chunk = samples[start:start + hop]
        rms = math.sqrt(sum(s * s for s in chunk) / float(hop)) / 32768.0
        env.append((round(start / float(sr), 3), rms))
    return env
```

---

<a id="file-12"></a>

## templates/salman_motion_starter_template.js

```javascript
/* ==========================================================================
 * SALMAN MOTION — DEFENSIVE EXTENDSCRIPT STARTER TEMPLATE (V06 Final)
 * Supports:
 * - AE 2026 One-Node Camera Centering Fix (createCenteredCameraRig)
 * - CUDA / Vulkan / OpenCL GPU Acceleration & 16-Bit Color (enableGpuAnd16Bit)
 * - Auto-Discovery + Read-Back Arabic Font Resolver (LinaRound / Shubbak)
 * - Dynamic RTL Word Layout via sourceRectAtTime (layoutArabicWordsRTL)
 * - Dynamic Footage Auto-Fit 1920x1080 (autoFitFootageToComp)
 * - Smart Multi-Path Asset Resolver (findAssetFile)
 * - Two-Phase Shape Layer Builder + Anchor Point Reset
 * - 1D/2D/3D Safe Temporal & Spatial Easing
 * ========================================================================== */
(function () {
    function safeProp(parent, matchName) {
        if (!parent) return null;
        try { return parent.property(matchName); } catch (e) { return null; }
    }

    function safeSetVal(prop, val) {
        if (!prop) return;
        try { prop.setValue(val); } catch (e) {}
    }

    function applySafeEase(prop, keyIndex, inSpeed, inInfl, outSpeed, outInfl) {
        if (!prop) return;
        try {
            var inE = new KeyframeEase(inSpeed, Math.max(0.1, Math.min(100, inInfl)));
            var outE = new KeyframeEase(outSpeed, Math.max(0.1, Math.min(100, outInfl)));
            var vt = prop.propertyValueType;
            if (vt === PropertyValueType.TwoD) {
                prop.setTemporalEaseAtKey(keyIndex, [inE, inE], [outE, outE]);
            } else if (vt === PropertyValueType.ThreeD) {
                prop.setTemporalEaseAtKey(keyIndex, [inE, inE, inE], [outE, outE, outE]);
            } else {
                prop.setTemporalEaseAtKey(keyIndex, [inE], [outE]);
            }
        } catch (e) {}
    }

    function resetShapeAnchorPoint(shapeLayer) {
        if (!shapeLayer) return;
        var tr = safeProp(shapeLayer, "ADBE Transform Group");
        safeSetVal(safeProp(tr, "ADBE Anchor Point"), [0, 0, 0]);
    }

    function autoFitFootageToComp(layer, compW, compH, overscanFactor) {
        if (!layer || !layer.source) return 100.0;
        var fw = layer.source.width || compW;
        var fh = layer.source.height || compH;
        var margin = overscanFactor || 1.06;
        var baseScale = Math.max(compW / fw, compH / fh) * 100.0 * margin;
        var tr = safeProp(layer, "ADBE Transform Group");
        safeSetVal(safeProp(tr, "ADBE Scale"), [baseScale, baseScale, 100]);
        return baseScale;
    }

    function findAssetFile(relPath) {
        var scriptFile = new File($.fileName);
        var baseDir = scriptFile.parent;
        var candidates = [
            new File(baseDir.fsName + "/Assets/" + relPath),
            new File(baseDir.fsName + "/" + relPath),
            new File(baseDir.parent.fsName + "/Assets/" + relPath)
        ];
        var subFolders = baseDir.getFiles();
        var i;
        for (i = 0; i < subFolders.length; i++) {
            if (subFolders[i] instanceof Folder) {
                candidates.push(new File(subFolders[i].fsName + "/Assets/" + relPath));
            }
        }
        for (i = 0; i < candidates.length; i++) {
            if (candidates[i] && candidates[i].exists) {
                return candidates[i];
            }
        }
        return null;
    }

    function resolveAndApplyArabicFont(txtDocProp, doc, familyKey, weightKey, candidates) {
        var fk = familyKey.toLowerCase();
        var wk = weightKey.toLowerCase();
        var resolvedPS = null;
        try {
            if (app.fonts && app.fonts.allFonts) {
                var allF = app.fonts.allFonts;
                var i, j;
                for (i = 0; i < allF.length; i++) {
                    var famGroup = allF[i];
                    for (j = 0; j < famGroup.length; j++) {
                        var fo = famGroup[j];
                        var famStr = String(fo.familyName || "").toLowerCase();
                        var psStr  = String(fo.postScriptName || "").toLowerCase();
                        var stStr  = String(fo.styleName || "").toLowerCase();
                        if (famStr.indexOf(fk) !== -1 || psStr.indexOf(fk) !== -1) {
                            if (stStr.indexOf(wk) !== -1 || psStr.indexOf(wk) !== -1) {
                                resolvedPS = fo.postScriptName;
                                break;
                            } else if (!resolvedPS) {
                                resolvedPS = fo.postScriptName;
                            }
                        }
                    }
                    if (resolvedPS && String(resolvedPS).toLowerCase().indexOf(wk) !== -1) {
                        break;
                    }
                }
            }
        } catch (e) {}

        var tryList = [];
        if (resolvedPS) tryList.push(resolvedPS);
        var cIdx;
        for (cIdx = 0; cIdx < candidates.length; cIdx++) {
            tryList.push(candidates[cIdx]);
        }

        for (cIdx = 0; cIdx < tryList.length; cIdx++) {
            try {
                doc.font = tryList[cIdx];
                txtDocProp.setValue(doc);
                var verifyDoc = txtDocProp.value;
                var actualFont = String(verifyDoc.font || "").toLowerCase();
                var actualFam  = String(verifyDoc.fontFamily || "").toLowerCase();
                if (actualFont.indexOf(fk) !== -1 || actualFam.indexOf(fk) !== -1) {
                    return verifyDoc.font;
                }
            } catch (fErr) {}
        }
        return doc.font;
    }

    function enableGpuAnd16Bit() {
        try { app.project.bitsPerChannel = 16; } catch (e) {}
        try {
            if (typeof GpuAccelType !== "undefined") {
                try { app.project.gpuAccelType = GpuAccelType.CUDA; }
                catch (e1) {
                    try { app.project.gpuAccelType = GpuAccelType.VULKAN; }
                    catch (e2) { try { app.project.gpuAccelType = GpuAccelType.OPENCL; } catch (e3) {} }
                }
            }
        } catch (e) {}
    }

    function createCenteredCameraRig(comp, namePrefix, dur, zoomDist) {
        var zDist = zoomDist || 2666.67;
        var camNull = comp.layers.addNull(dur);
        camNull.name = "CAM_CTRL | متحكم_الكاميرا_" + namePrefix;
        camNull.threeDLayer = true;
        var nullTr = safeProp(camNull, "ADBE Transform Group");
        safeSetVal(safeProp(nullTr, "ADBE Anchor Point"), [0, 0, 0]);
        safeSetVal(safeProp(nullTr, "ADBE Position"), [comp.width * 0.5, comp.height * 0.5, 0]);

        var cam = comp.layers.addCamera("CAM_RIG | كاميرا_" + namePrefix, [comp.width * 0.5, comp.height * 0.5]);
        try { cam.autoOrient = AutoOrientType.NO_AUTO_ORIENT; } catch (e) {}
        var camOpts = safeProp(cam, "ADBE Camera Options Group");
        if (camOpts) {
            safeSetVal(safeProp(camOpts, "ADBE Camera Zoom"), zDist);
            safeSetVal(safeProp(camOpts, "ADBE Camera Depth of Field"), 0);
        }
        cam.parent = camNull;
        var camTr = safeProp(cam, "ADBE Transform Group");
        safeSetVal(safeProp(camTr, "ADBE Anchor Point"), [0, 0, 0]);
        safeSetVal(safeProp(camTr, "ADBE Position"), [0, 0, -zDist]);
        safeSetVal(safeProp(camTr, "ADBE Orientation"), [0, 0, 0]);
        return { cam: cam, ctrl: camNull };
    }

    function layoutArabicWordsRTL(comp, wordLayers, centerX, lineY, wordGap) {
        var gap = wordGap || 24;
        var widths = [];
        var totalW = 0;
        var i;
        for (i = 0; i < wordLayers.length; i++) {
            var lyr = wordLayers[i];
            var r = { left: -40, top: -30, width: 80, height: 60 };
            try { r = lyr.sourceRectAtTime(0, false); } catch (e) {}
            var w = Math.max(20, r.width);
            widths.push(w);
            totalW += w;
            var tr = safeProp(lyr, "ADBE Transform Group");
            safeSetVal(safeProp(tr, "ADBE Anchor Point"), [r.left + r.width * 0.5, r.top + r.height * 0.5, 0]);
        }
        if (wordLayers.length > 1) {
            totalW += gap * (wordLayers.length - 1);
        }
        var curRightX = centerX + totalW * 0.5;
        for (i = 0; i < wordLayers.length; i++) {
            var wCur = widths[i];
            var wordCenterX = curRightX - wCur * 0.5;
            var trW = safeProp(wordLayers[i], "ADBE Transform Group");
            safeSetVal(safeProp(trW, "ADBE Position"), [wordCenterX, lineY, 0]);
            curRightX -= (wCur + gap);
        }
    }

    /* --- Style E: Multi-Scale Map Camera Dive & Radar Pin Helpers (V07) --- */
    function applyCameraDiveTransition(camCtrlLayer, blurLayer, tStart, tMid, tEnd, startPos3D, endPos3D, maxBlurPx) {
        var tr = safeProp(camCtrlLayer, "ADBE Transform Group");
        var posProp = safeProp(tr, "ADBE Position");
        if (posProp) {
            posProp.setValueAtTime(tStart, startPos3D);
            posProp.setValueAtTime(tEnd, endPos3D);
            var k1 = posProp.nearestKeyIndex(tStart);
            var k2 = posProp.nearestKeyIndex(tEnd);
            applySafeEase(posProp, k1, 0, 86, 0, 86);
            applySafeEase(posProp, k2, 0, 86, 0, 86);
        }
        if (blurLayer) {
            var fxParade = safeProp(blurLayer, "ADBE Effect Parade");
            if (fxParade) {
                var gBlur = fxParade.property("Rack_Focus_Blur");
                if (!gBlur) {
                    var added = fxParade.addProperty("ADBE Gaussian Blur 2");
                    if (added) added.name = "Rack_Focus_Blur";
                    gBlur = safeProp(blurLayer, "ADBE Effect Parade").property("Rack_Focus_Blur");
                }
                if (gBlur) {
                    var bAmt = safeProp(gBlur, "ADBE Gaussian Blur 2-0001");
                    var bRep = safeProp(gBlur, "ADBE Gaussian Blur 2-0003");
                    safeSetVal(bRep, 1);
                    if (bAmt) {
                        bAmt.setValueAtTime(tStart, 0);
                        bAmt.setValueAtTime(tMid, maxBlurPx || 38);
                        bAmt.setValueAtTime(tEnd, 0);
                        applySafeEase(bAmt, bAmt.nearestKeyIndex(tStart), 0, 80, 0, 80);
                        applySafeEase(bAmt, bAmt.nearestKeyIndex(tMid), 0, 80, 0, 80);
                        applySafeEase(bAmt, bAmt.nearestKeyIndex(tEnd), 0, 80, 0, 80);
                    }
                }
            }
        }
    }


    /* --- V08: Dual-Schema Bezier Subpaths Builder (Supports {vertices,inTangents,outTangents} & {v,i,o}) --- */
    function addBezierSubpathsGroup(shapeLayer, groupName, subpathsInput, fillCol, strokeCol, strokeW, addTrim) {
        var rootVec = safeProp(shapeLayer, "ADBE Root Vectors Group");
        if (!rootVec || !subpathsInput) return null;
        var subpathsArray = subpathsInput.subpaths ? subpathsInput.subpaths : (subpathsInput.length ? subpathsInput : [subpathsInput]);
        if (!subpathsArray.length) return null;

        var grp = rootVec.addProperty("ADBE Vector Group");
        grp.name = groupName;
        var contents = safeProp(grp, "ADBE Vectors Group");
        var sIdx;
        for (sIdx = 0; sIdx < subpathsArray.length; sIdx++) {
            var spProp = contents.addProperty("ADBE Vector Shape - Group");
            spProp.name = "Subpath_" + (sIdx + 1);
        }
        if (fillCol) {
            var fl = contents.addProperty("ADBE Vector Graphic - Fill");
            fl.name = "Bezier_Fill";
        }
        if (strokeCol && strokeW > 0) {
            var st = contents.addProperty("ADBE Vector Graphic - Stroke");
            st.name = "Bezier_Stroke";
        }
        if (addTrim) {
            var trm = contents.addProperty("ADBE Vector Filter - Trim");
            trm.name = "Bezier_Trim";
        }

        var rootVec2 = safeProp(shapeLayer, "ADBE Root Vectors Group");
        var grp2 = safeProp(rootVec2, groupName);
        var contents2 = safeProp(grp2, "ADBE Vectors Group");
        for (sIdx = 0; sIdx < subpathsArray.length; sIdx++) {
            var spData = subpathsArray[sIdx];
            var verts = spData.vertices || spData.v;
            var inT   = spData.inTangents || spData.i;
            var outT  = spData.outTangents || spData.o;
            var isCl  = (spData.closed !== undefined) ? (spData.closed !== false) : (spData.c !== false);
            var spGroup = safeProp(contents2, "Subpath_" + (sIdx + 1));
            var pathProp = safeProp(spGroup, "ADBE Vector Shape");
            if (pathProp && verts && verts.length) {
                var sh = new Shape();
                sh.vertices = verts;
                sh.inTangents = inT || [];
                sh.outTangents = outT || [];
                sh.closed = isCl;
                pathProp.setValue(sh);
            }
        }
        if (fillCol) {
            var fl2 = safeProp(contents2, "Bezier_Fill");
            safeSetVal(safeProp(fl2, "ADBE Vector Fill Color"), fillCol);
            safeSetVal(safeProp(fl2, "ADBE Vector Fill Opacity"), 100);
        }
        if (strokeCol && strokeW > 0) {
            var st2 = safeProp(contents2, "Bezier_Stroke");
            safeSetVal(safeProp(st2, "ADBE Vector Stroke Color"), strokeCol);
            safeSetVal(safeProp(st2, "ADBE Vector Stroke Width"), strokeW);
            safeSetVal(safeProp(st2, "ADBE Vector Stroke Line Cap"), 2);
        }
        resetShapeAnchorPoint(shapeLayer);
        return grp2;
    }

    /* --- V08: Signature Split-Slide Diagonal Logo Lockup Helper --- */
    function animateSplitSlidePart(layer, tStart, tEnd, targetPos2D, offsetDX, offsetDY, scalePct) {
        if (!layer) return;
        var tr = safeProp(layer, "ADBE Transform Group");
        if (scalePct) {
            safeSetVal(safeProp(tr, "ADBE Scale"), [scalePct, scalePct]);
        }
        var posProp = safeProp(tr, "ADBE Position");
        var opProp  = safeProp(tr, "ADBE Opacity");
        if (posProp) {
            posProp.setValueAtTime(tStart, [targetPos2D[0] + offsetDX, targetPos2D[1] + offsetDY]);
            posProp.setValueAtTime(tEnd, targetPos2D);
            applySafeEase(posProp, posProp.nearestKeyIndex(tStart), 0, 86, 0, 86);
            applySafeEase(posProp, posProp.nearestKeyIndex(tEnd), 0, 86, 0, 86);
        }
        if (opProp) {
            opProp.setValueAtTime(Math.max(0, tStart - 0.04), 0);
            opProp.setValueAtTime(tStart + (tEnd - tStart) * 0.45, 100);
        }
    }

    /* --- V09: Style F Isometric 2.5D Extruded Building & 3-Layer Glossy Ribbon Logo Helpers --- */
    function addIsometricBuilding(layer, bName, cx, cy, w, h, angleDeg, topCol, sideCol, depthPx) {
        var rad = angleDeg * Math.PI / 180.0;
        var cosA = Math.cos(rad);
        var sinA = Math.sin(rad);
        var hw = w * 0.5;
        var hh = h * 0.5;
        var localCorners = [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]];
        var topVerts = [];
        var shadowVerts = [];
        var k;
        for (k = 0; k < 4; k++) {
            var rx = localCorners[k][0] * cosA - localCorners[k][1] * sinA;
            var ry = localCorners[k][0] * sinA + localCorners[k][1] * cosA;
            topVerts.push([cx + rx, cy + ry]);
            shadowVerts.push([cx + rx - depthPx, cy + ry + depthPx * 0.65]);
        }
        var z4 = [[0,0],[0,0],[0,0],[0,0]];
        var hullVerts = [shadowVerts[0], shadowVerts[3], shadowVerts[2], topVerts[2], topVerts[1], topVerts[0]];
        var z6 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        addBezierSubpathsGroup(layer, bName + "_ShadowExtrude", [{
            closed: true, vertices: hullVerts, inTangents: z6, outTangents: z6
        }], sideCol, sideCol, 4, false);
        addBezierSubpathsGroup(layer, bName + "_RoofTop", [{
            closed: true, vertices: topVerts, inTangents: z4, outTangents: z4
        }], topCol, null, 0, false);
    }
})();
```

---

<a id="file-13"></a>

## templates/stereo_wav_sfx_generator.py

```python
"""
Reusable 48kHz 16-bit Stereo WAV Procedural Sound Effects (SFX) Synthesizer for After Effects Motion Graphics.
"""
import math
import struct
import wave

SAMPLE_RATE = 48000

def write_stereo_wav(filepath, left_samples, right_samples):
    n = min(len(left_samples), len(right_samples))
    with wave.open(str(filepath), 'w') as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        buf = bytearray()
        for i in range(n):
            l_val = max(-1.0, min(1.0, left_samples[i]))
            r_val = max(-1.0, min(1.0, right_samples[i]))
            buf.extend(struct.pack('<hh', int(l_val * 32767), int(r_val * 32767)))
        wf.writeframes(bytes(buf))
```

---

<a id="file-14"></a>

## templates/svg_to_ae_bezier_parser.py

```python
"""
Reusable SVG Path (M, L, H, V, C, c, Z) to After Effects Bezier Shape Parser.
Converts SVG vector paths into centered AE vertices, inTangents, and outTangents.
"""
import re

def parse_svg_path_to_ae_subpaths(d_str, center_x=0.0, center_y=0.0, scale=1.0):
    tokens = re.findall(r'[MLHVCSQTAZmlhvcsqtaz]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?', d_str)
    idx = 0
    subpaths = []
    cur_verts, cur_in, cur_out = [], [], []
    cx, cy = 0.0, 0.0
    sx, sy = 0.0, 0.0
    cmd = None

    def to_ae_pt(px, py):
        return [round((px - center_x) * scale, 2), round((py - center_y) * scale, 2)]

    while idx < len(tokens):
        t = tokens[idx]
        if re.match(r'^[MLHVCSQTAZmlhvcsqtaz]$', t):
            cmd = t
            idx += 1
            if cmd in ('Z', 'z'):
                if cur_verts:
                    subpaths.append({"closed": True, "v": cur_verts, "i": cur_in, "o": cur_out})
                    cur_verts, cur_in, cur_out = [], [], []
                cx, cy = sx, sy
                continue
        if cmd == 'M':
            if cur_verts:
                subpaths.append({"closed": False, "v": cur_verts, "i": cur_in, "o": cur_out})
                cur_verts, cur_in, cur_out = [], [], []
            cx, cy = float(tokens[idx]), float(tokens[idx+1])
            sx, sy = cx, cy
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
            cmd = 'L'
        elif cmd == 'm':
            if cur_verts:
                subpaths.append({"closed": False, "v": cur_verts, "i": cur_in, "o": cur_out})
                cur_verts, cur_in, cur_out = [], [], []
            cx += float(tokens[idx])
            cy += float(tokens[idx+1])
            sx, sy = cx, cy
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
            cmd = 'l'
        elif cmd == 'L':
            cx, cy = float(tokens[idx]), float(tokens[idx+1])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
        elif cmd == 'l':
            cx += float(tokens[idx])
            cy += float(tokens[idx+1])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
        elif cmd == 'H':
            cx = float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'h':
            cx += float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'V':
            cy = float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'v':
            cy += float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'C':
            x1, y1 = float(tokens[idx]), float(tokens[idx+1])
            x2, y2 = float(tokens[idx+2]), float(tokens[idx+3])
            x3, y3 = float(tokens[idx+4]), float(tokens[idx+5])
            cur_out[-1] = [round((x1 - cx) * scale, 2), round((y1 - cy) * scale, 2)]
            cur_verts.append(to_ae_pt(x3, y3))
            cur_in.append([round((x2 - x3) * scale, 2), round((y2 - y3) * scale, 2)])
            cur_out.append([0.0, 0.0])
            cx, cy = x3, y3
            idx += 6
        elif cmd == 'c':
            dx1, dy1 = float(tokens[idx]), float(tokens[idx+1])
            dx2, dy2 = float(tokens[idx+2]), float(tokens[idx+3])
            dx3, dy3 = float(tokens[idx+4]), float(tokens[idx+5])
            cur_out[-1] = [round(dx1 * scale, 2), round(dy1 * scale, 2)]
            x3, y3 = cx + dx3, cy + dy3
            cur_verts.append(to_ae_pt(x3, y3))
            cur_in.append([round((dx2 - dx3) * scale, 2), round((dy2 - dy3) * scale, 2)])
            cur_out.append([0.0, 0.0])
            cx, cy = x3, y3
            idx += 6
        else:
            idx += 1
    if cur_verts:
        subpaths.append({"closed": False, "v": cur_verts, "i": cur_in, "o": cur_out})
    return subpaths
```

---

<a id="file-15"></a>

## scripts/validate_png_assets.py

```python
#!/usr/bin/env python3
"""Validate PNG chunks and full pixel streams before packaging AE assets."""
import argparse
import json
import struct
import zlib
from pathlib import Path


def validate(path):
    data = path.read_bytes()
    if data[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('invalid PNG signature')
    offset, header, ended, image_data = 8, None, False, []
    while offset < len(data):
        if offset + 12 > len(data):
            raise ValueError('truncated chunk header')
        size = struct.unpack_from('>I', data, offset)[0]
        end = offset + 12 + size
        if end > len(data):
            raise ValueError('truncated PNG chunk')
        kind = data[offset + 4:offset + 8]
        body = data[offset + 8:offset + 8 + size]
        actual = zlib.crc32(kind + body) & 0xffffffff
        expected = struct.unpack_from('>I', data, offset + 8 + size)[0]
        if actual != expected:
            raise ValueError('CRC mismatch: ' + kind.decode('ascii', errors='replace'))
        if kind == b'IHDR':
            if header is not None or size != 13 or offset != 8:
                raise ValueError('invalid IHDR')
            header = struct.unpack('>IIBBBBB', body)
        if kind == b'IDAT':
            image_data.append(body)
        offset = end
        if kind == b'IEND':
            if size != 0:
                raise ValueError('invalid IEND')
            ended = True
            break
    if not ended or offset != len(data) or not header or not image_data:
        raise ValueError('missing IEND/IHDR/IDAT or trailing bytes')
    width, height, bits, color, compression, filtering, interlace = header
    if not width or not height or compression or filtering:
        raise ValueError('invalid dimensions or PNG methods')
    inflater = zlib.decompressobj()
    pixels = inflater.decompress(b''.join(image_data)) + inflater.flush()
    if not inflater.eof or inflater.unused_data:
        raise ValueError('incomplete or trailing zlib stream')
    channels = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}.get(color)
    if channels is None:
        raise ValueError('invalid color type')
    if interlace == 0:
        row_size = (width * channels * bits + 7) // 8 + 1
        if len(pixels) != height * row_size:
            raise ValueError('pixel stream length mismatch')
        if any(pixels[row * row_size] > 4 for row in range(height)):
            raise ValueError('invalid PNG row filter')
    elif interlace != 1:
        raise ValueError('invalid interlace method')
    try:
        from PIL import Image
    except ImportError:
        if interlace:
            raise ValueError('Pillow required for full interlaced decode')
        decoded = 'CRC, zlib and row stream; Pillow unavailable'
    else:
        with Image.open(path) as image:
            image.load()
            if image.size != (width, height):
                raise ValueError('decoded size mismatch')
        decoded = 'full pixel decode'
    return {'file': str(path), 'width': width, 'height': height, 'verification': decoded}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('paths', nargs='+', type=Path)
    args = parser.parse_args()
    files = []
    for path in args.paths:
        files.extend(sorted(path.rglob('*.png')) if path.is_dir() else [path])
    results = []
    for path in files:
        try:
            result = validate(path)
            result['ok'] = True
        except Exception as error:
            result = {'file': str(path), 'ok': False, 'error': str(error)}
        results.append(result)
    ok = bool(results) and all(result['ok'] for result in results)
    print(json.dumps({'ok': ok, 'files': results}, ensure_ascii=False, indent=2))
    return 0 if ok else 1


if __name__ == '__main__':
    raise SystemExit(main())
```
