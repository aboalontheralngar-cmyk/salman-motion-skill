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
