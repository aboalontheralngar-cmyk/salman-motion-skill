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
