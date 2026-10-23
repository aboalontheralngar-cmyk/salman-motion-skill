# مهارة سلمان للموشن جرافيك - النسخة الموحّدة V19

هذا الملف مولّد من ملفات المصدر في المستودع. اقرأ التعليمات الأساسية أولًا، ثم المراجع والقوالب المناسبة للمشروع. يتضمن الكود النصي كاملًا، ولا يتضمن أصولًا ثنائية أو مشاريع خاصة أو إثباتًا لتشغيل After Effects.

## فهرس الملفات

1. [SKILL.md](#file-1)
2. [references/PRE_DELIVERY_CHECKLIST.md](#file-2)
3. [references/brand-led-scene-review.md](#file-3)
4. [references/calligraphy-dual-path-and-shine.md](#file-4)
5. [references/direction-rhythm-and-render-review.md](#file-5)
6. [references/extendscript-defensive-rules.md](#file-6)
7. [references/illustration-depth-and-glass-shine.md](#file-7)
8. [references/logo-animation-gallery-ae.md](#file-8)
9. [references/logo-animation-production.md](#file-9)
10. [references/motion-styles-and-choreography.md](#file-10)
11. [references/nasheed-layout-and-i2v.md](#file-11)
12. [references/packaging-and-windows-zip-rules.md](#file-12)
13. [references/prebuild-dialog-and-timed-nasheed.md](#file-13)
14. [references/reference-ledger-and-render-review.md](#file-14)
15. [references/soft-3d-continuous-transitions.md](#file-15)
16. [references/spatial-arena-camera-and-ui.md](#file-16)
17. [templates/mp3_vocal_onset_analyzer.py](#file-17)
18. [templates/salman_calligraphy_glass_shine_v08_template.jsx](#file-18)
19. [templates/salman_motion_starter_template.js](#file-19)
20. [templates/salman_motion_timing_helpers.js](#file-20)
21. [templates/salman_prebuild_setup.jsx](#file-21)
22. [templates/salman_spatial_arena_helpers.js](#file-22)
23. [templates/stereo_wav_sfx_generator.py](#file-23)
24. [templates/svg_to_ae_bezier_parser.py](#file-24)
25. [scripts/review_motion_render.py](#file-25)
26. [scripts/validate_motion_project.py](#file-26)
27. [scripts/validate_png_assets.py](#file-27)

---

<a id="file-1"></a>

## SKILL.md

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

---

<a id="file-2"></a>

## references/PRE_DELIVERY_CHECKLIST.md

# قائمة الفحص الإلزامية قبل التسليم (PRE-DELIVERY CHECKLIST V19)

قبل تسليم المشروع، افحص البنود المنطبقة أدناه. سجّل ما اختُبر برمجيًا وما اختُبر داخل AE وما لم يُختبر؛ لا تعلن نجاح بند يحتاج تشغيلًا فعليًا بناءً على فحص ساكن.

حدّد نوع التسليم أولًا: طبّق بنود JSX وAssets على مشروع AE، لا حزمة صور أو حزمة المهارة. لحزم الصور، طبّق بند الهوية والمراجعة في النهاية وفحوص PNG وZIP وPDF المنطبقة.

- [ ] **1. وجود ملف `.jsx` داخل ملف الـ`.zip` فعليًا**:
  - فحص أرشيف `.zip` عبر `zipfile.ZipFile(zip_path).namelist()` والتأكد من وجود ملف `.jsx` (بالاسمين العربي والإنجليزي) في الجذر المباشر (`Root`) وبجانب مجلد `Assets/` مباشرةً، وأنه غير فارغ وكامل الاعتمادات، مع أصل واحد لكل ملف في Assets وإصدار متطابق عبر أسماء التسليم والكود.
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

- [ ] **9. المخطوطات والكشف والريشة (V15)**:
  - فصل مسار الكشف العريض عن مسار الريشة المرئي، وفحص التغطية قبل إعلان 100%.
  - تكييف السرعة وسمك 18/6px والاستدقاق والارتداد مع الحرف والمقاس؛ عودة لون التشكيل بعد الومضة.
  - فصل ألفا الشعار وWHITE_BUMP عن الريشة والفقاعات، والتحقق الفعلي من معاملات CC Glass أو تعطيله.
  - فحص خاتمة الشعار والخلفية الداكنة وترتيب طبقات اللون؛ عدم توريث ألوان مثال سلمان أو افتراضاته إلى العميل.
  - قراءة قيود قالب V08 المستورد في [مرجع المخطوطات](calligraphy-dual-path-and-shine.md) قبل إعادة استخدامه، مع إبقاء Style F الحالي ووصفات الشعارات والهوية السابقة.

- [ ] **10. تنويع الأبيات وتسليم I2V (V16)**:
  - قياس النص والرسم والهوامش في المقاس الفعلي، واختيار التوزيع ووصفة التحريك وفق المعنى ووقت القراءة.
  - ترقيم الإعادات الصوتية وتحديد توقيتها، وتخطيط تنويعها دون مساس بالنص أو الصوت.
  - إبقاء العربية مستقلة، وعدم وصف الصور أو الفيديو بأنها فيكتور قابل لتعديل أجزائه.
  - فحص الأبيض والملابس وMultiply على الخلفية النهائية، وتطابق المقاس والمدة وFPS قبل Replace Footage.
  - إرفاق دليل اللقطات والبرومبتات عند اختيار هذا المسار، وتسجيل ما شُغّل في AE أو I2V وما لم يُختبر.

- [ ] **11. نافذة الإعداد والتوقيت والرندر (V17)**:
  - الإلغاء يسبق أي استيراد/إنشاء؛ الأخطاء تبقي نافذة الإعداد قابلة للتصحيح، والاعتمادات لا تتضمن أسماء موروثة.
  - مفاتيح الواجهة تربط ميزات منفذة، والمقاس وFPS والخط وقوة الحركة تطبق فعليًا، مع فحص أقصى حركة والحواف.
  - فحص التوقيت النهائي بعد الإزاحة، بما فيه المقدمة الخالية واللازمة وfixedTiming؛ تطابق العلامات مع ظهور الكلمات دون قص صامت.
  - فحص مرجع الصوت للطيف ووحدات خصائصه؛ تقدم الوقت خطي وتلاشيه مستقل، مع معايرة المؤثرات على الرندر.
  - سجل المرجع يغطي المدة المعنية كاملة، ومصفوفة المقارنة تميز الهوية المطلوبة عن شكل المرجع.
  - مراجعة الفيديو المشفر والعربية كاملة الدقة والصوت عند توفره؛ تمييز فحص البيانات/الصياغة والمحاكاة عن تشغيل AE.

- [ ] **12. الوصلات والتدرّج والكاميرا والارتداد (V18)**:
  - فصل الصفة المرصودة عن آلية محتملة أو وصفة مقترحة؛ عدم اعتماد حركة الدراسة السابقة نهائيًا بعد ملاحظة المستخدم.
  - تماس المجسمات بالقاعدة، واتساق الخامات والضوء وألوان العميل، وتحديد قابلية تحرير PNG/الأجزاء/Rig.
  - استمرارية اللون وقراءة النص في منتصف تغير التدرج، وتغطية جميع زوايا المسحة أو الدائرة.
  - فصل الكاميرا عن حركة الواجهة ومحتواها، وفحص المنظور والحواف عند الذروة وأقصى إعداد حركة.
  - تمايز الحركة الرئيسية والعوم والارتداد، وعدم تجاوز حدود الألفا والألوان أو إضافة easing ثانٍ للقيم المأخوذة مسبقًا.
  - مقارنة قبل الحركة/ذروتها/استقرارها، ومراجعة القصور الذي حدده المستخدم دون ادعاء تطابق الرندر البرمجي مع AE.

- [ ] **13. الساحة الموحدة والجيمبال والواجهات (V19 / Style G)**:
  - هرم path → gimbal → camera، وإحداثيات محلية بعد الربط، مع فصل الحركة الرئيسية والفرعية وعدم طمس زاوية الأصل بالعوم.
  - فحص مجال الرؤية عند التحولات والانسحاب وإعادة الزيارة؛ لا اعتبار ΔZ=3800 ضمانًا ولا إخفاء Null بديلًا لإخفاء الأبناء.
  - ملكية واحدة لمفاتيح الشفافية والتوقيت، وعدم عودة trace بعد تلاشيه؛ نافذة عرض فعلية لكل طبقة مرئية بحسب خطة اللقطة.
  - محاور مشتركة للكتابة والقلم، وبطاقات وشارات مرتبة في العمق، وتمييز القرص الملون عن portal matte والتفاعل المصور عن التفاعل الحقيقي.
  - إعادة تخطيط الحوار والشبكة للأفقي والعمودي وقياس Cover من الأصول، ومراجعة العربية عند Full وإعداد الرندر النهائي.
  - الإلغاء لا يختار صوتًا آخر بصمت؛ الصوت المحذوف عمدًا لا يولد ادعاء مزامنة أو فشلًا في التحليل البصري.
  - عدم نقل ألوان العميل أو هندسة شعاره وصوره إلى القالب العام، وعدم إعلان اكتمال محرك غير مرفق.

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

## references/calligraphy-dual-path-and-shine.md

# كشف المخطوطات والريشة واللمعة - V15

## المحتويات

1. نطاق الوصفة والمصدر
2. افصل هندسة الحرف والكشف والريشة
3. اضبط سرعة الرسم والارتداد
4. أعد لون التشكيل بعد ومضة قصيرة
5. ابنِ اللمعة والألفا وBump بأمان
6. خطّط الدخول والثبات والخروج
7. افهم حدود قالب V08 المرفق
8. تحقّق قبل التسليم

## 1. نطاق الوصفة والمصدر

استخدم هذه الوصفة للمخطوطات والشعارات الخطية ضمن Style B. احتفظ بـStyle F للخرائط ومسار الوصول كما في المهارة السابقة؛ تسمية الحزمة المستوردة للمخطوطات بـStyle F ليست مبررًا لاستبدال النمط القائم.

استخلصت القواعد من حزمة المستخدم V10 Final والقالب `templates/salman_calligraphy_glass_shine_v08_template.jsx`. احتفظ بالمثال كما أُرفق، واعتمد هذا المرجع وقواعد V13 عند تكييفه. الحزمة تشير إلى درسي [اللمعة الزجاجية](https://www.youtube.com/watch?v=EnXQl0nrg68) و[تحريك مخطوطة الريشة](https://www.youtube.com/watch?v=OKKmAb9e1nA)؛ هذه إحالة من المصدر المرفق، وليست شهادة مشاهدة أو مطابقة للدرسين.

لا تستبدل ملفات المهارة الحديثة بملفات الحزمة كاملة: بعض ملفات V10 أقصر وتحذف قواعد الهوية وStyle F الحالي ووصفات الشعارات والمراجعة. ادمج الإضافات دون إسقاط القدرات القائمة.

## 2. افصل هندسة الحرف والكشف والريشة

- احفظ حد الحرف المملوء في `art_subpaths` مع ثقوبه وألوانه الأصلية. حوّل أصل PDF المتجهي إلى SVG عند الحاجة وافحص نتيجة التحويل؛ لا تفترض أن كل PDF متجهي.
- احسب مركز ارتكاز محليًا لكل جزء، وحرّك الحرف حوله. حوّل الإحداثيات والمماسات بما يحفظ النسب والثقوب؛ تجاهل المسارات الفارغة فقط.
- أنشئ `reveal_subpath` مستقلًا وعريضًا للكشف عبر Alpha Matte. اسمح له بتغطية الأسنان والتفاصيل التي تحتاجها ألفا الحرف، دون اشتراط أن يكون جميلًا كخط مرئي.
- أنشئ `smooth_tracer_subpath` مستقلًا للريشة المرئية، بمنحنيات مستمرة وبدون انعكاس حاد أو وصلات تقفز في الفراغ. وجود كشف يغطي الحرف لا يعني أن مسار الريشة مطابق لمسار قلم خطاط.
- اربط Matte والريشة بالحرف واضبط التحويل المحلي بعد الربط. صفّر Anchor Point لطبقات Shape وفق V13، واحفظ زوايا واتجاه المماسات بعد إعادة التموضع.
- استعمل زوج خطوط عند ملاءمته: رئيسي 18px ومرافق 6px، مع Taper قريب من 85% كبداية في مشروع 1920×1080. كيّف الأرقام مع المقياس؛ افحص توفر خصائص Taper ولا تدّع تطبيقها إذا غابت.
- حرّك Trim Start خلف Trim End بذيل قصير، ثم أخفِ الريشة بعد اكتمال الكشف. افصل الدخول عن الخروج زمنيًا لمنع ظهور نقطة أو خط عند بداية الكومبوزيشن قبل موعد الحرف.
- افحص تغطية Matte بقياس فعلي قبل إعلان نسبة؛ عرض 140–158px ليس ضمانًا عامًا. إذا ذكرت `uncovered_px == 0`، أرفق الفحص وحدوده ودقة الراستر والإطار. لا تعمم نتيجة ثابتة على جميع إطارات الحركة.

## 3. اضبط سرعة الرسم والارتداد

- اختر تغير السرعة من اتجاه الحرف الفعلي؛ لا تفرض تباطؤ الصعود وتسارع النزول على كل منحنى دون قراءة هندسته.
- يمكن البدء بمفاتيح End عند 0، 44، 68، 100%، لكن نسب الزمن وسرعات المماسات قابلة للتكييف. افحص الاستمرارية عند الوصلات، ولا تضع سرعة صفرية على كل مفتاح ثم تصف الحركة بأنها متصلة بلا توقف.
- استخدم Inertial Bounce بدرجة محدودة عند الحاجة للنقاط أو الدوران. في مثال القالب تُحوّل إعدادات 15/20/50 إلى amp=0.015 وfreq=2 وdecay=5؛ لا تخلط إعدادات الواجهة بالقيم الفعلية داخل التعبير.
- اجمع كل مركبة من مصفوفة القيمة والسرعة على حدة في حلقة ES3؛ لا تستخدم جمع مصفوفتين مباشرة. راجع `expressionError` داخل AE قبل إعلان نجاح التعبير.
- لا تفرض الارتداد أو الطفو على كل حرف في كل هوية. حافظ على Hold مقروء وهادئ بعد اكتمال المخطوطة.
- تجنّب CC Bend It على المخطوطة العريضة عندما يقطع أطرافها؛ جرّب Rotational Uncurl وPosition Glide حول المحور المحلي، ثم افحص الحدود عند أقصى حركة. لا تعتبر سبب الاقتصاص مثبتًا لكل إصدار دون فحص فعلي.

## 4. أعد لون التشكيل بعد ومضة قصيرة

- حرّك `ADBE Vector Fill Color` بدل تثبيت Glow دائم يغيّر مظهر التشكيل الفاتح طوال اللقطة.
- احفظ اللون الأصلي `item.fill_col` واجعل الومضة مرتبطة بزمن ظهور العلامة؛ مثلًا Hold قصير حتى t0+0.14 ثم عودة إلى الأصل في نحو 0.12 ثانية، مع تكييف المدة حسب الإيقاع.
- لا تعمم `#C69C6D` على العميل؛ هذا لون تشكيل مثال سلمان. استمد الأصل واللون المؤقت من الهوية، وراجع الشكل بعد زوال الومضة.
- انتبه أن دالة المثال `applyBirthGlowFlash` تعيد اللون عند `t1+0.12`، وقد تكون أطول من 0.26 ثانية من t0. أعد توقيتها عند طلب ومضة قصيرة؛ اسم الدالة لا يثبت المدة.
- ميّز ومضة التعبئة عن انبعاث ضوء فعلي. إذا استعملت Glow إضافيًا، حرّك شدته إلى الصفر وافحص ثبات لون التشكيل في مرحلة الثبات.

## 5. ابنِ اللمعة والألفا وBump بأمان

- استخدم Shape Ribbon رفيعة بدل Solid كاملة الشاشة؛ 1500×36px وGaussian Blur نحو22 مثال أولي لمشهد عريض، وليس مقاسًا إلزاميًا لكل شعار.
- شوّه شريط الضوء وحده بـTurbulent Displace وحركة Offset هادئة؛ لا تشوّه الوجه أو الحرف الأصلي. اجعل Opacity تساوي صفرًا خارج المرور واضبط outPoint.
- افصل `LOGO_MASTER` النظيف و`MASTER_ALPHA` عن الريشة والفقاعات وGlow والخلفية. ابنِ WHITE_BUMP مستقلًا له ألفا صحيحة؛ لا تدع فقاعات أو خطوطًا زائدة تدخل ألفا اللمعة.
- اربط Matte الحديثة عبر setTrackMatte، أو ضع Matte مباشرة فوق الهدف عند البديل القديم؛ أتمّ ترتيب الطبقات قبل اختبار البديل. يمكن إعادة استخدام `applyAlphaTrackMatte` من القالب العام، مع فحص قيمة نجاحه.
- اكتشف شجرة خصائص CC Glass الفعلية وأعد قراءة الخصائص بعد الإضافة. لا تعتمد افتراض أن `CC Glass-0002` هو Bump Map. عند تعذر إثبات الربط، عطّل Glass المضاف ودوّن غيابه بدل إبقاء تأثير افتراضي نشط؛ احتفظ باللمعة المقصوصة إن كانت صالحة.
- اختبر ما إذا كان Layer Control يقرأ مؤثر Fill على طبقة المصدر أم محتوى الـPrecomp؛ استخدم مصدرًا أبيض داخليًا موثوقًا عند الحاجة، ولا تستنتج ذلك من لون الطبقة المعروضة وحده.
- ميّز Layer Style Outer Glow عن مؤثر Glow المدمج. وجود تأثير باسم Outer_Glow_Boost لا يثبت إنشاء Layer Style؛ اذكر البديل المستخدم فعليًا.
- طبّق بقية ضوابط الحصر والماتات من [مرجع اللمعة V13](illustration-depth-and-glass-shine.md).

## 6. خطّط الدخول والثبات والخروج

- وفّر Intro Only وIntro + Outro عند طلبهما؛ 8 و9.5 ثانية مدتا المثال فقط. اربطهما بمدة القراءة والاستخدام.
- يمكن تكديس ثلاث طبقات مزاحة بنحو0.12 ثانية لإظهار موجات لون؛ استخدم ألوان العميل بدل افتراض الأبيض والذهبي. افحص ترتيب الطبقات وتوقيت قصها حتى لا تختفي الموجة تحت الأصل منذ البداية.
- استخدم الفقاعات الدقيقة عند نقطة بداية/نهاية القلم انتقائيًا؛ هي وصفة اختيارية وليست شرطًا لكل مخطوطة أو أنشودة.
- ميّز Logo Exit المقصود عن Outro هوية ينتهي على الشعار. إذا طلب المستخدم خاتمة ثابتة، اترك LOGO_MASTER ظاهرًا في الإطار الأخير؛ لا تورث ثانية فارغة من مثال خروج قديم.
- افصل الخلفية الداكنة الاختيارية من الكريمية؛ تفعيل طبقة داكنة أسفل Solid معتمة لا يجعلها مرئية.

## 7. افهم حدود قالب V08 المرفق

القالب مخصص لشعار سلمان النجار: 1920×1080، 30fps، ألوان بنية وذهبية، 19 جزءًا متجهيًا و5 مسارات ريشة ناعمة، وبناء كومبوزيشنين. بيانات الأصول داخله؛ لا يعتمد على PDF خارجي وقت التنفيذ. تشغيله يضيف عناصر للمشروع ويغيّر إعدادات اللون/GPU، ولا يحفظ ملف AEP أو يرندر تلقائيًا.

اقتبسه كمرجع هندسي خاص، لا كقالب تسليم عام جاهز. لاحظ قبل إعادة الاستخدام:

- إعداد Glass فيه يستخدم أرقامًا مفترضة وفشلًا صامتًا؛ استبدل هذا الجزء بمنهج الاكتشاف والتحقق السابق.
- مصدر Matte/Bump هو كومبوزيشن متحرك يضم الريشة والفقاعات؛ افصله عن LOGO_MASTER النظيف.
- كومبوزيشن الخروج ينتهي بخلفية فارغة تقريبًا في آخر ثانية. أبقِ ذلك فقط إذا كان خروج الشعار مقصودًا.
- تفعيل الخلفية الداكنة وحدها لا يكفي لأن الكريمية فوقها؛ عالج ترتيب الخلفيات أو العتامة.
- طبقات 3D في المستوى نفسه لا تحقق Parallax داخليًا. الكود لا يثبت Motion Blur لمجرد وجود كاميرا.
- لا يوجد داخله اختبار تغطية بكسلية مستقل أو نتيجة رندر؛ وعبارات 100% والمطابقة للدرس في تعليقاته ليست دليل تحقق.
- احتفظ باسمه التاريخي V08 دون خلطه بإصدار المهارة الجامع V15. لا تنقل README القديمة التي تزعم عدم إتاحة مستودع GitHub أو تحد قدرات النماذج بلا تحقق.

## 8. تحقّق قبل التسليم

افحص Syntax وES3 وتراصف vertices/inTangents/outTangents والقيم المحدودة والماتات وحدود الزمن والنصوص والألوان. اختبر Helpers الجديدة بمحاكاة مركزة إن لم يتوفر AE، وصرّح بأنها محاكاة. شغّل اختبار التغطية إذا أردت إعلان نسبته، وراجع داخل AE الترتيب الفعلي وشكل الريشة والانقطاع والحواف وتأثير Glass والإطار الأخير. لا تحوّل نجاح تحليل JavaScript إلى ادعاء تشغيل After Effects.

---

<a id="file-5"></a>

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

<a id="file-6"></a>

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

<a id="file-7"></a>

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

<a id="file-8"></a>

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

<a id="file-9"></a>

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

<a id="file-10"></a>

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

<a id="file-11"></a>

## references/nasheed-layout-and-i2v.md

# تنويع الأبيات والمشاهد وسير عمل I2V — V16

## نطاق الاستخدام

طبّق هذا المرجع على Style D عند طلب تنويع الأناشيد والقصائد أو تجهيز صور لتحريك I2V. حافظ على النص المعتمد والهوية ومزامنة الصوت وقواعد V14–V15. استعمل التوزيعات والوصفات عند خدمتها المعنى؛ لا تجعل التناوب دورة آلية تشتت القراءة.

## خمسة توزيعات مكانية

قِس حدود النص والرسم المرئية بـ`sourceRectAtTime`، واترك هوامش أمان ومسافة بين العنصرين. تعامل مع المراكز التالية كنقاط بداية نسبية من العرض W والارتفاع H، لا كإحداثيات مفروضة لكل مقاس. أعد ترتيب العناصر للعمودي بدل قص النسخة الأفقية.

| الوضع | مركز منطقة النص التقريبي | توزيع الصورة |
| --- | --- | --- |
| `CENTER_ONLY` | `(0.50W, 0.46H)` | تيبوغرافي أساسًا مع زخارف هوياتية خفيفة |
| `TEXT_LEFT` | `(0.28W, 0.45H)` | الرسم يمين الكادر |
| `TEXT_RIGHT` | `(0.72W, 0.45H)` | الرسم يسار الكادر |
| `TEXT_TOP` | `(0.50W, 0.22H)` | الرسم في النصف السفلي |
| `TEXT_BOTTOM` | `(0.50W, 0.73H)` | الرسم في النصف العلوي |

اضبط العرض الفعلي وطول البيت والوجهة داخل الرسم؛ حافظ على اتصال العربية وترتيب الكلمات حتى عندما يكون النص يسار الكادر. استخدم الأبيض أو الداكن أو النقش الخفيف وفق الهوية وخطة المشهد، وقدّم طلب المستخدم الخاص بالسماء والخلفية على التنويع.

## أربع وصفات لتحريك الأبيات

هذه وصفات إخراج وليست أربعة محركات برمجية جاهزة. لا تتضمن الحزمة المستوردة تعريفًا لدالة `buildVerseKineticBlock`؛ عند طلب التنفيذ ابنِها أو ابنِ الوظائف المكافئة وفحصها للمشروع.

- `BRACKET_MORPHER`: ارسم قوس الهوية بـTrim Paths ثم حوّله إلى خط تحت الشطر. طابق عدد رؤوس المسارات وترتيبها قبل Path Morph، أو استخدم مسارين متداخلين إذا اختلفت البنية. ارفع الشطر الأول بما يسمح بظهور الثاني، وحرّك لون التعبئة عند الحاجة؛ اسم Two-Tone Shift وصف للنتيجة ولا يكفي لتحديد خاصية AE.
- `GLOSSY_RIBBON`: ابنِ الحفر والشريط ولمعة المرور في طبقات منفصلة، مع ألفا نظيفة وفق مرجع المخطوطات واللمعة. لا تجعل اللمعة تحجب الحروف أو تغيّر اللون الدائم.
- `BANNER_CARD`: أظهر إطارًا أو بطاقة بزوايا مستديرة خلف البيت. اعتبر Roundness=32px قيمة بدء عند 1080p، وكيّفها مع المقاس والهوية. قِس النص قبل بناء البطاقة.
- `STAR_ACCENT`: أظهر نجمة أو علامة من هوية العميل عند الكلمة المهمة أو الشطر الثاني، خلف الحروف دون إعاقة القراءة. لا تستورد نجمة مؤسسة إلى هوية أخرى.

اختر وصفة لكل وحدة شعرية بحسب النبرة ومدة القراءة؛ استعمل السكون المقصود للأبيات الهادئة، وقلّل تزامن الحركات الثانوية مع دخول الكلمات المهمة.

## الإعادة الصوتية والتصعيد البصري

اربط كل تكرار مسموع برقم occurrence وتوقيت مستقلين، ولا تستنتج توقيته من النص وحده. نوّع اللقطة المكررة بإضافة معنى أو تغيير زاوية أو كشف تفصيل أو الانتقال من النص وحده إلى مشهد إنساني. مثال: تعريف الفكرة في `CENTER_ONLY` ثم عرض تطبيقها في `TEXT_RIGHT`. يمكن إبقاء التكوين أو العودة إلى موتيف بصري إذا خدم ذلك الإيقاع أو طلب المستخدم؛ تجنب إعادة لقطة كاملة تلقائيًا دون قرار إخراجي.

خطّط جدولًا: رقم اللقطة، البيت/الشطر كما اعتمده المستخدم، البداية والنهاية، occurrence، التوزيع، وصفة النص، فعل المشهد، وصلة اللقطة التالية. حافظ على المستوى الصوتي الأصلي؛ لا تضف SFX إلى Style D دون طلب.

## تجهيز مشاهد OmniFlash أو أداة I2V يختارها المستخدم

تعامل مع OmniFlash كوجهة اختارها المستخدم، لا كموصل مدمج أو خدمة تم التحقق من خصائصها. لا تدّع توليد فيديو فيها أو نجاح الاستبدال دون تشغيل فعلي. تحقّق من إمكاناتها الحالية إذا احتاج التنفيذ معرفة واجهتها أو إعداداتها.

1. أنشئ رسومًا نقطية خفيفة بمظهر فيكتور موحّد، بألوان العميل ودون أبيات أو نصوص مدمجة؛ أبقِ النص العربي طبقات AE مستقلة. لا تصف raster أو فيديو I2V بأنه فيكتور قابل لتعديل أجزائه. استخدم أداة توليد/تحرير الصور المتاحة للصور.
2. استخدم خلفية بيضاء صافية `#FFFFFF` عندما يكون هذا هو مسار الدمج المتفق عليه. إن احتاجت اللقطة خلفية داكنة أو ملابس بيضاء محفوظة، فضّل ألفا حقيقية أو فصل الرسم عن الخلفية بدل افتراض أن الأبيض قابل للإزالة بلا خسارة.
3. نظّم الأصول في `03_OmniFlash_Scenes` أو اسم الوجهة الفعلي، واربطها بأرقام اللقطات. أرفق `OMNIFLASH_PROMPTS_AND_SCENES_GUIDE.md` عند تسليم مشروع بهذا المسار، مع اسم المصدر والخرج، المقاس، المدة، FPS، وصف الحركة، قيود الهوية، وترتيب الربط في AE.
4. اكتب لكل لقطة حركة صغيرة محددة: فعل الشخصية، حركة ثانوية وكاميرا عند الحاجة، وثبات التكوين والوجوه والملابس والشعار. اطلب منع النصوص الجديدة والتشوهات والوميض، ثم راجع النتيجة بصريًا؛ البرومبت وحده لا يضمن ذلك.
5. جرّب `BlendingMode.MULTIPLY` فقط عندما يناسب الصورة والخلفية: هو دمج لوني لا استخراج ألفا، يغمّق الألوان ويُظهر الخلفية عبر المساحات البيضاء بما فيها الملابس. افحص النتيجة على الخلفية النهائية؛ لا تستخدمه افتراضيًا لكل المشاهد.
6. قبل `Replace Footage` طابق المقاس والمدة وFPS ونسبة البكسل والتوقيت. استبدال Footage مشترك قد يغيّر كل نسخه؛ افصل الأصل إذا كان الاستبدال يخص لقطة واحدة. أبقِ المصدر الثابت للرجوع، وراجع إعادة التوقيت والتأثيرات والألوان بعد الاستبدال. ميّز هذا المسار الإجرائي عن وجود زر أو تكامل مخصص مثبت.

## التحقق والتسليم

راجع القراءة وهوامش الأمان وتنوع اللقطات واستقرار الهوية والحواف وتوقيت الفيديو على الصوت. سجّل فحص البنية منفصلًا عن تشغيل AE أو خدمة I2V أو الرندر؛ لا تدّع إنجاز أحدها من كتابة الدليل وحده.

---

<a id="file-12"></a>

## references/packaging-and-windows-zip-rules.md

# قواعد بناء الحزمة المضغوطة وتوافق ويندوز (ZIP Packaging & Windows Compatibility Rules)

## نطاق التطبيق

طبّق قواعد JSX التالية على تسليم مشروع After Effects فقط. عند طلب ZIP للصور، ضمّن الصور النهائية المطلوبة وحدها وقدّم PDF الملاحظات بجواره وفق [الهوية والمراجعة العربية](brand-led-scene-review.md). عند تصدير المهارة نفسها، احفظ SKILL.md ومراجعها وقوالبها داخل مجلد مهارة واحد؛ لا تفرض ملف JSX تنفيذيًا في جذرها.

## لماذا قد يختفي ملف `.jsx` عند فك الضغط في بعض أجهزة Windows؟
1. مستكشف ويندوز المدمج (`zipfldr.dll`) قد يخفي أو يتجاهل الملفات التي تحتوي مساراتها الداخلية داخل الأرشيف على أحرف غير لاتينية إذا لم تتطابق أعلام UTF-8 مع صفحة الترميز المحلية، أو عندما يبحث المستخدم عن ملف `.jsx` في الجذر المباشر (`Root`) بينما يكون الملف مدفونًا داخل مجلد فرعي.
2. إذا قام المستخدم بنسخ ملف الـ`.jsx` يدويًا إلى مجلد آخر غير المجلد الذي يحتوي على `Assets/`، فإن مسار `scriptFolder.fsName + "/Assets/"` قد يفشل إن لم يكن هناك مسار احتياطي (`Fallback Path`).

## القواعد الإلزامية في كل تسليم (Mandatory Packaging Checklist)
1. **توفير ملف `.jsx` في جذر الـZIP مباشرةً وبجانب `Assets/`**:
   يجب أن يكون هيكل ملف الـ`.zip` مسطحًا وواضحًا في الجذر، مع اسم بديل للسكربت عند الحاجة، كالتالي:
   ```
   ├── PROJECT_CODE_V01.jsx                        # اسم إنجليزي بديل في الجذر
   ├── اسم_المشروع_بالعربي_V01.jsx                  # اسم عربي واضح في الجذر
   ├── README.md                                   # دليل التشغيل السريع بالعربية
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

## الحزمة الخفيفة وربط الصوت — V19

احفظ Assets مرة واحدة؛ الاسمان العربي والإنجليزي للسكربت بديلان متطابقان عند توفيرهما، وليسا مشروعين كاملين داخل مجلدين. لا تضع نسخة ثالثة من JSX داخل Assets بلا حاجة. افحص CRC ومسارات جميع المراجع، ولا تعتمد على تجاوز 10KB كدليل اكتمال الكود.

إذا كان الصوت موجودًا عند المستخدم واختار الربط المحلي، أرفق آلية اختيار واضحة وتعليمات الوصول إليه بدل نسخه. إذا طُلبت حزمة مستقلة قابلة للنقل فضمّن الأصول اللازمة المصرح بها. لا تحوّل الصوت أو تتجاوزه أو تختَر بديلًا بعد الإلغاء بصمت. أدرج فقط تعليمات وتقارير تساعد في تسليم المشروع الفعلي، ولا تفرض عدة ملفات ملاحظات على تغيير بسيط.

---

<a id="file-13"></a>

## references/prebuild-dialog-and-timed-nasheed.md

# نافذة الإعداد وتوقيت الأناشيد — V17

## المحتويات

1. نافذة الإعداد قبل البناء
2. التوقيت الفعلي والموال واللازمة
3. الطيف والشريط والمؤثرات
4. حدود مثال غروب العمر وفحوصه

## نافذة الإعداد قبل البناء

استعمل `templates/salman_prebuild_setup.jsx` كوحدة ScriptUI موثوقة. تُعرّف `SalmanMotionSetup` فقط؛ لا تبني مشروعًا عند تحميلها. أظهر النافذة قبل الاستيراد أو فتح Undo Group أو إنشاء كومب. الإلغاء يعيد `null` بلا تغيير للمشروع. عند طلب التشغيل غير التفاعلي، مرّر إعدادات موثقة وافحصها بدل فرض النافذة.

```javascript
var setupFile = new File(File($.fileName).parent.fsName + "/salman_prebuild_setup.jsx");
if (!setupFile.exists) throw new Error("ملف إعداد المشروع غير موجود");
$.evalFile(setupFile); // Trusted bundled code only; never use this to load arbitrary timing data.
var cfg = SalmanMotionSetup.show({
    width:1920, height:1080, fps:30, fontPS:"", motion:1, offset:0,
    required:{audio:true, images:true, timing:true, output:true},
    availableEffects:[{id:"progress", label:"شريط الوقت والعداد", enabled:false}]
});
if (!cfg) return; // Place inside the project's build function/IIFE.
// Validate timing with cfg.offset, actual media and the implemented effect branches here.
// Start Undo Group only after validation; close it in finally.
```

ضمّن ملف الوحدة بجوار JSX المشروع عند استخدام هذا النمط، أو ادمج الشيفرة الموثوقة في JSX واحد. المثال لا ينفّذ شريط التقدم؛ مرّر فقط IDs لميزات بناها السكربت فعلًا، واربط `cfg.effects[id]` بمسار التنفيذ. لا تعرض مفاتيح وهمية.

اجمع في النافذة: المقاس وFPS، اسم PostScript مع قائمة الخطوط المتاحة، إزاحة الكلمات، قوة الحركة، ملفات الصوت والصور والتوقيت، واسم مشروع إخراج جديد. اترك العنوان والاعتمادات فارغة حتى تتأكد من بيانات المشروع. استعمل أسماء وإعدادات العميل؛ لا تورّث ذهبية غروب العمر أو أسماء أصحابه أو صوره التسع.

الوحدة تدعم الأرقام العربية والفارسية وتتحقق من الحدود والملفات المطلوبة؛ المدخل الخاطئ يبقي النافذة مفتوحة لتصحيحه. مرّر `preflight:function(cfg){ return errors; }` لفحص بيانات التوقيت والوسائط قبل إغلاق النافذة؛ يجب أن تعيد قائمة أخطاء ولا تعدّل مشروع AE. عند الخطأ تبقى القيم للتصحيح. إذا فصلت التحقق عن النافذة فأعد فتحها بالقيم السابقة عند الفشل، قبل أي بناء. افحص قدرة الاستيراد الفعلية ومحتويات المجلد وملف التوقيت قبل البناء. وجود الملف وحده لا يثبت أنه صوت أو صورة صالحة. تحقّق من الخط بعد تطبيقه بالقراءة الراجعة، ولا تعتبر وجوده في القائمة إثباتًا لرصف العربية. افحص توفر خصائص RTL نفسها بدل الاعتماد على رقم إصدار AE فقط.

دوال القالب الدفاعي العام داخل IIFE؛ انسخها أو أعد تصديرها عمدًا عند البناء، ولا تفترض أن تحميله يكشفها كدوال عامة. إغلاق Undo Group في finally لا يتراجع تلقائيًا عن بناء جزئي فاشل؛ أبلغ بالمراحل التي اكتملت وأتح التراجع دون حذف مشروع المستخدم.

اربط جميع الإعدادات بالمخرجات: W/H/FPS للنص والكاميرا والكومب، offset للأشطر وعلاماتها، motion للحركة مع حساب Overscan، ومفاتيح المؤثرات بإنشائها. إذا أُلغي الحفظ فلا تدّع وجود AEP؛ لا تحفظ فوق مشروع موجود تلقائيًا.

## التوقيت الفعلي والموال واللازمة

استخرج ترتيب الأداء من الصوت الفعلي، بما فيه الموال والمدود واللازمة والفواصل والإعادات. قارن مدة الحاوية بمدة العينات المفكوكة عند اختلافهما. التعرّف الصوتي وVocal Bandpass قرائن للمحاذاة، ولا يثبتان حدود أشطر غنائية وحدهما؛ احتفظ بالنص الذي اعتمده المستخدم وراجع سمعيًا عند الإمكان. سمِّ أي توقيت غير متحقق منه مؤقتًا.

احتفظ بالبيانات مستقلة بصيغة JSON، مع `duration`, `fps`, `scenes`. لكل فترة: `id` اختياري فريد، `scene` رقم أصل يمكن تكراره، `start`, `end`, `kind`, و`layout` من توزيعات V16 أو `side` بقيمة LEFT/RIGHT لجهة النص. لكل شطر: `text`, `start`, `end` و`fixedTiming:true` اختياري للعناوين والاعتمادات المستثناة من إزاحة الكلمات. لا تخلط رقم الأصل برقم ظهور اللازمة.

```json
{"duration":12,"fps":30,"scenes":[
  {"id":"intro","scene":1,"layout":"CENTER_ONLY","kind":"intro","start":0,"end":2,"cues":[]},
  {"id":"verse-01","scene":2,"layout":"TEXT_TOP","kind":"verse","start":2,"end":12,
   "cues":[{"text":"النص المعتمد","start":3,"end":10}]}
]}
```

افحص المدد والتسلسل وعدم خروج الأشطر عن فتراتها **بعد تطبيق إزاحة المستخدم**. إذا انتقل شطر إلى مشهد آخر فعدّل فترة النص/المشهد أو حذّر واطلب تصحيح الإعداد داخل النافذة؛ لا تقصّ الشطر بصمت. اجعل علامات المراجعة تعكس الظهور الفعلي وتستثني fixedTiming بالطريقة نفسها. تحريك Marker وحده لا يعيد توقيت النص إلا إذا بنيت هذا الربط.

```bash
python scripts/validate_motion_project.py --timing timing.json --jsx Build_Project.jsx --offset 0
```

الفاحص المدمج، المطور من فاحص حزمة سلمان المرفقة، يقبل أيضًا JSON محاطًا بـ`(...)` في `.jsxinc` دون تنفيذه. يتحقق من خمسة layouts أو side، ومعرّفات الفترات، والإزاحة، والتغطية خلال إطار واحد. يسمح بالمقدمة الخالية من الكلمات وتكرار أصل الصورة. لا يقبل تداخل الأشطر في هذا المخطط؛ إذا طُلب تداخل مقصود فطوّر المخطط والبناء والفاحص معًا. عند إنشاء نسخة JSON بأزمنة فعلية بعد الإزاحة مرّر `--offset 0` للفاحص لتجنب تطبيق الإزاحة مرتين. فحص Node للصياغة لا يضمن ES3 أو صحة الـincludes أو تعبيرات AE. لا تشغّل ملف التوقيت بـ`$.evalFile`؛ استخدم محلل JSON موثوقًا أو ضمّن البيانات المدققة ككائن ثابت أثناء توليد JSX.

## الطيف والشريط والمؤثرات

أضف الطيف والدخان والذرات ولمعة الحروف وLens Flare بحسب الطلب والهوية. لا تجعلها واجبة لكل أنشودة أو مفعّلة كلها افتراضيًا. وجودها البصري لا يبرر تغيير تسجيل Style D أو إضافة SFX إليه دون طلب.

- اربط Audio Spectrum بطبقة الصوت الحقيقية بعد استقرار ترتيب MASTER، ثم تحقق من مرجع الطبقة. ميّز حساسية الرسم عن مستوى الصوت المسموع؛ لا تصطنع الاستجابة بعشوائية.
- افحص هوية كل خاصية ونوعها ووحدتها وحدودها في AE؛ خاصيتان عدديتان قد تجتازان الفحص النوعي مع اختلاف وظيفتهما. النوع وحده لا يثبت عنوان الخاصية. لا تنقل أرقام Spectrum أو Glass من مثال إلى إصدار آخر بلا تحقق. لا تفترض أن كل نسبة في AE تقع بين 0 و100؛ لا تقرأ minValue/maxValue دون hasMin/hasMax.
- حرّك تقدم الوقت خطيًا من مدة الكومب، واجعل التلاشي للدخول والخروج خاصية مستقلة. يجب أن يطابق العداد الزمن الفعلي؛ لا تطبق easing على تقدم الزمن.
- طبّق لمعة النص في فضاء طبقته وبحدوده المرئية، أو قيدها بألفا سليمة. راجع تراكم الشفافية والمزج على إطار نهائي قبل تقوية اللمعة أو الضباب.
- للصور الثابتة، مدّد precomp بذيل الانتقال بدل استخدام Time Remap ثم حذف جميع مفاتيحه. احسب Cover مع هامش حركة عند أقصى قوة كاميرا؛ لا تكتفِ بالحالة الافتراضية.
- استعمل Match Names المتحققة أولًا. إذا احتجت قراءة أسماء محلية فاحصرها في لغة معروفة مع تحقق الهوية، ولا تستبدل خاصية مجهولة بأول عددية. اجعل الخطأ يحدد المرحلة والطبقة والخاصية والوقت.

## حدود مثال غروب العمر وفحوصه

فُحصت الحزمة `Salman_Motion_Graphic_Final.zip` أثناء دمج V17: مثال Build_Nasheed.jsx يضم 18 فترة و37 شطرًا، لكنه مخصص لـ1920×1080 و30fps وتسع صور. لم يُنقل إلى قالبنا العام ولم تُنشر بياناته وكلماته واعتماداته كمشروع جديد.

أظهر فحصه الساكن قيودًا يجب تجنبها: قصّ الإزاحة عند حافة المشهد مع اختلاف العلامات عن ظهور الكلمات، وقراءة أول cue في مقدمة قد تكون خالية، ووضع الاعتمادات على كل فترة بلا كلمات، وتجاهل fps من البيانات. خصّص kind للمقدمة والخاتمة، وافحص cues قبل فهرستها، وطبّق بيانات المقاس والتوقيت بدل الثوابت.

اجتاز المثال فحص بيانات وصياغة، دون تشغيل AE أو سماع التسجيل في هذه المراجعة. مراجعة الفاحص أو وحدة النافذة بمحاكاة لا تثبت صحة الطيف أو شدة الضباب أو جودة الخط والرندر على جهاز المستخدم.

---

<a id="file-14"></a>

## references/reference-ledger-and-render-review.md

# تحليل المرجع ومراجعة الفيديو المشفر — V17

## المحتويات

1. سجل المرجع والتطابق المقصود
2. المراجعة المرحلية واستئناف العمل
3. أداة أوراق الإطارات
4. المصدر ونطاق الاستفادة

## سجل المرجع والتطابق المقصود

افحص كامل المدة ذات الصلة من المرجع، لا الافتتاح وحده. سجّل بيانات الفيديو والصوت، ووزع المراجعة على مقاطع قصيرة تغطي البداية والوسط والختام. خذ إطارات مؤرخة داخل اللقطات وحول الانتقالات، وراجع الحركة مع الصوت عند توفره؛ الأوراق الثابتة لا تثبت النعومة أو دقة الإيقاع.

أنشئ سجل لقطات: بداية ونهاية، العبارة، التكوين، الخط، مسار الحركة، منحنى التوقيت، الانتقال، وعلامة الصوت عند انطباقها. ثم استعمل مصفوفة للمقارنة:

| وقت المرجع | وقت المشروع | الصفة المطلوب حفظها | التغيير المقصود | إطار/مقطع التحقق |
| --- | --- | --- | --- | --- |
| زمن محدد | زمن محدد | إيقاع/حركة/توزيع | هوية العميل ونصه وأصوله | مسار الدليل |

استخرج القواعد البصرية من المرجع واستخدم أصول العميل. لا تجعل لوحة ألوان أو موكاب أو أسماء المرجع جزءًا من هوية العميل. لا تدّع مشاهدة فيديو لم تُفتح إطاراته أو سماع صوت لم يتوفر.

## المراجعة المرحلية واستئناف العمل

اختبر أصعب لقطة مبكرًا، ثم راجع نطاق اللقطة المعدلة ومعها الوصلتان المحيطتان. أنشئ نسخة صغيرة مع صوت عند مراجعة التوقيت، وإطارات كاملة الدقة لتدقيق العربية. بعد نجاح ذلك راجع النسخة المشفرة كاملة، مع عينات عند كل تغيير نص/انتقال وأول وآخر إطار. لا تعِد رندر المشروع كله بعد كل تغيير محلي بلا حاجة.

في المشاريع الطويلة، احتفظ بملف تقدم مقتضب يحدد المرحلة والملفات المعتمدة وآخر اختبار والخطوة التالية. افصل الأصول والمصادر والنتائج والكاش، واحتفظ بإصدارات بدل الكتابة فوق النسخة المعتمدة. دوّن مصدر الأصول والخطوط وترخيصها عند استقدام مواد خارجية، دون تضمين مفاتيح أو تسجيلات دخول.

صمّم العناصر العربية المتتابعة وفق ترتيب القراءة من اليمين إلى اليسار عند انطباقه؛ لا تعكس الشعار أو لقطة واجهة حقيقية. افحص الأرقام والأسماء اللاتينية وعلامات الترقيم. لا تعمم اتجاه الحركة على كل لقطة: اتجاه الشخصية والكاميرا ومعنى الانتقال قد يختلف، بينما يحافظ تسلسل المعلومات على القراءة.

عند بناء معاينة برمجية خارج AE، اجعل الإطار دالة للزمن مع عشوائية ببذرة ثابتة حتى تطابق لقطة المعاينة الزمن نفسه في الرندر. هذا خيار للمعاينة/الفيديو المطلوب، وليس تحويلًا تلقائيًا لمشروع AE المفتوح إلى Canvas أو MP4.

افحص الأدوات اللازمة للمسار المختار فقط. لا تثبّت حزمة نماذج أو موصلات أو تطلب مفاتيح خدمات أو تشترط صوت ElevenLabs لمجرد وجودها في مهارة مرجعية. استخدم الصوت النهائي المتاح؛ أبقِ تخطيطًا مؤقتًا موسومًا بوضوح إن لم يتوفر، ولا تفرض موافقات جديدة على عمل أذن به المستخدم.

## أداة أوراق الإطارات

أُضيفت أداة مستقلة مكتوبة لهذا الدمج، وليست نسخة من سكربتات الحزمة الثانية. تحتاج Python وPillow وffmpeg/ffprobe، وتقرأ فيديو محليًا مرندرًا من AE أو مصدر آخر:

```bash
python scripts/review_motion_render.py renders/final_v01.mp4 --out review/v01 --interval 2
python scripts/review_motion_render.py renders/final_v01.mp4 --out review/shot02_v01 --start 10 --end 18 --interval 0.25 --timing timing.json
```

تنتج أوراقًا مرقمة و`review_report.json` يذكر المقاس والمدة وFPS المتوسط ومسارات العينات وبيانات الصوت. تضيف `--timing` عينات حول حدود المشاهد والأشطر غير المزاحة، وتستخدم أزمنة JSON دون تشغيله؛ مرّر بيانات نهائية بعد الإزاحة إذا أردت مراجعة التوقيت المعدل. اختر مجلد إخراج جديدًا، ولا تنشئ أوراقًا ضخمة؛ الحد 600 عينة لكل نطاق.

الملصق يمثل زمن seek المطلوب، لا PTS المقاس لكل إطار؛ لا تدّع دقة إطار واحد من الورقة وحدها، خصوصًا مع VFR أو فيديو ذي دوران. راجع تشغيل الفيديو والحواف والعربية كاملة الدقة، وافحص PTS/تزامن الصوت بأدوات مخصصة عند الحاجة. الأداة لا تمنح تقييم جودة تلقائيًا ولا تنتج AEP.

راجع في الرندر: حدود النص والصور، اتجاه القراءة، عدم تغير الهوية، الاستقرار، الوصلات، شدة المؤثرات، دخول الطيف والشريط وخروجهما، العنوان والاعتمادات. افحص الصوت على التسجيل الحقيقي، ولا تغيّر مستواه أو تطبع الجهارة تلقائيًا دون حاجة ضمن طلب المشروع.

## المصدر ونطاق الاستفادة

اطُّلِع على الحزمة المرفقة `arabian-motion-video-director-v1.0.0.zip` وإصدار Arabian AI School المبني، بحسب NOTICE.md، على Motion Video Director لـMiftahul Islam Efaz. الحزمة تنص على دعم Claude Code وCodex وCursor؛ ليست مقصورة على Claude. المرجع يذكر:

© 2026 Arabian AI School. All rights reserved.

المصدر المعرّف في الحزمة: https://arabianaischool.com و https://instagram.com/arabianaischool . تُحفظ حقوق أصحابها؛ لم تُنسخ الحزمة أو سكربتاتها إلى المستودع العام. صيغت هنا تعليمات جديدة لتحليل المراجع والمراجعة التدريجية، مع الحفاظ على مسار سلمان وAE والعربية. لا يُفهم الاطلاع على README على أنه اختبار لتكامل Claude أو الخدمات المذكورة.

---

<a id="file-15"></a>

## references/soft-3d-continuous-transitions.md

# المجسمات الناعمة والوصلات المتصلة والكاميرا — V18

## المحتويات

1. نطاق الدرس وحالة اعتماد الحركة
2. لغة الرسم والخامات والارتكاز
3. تغيّر التدرج والإضاءة
4. الانتقالات التي تنشأ من العناصر
5. الكاميرا والواجهات والمنظور
6. هرم الحركة والتتابع والعوم والارتداد
7. تنفيذ القيم الزمنية في AE
8. المقارنة والتحقق والتسليم

## 1. نطاق الدرس وحالة اعتماد الحركة

استخدم هذا المرجع مع Style C للمشاهد المجسمة/متعددة المستويات، ومع Style B لعرض الشعار والواجهات. احتفظ بـStyle F للخرائط ووصفات L01–L17 وقواعد الهوية والتوقيت السابقة.

المصدر البصري: فيديو «سجام أثر الجمعيات الخيرية» المرفق في المحادثة، https://www.youtube.com/watch?v=I6pE8i2smkQ . النسخة المفحوصة نحو 46.08s، 640×360، 30fps. روجعت إطارات تغطي كامل المدة وعينات أكثر كثافة عند الوصلات؛ لم يُنجز هنا تحليل سمعي أو استعادة ملفات المشروع الأصلية. فرّق بين الصفة المرصودة، والآلية المحتملة، والوصفة المقترحة للتنفيذ. لا تستنتج برنامج النمذجة أو منحنيات المصدر من MP4 وحده.

أُنتجت دراسة «أثر الخير» 13s برسوم أصلية منفصلة ومعاينة برمجية خارج AE. أشاد المستخدم بالجهد وذكر أن الحركة لم تصل تمامًا لما يريد. احفظها كتجربة أولية قابلة للمراجعة، ولا تجعل منحنياتها أو سرعاتها أو درجة التشابه معيارًا معتمدًا. لا تنسب عدم الرضا إلى قيمة محددة لم يذكرها المستخدم؛ قارِن أقصر مقطع مناسب ثم اضبطه وفق ملاحظته المتاحة.

## 2. لغة الرسم والخامات والارتكاز

وحّد نعومة الحواف والخامة ومصدر الضوء وتشبّع اللون وحجم التفاصيل. استعمل مظاهر Soft 3D/Clay-like عندما يخدمها المرجع والهوية، مع مبانٍ أو شخصيات مبسطة وأيقونات داخل كرات ذات إضاءة عريضة. لا تكتفِ بإعادة اللون إذا اختلفت الخامات والنسب والتكوين.

ثبّت الكتلة على سطح أو ظل تماس أو قاعدة مقصودة. افصل ظل التماس عن الظل المحيط الناعم، وتجنب هيئة القطع الطافية عند المباني والأقدام. الكرات والأيقونات يمكن أن تعوم بقصد؛ حافظ على اختلافها عن العناصر المرتكزة.

قسّم الأصول إلى خلفية/قاعدة/عنصر رئيسي/أيقونات/واجهة/بطاقات/نص/شعار، مع مرجع مركب ومقياس ومحاور ثابتة. جهّز الأجزاء المحجوبة عند احتمال كشفها بالكاميرا. إذا لزم تحريك الرأس واليدين والتعبير، اطلب أو أنشئ أجزاء/Rig أو مجسمًا مناسبًا. PNG منفصل يتحرك كطبقة، ولا يعطي تفاصيل قابلة لإعادة النمذجة أو دورانًا يكشف جوانب غير مرسومة.

طبّق ألوان العميل على كل عنصر مع تدرجات وإضاءة مشتقة منها. البنفسجي والوردي في سجام وصف للمرجع، وليس لوحة افتراضية للتدريبات العقلية أو لكل عميل. احتفظ بملف المؤسسة في V14 عند انطباقه، وبالسماء الفاتحة إذا طلبها المستخدم.

## 3. تغيّر التدرج والإضاءة

اكتب لكل لقطة حالات البداية/الذروة/النهاية: اللون العلوي والسفلي، موضع البقعة المضيئة، امتدادها، شدة اللون، ودور النص فوقها. في المرجع رُصد انتقال بين خلفية فاتحة متدرجة وشاشة داكنة وأبيض؛ هذا لا يثبت أن Gradient Stops حُرّكت داخل المصدر. اعتبر تحريك نقاط التدرج أو ألوانه وصفة مقترحة عندما يلزم.

- حرّك الإضاءة ببطء أثناء ثبات القراءة، وغيّر حالة اللون مع الوصلة أو تحوّل المعنى؛ اجعل معدلها أبطأ من الحركة الرئيسية.
- حافظ على استمرارية اللون عبر الوصلة: تطابق حافة المسحة أو لون البطاقة مع أول إطار من العالم التالي. تجنب ومضة بيضاء أو قفزة تباين غير مقصودة.
- افصل خلفية اللون عن النص والعناصر عند الحاجة، وابنِ حالات متصلة بدل قطع طبقة Solid بين لونين. يمكن استخدام Ramp بعد التحقق من خصائصه الفعلية، أو صفائح خلفية موثقة ومزجها؛ لا تخمّن فهارس المؤثرات.
- احسب الفروق بين المزج اللوني وتحريك الضوء: crossfade بين صورتين قد يخلق أشباحًا ولا يساوي حركة نقطة إضاءة. اختبر منتصف الانتقال، والنطاق اللوني وعمق المشروع لمنع banding أو احتراق الضوء.
- اجعل ألوان النص والواجهة مقروءة في جميع حالات الخلفية، ولا تقلب الهوية لمجرد التنويع.

## 4. الانتقالات التي تنشأ من العناصر

اختر لكل وصلة عنصرًا يقودها، ودوّن حالته قبل الانتقال وبعده، ثم افحص موضع الاهتمام والاتجاه والسرعة والحجم. لا تحرك العالم كله بانتقال واحد افتراضيًا.

| الوصفة | التنفيذ المقترح | نقطة الفحص |
| --- | --- | --- |
| إعادة توزيع داخل اللقطة | انقل المدينة/العنصر إلى جانب وقلّل حجمه باعتدال لفتح مساحة نص أو شخصية؛ نسّق الأحجام والمحاور | استمرارية الارتكاز وعدم تزاحم النص والأيقونات |
| مسحة مائلة | Shape/Mask متسع يتجاوز زوايا الكادر ويكشف الخلفية التالية، مع لون رابط | لا شقوق أو زوايا مكشوفة عند منتصف المرور |
| نافذة تتحول إلى وصلة | أمل الشاشة ثم لفّها أو ادفعها خارج الإطار ليظهر العالم التالي من خلفها | لا تتحول بطاقة رقيقة إلى مجسم سميك بلا أصل أو وجه خلفي |
| دائرة تتسع إلى خلفية | كبّر كتلة/قناعًا دائريًا حتى تغطي قطر الإطار كله، ثم أدخل المحتوى التالي | احسب نصف قطر التغطية من موضع المركز وأبعد ركن، لا من عرض الكادر فقط |
| محتوى يتغير داخل بطاقة مستمرة | أبقِ إطار الواجهة متصلًا، وحرّك بطاقاتها أو نموذج التسجيل في Precomp مقصوص | الحركة داخل النافذة منفصلة عن ميل النافذة ككل |
| تداخل الشخصية والمنتج | أبقِ الشخصية أمام الحاسوب، وأدخل واجهة أكبر خلفها مع ترتيب عمق مفهوم | لا تحجب الواجهة الوجه أو العنوان ولا تطفو القدم/المكتب |
| كشف الشعار على الأبيض | اجمع أجزاء أصل الشعار أو اكشفها بأقنعة، ثم ثبات مقروء وإظهار الدعوة | لا تفكك اتصال العربية أو تعِد رسم شعار العميل بالتخمين |

التوقيت والتراكب والـMotion Blur قيم قابلة للضبط حسب المرجع والفعل. اترك فترة تُفهم فيها نتيجة الانتقال قبل بدء الحركة الكبيرة التالية.

## 5. الكاميرا والواجهات والمنظور

خطّط ثلاث حركات مستقلة: Rig العالم، وتحويل طبقة الواجهة، وتحريك عناصرها الداخلية. اختر أيّها يخدم اللقطة؛ لا تسمِّ تحريك كل PNG كاميرا ثلاثية الأبعاد حقيقية. حافظ على نقطة اهتمام مستقرة أثناء عرض تفاصيل الواجهة، واستعمل دفعة أو ميلًا محدودًا لخلق العمق.

- للواجهة: استخدم Precomp في طبقة 3D، مع كاميرا فعلية وموضع/Zoom معلومين. افصل بطاقات الصفحة والنصوص عندما يلزم تغييرها أو تحريكها؛ صورة واجهة واحدة لا تمنح ذلك.
- راجع Anchor وParent والمسافة ونوع الكاميرا؛ ثبّت محاور الحركة قبل توليد المفاتيح. قدّم إعداد Rig المصحح الموجود في القالب، ولا تورّث إزاحة مركز شاشة مختلفة.
- افصل camera dolly عن Zoom وScale. يمكن أن تتشابه في لقطة أمامية، لكنها تختلف في المنظور والـParallax والمساحات المكشوفة. لا تقلب العمق لمجرد تبديل اتجاه الحركة.
- أظهر السمك والجوانب فقط إذا وُجدت هندسة أو طبقات مهيأة لها. عند الميل الشديد افحص الوجه الخلفي والحواف وجودة الرسم وقراءة النص.
- احسب Overscan عند جميع النهايات والذروة وأقصى قوة حركة في نافذة الإعداد. لا تعتبر قيمة 1.06 كافية لكل أصل أو زاوية أو نسبة أبعاد.
- أعد توزيع العمودي بنفسه؛ لا تعتمد على اقتصاص الأفقي. مقاس المرجع المفحوص لا يحدد دقة إخراج المشروع، ولا يمنح تكبيره تفاصيل أصلية إضافية.

## 6. هرم الحركة والتتابع والعوم والارتداد

افصل الحركة إلى رئيسية تعرّف الفعل، وثانوية تتبعها، وحركة محيطية خفيفة تستمر بعد الاستقرار. اجعل للمدينة/المنتج وزنًا وزمن توقف، وللكرات عومًا أصغر، وللنص فترة قراءة. لا تجعل كل الطبقات تتموج أو ترتد بنفس الطور.

جدول بدء اختياري للاختبار، وليس قياسًا مستخرجًا من سجام: دخول 0.45–0.9s، وتأخير بين الأيقونات 0.1–0.25s، وعوم بسعة نحو 0.3–1% من ارتفاع الإطار ودورة 3–6s. صغّر هذه القيم أو ألغها للمشاهد الهادئة أو متى نافست المعنى.

معامل `backOut` ليس نسبة التجاوز مباشرة؛ قِس ذروة الناتج بالبكسل أو بنسبة الحجم، ثم عدّل المعامل. ميّز Overshoot وحيدًا عن oscillating bounce. استخدم تجاوزًا خفيفًا لحجم/موضع أيقونة عندما يلائمها الوزن، ثم استقرارًا حاسمًا؛ لا تورّث مرونة الكرات إلى المبنى أو كاميرا القراءة. لا تستخدم العشوائية كبديل لتصميم المسار. نوّع الطور والسعة بشكل حتمي، واجعل غلاف العوم يدخل ويخرج بلا قفزة.

أبقِ قيمة الفيزياء/الموضع منفصلة عن القيمة المقيدة: منحنى back قد يتجاوز 1 للموضع أو الحجم؛ قيد Opacity إلى 0–100 وألوان RGB إلى 0–1. لا تقيد منحنى الموضع نفسه فتزيل الارتداد المطلوب، ولا تسمح بمقياس سالب دون قصد.

عند تعديل «قوة الحركة» وضّح ما تضربه: سعة الانحراف والزوايا/العوم، لا مواضع النص المستقرة أو نقاط الوقوف النهائية تلقائيًا. اختبر القيمة الافتراضية والقصوى، ولا تجعل قيمة واحدة تكبّر كل شيء بلا تمييز.

## 7. تنفيذ القيم الزمنية في AE

استعمل `templates/salman_motion_timing_helpers.js` عند الحاجة إلى منحنيات وقيم قابلة للتكرار. يعرّف `SalmanMotionTiming` دون تعديل المشروع، ويقدّم `unit`, `smooth`, `outCubic`, `backOut`, `lerp`, `color`, `floatOffset`, `positiveZoom`, `sampleTimes`. هو حساب قيم فقط؛ ليس محرك مشهد/شخصية أو رندرًا جاهزًا.

```javascript
var T = SalmanMotionTiming;
var u = T.unit(t, enterStart, 0.7);
var x = T.lerp(startX, endX, T.backOut(u, 1.1));
var y = baseY + T.floatOffset(t, floatStart, floatEnd, 5, 0.25, 0.8);
var fade = Math.max(0, Math.min(100, 100 * T.outCubic(u)));
var colors = T.color(startRGB, endRGB, T.smooth(u));
```

القيم في المثال تُحسب عند زمن t معلوم. لتوصيلها بخصائص AE، حوّلها إلى مفاتيح أو تعبيرات متوافقة ثم افحصها؛ لا تضع كائن namespace في تعبير لم يُضمّن تعريفه. استخدم جمع المصفوفات مكونًا مكونًا وفق قواعد V8. مزج color حساب لقنوات المصدر، وليس ضمانًا لتدرّج إدراكي أو إدارة ألوان متطابقة بين البرامج.

ابنِ عينات زمنية مع بداية ونهاية اللقطة ولحظات التماس والتحول عبر `sampleTimes(start,end,fps,stride,events)`. تُدمج الأزمنة المتطابقة عدديًا ضمن سماحية صغيرة، وتطبق ميزانية 20000 على الناتج المجمّع. أحداث إضافية يمكن أن تقع بين الإطارات؛ قرّبها صراحةً إذا كان المخطط يتطلب ذلك. ابدأ بمفاتيح قليلة وأضف حول الانحناءات/التغيرات السريعة؛ لا تحوّل كل خاصية إلى آلاف المفاتيح تلقائيًا.

إذا كانت القيم المأخوذة تشمل easing مسبقًا، ابدأ باستيفاء Temporal LINEAR بين العينات؛ لا تضف easing كاملًا ثانيًا إلى كل مفتاح. افحص المماسات المكانية لتمنع Auto-Bezier من انحناء المسار أو زحزحة الثبات. أخذ عينات كل إطارين/ثلاثة قد يقرب الحركة لكنه لا يثبت التطابق مع المرجع أو AE. احتفظ ببيانات واحدة ونظام إحداثيات وترتيب تحويلات معلوم للمعاينة والمشروع.

## 8. المقارنة والتحقق والتسليم

قارن ثلاث حالات لكل حركة: قبلها، وذروة السرعة/التجاوز، وبعد الاستقرار، مع مشاهدة النطاق بالسرعة الفعلية عند توفر الأداة. راجع أقصر لقطة ذات صلة بملاحظة المستخدم قبل إعادة بناء العمل كله. افصل تقييم الرسم والإضاءة عن توقيت الحركة؛ الأصول الأفضل وحدها لا تصلح تسارعًا غير مناسب.

راجع خاصةً: تأطير النص وقت إعادة التوزيع، تماس العناصر بالقاعدة، تمايز أطوار العوم، ذروة الارتداد، حواف المسحة، منتصف تغير التدرج، قراءة الشاشة عند أقصى ميل، ونهاية الشعار. طابق الصوت على التسجيل الفعلي إن توفر؛ لا تدّع ذلك من إطارات صامتة.

المعاينة المبرمجة خارج AE دراسة مرئية مفيدة، لكنها لا تثبت تشغيل JSX أو تطابق منظور الكاميرا والخط والمزج داخل AE. سمِّ PNG نقطيًا، وميّز النص الأصلي القابل للتحرير عن الكلمات المرسومة داخل واجهة. لا تنقل كل مفاتيح الدراسة أو قوالبها الخاصة إلى المهارة كحل نهائي مقبول. احفظ المشاهد والمواد الخاصة بالمشروع خارج مستودع المهارة العام، وانشر الوصفات والأدوات العامة فقط.

---

<a id="file-16"></a>

## references/spatial-arena-camera-and-ui.md

# Style G — الساحة الموحدة والكاميرا ذات المرحلتين وواجهات الخدمات — V19

## المحتويات

1. نطاق المسار والفرق عن الأنماط السابقة
2. ما أضافته حزم V10 وV11 والمشروعات المرفقة
3. هندسة العالم والجيمبال والبارالاكس
4. تخطيط المحطات ومسار الكاميرا ومجال الرؤية
5. ملكية التحريك ودورة حياة الطبقات
6. وصفات الواجهات والمدارات والشعار
7. إعادة التخطيط للمقاسين والأداء والصوت
8. استخدام الأدوات والتحقق
9. قيود محددة في المصادر المفحوصة

## 1. نطاق المسار والفرق عن الأنماط السابقة

استخدم Style G عندما يطلب المستخدم بيئة واحدة تتحرك فيها الكاميرا بين محطات: إعلان خدمات، متجر، تطبيق، أو أنشودة حوارية في فضاء متصل. المقصود بالتفاعل هنا محاكاة مرئية لواجهات وتأشير وكتابة واستجابة؛ لا تدّع وجود تطبيق قابل للنقر أو إدخال المستخدم ما لم تبنِ ذلك صراحة.

سمّت الحزمتان المستوردتان هذا المسار Style F. في المهارة الحالية F هو مشهد الخرائط والخطاف والتجول المتعامد؛ احفظه وأدرج الساحة الجديدة تحت G. احتفظ بـA–F وبوصفات L01–L17 ومراجع V14–V18. استخدم Precomps للتنظيم داخل العالم عند ملاءمتها، مع الحفاظ على عمق العناصر المطلوب؛ لا تفسر مطلب الساحة كحظر لكل Precomp أو لكل قطع إخراجي مقصود.

## 2. ما أضافته حزم V10 وV11 والمشروعات المرفقة

V10 أوسع شرحًا: محطات XYZ، جيمبال مزدوج، انسحاب يكشف مجموعات، غوص ونفق كلمات، مرور أمام حافة قريبة، بوابات دائرية، بطاقات ملمسية وشبكات خدمات. V11 أقصر في SKILL.md لكنه يحتفظ بمعظم المراجع والقالب السابق، ويضيف دقة معاينة Quarter ودالة دورة حياة بسيطة؛ يتوسع نصه في الحركة الحية والتخطيط المزدوج والشعار الموحد. ليس كل اسم دالة مذكور فيه تنفيذًا مرفقًا: القالب لا يتضمن بعض بُناة الشعار/المدار/الحركة، وتستدعي إضافات البطاقات فيه دوال هندسية أو reveal غير معرّفة داخله. لا تستبدل القالب الحالي به مباشرةً.

راجعنا شفرة المنتجين والأصول فعلًا، لا README وحده:

| المنتج | البنية الفعلية في JSX | ما يستفاد منه |
| --- | --- | --- |
| أنشودة يا أبتي V03 | 118s، 60fps، 14 محطة ST00–ST13، نسختان، تباعد Z نموذجي 3800، ودورة حياة للطبقات المرئية | التخطيط المتجاوب، مدارات الميداليات، الحوار، كتابة الدفتر، وخاتمة الشعار المتماسكة |
| روف V02 داخل ملفات اسمها V01 | 34s، 60fps، 15 محطة، مسار XYZ حتى نحو 26920 | ثلاثية الخطاف ثم كشفها، بطاقات خدمات، جوال وشارات، شرائح، استمارات، نفق قيمة ثم Bento |

حذف المستخدم الصوت عمدًا من الحزمتين؛ لم تُقارن المدد أو الأشطر بالأداء المسموع. لا تستنتج أن توقيت أي منهما صالح لتسجيل جديد، ولا تعِد إرفاق صوت خاص بالمشروع في مستودع المهارة. لم تتضمن الحزمتان رندرًا أو AEP؛ فحص الشفرة والأصول ليس مشاهدة للحركة داخل AE.

## 3. هندسة العالم والجيمبال والبارالاكس

ابنِ هرمًا واضحًا:

- `MASTER_CAM_POS_CTRL`: موضع مركز الجولة في العالم XYZ.
- `MASTER_CAM_ORBIT_GIMBAL`: ابن المتحكم السابق، موضعه المحلي صفر، ويدير X/Y/Z.
- `MAIN_CAMERA`: ابن الجيمبال، بموقع محلي `[0,0,-distance]` واتجاه معلوم وAuto Orient معطل إذا كان هذا تصميم الـRig.
- `ST_nn`: Null ثلاثي الأبعاد مستقل في العالم لكل محطة؛ اجعل الأصول والنصوص والبطاقات أبناء له بإحداثيات محلية.

ضع Anchor للـNulls عند الصفر، ثم عيّن المواضع المحلية بعد الربط لتجنب تعويض parent غير المقصود. افصل Camera Zoom عن distance؛ قيم متساوية لهما قد تعطي تحجيمًا أماميًا مألوفًا، لكن لا تجعلهما مترادفين. تدوير الجيمبال يحرك موضع الكاميرا الفعلي حول مركزه؛ موضع POS_CTRL وحده ليس موضع العدسة عند الدوران.

داخل المحطة وزّع البطاقة والنص والرموز على مستويات Z مختلفة مناسبة للمسافة واللقطة. أمثلة المصادر: وجه البطاقة نحو +60، والنص نحو -40..-100، والشارات نحو -140..-240؛ هذه قيم مشروع لا معيار عام، وإشارة العمق تعتمد على اتجاه الكاميرا. افحص التعارض وZ-fighting والوجه الخلفي وتداخل الألفا. ترتيب أسماء الطبقات وحده لا يحل تقاطع الطائرات في الفضاء.

بطاقة ذات وجه وخلفية مزاحة تمثل 2.5D وليست مجسمًا مغلقًا؛ عند الميل الشديد قد تنفصل الحواف. PNG ذو bevel مرسوم يظل لوحة نقطية مسطحة قابلة للتحويل، لا هندسة قابلة لتعديل سماكتها.

## 4. تخطيط المحطات ومسار الكاميرا ومجال الرؤية

أنشئ جدولًا: رقم المحطة، موضوعها، world XYZ، حدود الأصول والطبقات الأمامية، بداية الظهور، فترة القراءة، بدء المغادرة، نهاية العرض، ونوع الوصلة. أنشئ جدول كاميرا مستقلًا: الزمن وXYZ والزوايا والهدف البصري وحالة السرعة.

اختر من وصفات المصدر بحسب المعنى:

- زيارة ثلاث أفكار عن قرب ثم `Pull-Back Overview` يكشف علاقتها؛ أبقها حية حتى نهاية الكشف الجماعي.
- `Whip-Pan + Z-Dive` للانتقال القطري بين خدمات، مع تهدئة كافية عند هدف القراءة.
- `Foreground Edge Fly-Past` بمحاذاة حافة بطاقة قريبة، مع أصل يمتد خارج الكادر ولا يقطع العدسة بلا قصد.
- `Z-Tunnel` بين كلمات القيمة أو البطاقات؛ تجنب عبور سطح مصمت غير مخطط له.
- اقتراب من تفصيل ثم انسحاب لكشف شبكة أو عناصر محيطة.
- غوص ختامي من Bento إلى الشعار، مع بوابة/لون رابط وثبات نهائي واضح.

ميّز حركة متصلة بمتحكم واحد عن حركة ذات سرعة مستمرة. تصفير السرعة عند كل Key كما في المصدر ينتج وقفات؛ اختر نقاط hold وtravel صراحة، ونسّق مماسات الموضع والزوايا بدل تطبيق ease نفسه على كل نقطة. Gaussian Blur في المنتجين نبضات موقّتة مسبقًا رغم تسمية velocity-linked؛ لا تصفها بأنها تستجيب فعليًا لسرعة الكاميرا. إن أردت ذلك احسب سرعة المسار واربط الشدة بها مع حد أعلى، وافصل هذا عن Motion Blur الأصلي وإعداد shutter.

**إخلاء مجال الرؤية:** `ΔZ=3800` و`distance=2666.67` أرقام مثال، وليست برهانًا على اختفاء المحطة السابقة. افحص موضع العدسة واتجاهها الفعليين وحدود المحطة في camera space أثناء الحركة والارتداد والانسحاب. عند كاميرا أمامية بسيطة يكون امتداد نصف الكادر نحو `distance * width/(2*zoom)` أفقيًا؛ أدخل الدوران والمقياس والأصول الأمامية في التقدير الفعلي.

الأداة `sphereInFrustum` تعطي اختبار تقاطع محافظًا لكرة إحاطة في camera space موجب Z أمام العدسة، ولا تفحص الحجب أو هندسة المجسم أو far clipping داخل AE. ظهور النتيجة false يمكن أن يساعد في الاستبعاد ضمن هذه الفرضيات؛ النتيجة true لا تثبت ظهور بكسلات. لا تستخدمها على world XYZ مباشرةً دون تحويل للكاميرا.

## 5. ملكية التحريك ودورة حياة الطبقات

طبّق inPoint/outPoint وOpacity على الطبقات المرئية نفسها. انتهاء Null الأب أو تلاشيه لا يعني انتهاء أو تلاشي أبنائه. اختر دورة حياة بحسب الغرض: خروج نهائي، تداخل بين محطتين، كشف جماعي، أو زيارة لاحقة. في الزيارات المتعددة اجمع فترات الشفافية في مخطط واحد؛ outPoint واحد لا يمثل فترات متقطعة.

افصل reveal rig عن idle rig وعن الخروج عند الحاجة، أو اجمع قيمها صراحة. لا تجعل دالة العوم تستبدل زاوية تصميم أساسية أو تكتب مفاتيح Position الخاصة بالدخول بلا قصد. أضف sway حول الزاوية المعتمدة، مع envelope يعود إلى الصفر، واحفظ فترات السكون المقصود وفق V18. المدار ليس إلزاميًا حول كل عنصر أو حول كل آية/بيت.

اجعل لكل خاصية مالكًا واحدًا للجدول النهائي. مثال خطير في المصدر: دالة lifecycle تضع Opacity=100 قرب نهاية المحطة، ثم يضيف مسار اللمعة تلاشيًا إلى صفر مبكرًا؛ يعود الخط للظهور تدريجيًا بسبب المفتاح القديم. حدّد timeline كاملًا للخط المؤقت دون مفتاح hold=100 لاحق، أو احذف/استبدل المفاتيح المتعارضة عمدًا قبل التسليم.

لا تجعل عمر الطبقة ينتهي قبل وصول الكاميرا إذا احتاجت الوصلة استمرارها، ولا تُبقها أمام العدسة بعد انتهاء دورها. راجع قبل/عند/بعد المغادرة، وعند الانسحاب الذي يعيد محطات سابقة للمنظر.

## 6. وصفات الواجهات والمدارات والشعار

| الوصفة | التطبيق القابل للتعميم | شرط التنفيذ |
| --- | --- | --- |
| إطار تحديد حي | مستطيل native بمقابض زوايا، مع reveal/Trim مناسب وحركة حول لوحة التصميم | Shape paths قابلة للتحريك، ومحاور مشتركة تمنع انزياح الإطار عن البطاقة |
| جوال وشارات خارجة | جوال أمامي مع pills على مستويات Z مستقلة | PNG الجوال لا يعطي دورانًا خلفيًا حقيقيًا؛ النص على الشارات مستقل |
| شرائح عرض | صف/مكدس بطاقات مع تغير موضع وزاوية متتابع وختم نتيجة | لا تسمِّ ترتيب keyframes عابرًا carousel كاملًا دون دورة أو تحكم منفذ |
| شبكات سوشيال | بطاقات 2×2 وطبقات ردود فعل منفصلة | تأخير وتباين مرئيان مع احترام وقت القراءة |
| تأشير الاستمارة | مسار checkmark مرسوم native وتحريك Trim End | لا تتطلب تفاعل نقر فعلي، ولا تغيّر بيانات واجهة معتمدة بلا طلب |
| دفتر وقلم يكتب | مسار كتابة واحد يقود stroke reveal ورأس القلم | استخرج رأس القلم من تقدم المسار/جدول عيناته نفسه؛ تحريكه مستقلًا قد لا يطابق الخط |
| مدارات حية | حلقات native مع Trim ودوران/نقاط تتبع مسار | فرّق بين دوران حلقة ونقاط مثبتة بها وبين orbit ثلاثي الأبعاد حقيقي |
| Bento | شبكة خدمات بتتابع RTL، خلفها لوح موحد ثم غوص إلى الخاتمة | رتبها للمقاس الحقيقي وقياس النص، لا باسم عدد الصفوف فقط |
| بوابة دائرية | قرص ملون يتسع ليخفي وصلة أو Track Matte يكشف العالم التالي | القرص الممتلئ ليس ثقبًا/بوابة مجوفة؛ اختر النوع ومدة بقائه وانتهاء عرضه |

في البوابة الأمامية غير المائلة، احسب نصف قطر تغطية أبعد ركن من موقع مركز الدائرة؛ استخدم `coverRadius`. ثم حوّل حجم الشاشة إلى العالم عند العمق المعني، وافحص المنظور إذا مالت الدائرة. لا تنقل Scale=2800/3200% دون حساب، ولا تترك القرص يحجب كل المحطات التالية.

**خيار الشعار المتماسك:** ضع Base/Wings داخل rig واحد مع مواضع نسبية ثابتة، وأضف trace محيطي مؤقت ثم ظهور الجسم وتتابع تفاصيله. هذا خيار ضمن Style B، لا حظر عام على L01–L17 أو split-slide الذي يطلبه المستخدم. راجع كل مسارات الأصل، بما فيها الأجزاء العليا والنقاط؛ مركز كل نجمة ومحورها يجب أن يحفظا موضعها أثناء scale. outline Trim Paths لا يساوي مسار ريشة داخليًا، ولا يثبت وجود رأس شعاع/Glow أو دوران للنجوم إذا لم يُبرمج. احفظ أصل العميل وهويته ولا تنشر هندسته الخاصة داخل قالب عام.

## 7. إعادة التخطيط للمقاسين والأداء والصوت

ابنِ العمودي بتراص مناسب، والأفقي بتوزيع جانبي للنص والرسم. لشبكة من ستة عناصر ابدأ بعمودين×ثلاثة صفوف في العمودي وثلاثة أعمدة×صفين في الأفقي، مع ترتيب عربي من اليمين. هذه نقطة بدء تقاس مع الهوامش والهوية، لا فرضًا لكل مشروع. أعد ضبط القرب/الميل وعدد العناصر المقروءة لكل لقطة.

احسب Cover للخلفيات من أبعاد الأصل الفعلية: `max(compW/sourceW, compH/sourceH)` ثم هامش الحركة اللازم. تكبير كاميرا أفقي أو استعمال خلفية طولية بنسبة ثابتة لا يعادل إعادة تخطيط متجاوب. افحص أيضًا الألفا وحواف الأصل؛ حجم ملف PNG وحده لا يثبت امتلاءه المرئي.

وفر دقة معاينة Quarter/Half اختيارية للمشروعات الثقيلة. لا تضمن السلاسة بمجرد `[4,4]`، وراجع العربية والتفاصيل عند Full. احفظ إعدادات المعاينة واستعدها عند الحاجة، واضبط Render Settings إلى الجودة/الدقة المطلوبة عند الإخراج؛ لا تجعل Current Settings يمرر معاينة منخفضة إلى الرندر النهائي دون انتباه.

استورد الصوت المحلي بعد اختيار المستخدم والتحقق من نوعه ومدته وقبل بناء التوقيت النهائي. الإلغاء يعني إلغاء الاختيار؛ لا تستورد تسجيلًا آخر تلقائيًا بعده إلا إذا اختار المستخدم مسار البحث البديل. اسمح ببناء بصري موسوم بلا صوت عندما يُطلب ذلك. في Style D احفظ التسجيل الأصلي ولا تضف SFX دون طلب؛ في الإعلانات افحص ألا تُشغّل master SFX والمسارات المنفردة ذاتها معًا فتضاعف المؤثرات.

سلّم حزمة بجذر واضح وAssets مرة واحدة، مع JSX عربي واسم إنجليزي بديل عند الحاجة. اجعل تضمين الصوت أو ربطه محليًا وفق طلب المشروع وإمكانية نقله؛ الحزمة الخفيفة لا تعني حذف أصل ضروري بلا وسيلة ربط. استخدم رقم إصدار موحدًا في اسم ZIP وJSX والكومب والتعليقات ورسالة النجاح.

## 8. استخدام الأدوات والتحقق

`templates/salman_spatial_arena_helpers.js` يعرّف namespace عامًا دون تنفيذ مشروع عند التحميل. يتضمن:

- `createGimbal`, `createStation`: هرم الكاميرا ومحاور المحطات المحلية، مع أخطاء صريحة عند غياب خاصية لازمة.
- `applyCameraTour`: تطبيق جدول عينات `[time,x,y,z,rx,ry,rz]` على متحكم المسار والجيمبال مع رفض التعارض، ومفاتيح LINEAR ومماسات موضع صفرية. احسب easing والوقفات في العينات عبر دوال V18 أو صمّمها في AE؛ الدالة لا تخترع مسارًا ولا تحول جدول محطات خشنًا إلى حركة ناعمة تلقائيًا.
- `windowLayer`: نافذة عرض ومخطط Opacity صريح للطبقة المرئية. يرفض Opacity ذي مفاتيح/تعبير مملوك مسبقًا لتمنع التعارض؛ اجمع الجدول بنفسك، ولا تستعمله بدل ضبط الأبناء.
- `card`, `selectionFrame`: بطاقات ذات وجه/خلفية ومقابض native، مع إعادة جلب المراجع بعد addProperty. تضيف الدوال البنية فقط ولا تبني كل reveal/orbit/portal.
- `bentoPositions`: مواضع شبكة تبدأ من اليمين؛ اختر الأعمدة وأضف موضع النص والعمق المناسبين.
- `coverRadius`, `sphereInFrustum`: حسابات هندسية محدودة الفرضيات، لا محاكي AE.
- `previewResolution`: ضبط 1/2/4 مع الإخفاق الصريح عند قيمة غير مدعومة.

حمّل ملف الوحدة الموثوق أو ادمج تعريفه في JSX المشروع. افحص المدخلات والأصول قبل استدعاء الدوال التي تنشئ طبقات، واستعمل Undo Group وfinally. اختبر جلسة قصيرة بمحطتين وoverview وبوابة قبل مشروع طويل. لا تنقل بيانات أو توقيت العميل كقيم افتراضية عامة. عند إضافة مسارات native استخدم حارس Bezier الحالي، وعند إضافة حركات القيم استعمل دوال V18 مع مالك واحد لكل خاصية.

افحص الشفرة والبيانات والأصول، ثم شغّل AE وارندر الفترات الصعبة عند توفره. عدم توفر الصوت يمنع الحكم على التزامن، وعدم توفر رندر يمنع تأكيد خلو المنظر من الحجب أو القص. لا تحوّل نجاح Node أو mock إلى نتيجة «100% Editable» أو رندر ناجح.

## 9. قيود محددة في المصادر المفحوصة

- روف: 15 محطة في الشفرة رغم بعض تعليقات 14؛ ملفات V01 تحتوي VERSION_CODE V02. وسيطا inTime/outTime في station null لا يُطبّقان، وreveal لا يُنهي معظم الطبقات المرئية. التخطيط الأفقي يغير التكبير أكثر مما يعيد ترتيب العناصر، والخلفية الطولية عند نسبته تصبح أضيق من 1920.
- الأنشودة: دوال lifecycle تُستخدم فعلًا على النصوص والأصول، وتُعاد صياغة الحوار وBento للمقاسين. حركة livingMotion تستبدل Y/Z rotation المطلوبين بقيم متناوبة بدل إضافتها إلى الزاوية الأصلية. المدار من -35° إلى165° يساوي 200°، لا دورة 360° كما في تعليق المصدر.
- الشعار: الجسم يضم القاعدة والجناحين؛ trace يتناول القاعدة والجناح السفلي فقط. لا يوجد في الشفرة شعاع ذو رأس أو Glow أو مفاتيح دوران لكل نجمة رغم بعض الأوصاف، مع تعارض الشفافية المذكور أعلاه. لا تنقل هذا القصور إلى وصفة الشعار العام.
- القالب المستورد: يذكر SKILL.md وظائف لا يعرّفها القالب. احتفظ بالتقنيات كدروس واستخدم وحدات مكتملة أو اكتب الدوال المطلوبة، بدل إعلان وجود محرك جاهز.
- الرسوم: 21 PNG في الأنشودة و29 في روف شاملة الخلفيات؛ فُك ترميزها وفُحصت مسارات الاستيراد، والسكربتات اجتازت فحص الصياغة دون تنفيذ. لم يُنتج AEP أو رندر أو استماع متزامن ضمن هذه المراجعة.

مرجع نوعي للخصائص: [Property.propertyValueType](https://ae-scripting.docsforadobe.dev/property/property/#propertypropertyvaluetype). خصائص COLOR في AE تتطلب أربعة مكونات RGBA؛ استعمل نوع الخاصية الفعلي ولا تخلطها مع TextDocument.fillColor ذي RGB.

---

<a id="file-17"></a>

## templates/mp3_vocal_onset_analyzer.py

```python
"""
Acoustic MP3/WAV Vocal-Onset Analyzer (250Hz - 3400Hz Bandpass Filter) for Style D
(Spiritual Nasheed & Poetic Kinetic Typography Montage).
Returns a sampled RMS envelope as alignment evidence, not word or verse timestamps.
The bandpass does not separate vocals from overlapping instruments or noise.
"""
import subprocess
import wave
import struct
import math

def extract_vocal_envelope(audio_path, sr=16000, hop_sec=0.02):
    """
    Uses ffmpeg bandpass (250Hz-3400Hz) and returns a sampled RMS energy envelope.
    Default hop is 20 ms; no transcription, word alignment or native AE verification.
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

<a id="file-18"></a>

## templates/salman_calligraphy_glass_shine_v08_template.jsx

```javascript
/* ==========================================================================
 * مشروع تحريك شعار «سلمان النجار» (Salman Al-Najjar Calligraphy Logo) — V02
 * مستخرج 100% كمسارات فيكتور أصلية (19 طبقة Shape Layer Bezier) من ملف:
 * "شعاري فيكتور.pdf"
 * مع تطبيق كامل لتقنيات درس اللمعة الزجاجية للمصمم حسام مخلافي:
 * https://www.youtube.com/watch?v=EnXQl0nrg68
 *
 * المزايا الحركية والبصرية المنفذة في هذا السكربت:
 * 1. تحويل جميع أجزاء الشعار الـ 19 (مقطع سلمان، كاسة النون، القوس الدائري الكبير،
 *    مقطع البجل، اللام الأخيرة، النقاط الماسية الـ 3، والحركات الزخرفية الـ 11)
 *    إلى طبقات Shape Layers فيكتور أصلية 100% قابلة للتعديل وبألوان الشعار الأصلية.
 * 2. رسم كل حرف وحركة عبر مسار وسطي مخصص (Centerline Trim Paths + Alpha Matte)
 *    يتتبع اتجاه قلم الخطاط العربي بدقة.
 * 3. تحريك ديناميكي للحروف أثناء الرسم وبعده (انسياب الموقع Position Glide +
 *    التفاف تدريجي للزوايا Rotational Uncurl + ارتداد مرن Elastic Bounce للنقاط
 *    والتشكيل + تنفس حركي مستمر Living Calligraphic Float لجميع أجزاء الشعار).
 * 4. تطبيق التدرج اللوني الثلاثي التتابعي (3 نسخ مزاحة زمنياً بتأثير Fill:
 *    أبيض ناصع -> ذهبي دافئ مطابق للون التشكيل -> ألوان الشعار الأصلية) مع قص
 *    النسختين السفليتين بعد اكتمال الرسم.
 * 5. بناء كومبوزيشن اللمعة المائلة (Mask Feather + Turbulent Displace مع تحريك
 *    نقطة الـ Offset ديناميكياً من الأعلى للأسفل) وحصرها داخل حدود الشعار بـ Alpha Matte.
 * 6. إنشاء طبقة البروز البيضاء المخفية لشعارك (Hidden White Bump Map) وربطها
 *    بتأثير CC Glass المزدوج (Surface -> Bump Map) مع تفعيل Outer Glow.
 * ========================================================================== */

(function () {

    /* ----------------------------------------------------------------------
     * 1. الدوال الدفاعية الأساسية (Defensive ExtendScript ES3 Helpers)
     * ---------------------------------------------------------------------- */
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

    function zeroSpatialTangents(prop, keyIndex) {
        if (!prop) return;
        try {
            var vt = prop.propertyValueType;
            if (vt === PropertyValueType.TwoD_SPATIAL) {
                prop.setSpatialTangentsAtKey(keyIndex, [0, 0], [0, 0]);
            } else if (vt === PropertyValueType.ThreeD_SPATIAL) {
                prop.setSpatialTangentsAtKey(keyIndex, [0, 0, 0], [0, 0, 0]);
            }
        } catch (e) {}
    }

    function resetShapeAnchorPoint(shapeLayer) {
        if (!shapeLayer) return;
        var tr = safeProp(shapeLayer, "ADBE Transform Group");
        safeSetVal(safeProp(tr, "ADBE Anchor Point"), [0, 0, 0]);
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

    function applyAlphaTrackMatte(targetLayer, matteLayer) {
        if (!targetLayer || !matteLayer) return;
        try {
            matteLayer.moveBefore(targetLayer);
        } catch (eMove) {}
        try {
            if (typeof targetLayer.setTrackMatte === "function") {
                targetLayer.setTrackMatte(matteLayer, TrackMatteType.ALPHA);
                matteLayer.enabled = false;
                return;
            }
        } catch (eModern) {}
        try {
            targetLayer.trackMatteType = TrackMatteType.ALPHA;
            matteLayer.enabled = false;
        } catch (eLegacy) {}
    }

    /* ----------------------------------------------------------------------
     * 2. دالة بناء مسارات الفيكتور والـ Trim Paths (Dual-Schema Bezier Builder)
     * ---------------------------------------------------------------------- */
    function addBezierSubpathsGroup(shapeLayer, groupName, subpathsInput, fillCol, strokeCol, strokeW, trimStartTime, trimEndTime) {
        var rootVec = safeProp(shapeLayer, "ADBE Root Vectors Group");
        if (!rootVec || !subpathsInput) return null;
        var subpathsArray = subpathsInput.subpaths ? subpathsInput.subpaths : (subpathsInput.length ? subpathsInput : [subpathsInput]);
        if (!subpathsArray.length) return null;

        var hasTrim = (trimEndTime !== undefined && trimEndTime !== null && trimEndTime > 0);

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
        if (hasTrim) {
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
            var isCl  = (spData.closed !== undefined) ? (spData.closed === true) : (spData.c === true);
            var spGroup = safeProp(contents2, "Subpath_" + (sIdx + 1));
            var pathProp = safeProp(spGroup, "ADBE Vector Shape");
            if (pathProp && verts && verts.length >= 2) {
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
            safeSetVal(safeProp(st2, "ADBE Vector Stroke Line Join"), 2);
        }
        if (hasTrim) {
            var trm2 = safeProp(contents2, "Bezier_Trim");
            var trimEndProp = safeProp(trm2, "ADBE Vector Trim End");
            if (trimEndProp) {
                var span = trimEndTime - trimStartTime;
                if (span >= 0.65) {
                    var tA = trimStartTime + span * 0.28;
                    var tB = trimStartTime + span * 0.68;
                    trimEndProp.setValueAtTime(trimStartTime, 0);
                    trimEndProp.setValueAtTime(tA, 44);
                    trimEndProp.setValueAtTime(tB, 68);
                    trimEndProp.setValueAtTime(trimEndTime, 100);
                    applySafeEase(trimEndProp, 1, 0, 82, 0, 82);
                    applySafeEase(trimEndProp, 2, 48, 72, 48, 72);
                    applySafeEase(trimEndProp, 3, 38, 72, 38, 72);
                    applySafeEase(trimEndProp, 4, 0, 86, 0, 86);
                } else {
                    trimEndProp.setValueAtTime(trimStartTime, 0);
                    trimEndProp.setValueAtTime(trimEndTime, 100);
                    applySafeEase(trimEndProp, trimEndProp.nearestKeyIndex(trimStartTime), 0, 86, 0, 86);
                    applySafeEase(trimEndProp, trimEndProp.nearestKeyIndex(trimEndTime), 0, 86, 0, 86);
                }
            }
        }
        resetShapeAnchorPoint(shapeLayer);
        return grp2;
    }

    /* ----------------------------------------------------------------------
     * 3. دالة تحريك الحروف والتشكيل أثناء الرسم وبعده (Dynamic Character Motion)
     *    تجمع بين:
     *    - Trim Paths Reveal عبر طبقة الماسك المربوطة كـ Child بالحرف
     *    - حركة انسياب ودوران وارتداد مرن للحرف نفسه أثناء الكتابة
     *    - موجة طفو وتنفس حركي مستمر بعد الاستقرار
     * ---------------------------------------------------------------------- */

    /* ----------------------------------------------------------------------
     * تقنيات درس «تحريك مخطوطة الريشة» (أحمد محمد — OKKmAb9e1nA) المتطابقة 100% مع مسار الحروف:
     * 1. تعبير الارتداد الفيزيائي المرن (Inertial Bounce / Excite: 15, 20, 50)
     * 2. المسار الدليلي المنحني السلس (Tapered Tracer 18px + Thin Echo Line 6px)
     *    المرسوم على المنحنى الانسيابي لكل حرف (smooth_tracer_subpath) بدون أي زوايا حادة،
     *    مع استدقاق الطرفين (Stroke Taper = 85%) ومطاردة Start للـ End وسرعة صعود/نزول متغيرة.
     * 3. الدوائر المتناثرة في بداية حرف السين ونهاية حرف الراء (Ink Burst Micro-Bubbles).
     * 4. ومضة التوهج المؤقتة لحظة ولادة النقاط والتشكيل (Transient Birth Glow Flash).
     * ---------------------------------------------------------------------- */
    function applyInertialBounceExpression(prop, ampVal, freqVal, decayVal) {
        if (!prop || !prop.canSetExpression) return;
        var a = ampVal || 15;
        var f = freqVal || 20;
        var d = decayVal || 50;
        var expr = [
            "var n = 0;",
            "if (numKeys > 0) {",
            "    n = nearestKey(time).index;",
            "    if (key(n).time > time) { n--; }",
            "}",
            "if (n === 0) {",
            "    value;",
            "} else {",
            "    var t = time - key(n).time;",
            "    if (t > 0 && t < 1.1) {",
            "        var v = velocityAtTime(key(n).time - thisComp.frameDuration * 0.1);",
            "        var amp = " + (a / 1000.0) + ";",
            "        var freq = " + (f / 10.0) + ";",
            "        var decay = " + (d / 10.0) + ";",
            "        var s = Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t);",
            "        if (value instanceof Array) {",
            "            var out = [];",
            "            for (var i = 0; i < value.length; i++) {",
            "                out[i] = value[i] + v[i] * amp * s;",
            "            }",
            "            out;",
            "        } else {",
            "            value + v * amp * s;",
            "        }",
            "    } else {",
            "        value;",
            "    }",
            "}"
        ].join("\n");
        try { prop.expression = expr; } catch (eExpr) {}
    }

    function buildSingleSmoothTracer(comp, artLayer, item, layerSuffixEn, layerSuffixAr, strokeW, strokeCol, leadTime, trailDuration, opPct, includeOutro, outStart, outEnd) {
        if (!item.smooth_tracer_subpath) return null;
        var tLayer = comp.layers.addShape();
        tLayer.name = item.name_en + "_" + layerSuffixEn + " | " + layerSuffixAr + "_" + item.name_ar;
        addBezierSubpathsGroup(
            tLayer,
            "Smooth_Tracer_Curve",
            item.smooth_tracer_subpath,
            null,
            strokeCol,
            strokeW,
            null,
            null
        );

        var rootVec = safeProp(tLayer, "ADBE Root Vectors Group");
        var grp = safeProp(rootVec, "Smooth_Tracer_Curve");
        var cont = safeProp(grp, "ADBE Vectors Group");
        var stProp = safeProp(cont, "Bezier_Stroke");
        var taperGrp = safeProp(stProp, "ADBE Vector Stroke Taper");
        if (taperGrp) {
            safeSetVal(safeProp(taperGrp, "ADBE Vector Taper Start Length"), 85);
            safeSetVal(safeProp(taperGrp, "ADBE Vector Taper End Length"), 85);
            safeSetVal(safeProp(taperGrp, "ADBE Vector Taper Start Width"), 5);
            safeSetVal(safeProp(taperGrp, "ADBE Vector Taper End Width"), 5);
        }

        var trm = cont.addProperty("ADBE Vector Filter - Trim");
        trm.name = "Tracer_Trim";
        var cont2 = safeProp(safeProp(safeProp(tLayer, "ADBE Root Vectors Group"), "Smooth_Tracer_Curve"), "ADBE Vectors Group");
        var trm2 = safeProp(cont2, "Tracer_Trim");
        var sProp = safeProp(trm2, "ADBE Vector Trim Start");
        var eProp = safeProp(trm2, "ADBE Vector Trim End");

        var t0 = Math.max(0, item.t_start + leadTime);
        var t1 = item.t_end + leadTime;
        var span = t1 - t0;

        if (eProp && sProp) {
            /* دخول بسرعات صعود ونزول متغيرة + مطاردة Start للـ End */
            eProp.setValueAtTime(t0, 0);
            eProp.setValueAtTime(t0 + span * 0.28, 44);
            eProp.setValueAtTime(t0 + span * 0.68, 68);
            eProp.setValueAtTime(t1, 100);

            sProp.setValueAtTime(t0 + trailDuration, 0);
            sProp.setValueAtTime(t0 + span * 0.28 + trailDuration, 44);
            sProp.setValueAtTime(t0 + span * 0.68 + trailDuration, 68);
            sProp.setValueAtTime(t1 + trailDuration, 100);

            if (includeOutro && outStart && outEnd) {
                var oSpan = outEnd - outStart;
                eProp.setValueAtTime(outStart - 0.04, 100);
                eProp.setValueAtTime(outEnd - trailDuration, 0);
                sProp.setValueAtTime(outStart - 0.06, 100);
                sProp.setValueAtTime(outStart + oSpan * 0.15, 65);
                sProp.setValueAtTime(outEnd, 0);
            }

            var ke, ks;
            for (ke = 1; ke <= eProp.numKeys; ke++) applySafeEase(eProp, ke, 0, 82, 0, 82);
            for (ks = 1; ks <= sProp.numKeys; ks++) applySafeEase(sProp, ks, 0, 82, 0, 82);
        }

        var tr = safeProp(tLayer, "ADBE Transform Group");
        safeSetVal(safeProp(tr, "ADBE Position"), [item.target_pos[0], item.target_pos[1]]);
        tLayer.parent = artLayer;
        safeSetVal(safeProp(tr, "ADBE Position"), [0, 0]);
        safeSetVal(safeProp(tr, "ADBE Scale"), [100, 100]);
        safeSetVal(safeProp(tr, "ADBE Rotate Z") || safeProp(tr, "ADBE Rotation"), 0);
        safeSetVal(safeProp(tr, "ADBE Opacity"), opPct);
        tLayer.outPoint = includeOutro ? (outEnd + 0.15) : (t1 + trailDuration + 0.08);
        tLayer.moveBefore(artLayer);
        return tLayer;
    }

    function createSmoothAlignedTracerPair(comp, artLayer, item, includeOutro, outStart, outEnd) {
        if (!item.smooth_tracer_subpath) return;
        /* 1. اللاين الدليلي الأساسي المنحني السلس (Tapered Primary Tracer 18px) */
        buildSingleSmoothTracer(
            comp, artLayer, item,
            "TRACER_MAIN_18PX", "مسار_الريشة_الأساسي",
            18.0, [0.776, 0.612, 0.427],
            -0.06, 0.18, 82,
            includeOutro, outStart, outEnd
        );
        /* 2. اللاين الرفيع المرافق (Echo Thin Line 6px — الدقيقة 17:35 في درس أحمد محمد) */
        buildSingleSmoothTracer(
            comp, artLayer, item,
            "TRACER_ECHO_6PX", "الخيط_الرفيع_المرافق",
            6.0, [0.259, 0.129, 0.043],
            0.05, 0.16, 90,
            includeOutro, outStart, outEnd
        );
    }

    function createCalligraphyInkBubbles(comp, colMain, colGold) {
        var bubbleSpecs = [
            /* عند انطلاق حرف السين في «سلمان» يمين الشعار (66.0, 36.0 -> [1261, 458]) */
            { name: "BUBBLE_START_01", t0: 0.04, t1: 0.68, p0: [1265, 455], pMid: [1325, 405], p1: [1365, 425], r: 12, col: colGold },
            { name: "BUBBLE_START_02", t0: 0.09, t1: 0.74, p0: [1255, 475], pMid: [1315, 515], p1: [1350, 495], r: 8,  col: colMain },
            { name: "BUBBLE_START_03", t0: 0.14, t1: 0.78, p0: [1240, 440], pMid: [1285, 385], p1: [1320, 395], r: 6,  col: colGold },
            /* عند نهاية حرف الراء الأخير في «النجار» أقصى يسار الشعار (-2.8, 51.2 -> [559, 613]) */
            { name: "BUBBLE_END_01",   t0: 1.55, t1: 2.25, p0: [565, 610],  pMid: [500, 565],  p1: [455, 590],  r: 13, col: colGold },
            { name: "BUBBLE_END_02",   t0: 1.62, t1: 2.32, p0: [555, 625],  pMid: [490, 665],  p1: [445, 645],  r: 9,  col: colMain },
            { name: "BUBBLE_END_03",   t0: 1.68, t1: 2.38, p0: [580, 595],  pMid: [525, 535],  p1: [480, 545],  r: 6,  col: colGold }
        ];

        var bLayer = comp.layers.addShape();
        bLayer.name = "00_INK_BURST_BUBBLES | الدوائر_المتناثرة_بداية_ونهاية_المخطوطة";

        var bIdx;
        var rootB = safeProp(bLayer, "ADBE Root Vectors Group");
        for (bIdx = 0; bIdx < bubbleSpecs.length; bIdx++) {
            var grp = rootB.addProperty("ADBE Vector Group");
            grp.name = bubbleSpecs[bIdx].name;
            var cont = safeProp(grp, "ADBE Vectors Group");
            var el = cont.addProperty("ADBE Vector Shape - Ellipse");
            el.name = "Bubble_Ellipse";
            var fl = cont.addProperty("ADBE Vector Graphic - Fill");
            fl.name = "Bubble_Fill";
        }

        var rootB2 = safeProp(bLayer, "ADBE Root Vectors Group");
        for (bIdx = 0; bIdx < bubbleSpecs.length; bIdx++) {
            var sp = bubbleSpecs[bIdx];
            var grp2 = safeProp(rootB2, sp.name);
            var cont2 = safeProp(grp2, "ADBE Vectors Group");
            var el2 = safeProp(cont2, "Bubble_Ellipse");
            var fl2 = safeProp(cont2, "Bubble_Fill");
            safeSetVal(safeProp(el2, "ADBE Vector Ellipse Size"), [sp.r * 2, sp.r * 2]);
            safeSetVal(safeProp(fl2, "ADBE Vector Fill Color"), sp.col);

            var vTr = safeProp(grp2, "ADBE Vector Transform Group");
            var vPos = safeProp(vTr, "ADBE Vector Position");
            var vSc  = safeProp(vTr, "ADBE Vector Scale");
            var tMid = (sp.t0 + sp.t1) * 0.5;
            if (vPos) {
                vPos.setValueAtTime(sp.t0, [sp.p0[0] - 960, sp.p0[1] - 540]);
                vPos.setValueAtTime(tMid,  [sp.pMid[0] - 960, sp.pMid[1] - 540]);
                vPos.setValueAtTime(sp.t1, [sp.p1[0] - 960, sp.p1[1] - 540]);
                applySafeEase(vPos, 1, 0, 80, 0, 80);
                applySafeEase(vPos, 2, 0, 75, 0, 75);
                applySafeEase(vPos, 3, 0, 85, 0, 85);
            }
            if (vSc) {
                vSc.setValueAtTime(sp.t0, [0, 0]);
                vSc.setValueAtTime(tMid,  [115, 115]);
                vSc.setValueAtTime(sp.t1, [0, 0]);
                applySafeEase(vSc, 1, 0, 84, 0, 84);
                applySafeEase(vSc, 2, 0, 84, 0, 84);
                applySafeEase(vSc, 3, 0, 84, 0, 84);
            }
        }
        resetShapeAnchorPoint(bLayer);
        var trB = safeProp(bLayer, "ADBE Transform Group");
        safeSetVal(safeProp(trB, "ADBE Position"), [comp.width * 0.5, comp.height * 0.5]);
        bLayer.outPoint = 2.50;
        return bLayer;
    }

    function applyBirthGlowFlash(targetLayer, item, t0, t1) {
        if (item.kind !== "dot" && item.kind !== "major_tashkeel" && item.kind !== "hook_tashkeel") return;
        /* ومضة لونية سريعة لحظة ظهور التشكيل ثم تعود فوراً إلى اللون الأصلي الدقيق للتشكيل
         * بدون استخدام ADBE Glo2 الدائم الذي كان يترك لوناً أصفر فاقعاً على التشكيلات */
        try {
            var rootVec = safeProp(targetLayer, "ADBE Root Vectors Group");
            var grp = safeProp(rootVec, "Calligraphy_Vector");
            var cont = safeProp(grp, "ADBE Vectors Group");
            var fl = safeProp(cont, "Bezier_Fill");
            var colProp = safeProp(fl, "ADBE Vector Fill Color");
            if (colProp) {
                var flashCol = (item.kind === "dot")
                    ? [0.65, 0.45, 0.25]
                    : [0.98, 0.90, 0.72];
                colProp.setValueAtTime(t0, flashCol);
                colProp.setValueAtTime(t0 + 0.14, flashCol);
                colProp.setValueAtTime(t1 + 0.12, item.fill_col);
                applySafeEase(colProp, 1, 0, 80, 0, 80);
                applySafeEase(colProp, 2, 0, 80, 0, 80);
                applySafeEase(colProp, 3, 0, 85, 0, 85);
            }
        } catch (eFlash) {}
    }

    function buildAnimatedLogoElement(comp, item, includeOutro) {
        var artLayer = comp.layers.addShape();
        artLayer.name = item.name_en + " | " + item.name_ar;
        addBezierSubpathsGroup(artLayer, "Calligraphy_Vector", item.art_subpaths, item.fill_col, null, 0, null, null);

        var tr = safeProp(artLayer, "ADBE Transform Group");
        var posProp = safeProp(tr, "ADBE Position");
        var rotProp = safeProp(tr, "ADBE Rotate Z") || safeProp(tr, "ADBE Rotation");
        var scProp  = safeProp(tr, "ADBE Scale");
        var opProp  = safeProp(tr, "ADBE Opacity");

        var tx = item.target_pos[0];
        var ty = item.target_pos[1];
        var t0 = item.t_start;
        var t1 = item.t_end;
        var dur = t1 - t0;
        var tOver = t1 + Math.min(0.24, dur * 0.32);
        var tSettle = tOver + 0.22;

        /* حساب توقيت الخروج العكسي (Outro Timing):
         * تخرج الحليات والتشكيل أولاً (6.15s..7.40s)، ثم النقاط (6.45s..7.55s)،
         * ثم الحروف الرئيسية بترتيب عكسي لدخولها (6.55s..8.30s) */
        var outStart = 6.80 - (t0 * 0.38);
        var outDur   = Math.max(0.48, dur * 0.88);
        if (item.kind === "hook_tashkeel" || item.kind === "major_tashkeel") {
            outStart = 6.18 + (item.id % 5) * 0.08;
            outDur   = 0.55;
        } else if (item.kind === "dot") {
            outStart = 6.45 + (item.id - 6) * 0.10;
            outDur   = 0.52;
        }
        var outEnd = outStart + outDur;

        /* 1. تحريك الموقع (Position Glide Intro + Living Float + Smooth Glide Outro) */
        if (posProp) {
            posProp.setValueAtTime(t0, [tx + item.dx, ty + item.dy]);
            posProp.setValueAtTime(t1, [tx - item.dx * 0.12, ty - item.dy * 0.12]);
            posProp.setValueAtTime(tOver, [tx + item.dx * 0.04, ty + item.dy * 0.04]);
            posProp.setValueAtTime(tSettle, [tx, ty]);

            var floatAmpY = (item.kind === "main_letter") ? 4.5 : 6.5;
            var floatAmpX = (item.kind === "main_letter") ? 2.5 : 3.5;
            var s1 = Math.sin(item.float_phase);
            var c1 = Math.cos(item.float_phase);
            posProp.setValueAtTime(3.60, [tx + floatAmpX * s1, ty - floatAmpY * c1]);
            posProp.setValueAtTime(5.20, [tx - floatAmpX * s1 * 0.8, ty + floatAmpY * c1 * 0.8]);

            if (includeOutro) {
                posProp.setValueAtTime(outStart - 0.12, [tx, ty]);
                posProp.setValueAtTime(outStart + outDur * 0.22, [tx - item.dx * 0.10, ty - item.dy * 0.10]);
                posProp.setValueAtTime(outEnd, [tx + item.dx * 0.95, ty + item.dy * 0.95]);
            } else {
                posProp.setValueAtTime(7.50, [tx, ty]);
            }

            var kp;
            for (kp = 1; kp <= posProp.numKeys; kp++) {
                applySafeEase(posProp, kp, 0, 84, 0, 84);
                zeroSpatialTangents(posProp, kp);
            }
        }

        /* 2. تحريك الدوران (Rotational Uncurl Intro + Breathing Tilt + Reverse Curl Outro) */
        if (rotProp) {
            rotProp.setValueAtTime(t0, item.rot0);
            rotProp.setValueAtTime(t1, item.rot_over);
            rotProp.setValueAtTime(tOver, -item.rot_over * 0.35);
            rotProp.setValueAtTime(tSettle, 0);

            var rotBreath = (item.kind === "main_letter") ? 0.85 : 2.2;
            var dirSign = (item.id % 2 === 0) ? 1.0 : -1.0;
            rotProp.setValueAtTime(3.60, rotBreath * dirSign);
            rotProp.setValueAtTime(5.20, -rotBreath * 0.7 * dirSign);

            if (includeOutro) {
                rotProp.setValueAtTime(outStart - 0.12, 0);
                rotProp.setValueAtTime(outStart + outDur * 0.22, item.rot_over * 0.85);
                rotProp.setValueAtTime(outEnd, item.rot0 * 0.90);
            } else {
                rotProp.setValueAtTime(7.50, 0);
            }

            var kr;
            for (kr = 1; kr <= rotProp.numKeys; kr++) {
                applySafeEase(rotProp, kr, 0, 84, 0, 84);
            }
        }

        /* 3. تحريك الحجم والارتداد المرن (Elastic Scale Intro + Anticipation Pop-Out Outro) */
        if (scProp) {
            if (item.kind === "dot" || item.kind === "hook_tashkeel") {
                scProp.setValueAtTime(t0, [0, 0]);
                scProp.setValueAtTime(t0 + dur * 0.55, [item.sc_over, item.sc_over]);
                scProp.setValueAtTime(t1, [88, 88]);
                scProp.setValueAtTime(tOver, [106, 106]);
                scProp.setValueAtTime(tSettle, [100, 100]);
            } else {
                scProp.setValueAtTime(t0, [item.sc0, item.sc0]);
                scProp.setValueAtTime(t1, [item.sc_over, item.sc_over]);
                scProp.setValueAtTime(tOver, [98.5, 98.5]);
                scProp.setValueAtTime(tSettle, [100, 100]);
            }

            if (includeOutro) {
                scProp.setValueAtTime(outStart - 0.10, [100, 100]);
                if (item.kind === "dot" || item.kind === "hook_tashkeel") {
                    scProp.setValueAtTime(outStart + outDur * 0.28, [128, 128]);
                    scProp.setValueAtTime(outEnd, [0, 0]);
                } else {
                    scProp.setValueAtTime(outStart + outDur * 0.25, [103.5, 103.5]);
                    scProp.setValueAtTime(outEnd, [item.sc0, item.sc0]);
                }
            }

            var ks;
            for (ks = 1; ks <= scProp.numKeys; ks++) {
                applySafeEase(scProp, ks, 0, 85, 0, 85);
            }
        }

        /* 4. الشفافية في بداية الدخول وعند نهاية الخروج */
        if (opProp) {
            opProp.setValueAtTime(Math.max(0, t0 - 0.02), 0);
            opProp.setValueAtTime(t0 + 0.12, 100);
            if (includeOutro) {
                opProp.setValueAtTime(outEnd - 0.14, 100);
                opProp.setValueAtTime(outEnd + 0.02, 0);
            }
        }

        /* 5. طبقة مسار الكشف (Trim Paths Stroke Matte) مع سحب المسار عكسياً في الـ Outro */
        var matteLayer = comp.layers.addShape();
        matteLayer.name = item.name_en + "_TRIM_MATTE | مسار_رسم_" + item.name_ar;
        addBezierSubpathsGroup(
            matteLayer,
            "Trim_Centerline",
            item.reveal_subpath,
            null,
            [1.0, 1.0, 1.0],
            item.reveal_stroke_w,
            t0,
            t1
        );

        /* إذا كان الكومبوزيشن يتضمن Outro، نسجل Keyframes لسحب Trim End من 100% إلى 0% */
        if (includeOutro) {
            var rootVecM = safeProp(matteLayer, "ADBE Root Vectors Group");
            var grpM = safeProp(rootVecM, "Trim_Centerline");
            var contM = safeProp(grpM, "ADBE Vectors Group");
            var trmM = safeProp(contM, "Bezier_Trim");
            var trimEndProp = safeProp(trmM, "ADBE Vector Trim End");
            if (trimEndProp) {
                trimEndProp.setValueAtTime(outStart, 100);
                trimEndProp.setValueAtTime(outEnd, 0);
                var kt1 = trimEndProp.nearestKeyIndex(outStart);
                var kt2 = trimEndProp.nearestKeyIndex(outEnd);
                applySafeEase(trimEndProp, kt1, 0, 86, 0, 86);
                applySafeEase(trimEndProp, kt2, 0, 86, 0, 86);
            }
        }

        var mTr = safeProp(matteLayer, "ADBE Transform Group");
        safeSetVal(safeProp(mTr, "ADBE Position"), [tx, ty]);
        matteLayer.parent = artLayer;
        safeSetVal(safeProp(mTr, "ADBE Position"), [0, 0]);
        safeSetVal(safeProp(mTr, "ADBE Scale"), [100, 100]);
        safeSetVal(safeProp(mTr, "ADBE Rotate Z") || safeProp(mTr, "ADBE Rotation"), 0);

        if (!includeOutro) {
            var ampVal = (item.kind === "main_letter") ? 14 : 20;
            applyInertialBounceExpression(rotProp, ampVal, 20, 50);
            applyInertialBounceExpression(scProp, ampVal, 20, 50);
        }
        applyBirthGlowFlash(artLayer, item, t0, t1);
        applyAlphaTrackMatte(artLayer, matteLayer);
        createSmoothAlignedTracerPair(comp, artLayer, item, includeOutro, outStart, outEnd);
        return { art: artLayer, matte: matteLayer };
    }

    /* ----------------------------------------------------------------------
     * 4. دالة ضبط تأثير CC Glass وربطه بطبقة الـ Bump Map البيضاء المخفية
     * ---------------------------------------------------------------------- */
    function applyAndConfigureCCGlass(targetLayer, bumpLayerIndex, softnessVal, heightVal, displaceVal, lightIntensityVal, lightHeightVal) {
        var fxParade = safeProp(targetLayer, "ADBE Effect Parade");
        if (!fxParade) return null;
        var glassFx = null;
        try {
            glassFx = fxParade.addProperty("CC Glass");
        } catch (e1) {
            try { glassFx = fxParade.addProperty("CS Glass"); } catch (e2) {}
        }
        if (!glassFx) return null;
        glassFx.name = "CC Glass | تأثير_الانكسار_الزجاجي";

        var fxParade2 = safeProp(targetLayer, "ADBE Effect Parade");
        var gFx = safeProp(fxParade2, "CC Glass | تأثير_الانكسار_الزجاجي") || fxParade2.property(fxParade2.numProperties);
        if (!gFx) return null;

        safeSetVal(safeProp(gFx, "CC Glass-0002") || safeProp(gFx, "Bump Map"), bumpLayerIndex);
        safeSetVal(safeProp(gFx, "CC Glass-0003") || safeProp(gFx, "Property"), 1);
        safeSetVal(safeProp(gFx, "CC Glass-0004") || safeProp(gFx, "Softness"), softnessVal);
        safeSetVal(safeProp(gFx, "CC Glass-0005") || safeProp(gFx, "Height"), heightVal);
        safeSetVal(safeProp(gFx, "CC Glass-0006") || safeProp(gFx, "Displacement"), displaceVal);
        safeSetVal(safeProp(gFx, "CC Glass-0009") || safeProp(gFx, "Light Intensity"), lightIntensityVal || 120);
        safeSetVal(safeProp(gFx, "CC Glass-0011") || safeProp(gFx, "Light Height"), lightHeightVal || 68);

        try {
            var pIdx;
            for (pIdx = 1; pIdx <= gFx.numProperties; pIdx++) {
                var p = gFx.property(pIdx);
                if (!p) continue;
                var pName = String(p.name || "").toLowerCase();
                if (pName.indexOf("bump map") !== -1) safeSetVal(p, bumpLayerIndex);
                else if (pName === "softness") safeSetVal(p, softnessVal);
                else if (pName === "height") safeSetVal(p, heightVal);
                else if (pName === "displacement") safeSetVal(p, displaceVal);
            }
        } catch (eLoop) {}

        return gFx;
    }

    /* ----------------------------------------------------------------------
     * 5. دالة إضافة التوهج الخارجي (Layer Styles -> Outer Glow + Stylize Glow)
     * ---------------------------------------------------------------------- */
    function applyOuterGlowStyleAndEffect(targetLayer, glowCol, glowSize, glowOpacity) {
        if (!targetLayer) return;
        try {
            var lsGroup = safeProp(targetLayer, "ADBE Layer Styles");
            if (lsGroup) {
                var ogGroup = safeProp(lsGroup, "outerGlow/enabled");
                if (ogGroup && ogGroup.canSetEnabled) {
                    ogGroup.enabled = true;
                }
                safeSetVal(safeProp(ogGroup, "outerGlow/mode2"), 2);
                safeSetVal(safeProp(ogGroup, "outerGlow/opacity"), glowOpacity || 80);
                safeSetVal(safeProp(ogGroup, "outerGlow/color"), glowCol || [1.0, 0.96, 0.86]);
                safeSetVal(safeProp(ogGroup, "outerGlow/blur"), glowSize || 38);
            }
        } catch (eLS) {}

        try {
            var fxParade = safeProp(targetLayer, "ADBE Effect Parade");
            if (fxParade) {
                var glo = fxParade.addProperty("ADBE Glo2");
                if (glo) {
                    glo.name = "Outer_Glow_Boost | تعزيز_التوهج_الخارجي";
                    var g2 = safeProp(safeProp(targetLayer, "ADBE Effect Parade"), "Outer_Glow_Boost | تعزيز_التوهج_الخارجي");
                    safeSetVal(safeProp(g2, "ADBE Glo2-0001"), 2);
                    safeSetVal(safeProp(g2, "ADBE Glo2-0002"), 55);
                    safeSetVal(safeProp(g2, "ADBE Glo2-0003"), glowSize || 42);
                    safeSetVal(safeProp(g2, "ADBE Glo2-0004"), 0.85);
                }
            }
        } catch (eGlo) {}
    }

    /* ----------------------------------------------------------------------
     * 6. بيانات الفيكتور الكاملة لشعار «سلمان النجار» (19 جزءاً من ملف PDF)
     * ---------------------------------------------------------------------- */
    var SALMAN_LOGO_ELEMENTS = [{"id": 2, "name_en": "01_SALMAN_SEEN_LAM_MEEM", "name_ar": "مقطع_سلمان_الرئيسي", "kind": "main_letter", "fill_col": [0.259, 0.129, 0.043], "target_pos": [1076.98, 642.9], "art_subpaths": [{"v": [[-154.27, 73.85], [-55.9, 178.88], [-28.65, 166.77], [46.14, 90.94], [51.84, 37.91], [48.77, 36.44], [12.67, 68.19], [11.51, 67.91], [-0.32, 13.37], [0.28, 12.93], [71.6, -12.53], [74.91, -14.72], [135.07, -63.25], [135.99, -63.97], [182.05, -148.24], [182.72, -154.69], [183.68, -168.6], [183.0, -189.48], [181.21, -189.92], [178.42, -183.5], [172.56, -149.75], [146.86, -107.92], [146.11, -108.28], [149.02, -144.41], [147.42, -154.14], [146.51, -154.41], [139.69, -130.31], [98.37, -68.55], [97.5, -69.07], [97.9, -102.98], [95.47, -102.9], [10.04, -38.55], [-27.05, -101.14], [-44.66, -175.49], [-47.57, -174.02], [-50.2, -119.31], [-20.04, -4.4], [5.38, 76.56], [5.26, 77.91], [-64.55, 126.09], [-139.37, 53.61], [-152.68, 16.87], [-180.29, -80.66], [-184.64, -43.61], [-165.39, 31.3]], "i": [[0.0, 0.0], [-59.29, 11.75], [-8.05, 6.06], [-33.11, 17.45], [1.43, 7.81], [1.71, -0.88], [10.84, -12.99], [0.2, 0.84], [3.35, 18.33], [-0.52, -0.28], [-16.18, 23.55], [-1.35, 0.2], [-10.36, 24.42], [-0.44, 0.04], [-2.15, 29.52], [-0.28, 1.67], [-0.64, 4.7], [1.31, 7.21], [0.52, -0.72], [0.56, -2.59], [2.63, -9.04], [10.64, -12.95], [-0.08, 0.44], [-0.28, 12.15], [1.16, 3.15], [0.44, -0.32], [0.84, -4.58], [21.12, -16.46], [-0.04, 0.48], [3.15, 5.82], [0.48, -1.0], [39.37, 20.2], [6.14, 22.91], [0.4, 0.28], [0.48, -1.95], [-4.54, -16.97], [-3.47, -12.35], [-12.23, -25.82], [0.28, -0.4], [32.23, -0.56], [12.55, 31.95], [0.0, 0.0], [9.0, 33.95], [0.0, 0.0], [-8.65, -37.93]], "o": [[12.39, 42.51], [10.12, -1.99], [31.8, -24.07], [7.13, -3.79], [-0.36, -1.83], [-15.34, 7.85], [-0.56, 0.64], [-4.54, -18.05], [-0.12, -0.6], [28.97, 17.13], [0.88, -1.27], [26.1, -3.63], [0.16, -0.4], [35.5, -5.7], [0.16, -2.59], [0.8, -4.98], [0.96, -7.41], [-0.12, -0.88], [-1.27, 1.71], [-2.39, 11.16], [-4.74, 16.42], [-0.28, 0.32], [1.67, -11.91], [0.08, -3.31], [-0.16, -0.52], [-3.39, 2.47], [-4.74, 27.05], [-0.4, 0.28], [1.0, -7.05], [-0.52, -0.96], [-12.79, 27.57], [-23.03, -11.83], [-0.16, -0.44], [-1.43, -0.96], [-4.3, 16.81], [3.75, 14.14], [7.69, 27.65], [0.2, 0.44], [-17.57, 23.83], [-40.48, 0.72], [-5.5, -15.06], [-10.12, -33.63], [-1.12, -4.34], [0.0, 0.0], [4.22, 15.54]], "c": true}], "reveal_subpath": {"v": [[185.96, -199.8], [175.76, -118.2], [143.12, -77.4], [141.08, -153.9], [112.52, -57.0], [71.72, -31.5], [63.56, -97.8], [30.92, 4.2], [-7.84, -11.1], [-48.64, -194.7], [-14.98, -0.9], [49.28, 60.3], [0.32, 136.8], [-65.98, 174.54], [-127.18, 121.5], [-157.78, 19.5], [-185.32, -92.7]], "i": [[0.0, 0.0], [12.0, -34.27], [9.71, 10.0], [8.57, -5.71], [19.42, -34.27], [13.71, 11.42], [11.42, -10.0], [19.99, -24.28], [22.28, 55.69], [2.0, -2.86], [-27.42, -71.4], [-4.28, -38.56], [32.27, -31.99], [35.7, 4.28], [25.7, 43.41], [16.28, 59.98], [7.71, 31.42]], "o": [[-2.86, 22.85], [-12.0, 34.27], [-9.71, -10.0], [-8.57, 5.71], [-19.42, 34.27], [-13.71, -11.42], [-11.42, 10.0], [-19.99, 24.28], [-22.28, -55.69], [-2.0, 2.86], [27.42, 71.4], [4.28, 38.56], [-32.27, 31.99], [-35.7, -4.28], [-25.7, -43.41], [-16.28, -59.98], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 158.1, "smooth_tracer_subpath": {"v": [[183.92, -184.5], [148.22, -92.7], [76.82, -16.2], [36.02, 75.6], [-50.68, 167.4], [-127.18, 116.4], [-181.24, -77.4]], "i": [[0.0, 0.0], [26.77, -42.07], [28.05, -42.07], [31.87, -45.9], [40.8, -10.2], [32.64, 61.2], [13.52, 48.45]], "o": [[-8.92, 22.95], [-26.77, 42.07], [-28.05, 42.07], [-31.87, 45.9], [-40.8, 10.2], [-32.64, -61.2], [0.0, 0.0]], "c": false}, "t_start": 0.08, "t_end": 1.15, "dx": 52, "dy": 22, "rot0": -9.5, "rot_over": 1.8, "sc0": 86, "sc_over": 103.5, "float_phase": 0.0}, {"id": 3, "name_en": "02_SALMAN_NOON_BOWL", "name_ar": "كاسة_حرف_النون_الممتدة", "kind": "main_letter", "fill_col": [0.259, 0.129, 0.043], "target_pos": [883.96, 537.71], "art_subpaths": [{"v": [[149.83, 67.75], [-7.35, 186.37], [-166.93, 188.24], [-281.12, 27.67], [-277.05, -34.56], [-184.02, -188.0], [-157.44, -206.41], [-156.96, -206.57], [-156.88, -206.29], [-165.65, -197.96], [-267.45, -35.56], [-271.12, 18.91], [-110.23, 148.28], [136.29, 32.53], [153.7, 11.22], [236.45, -121.54], [269.2, -168.0], [276.69, -174.26], [280.2, -172.38], [273.71, -119.15], [240.56, -76.4], [166.45, 45.68]], "i": [[0.0, 0.0], [63.63, -22.27], [51.6, 18.37], [1.43, 74.47], [-3.15, 19.12], [-48.53, 38.41], [-8.41, 5.98], [-0.16, -0.04], [0.16, -0.16], [3.11, -3.35], [19.6, -63.55], [-3.71, -19.16], [-75.9, -5.22], [-60.8, 72.44], [-6.53, 8.25], [-26.22, 45.38], [-13.27, 13.63], [-2.27, 1.35], [-0.16, -2.55], [7.85, -5.54], [8.41, -14.46], [27.17, -39.17]], "o": [[-40.8, 53.27], [-51.32, 17.97], [-70.12, -25.02], [-0.44, -22.35], [10.08, -61.6], [7.85, -6.22], [0.16, -0.16], [0.2, 0.04], [-2.71, 2.19], [-44.66, 47.89], [-5.7, 18.45], [15.06, 78.25], [97.3, 6.69], [0.0, 0.0], [31.28, -42.15], [9.48, -16.38], [2.71, -2.83], [2.19, -1.27], [0.56, 9.48], [-13.83, 9.8], [-24.07, 41.16], [-5.22, 8.53]], "c": true}], "reveal_subpath": {"v": [[287.18, -176.21], [223.94, -84.41], [147.44, 17.59], [50.54, 109.39], [-61.66, 170.59], [-178.96, 155.29], [-260.56, 63.49], [-270.76, -58.91], [-219.76, -150.71], [-145.3, -217.01]], "i": [[0.0, 0.0], [39.13, -54.26], [48.55, -54.26], [58.55, -42.84], [64.26, -12.85], [55.69, 29.99], [25.7, 59.98], [-11.42, 59.98], [-35.13, 44.27], [-20.85, 18.56]], "o": [[-17.71, 25.7], [-39.13, 54.26], [-48.55, 54.26], [-58.55, 42.84], [-64.26, 12.85], [-55.69, -29.99], [-25.7, -59.98], [11.42, -59.98], [35.13, -44.27], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 147.9, "smooth_tracer_subpath": {"v": [[280.04, -166.01], [162.74, -2.81], [9.74, 134.89], [-133.06, 167.53], [-245.26, 78.79], [-263.62, -58.91], [-155.5, -203.75]], "i": [[0.0, 0.0], [67.57, -75.22], [73.95, -42.59], [63.75, 14.02], [32.64, 56.61], [-22.44, 70.63], [-27.03, 36.21]], "o": [[-29.32, 40.8], [-67.57, 75.22], [-73.95, 42.59], [-63.75, -14.02], [-32.64, -56.61], [22.44, -70.63], [0.0, 0.0]], "c": false}, "t_start": 0.36, "t_end": 1.38, "dx": 45, "dy": -32, "rot0": 12.0, "rot_over": -2.2, "sc0": 85, "sc_over": 104.0, "float_phase": 1.1}, {"id": 1, "name_en": "03_OUTER_CRESCENT_FRAME", "name_ar": "القوس_الدائري_الكبير_الحاضن", "kind": "main_letter", "fill_col": [0.259, 0.129, 0.043], "target_pos": [1054.89, 648.95], "art_subpaths": [{"v": [[141.03, -302.19], [140.23, -301.8], [143.1, -265.22], [134.53, -220.4], [142.46, -365.55], [214.06, -278.13], [268.45, -21.18], [-312.12, -47.39], [-305.18, -68.67], [179.0, 131.62]], "i": [[135.55, 144.11], [-0.08, -0.48], [-0.8, -12.27], [6.45, 20.24], [-27.21, -31.91], [-22.11, -30.44], [13.91, -88.45], [13.35, 422.58], [-2.83, -96.54], [-169.73, 206.43]], "o": [[-0.32, -0.36], [1.12, 12.15], [0.12, 3.55], [-1.2, -10.64], [24.66, 28.09], [56.06, 67.38], [-55.18, 418.64], [-0.4, -58.41], [7.61, 260.66], [133.52, -166.51]], "c": true}], "reveal_subpath": {"v": [[132.57, -205.85], [132.57, -302.75], [139.71, -379.25], [195.81, -307.85], [262.11, -190.55], [279.45, -47.75], [221.31, 125.65], [93.81, 242.95], [-59.19, 273.55], [-212.19, 197.05], [-295.83, 44.05], [-311.13, -78.35], [-309.09, -170.15]], "i": [[0.0, 0.0], [-2.0, 48.55], [-17.71, 1.43], [-34.27, -52.84], [-23.42, -72.83], [11.42, -88.54], [51.98, -81.4], [78.54, -41.41], [85.68, 12.85], [66.26, 64.26], [27.7, 77.11], [3.71, 59.98], [-0.57, 25.7]], "o": [[0.0, -27.13], [2.0, -48.55], [17.71, -1.43], [34.27, 52.84], [23.42, 72.83], [-11.42, 88.54], [-51.98, 81.4], [-78.54, 41.41], [-85.68, -12.85], [-66.26, -64.26], [-27.7, -77.11], [-3.71, -59.98], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 153.0, "smooth_tracer_subpath": {"v": [[139.71, -358.85], [218.25, -261.95], [273.33, -83.45], [216.21, 120.55], [78.51, 242.95], [-84.69, 263.35], [-237.69, 166.45], [-303.99, -1.85], [-310.11, -139.55]], "i": [[0.0, 0.0], [-33.4, -68.85], [0.51, -95.62], [48.7, -81.6], [75.22, -35.7], [79.05, 19.12], [54.82, 66.3], [18.1, 76.5], [1.53, 34.42]], "o": [[19.64, 24.22], [33.4, 68.85], [-0.51, 95.62], [-48.7, 81.6], [-75.22, 35.7], [-79.05, -19.12], [-54.82, -66.3], [-18.1, -76.5], [0.0, 0.0]], "c": false}, "t_start": 0.22, "t_end": 1.68, "dx": 30, "dy": -25, "rot0": -14.0, "rot_over": 2.0, "sc0": 88, "sc_over": 103.0, "float_phase": 2.2}, {"id": 5, "name_en": "04_ALNAJJAR_UPPER_BODY", "name_ar": "مقطع_النجار_العلوي", "kind": "main_letter", "fill_col": [0.259, 0.129, 0.043], "target_pos": [959.78, 314.58], "art_subpaths": [{"v": [[-143.66, 142.9], [-133.74, 166.89], [-98.27, 207.61], [-13.41, 178.44], [32.17, 109.11], [39.47, 66.56], [33.05, 35.72], [4.28, 38.35], [-58.15, 79.19], [-58.83, 79.27], [-58.99, 78.63], [-38.71, 42.37], [56.4, 0.02], [71.94, 30.5], [150.27, 18.31], [165.89, -61.82], [139.27, -157.44], [113.06, -199.6], [100.51, -213.46], [97.12, -197.8], [96.44, -129.19], [97.72, -56.6], [99.19, -40.78], [99.67, -38.11], [102.94, -38.71], [106.56, -59.71], [107.2, -142.22], [107.92, -142.42], [145.57, -80.07], [155.13, -45.12], [141.58, -13.13], [96.88, 1.49], [63.81, -42.13], [36.92, -52.1], [-10.26, -18.63], [-52.89, 33.21], [-74.53, 105.84], [-73.17, 142.3], [-72.02, 142.58], [-67.95, 140.23], [16.71, 88.59], [17.67, 89.99], [-2.53, 117.16], [-70.14, 160.27], [-129.39, 116.6], [-150.47, 56.28], [-156.88, 30.66], [-159.63, 17.55], [-161.51, 14.2], [-163.9, 15.24], [-165.77, 50.86]], "i": [[-10.76, -29.72], [-3.67, -7.81], [-16.57, -8.01], [-20.32, 20.48], [-8.92, 26.54], [-0.8, 14.38], [9.2, 5.9], [7.49, -2.59], [17.33, -18.89], [0.24, 0.12], [-0.12, 0.2], [-7.89, 11.51], [-18.25, -36.62], [-5.74, -9.6], [-15.26, 34.07], [-1.43, 27.33], [16.54, 29.29], [7.65, 14.54], [2.35, -8.41], [0.84, -5.3], [-0.68, -22.99], [-0.56, -24.19], [-0.6, -5.3], [-0.16, -0.24], [-0.68, 2.47], [-0.76, 8.01], [0.4, 27.41], [-0.48, -0.96], [-10.4, -22.03], [-0.32, -12.11], [7.21, -8.96], [15.9, 7.41], [8.92, 14.7], [12.99, -3.98], [13.67, -13.03], [11.32, -19.12], [1.79, -25.14], [-5.46, -5.54], [-0.44, 0.12], [-1.0, 1.0], [-35.74, 7.81], [0.44, -0.68], [7.41, -8.65], [26.66, -3.35], [9.96, 23.91], [5.7, 20.56], [1.91, 8.57], [0.96, 4.34], [1.2, 0.64], [0.0, -1.35], [-1.91, -11.83]], "o": [[2.99, 8.17], [7.65, 16.18], [29.56, 14.26], [19.4, -19.52], [4.58, -13.71], [0.52, -9.16], [-6.81, -4.34], [-24.26, 8.37], [-0.16, 0.16], [-0.2, -0.16], [5.62, -12.67], [11.44, -16.73], [5.02, 10.12], [24.19, 40.48], [11.4, -25.42], [1.79, -34.07], [-8.09, -14.34], [-1.27, -2.43], [-1.43, 5.14], [-3.55, 22.91], [0.68, 24.19], [0.16, 5.38], [0.16, 1.55], [1.47, 2.03], [1.99, -7.25], [2.23, -23.95], [0.0, -1.08], [11.36, 21.52], [5.14, 10.84], [0.36, 11.79], [-10.4, 12.95], [-16.69, -7.81], [-6.73, -11.08], [-18.49, 5.66], [-16.02, 15.34], [-13.03, 21.71], [-0.56, 7.33], [0.28, 0.32], [1.71, -0.56], [25.1, -25.38], [0.8, -0.2], [-6.06, 9.44], [-16.81, 19.84], [-28.25, 3.59], [-8.25, -19.64], [-2.35, -8.49], [-0.96, -4.38], [-0.24, -1.24], [-0.92, -0.48], [-1.95, 11.71], [4.9, 30.44]], "c": true}], "reveal_subpath": {"v": [[109.36, 1.02], [109.36, -111.18], [115.48, -218.28], [150.16, -116.28], [160.36, -9.18], [122.62, 72.42], [61.42, 31.62], [44.08, -19.38], [-15.08, 36.72], [-71.18, 103.02], [33.88, 113.22], [-15.08, 169.32], [-86.48, 194.82], [-142.58, 123.42], [-166.04, 6.12]], "i": [[0.0, 0.0], [-1.71, 61.4], [-11.42, 1.43], [-12.57, -58.55], [7.71, -52.84], [27.7, -11.42], [21.99, 25.7], [21.42, -1.43], [32.27, -34.27], [-13.71, -21.42], [-15.71, -18.56], [33.7, -22.85], [35.7, 12.85], [22.28, 52.84], [6.57, 32.84]], "o": [[0.0, -31.42], [1.71, -61.4], [11.42, -1.43], [12.57, 58.55], [-7.71, 52.84], [-27.7, 11.42], [-21.99, -25.7], [-21.42, 1.43], [-32.27, 34.27], [13.71, 21.42], [15.71, 18.56], [-33.7, 22.85], [-35.7, -12.85], [-22.28, -52.84], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 158.1, "smooth_tracer_subpath": {"v": [[115.48, -197.88], [156.28, -39.78], [112.42, 57.12], [10.42, 118.32], [-81.38, 182.58], [-147.68, 123.42], [-164.0, 16.32]], "i": [[0.0, 0.0], [0.76, -63.75], [36.46, -39.52], [48.45, -31.36], [39.52, -1.27], [20.66, 41.56], [4.08, 26.77]], "o": [[10.2, 39.52], [-0.76, 63.75], [-36.46, 39.52], [-48.45, 31.36], [-39.52, 1.27], [-20.66, -41.56], [0.0, 0.0]], "c": false}, "t_start": 0.58, "t_end": 1.62, "dx": 22, "dy": -54, "rot0": 10.5, "rot_over": -2.0, "sc0": 84, "sc_over": 104.5, "float_phase": 3.3}, {"id": 4, "name_en": "05_ALNAJJAR_FINAL_RA", "name_ar": "حرف_الراء_الأخير_النجار", "kind": "main_letter", "fill_col": [0.259, 0.129, 0.043], "target_pos": [723.57, 446.89], "art_subpaths": [{"v": [[89.61, -46.82], [-102.8, 162.44], [-94.59, 169.3], [155.07, -133.76], [157.58, -135.15], [157.82, -189.14]], "i": [[13.35, -58.13], [106.9, -9.16], [-73.47, -6.41], [-97.9, 42.35], [-0.28, 1.12], [10.24, 2.59]], "o": [[-30.28, 131.64], [-22.83, 1.95], [249.74, 21.67], [1.08, 0.36], [1.95, -9.6], [-38.49, -1.83]], "c": true}], "reveal_subpath": {"v": [[165.03, -197.59], [134.43, -115.99], [98.73, 6.41], [57.93, 108.41], [-18.57, 159.41], [-105.27, 169.61], [-176.67, 166.55]], "i": [[0.0, 0.0], [18.56, -57.12], [21.42, -62.83], [32.84, -42.84], [45.7, -17.14], [44.27, -2.0], [19.99, 0.86]], "o": [[-8.57, 22.85], [-18.56, 57.12], [-21.42, 62.83], [-32.84, 42.84], [-45.7, 17.14], [-44.27, 2.0], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 142.8, "smooth_tracer_subpath": {"v": [[157.89, -182.29], [108.93, -29.29], [52.83, 108.41], [-38.97, 159.41], [-164.43, 166.55]], "i": [[0.0, 0.0], [26.27, -72.67], [36.97, -47.17], [54.31, -14.54], [31.36, -1.79]], "o": [[-12.24, 38.25], [-26.27, 72.67], [-36.97, 47.17], [-54.31, 14.54], [0.0, 0.0]], "c": false}, "t_start": 0.96, "t_end": 1.82, "dx": 44, "dy": -18, "rot0": -12.5, "rot_over": 2.5, "sc0": 84, "sc_over": 105.0, "float_phase": 4.4}, {"id": 8, "name_en": "06_DOT_NOON", "name_ar": "نقطة_النون_الماسية", "kind": "dot", "fill_col": [0.259, 0.129, 0.043], "target_pos": [966.36, 559.84], "art_subpaths": [{"v": [[-21.1, 17.97], [-22.77, 16.14], [-20.46, -22.47], [-18.71, -27.89], [-16.59, -28.81], [21.93, -15.7], [23.05, -14.22], [18.75, 27.93], [16.75, 28.77]], "i": [[0.0, 0.0], [0.08, 0.84], [-2.79, 12.83], [-0.76, 1.59], [-0.88, -0.2], [-12.35, -5.42], [-0.04, -0.64], [5.1, -12.39], [0.84, 0.24]], "o": [[-0.92, -0.24], [-1.24, -12.91], [0.44, -2.03], [0.32, -0.72], [13.35, 3.35], [0.64, 0.32], [0.96, 12.87], [-0.28, 0.72], [0.0, 0.0]], "c": true}], "reveal_subpath": {"v": [[-42.06, 0.56], [39.54, 0.56]], "i": [[0.0, 0.0], [-22.85, 0.0]], "o": [[22.85, 0.0], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.05, "t_end": 1.55, "dx": 0, "dy": -38, "rot0": -90.0, "rot_over": 8.0, "sc0": 0, "sc_over": 142.0, "float_phase": 0.8}, {"id": 7, "name_en": "07_DOT_JEEM", "name_ar": "نقطة_الجيم_الوسطى_النجار", "kind": "dot", "fill_col": [0.259, 0.129, 0.043], "target_pos": [1053.25, 428.32], "art_subpaths": [{"v": [[-21.1, 17.97], [-22.77, 16.14], [-20.46, -22.47], [-18.71, -27.89], [-16.59, -28.81], [21.93, -15.7], [23.09, -14.22], [18.75, 27.93], [16.79, 28.77]], "i": [[0.0, 0.0], [0.08, 0.84], [-2.75, 12.83], [-0.72, 1.59], [-0.84, -0.2], [-12.35, -5.42], [-0.08, -0.64], [5.1, -12.39], [0.8, 0.24]], "o": [[-0.92, -0.28], [-1.24, -12.91], [0.44, -2.03], [0.32, -0.72], [13.35, 3.31], [0.68, 0.28], [0.92, 12.87], [-0.28, 0.72], [0.0, 0.0]], "c": true}], "reveal_subpath": {"v": [[-42.25, -0.52], [39.35, -0.52]], "i": [[0.0, 0.0], [-22.85, 0.0]], "o": [[22.85, 0.0], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.22, "t_end": 1.72, "dx": 0, "dy": 36, "rot0": 90.0, "rot_over": -8.0, "sc0": 0, "sc_over": 142.0, "float_phase": 2.0}, {"id": 6, "name_en": "08_DOT_NOON_TOP", "name_ar": "نقطة_النون_العلوية_النجار", "kind": "dot", "fill_col": [0.259, 0.129, 0.043], "target_pos": [928.98, 228.9], "art_subpaths": [{"v": [[-21.1, 17.97], [-22.77, 16.1], [-20.5, -22.47], [-18.71, -27.89], [-16.59, -28.81], [21.93, -15.7], [23.05, -14.26], [18.75, 27.93], [16.75, 28.77]], "i": [[0.0, 0.0], [0.08, 0.88], [-2.75, 12.83], [-0.76, 1.59], [-0.88, -0.2], [-12.35, -5.42], [-0.04, -0.6], [5.06, -12.39], [0.84, 0.24]], "o": [[-0.96, -0.28], [-1.24, -12.91], [0.48, -2.03], [0.32, -0.76], [13.31, 3.31], [0.64, 0.28], [0.96, 12.91], [-0.28, 0.68], [0.0, 0.0]], "c": true}], "reveal_subpath": {"v": [[-40.38, 0.0], [41.22, 0.0]], "i": [[0.0, 0.0], [-22.85, 0.0]], "o": [[22.85, 0.0], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.38, "t_end": 1.88, "dx": 0, "dy": -36, "rot0": -90.0, "rot_over": 8.0, "sc0": 0, "sc_over": 142.0, "float_phase": 3.5}, {"id": 9, "name_en": "09_TASHKEEL_FATHA_SEEN", "name_ar": "فتحة_حرف_السين", "kind": "major_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [1169.14, 482.84], "art_subpaths": [{"v": [[57.34, -48.03], [-18.73, 15.64], [-56.02, 50.06], [-56.26, 51.34], [-58.33, 51.22], [-57.06, 43.13], [17.97, -18.19], [52.47, -50.42], [55.98, -59.94], [56.54, -60.62], [58.09, -59.98]], "i": [[0.8, -5.9], [33.67, -14.5], [4.9, -16.54], [0.04, -0.44], [0.24, 9.92], [-0.4, 1.75], [-31.95, 15.22], [-6.41, 14.66], [-1.63, 4.7], [-0.28, 0.12], [-0.12, -1.0]], "o": [[-5.18, 38.45], [-16.77, 7.21], [-0.12, 0.4], [-1.16, 9.84], [-0.04, -1.95], [8.29, -35.74], [15.5, -7.41], [0.72, -1.63], [0.12, -0.32], [0.92, -0.56], [0.28, 2.07]], "c": true}], "reveal_subpath": {"v": [[66.26, -65.24], [-0.04, 1.06], [-66.34, 67.36]], "i": [[0.0, 0.0], [37.13, -37.13], [18.56, -18.56]], "o": [[-18.56, 18.56], [-37.13, 37.13], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 117.3, "smooth_tracer_subpath": null, "t_start": 1.08, "t_end": 1.65, "dx": 28, "dy": -20, "rot0": -16.0, "rot_over": 3.5, "sc0": 72, "sc_over": 114.0, "float_phase": 0.5}, {"id": 10, "name_en": "10_TASHKEEL_SEEN_SWOOP", "name_ar": "حلية_السين_السفلية_الممتدة", "kind": "major_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [1164.7, 736.55], "art_subpaths": [{"v": [[-111.38, 129.49], [66.68, -79.33], [81.54, -80.6], [92.3, -105.11], [93.17, -105.86], [96.4, -94.91], [103.41, -102.84], [106.56, -124.47], [110.87, -95.39], [97.0, -81.96], [80.9, -64.35]], "i": [[154.35, -58.37], [-58.37, 27.09], [-4.58, 1.31], [-0.52, 8.41], [-0.52, -0.08], [-0.84, -3.59], [-2.35, 2.31], [-3.82, -5.02], [0.52, -9.52], [5.82, -2.31], [11.67, -0.4]], "o": [[140.13, -75.62], [4.46, -0.88], [10.12, -2.95], [0.08, -0.6], [1.99, 3.07], [2.23, -1.63], [5.7, -4.26], [3.19, 9.12], [-0.76, 6.77], [-2.75, 9.0], [-63.43, -1.24]], "c": true}], "reveal_subpath": {"v": [[116.6, -135.35], [70.7, -74.15], [14.6, -2.75], [-41.5, 73.75], [-120.04, 134.95]], "i": [[0.0, 0.0], [28.56, -37.13], [31.42, -41.41], [37.7, -38.56], [21.99, -17.14]], "o": [[-12.85, 17.14], [-28.56, 37.13], [-31.42, 41.41], [-37.7, 38.56], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.18, "t_end": 1.88, "dx": 34, "dy": -24, "rot0": 14.0, "rot_over": -3.0, "sc0": 75, "sc_over": 112.0, "float_phase": 1.6}, {"id": 11, "name_en": "11_TASHKEEL_LEFT_ORNAMENT", "name_ar": "الحلية_الزخرفية_اليسرى", "kind": "major_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [716.73, 437.3], "art_subpaths": [{"v": [[-18.83, 16.63], [-21.73, 29.86], [-22.17, 30.18], [-22.33, 30.14], [-22.69, 29.94], [-41.78, 17.91], [-44.84, 15.52], [-44.8, 7.87], [-39.9, -10.54], [-22.21, -13.69], [0.58, 22.45], [4.0, 39.58], [10.9, 42.25], [11.02, 41.7], [-1.45, -7.99], [-4.56, -37.15], [10.54, -66.8], [41.38, -39.9], [43.17, -3.17], [40.58, 6.0], [40.54, 5.96], [42.29, -9.58], [25.76, -46.08], [0.82, -41.66], [0.06, -38.19], [2.85, -27.55], [15.92, 35.92], [14.84, 44.96], [7.19, 67.24], [-2.49, 52.69], [-18.63, 16.56]], "i": [[0.0, -0.2], [1.75, -4.38], [0.2, 0.0], [0.0, 0.0], [0.08, 0.12], [8.17, 1.24], [0.2, 1.39], [-0.32, 3.27], [-4.02, 3.98], [-6.1, -3.39], [-3.15, -12.11], [-1.27, -4.5], [-3.03, 5.1], [0.0, 0.2], [4.86, 15.74], [-1.12, 10.12], [-12.23, 4.14], [-3.31, -12.35], [1.95, -12.63], [1.2, -2.63], [-0.04, 0.2], [0.0, 4.42], [11.24, 7.73], [6.02, -8.57], [-0.28, -1.24], [-1.27, -3.71], [1.79, -22.51], [0.52, -3.43], [5.34, -3.75], [0.64, 3.35], [8.96, 10.88]], "o": [[-0.84, 4.58], [-0.08, 0.2], [0.0, 0.0], [-0.16, 0.0], [-3.47, -7.97], [-1.35, -0.2], [-0.28, -1.83], [0.56, -5.74], [4.74, -4.66], [11.0, 6.1], [1.27, 4.9], [0.92, 3.11], [0.08, -0.16], [-0.36, -16.57], [-3.07, -9.88], [1.27, -11.0], [16.22, -5.54], [3.15, 11.87], [-0.52, 3.51], [-0.08, 0.16], [1.2, -5.94], [-0.08, -13.35], [-8.65, -5.94], [-0.76, 1.08], [0.68, 3.63], [7.05, 20.96], [-0.24, 2.59], [-0.96, 6.57], [-7.21, 5.1], [-2.51, -13.71], [-0.12, -0.16]], "c": true}], "reveal_subpath": {"v": [[46.41, 5.8], [23.97, -75.8], [-8.67, -35.0], [8.67, 74.14], [-32.13, 0.7], [-47.43, 51.7]], "i": [[0.0, 0.0], [15.42, 11.42], [4.28, -41.98], [6.57, -10.0], [15.71, 6.28], [4.28, -14.28]], "o": [[-6.28, -22.85], [-15.42, -11.42], [-4.28, 41.98], [-6.57, 10.0], [-15.71, -6.28], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.32, "t_end": 1.98, "dx": -26, "dy": 22, "rot0": -18.0, "rot_over": 4.0, "sc0": 70, "sc_over": 116.0, "float_phase": 2.7}, {"id": 17, "name_en": "12_TASHKEEL_TOP_SHADDA", "name_ar": "الشدة_العلوية", "kind": "major_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [904.74, 137.02], "art_subpaths": [{"v": [[12.03, -1.67], [12.63, -1.43], [26.3, -27.77], [29.44, -41.8], [30.48, -43.03], [31.6, -42.47], [31.8, -34.42], [7.25, 22.59], [6.49, 23.31], [-15.74, 41.16], [-29.72, 0.52], [-28.29, -4.06], [-27.01, -3.75], [-23.99, 10.76], [2.23, 4.86], [9.8, -13.51], [11.59, -13.95], [12.47, -10.88]], "i": [[0.08, -2.99], [-0.2, 0.24], [-2.87, 9.64], [-1.2, 4.66], [-0.48, 0.16], [-0.16, -0.44], [0.2, -2.75], [20.24, -8.85], [0.16, -0.32], [11.51, 1.99], [-1.04, 11.71], [-0.8, 1.27], [0.0, -0.68], [-3.11, -3.55], [-5.66, 10.16], [-1.99, 6.77], [-0.56, -0.56], [0.08, -1.35]], "o": [[-0.04, 0.36], [6.26, -7.93], [1.2, -3.98], [0.2, -0.68], [0.44, -0.12], [1.0, 2.83], [-1.31, 18.97], [-0.32, 0.16], [-4.18, 8.57], [-16.85, -2.83], [0.16, -1.75], [0.4, -0.56], [0.24, 4.42], [9.44, 10.84], [3.07, -5.5], [0.24, -0.76], [0.68, 0.72], [-0.24, 3.15]], "c": true}], "reveal_subpath": {"v": [[37.92, -45.82], [7.32, 30.68], [-36.54, -5.02]], "i": [[0.0, 0.0], [20.85, -11.42], [12.28, 10.0]], "o": [[-8.57, 21.42], [-20.85, 11.42], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.42, "t_end": 1.95, "dx": 0, "dy": -34, "rot0": 22.0, "rot_over": -4.5, "sc0": 60, "sc_over": 122.0, "float_phase": 3.8}, {"id": 18, "name_en": "13_TASHKEEL_UPPER_LEFT_FATHA", "name_ar": "الحركة_العلوية_اليسرى", "kind": "major_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [777.54, 243.94], "art_subpaths": [{"v": [[-19.11, 44.92], [-19.7, 45.28], [-19.9, 44.96], [26.36, -5.48], [26.0, -5.8], [-26.99, 15.52], [-42.93, 28.31], [-47.59, 34.21], [-47.51, 23.17], [-45.88, 11.1], [-42.17, -2.69], [-24.09, -18.23], [40.66, -42.49], [47.59, -37.51], [47.12, -30.22], [46.44, -22.29], [46.28, -21.58], [45.32, -16.08], [-18.51, 44.57]], "i": [[0.2, -0.2], [0.24, -0.08], [-0.16, 0.24], [-6.61, 9.4], [0.56, -0.24], [18.17, -6.3], [2.55, -7.77], [0.44, 8.77], [-0.36, 1.24], [-0.72, 3.94], [-1.75, 5.26], [-8.89, 2.99], [-21.32, 9.0], [-0.64, -5.62], [0.0, -2.59], [-0.32, -2.91], [0.12, -0.24], [0.4, -1.63], [15.06, -2.79]], "o": [[-0.16, 0.2], [-0.28, 0.04], [5.82, -9.92], [0.32, -0.48], [-17.17, 8.61], [-7.41, 2.55], [-0.04, 0.24], [-0.28, -6.1], [1.04, -3.79], [0.72, -3.9], [3.11, -9.28], [22.07, -7.49], [6.61, -2.83], [0.28, 2.47], [0.04, 2.75], [0.0, 0.24], [-0.8, 1.87], [-3.51, 13.47], [-0.16, 0.04]], "c": true}], "reveal_subpath": {"v": [[-52.14, 20.66], [49.86, -42.58], [-28.68, 49.22]], "i": [[0.0, 0.0], [-6.57, -8.0], [21.99, -25.7]], "o": [[28.56, -17.71], [6.57, 8.0], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 122.4, "smooth_tracer_subpath": null, "t_start": 1.48, "t_end": 2.02, "dx": -28, "dy": -22, "rot0": -18.0, "rot_over": 3.5, "sc0": 68, "sc_over": 118.0, "float_phase": 4.9}, {"id": 12, "name_en": "14_HOOK_TOP_LAM", "name_ar": "حلية_اللام_العلوية", "kind": "hook_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [1006.24, 181.94], "art_subpaths": [{"v": [[16.63, 3.09], [13.65, 9.58], [-11.53, -20.82], [-9.06, -39.31], [-13.57, -25.76], [-1.73, 28.51]], "i": [[-0.68, 12.63], [0.12, -1.24], [-6.3, 20.44], [2.95, -3.98], [0.72, -4.78], [-15.98, -14.42]], "o": [[-2.15, -3.47], [-3.03, 18.93], [-0.12, -1.67], [-2.27, 4.26], [-2.95, 19.12], [19.56, 14.78]], "c": true}], "reveal_subpath": {"v": [[-15.64, -49.94], [-8.5, 43.9], [22.1, 6.16]], "i": [[0.0, 0.0], [-10.57, -15.71], [-8.57, 10.57]], "o": [[2.0, 26.28], [10.57, 15.71], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 107.1, "smooth_tracer_subpath": null, "t_start": 1.3, "t_end": 1.78, "dx": 0, "dy": -26, "rot0": -25.0, "rot_over": 5.0, "sc0": 0, "sc_over": 132.0, "float_phase": 1.2}, {"id": 19, "name_en": "15_HOOK_MEEM_ALIF", "name_ar": "ألف_الميم_الخنجرية", "kind": "hook_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [1018.75, 697.78], "art_subpaths": [{"v": [[-11.46, -19.01], [5.44, 3.23], [7.99, 15.78], [7.51, 27.93], [8.03, 32.95], [9.14, 29.88], [10.1, 24.54], [8.71, -8.33], [-9.26, -32.87], [-11.38, -26.1], [-11.85, -21.16]], "i": [[-0.52, -0.44], [-3.19, -9.08], [-0.28, -4.26], [0.56, -4.02], [-1.31, 0.36], [-0.04, 0.28], [-0.24, 1.79], [3.27, 10.6], [8.25, 6.34], [0.08, -0.52], [0.0, -1.67]], "o": [[7.57, 5.82], [1.43, 4.06], [0.36, 4.66], [-0.08, 0.84], [0.56, -0.12], [0.48, -1.75], [1.43, -10.84], [-3.11, -10.0], [-0.56, -0.44], [-0.28, 1.63], [0.0, 0.6]], "c": true}], "reveal_subpath": {"v": [[-12.85, -40.48], [12.65, 41.12]], "i": [[0.0, 0.0], [-7.14, -22.85]], "o": [[7.14, 22.85], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 107.1, "smooth_tracer_subpath": null, "t_start": 1.38, "t_end": 1.85, "dx": 0, "dy": -24, "rot0": 20.0, "rot_over": -4.0, "sc0": 0, "sc_over": 130.0, "float_phase": 2.4}, {"id": 14, "name_en": "16_HOOK_MID_LEFT", "name_ar": "حلية_الوسط_المقوسة", "kind": "hook_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [833.85, 599.79], "art_subpaths": [{"v": [[24.34, 4.52], [19.92, 14.04], [-16.93, -30.46], [-13.27, -57.51], [-19.88, -37.71], [-2.59, 41.78]], "i": [[-1.0, 18.53], [0.2, -1.79], [-9.16, 29.96], [4.26, -5.86], [1.04, -7.01], [-23.35, -21.12]], "o": [[-3.15, -5.02], [-4.38, 27.69], [-0.16, -2.47], [-3.35, 6.22], [-4.3, 28.05], [28.69, 21.6]], "c": true}], "reveal_subpath": {"v": [[-21.75, -69.99], [-19.71, 57.51], [31.29, 11.61]], "i": [[0.0, 0.0], [-14.85, -22.85], [-14.28, 12.85]], "o": [[0.57, 35.7], [14.85, 22.85], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 117.3, "smooth_tracer_subpath": null, "t_start": 1.46, "t_end": 1.92, "dx": -18, "dy": 22, "rot0": -24.0, "rot_over": 5.0, "sc0": 0, "sc_over": 132.0, "float_phase": 3.6}, {"id": 15, "name_en": "17_HOOK_FAR_LEFT", "name_ar": "حلية_أقصى_اليسار", "kind": "hook_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [671.05, 530.14], "art_subpaths": [{"v": [[16.65, 3.09], [13.63, 9.58], [-11.55, -20.78], [-9.04, -39.31], [-13.59, -25.76], [-1.75, 28.51]], "i": [[-0.68, 12.67], [0.16, -1.24], [-6.26, 20.44], [2.91, -3.98], [0.76, -4.78], [-15.94, -14.38]], "o": [[-2.15, -3.43], [-2.99, 18.93], [-0.08, -1.71], [-2.31, 4.26], [-2.91, 19.16], [19.56, 14.78]], "c": true}], "reveal_subpath": {"v": [[-13.99, -51.34], [-9.91, 45.56], [20.69, 4.76]], "i": [[0.0, 0.0], [-9.71, -15.71], [-8.57, 11.42]], "o": [[1.14, 27.13], [9.71, 15.71], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 107.1, "smooth_tracer_subpath": null, "t_start": 1.54, "t_end": 1.98, "dx": -24, "dy": 16, "rot0": 25.0, "rot_over": -5.0, "sc0": 0, "sc_over": 132.0, "float_phase": 4.8}, {"id": 13, "name_en": "18_HOOK_BOTTOM_MID", "name_ar": "حلية_أسفل_الوسط", "kind": "hook_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [900.25, 779.56], "art_subpaths": [{"v": [[-16.63, -3.09], [-13.65, -9.58], [11.57, 20.78], [9.06, 39.31], [13.57, 25.76], [1.73, -28.51]], "i": [[0.68, -12.67], [-0.12, 1.2], [6.26, -20.44], [-2.91, 3.98], [-0.72, 4.78], [15.98, 14.38]], "o": [[2.15, 3.43], [3.03, -18.93], [0.08, 1.71], [2.27, -4.26], [2.95, -19.16], [-19.56, -14.78]], "c": true}], "reveal_subpath": {"v": [[-21.85, -40.66], [8.75, -30.46], [13.85, 51.14]], "i": [[0.0, 0.0], [-10.0, -25.7], [-1.43, -22.85]], "o": [[8.57, 2.86], [10.0, 25.7], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 107.1, "smooth_tracer_subpath": null, "t_start": 1.6, "t_end": 2.04, "dx": 0, "dy": 26, "rot0": -22.0, "rot_over": 4.5, "sc0": 0, "sc_over": 130.0, "float_phase": 5.5}, {"id": 16, "name_en": "19_HOOK_BOTTOM_LEFT", "name_ar": "حلية_أسفل_اليسار", "kind": "hook_tashkeel", "fill_col": [0.776, 0.612, 0.427], "target_pos": [752.37, 796.69], "art_subpaths": [{"v": [[16.61, 3.09], [13.63, 9.58], [-11.55, -20.82], [-9.04, -39.31], [-13.59, -25.76], [-1.75, 28.51]], "i": [[-0.68, 12.67], [0.16, -1.24], [-6.26, 20.48], [2.91, -3.98], [0.72, -4.78], [-15.94, -14.42]], "o": [[-2.11, -3.43], [-2.99, 18.93], [-0.12, -1.67], [-2.31, 4.26], [-2.91, 19.16], [19.56, 14.78]], "c": true}], "reveal_subpath": {"v": [[-13.71, -52.69], [-9.63, 44.21], [20.97, 8.51]], "i": [[0.0, 0.0], [-9.71, -17.14], [-8.57, 10.0]], "o": [[1.14, 27.13], [9.71, 17.14], [0.0, 0.0]], "c": false}, "reveal_stroke_w": 107.1, "smooth_tracer_subpath": null, "t_start": 1.66, "t_end": 2.1, "dx": -16, "dy": 26, "rot0": 24.0, "rot_over": -4.5, "sc0": 0, "sc_over": 130.0, "float_phase": 6.2}];

    /* ======================================================================
     * البدء ببناء المشروع (Main Execution Block)
     * ====================================================================== */
    app.beginUndoGroup("Build Salman Al-Najjar Logo Glass Shine — تحريك شعار سلمان النجار");

    try {
        enableGpuAnd16Bit();

        var proj = app.project;
        if (!proj) {
            proj = app.newProject();
        }

        var COMP_W = 1920;
        var COMP_H = 1080;
        var FPS    = 30;
        var DUR    = 8.0;

        /* ألوان الشعار الأصلية الدقيقة المستخرجة من ملف شعاري فيكتور.pdf */
        var COL_LOGO_BROWN   = [0.259, 0.129, 0.043]; /* البني الداكن الأصلي للحروف والنقاط */
        var COL_LOGO_GOLD    = [0.776, 0.612, 0.427]; /* الذهبي الدافئ الأصلي للتشكيل */
        var COL_BG_CREAM     = [0.965, 0.945, 0.910]; /* خلفية كريمية دافئة تبرز البني والذهبي والزجاج */
        var COL_BG_DARK_OPT  = [0.065, 0.045, 0.032]; /* خلفية داكنة اختيارية (مخفية افتراضياً) */

        var folderComps   = proj.items.addFolder("01_Salman_Logo_Main_Comps | الكومبوزيشنات_الرئيسية_دخول_وخروج");
        var folderPrecomp = proj.items.addFolder("02_Salman_Logo_Precomps | الكومبوزيشنات_الفرعية_للشعار_واللمعة");

        function buildCompleteSalmanLogoSetup(includeOutro) {
            var suffixEn = includeOutro ? "_INTRO_OUTRO" : "_INTRO_ONLY";
            var suffixAr = includeOutro ? "_دخول_وخروج" : "_دخول_فقط";
            var compPrefixNum = includeOutro ? "02" : "01";
            var compDur = includeOutro ? 9.5 : 8.0;

            /* 1. كومبوزيشن رسم وتحريك حروف الشعار الـ 19 */
            var logoRevealComp = proj.items.addComp(
                compPrefixNum + "_A_SALMAN_LOGO_KINETIC" + suffixEn + " | تحريك_حروف_الشعار" + suffixAr,
                COMP_W, COMP_H, 1.0, compDur, FPS
            );
            logoRevealComp.parentFolder = folderPrecomp;
            logoRevealComp.bgColor = COL_BG_CREAM;

            var eIdx;
            for (eIdx = 0; eIdx < SALMAN_LOGO_ELEMENTS.length; eIdx++) {
                buildAnimatedLogoElement(logoRevealComp, SALMAN_LOGO_ELEMENTS[eIdx], includeOutro);
            }
            createCalligraphyInkBubbles(logoRevealComp, COL_LOGO_BROWN, COL_LOGO_GOLD);

            /* 2. كومبوزيشن التدرج اللوني الثلاثي التتابعي (Offset + Fill) */
            var colorStackComp = proj.items.addComp(
                compPrefixNum + "_B_SALMAN_COLOR_STACK" + suffixEn + " | التدرج_اللوني_الثلاثي" + suffixAr,
                COMP_W, COMP_H, 1.0, compDur, FPS
            );
            colorStackComp.parentFolder = folderPrecomp;
            colorStackComp.bgColor = COL_BG_CREAM;

            /* موجات الدخول (أبيض -> ذهبي -> أصلي) */
            var stackWhiteIn = colorStackComp.layers.add(logoRevealComp);
            stackWhiteIn.name = "01_INTRO_WHITE_WAVE | موجة_الدخول_الأولى_أبيض";
            stackWhiteIn.startTime = 0.00;
            stackWhiteIn.outPoint  = 2.55;
            var fxW = safeProp(stackWhiteIn, "ADBE Effect Parade");
            if (fxW) {
                var fillW = fxW.addProperty("ADBE Fill");
                if (fillW) {
                    fillW.name = "Fill_White";
                    safeSetVal(safeProp(safeProp(safeProp(stackWhiteIn, "ADBE Effect Parade"), "Fill_White"), "ADBE Fill-0002"), [1.0, 1.0, 1.0]);
                }
            }

            var stackGoldIn = colorStackComp.layers.add(logoRevealComp);
            stackGoldIn.name = "02_INTRO_GOLD_WAVE | موجة_الدخول_الثانية_ذهبي";
            stackGoldIn.startTime = 0.12;
            stackGoldIn.outPoint  = 2.68;
            stackGoldIn.moveBefore(stackWhiteIn);
            var fxG = safeProp(stackGoldIn, "ADBE Effect Parade");
            if (fxG) {
                var fillG = fxG.addProperty("ADBE Fill");
                if (fillG) {
                    fillG.name = "Fill_Gold";
                    safeSetVal(safeProp(safeProp(safeProp(stackGoldIn, "ADBE Effect Parade"), "Fill_Gold"), "ADBE Fill-0002"), COL_LOGO_GOLD);
                }
            }

            /* إذا كان الكومبوزيشن يتضمن Outro، نضيف موجتي الخروج العكسيتين (ذهبي ثم أبيض) تحت الطبقة الأصلية
             * بداية من الثانية 6.10 حتى يتلاشى الشعار بتدرج لوني عكسي (الأصلي -> الذهبي -> الأبيض) */
            if (includeOutro) {
                var stackWhiteOut = colorStackComp.layers.add(logoRevealComp);
                stackWhiteOut.name = "03_OUTRO_WHITE_TAIL | موجة_الخروج_الأخيرة_أبيض";
                stackWhiteOut.startTime = 0.48;
                stackWhiteOut.inPoint   = 6.20;
                stackWhiteOut.moveBefore(stackGoldIn);
                var fxWO = safeProp(stackWhiteOut, "ADBE Effect Parade");
                if (fxWO) {
                    var fillWO = fxWO.addProperty("ADBE Fill");
                    if (fillWO) {
                        fillWO.name = "Fill_White_Out";
                        safeSetVal(safeProp(safeProp(safeProp(stackWhiteOut, "ADBE Effect Parade"), "Fill_White_Out"), "ADBE Fill-0002"), [1.0, 1.0, 1.0]);
                    }
                }

                var stackGoldOut = colorStackComp.layers.add(logoRevealComp);
                stackGoldOut.name = "04_OUTRO_GOLD_TAIL | موجة_الخروج_الوسطى_ذهبي";
                stackGoldOut.startTime = 0.36;
                stackGoldOut.inPoint   = 6.12;
                stackGoldOut.moveBefore(stackWhiteOut);
                var fxGO = safeProp(stackGoldOut, "ADBE Effect Parade");
                if (fxGO) {
                    var fillGO = fxGO.addProperty("ADBE Fill");
                    if (fillGO) {
                        fillGO.name = "Fill_Gold_Out";
                        safeSetVal(safeProp(safeProp(safeProp(stackGoldOut, "ADBE Effect Parade"), "Fill_Gold_Out"), "ADBE Fill-0002"), COL_LOGO_GOLD);
                    }
                }
            }

            var stackOrig = colorStackComp.layers.add(logoRevealComp);
            stackOrig.name = "05_ORIGINAL_LOGO_COLORS | الطبقة_الأساسية_بألوان_الشعار_الأصلية";
            stackOrig.startTime = 0.24;
            stackOrig.moveToBeginning();

            /* 3. كومبوزيشن شريط اللمعة الزجاجية الرفيع (36px Shape Layer Ribbon) */
            var shineComp = proj.items.addComp(
                compPrefixNum + "_C_SALMAN_SHINE_RIBBON" + suffixEn + " | شريط_اللمعة_الرفيع" + suffixAr,
                COMP_W, COMP_H, 1.0, compDur, FPS
            );
            shineComp.parentFolder = folderPrecomp;
            shineComp.bgColor = [0, 0, 0];

            var shineRibbon = shineComp.layers.addShape();
            shineRibbon.name = "SHINE_SLIM_RIBBON | شريط_اللمعة_الرفيع";
            var rootShine = safeProp(shineRibbon, "ADBE Root Vectors Group");
            if (rootShine) {
                var sGrp = rootShine.addProperty("ADBE Vector Group");
                sGrp.name = "Core_Ribbon_Group";
                var sCont = safeProp(sGrp, "ADBE Vectors Group");
                var sRect = sCont.addProperty("ADBE Vector Shape - Rect");
                sRect.name = "Ribbon_Rect";
                var sFill = sCont.addProperty("ADBE Vector Graphic - Fill");
                sFill.name = "Ribbon_Fill";

                var sGrp2 = safeProp(safeProp(shineRibbon, "ADBE Root Vectors Group"), "Core_Ribbon_Group");
                var sCont2 = safeProp(sGrp2, "ADBE Vectors Group");
                var rProp = safeProp(sCont2, "Ribbon_Rect");
                var fProp = safeProp(sCont2, "Ribbon_Fill");
                safeSetVal(safeProp(rProp, "ADBE Vector Rect Size"), [1500, 36]);
                safeSetVal(safeProp(rProp, "ADBE Vector Rect Roundness"), 18);
                safeSetVal(safeProp(fProp, "ADBE Vector Fill Color"), [1.0, 1.0, 1.0]);
                safeSetVal(safeProp(fProp, "ADBE Vector Fill Opacity"), 100);
                resetShapeAnchorPoint(shineRibbon);
            }

            var shineTr = safeProp(shineRibbon, "ADBE Transform Group");
            var shineRot = safeProp(shineTr, "ADBE Rotate Z") || safeProp(shineTr, "ADBE Rotation");
            safeSetVal(shineRot, -28);

            var shinePos = safeProp(shineTr, "ADBE Position");
            var shineOp  = safeProp(shineTr, "ADBE Opacity");

            if (shinePos) {
                /* الموجة الأولى: 1.80s -> 3.55s */
                shinePos.setValueAtTime(1.80, [COMP_W * 0.5 + 420, COMP_H * 0.5 - 560]);
                shinePos.setValueAtTime(3.55, [COMP_W * 0.5 - 420, COMP_H * 0.5 + 560]);
                shinePos.setValueAtTime(4.35, [COMP_W * 0.5 + 420, COMP_H * 0.5 - 560]);
                /* الموجة الثانية: 4.40s -> 6.05s */
                shinePos.setValueAtTime(4.40, [COMP_W * 0.5 + 420, COMP_H * 0.5 - 560]);
                shinePos.setValueAtTime(6.05, [COMP_W * 0.5 - 420, COMP_H * 0.5 + 560]);

                if (includeOutro) {
                    /* موجة وداع عكسية سريعة بالتزامن مع بداية انسحاب الحروف (6.15s -> 7.45s) */
                    shinePos.setValueAtTime(6.15, [COMP_W * 0.5 - 420, COMP_H * 0.5 + 560]);
                    shinePos.setValueAtTime(7.45, [COMP_W * 0.5 + 420, COMP_H * 0.5 - 560]);
                }

                var kp;
                for (kp = 1; kp <= shinePos.numKeys; kp++) {
                    applySafeEase(shinePos, kp, 0, 82, 0, 82);
                    zeroSpatialTangents(shinePos, kp);
                }
            }

            if (shineOp) {
                shineOp.setValueAtTime(0.00, 0);
                shineOp.setValueAtTime(1.80, 0);
                shineOp.setValueAtTime(2.05, 90);
                shineOp.setValueAtTime(3.30, 90);
                shineOp.setValueAtTime(3.55, 0);
                shineOp.setValueAtTime(4.40, 0);
                shineOp.setValueAtTime(4.65, 85);
                shineOp.setValueAtTime(5.80, 85);
                shineOp.setValueAtTime(6.05, 0);

                if (includeOutro) {
                    shineOp.setValueAtTime(6.15, 0);
                    shineOp.setValueAtTime(6.35, 80);
                    shineOp.setValueAtTime(7.20, 80);
                    shineOp.setValueAtTime(7.45, 0);
                }
            }
            shineRibbon.outPoint = includeOutro ? 7.55 : 6.15;

            var shineFxParade = safeProp(shineRibbon, "ADBE Effect Parade");
            if (shineFxParade) {
                var featherBlur = shineFxParade.addProperty("ADBE Gaussian Blur 2");
                if (featherBlur) {
                    featherBlur.name = "Ribbon_Soft_Feather | تنعيم_حواف_شريط_اللمعة";
                    var fbRef = safeProp(safeProp(shineRibbon, "ADBE Effect Parade"), "Ribbon_Soft_Feather | تنعيم_حواف_شريط_اللمعة");
                    safeSetVal(safeProp(fbRef, "ADBE Gaussian Blur 2-0001"), 22);
                }

                var tdFx = safeProp(shineRibbon, "ADBE Effect Parade").addProperty("ADBE Turbulent Displace");
                if (tdFx) {
                    tdFx.name = "Turbulent_Displace | تموج_اللمعة_الديناميكي";
                    var tdRef = safeProp(safeProp(shineRibbon, "ADBE Effect Parade"), "Turbulent_Displace | تموج_اللمعة_الديناميكي");
                    var tdAmount = safeProp(tdRef, "ADBE Turbulent Displace-0002");
                    var tdSize   = safeProp(tdRef, "ADBE Turbulent Displace-0003");
                    var tdOffset = safeProp(tdRef, "ADBE Turbulent Displace-0004");
                    var tdComplx = safeProp(tdRef, "ADBE Turbulent Displace-0005");

                    safeSetVal(tdAmount, 38);
                    safeSetVal(tdSize, 64);
                    safeSetVal(tdComplx, 2.2);

                    if (tdOffset) {
                        tdOffset.setValueAtTime(1.80, [COMP_W * 0.5, 160]);
                        tdOffset.setValueAtTime(3.55, [COMP_W * 0.5, 920]);
                        tdOffset.setValueAtTime(4.40, [COMP_W * 0.5, 160]);
                        tdOffset.setValueAtTime(6.05, [COMP_W * 0.5, 920]);
                        if (includeOutro) {
                            tdOffset.setValueAtTime(6.15, [COMP_W * 0.5, 920]);
                            tdOffset.setValueAtTime(7.45, [COMP_W * 0.5, 160]);
                        }
                        var ko;
                        for (ko = 1; ko <= tdOffset.numKeys; ko++) {
                            applySafeEase(tdOffset, ko, 0, 82, 0, 82);
                        }
                    }
                }
            }

            var shineLogoMatte = shineComp.layers.add(logoRevealComp);
            shineLogoMatte.name = "SALMAN_LOGO_ALPHA_MATTE | قناع_حدود_شعار_سلمان_البجل";
            shineLogoMatte.startTime = 0.24;
            applyAlphaTrackMatte(shineRibbon, shineLogoMatte);

            /* 4. الكومبوزيشن الرئيسي (Main Composition) */
            var mainTitle = includeOutro
                ? "02_MAIN_SALMAN_LOGO_INTRO_AND_OUTRO | المشهد_الثاني_دخول_وخروج_الشعار_Intro_Outro"
                : "01_MAIN_SALMAN_LOGO_INTRO_ONLY | المشهد_الأول_دخول_الشعار_فقط_Intro";

            var mainComp = proj.items.addComp(mainTitle, COMP_W, COMP_H, 1.0, compDur, FPS);
            mainComp.parentFolder = folderComps;
            mainComp.bgColor = COL_BG_CREAM;
            mainComp.comment = includeOutro
                ? "المشهد المتكامل (دخول Intro + ثبات حيوي ولمعة زجاجية + خروج عكسي Outro لشعار سلمان النجار)"
                : "مشهد الدخول فقط (Intro + لمعة زجاجية مزدوجة رفيعة + ثبات حيوي لشعار سلمان النجار)";

            var bgDarkOptional = mainComp.layers.addSolid(
                COL_BG_DARK_OPT,
                "00_BG_DARK_OPTIONAL | خلفية_داكنة_اختيارية_فعل_العين_للتجربة",
                COMP_W, COMP_H, 1.0, compDur
            );
            bgDarkOptional.enabled = false;

            var bgCream = mainComp.layers.addSolid(
                COL_BG_CREAM,
                "01_BG_WARM_CREAM_STUDIO | الخلفية_الكريمية_الفاخرة",
                COMP_W, COMP_H, 1.0, compDur
            );
            bgCream.moveBefore(bgDarkOptional);

            var bgHalo = mainComp.layers.addShape();
            bgHalo.name = "02_BG_SOFT_HALO | هالة_إضاءة_خلفية_ناعمة";
            var rootHalo = safeProp(bgHalo, "ADBE Root Vectors Group");
            if (rootHalo) {
                var hGrp = rootHalo.addProperty("ADBE Vector Group");
                hGrp.name = "Halo_Ellipse";
                var hCont = safeProp(hGrp, "ADBE Vectors Group");
                var hEl = hCont.addProperty("ADBE Vector Shape - Ellipse");
                hEl.name = "Ellipse_Path";
                var hFl = hCont.addProperty("ADBE Vector Graphic - Fill");
                hFl.name = "Ellipse_Fill";

                var hGrp2 = safeProp(safeProp(bgHalo, "ADBE Root Vectors Group"), "Halo_Ellipse");
                var hCont2 = safeProp(hGrp2, "ADBE Vectors Group");
                safeSetVal(safeProp(safeProp(hCont2, "Ellipse_Path"), "ADBE Vector Ellipse Size"), [1050, 920]);
                safeSetVal(safeProp(safeProp(hCont2, "Ellipse_Fill"), "ADBE Vector Fill Color"), [1.0, 0.99, 0.96]);
                resetShapeAnchorPoint(bgHalo);
            }
            var haloTr = safeProp(bgHalo, "ADBE Transform Group");
            safeSetVal(safeProp(haloTr, "ADBE Position"), [COMP_W * 0.5, COMP_H * 0.5]);
            var haloFx = safeProp(bgHalo, "ADBE Effect Parade");
            if (haloFx) {
                var hBlur = haloFx.addProperty("ADBE Gaussian Blur 2");
                if (hBlur) {
                    hBlur.name = "Soft_Halo_Blur";
                    var hbRef = safeProp(safeProp(bgHalo, "ADBE Effect Parade"), "Soft_Halo_Blur");
                    safeSetVal(safeProp(hbRef, "ADBE Gaussian Blur 2-0001"), 160);
                }
            }
            bgHalo.moveBefore(bgCream);

            var bumpMapLayer = mainComp.layers.add(logoRevealComp);
            bumpMapLayer.name = "03_BUMP_MAP_WHITE_HIDDEN | طبقة_البروز_البيضاء_المخفية_لتأثير_CC_Glass";
            bumpMapLayer.startTime = 0.24;
            bumpMapLayer.moveBefore(bgHalo);
            var bumpFx = safeProp(bumpMapLayer, "ADBE Effect Parade");
            if (bumpFx) {
                var bumpFill = bumpFx.addProperty("ADBE Fill");
                if (bumpFill) {
                    bumpFill.name = "Fill_Pure_White_Bump";
                    safeSetVal(safeProp(safeProp(safeProp(bumpMapLayer, "ADBE Effect Parade"), "Fill_Pure_White_Bump"), "ADBE Fill-0002"), [1.0, 1.0, 1.0]);
                }
            }
            bumpMapLayer.enabled = false;

            var mainLogoLayer = mainComp.layers.add(colorStackComp);
            mainLogoLayer.name = "04_MAIN_SALMAN_LOGO_STACK | شعار_سلمان_البجل_بالتدرج_اللوني";
            mainLogoLayer.moveBefore(bumpMapLayer);
            var logoFx = safeProp(mainLogoLayer, "ADBE Effect Parade");
            if (logoFx) {
                var dShadow = logoFx.addProperty("ADBE Drop Shadow");
                if (dShadow) {
                    dShadow.name = "Soft_Elevation_Shadow | ظل_بروز_ناعم";
                    var dsRef = safeProp(safeProp(mainLogoLayer, "ADBE Effect Parade"), "Soft_Elevation_Shadow | ظل_بروز_ناعم");
                    safeSetVal(safeProp(dsRef, "ADBE Drop Shadow-0002"), 42);
                    safeSetVal(safeProp(dsRef, "ADBE Drop Shadow-0003"), 135);
                    safeSetVal(safeProp(dsRef, "ADBE Drop Shadow-0004"), 10);
                    safeSetVal(safeProp(dsRef, "ADBE Drop Shadow-0005"), 28);
                }
            }

            var shineEndPt = includeOutro ? 7.60 : 6.20;
            var glassShine1 = mainComp.layers.add(shineComp);
            glassShine1.name = "05_GLASS_SHINE_PRIMARY | اللمعة_الزجاجية_الأساسية_CC_Glass";
            glassShine1.moveBefore(mainLogoLayer);
            glassShine1.outPoint = shineEndPt;
            try { glassShine1.blendingMode = BlendingMode.ADD; } catch (eBM1) {}
            var gs1Tr = safeProp(glassShine1, "ADBE Transform Group");
            safeSetVal(safeProp(gs1Tr, "ADBE Opacity"), 58);

            var glassShine2 = mainComp.layers.add(shineComp);
            glassShine2.name = "06_GLASS_SHINE_SECONDARY | اللمعة_الزجاجية_الثانوية_الناعمة";
            glassShine2.startTime = 0.14;
            glassShine2.outPoint  = shineEndPt + 0.14;
            glassShine2.moveBefore(glassShine1);
            try { glassShine2.blendingMode = BlendingMode.SCREEN; } catch (eBM2) {}
            var gs2Tr = safeProp(glassShine2, "ADBE Transform Group");
            safeSetVal(safeProp(gs2Tr, "ADBE Opacity"), 38);

            var actualBumpIndex = bumpMapLayer.index;
            applyAndConfigureCCGlass(glassShine1, actualBumpIndex, 12.0, 28.0, -55.0, 105.0, 68.0);
            applyOuterGlowStyleAndEffect(glassShine1, [1.0, 0.96, 0.85], 22, 55);

            applyAndConfigureCCGlass(glassShine2, actualBumpIndex, 18.0, -22.0, 42.0, 95.0, 72.0);
            applyOuterGlowStyleAndEffect(glassShine2, [1.0, 0.92, 0.76], 28, 45);

            bgHalo.threeDLayer = true;
            mainLogoLayer.threeDLayer = true;
            glassShine1.threeDLayer = true;
            glassShine2.threeDLayer = true;

            var camNull = mainComp.layers.addNull(compDur);
            camNull.name = "07_CAM_CTRL | متحكم_الكاميرا_السينمائية";
            camNull.threeDLayer = true;
            var nullTr = safeProp(camNull, "ADBE Transform Group");
            safeSetVal(safeProp(nullTr, "ADBE Anchor Point"), [0, 0, 0]);
            var nullPos = safeProp(nullTr, "ADBE Position");
            if (nullPos) {
                nullPos.setValueAtTime(0.0, [COMP_W * 0.5, COMP_H * 0.5, -65]);
                nullPos.setValueAtTime(2.6, [COMP_W * 0.5, COMP_H * 0.5, 0]);
                nullPos.setValueAtTime(6.0, [COMP_W * 0.5, COMP_H * 0.5, 42]);
                if (includeOutro) {
                    nullPos.setValueAtTime(8.6, [COMP_W * 0.5, COMP_H * 0.5, -75]);
                } else {
                    nullPos.setValueAtTime(8.0, [COMP_W * 0.5, COMP_H * 0.5, 48]);
                }
                var kc;
                for (kc = 1; kc <= nullPos.numKeys; kc++) {
                    applySafeEase(nullPos, kc, 0, 82, 0, 82);
                    zeroSpatialTangents(nullPos, kc);
                }
            }

            var cam = mainComp.layers.addCamera("08_MAIN_CAMERA | الكاميرا_الرئيسية", [COMP_W * 0.5, COMP_H * 0.5]);
            try { cam.autoOrient = AutoOrientType.NO_AUTO_ORIENT; } catch (eAO) {}
            var zDist = 2666.67;
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

            return mainComp;
        }

        /* بناء الكومبوزيشن الأول (دخول فقط Intro Only) والكومبوزيشن الثاني (دخول وخروج Intro + Outro) */
        var compIntroOnly     = buildCompleteSalmanLogoSetup(false);
        var compIntroAndOutro = buildCompleteSalmanLogoSetup(true);

        try { compIntroAndOutro.openInViewer(); } catch (eViewer) {}

        alert(
            "✅ تم بناء مشروعي شعار «سلمان النجار» (الإصدار V08 النهائي — Intro + Intro/Outro) بنجاح!\n\n" +
            "• تجد داخل مجلد (01_Salman_Logo_Main_Comps) كومبوزيشنين رئيسيين:\n" +
            "  1. [01_MAIN_SALMAN_LOGO_INTRO_ONLY] (8.0s): دخول الشعار فقط + اللمعة الزجاجية الرفيعة.\n" +
            "  2. [02_MAIN_SALMAN_LOGO_INTRO_AND_OUTRO] (9.5s): دخول الشعار + اللمعة الزجاجية + حركة الخروج العكسية الكاملة (Outro) بداية من الثانية 6.15 (لمعة وداعية + تدرج لوني عكسي من الأصلي للذهبي للأبيض + انسحاب المسارات Trim Paths وانكماش مرن للنقاط والتشكيل)."
        );

    } catch (err) {
        alert("حدث خطأ أثناء بناء مشروع الشعار:\n" + err.toString() + (err.line ? "\nالسطر: " + err.line : ""));
    } finally {
        app.endUndoGroup();
    }

})();
```

---

<a id="file-19"></a>

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
    /* V15: explicit matte status; preserve Style F/isometric helpers below. */
    function applyAlphaTrackMatte(targetLayer, matteLayer) {
        if (!targetLayer || !matteLayer || targetLayer === matteLayer) return false;
        try {
            if (typeof targetLayer.setTrackMatte === "function") {
                targetLayer.setTrackMatte(matteLayer, TrackMatteType.ALPHA);
                matteLayer.enabled = false;
                return true;
            }
        } catch (eModern) {}
        try {
            matteLayer.moveBefore(targetLayer);
            targetLayer.trackMatteType = TrackMatteType.ALPHA;
            matteLayer.enabled = false;
            return true;
        } catch (eLegacy) { return false; }
    }

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
                if (actualFont === String(tryList[cIdx]).toLowerCase() &&
                (actualFont.indexOf(fk) !== -1 || actualFam.indexOf(fk) !== -1)) {
                    return verifyDoc.font;
                }
            } catch (fErr) {}
        }
        return null; // No verified candidate; caller must stop or report an explicit fallback.
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

<a id="file-20"></a>

## templates/salman_motion_timing_helpers.js

```javascript
/* Salman Motion V18 — ES3-style timing math; no project mutation on load.
 * Values are design defaults, not a reconstruction of a reference's AE curves.
 */
var SalmanMotionTiming = (function () {
    function finite(n) { return typeof n === "number" && isFinite(n); }
    function clamp01(u) { if (!finite(u)) throw new Error("Nonfinite time/value"); return Math.max(0, Math.min(1, u)); }
    function unit(t, start, duration) {
        if (!finite(t) || !finite(start) || !finite(duration) || duration <= 0) throw new Error("Invalid timing interval");
        return clamp01((t - start) / duration);
    }
    function smooth(u) { u = clamp01(u); return u * u * (3 - 2 * u); }
    function outCubic(u) { u = clamp01(u); return 1 - Math.pow(1 - u, 3); }
    function backOut(u, amount) {
        u = clamp01(u); amount = amount === undefined ? 1.15 : amount;
        if (!finite(amount) || amount < 0 || amount > 3) throw new Error("Invalid overshoot amount");
        var x = u - 1; return 1 + (amount + 1) * x * x * x + amount * x * x;
    }
    function lerp(a, b, u) {
        if (!finite(a) || !finite(b) || !finite(u)) throw new Error("Invalid interpolation");
        var value = (1 - u) * a + u * b; // u may exceed 1 intentionally.
        if (!finite(value)) throw new Error("Interpolation overflow");
        return value;
    }
    function color(a, b, u) {
        if (!a || !b || a.length !== b.length || (a.length !== 3 && a.length !== 4)) throw new Error("RGB/RGBA required");
        u = clamp01(u); var out = [], i;
        for (i = 0; i < a.length; i++) {
            if (!finite(a[i]) || !finite(b[i]) || a[i] < 0 || a[i] > 1 || b[i] < 0 || b[i] > 1) throw new Error("Color channel outside 0..1");
            out.push(lerp(a[i], b[i], u));
        }
        return out;
    }
    function floatOffset(t, start, end, amplitude, hz, phase) {
        if (!finite(end) || !finite(start) || end <= start || !finite(amplitude) || amplitude < 0 || !finite(hz) || hz < 0 || !finite(phase === undefined ? 0 : phase)) throw new Error("Invalid float parameters");
        var u = unit(t, start, end - start);
        if (u === 0 || u === 1) return 0;
        var envelope = Math.pow(Math.sin(Math.PI * u), 2);
        var angle = 2 * Math.PI * hz * (t - start) + (phase || 0);
        if (!finite(angle)) throw new Error("Float frequency/time overflow");
        var value = amplitude * envelope * Math.sin(angle);
        if (!finite(value)) throw new Error("Float output overflow");
        return value;
    }
    function positiveZoom(a, b, u) {
        if (!finite(a) || !finite(b) || a <= 0 || b <= 0) throw new Error("Zoom values must be positive");
        var value = Math.exp(lerp(Math.log(a), Math.log(b), clamp01(u)));
        if (!finite(value) || value <= 0) throw new Error("Zoom output overflow/underflow");
        return value;
    }
    function sampleTimes(start, end, fps, stride, events) {
        if (!finite(start) || !finite(end) || start < 0 || end <= start || !finite(fps) || fps <= 0 || !finite(stride) || stride < 1 || stride % 1) throw new Error("Invalid sampling range");
        var count = Math.ceil((end - start) * fps / stride);
        if (count > 20000 || (events && events.length > 20000)) throw new Error("Sample budget exceeded; use a shorter range");
        var times = [start, end], i, t, out = [];
        for (i = 1; i < count; i++) {
            t = start + i * stride / fps; if (t < end) times.push(t);
        }
        events = events || [];
        for (i = 0; i < events.length; i++) {
            if (!finite(events[i])) throw new Error("Nonfinite event time");
            if (events[i] >= start && events[i] <= end) times.push(events[i]);
        }
        times.sort(function (a, b) { return a - b; });
        var epsilon = Math.min(0.0000001, stride / fps * 0.000001, (end - start) * 0.000000001);
        for (i = 0; i < times.length; i++) {
            if (!out.length || Math.abs(times[i] - out[out.length - 1]) > epsilon) out.push(times[i]);
            else if (times[i] === end) out[out.length - 1] = end;
        }
        if (out.length > 20000) throw new Error("Combined sample budget exceeded");
        return out;
    }
    return {unit:unit, smooth:smooth, outCubic:outCubic, backOut:backOut, lerp:lerp,
        color:color, floatOffset:floatOffset, positiveZoom:positiveZoom, sampleTimes:sampleTimes};
})();
```

---

<a id="file-21"></a>

## templates/salman_prebuild_setup.jsx

```javascript
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
```

---

<a id="file-22"></a>

## templates/salman_spatial_arena_helpers.js

```javascript
/* Salman Motion V19 — explicit ES3-style spatial-arena helpers.
 * Defines a namespace only. Call from the actual AE builder after input validation.
 * Two-plane cards are 2.5D, not closed/extruded solid geometry.
 */
var SalmanSpatialArena = (function () {
    function finite(n) { return typeof n === "number" && isFinite(n); }
    function positive(n) { return finite(n) && n > 0; }
    function vector(v, count) {
        if (!v || v.length !== count) throw new Error("Invalid vector dimensions");
        for (var i = 0; i < count; i++) if (!finite(v[i])) throw new Error("Nonfinite vector");
        return v;
    }
    function prop(parent, name) {
        var p = parent && parent.property(name);
        if (!p) throw new Error("Required AE property unavailable: " + name);
        return p;
    }
    function tr(layer) { return prop(layer, "ADBE Transform Group"); }
    function null3D(comp, name, parent, position) {
        vector(position, 3);
        var layer = comp.layers.addNull(comp.duration); layer.name = name; layer.threeDLayer = true;
        if (parent) layer.parent = parent;
        prop(tr(layer), "ADBE Anchor Point").setValue([0, 0, 0]);
        prop(tr(layer), "ADBE Position").setValue(position);
        return layer;
    }
    function createGimbal(comp, worldPosition, zoom) {
        vector(worldPosition, 3); if (!positive(zoom)) throw new Error("Positive camera zoom required");
        var pos = null3D(comp, "MASTER_CAM_POS_CTRL | مسار_الكاميرا", null, worldPosition);
        var orbit = null3D(comp, "MASTER_CAM_ORBIT_GIMBAL | زاوية_الكاميرا", pos, [0, 0, 0]);
        var camera = comp.layers.addCamera("MAIN_CAMERA | كاميرا_الساحة", [comp.width / 2, comp.height / 2]);
        camera.autoOrient = AutoOrientType.NO_AUTO_ORIENT;
        prop(prop(camera, "ADBE Camera Options Group"), "ADBE Camera Zoom").setValue(zoom);
        camera.parent = orbit;
        prop(tr(camera), "ADBE Position").setValue([0, 0, -zoom]);
        prop(tr(camera), "ADBE Orientation").setValue([0, 0, 0]);
        prop(tr(camera), "ADBE Rotate X").setValue(0);
        prop(tr(camera), "ADBE Rotate Y").setValue(0);
        prop(tr(camera), "ADBE Rotate Z").setValue(0);
        return {camera:camera, position:pos, orbit:orbit};
    }
    function applyCameraTour(rig, frames) {
        if (!frames || frames.length < 2 || frames.length > 20000) throw new Error("Camera tour needs 2..20000 samples");
        var properties = [prop(tr(rig.position), "ADBE Position"), prop(tr(rig.orbit), "ADBE Rotate X"),
            prop(tr(rig.orbit), "ADBE Rotate Y"), prop(tr(rig.orbit), "ADBE Rotate Z")];
        var duration = rig.position.containingComp.duration, times = [], values = [[],[],[],[]], i, j, f, prev = -Infinity;
        for (j = 0; j < properties.length; j++) if (properties[j].numKeys || properties[j].expressionEnabled) throw new Error("Camera property already animated");
        for (i = 0; i < frames.length; i++) {
            f = frames[i]; vector(f, 7);
            if (f[0] < 0 || f[0] > duration || f[0] <= prev) throw new Error("Invalid camera sample time");
            prev = f[0]; times.push(f[0]); values[0].push([f[1],f[2],f[3]]);
            values[1].push(f[4]); values[2].push(f[5]); values[3].push(f[6]);
        }
        for (j = 0; j < properties.length; j++) {
            properties[j].setValuesAtTimes(times, values[j]);
            for (i = 1; i <= properties[j].numKeys; i++) {
                properties[j].setInterpolationTypeAtKey(i, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                if (j === 0) {
                    properties[j].setSpatialAutoBezierAtKey(i, false);
                    properties[j].setSpatialContinuousAtKey(i, false);
                    properties[j].setSpatialTangentsAtKey(i, [0,0,0], [0,0,0]);
                }
            }
        }
        return rig; // Input samples must already contain the intended easing and holds.
    }
    function createStation(comp, name, worldPosition) { return null3D(comp, name, null, worldPosition); }
    function windowLayer(layer, start, end, opacityKeys) {
        var duration = layer.containingComp.duration;
        if (!finite(start) || !finite(end) || start < 0 || end <= start || end > duration) throw new Error("Invalid layer lifetime");
        var opacity = null, i, key, previous = -Infinity, times = [], values = [];
        if (opacityKeys && opacityKeys.length) {
            opacity = prop(tr(layer), "ADBE Opacity");
            if (opacity.numKeys || opacity.expressionEnabled) throw new Error("Opacity already owned: combine its timeline explicitly");
            for (i = 0; i < opacityKeys.length; i++) {
                key = opacityKeys[i]; vector(key, 2);
                if (key[0] < start || key[0] > end || key[0] <= previous || key[1] < 0 || key[1] > 100) throw new Error("Invalid opacity timeline");
                previous = key[0]; times.push(key[0]); values.push(key[1]);
            }
        }
        layer.inPoint = start; layer.outPoint = end;
        if (opacity) {
            opacity.setValuesAtTimes(times, values);
            for (i = 1; i <= opacity.numKeys; i++) opacity.setInterpolationTypeAtKey(i, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
        }
        return layer; // Null in/out/opacity does not retire or fade its descendants.
    }
    function previewResolution(comp, factor) {
        if (factor !== 1 && factor !== 2 && factor !== 4) throw new Error("Preview factor must be 1, 2 or 4");
        comp.resolutionFactor = [factor, factor]; return factor;
    }
    function bentoPositions(count, columns, gapX, gapY) {
        if (!finite(count) || count < 1 || count > 10000 || count % 1 || !finite(columns) || columns < 1 || columns > count || columns % 1 || !positive(gapX) || !positive(gapY)) throw new Error("Invalid bento layout");
        var rows = Math.ceil(count / columns), result = [], i, row, col;
        for (i = 0; i < count; i++) {
            row = Math.floor(i / columns); col = i % columns;
            result.push([(columns - 1) * gapX / 2 - col * gapX, row * gapY - (rows - 1) * gapY / 2, 0]);
        }
        return result; // Right-first rows; select 2 columns for portrait, 3 for landscape as appropriate.
    }
    function coverRadius(width, height, center) {
        if (!positive(width) || !positive(height)) throw new Error("Invalid frame dimensions");
        vector(center, 2);
        var dx = Math.max(Math.abs(center[0]), Math.abs(width - center[0]));
        var dy = Math.max(Math.abs(center[1]), Math.abs(height - center[1]));
        return Math.sqrt(dx * dx + dy * dy);
    }
    function sphereInFrustum(cameraPoint, radius, width, height, zoom) {
        vector(cameraPoint, 3);
        if (!finite(radius) || radius < 0 || !positive(width) || !positive(height) || !positive(zoom)) throw new Error("Invalid frustum arguments");
        var x = cameraPoint[0], y = cameraPoint[1], z = cameraPoint[2];
        var tx = width / (2 * zoom), ty = height / (2 * zoom);
        return {potentiallyVisible:z + radius > 0 &&
            Math.abs(x) - z * tx <= radius * Math.sqrt(1 + tx * tx) &&
            Math.abs(y) - z * ty <= radius * Math.sqrt(1 + ty * ty),
            nearCrossing:z - radius <= 0 && z + radius > 0};
        // Conservative sphere/side-plane intersection; no occlusion, far plane or AE clipping claim.
    }
    function color(c) { vector(c, 3); for (var i = 0; i < 3; i++) if (c[i] < 0 || c[i] > 1) throw new Error("Color outside 0..1"); }
    function rectangle(layer, groupName, size, fill, stroke, width, roundness) {
        vector(size, 2); if (!positive(size[0]) || !positive(size[1]) || !finite(roundness) || roundness < 0) throw new Error("Invalid rectangle");
        if (fill) color(fill); if (stroke) { color(stroke); if (!positive(width)) throw new Error("Positive stroke required"); }
        var root = prop(layer, "ADBE Root Vectors Group");
        if (root.property(groupName)) throw new Error("Duplicate vector group: " + groupName);
        var g = root.addProperty("ADBE Vector Group"); g.name = groupName;
        function contents() { return prop(prop(prop(layer, "ADBE Root Vectors Group"), groupName), "ADBE Vectors Group"); }
        var r = contents().addProperty("ADBE Vector Shape - Rect"); r.name = "Geometry";
        if (fill) { var f = contents().addProperty("ADBE Vector Graphic - Fill"); f.name = "Fill"; }
        if (stroke) { var st = contents().addProperty("ADBE Vector Graphic - Stroke"); st.name = "Stroke"; }
        r = prop(contents(), "Geometry");
        prop(r, "ADBE Vector Rect Size").setValue(size);
        prop(r, "ADBE Vector Rect Position").setValue([0, 0]);
        prop(r, "ADBE Vector Rect Roundness").setValue(roundness);
        if (fill) prop(prop(contents(), "Fill"), "ADBE Vector Fill Color").setValue([fill[0], fill[1], fill[2], 1]);
        if (stroke) {
            st = prop(contents(), "Stroke"); prop(st, "ADBE Vector Stroke Color").setValue([stroke[0], stroke[1], stroke[2], 1]);
            prop(st, "ADBE Vector Stroke Width").setValue(width);
        }
        return prop(prop(layer, "ADBE Root Vectors Group"), groupName);
    }
    function card(comp, parent, name, center, size, faceColor, bevelColor, depth) {
        vector(center, 3); vector(size, 2); color(faceColor); color(bevelColor);
        if (!positive(size[0]) || !positive(size[1]) || !finite(depth) || depth < 0) throw new Error("Invalid card size/depth");
        var rig = null3D(comp, name + "_RIG", parent, center);
        function plane(suffix, pos, col) {
            var l = comp.layers.addShape(); l.name = name + suffix; l.threeDLayer = true; l.parent = rig;
            prop(tr(l), "ADBE Anchor Point").setValue([0, 0, 0]); prop(tr(l), "ADBE Position").setValue(pos);
            rectangle(l, "Card", size, col, null, 0, Math.min(36, size[0] / 4, size[1] / 4)); return l;
        }
        var bevel = plane("_BEVEL", [6, 8, depth], bevelColor), face = plane("_FACE", [0, 0, 0], faceColor);
        return {rig:rig, face:face, bevel:bevel}; // Explicitly window/fade both renderable layers when retiring.
    }
    function selectionFrame(comp, parent, name, center, size, strokeColor, handleColor) {
        vector(center, 3); vector(size, 2); color(strokeColor); color(handleColor);
        if (!positive(size[0]) || !positive(size[1])) throw new Error("Invalid selection frame");
        var l = comp.layers.addShape(); l.name = name; l.threeDLayer = true; if (parent) l.parent = parent;
        prop(tr(l), "ADBE Anchor Point").setValue([0, 0, 0]); prop(tr(l), "ADBE Position").setValue(center);
        rectangle(l, "Frame", size, null, strokeColor, 3, 0);
        var corners = [[-1,-1],[1,-1],[-1,1],[1,1]], i, group;
        for (i = 0; i < corners.length; i++) {
            rectangle(l, "Handle_" + i, [16,16], handleColor, strokeColor, 2, 2);
            group = prop(prop(l, "ADBE Root Vectors Group"), "Handle_" + i);
            prop(prop(group, "ADBE Vector Transform Group"), "ADBE Vector Position").setValue([corners[i][0] * size[0] / 2, corners[i][1] * size[1] / 2]);
        }
        return l;
    }
    return {createGimbal:createGimbal, applyCameraTour:applyCameraTour, createStation:createStation, windowLayer:windowLayer,
        previewResolution:previewResolution, bentoPositions:bentoPositions, coverRadius:coverRadius,
        sphereInFrustum:sphereInFrustum, card:card, selectionFrame:selectionFrame};
})();
```

---

<a id="file-23"></a>

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

<a id="file-24"></a>

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

<a id="file-25"></a>

## scripts/review_motion_render.py

```python
#!/usr/bin/env python3
"""Sample an encoded local video into timestamped contact sheets. No quality score or AE execution."""
import argparse
from fractions import Fraction
import io
import json
import math
from pathlib import Path
import subprocess
from PIL import Image, ImageDraw, ImageFont


def run(args):
    return subprocess.run(args, check=True, capture_output=True, timeout=90).stdout


def timing_events(path):
    raw = path.read_text(encoding="utf-8-sig").strip().rstrip(";").strip()
    if raw.startswith("(") and raw.endswith(")"):
        raw = raw[1:-1]
    data = json.loads(raw)
    result = []
    for scene in data.get("scenes", []):
        for entry in [scene] + scene.get("cues", []):
            for key in ("start", "end"):
                t = entry.get(key)
                if isinstance(t, (int, float)) and not isinstance(t, bool) and math.isfinite(t):
                    result.append(t)
    return result


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("video", type=Path)
    p.add_argument("--out", required=True, type=Path, help="New directory, never overwritten.")
    p.add_argument("--interval", type=float, default=2.0)
    p.add_argument("--start", type=float, default=0)
    p.add_argument("--end", type=float)
    p.add_argument("--timing", type=Path, help="Optional unshifted JSON timeline; sample around boundaries too.")
    a = p.parse_args()
    if not math.isfinite(a.interval) or a.interval < 0.05:
        p.error("interval must be finite and >= 0.05 seconds")
    if a.out.exists():
        p.error("output directory exists; choose a new version")
    meta = json.loads(run(["ffprobe", "-v", "error", "-show_format", "-show_streams", "-of", "json", str(a.video.resolve())]))
    video = next((x for x in meta["streams"] if x.get("codec_type") == "video"), None)
    if not video:
        p.error("no video stream")
    duration = float(video.get("duration") or meta["format"].get("duration", 0))
    try:
        fps = float(Fraction(video.get("avg_frame_rate", "0/1")))
    except (ValueError, ZeroDivisionError):
        fps = 0
    if not math.isfinite(duration) or duration <= 0 or not math.isfinite(fps) or fps <= 0:
        p.error("positive duration and average fps required")
    end = duration if a.end is None else a.end
    if not math.isfinite(a.start) or not math.isfinite(end) or not 0 <= a.start < end <= duration:
        p.error("range must satisfy 0 <= start < end <= duration")
    last = max(a.start, end - 1 / fps)
    count = math.ceil((end - a.start) / a.interval)
    if count > 600:
        p.error("more than 600 samples; review smaller time ranges or increase interval")
    times = {a.start, last}
    times.update(min(last, a.start + i * a.interval) for i in range(count))
    if a.timing:
        for t in timing_events(a.timing):
            for delta in (-1 / fps, 0, 1 / fps):
                at = t + delta
                if a.start <= at <= last:
                    times.add(at)
    times = sorted({round(t, 6) for t in times})
    if len(times) > 600:
        p.error("more than 600 event samples; review smaller time ranges")
    a.out.mkdir(parents=True)
    cell_w, cell_h, columns, per_page = 326, 210, 4, 24
    try:
        font = ImageFont.truetype("DejaVuSans.ttf", 14)
    except OSError:
        font = ImageFont.load_default()
    pages = []
    for page_start in range(0, len(times), per_page):
        selected = times[page_start:page_start + per_page]
        rows = math.ceil(len(selected) / columns)
        sheet = Image.new("RGB", (columns * cell_w, rows * cell_h), "#202020")
        draw = ImageDraw.Draw(sheet)
        for i, t in enumerate(selected):
            image = Image.open(io.BytesIO(run(["ffmpeg", "-v", "error", "-ss", str(t), "-i", str(a.video.resolve()),
                "-map", "0:v:0", "-frames:v", "1", "-vf", "scale=640:360:force_original_aspect_ratio=decrease", "-f", "image2pipe", "-c:v", "png", "-"]))).convert("RGB")
            image.thumbnail((cell_w - 8, cell_h - 30))
            x, y = (i % columns) * cell_w, (i // columns) * cell_h
            sheet.paste(image, (x + (cell_w - image.width) // 2, y + 4))
            draw.text((x + 6, y + cell_h - 23), f"requested t={t:.3f}s", font=font, fill="white")
        target = a.out / f"sheet_{len(pages) + 1:03}.jpg"
        sheet.save(target, quality=92)
        pages.append(target.name)
    report = {"scope": "Human review samples only; no audio alignment, quality score or After Effects execution.",
        "video": str(a.video.resolve()), "width": video.get("width"), "height": video.get("height"),
        "duration": duration, "avg_fps": fps, "codec": video.get("codec_name"), "pixel_format": video.get("pix_fmt"),
        "audio": [{"codec": x.get("codec_name"), "sample_rate": x.get("sample_rate"), "channels": x.get("channels")}
                  for x in meta["streams"] if x.get("codec_type") == "audio"],
        "range": [a.start, end], "requested_times": times, "sheets": pages,
        "limitations": "Labels show requested seek times, not decoded PTS. VFR/rotation require separate inspection; inspect playback and full-resolution text too."}
    (a.out / "review_report.json").write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps({"sheets": len(pages), "samples": len(times), "report": str(a.out / "review_report.json")}))


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, KeyError, subprocess.SubprocessError) as exc:
        raise SystemExit("Review failed: " + str(exc))
```

---

<a id="file-26"></a>

## scripts/validate_motion_project.py

```python
#!/usr/bin/env python3
"""Check timeline data and JSX syntax; does not emulate or render After Effects."""
import argparse
import json
import math
from pathlib import Path
import re
import shutil
import subprocess
import sys


def finite(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def validate_timing(path, errors, offset=0.0):
    raw = path.read_text(encoding="utf-8-sig").strip().rstrip(";").strip()
    if raw.startswith("(") and raw.endswith(")"):
        raw = raw[1:-1].strip()
    data = json.loads(raw)  # Never execute supplied JSX data.
    if not isinstance(data, dict):
        errors.append("Timeline root must be an object.")
        return {}
    duration, fps = data.get("duration"), data.get("fps", 30)
    if not finite(duration) or duration <= 0:
        errors.append("duration must be a positive finite number.")
    if not finite(fps) or fps <= 0:
        errors.append("fps must be a positive finite number.")
        fps = 30
    tolerance = 1 / fps + 1e-6
    scenes = data.get("scenes")
    if not isinstance(scenes, list) or not scenes:
        errors.append("scenes must be a nonempty list.")
        return {}
    seen_ids = set()
    previous_end = 0.0
    cue_count = 0
    for index, scene in enumerate(scenes):
        label = "scene[%d]" % index
        if not isinstance(scene, dict):
            errors.append(label + " must be an object.")
            continue
        number = scene.get("scene")
        if not isinstance(number, int) or isinstance(number, bool) or number <= 0:
            errors.append(label + ".scene must be a positive asset number.")
        layout = scene.get("layout")
        if layout is not None:
            if layout not in ("CENTER_ONLY", "TEXT_LEFT", "TEXT_RIGHT", "TEXT_TOP", "TEXT_BOTTOM"):
                errors.append(label + ".layout is invalid.")
        elif scene.get("side") not in ("LEFT", "RIGHT"):
            errors.append(label + " needs layout or LEFT/RIGHT text side.")
        if "id" in scene:
            sid = scene["id"]
            if not isinstance(sid, str) or not sid.strip():
                errors.append(label + ".id must be a nonempty string.")
            elif sid in seen_ids:
                errors.append(label + ".id is duplicated.")
            else:
                seen_ids.add(sid)
        start, end = scene.get("start"), scene.get("end")
        valid_bounds = finite(start) and finite(end) and 0 <= start < end
        if not valid_bounds:
            errors.append(label + " needs finite bounds 0 <= start < end.")
        else:
            if abs(start - previous_end) > tolerance:
                errors.append(label + " has a gap/overlap greater than one frame.")
            if finite(duration) and end > duration + tolerance:
                errors.append(label + " exceeds duration.")
            previous_end = end
        cues = scene.get("cues", [])
        if not isinstance(cues, list):
            errors.append(label + ".cues must be a list.")
            continue
        last_cue_end = start if valid_bounds else 0
        for ci, cue in enumerate(cues):
            clabel = label + ".cues[%d]" % ci
            cue_count += 1
            if not isinstance(cue, dict):
                errors.append(clabel + " must be an object.")
                continue
            if not isinstance(cue.get("text"), str) or not cue["text"].strip():
                errors.append(clabel + " requires nonempty text.")
            cs, ce = cue.get("start"), cue.get("end")
            if "fixedTiming" in cue and not isinstance(cue["fixedTiming"], bool):
                errors.append(clabel + ".fixedTiming must be boolean.")
            if finite(cs) and finite(ce) and not cue.get("fixedTiming", False):
                cs, ce = cs + offset, ce + offset
            if not (finite(cs) and finite(ce) and 0 <= cs < ce):
                errors.append(clabel + " has invalid time bounds.")
                continue
            if valid_bounds and (cs < start - 1e-6 or ce > end + 1e-6):
                errors.append(clabel + " falls outside its scene.")
            if cs < last_cue_end - 1e-6:
                errors.append(clabel + " overlaps the previous cue.")
            last_cue_end = ce
    if finite(duration) and abs(previous_end - duration) > tolerance:
        errors.append("Last scene must cover duration within one frame.")
    return {"scenes": len(scenes), "cues": cue_count, "duration": duration, "fps": fps}


def validate_jsx(path, errors, warnings):
    source = path.read_text(encoding="utf-8-sig")
    if re.search(r'\.property\(\s*[\"\']ADBE Point of Interest[\"\']\s*\)', source):
        errors.append("Invalid camera matchName: use ADBE Anchor Point in Transform.")
    # Conservative hint only: arbitrary variable/property names cannot be resolved statically.
    if re.search(r'Softness[^\n]{0,100}(?:setValue\(|,\s*)\s*35(?:\D|$)', source):
        warnings.append("Review Spectrum Softness: its normalized value may need 0.35.")
    node = shutil.which("node")
    if not node:
        warnings.append("Node unavailable: JSX JavaScript syntax check skipped.")
        return "skipped"
    # AE preprocessor directives are not JavaScript. Check remaining source only.
    filtered = "\n".join("" if re.match(r"\s*#(?:target|include|includepath)\b", line) else line
                         for line in source.splitlines())
    result = subprocess.run([node, "--check"], input=filtered, text=True,
                            capture_output=True, timeout=30)
    if result.returncode:
        errors.append("JSX syntax check failed: " + result.stderr.strip())
        return "failed"
    return "passed (directives excluded; no AE execution or ES3 guarantee)"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--timing", required=True, type=Path)
    parser.add_argument("--jsx", type=Path)
    parser.add_argument("--offset", type=float, default=0, help="Effective lyric shift in seconds; fixedTiming cues are exempt.")
    args = parser.parse_args()
    errors, warnings = [], []
    report = {"scope": "Static timeline/syntax checks only; no audio alignment or native AE rendering."}
    try:
        if not math.isfinite(args.offset) or abs(args.offset) > 5:
            raise ValueError("offset must be finite and within -5..5 seconds")
        report["offset"] = args.offset
        report["timing"] = validate_timing(args.timing, errors, args.offset)
        if args.jsx:
            report["jsx"] = validate_jsx(args.jsx, errors, warnings)
    except (OSError, ValueError, subprocess.SubprocessError) as exc:
        errors.append(str(exc))
    report.update(ok=not errors, errors=errors, warnings=warnings)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
```

---

<a id="file-27"></a>

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
