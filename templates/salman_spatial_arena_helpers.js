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
