v.Filter.register("herMajesty", function() {
        this.brightness(40);
        this.colorize("#ea1c5d", 10);
        this.curves("b", [0, 10], [128, 180], [190, 190], [255, 255]);
        this.newLayer(function() {
            this.setBlendingMode("overlay");
            this.opacity(50);
            this.copyParent();
            this.filter.gamma(0.7);
            return this.newLayer(function() {
                this.setBlendingMode("normal");
                this.opacity(60);
                return this.fillColor("#ea1c5d")
            })
        });
        this.newLayer(function() {
            this.setBlendingMode("multiply");
            this.opacity(60);
            this.copyParent();
            this.filter.saturation(50);
            this.filter.hue(90);
            return this.filter.contrast(10)
        });
        this.gamma(1.4);
        this.vibrance(-30);
        this.newLayer(function() {
            this.opacity(10);
            return this.fillColor("#e5f0ff")
        });
        return this
    });
    v.Filter.register("nostalgia", function() {
        this.saturation(20);
        this.gamma(1.4);
        this.greyscale();
        this.contrast(5);
        this.sepia(100);
        this.channels({
            red: 8,
            blue: 2,
            green: 4
        });
        this.gamma(0.8);
        this.contrast(5);
        this.exposure(10);
        this.newLayer(function() {
            this.setBlendingMode("overlay");
            this.copyParent();
            this.opacity(55);
            return this.filter.stackBlur(10)
        });
        return this.vignette("50%", 30)
    });
    v.Filter.register("hemingway", function() {
        this.greyscale();
        this.contrast(10);
        this.gamma(0.9);
        this.newLayer(function() {
            this.setBlendingMode("multiply");
            this.opacity(40);
            this.copyParent();
            this.filter.exposure(15);
            this.filter.contrast(15);
            return this.filter.channels({
                green: 10,
                red: 5
            })
        });
        this.sepia(30);
        this.curves("rgb", [0, 10], [120, 90], [180, 200], [235, 255]);
        this.channels({
            red: 5,
            green: -2
        });
        return this.exposure(15)
    });
    v.Filter.register("concentrate", function() {
        this.sharpen(40);
        this.saturation(-50);
        this.channels({
            red: 3
        });
        this.newLayer(function() {
            this.setBlendingMode("multiply");
            this.opacity(80);
            this.copyParent();
            this.filter.sharpen(5);
            this.filter.contrast(50);
            this.filter.exposure(10);
            return this.filter.channels({
                blue: 5
            })
        });
        return this.brightness(10)
    });
    v.Plugin.register("rotate", function(H) {
        var I, G, N, L, M, F, K, J;
        I = H % 360;
        if (I === 0) {
            return this.dimensions = {
                width: this.canvas.width,
                height: this.canvas.height
            }
        }
        M = Math.PI / 180;
        if (typeof exports !== "undefined" && exports !== null) {
            G = new r()
        } else {
            G = document.createElement("canvas");
            i.copyAttributes(this.canvas, G)
        }
        if (I === 90 || I === -270 || I === 270 || I === -90) {
            F = this.canvas.height;
            L = this.canvas.width;
            K = F / 2;
            J = L / 2
        } else {
            if (I === 180) {
                F = this.canvas.width;
                L = this.canvas.height;
                K = F / 2;
                J = L / 2
            } else {
                F = Math.sqrt(Math.pow(this.originalWidth, 2) + Math.pow(this.originalHeight, 2));
                L = F;
                K = this.canvas.height / 2;
                J = this.canvas.width / 2
            }
        }
        G.width = F;
        G.height = L;
        N = G.getContext("2d");
        N.save();
        N.translate(K, J);
        N.rotate(I * M);
        N.drawImage(this.canvas, -this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
        N.restore();
        return this.replaceCanvas(G)
    });
    v.Filter.register("rotate", function() {
        return this.processPlugin("rotate", Array.prototype.slice.call(arguments, 0))
    });
    (function() {
        var G, F, H;
        F = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
        H = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
        G = function() {
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.a = 0;
            return this.next = null
        };
        v.Plugin.register("stackBlur", function(am) {
            var V, aa, ac, aC, al, ad, M, J, ap, aA, Z, ar, Y, W, N, Q, ag, S, L, O, af, K, ab, P, aB, ai, ae, an, ah, I, T, ak, aj, X, U, R, az, ay, ax, aw, av, au, at, aq, ao;
            if (isNaN(am) || am < 1) {
                return
            }
            am |= 0;
            N = this.pixelData;
            I = this.dimensions.width;
            J = this.dimensions.height;
            aC = am + am + 1;
            ah = I << 2;
            T = I - 1;
            ap = J - 1;
            O = am + 1;
            an = O * (O + 1) / 2;
            ae = new G();
            ab = ae;
            for (aA = az = 1; 1 <= aC ? az < aC : az > aC; aA = 1 <= aC ? ++az : --az) {
                ab = ab.next = new G();
                if (aA === O) {
                    P = ab
                }
            }
            ab.next = ae;
            aB = null;
            ai = null;
            R = X = 0;
            Z = F[am];
            K = H[am];
            for (aj = ay = 0; 0 <= J ? ay < J : ay > J; aj = 0 <= J ? ++ay : --ay) {
                ag = al = V = L = M = ac = 0;
                S = O * (Q = N[X]);
                ad = O * (W = N[X + 1]);
                aa = O * (Y = N[X + 2]);
                L += an * Q;
                M += an * W;
                ac += an * Y;
                ab = ae;
                for (aA = ax = 0; 0 <= O ? ax < O : ax > O; aA = 0 <= O ? ++ax : --ax) {
                    ab.r = Q;
                    ab.g = W;
                    ab.b = Y;
                    ab = ab.next
                }
                for (aA = aw = 1; 1 <= O ? aw < O : aw > O; aA = 1 <= O ? ++aw : --aw) {
                    ar = X + ((T < aA ? T : aA) << 2);
                    L += (ab.r = (Q = N[ar])) * (af = O - aA);
                    M += (ab.g = (W = N[ar + 1])) * af;
                    ac += (ab.b = (Y = N[ar + 2])) * af;
                    ag += Q;
                    al += W;
                    V += Y;
                    ab = ab.next
                }
                aB = ae;
                ai = P;
                for (ak = av = 0; 0 <= I ? av < I : av > I; ak = 0 <= I ? ++av : --av) {
                    N[X] = (L * Z) >> K;
                    N[X + 1] = (M * Z) >> K;
                    N[X + 2] = (ac * Z) >> K;
                    L -= S;
                    M -= ad;
                    ac -= aa;
                    S -= aB.r;
                    ad -= aB.g;
                    aa -= aB.b;
                    ar = (R + ((ar = ak + am + 1) < T ? ar : T)) << 2;
                    ag += (aB.r = N[ar]);
                    al += (aB.g = N[ar + 1]);
                    V += (aB.b = N[ar + 2]);
                    L += ag;
                    M += al;
                    ac += V;
                    aB = aB.next;
                    S += (Q = ai.r);
                    ad += (W = ai.g);
                    aa += (Y = ai.b);
                    ag -= Q;
                    al -= W;
                    V -= Y;
                    ai = ai.next;
                    X += 4
                }
                R += I
            }
            for (ak = au = 0; 0 <= I ? au < I : au > I; ak = 0 <= I ? ++au : --au) {
                al = V = ag = M = ac = L = 0;
                X = ak << 2;
                S = O * (Q = N[X]);
                ad = O * (W = N[X + 1]);
                aa = O * (Y = N[X + 2]);
                L += an * Q;
                M += an * W;
                ac += an * Y;
                ab = ae;
                for (aA = at = 0; 0 <= O ? at < O : at > O; aA = 0 <= O ? ++at : --at) {
                    ab.r = Q;
                    ab.g = W;
                    ab.b = Y;
                    ab = ab.next
                }
                U = I;
                for (aA = aq = 1; 1 <= am ? aq <= am : aq >= am; aA = 1 <= am ? ++aq : --aq) {
                    X = (U + ak) << 2;
                    L += (ab.r = (Q = N[X])) * (af = O - aA);
                    M += (ab.g = (W = N[X + 1])) * af;
                    ac += (ab.b = (Y = N[X + 2])) * af;
                    ag += Q;
                    al += W;
                    V += Y;
                    ab = ab.next;
                    if (aA < ap) {
                        U += I
                    }
                }
                X = ak;
                aB = ae;
                ai = P;
                for (aj = ao = 0; 0 <= J ? ao < J : ao > J; aj = 0 <= J ? ++ao : --ao) {
                    ar = X << 2;
                    N[ar] = (L * Z) >> K;
                    N[ar + 1] = (M * Z) >> K;
                    N[ar + 2] = (ac * Z) >> K;
                    L -= S;
                    M -= ad;
                    ac -= aa;
                    S -= aB.r;
                    ad -= aB.g;
                    aa -= aB.b;
                    ar = (ak + (((ar = aj + O) < ap ? ar : ap) * I)) << 2;
                    L += (ag += (aB.r = N[ar]));
                    M += (al += (aB.g = N[ar + 1]));
                    ac += (V += (aB.b = N[ar + 2]));
                    aB = aB.next;
                    S += (Q = ai.r);
                    ad += (W = ai.g);
                    aa += (Y = ai.b);
                    ag -= Q;
                    al -= W;
                    V -= Y;
                    ai = ai.next;
                    X += I
                }
            }
            return this
        });
        return v.Filter.register("stackBlur", function(I) {
            return this.processPlugin("stackBlur", [I])
        })
    })();
    v.Filter.register("threshold", function(F) {
        return this.process("threshold", function(H) {
            var G;
            G = (0.2126 * H.r) + (0.7152 * H.g) + (0.0722 * H.b);
            if (G < F) {
                H.r = 0;
                H.g = 0;
                H.b = 0
            } else {
                H.r = 255;
                H.g = 255;
                H.b = 255
            }
            return H
        })
    })