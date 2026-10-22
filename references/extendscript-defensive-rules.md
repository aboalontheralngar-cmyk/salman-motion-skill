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
