---
name: salman-after-effects-motion
description: >
  Salman Motion V19: create editable Arabic motion graphics and Adobe After Effects projects
  with ExtendScript JSX, native shapes, SVG/Bezier paths, Arabic typography, camera tours,
  map dives, nasheed timing and stereo SFX. Use for logo/brand animation, motion storyboards,
  brand-consistent scene redesign and open AE project requests. Includes Styles A-G:
  boards, logos, multi-plane scenes, nasheeds, map dives, map roaming and unified spatial
  arenas with two-stage camera gimbals, layer lifecycles, tactile UI and responsive Bento.
  Retains logo recipes L01-L17, Aqleeat identity, dual-path calligraphy, fill flashes,
  shine ribbons, verse layouts, I2V handoffs, ScriptUI setup, timeline checks,
  soft-3D transitions, gradients, controlled bounce and encoded-video review.
  Includes ES3 rules, lightweight packaging and honest validation limits.
---

# Salman After Effects Motion (V19 — الساحة المكانية الموحدة والجيمبال والواجهات الحية)

## Style G — ساحة موحدة ومحطات وكاميرا ذات مرحلتين — V19

عند طلب كاميرا تتجول داخل بيئة واحدة أو إعلان خدمات بواجهات بارزة أو حوار بمحطات، اقرأ
[الساحة الموحدة والكاميرا والواجهات](references/spatial-arena-camera-and-ui.md).
ابنِ محطات world XYZ ومتحكم مسار ثم gimbal ثم كاميرا، مع توزيع عمق محلي وخطة خروج لكل طبقة مرئية.
احسب مجال الرؤية والمسار الفعلي؛ لا تعتمد ΔZ ثابتًا أو انتهاء Null لإخفاء أبنائه.
اختر حياة الطبقات بحسب الانسحاب والكشف الجماعي والزيارة اللاحقة؛ اجمع ملكية مفاتيح الشفافية والحركة لمنع التعارض.
استخدم `templates/salman_spatial_arena_helpers.js` كأدوات عامة، وأعد ترتيب الحوار وBento فعليًا للمقاسين.
هذا المسار G يحفظ F الخاص بالخرائط؛ خيار الشعار المتماسك لا يلغي بقية وصفات الشعارات.
حافظ على الأصل الصوتي أو الربط المحلي حسب الطلب، وسمِّ محاكاة تفاعل الواجهات ودقة المعاينة بدقة.

## الوصلات والتدرّج والكاميرا والعوم والارتداد — V18

عند طلب أسلوب سجام أو Soft 3D أو وصلات تتولد من العناصر وواجهات مائلة، اقرأ
[المجسمات الناعمة والوصلات المتصلة](references/soft-3d-continuous-transitions.md).
خطّط تغير الخلفية والإضاءة مع الوصلة، وافصل Rig الكاميرا عن حركة الواجهة ومحتواها.
وازن الحركة الرئيسية والعوم والتتابع والارتداد؛ استخدم `templates/salman_motion_timing_helpers.js` لحساب القيم عند الحاجة.
احفظ دروس التجربة وملاحظة المستخدم: الحركة السابقة أولية ولم تصل تمامًا للمطلوب؛ لا تعتمدها معيارًا نهائيًا.
طبّق هوية العميل، وميّز ما لوحظ من المرجع وما تقترحه للتنفيذ، وما رُندر خارج AE وما اختُبر داخله.

## نافذة الإعداد والتوقيت ومراجعة الفيديو — V17

عند إنشاء JSX بواجهة قبل البناء أو ضبط الموال واللازمة والطيف وشريط الوقت، اقرأ
[نافذة الإعداد وتوقيت الأناشيد](references/prebuild-dialog-and-timed-nasheed.md).
أظهر نافذة ScriptUI قبل تعديل المشروع، وافحص الملفات والإلغاء والخط والإعدادات؛ اعرض الميزات المنفذة فقط.
استخدم `templates/salman_prebuild_setup.jsx` مع البناء الفعلي، وافحص التوقيت بعد الإزاحة بـ`scripts/validate_motion_project.py`.
لا تورّث افتراضات غروب العمر، ولا تقص الأشطر أو تخلط علاماتها بعد تغيير التوقيت.
عند تحليل مرجع فيديو أو مراجعة الرندر المشفر، اقرأ
[سجل المرجع ومراجعة الفيديو](references/reference-ledger-and-render-review.md).
حلّل المدة الكاملة، وسجّل التطابق والتغييرات المقصودة، وراجع نطاقات الحركة بإطارات مؤرخة وصوت عند توفره.
استخدم `scripts/review_motion_render.py` على فيديو فعلي؛ لا تعتبر نجاحه تشغيلًا لـAE أو تحققًا سمعيًا.

## تنويع الأبيات وتسليم مشاهد I2V — V16

عند تنويع Style D أو تجهيز مشاهد لـOmniFlash، اقرأ
[توزيعات الأبيات ومسار I2V](references/nasheed-layout-and-i2v.md).
اختر بين خمسة توزيعات وأربع وصفات نصية وفق المعنى والقراءة، ونوّع الإعادة الصوتية بقصد إخراجي.
اعتبر الوصفات خططًا للتنفيذ وليست محركات جاهزة؛ أبقِ النص العربي مستقلًا عن الرسم والفيديو.
افحص دمج الأبيض وملاءمة Multiply واستبدال Footage، ولا تصف صور I2V بأنها فيكتور قابل للتحرير.

## مسارات المخطوطات والريشة واللمعة — V15

عند طلب كشف مخطوطة بالقلم أو شريط لمعان أو دمج وصفة V08 المرفقة، اقرأ
[الكشف والريشة واللمعة للمخطوطات](references/calligraphy-dual-path-and-shine.md).
افصل `reveal_subpath` عن `smooth_tracer_subpath`، واضبط التغطية وسرعة المسار وفق هندسة الحرف.
استعمل ومضة تعبئة مؤقتة للتشكيل بدل تغيير لونه بتوهج دائم، وشريطًا رفيعًا مقصوصًا بألفا نظيفة للمعان.
اعتبر أرقام V08 قيم مثال لشعار محدد؛ لا تنقل هويته البنية والذهبية أو بياناته إلى بقية المشاريع.
احتفظ بالأنماط A–F ووصفات L01–L17؛ أدرج وصفة المخطوطات تحت Style B، ولا تعِد تعريف Style F الخاص بالخرائط.
استخدم قالب `templates/salman_calligraphy_glass_shine_v08_template.jsx` كمرجع مستورد خاص، لا كتنفيذ عام مثبت بالرندر؛ اقرأ قيوده قبل الاقتباس منه.

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
1. **ضع دائمًا ملف السكربت `.jsx` في الجذر المباشر للحزمة (`Root Level`) بجانب مجلد `Assets/` مباشرةً**؛ اكتفِ بجذر واحد واضح ولا تكرر Assets أو شجرة المشروع داخل الأرشيف.
2. **ضع نسختين من ملف `.jsx` بجانب `Assets/`**:
   - نسخة بالاسم الإنجليزي القياسي (`PROJECT_NAME_V01.jsx`) لضمان عدم قيام مستكشف ويندوز بإخفاء الملف بسبب ترميز UTF-8 في ترويسة ZIP القديمة.
   - نسخة بالاسم العربي الكامل (`اسم_المشروع_بالعربي_V01.jsx`).
3. **اكتب دالة البحث عن الأصول (`findAssetFile`) في السكربت بحيث تبحث في عدة مسارات تلقائيًا**:
   - `new File(scriptFolder.fsName + "/Assets/" + fileName)` (عندما يكون السكربت بجانب `Assets/`).
   - `new File(scriptFolder.parent.fsName + "/Assets/" + fileName)` (في حال وضع المستخدم السكربت داخل مجلد فرعي أو العكس).
   - البحث داخل أي مجلد فرعي مباشر يحتوي على `Assets/`.
4. **التحقق الإلزامي قبل التسليم**: قبل إرسال ملف `.zip` للمستخدم، افحص محتوياته برمجيًا (`zipfile.ZipFile.namelist()`) وتأكد من وجود ملف `.jsx` غير فارغ مع اكتمال الكود والاعتمادات والمسارات وفحص الصياغة، دون حد حجم مصطنع في جذر الأرشيف وبجانب `Assets/`.

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
            if (actualFont === String(tryList[cIdx]).toLowerCase() &&
                (actualFont.indexOf(fk) !== -1 || actualFam.indexOf(fk) !== -1)) {
                return verifyDoc.font;
            }
        } catch (fErr) {}
    }
    return null; // No verified candidate; caller must stop or report an explicit fallback.
}
```

اقرأ قيمة الإرجاع: `null` تعني فشل التحقق، ولا يجوز عرض رسالة نجاح. يقبل المساعد اسم PostScript مطابقًا للمرشح الفعلي؛ بدائل الأوزان داخل candidates بدائل صريحة يجب ذكرها. عند اختيار المستخدم PostScript محددًا في نافذة V17، تحقّق من مطابقته حرفيًا بعد التطبيق ولا تستبدله بصمت.

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
  2. **المزامنة الصوتية الطيفية الفعلية (`Acoustic MP3 Onset Synchronization`)**: عند توفر الملف الصوتي (`.mp3` أو `.wav`)، حلّل الموجة الصوتية عبر مرشح ترددات الصوت البشري (`250Hz - 3400Hz Bandpass Filter` عبر `templates/mp3_vocal_onset_analyzer.py`) لاستخراج غلاف طاقة RMS بخطوة افتراضية 20ms كقرينة على النشاط والصمت. المرشح لا يفصل الغناء عن بقية المصادر ولا يستخرج توقيت كل كلمة أو شطر وحده؛ قارنه بالأداء والنص المعتمد أو محاذاة موثوقة، وراجع المدود والقوافي سمعيًا عند الإمكان.
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

### النمط السابع (Style G): الساحة المكانية الموحدة للخدمات والحوار (`Unified Spatial Arena`)

طبّق [مرجع الساحة والجيمبال](references/spatial-arena-camera-and-ui.md) ووحدته العامة. حافظ على F السابق للخرائط، واختر G للجولة بين المحطات وعرض الخدمات والواجهات والحوار المتجاوب.

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

- [references/spatial-arena-camera-and-ui.md](references/spatial-arena-camera-and-ui.md): Style G؛ دمج حزم V10/V11 ودروس المشروعين، الجيمبال والمحطات ومجال الرؤية ودورة الحياة ووصفات الواجهات والتخطيط والصوت وحدود المصدر.
- `templates/salman_spatial_arena_helpers.js`: وحدة عامة للجيمبال والمحطات ونوافذ العرض وبطاقات 2.5D وإطار التحديد وحسابات التغطية والشبكة.

- [references/soft-3d-continuous-transitions.md](references/soft-3d-continuous-transitions.md): دروس سجام وتجربة أثر الخير؛ الخامات والتدرج والوصلات والكاميرا والعوم والارتداد وحدود اعتماد الحركة.
- `templates/salman_motion_timing_helpers.js`: حساب منحنيات وتدرجات وعوم وزوم وعينات زمنية بأسلوب ES3؛ يحتاج ربطًا بخصائص المشروع.

- [references/prebuild-dialog-and-timed-nasheed.md](references/prebuild-dialog-and-timed-nasheed.md): نافذة قبل البناء، توقيت الموال واللازمة بعد الإزاحة، وفحوص الطيف والشريط وحدود مثال غروب العمر.
- [references/reference-ledger-and-render-review.md](references/reference-ledger-and-render-review.md): تحليل المرجع كاملًا ومصفوفة المقارنة ومراجعة الرندر ونسبة المصدر.
- `templates/salman_prebuild_setup.jsx`: وحدة ScriptUI عامة بإلغاء وفحص مدخلات، لا تبني المشروع وحدها.
- `scripts/validate_motion_project.py`: فاحص JSON للتوقيت والإزاحة وlayout وصياغة JSX دون تنفيذ AE.
- `scripts/review_motion_render.py`: عينات مؤرخة من فيديو محلي وأوراق مراجعة وتقرير بيانات، دون حكم جودة تلقائي.


- [references/nasheed-layout-and-i2v.md](references/nasheed-layout-and-i2v.md): خمسة توزيعات، أربع وصفات للأبيات، تنويع التكرار الصوتي، ودليل تسليم I2V واستبدال Footage.

- [references/calligraphy-dual-path-and-shine.md](references/calligraphy-dual-path-and-shine.md): فصل الكشف عن الريشة، تكييف السرعة والومضة واللمعة، ومراجعة قالب V08 المستورد وحدود إثبات التغطية والرندر.
- `templates/salman_calligraphy_glass_shine_v08_template.jsx`: المثال الخاص بشعار سلمان من حزمة V10 المرفقة، محفوظ كما ورد للمراجعة والتكييف؛ ليس بديلًا تلقائيًا للقالب الدفاعي العام.

- [references/brand-led-scene-review.md](references/brand-led-scene-review.md): قواعد V14 لتوحيد الهوية في العناصر، تفسير الأبيات، ملف التدريبات العقلية، مراجعة العربية والمصحف، وإعداد ZIP الصور وPDF الملاحظات.

- `references/extendscript-defensive-rules.md`: الدليل التفصيلي لقواعد ExtendScript ES3 ومحرك V8 وإصلاحات AE 2026 للكاميرا والـGPU وحارس نقاط الـBezier (`Dual-Schema Bezier Guard`).
- `references/motion-styles-and-choreography.md`: خرائط التحريك التفصيلية للأنماط الخمسة (`Style A` إلى `Style E`) وحركة تلاحم الشعار المنزلقة (`Split-Slide Diagonal Logo Lockup`).
- `references/packaging-and-windows-zip-rules.md`: قواعد بناء الحزمة المضغوطة وضمان ظهور ملف `.jsx` في جميع أنظمة التشغيل.
- `references/PRE_DELIVERY_CHECKLIST.md`: قائمة الفحص البرمجية الإلزامية قبل تسليم أي مشروع (بما فيها فحص `Shape.vertices` الصارم في Node.js).
- `templates/salman_motion_starter_template.js`: القالب البرمجي الدفاعي الجاهز (شامل دوال الغوص بالكاميرا عبر الخرائط، دبوس الرادار، وحركة تلاحم الشعار `buildSplitSlideLogoLockup`).
- `templates/svg_to_ae_bezier_parser.py`: أداة بايثون لتحويل أي ملف `SVG` إلى مسارات After Effects Bezier أصلية.
- `templates/stereo_wav_sfx_generator.py`: مولّد المؤثرات الصوتية (`48kHz Stereo WAV`) المتزامنة مع الموشن جرافيك والغوص البصري.
- `templates/mp3_vocal_onset_analyzer.py`: غلاف طاقة RMS بعد ترشيح 250–3400Hz للمساعدة في المحاذاة؛ لا يستخرج كلمات أو توقيت أشطر بمفرده.

- [references/logo-animation-gallery-ae.md](references/logo-animation-gallery-ae.md): فهرس 17 حركة مع خطط توقيت مقترحة وتحويلها إلى أدوات AE.
- [references/logo-animation-production.md](references/logo-animation-production.md): إعداد الشعار، المسارات الوسطية، توافق Morph، الشفافية، أداء الجزيئات وفحص الختام.

- [references/direction-rhythm-and-render-review.md](references/direction-rhythm-and-render-review.md): مبادئ إخراج منتقاة من motionmaxxing ومكيّفة لـAE والعربية، مع مراجعة رندر مستقلة عن أدوات الويب.
