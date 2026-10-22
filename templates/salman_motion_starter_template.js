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

