(function (g) {
  var window = this;
  var Oxa = function (a, b) {
      return g.Tb(a, b);
    },
    I6 = function (a) {
      g.tm(a, 'zx', g.zb());
      return a;
    },
    J6 = function (a, b, c) {
      g.xa(c) || (c = [String(c)]);
      g.wm(a.g, b, c);
    },
    Pxa = function (a, b) {
      var c = [];
      g.fk(
        b,
        function (a) {
          try {
            var b = g.PC.prototype.o.call(this, a, !0);
          } catch (f) {
            if ('Storage: Invalid value was encountered' == f) return;
            throw f;
          }
          g.t(b) ? g.OC(b) && c.push(a) : c.push(a);
        },
        a,
      );
      return c;
    },
    Qxa = function (a, b) {
      var c = Pxa(a, b);
      (0, g.C)(
        c,
        function (a) {
          g.PC.prototype.remove.call(this, a);
        },
        a,
      );
    },
    Rxa = function () {
      var a = g.iG;
      Qxa(a, a.g.Yd(!0));
    },
    Sxa = function (a, b, c, d) {
      var e = new g.km(null, void 0);
      a && g.lm(e, a);
      b && g.mm(e, b);
      c && g.nm(e, c);
      d && g.om(e, d);
      return e;
    },
    Txa = function (a) {
      g.wF[a] &&
        ((a = g.wF[a]),
        (0, g.C)(a, function (a) {
          g.uF[a] && delete g.uF[a];
        }),
        (a.length = 0));
    },
    Uxa = function (a) {
      var b = g.tF();
      if (b)
        if ((b.clear(a), a)) Txa(a);
        else for (var c in g.wF) Txa(c);
    },
    K6 = function (a) {
      this.app = this.name = this.id = '';
      this.type = 'REMOTE_CONTROL';
      this.obfuscatedGaiaId = this.avatar = this.username = '';
      this.A = !1;
      this.capabilities = new window.Set();
      this.experiments = new window.Set();
      this.theme = 'u';
      new g.em();
      this.g = this.o = '';
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.app = a.app),
        (this.type = a.type || 'REMOTE_CONTROL'),
        (this.username = a.user || ''),
        (this.avatar = a.userAvatarUri || ''),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ''),
        (this.theme = a.theme || 'u'),
        Vxa(this, a.capabilities || ''),
        Wxa(this, a.experiments || ''),
        (this.o = a.remoteControllerUrl || ''),
        (this.g = a.localChannelEncryptionKey || ''));
    },
    Vxa = function (a, b) {
      a.capabilities.clear();
      (0, g.Hd)(b.split(','), g.Da(Oxa, Xxa)).forEach(function (b) {
        a.capabilities.add(b);
      });
    },
    Wxa = function (a, b) {
      a.experiments.clear();
      b.split(',').forEach(function (b) {
        a.experiments.add(b);
      });
    },
    L6 = function (a) {
      a = a || {};
      this.name = a.name || '';
      this.id = a.id || a.screenId || '';
      this.token = a.token || a.loungeToken || '';
      this.uuid = a.uuid || a.dialId || '';
    },
    M6 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    Yxa = function (a) {
      return { name: a.name, screenId: a.id, loungeToken: a.token, dialId: a.uuid };
    },
    Zxa = function (a) {
      return new L6(a);
    },
    $xa = function (a) {
      return g.xa(a) ? (0, g.J)(a, Zxa) : [];
    },
    N6 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            '..,token:' +
            (a.token ? '..' + a.token.slice(-6) : '-') +
            ',uuid:' +
            (a.uuid ? '..' + a.uuid.slice(-6) : '-') +
            '}'
        : 'null';
    },
    O6 = function (a) {
      return g.xa(a) ? '[' + (0, g.J)(a, N6).join(',') + ']' : 'null';
    },
    P6 = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
        var b = (16 * Math.random()) | 0;
        return ('x' == a ? b : (b & 3) | 8).toString(16);
      });
    },
    aya = function (a) {
      return (0, g.J)(a, function (a) {
        return { key: a.id, name: a.name };
      });
    },
    Q6 = function (a, b) {
      return g.Ja(a, function (a) {
        return a || b ? (!a != !b ? !1 : a.id == b.id) : !0;
      });
    },
    R6 = function (a, b) {
      return g.Ja(a, function (a) {
        return M6(a, b);
      });
    },
    S6 = function () {
      var a = g.lG('yt-remote-connected-devices') || [];
      g.fb(a);
      return a;
    },
    bya = function (a) {
      if (g.Pa(a)) return [];
      var b = a[0].indexOf('#'),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return (0, g.J)(a, function (a, b) {
        return 0 == b ? a : a.substring(c.length);
      });
    },
    cya = function (a) {
      g.kG('yt-remote-connected-devices', a, 86400);
    },
    U6 = function () {
      if (T6) return T6;
      var a = g.lG('yt-remote-device-id');
      a || ((a = P6()), g.kG('yt-remote-device-id', a, 31536e3));
      for (var b = S6(), c = 1, d = a; g.D(b, d); ) c++, (d = a + '#' + c);
      return (T6 = d);
    },
    V6 = function () {
      var a = S6(),
        b = U6();
      g.D(a, b);
      g.qG() && g.ib(a, b);
      a = bya(a);
      if (g.Pa(a))
        try {
          g.oG.remove('remote_sid', '/', 'youtube.com');
        } catch (c) {}
      else
        try {
          g.pG('remote_sid', a.join(','), -1);
        } catch (c) {}
    },
    dya = function () {
      return g.lG('yt-remote-session-browser-channel');
    },
    eya = function () {
      return g.lG('yt-remote-local-screens') || [];
    },
    fya = function () {
      g.kG('yt-remote-lounge-token-expiration', !0, 86400);
    },
    gya = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = (0, g.J)(eya(), function (a) {
          return a.loungeToken;
        }),
        c = (0, g.J)(a, function (a) {
          return a.loungeToken;
        });
      (0, g.Tl)(c, function (a) {
        return !g.D(b, a);
      }) && fya();
      g.kG('yt-remote-local-screens', a, 31536e3);
    },
    hya = function (a, b) {
      g.kG('yt-remote-session-browser-channel', a);
      g.kG('yt-remote-session-screen-id', b);
      var c = S6(),
        d = U6();
      g.D(c, d) || c.push(d);
      cya(c);
      V6();
    },
    W6 = function (a) {
      a || (g.mG('yt-remote-session-screen-id'), g.mG('yt-remote-session-video-id'));
      V6();
      a = S6();
      g.Ta(a, U6());
      cya(a);
    },
    iya = function () {
      if (!X6) {
        var a = g.VC();
        a && (X6 = new g.JC(a));
      }
      return X6 ? !!X6.get('yt-remote-use-staging-server') : !1;
    },
    jya = function () {
      var a = window.document.createElement('a');
      g.Wc(a, 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js');
      a = a.href.replace(/^[a-zA-Z]+:\/\//, '//');
      return 'js-' + g.Db(a);
    },
    kya = function (a, b) {
      var c = g.zd('SCRIPT');
      c.id = a;
      c.onload = function () {
        b && (0, window.setTimeout)(b, 0);
      };
      c.onreadystatechange = function () {
        switch (c.readyState) {
          case 'loaded':
          case 'complete':
            c.onload();
        }
      };
      g.Xc(c, g.Zd('https://www.gstatic.com/cv/js/sender/v1/cast_sender.js'));
      var d = window.document.getElementsByTagName('head')[0] || window.document.body;
      d.insertBefore(c, d.firstChild);
      return c;
    },
    lya = function () {
      var a = jya(),
        b = window.document.getElementById(a),
        c = b && g.HE(b, 'loaded');
      c ||
        (b && !c) ||
        (b = kya(a, function () {
          g.HE(b, 'loaded') || (g.GE(b, 'loaded', 'true'), g.AF(a), g.DD(g.Da(Uxa, a), 0));
        }));
    },
    mya = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? (0, window.parseInt)(a[1], 10) : 0;
    },
    Y6 = function (a) {
      return (
        !!window.document.currentScript &&
        (-1 != window.document.currentScript.src.indexOf('?' + a) ||
          -1 != window.document.currentScript.src.indexOf('&' + a))
      );
    },
    nya = function () {
      return 'function' == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null;
    },
    oya = function (a, b) {
      var c = new window.XMLHttpRequest();
      c.onreadystatechange = function () {
        4 == c.readyState && 200 == c.status && b(!0);
      };
      c.onerror = function () {
        b(!1);
      };
      try {
        c.open('GET', a, !0), c.send();
      } catch (d) {
        b(!1);
      }
    },
    b7 = function (a) {
      if (a >= pya.length) Z6();
      else {
        var b = pya[a],
          c = 'chrome-extension://' + b + qya;
        0 <= $6.indexOf(b)
          ? oya(c, function (d) {
              d
                ? ((window.chrome.cast = window.chrome.cast || {}),
                  (window.chrome.cast.extensionId = b),
                  a7(c, Z6))
                : b7(a + 1);
            })
          : a7(c, function () {
              b7(a + 1);
            });
      }
    },
    a7 = function (a, b, c) {
      var d = window.document.createElement('script');
      d.onerror = b;
      c && (d.onload = c);
      d.src = a;
      (window.document.head || window.document.documentElement).appendChild(d);
    },
    c7 = function (a) {
      return 0 <= window.navigator.userAgent.indexOf(a);
    },
    Z6 = function () {
      var a = nya();
      a && a(!1, 'No cast extension found');
    },
    sya = function () {
      if (rya) {
        var a = 2,
          b = nya(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        a7('//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js', Z6, c);
      }
    },
    tya = function () {
      if (c7('CriOS')) {
        var a = window.__gCrWeb && window.__gCrWeb.message && window.__gCrWeb.message.invokeOnHost;
        if (a) {
          sya();
          a({ command: 'cast.sender.init' });
          return;
        }
      }
      if (!window.chrome || c7('Edge')) Z6();
      else if ((sya(), c7('Android') && c7('Chrome/') && window.navigator.presentation)) {
        a = '';
        var b = mya();
        55 <= b ? (a = '55') : 50 <= b && (a = '50');
        a7('//www.gstatic.com/eureka/clank' + a + qya, Z6);
      } else b7(0);
    },
    d7 = function (a, b, c) {
      g.M.call(this);
      this.D = null != c ? (0, g.z)(a, c) : a;
      this.uc = b;
      this.C = (0, g.z)(this.KH, this);
      this.g = !1;
      this.o = 0;
      this.A = this.Ba = null;
      this.B = [];
    },
    e7 = function () {},
    f7 = function (a, b, c, d) {
      this.g = a;
      this.A = b;
      this.G = c;
      this.F = d || 1;
      this.C = 45e3;
      this.B = new g.Am(this);
      this.o = new g.og();
      this.o.setInterval(250);
    },
    vya = function (a, b, c) {
      a.pj = 1;
      a.mh = I6(b.clone());
      a.Ji = c;
      a.D = !0;
      uya(a, null);
    },
    g7 = function (a, b, c, d, e) {
      a.pj = 1;
      a.mh = I6(b.clone());
      a.Ji = null;
      a.D = c;
      e && (a.fC = !1);
      uya(a, d);
    },
    uya = function (a, b) {
      a.Uj = (0, g.H)();
      h7(a);
      a.Gh = a.mh.clone();
      J6(a.Gh, 't', a.F);
      a.Sl = 0;
      a.Oc = a.g.Aq(a.g.Ml() ? b : null);
      0 < a.gr && (a.Mo = new g.Jk((0, g.z)(a.mD, a, a.Oc), a.gr));
      a.B.T(a.Oc, 'readystatechange', a.GS);
      var c = a.ji ? g.ac(a.ji) : {};
      a.Ji
        ? ((a.up = 'POST'),
          (c['Content-Type'] = 'application/x-www-form-urlencoded'),
          a.Oc.send(a.Gh, a.up, a.Ji, c))
        : ((a.up = 'GET'), a.fC && !g.vd && (c.Connection = 'close'), a.Oc.send(a.Gh, a.up, null, c));
      a.g.sf(1);
    },
    yya = function (a, b, c) {
      for (var d = !0; !a.Th && a.Sl < c.length; ) {
        var e = wya(a, c);
        if (e == i7) {
          4 == b && ((a.nh = 4), j7(15), (d = !1));
          break;
        } else if (e == xya) {
          a.nh = 4;
          j7(16);
          d = !1;
          break;
        } else k7(a, e);
      }
      4 == b && 0 == c.length && ((a.nh = 1), j7(17), (d = !1));
      a.wf = a.wf && d;
      d || (l7(a), m7(a));
    },
    wya = function (a, b) {
      var c = a.Sl,
        d = b.indexOf('\n', c);
      if (-1 == d) return i7;
      c = Number(b.substring(c, d));
      if ((0, window.isNaN)(c)) return xya;
      d += 1;
      if (d + c > b.length) return i7;
      var e = b.substr(d, c);
      a.Sl = d + c;
      return e;
    },
    Aya = function (a, b) {
      a.Uj = (0, g.H)();
      h7(a);
      var c = b ? window.location.hostname : '';
      a.Gh = a.mh.clone();
      g.tm(a.Gh, 'DOMAIN', c);
      g.tm(a.Gh, 't', a.F);
      try {
        a.xf = new window.ActiveXObject('htmlfile');
      } catch (n) {
        l7(a);
        a.nh = 7;
        j7(22);
        m7(a);
        return;
      }
      var d = '<html><body>';
      if (b) {
        for (var e = '', f = 0; f < c.length; f++) {
          var k = c.charAt(f);
          if ('<' == k) e += '\\x3c';
          else if ('>' == k) e += '\\x3e';
          else {
            var l = k;
            if (l in n7) k = n7[l];
            else if (l in zya) k = n7[l] = zya[l];
            else {
              var m = l.charCodeAt(0);
              if (31 < m && 127 > m) k = l;
              else {
                if (256 > m) {
                  if (((k = '\\x'), 16 > m || 256 < m)) k += '0';
                } else (k = '\\u'), 4096 > m && (k += '0');
                k += m.toString(16).toUpperCase();
              }
              k = n7[l] = k;
            }
            e += k;
          }
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += '</body></html>';
      c = g.Yc(g.vc('b/12014412'), d);
      a.xf.open();
      a.xf.write(g.Qc(c));
      a.xf.close();
      a.xf.parentWindow.m = (0, g.z)(a.LR, a);
      a.xf.parentWindow.d = (0, g.z)(a.wB, a, !0);
      a.xf.parentWindow.rpcClose = (0, g.z)(a.wB, a, !1);
      c = a.xf.createElement('DIV');
      a.xf.parentWindow.document.body.appendChild(c);
      d = g.Hc(a.Gh.toString());
      d = g.pb(g.Ec(d));
      d = g.Yc(g.vc('b/12014412'), '<iframe src="' + d + '"></iframe>');
      c.innerHTML = g.Qc(d);
      a.g.sf(1);
    },
    h7 = function (a) {
      a.Gu = (0, g.H)() + a.C;
      Bya(a, a.C);
    },
    Bya = function (a, b) {
      if (null != a.qk) throw Error('WatchDog timer not null');
      a.qk = o7((0, g.z)(a.cS, a), b);
    },
    p7 = function (a) {
      a.qk && (g.w.clearTimeout(a.qk), (a.qk = null));
    },
    m7 = function (a) {
      a.g.Ix() || a.Th || a.g.Co(a);
    },
    l7 = function (a) {
      p7(a);
      g.Xe(a.Mo);
      a.Mo = null;
      a.o.stop();
      g.Gm(a.B);
      if (a.Oc) {
        var b = a.Oc;
        a.Oc = null;
        b.abort();
        b.dispose();
      }
      a.xf && (a.xf = null);
    },
    k7 = function (a, b) {
      try {
        a.g.pB(a, b), a.g.sf(4);
      } catch (c) {}
    },
    Dya = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        Cya(a, b, function (e) {
          e
            ? c(!0)
            : g.w.setTimeout(function () {
                Dya(a, b, c, d, f);
              }, f);
        });
      }
    },
    Cya = function (a, b, c) {
      var d = new window.Image();
      d.onload = function () {
        try {
          q7(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          q7(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          q7(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          q7(d), c(!1);
        } catch (e) {}
      };
      g.w.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    q7 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    Eya = function (a) {
      this.g = a;
      this.o = new e7();
    },
    Fya = function (a) {
      var b = r7(a.g, a.tk, '/mail/images/cleardot.gif');
      I6(b);
      Dya(b.toString(), 5e3, (0, g.z)(a.TG, a), 3, 2e3);
      a.sf(1);
    },
    t7 = function (a) {
      var b = a.g.I;
      if (null != b) j7(5), b ? (j7(11), s7(a.g, a, !1)) : (j7(12), s7(a.g, a, !0));
      else if (
        ((a.pe = new f7(a, void 0, void 0, void 0)),
        (a.pe.ji = a.ar),
        (b = a.g),
        (b = r7(b, b.Ml() ? a.Tk : null, a.fr)),
        j7(5),
        !g.td || g.rc(10))
      )
        J6(b, 'TYPE', 'xmlhttp'), g7(a.pe, b, !1, a.Tk, !1);
      else {
        J6(b, 'TYPE', 'html');
        var c = a.pe;
        a = !!a.Tk;
        c.pj = 3;
        c.mh = I6(b.clone());
        Aya(c, a);
      }
    },
    u7 = function (a, b, c) {
      this.g = 1;
      this.o = [];
      this.B = [];
      this.C = new e7();
      this.G = a || null;
      this.I = null != b ? b : null;
      this.D = c || !1;
    },
    Gya = function (a, b) {
      this.g = a;
      this.map = b;
      this.context = null;
    },
    Hya = function (a) {
      g.Ze.call(this, 'statevent', a);
    },
    Iya = function (a, b) {
      g.Ze.call(this, 'timingevent', a);
      this.size = b;
    },
    Jya = function (a) {
      g.Ze.call(this, 'serverreachability', a);
    },
    Mya = function (a) {
      Kya(a);
      if (3 == a.g) {
        var b = a.Bl++,
          c = a.xn.clone();
        g.tm(c, 'SID', a.A);
        g.tm(c, 'RID', b);
        g.tm(c, 'TYPE', 'terminate');
        v7(a, c);
        b = new f7(a, a.A, b, void 0);
        b.pj = 2;
        b.mh = I6(c.clone());
        new window.Image().src = b.mh;
        b.Uj = (0, g.H)();
        h7(b);
      }
      Lya(a);
    },
    Nya = function (a) {
      a.rH(1, 0);
      a.xn = r7(a, null, a.Zq);
      w7(a);
    },
    Kya = function (a) {
      a.bh && (a.bh.abort(), (a.bh = null));
      a.sc && (a.sc.cancel(), (a.sc = null));
      a.vg && (g.w.clearTimeout(a.vg), (a.vg = null));
      x7(a);
      a.Od && (a.Od.cancel(), (a.Od = null));
      a.eh && (g.w.clearTimeout(a.eh), (a.eh = null));
    },
    Oya = function (a, b) {
      if (0 == a.g) throw Error('Invalid operation: sending map when state is closed');
      a.o.push(new Gya(a.NN++, b));
      (2 != a.g && 3 != a.g) || w7(a);
    },
    w7 = function (a) {
      a.Od || a.eh || ((a.eh = o7((0, g.z)(a.uB, a), 0)), (a.hj = 0));
    },
    Qya = function (a, b) {
      if (1 == a.g) {
        if (!b) {
          a.Bl = Math.floor(1e5 * Math.random());
          var c = a.Bl++,
            d = new f7(a, '', c, void 0);
          d.ji = null;
          var e = y7(a),
            f = a.xn.clone();
          g.tm(f, 'RID', c);
          g.tm(f, 'CVER', '1');
          v7(a, f);
          vya(d, f, e);
          a.Od = d;
          a.g = 2;
        }
      } else 3 == a.g && (b ? Pya(a, b) : 0 == a.o.length || a.Od || Pya(a));
    },
    Pya = function (a, b) {
      if (b)
        if (6 < a.Vh) {
          a.o = a.B.concat(a.o);
          a.B.length = 0;
          var c = a.Bl - 1;
          var d = y7(a);
        } else (c = b.G), (d = b.Ji);
      else (c = a.Bl++), (d = y7(a));
      var e = a.xn.clone();
      g.tm(e, 'SID', a.A);
      g.tm(e, 'RID', c);
      g.tm(e, 'AID', a.Cj);
      v7(a, e);
      c = new f7(a, a.A, c, a.hj + 1);
      c.ji = null;
      c.setTimeout(Math.round(1e4) + Math.round(1e4 * Math.random()));
      a.Od = c;
      vya(c, e, d);
    },
    v7 = function (a, b) {
      if (a.qd) {
        var c = a.qd.lx();
        c &&
          g.Kb(c, function (a, c) {
            g.tm(b, c, a);
          });
      }
    },
    y7 = function (a) {
      var b = Math.min(a.o.length, 1e3),
        c = ['count=' + b];
      if (6 < a.Vh && 0 < b) {
        var d = a.o[0].g;
        c.push('ofs=' + d);
      } else d = 0;
      for (var e = 0; e < b; e++) {
        var f = a.o[e].g,
          k = a.o[e].map;
        f = 6 >= a.Vh ? e : f - d;
        try {
          g.Kb(k, function (a, b) {
            c.push('req' + f + '_' + b + '=' + (0, window.encodeURIComponent)(a));
          });
        } catch (l) {
          c.push('req' + f + '_type=' + (0, window.encodeURIComponent)('_badmap'));
        }
      }
      a.B = a.B.concat(a.o.splice(0, b));
      return c.join('&');
    },
    Rya = function (a) {
      a.sc || a.vg || ((a.F = 1), (a.vg = o7((0, g.z)(a.tB, a), 0)), (a.Yi = 0));
    },
    z7 = function (a) {
      if (a.sc || a.vg || 3 <= a.Yi) return !1;
      a.F++;
      a.vg = o7((0, g.z)(a.tB, a), Sya(a, a.Yi));
      a.Yi++;
      return !0;
    },
    s7 = function (a, b, c) {
      a.tp = c;
      a.gf = b.Cg;
      a.D || Nya(a);
    },
    x7 = function (a) {
      null != a.Xh && (g.w.clearTimeout(a.Xh), (a.Xh = null));
    },
    Sya = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    A7 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.qd && (c = null);
        var d = (0, g.z)(a.BT, a);
        c || ((c = new g.km('//www.google.com/images/cleardot.gif')), I6(c));
        Cya(c.toString(), 1e4, d);
      } else j7(2);
      Tya(a, b);
    },
    Tya = function (a, b) {
      a.g = 0;
      a.qd && a.qd.jw(b);
      Lya(a);
      Kya(a);
    },
    Lya = function (a) {
      a.g = 0;
      a.gf = -1;
      if (a.qd)
        if (0 == a.B.length && 0 == a.o.length) a.qd.nq();
        else {
          g.Wa(a.B);
          var b = g.Wa(a.o);
          a.B.length = 0;
          a.o.length = 0;
          a.qd.nq(b);
        }
    },
    r7 = function (a, b, c) {
      var d = g.um(c);
      if ('' != d.o) b && g.mm(d, b + '.' + d.o), g.nm(d, d.C);
      else {
        var e = window.location;
        d = Sxa(e.protocol, b ? b + '.' + e.hostname : e.hostname, e.port, c);
      }
      a.Gk &&
        g.Kb(a.Gk, function (a, b) {
          g.tm(d, b, a);
        });
      g.tm(d, 'VER', a.Vh);
      v7(a, d);
      return d;
    },
    o7 = function (a, b) {
      if (!g.za(a)) throw Error('Fn must not be null and must be a function');
      return g.w.setTimeout(function () {
        a();
      }, b);
    },
    j7 = function (a) {
      B7.dispatchEvent(new Hya(B7, a));
    },
    Uya = function () {},
    Vya = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    D7 = function (a, b) {
      g.M.call(this);
      this.g = new g.Nt(this.A, 0, this);
      g.N(this, this.g);
      this.o = this.uc = 0;
      if (g.za(a)) b && (a = (0, g.z)(a, b));
      else if (a && g.za(a.handleEvent)) a = (0, g.z)(a.handleEvent, a);
      else throw Error('Invalid listener argument');
      this.B = a;
      C7(this);
    },
    C7 = function (a) {
      a.g.stop();
      a.uc = 5e3 + 2e4 * Math.random();
    },
    E7 = function (a, b, c) {
      this.L = a;
      this.D = b;
      this.A = new g.IC();
      this.o = new D7(this.hU, this);
      this.g = this.Za = null;
      this.J = !1;
      this.C = null;
      this.I = '';
      this.G = this.B = 0;
      this.F = [];
      this.N = c || !1;
    },
    Wya = function (a) {
      return { firstTestResults: [''], secondTestResults: !a.g.tp, sessionId: a.g.A, arrayId: a.g.Cj };
    },
    Xya = function (a, b) {
      a.G = b || 0;
      a.o.stop();
      a.g && (3 == a.g.g && Qya(a.g), Mya(a.g));
      a.G = 0;
    },
    F7 = function (a) {
      return !!a.g && 3 == a.g.g;
    },
    Yya = function (a, b) {
      (a.D.loungeIdToken = b) || a.o.stop();
    },
    G7 = function (a) {
      this.port = this.domain = '';
      this.g = '/api/lounge';
      this.o = !0;
      a = a || window.document.location.href;
      var b = g.Eg(a) || '';
      b && (this.port = ':' + b);
      this.domain = g.Dg(a) || '';
      a = g.Ib;
      0 <= a.search('MSIE') && ((a = a.match(/MSIE ([\d.]+)/)[1]), 0 > g.Cb(a, '10.0') && (this.o = !1));
    },
    H7 = function (a, b) {
      var c = a.g;
      if (g.t(void 0) ? 0 : a.o) c = 'https://' + a.domain + a.port + a.g;
      return g.Ng(c + b, {});
    },
    I7 = function (a, b, c, d, e) {
      a = {
        format: 'JSON',
        method: 'POST',
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        Jb: g.Da(a.B, d, !0),
        onError: g.Da(a.A, e),
        td: g.Da(a.C, e),
      };
      c && ((a.Nb = c), (a.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }));
      return g.TD(b, a);
    },
    bza = function () {
      var a = Zya;
      $ya();
      J7.push(a);
      aza(J7);
    },
    K7 = function (a, b) {
      $ya();
      var c = J7,
        d = cza(a, String(b));
      g.Pa(c)
        ? dza(d)
        : (aza(c),
          (0, g.C)(c, function (a) {
            a(d);
          }));
    },
    $ya = function () {
      J7 ||
        ((J7 = g.x('yt.mdx.remote.debug.handlers_') || []),
        g.ua('yt.mdx.remote.debug.handlers_', J7, void 0));
    },
    dza = function (a) {
      var b = (L7 + 1) % 50;
      L7 = b;
      M7[b] = a;
      N7 || (N7 = 49 == b);
    },
    aza = function (a) {
      var b = M7;
      if (b[0]) {
        var c = L7,
          d = N7 ? c : -1;
        do {
          d = (d + 1) % 50;
          var e = b[d];
          (0, g.C)(a, function (a) {
            a(e);
          });
        } while (d != c);
        M7 = Array(50);
        L7 = -1;
        N7 = !1;
      }
    },
    cza = function (a, b) {
      var c = ((0, g.H)() - eza) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push('[', c + 's', '] ');
      d.push('[', 'yt.mdx.remote', '] ');
      d.push(a + ': ' + b, '\n');
      return d.join('');
    },
    O7 = function (a) {
      g.lF.call(this);
      this.F = a;
      this.g = [];
    },
    fza = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) {
        var d = c.name;
        c.id = b.id || c.id;
        c.name = b.name;
        c.token = b.token;
        c.uuid = b.uuid || c.uuid;
        return c.name != d;
      }
      a.g.push(b);
      return !0;
    },
    gza = function (a, b) {
      var c = a.g.length != b.length;
      a.g = (0, g.Hd)(a.g, function (a) {
        return !!Q6(b, a);
      });
      for (var d = 0, e = b.length; d < e; d++) c = fza(a, b[d]) || c;
      return c;
    },
    hza = function (a, b) {
      var c = a.g.length;
      a.g = (0, g.Hd)(a.g, function (a) {
        return !(a || b ? (!a != !b ? 0 : a.id == b.id) : 1);
      });
      return a.g.length < c;
    },
    P7 = function (a, b, c, d) {
      g.lF.call(this);
      this.D = a;
      this.C = b;
      this.A = c;
      this.B = d;
      this.o = 0;
      this.g = null;
      this.Ba = window.NaN;
    },
    R7 = function (a) {
      O7.call(this, 'LocalScreenService');
      this.A = a;
      this.o = window.NaN;
      Q7(this);
      this.info('Initializing with ' + O6(this.g));
    },
    iza = function (a) {
      if (a.g.length) {
        var b = (0, g.J)(a.g, function (a) {
            return a.id;
          }),
          c = H7(a.A, '/pairing/get_lounge_token_batch');
        I7(a.A, c, { screen_ids: b.join(',') }, (0, g.z)(a.WH, a), (0, g.z)(a.VH, a));
      }
    },
    Q7 = function (a) {
      var b = $xa(eya());
      b = (0, g.Hd)(b, function (a) {
        return !a.uuid;
      });
      return gza(a, b);
    },
    S7 = function (a, b) {
      gya((0, g.J)(a.g, Yxa));
      b && fya();
    },
    U7 = function (a, b) {
      g.lF.call(this);
      this.D = b;
      var c = g.lG('yt-remote-online-screen-ids') || '';
      c = c ? c.split(',') : [];
      for (var d = {}, e = this.D(), f = 0, k = e.length; f < k; ++f) {
        var l = e[f].id;
        d[l] = g.D(c, l);
      }
      this.g = d;
      this.C = a;
      this.A = this.B = window.NaN;
      this.o = null;
      T7('Initialized with ' + g.vg(this.g));
    },
    jza = function (a, b, c) {
      var d = H7(a.C, '/pairing/get_screen_availability');
      I7(
        a.C,
        d,
        { lounge_token: b.token },
        (0, g.z)(function (a) {
          a = a.screens || [];
          for (var d = 0, e = a.length; d < e; ++d)
            if (a[d].loungeToken == b.token) {
              c('online' == a[d].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.z)(function () {
          c(!1);
        }, a),
      );
    },
    V7 = function (a, b) {
      a: if (g.Ob(b) != g.Ob(a.g)) var c = !1;
      else {
        c = g.Qb(b);
        for (var d = 0, e = c.length; d < e; ++d)
          if (!a.g[c[d]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c || (T7('Updated online screens: ' + g.vg(a.g)), (a.g = b), a.U('screenChange'));
      kza(a);
    },
    W7 = function (a) {
      (0, window.isNaN)(a.A) || g.FD(a.A);
      a.A = g.DD((0, g.z)(a.Qt, a), 0 < a.B && a.B < (0, g.H)() ? 2e4 : 1e4);
    },
    T7 = function (a) {
      K7('OnlineScreenService', a);
    },
    lza = function (a) {
      var b = {};
      (0, g.C)(a.D(), function (a) {
        a.token ? (b[a.token] = a.id) : this.ac('Requesting availability of screen w/o lounge token.');
      });
      return b;
    },
    kza = function (a) {
      a = g.Qb(
        g.Lb(a.g, function (a) {
          return a;
        }),
      );
      g.fb(a);
      a.length ? g.kG('yt-remote-online-screen-ids', a.join(','), 60) : g.mG('yt-remote-online-screen-ids');
    },
    X7 = function (a) {
      O7.call(this, 'ScreenService');
      this.D = a;
      this.o = this.A = null;
      this.B = [];
      this.C = {};
      mza(this);
    },
    oza = function (a, b, c, d, e, f) {
      a.info('getAutomaticScreenByIds ' + c + ' / ' + b);
      c || (c = a.C[b]);
      var k = a.ge();
      if ((k = (c ? R6(k, c) : null) || R6(k, b))) {
        k.uuid = b;
        var l = Y7(a, k);
        jza(a.o, l, function (a) {
          e(a ? l : null);
        });
      } else
        c
          ? nza(
              a,
              c,
              (0, g.z)(function (a) {
                var f = Y7(this, new L6({ name: d, screenId: c, loungeToken: a, dialId: b || '' }));
                jza(this.o, f, function (a) {
                  e(a ? f : null);
                });
              }, a),
              f,
            )
          : e(null);
    },
    pza = function (a, b) {
      for (var c = 0, d = a.g.length; c < d; ++c) if (a.g[c].name == b) return a.g[c];
      return null;
    },
    nza = function (a, b, c, d) {
      a.info('requestLoungeToken_ for ' + b);
      var e = {
        Nb: { screen_ids: b },
        method: 'POST',
        context: a,
        Jb: function (a, e) {
          var f = (e && e.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error('Missing lounge token in token response'));
        },
        onError: function () {
          d(Error('Request screen lounge token failed'));
        },
      };
      g.TD(H7(a.D, '/pairing/get_lounge_token_batch'), e);
    },
    qza = function (a) {
      a.g = a.A.ge();
      var b = a.C,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = 0;
      for (d = a.g.length; b < d; ++b) {
        var e = a.g[b];
        e.uuid = c[e.id] || '';
      }
      a.info('Updated manual screens: ' + O6(a.g));
    },
    mza = function (a) {
      Z7(a);
      a.A = new R7(a.D);
      a.A.subscribe('screenChange', (0, g.z)(a.iI, a));
      qza(a);
      a.B = $xa(g.lG('yt-remote-automatic-screen-cache') || []);
      Z7(a);
      a.info('Initializing automatic screens: ' + O6(a.B));
      a.o = new U7(a.D, (0, g.z)(a.ge, a, !0));
      a.o.subscribe(
        'screenChange',
        (0, g.z)(function () {
          this.U('onlineScreenChange');
        }, a),
      );
    },
    Y7 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = R6(a.B, b.uuid)) ? ((c.id = b.id), (c.token = b.token), (b = c)) : a.B.push(b),
          g.kG('yt-remote-automatic-screen-cache', (0, g.J)(a.B, Yxa)));
      Z7(a);
      a.C[b.uuid] = b.id;
      g.kG('yt-remote-device-id-map', a.C, 31536e3);
      return b;
    },
    Z7 = function (a) {
      a.C = g.lG('yt-remote-device-id-map') || {};
    },
    $7 = function (a, b, c) {
      g.lF.call(this);
      this.N = c;
      this.I = a;
      this.o = b;
      this.A = null;
    },
    a8 = function (a, b) {
      K7(a.N, b);
    },
    b8 = function (a, b) {
      $7.call(this, a, b, 'CastSession');
      this.g = null;
      this.B = 0;
      this.D = (0, g.z)(this.nU, this);
      this.C = (0, g.z)(this.mS, this);
      this.B = g.DD(
        (0, g.z)(function () {
          rza(this, null);
        }, this),
        12e4,
      );
    },
    sza = function (a) {
      a.info('sendYoutubeMessage_: getMdxSessionStatus ' + g.vg(void 0));
      var b = { type: 'getMdxSessionStatus' };
      a.g
        ? a.g.sendMessage(
            'urn:x-cast:com.google.youtube.mdx',
            b,
            g.y,
            (0, g.z)(function () {
              a8(this, 'Failed to send message: getMdxSessionStatus.');
            }, a),
          )
        : a8(a, 'Sending yt message without session: ' + g.vg(b));
    },
    rza = function (a, b) {
      g.FD(a.B);
      if (b) {
        if ((a.info('onConnectedScreenId_: Received screenId: ' + b), !a.A || a.A.id != b)) {
          var c = (0, g.z)(a.Do, a),
            d = (0, g.z)(a.ne, a);
          a.Bx(b, c, d, 5);
        }
      } else a.ne(Error('Waiting for session status timed out.'));
    },
    c8 = function (a, b, c) {
      $7.call(this, a, b, 'DialSession');
      this.B = this.G = null;
      this.J = '';
      this.O = c;
      this.C = null;
      this.F = g.y;
      this.D = window.NaN;
      this.L = (0, g.z)(this.qU, this);
      this.g = g.y;
    },
    tza = function (a) {
      a.g = a.I.sD(
        a.J,
        a.o.label,
        a.o.friendlyName,
        (0, g.z)(function (a) {
          this.g = g.y;
          this.Do(a);
        }, a),
        (0, g.z)(function (a) {
          this.g = g.y;
          this.ne(a);
        }, a),
      );
    },
    uza = function (a) {
      var b = {};
      b.pairingCode = a.J;
      b.theme = a.O;
      if (a.C) {
        var c = a.C.currentTime || 0;
        b.v = a.C.videoId;
        b.t = c;
      }
      iya() && (b.env_useStageMdx = 1);
      return g.Lg(b);
    },
    d8 = function (a, b) {
      $7.call(this, a, b, 'ManualSession');
      this.g = g.DD((0, g.z)(this.Dj, this, null), 150);
    },
    e8 = function (a, b, c, d) {
      g.lF.call(this);
      this.o = a;
      this.F = b || '233637DE';
      this.D = c || 'cl';
      this.G = d || !1;
      this.g = null;
      this.C = !1;
      this.A = [];
      this.B = (0, g.z)(this.SQ, this);
    },
    vza = function (a, b) {
      return b
        ? g.Ja(
            a.A,
            function (a) {
              return M6(b, a.label);
            },
            a,
          )
        : null;
    },
    f8 = function (a) {
      K7('Controller', a);
    },
    Zya = function (a) {
      window.chrome &&
        window.chrome.cast &&
        window.chrome.cast.logMessage &&
        window.chrome.cast.logMessage(a);
    },
    g8 = function (a) {
      return a.C || !!a.A.length || !!a.g;
    },
    h8 = function (a, b, c) {
      b != a.g &&
        (g.Xe(a.g),
        (a.g = b)
          ? (c ? a.U('yt-remote-cast2-receiver-resumed', b.o) : a.U('yt-remote-cast2-receiver-selected', b.o),
            b.subscribe('sessionScreen', (0, g.z)(a.rB, a, b)),
            b.A ? a.U('yt-remote-cast2-session-change', b.A) : c && a.g.Dj(null))
          : a.U('yt-remote-cast2-session-change', null));
    },
    wza = function (a) {
      var b = a.o.rD(),
        c = a.g && a.g.o;
      a = (0, g.J)(
        b,
        function (a) {
          c && M6(a, c.label) && (c = null);
          var b = a.uuid ? a.uuid : a.id,
            d = vza(this, a);
          d
            ? ((d.label = b), (d.friendlyName = a.name))
            : ((d = new window.chrome.cast.Receiver(b, a.name)),
              (d.receiverType = window.chrome.cast.ReceiverType.CUSTOM));
          return d;
        },
        a,
      );
      c &&
        (c.receiverType != window.chrome.cast.ReceiverType.CUSTOM &&
          ((c = new window.chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = window.chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    Bza = function (a, b, c, d, e, f, k) {
      xza()
        ? yza(b, e, f, k) &&
          (j8(!0),
          window.chrome && window.chrome.cast && window.chrome.cast.isAvailable
            ? zza(a, c)
            : ((window.__onGCastApiAvailable = function (b, d) {
                b
                  ? zza(a, c)
                  : (k8('Failed to load cast API: ' + d),
                    l8(!1),
                    j8(!1),
                    g.mG('yt-remote-cast-available'),
                    g.mG('yt-remote-cast-receiver'),
                    Aza(),
                    c(!1));
              }),
              d
                ? window.spf
                  ? window.spf.script.load(
                      'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js',
                      '',
                      void 0,
                    )
                  : lya()
                : tya()))
        : i8('Cannot initialize because not running Chrome');
    },
    Aza = function () {
      i8('dispose');
      var a = m8();
      a && a.dispose();
      g.ua('yt.mdx.remote.cloudview.instance_', null, void 0);
      Cza(!1);
      g.yF(n8);
      n8.length = 0;
    },
    o8 = function () {
      return !!g.lG('yt-remote-cast-installed');
    },
    Dza = function () {
      var a = g.lG('yt-remote-cast-receiver');
      return a ? a.friendlyName : null;
    },
    Eza = function () {
      i8('clearCurrentReceiver');
      g.mG('yt-remote-cast-receiver');
    },
    Fza = function () {
      return o8()
        ? m8()
          ? m8().getCastSession()
          : (k8('getCastSelector: Cast is not initialized.'), null)
        : (k8('getCastSelector: Cast API is not installed!'), null);
    },
    q8 = function () {
      o8()
        ? m8()
          ? p8()
            ? (i8('Requesting cast selector.'), m8().requestSession())
            : (i8('Wait for cast API to be ready to request the session.'),
              n8.push(g.xF('yt-remote-cast2-api-ready', q8)))
          : k8('requestCastSelector: Cast is not initialized.')
        : k8('requestCastSelector: Cast API is not installed!');
    },
    r8 = function (a, b) {
      p8() ? m8().setConnectedScreenStatus(a, b) : k8('setConnectedScreenStatus called before ready.');
    },
    xza = function () {
      var a = 0 <= g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
      return g.aJ || a;
    },
    Gza = function (a, b) {
      m8().init(a, b);
    },
    yza = function (a, b, c, d) {
      var e = !1;
      m8() ||
        ((a = new e8(a, b, c, d)),
        a.subscribe('yt-remote-cast2-availability-change', function (a) {
          g.kG('yt-remote-cast-available', a);
          g.BF('yt-remote-cast2-availability-change', a);
        }),
        a.subscribe('yt-remote-cast2-receiver-selected', function (a) {
          i8('onReceiverSelected: ' + a.friendlyName);
          g.kG('yt-remote-cast-receiver', a);
          g.BF('yt-remote-cast2-receiver-selected', a);
        }),
        a.subscribe('yt-remote-cast2-receiver-resumed', function (a) {
          i8('onReceiverResumed: ' + a.friendlyName);
          g.kG('yt-remote-cast-receiver', a);
        }),
        a.subscribe('yt-remote-cast2-session-change', function (a) {
          i8('onSessionChange: ' + N6(a));
          a || g.mG('yt-remote-cast-receiver');
          g.BF('yt-remote-cast2-session-change', a);
        }),
        g.ua('yt.mdx.remote.cloudview.instance_', a, void 0),
        (e = !0));
      i8('cloudview.createSingleton_: ' + e);
      return e;
    },
    m8 = function () {
      return g.x('yt.mdx.remote.cloudview.instance_');
    },
    zza = function (a, b) {
      l8(!0);
      j8(!1);
      Gza(a, function (a) {
        a
          ? (Cza(!0), g.AF('yt-remote-cast2-api-ready'))
          : (k8('Failed to initialize cast API.'),
            l8(!1),
            g.mG('yt-remote-cast-available'),
            g.mG('yt-remote-cast-receiver'),
            Aza());
        b(a);
      });
    },
    i8 = function (a) {
      K7('cloudview', a);
    },
    k8 = function (a) {
      K7('cloudview', a);
    },
    l8 = function (a) {
      i8('setCastInstalled_ ' + a);
      g.kG('yt-remote-cast-installed', a);
    },
    p8 = function () {
      return !!g.x('yt.mdx.remote.cloudview.apiReady_');
    },
    Cza = function (a) {
      i8('setApiReady_ ' + a);
      g.ua('yt.mdx.remote.cloudview.apiReady_', a, void 0);
    },
    j8 = function (a) {
      g.ua('yt.mdx.remote.cloudview.initializing_', a, void 0);
    },
    s8 = function (a) {
      this.index = -1;
      this.videoId = this.listId = '';
      this.volume = this.g = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.F = this.G = 0;
      this.o = null;
      this.hasNext = this.Mf = !1;
      this.J = this.I = this.A = this.C = 0;
      this.B = window.NaN;
      this.D = !1;
      this.reset(a);
    },
    t8 = function (a) {
      a.audioTrackId = null;
      a.o = null;
      a.g = -1;
      a.Mf = !1;
      a.hasNext = !1;
      a.G = 0;
      a.F = (0, g.H)();
      a.C = 0;
      a.A = 0;
      a.I = 0;
      a.J = 0;
      a.B = window.NaN;
      a.D = !1;
    },
    u8 = function (a) {
      return a.kb() ? ((0, g.H)() - a.F) / 1e3 : 0;
    },
    v8 = function (a, b) {
      a.G = b;
      a.F = (0, g.H)();
    },
    w8 = function (a) {
      switch (a.g) {
        case 1:
        case 1081:
          return ((0, g.H)() - a.F) / 1e3 + a.G;
        case -1e3:
          return 0;
      }
      return a.G;
    },
    x8 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && t8(a);
    },
    y8 = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.g;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.bc(a.o);
      b.hasPrevious = a.Mf;
      b.hasNext = a.hasNext;
      b.playerTime = a.G;
      b.playerTimeAt = a.F;
      b.seekableStart = a.C;
      b.seekableEnd = a.A;
      b.duration = a.I;
      b.loadedTime = a.J;
      b.liveIngestionTime = a.B;
      return b;
    },
    A8 = function (a, b) {
      g.lF.call(this);
      this.g = 0;
      this.B = a;
      this.D = [];
      this.C = new g.ZB();
      this.A = this.o = null;
      this.I = (0, g.z)(this.wO, this);
      this.F = (0, g.z)(this.Dl, this);
      this.G = (0, g.z)(this.vO, this);
      this.J = (0, g.z)(this.JO, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()), 3 != c && (a.subscribe('proxyStateChange', this.Mu, this), Hza(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.Mu(c)
          : g.DD(
              (0, g.z)(function () {
                this.Mu(c);
              }, this),
              0,
            ));
      var d = Fza();
      d && z8(this, d);
      this.subscribe('yt-remote-cast2-session-change', this.J);
    },
    B8 = function (a) {
      return new s8(a.B.getPlayerContextData());
    },
    Hza = function (a) {
      (0, g.C)(
        'nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange'.split(
          ' ',
        ),
        function (a) {
          this.D.push(this.B.subscribe(a, g.Da(this.OQ, a), this));
        },
        a,
      );
    },
    Iza = function (a) {
      (0, g.C)(
        a.D,
        function (a) {
          this.B.unsubscribeByKey(a);
        },
        a,
      );
      a.D.length = 0;
    },
    C8 = function (a, b) {
      50 > a.C.Kc() && g.aC(a.C, b);
    },
    E8 = function (a, b, c) {
      var d = B8(a);
      v8(d, c);
      -1e3 != d.g && (d.g = b);
      D8(a, d);
    },
    F8 = function (a, b, c) {
      a.B.sendMessage(b, c);
    },
    D8 = function (a, b) {
      Iza(a);
      a.B.setPlayerContextData(y8(b));
      Hza(a);
    },
    z8 = function (a, b) {
      a.A && (a.A.removeUpdateListener(a.I), a.A.removeMediaListener(a.F), a.Dl(null));
      a.A = b;
      a.A &&
        (K7('CP', 'Setting cast session: ' + a.A.sessionId),
        a.A.addUpdateListener(a.I),
        a.A.addMediaListener(a.F),
        a.A.media.length && a.Dl(a.A.media[0]));
    },
    Jza = function (a) {
      var b = a.o.media,
        c = a.o.customData;
      if (b && c) {
        var d = B8(a);
        b.contentId != d.videoId && K7('CP', 'Cast changing video to: ' + b.contentId);
        d.videoId = b.contentId;
        d.g = c.playerState;
        v8(d, a.o.getEstimatedTime());
        D8(a, d);
      } else K7('CP', 'No cast media video. Ignoring state update.');
    },
    G8 = function (a, b, c) {
      return (0, g.z)(function (a) {
        this.ac('Failed to ' + b + ' with cast v2 channel. Error code: ' + a.code);
        a.code != window.chrome.cast.ErrorCode.TIMEOUT &&
          (this.ac('Retrying ' + b + ' using MDx browser channel.'), F8(this, b, c));
      }, a);
    },
    H8 = function (a, b, c) {
      g.lF.call(this);
      this.C = window.NaN;
      this.O = !1;
      this.J = this.I = this.L = this.N = window.NaN;
      this.R = [];
      this.B = this.F = this.A = this.bb = this.g = null;
      this.na = a;
      this.R.push(g.WE(window, 'beforeunload', (0, g.z)(this.NH, this)));
      this.o = [];
      this.bb = new s8();
      this.aa = b.id;
      this.g = Kza(this, c);
      this.g.subscribe('handlerOpened', this.AO, this);
      this.g.subscribe('handlerClosed', this.xO, this);
      this.g.subscribe('handlerError', this.yO, this);
      this.g.subscribe('handlerMessage', this.zO, this);
      Yya(this.g, b.token);
      this.subscribe(
        'remoteQueueChange',
        function () {
          var a = this.bb.videoId;
          g.qG() && g.kG('yt-remote-session-video-id', a);
        },
        this,
      );
    },
    I8 = function (a) {
      K7('conn', a);
    },
    Kza = function (a, b) {
      return new E7(H7(a.na, '/bc'), b);
    },
    J8 = function (a, b) {
      a.U('proxyStateChange', b);
    },
    Lza = function (a) {
      a.C = g.DD(
        (0, g.z)(function () {
          I8('Connecting timeout');
          this.D(1);
        }, a),
        2e4,
      );
    },
    K8 = function (a) {
      g.FD(a.C);
      a.C = window.NaN;
    },
    L8 = function (a) {
      g.FD(a.N);
      a.N = window.NaN;
    },
    Mza = function (a) {
      M8(a);
      a.L = g.DD(
        (0, g.z)(function () {
          N8(this, 'getNowPlaying');
        }, a),
        2e4,
      );
    },
    M8 = function (a) {
      g.FD(a.L);
      a.L = window.NaN;
    },
    Oza = function (a, b) {
      b && (K8(a), L8(a));
      b == (F7(a.g) && (0, window.isNaN)(a.C))
        ? b && (J8(a, 1), N8(a, 'getSubtitlesTrack'))
        : b
        ? (a.X() && a.bb.reset(), J8(a, 1), N8(a, 'getNowPlaying'), Nza(a))
        : a.D(1);
    },
    Pza = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.bb.videoId &&
        (g.Wb(b.params) ? (a.bb.o = null) : (a.bb.o = b.params), a.U('remotePlayerChange'));
    },
    Qza = function (a, b) {
      var c = b.params.videoId || b.params.video_id,
        d = (0, window.parseInt)(b.params.currentIndex, 10);
      a.bb.listId = b.params.listId || a.bb.listId;
      x8(a.bb, c, d);
      a.U('remoteQueueChange');
    },
    Sza = function (a, b) {
      b.params = b.params || {};
      Qza(a, b);
      Rza(a, b);
      a.U('autoplayDismissed');
    },
    Rza = function (a, b) {
      var c = (0, window.parseInt)(b.params.currentTime || b.params.current_time, 10);
      v8(a.bb, (0, window.isNaN)(c) ? 0 : c);
      c = (0, window.parseInt)(b.params.state, 10);
      c = (0, window.isNaN)(c) ? -1 : c;
      -1 == c && -1e3 == a.bb.g && (c = -1e3);
      a.bb.g = c;
      c = Number(b.params.loadedTime);
      a.bb.J = (0, window.isNaN)(c) ? 0 : c;
      c = Number(b.params.duration);
      a.bb.I = (0, window.isNaN)(c) ? 0 : c;
      c = a.bb;
      var d = Number(b.params.liveIngestionTime);
      c.B = d;
      c.D = (0, window.isNaN)(d) ? !1 : !0;
      c = a.bb;
      d = Number(b.params.seekableStartTime);
      var e = Number(b.params.seekableEndTime);
      c.C = (0, window.isNaN)(d) ? 0 : d;
      c.A = (0, window.isNaN)(e) ? 0 : e;
      1 == a.bb.g ? Mza(a) : M8(a);
      a.U('remotePlayerChange');
    },
    Tza = function (a, b) {
      if (-1e3 != a.bb.g) {
        var c = 1085;
        switch ((0, window.parseInt)(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.bb.g = c;
        c = (0, window.parseInt)(b.params.currentTime, 10);
        v8(a.bb, (0, window.isNaN)(c) ? 0 : c);
        a.U('remotePlayerChange');
      }
    },
    Uza = function (a, b) {
      var c = 'true' == b.params.muted;
      a.bb.volume = (0, window.parseInt)(b.params.volume, 10);
      a.bb.muted = c;
      a.U('remotePlayerChange');
    },
    Vza = function (a, b) {
      a.F = b.params.videoId;
      a.U('nowAutoplaying', (0, window.parseInt)(b.params.timeout, 10));
    },
    Wza = function (a, b) {
      var c = 'true' == b.params.hasNext;
      a.bb.Mf = 'true' == b.params.hasPrevious;
      a.bb.hasNext = c;
      a.U('previousNextChange');
    },
    Nza = function (a) {
      g.FD(a.J);
      a.J = g.DD((0, g.z)(a.D, a, 1), 864e5);
    },
    N8 = function (a, b, c) {
      c ? I8('Sending: action=' + b + ', params=' + g.vg(c)) : I8('Sending: action=' + b);
      a.g.sendMessage(b, c);
    },
    O8 = function (a) {
      O7.call(this, 'ScreenServiceProxy');
      this.ed = a;
      this.o = [];
      this.o.push(this.ed.$_s('screenChange', (0, g.z)(this.lU, this)));
      this.o.push(this.ed.$_s('onlineScreenChange', (0, g.z)(this.uQ, this)));
    },
    aAa = function (a) {
      var b = { device: 'Desktop', app: 'youtube-desktop' };
      b = g.xD('MDX_CONFIG') || b;
      g.iG && Rxa();
      V6();
      P8 || ((P8 = new G7(b ? b.loungeApiHost : void 0)), iya() && (P8.g = '/api/loungedev'));
      Q8 ||
        ((Q8 = g.x('yt.mdx.remote.deferredProxies_') || []),
        g.ua('yt.mdx.remote.deferredProxies_', Q8, void 0));
      Xza();
      var c = R8();
      if (!c) {
        var d = new X7(P8);
        g.ua('yt.mdx.remote.screenService_', d, void 0);
        c = R8();
        var e = !1,
          f = void 0,
          k = void 0,
          l = !1;
        b && ((e = !!b.loadCastApiSetupScript), (f = b.appId), (k = b.theme), (l = !!b.disableDial));
        Bza(
          a,
          d,
          function (a) {
            a
              ? S8() && r8(S8(), 'YouTube TV')
              : d.subscribe('onlineScreenChange', function () {
                  g.BF('yt-remote-receiver-availability-change');
                });
          },
          e,
          f,
          k,
          l,
        );
      }
      b &&
        !g.x('yt.mdx.remote.initialized_') &&
        (g.ua('yt.mdx.remote.initialized_', !0, void 0),
        T8('Initializing: ' + g.vg(b)),
        U8.push(
          g.xF('yt-remote-cast2-availability-change', function () {
            g.BF('yt-remote-receiver-availability-change');
          }),
        ),
        U8.push(
          g.xF('yt-remote-cast2-receiver-selected', function () {
            V8(null);
            g.BF('yt-remote-auto-connect', 'cast-selector-receiver');
          }),
        ),
        U8.push(
          g.xF('yt-remote-cast2-receiver-resumed', function () {
            g.BF('yt-remote-receiver-resumed', 'cast-selector-receiver');
          }),
        ),
        U8.push(g.xF('yt-remote-cast2-session-change', Yza)),
        U8.push(
          g.xF('yt-remote-connection-change', function (a) {
            a ? r8(S8(), 'YouTube TV') : W8() || (r8(null, null), Eza());
          }),
        ),
        (a = X8()),
        b.isAuto && (a.id += '#dial'),
        g.mE('desktop_enable_autoplay') && (a.capabilities = ['atp']),
        (a.name = b.device),
        (a.app = b.app),
        (k = b.theme) && (a.theme = k),
        T8(' -- with channel params: ' + g.vg(a)),
        Zza(a),
        c.start(),
        S8() || $za());
    },
    cAa = function () {
      var a = bAa();
      o8() && g.lG('yt-remote-cast-available') && a.push({ key: 'cast-selector-receiver', name: 'Cast...' });
      return a;
    },
    bAa = function () {
      var a = R8().ed.$_gos();
      var b = Y8();
      b && Z8() && (Q6(a, b) || a.push(b));
      return aya(a);
    },
    $8 = function () {
      var a = dAa();
      !a && o8() && Dza() && (a = { key: 'cast-selector-receiver', name: Dza() });
      return a;
    },
    dAa = function () {
      var a = bAa(),
        b = Y8();
      b || (b = W8());
      return g.Ja(a, function (a) {
        return b && M6(b, a.key) ? !0 : !1;
      });
    },
    Y8 = function () {
      var a = S8();
      if (!a) return null;
      var b = R8().ge();
      return R6(b, a);
    },
    Yza = function (a) {
      T8('remote.onCastSessionChange_: ' + N6(a));
      if (a) {
        var b = Y8();
        b && b.id == a.id ? r8(b.id, 'YouTube TV') : (b && a9(), b9(a, 1));
      } else Z8() && a9();
    },
    a9 = function () {
      p8() ? m8().stopSession() : k8('stopSession called before API ready.');
      var a = Z8();
      a && (a.disconnect(1), c9(null));
    },
    d9 = function () {
      var a = Z8();
      return !!a && 3 != a.getProxyState();
    },
    T8 = function (a) {
      K7('remote', a);
    },
    R8 = function () {
      if (!e9) {
        var a = g.x('yt.mdx.remote.screenService_');
        e9 = a ? new O8(a) : null;
      }
      return e9;
    },
    S8 = function () {
      return g.x('yt.mdx.remote.currentScreenId_');
    },
    eAa = function (a) {
      g.ua('yt.mdx.remote.currentScreenId_', a, void 0);
    },
    fAa = function () {
      return g.x('yt.mdx.remote.connectData_');
    },
    V8 = function (a) {
      g.ua('yt.mdx.remote.connectData_', a, void 0);
    },
    Z8 = function () {
      return g.x('yt.mdx.remote.connection_');
    },
    c9 = function (a) {
      var b = Z8();
      V8(null);
      a || eAa('');
      g.ua('yt.mdx.remote.connection_', a, void 0);
      Q8 &&
        ((0, g.C)(Q8, function (b) {
          b(a);
        }),
        (Q8.length = 0));
      b && !a ? g.BF('yt-remote-connection-change', !1) : !b && a && g.BF('yt-remote-connection-change', !0);
    },
    W8 = function () {
      var a = g.qG();
      if (!a) return null;
      var b = R8().ge();
      return R6(b, a);
    },
    b9 = function (a, b) {
      Y8() && Y8();
      eAa(a.id);
      var c = new H8(P8, a, X8());
      c.connect(b, fAa());
      c.subscribe('beforeDisconnect', function (a) {
        g.BF('yt-remote-before-disconnect', a);
      });
      c.subscribe('beforeDispose', function () {
        Z8() && c9(null);
      });
      c9(c);
    },
    $za = function () {
      var a = W8();
      a
        ? (T8('Resume connection to: ' + N6(a)), b9(a, 0))
        : (W6(), Eza(), T8('Skipping connecting because no session screen found.'));
    },
    Xza = function () {
      var a = X8();
      if (g.Wb(a)) {
        a = U6();
        var b = g.lG('yt-remote-session-name') || '',
          c = g.lG('yt-remote-session-app') || '';
        a = { 'device': 'REMOTE_CONTROL', 'id': a, 'name': b, 'app': c, 'mdx-version': 3 };
        g.ua('yt.mdx.remote.channelParams_', a, void 0);
      }
    },
    X8 = function () {
      return g.x('yt.mdx.remote.channelParams_') || {};
    },
    Zza = function (a) {
      a
        ? (g.kG('yt-remote-session-app', a.app), g.kG('yt-remote-session-name', a.name))
        : (g.mG('yt-remote-session-app'), g.mG('yt-remote-session-name'));
      g.ua('yt.mdx.remote.channelParams_', a, void 0);
    },
    f9 = function (a, b, c) {
      g.M.call(this);
      this.G = a;
      this.o = b;
      this.A = new g.iF(this);
      g.N(this, this.A);
      this.A.P(b, 'onCaptionsTrackListChanged', this.NP);
      this.A.P(b, 'captionschanged', this.uO);
      this.A.P(b, 'captionssettingschanged', this.IC);
      this.A.P(b, 'videoplayerreset', this.Eo);
      this.A.P(b, 'mdxautoplaycancel', this.SG);
      this.R = this.A.P(b, 'onVolumeChange', this.bB);
      this.F = !1;
      this.g = c;
      c.subscribe('proxyStateChange', this.oB, this);
      c.subscribe('remotePlayerChange', this.Fl, this);
      c.subscribe('remoteQueueChange', this.Eo, this);
      c.subscribe('autoplayUpNext', this.NA, this);
      c.subscribe('previousNextChange', this.lB, this);
      c.subscribe('nowAutoplaying', this.dB, this);
      c.subscribe('autoplayDismissed', this.MA, this);
      this.suggestion = null;
      this.I = new g.eO(64);
      this.B = new g.Nt(this.EC, 500, this);
      g.N(this, this.B);
      this.C = new g.Nt(this.FC, 1e3, this);
      g.N(this, this.C);
      this.L = new d7(this.KT, 0, this);
      g.N(this, this.L);
      this.D = {};
      this.N = new g.Nt(this.gD, 1e3, this);
      g.N(this, this.N);
      this.J = new g.Jk(this.gL, 1e3, this);
      g.N(this, this.J);
      this.O = g.y;
      this.IC();
      this.Eo();
      this.Fl();
    },
    g9 = function (a, b) {
      var c = a.G,
        d = a.o.fa().lengthSeconds;
      c.I = b || 0;
      c.g.U('progresssync', b, d);
    },
    gAa = function (a) {
      g9(a, 0);
      a.B.stop();
      h9(a, new g.eO(64));
    },
    j9 = function (a, b) {
      if (i9(a) && !a.F) {
        var c = null;
        b && ((c = { style: a.o.Bi() }), g.dc(c, b));
        a.g.wC(a.o.fa(1).videoId, c);
        a.D = B8(a.g).o;
      }
    },
    k9 = function (a, b) {
      var c = a.o.Yf();
      if (c) {
        var d = c.de();
        var e = c.listId.toString();
      }
      var f = a.o.fa(1);
      c = a.g;
      var k = f.videoId,
        l = d;
      d = f.playerParams;
      f = f.zj;
      var m = B8(c),
        n = e || m.listId;
      l = l || 0;
      var q = { videoId: k, currentIndex: l };
      x8(m, k, l);
      g.t(b) && (v8(m, b), (q.currentTime = b));
      g.t(n) && (q.listId = n);
      null != d && (q.playerParams = d);
      null != f && (q.clickTrackingParams = f);
      F8(c, 'setPlaylist', q);
      e || D8(c, m);
      h9(a, new g.eO(1));
    },
    hAa = function (a, b) {
      if (b) {
        var c = a.o.zc('captions', 'tracklist', { zy: 1 });
        c && c.length ? (a.o.Gd('captions', 'track', b), (a.F = !1)) : (a.o.ul('captions'), (a.F = !0));
      } else a.o.Gd('captions', 'track', {});
    },
    i9 = function (a) {
      return B8(a.g).videoId == a.o.fa(1).videoId;
    },
    h9 = function (a, b) {
      a.C.stop();
      var c = a.I;
      if (!g.lO(c, b)) {
        var d = g.V(b, 2);
        d != g.V(a.I, 2) && g.WT(a.o, d);
        a.I = b;
        iAa(a.G, c, b);
      }
    },
    l9 = function (a) {
      g.X.call(this, {
        H: 'div',
        M: 'ytp-remote',
        K: [
          {
            H: 'div',
            M: 'ytp-remote-display-status',
            K: [
              { H: 'div', M: 'ytp-remote-display-status-icon', K: [g.TU()] },
              { H: 'div', M: 'ytp-remote-display-status-text', K: ['{{statustext}}'] },
            ],
          },
        ],
      });
      this.o = new g.pV(this, 250);
      g.N(this, this.o);
      this.A = a;
      this.P(a, 'presentingplayerstatechange', this.B);
      jAa(this, g.TT(a));
    },
    jAa = function (a, b) {
      if (3 == a.A.Ra()) {
        var c = { RECEIVER_NAME: a.A.zc('remote', 'currentReceiver').name };
        c = g.V(b, 128)
          ? g.U('YTP_MDX_STATUS_ERROR_2', c)
          : b.kb() || g.V(b, 4)
          ? g.U('YTP_MDX_STATUS_PLAYING_2', c)
          : g.U('YTP_MDX_STATUS_CONNECTED_2', c);
        a.updateValue('statustext', c);
        a.o.show();
      } else a.o.hide();
    },
    m9 = function (a, b) {
      g.K_.call(this, g.U('YTP_MDX_TITLE'), 0, a, b);
      this.o = a;
      this.G = {};
      this.P(a, 'onMdxReceiversChange', this.J);
      this.P(a, 'presentingplayerstatechange', this.J);
      this.J();
    },
    n9 = function (a) {
      g.tU.call(this, a);
      this.A = { key: P6(), name: g.U('YTP_MDX_MY_COMPUTER') };
      this.C = null;
      this.D = [];
      this.J = this.o = null;
      this.G = [this.A];
      this.B = this.A;
      this.F = new g.eO(64);
      this.I = 0;
      if (!g.NL(g.W(this.g))) {
        a = this.g;
        var b = g.MT(a).I;
        b && (b = b.A && b.A.g) && ((b = new m9(a, b)), g.N(this, b));
        b = new l9(a);
        g.N(this, b);
        g.nU(a, b.element, 4);
      }
    },
    iAa = function (a, b, c) {
      a.F = c;
      a.g.U('presentingplayerstatechange', new g.rO(c, b));
    },
    o9 = function (a, b) {
      if (b.key != a.B.key)
        if (b.key == a.A.key) a9();
        else {
          a.B = b;
          var c = a.g.getPlaylistId();
          var d = a.g.fa(1),
            e = d.videoId;
          if (c || e) {
            var f = a.g.Yf();
            if (f) {
              var k = [];
              for (var l = 0; l < f.getLength(); l++) k[l] = f.hc(l).videoId;
            } else k = [e];
            f = a.g.getCurrentTime(1);
            c = {
              videoIds: k,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.zj,
              index: Math.max(a.g.Gz(), 0),
              currentTime: 0 == f ? void 0 : f,
            };
          } else c = null;
          T8('Connecting to: ' + g.vg(b));
          'cast-selector-receiver' == b.key
            ? (V8(c || null),
              p8() ? m8().setLaunchParams(c || null) : k8('setLaunchParams called before ready.'))
            : !c && d9() && S8() == b.key
            ? g.BF('yt-remote-connection-change', !0)
            : (a9(), V8(c || null), (c = R8().ge()), (c = R6(c, b.key)) && b9(c, 1));
        }
    },
    zya = {
      '\x00': '\\0',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\x0B': '\\x0B',
      '"': '\\"',
      '\\': '\\\\',
      '<': '<',
    },
    n7 = { "'": "\\'" },
    kAa = {},
    Xxa = { UV: 'atp', u0: 'ska', J_: 'que', WZ: 'mus', q0: 'sus' };
  K6.prototype.fn = function () {
    var a = new K6({
      id: this.id,
      name: this.name,
      app: this.app,
      type: this.type,
      user: this.username,
      userAvatarUri: this.avatar,
      obfuscatedGaiaId: this.obfuscatedGaiaId,
      theme: this.theme,
      capabilities: Array.from(this.capabilities.values()).join(','),
      experiments: Array.from(this.experiments.values()).join(','),
    });
    a.A = this.A;
    a.o = this.o;
    a.g = this.g;
  };
  var X6,
    T6 = '',
    qya = Y6('loadGamesSDK') ? '/cast_game_sender.js' : '/cast_sender.js',
    rya = Y6('loadCastFramework') || Y6('loadCastApplicationFramework'),
    $6 = [
      'boadgeojelhgndaghljhdicfkmllpafd',
      'dliochdbjfkdbacpmhlcpmleaejidimm',
      'enhhojjnijigcajfphajepfemndkmdlo',
      'fmfcbgogabcbclcofgocippekhfcmgfj',
    ],
    lAa = ['pkedcjkdefgpdelpbcmbmeomcjbeemfm', 'fjhoaacokmgbjemoflkofnenfaiekifl'],
    pya = 50 <= mya() ? lAa.concat($6) : $6.concat(lAa);
  g.A(d7, g.M);
  g.h = d7.prototype;
  g.h.JH = function (a) {
    this.B = arguments;
    this.g = !1;
    this.Ba ? (this.A = (0, g.H)() + this.uc) : (this.Ba = g.pg(this.C, this.uc));
  };
  g.h.stop = function () {
    this.Ba && (g.qg(this.Ba), (this.Ba = null));
    this.A = null;
    this.g = !1;
    this.B = [];
  };
  g.h.pause = function () {
    ++this.o;
  };
  g.h.resume = function () {
    this.o && (--this.o, !this.o && this.g && ((this.g = !1), this.D.apply(null, this.B)));
  };
  g.h.W = function () {
    this.stop();
    d7.Y.W.call(this);
  };
  g.h.KH = function () {
    this.A
      ? ((this.Ba = g.pg(this.C, this.A - (0, g.H)())), (this.A = null))
      : ((this.Ba = null), this.o ? (this.g = !0) : ((this.g = !1), this.D.apply(null, this.B)));
  };
  e7.prototype.stringify = function (a) {
    return g.w.JSON.stringify(a, void 0);
  };
  e7.prototype.parse = function (a) {
    return g.w.JSON.parse(a, void 0);
  };
  g.h = f7.prototype;
  g.h.ji = null;
  g.h.wf = !1;
  g.h.qk = null;
  g.h.Gu = null;
  g.h.Uj = null;
  g.h.pj = null;
  g.h.mh = null;
  g.h.Gh = null;
  g.h.Ji = null;
  g.h.Oc = null;
  g.h.Sl = 0;
  g.h.xf = null;
  g.h.up = null;
  g.h.nh = null;
  g.h.Uk = -1;
  g.h.fC = !0;
  g.h.Th = !1;
  g.h.gr = 0;
  g.h.Mo = null;
  var xya = {},
    i7 = {};
  g.h = f7.prototype;
  g.h.setTimeout = function (a) {
    this.C = a;
  };
  g.h.GS = function (a) {
    a = a.target;
    var b = this.Mo;
    b && 3 == g.fx(a) ? b.nj() : this.mD(a);
  };
  g.h.mD = function (a) {
    try {
      if (a == this.Oc)
        a: {
          var b = g.fx(this.Oc),
            c = this.Oc.o,
            d = this.Oc.getStatus();
          if ((g.td && !g.rc(10)) || (g.vd && !g.qc('420+'))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.af && !g.jx(this.Oc))) break a;
          this.Th || 4 != b || 7 == c || (8 == c || 0 >= d ? this.g.sf(3) : this.g.sf(2));
          p7(this);
          var e = this.Oc.getStatus();
          this.Uk = e;
          var f = g.jx(this.Oc);
          (this.wf = 200 == e)
            ? (4 == b && l7(this),
              this.D
                ? (yya(this, b, f),
                  g.af && this.wf && 3 == b && (this.B.T(this.o, 'tick', this.zS), this.o.start()))
                : k7(this, f),
              this.wf && !this.Th && (4 == b ? this.g.Co(this) : ((this.wf = !1), h7(this))))
            : (400 == e && 0 < f.indexOf('Unknown SID') ? ((this.nh = 3), j7(13)) : ((this.nh = 0), j7(14)),
              l7(this),
              m7(this));
        }
    } catch (k) {
      this.Oc && g.jx(this.Oc);
    } finally {
    }
  };
  g.h.zS = function () {
    var a = g.fx(this.Oc),
      b = g.jx(this.Oc);
    this.Sl < b.length && (p7(this), yya(this, a, b), this.wf && 4 != a && h7(this));
  };
  g.h.LR = function (a) {
    o7((0, g.z)(this.KR, this, a), 0);
  };
  g.h.KR = function (a) {
    this.Th || (p7(this), k7(this, a), h7(this));
  };
  g.h.wB = function (a) {
    o7((0, g.z)(this.JR, this, a), 0);
  };
  g.h.JR = function (a) {
    this.Th || (l7(this), (this.wf = a), this.g.Co(this), this.g.sf(4));
  };
  g.h.cancel = function () {
    this.Th = !0;
    l7(this);
  };
  g.h.cS = function () {
    this.qk = null;
    var a = (0, g.H)();
    0 <= a - this.Gu
      ? (2 != this.pj && this.g.sf(3), l7(this), (this.nh = 2), j7(18), m7(this))
      : Bya(this, this.Gu - a);
  };
  g.h = Eya.prototype;
  g.h.ar = null;
  g.h.pe = null;
  g.h.No = !1;
  g.h.Jx = null;
  g.h.un = null;
  g.h.dr = null;
  g.h.fr = null;
  g.h.Le = null;
  g.h.Cg = -1;
  g.h.Tk = null;
  g.h.tk = null;
  g.h.connect = function (a) {
    this.fr = a;
    a = r7(this.g, null, this.fr);
    j7(3);
    this.Jx = (0, g.H)();
    var b = this.g.G;
    null != b
      ? ((this.Tk = b[0]), (this.tk = b[1]) ? ((this.Le = 1), Fya(this)) : ((this.Le = 2), t7(this)))
      : (J6(a, 'MODE', 'init'),
        (this.pe = new f7(this, void 0, void 0, void 0)),
        (this.pe.ji = this.ar),
        g7(this.pe, a, !1, null, !0),
        (this.Le = 0));
  };
  g.h.TG = function (a) {
    if (a) (this.Le = 2), t7(this);
    else {
      j7(4);
      var b = this.g;
      b.gf = b.bh.Cg;
      A7(b, 9);
    }
    a && this.sf(2);
  };
  g.h.Aq = function (a) {
    return this.g.Aq(a);
  };
  g.h.abort = function () {
    this.pe && (this.pe.cancel(), (this.pe = null));
    this.Cg = -1;
  };
  g.h.Ix = function () {
    return !1;
  };
  g.h.pB = function (a, b) {
    this.Cg = a.Uk;
    if (0 == this.Le)
      if (b) {
        try {
          var c = this.o.parse(b);
        } catch (d) {
          c = this.g;
          c.gf = this.Cg;
          A7(c, 2);
          return;
        }
        this.Tk = c[0];
        this.tk = c[1];
      } else (c = this.g), (c.gf = this.Cg), A7(c, 2);
    else if (2 == this.Le)
      if (this.No) j7(7), (this.dr = (0, g.H)());
      else if ('11111' == b) {
        if (
          (j7(6),
          (this.No = !0),
          (this.un = (0, g.H)()),
          (c = this.un - this.Jx),
          !g.td || g.rc(10) || 500 > c)
        )
          (this.Cg = 200), this.pe.cancel(), j7(12), s7(this.g, this, !0);
      } else j7(8), (this.un = this.dr = (0, g.H)()), (this.No = !1);
  };
  g.h.Co = function () {
    this.Cg = this.pe.Uk;
    if (this.pe.wf)
      0 == this.Le
        ? this.tk
          ? ((this.Le = 1), Fya(this))
          : ((this.Le = 2), t7(this))
        : 2 == this.Le &&
          ((!g.td || g.rc(10) ? !this.No : 200 > this.dr - this.un)
            ? (j7(11), s7(this.g, this, !1))
            : (j7(12), s7(this.g, this, !0)));
    else {
      0 == this.Le ? j7(9) : 2 == this.Le && j7(10);
      var a = this.g;
      a.gf = this.Cg;
      A7(a, 2);
    }
  };
  g.h.Ml = function () {
    return this.g.Ml();
  };
  g.h.isActive = function () {
    return this.g.isActive();
  };
  g.h.sf = function (a) {
    this.g.sf(a);
  };
  g.h = u7.prototype;
  g.h.Gk = null;
  g.h.Od = null;
  g.h.sc = null;
  g.h.Zq = null;
  g.h.xn = null;
  g.h.Yv = null;
  g.h.Mn = null;
  g.h.Bl = 0;
  g.h.NN = 0;
  g.h.qd = null;
  g.h.eh = null;
  g.h.vg = null;
  g.h.Xh = null;
  g.h.bh = null;
  g.h.tp = null;
  g.h.Cj = -1;
  g.h.Iy = -1;
  g.h.gf = -1;
  g.h.hj = 0;
  g.h.Yi = 0;
  g.h.Vh = 8;
  var B7 = new g.Af();
  g.A(Hya, g.Ze);
  g.A(Iya, g.Ze);
  g.A(Jya, g.Ze);
  g.h = u7.prototype;
  g.h.connect = function (a, b, c, d, e) {
    j7(0);
    this.Zq = b;
    this.Gk = c || {};
    d && g.t(e) && ((this.Gk.OSID = d), (this.Gk.OAID = e));
    this.D ? (o7((0, g.z)(this.zw, this, a), 100), Nya(this)) : this.zw(a);
  };
  g.h.zw = function (a) {
    this.bh = new Eya(this);
    this.bh.ar = null;
    this.bh.o = this.C;
    this.bh.connect(a);
  };
  g.h.Ix = function () {
    return 0 == this.g;
  };
  g.h.uB = function (a) {
    this.eh = null;
    Qya(this, a);
  };
  g.h.tB = function () {
    this.vg = null;
    this.sc = new f7(this, this.A, 'rpc', this.F);
    this.sc.ji = null;
    this.sc.gr = 0;
    var a = this.Yv.clone();
    g.tm(a, 'RID', 'rpc');
    g.tm(a, 'SID', this.A);
    g.tm(a, 'CI', this.tp ? '0' : '1');
    g.tm(a, 'AID', this.Cj);
    v7(this, a);
    if (!g.td || g.rc(10)) g.tm(a, 'TYPE', 'xmlhttp'), g7(this.sc, a, !0, this.Mn, !1);
    else {
      g.tm(a, 'TYPE', 'html');
      var b = this.sc,
        c = !!this.Mn;
      b.pj = 3;
      b.mh = I6(a.clone());
      Aya(b, c);
    }
  };
  g.h.pB = function (a, b) {
    if (0 != this.g && (this.sc == a || this.Od == a))
      if (((this.gf = a.Uk), this.Od == a && 3 == this.g))
        if (7 < this.Vh) {
          try {
            var c = this.C.parse(b);
          } catch (f) {
            c = null;
          }
          if (g.xa(c) && 3 == c.length)
            if (0 == c[0])
              a: {
                if (!this.vg) {
                  if (this.sc)
                    if (this.sc.Uj + 3e3 < this.Od.Uj) x7(this), this.sc.cancel(), (this.sc = null);
                    else break a;
                  z7(this);
                  j7(19);
                }
              }
            else
              (this.Iy = c[1]),
                0 < this.Iy - this.Cj &&
                  37500 > c[2] &&
                  this.tp &&
                  0 == this.Yi &&
                  !this.Xh &&
                  (this.Xh = o7((0, g.z)(this.pO, this), 6e3));
          else A7(this, 11);
        } else b != kAa.XW.g && A7(this, 11);
      else if ((this.sc == a && x7(this), !g.E(b))) {
        c = this.C.parse(b);
        g.xa(c);
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          this.Cj = e[0];
          e = e[1];
          2 == this.g
            ? 'c' == e[0]
              ? ((this.A = e[1]),
                (this.Mn = e[2]),
                (e = e[3]),
                null != e ? (this.Vh = e) : (this.Vh = 6),
                (this.g = 3),
                this.qd && this.qd.lw(),
                (this.Yv = r7(this, this.Ml() ? this.Mn : null, this.Zq)),
                Rya(this))
              : 'stop' == e[0] && A7(this, 7)
            : 3 == this.g &&
              ('stop' == e[0] ? A7(this, 7) : 'noop' != e[0] && this.qd && this.qd.kw(e), (this.Yi = 0));
        }
      }
  };
  g.h.pO = function () {
    null != this.Xh && ((this.Xh = null), this.sc.cancel(), (this.sc = null), z7(this), j7(20));
  };
  g.h.Co = function (a) {
    if (this.sc == a) {
      x7(this);
      this.sc = null;
      var b = 2;
    } else if (this.Od == a) (this.Od = null), (b = 1);
    else return;
    this.gf = a.Uk;
    if (0 != this.g)
      if (a.wf)
        1 == b
          ? ((b = (0, g.H)() - a.Uj),
            B7.dispatchEvent(new Iya(B7, a.Ji ? a.Ji.length : 0, b, this.hj)),
            w7(this),
            (this.B.length = 0))
          : Rya(this);
      else {
        var c = a.nh,
          d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.gf))) {
          if ((d = 1 == b))
            this.Od || this.eh || 1 == this.g || 2 <= this.hj
              ? (d = !1)
              : ((this.eh = o7((0, g.z)(this.uB, this, a), Sya(this, this.hj))), this.hj++, (d = !0));
          d = !(d || (2 == b && z7(this)));
        }
        if (d)
          switch (c) {
            case 1:
              A7(this, 5);
              break;
            case 4:
              A7(this, 10);
              break;
            case 3:
              A7(this, 6);
              break;
            case 7:
              A7(this, 12);
              break;
            default:
              A7(this, 2);
          }
      }
  };
  g.h.rH = function (a) {
    if (!g.D(arguments, this.g)) throw Error('Unexpected channel state: ' + this.g);
  };
  g.h.BT = function (a) {
    a ? j7(2) : (j7(1), Tya(this, 8));
  };
  g.h.Aq = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.$w();
    a.G = !1;
    return a;
  };
  g.h.isActive = function () {
    return !!this.qd && this.qd.isActive(this);
  };
  g.h.sf = function (a) {
    B7.dispatchEvent(new Jya(B7, a));
  };
  g.h.Ml = function () {
    return !(!g.td || g.rc(10));
  };
  g.h = Uya.prototype;
  g.h.lw = function () {};
  g.h.kw = function () {};
  g.h.jw = function () {};
  g.h.nq = function () {};
  g.h.lx = function () {
    return {};
  };
  g.h.isActive = function () {
    return !0;
  };
  g.A(D7, g.M);
  D7.prototype.A = function () {
    500 < this.uc && 24e4 > 2 * this.uc && (this.uc *= 2);
    this.B();
    this.o && this.start();
  };
  D7.prototype.start = function () {
    g.Ot(this.g, this.uc);
    this.o = (0, g.H)() + this.uc;
  };
  D7.prototype.stop = function () {
    this.g.stop();
    this.o = 0;
  };
  D7.prototype.isActive = function () {
    return this.g.isActive();
  };
  g.A(E7, Uya);
  g.h = E7.prototype;
  g.h.subscribe = function (a, b, c) {
    return this.A.subscribe(a, b, c);
  };
  g.h.unsubscribe = function (a, b, c) {
    return this.A.unsubscribe(a, b, c);
  };
  g.h.Id = function (a) {
    return this.A.Id(a);
  };
  g.h.U = function (a, b) {
    return this.A.U.apply(this.A, arguments);
  };
  g.h.dispose = function () {
    this.J || ((this.J = !0), g.Xe(this.A), Xya(this), g.Xe(this.o), (this.o = null));
  };
  g.h.ia = function () {
    return this.J;
  };
  g.h.connect = function (a, b, c) {
    if (!this.g || 2 != this.g.g) {
      this.I = '';
      this.o.stop();
      this.C = a || null;
      this.B = b || 0;
      a = this.L + '/test';
      b = this.L + '/bind';
      var d = new u7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.N),
        e = this.g;
      e && (e.qd = null);
      d.qd = this;
      this.g = d;
      e
        ? this.g.connect(a, b, this.D, e.A, e.Cj)
        : c
        ? this.g.connect(a, b, this.D, c.sessionId, c.arrayId)
        : this.g.connect(a, b, this.D);
    }
  };
  g.h.sendMessage = function (a, b) {
    var c = { _sc: a };
    b && g.dc(c, b);
    this.o.isActive() || 2 == (this.g ? this.g.g : 0) ? this.F.push(c) : F7(this) && Oya(this.g, c);
  };
  g.h.lw = function () {
    C7(this.o);
    this.C = null;
    this.B = 0;
    if (this.F.length) {
      var a = this.F;
      this.F = [];
      for (var b = 0, c = a.length; b < c; ++b) Oya(this.g, a[b]);
    }
    this.U('handlerOpened');
  };
  g.h.jw = function (a) {
    var b = 2 == a && 401 == this.g.gf;
    if (4 != a && !b) {
      if (6 == a || 410 == this.g.gf) (b = this.o), b.g.stop(), (b.uc = 500);
      this.o.start();
    }
    this.U('handlerError', a);
  };
  g.h.nq = function (a) {
    if (!this.o.isActive()) this.U('handlerClosed');
    else if (a)
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b].map;
        d && this.F.push(d);
      }
  };
  g.h.lx = function () {
    var a = { v: 2 };
    this.I && (a.gsessionid = this.I);
    0 != this.B && (a.ui = '' + this.B);
    0 != this.G && (a.ui = '' + this.G);
    this.C && g.dc(a, this.C);
    return a;
  };
  g.h.kw = function (a) {
    'S' == a[0]
      ? (this.I = a[1])
      : 'gracefulReconnect' == a[0]
      ? (C7(this.o), this.o.start(), Mya(this.g))
      : this.U('handlerMessage', new Vya(a[0], a[1]));
  };
  g.h.hU = function () {
    this.o.isActive();
    var a = this.g,
      b = 0;
    a.sc && b++;
    a.Od && b++;
    0 != b ? this.o.start() : this.connect(this.C, this.B);
  };
  G7.prototype.B = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  G7.prototype.A = function (a, b) {
    a(Error('Request error: ' + b.status));
  };
  G7.prototype.C = function (a) {
    a(Error('request timed out'));
  };
  var eza = (0, g.H)(),
    J7 = null,
    M7 = Array(50),
    L7 = -1,
    N7 = !1;
  g.A(O7, g.lF);
  O7.prototype.ge = function () {
    return this.g;
  };
  O7.prototype.contains = function (a) {
    return !!Q6(this.g, a);
  };
  O7.prototype.get = function (a) {
    return a ? R6(this.g, a) : null;
  };
  O7.prototype.info = function (a) {
    K7(this.F, a);
  };
  g.A(P7, g.lF);
  var mAa = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.h = P7.prototype;
  g.h.start = function () {
    !this.g && (0, window.isNaN)(this.Ba) && this.qD();
  };
  g.h.stop = function () {
    this.g && (this.g.abort(), (this.g = null));
    (0, window.isNaN)(this.Ba) || (g.FD(this.Ba), (this.Ba = window.NaN));
  };
  g.h.W = function () {
    this.stop();
    P7.Y.W.call(this);
  };
  g.h.qD = function () {
    this.Ba = window.NaN;
    this.g = g.TD(H7(this.D, '/pairing/get_screen'), {
      method: 'POST',
      Nb: { pairing_code: this.C },
      timeout: 5e3,
      Jb: (0, g.z)(this.jU, this),
      onError: (0, g.z)(this.iU, this),
      td: (0, g.z)(this.kU, this),
    });
  };
  g.h.jU = function (a, b) {
    this.g = null;
    var c = b.screen || {};
    c.dialId = this.A;
    c.name = this.B;
    this.U('pairingComplete', new L6(c));
  };
  g.h.iU = function (a) {
    this.g = null;
    a.status && 404 == a.status
      ? this.o >= mAa.length
        ? this.U('pairingFailed', Error('DIAL polling timed out'))
        : ((a = mAa[this.o]), (this.Ba = g.DD((0, g.z)(this.qD, this), a)), this.o++)
      : this.U('pairingFailed', Error('Server error ' + a.status));
  };
  g.h.kU = function () {
    this.g = null;
    this.U('pairingFailed', Error('Server not responding'));
  };
  g.A(R7, O7);
  g.h = R7.prototype;
  g.h.start = function () {
    Q7(this) && this.U('screenChange');
    !g.lG('yt-remote-lounge-token-expiration') && iza(this);
    g.FD(this.o);
    this.o = g.DD((0, g.z)(this.start, this), 1e4);
  };
  g.h.add = function (a, b) {
    Q7(this);
    fza(this, a);
    S7(this, !1);
    this.U('screenChange');
    b(a);
    a.token || iza(this);
  };
  g.h.remove = function (a, b) {
    var c = Q7(this);
    hza(this, a) && (S7(this, !1), (c = !0));
    b(a);
    c && this.U('screenChange');
  };
  g.h.pp = function (a, b, c, d) {
    var e = Q7(this),
      f = this.get(a.id);
    f ? (f.name != b && ((f.name = b), S7(this, !1), (e = !0)), c(a)) : d(Error('no such local screen.'));
    e && this.U('screenChange');
  };
  g.h.W = function () {
    g.FD(this.o);
    R7.Y.W.call(this);
  };
  g.h.WH = function (a) {
    Q7(this);
    var b = this.g.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    S7(this, !b);
    b && K7(this.F, 'Missed ' + b + ' lounge tokens.');
  };
  g.h.VH = function (a) {
    K7(this.F, 'Requesting lounge tokens failed: ' + a);
  };
  g.A(U7, g.lF);
  g.h = U7.prototype;
  g.h.start = function () {
    var a = (0, window.parseInt)(g.lG('yt-remote-fast-check-period') || '0', 10);
    (this.B = (0, g.H)() - 144e5 < a ? 0 : a)
      ? W7(this)
      : ((this.B = (0, g.H)() + 3e5), g.kG('yt-remote-fast-check-period', this.B), this.Qt());
  };
  g.h.isEmpty = function () {
    return g.Wb(this.g);
  };
  g.h.update = function () {
    T7('Updating availability on schedule.');
    var a = this.D(),
      b = g.Lb(
        this.g,
        function (b, d) {
          return b && !!R6(a, d);
        },
        this,
      );
    V7(this, b);
  };
  g.h.W = function () {
    g.FD(this.A);
    this.A = window.NaN;
    this.o && (this.o.abort(), (this.o = null));
    U7.Y.W.call(this);
  };
  g.h.Qt = function () {
    g.FD(this.A);
    this.A = window.NaN;
    this.o && this.o.abort();
    var a = lza(this);
    if (g.Ob(a)) {
      var b = H7(this.C, '/pairing/get_screen_availability');
      this.o = I7(
        this.C,
        b,
        { lounge_token: g.Qb(a).join(',') },
        (0, g.z)(this.lR, this, a),
        (0, g.z)(this.kR, this),
      );
    } else V7(this, {}), W7(this);
  };
  g.h.lR = function (a, b) {
    this.o = null;
    var c = g.Qb(lza(this));
    if (g.gb(c, g.Qb(a))) {
      c = b.screens || [];
      for (var d = {}, e = 0, f = c.length; e < f; ++e) d[a[c[e].loungeToken]] = 'online' == c[e].status;
      V7(this, d);
      W7(this);
    } else this.ac('Changing Screen set during request.'), this.Qt();
  };
  g.h.kR = function (a) {
    this.ac('Screen availability failed: ' + a);
    this.o = null;
    W7(this);
  };
  g.h.ac = function (a) {
    K7('OnlineScreenService', a);
  };
  g.A(X7, O7);
  g.h = X7.prototype;
  g.h.start = function () {
    this.A.start();
    this.o.start();
    this.g.length && (this.U('screenChange'), this.o.isEmpty() || this.U('onlineScreenChange'));
  };
  g.h.add = function (a, b, c) {
    this.A.add(a, b, c);
  };
  g.h.remove = function (a, b, c) {
    this.A.remove(a, b, c);
    this.o.update();
  };
  g.h.pp = function (a, b, c, d) {
    this.A.contains(a)
      ? this.A.pp(a, b, c, d)
      : ((a = 'Updating name of unknown screen: ' + a.name), K7(this.F, a), d(Error(a)));
  };
  g.h.ge = function (a) {
    return a
      ? this.g
      : g.Va(
          this.g,
          (0, g.Hd)(
            this.B,
            function (a) {
              return !this.contains(a);
            },
            this,
          ),
        );
  };
  g.h.rD = function () {
    return (0, g.Hd)(
      this.ge(!0),
      function (a) {
        return !!this.o.g[a.id];
      },
      this,
    );
  };
  g.h.sD = function (a, b, c, d, e) {
    this.info('getDialScreenByPairingCode ' + a + ' / ' + b);
    var f = new P7(this.D, a, b, c);
    f.subscribe(
      'pairingComplete',
      (0, g.z)(function (a) {
        g.Xe(f);
        d(Y7(this, a));
      }, this),
    );
    f.subscribe('pairingFailed', function (a) {
      g.Xe(f);
      e(a);
    });
    f.start();
    return (0, g.z)(f.stop, f);
  };
  g.h.mU = function (a, b, c, d) {
    g.TD(H7(this.D, '/pairing/get_screen'), {
      method: 'POST',
      Nb: { pairing_code: a },
      timeout: 5e3,
      Jb: (0, g.z)(function (a, d) {
        var e = new L6(d.screen || {});
        if (!e.name || pza(this, e.name)) {
          a: {
            var f = e.name;
            for (var m = 2, n = b(f, m); pza(this, n); ) {
              m++;
              if (20 < m) break a;
              n = b(f, m);
            }
            f = n;
          }
          e.name = f;
        }
        c(Y7(this, e));
      }, this),
      onError: (0, g.z)(function (a) {
        d(Error('pairing request failed: ' + a.status));
      }, this),
      td: (0, g.z)(function () {
        d(Error('pairing request timed out.'));
      }, this),
    });
  };
  g.h.W = function () {
    g.Xe(this.A);
    g.Xe(this.o);
    X7.Y.W.call(this);
  };
  g.h.iI = function () {
    qza(this);
    this.U('screenChange');
    this.o.update();
  };
  X7.prototype.dispose = X7.prototype.dispose;
  g.A($7, g.lF);
  g.h = $7.prototype;
  g.h.Do = function (a) {
    this.A = a;
    this.U('sessionScreen', this.A);
  };
  g.h.ne = function (a) {
    this.ia() || (a && a8(this, '' + a), (this.A = null), this.U('sessionScreen', null));
  };
  g.h.info = function (a) {
    K7(this.N, a);
  };
  g.h.uD = function () {
    return null;
  };
  g.h.Xt = function (a) {
    var b = this.o;
    a
      ? ((b.displayStatus = new window.chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    window.chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.z)(function () {
        this.info('Updated receiver status for ' + b.friendlyName + ': ' + a);
      }, this),
      (0, g.z)(function () {
        a8(this, 'Failed to update receiver status for: ' + b.friendlyName);
      }, this),
    );
  };
  g.h.W = function () {
    this.Xt('');
    $7.Y.W.call(this);
  };
  g.A(b8, $7);
  g.h = b8.prototype;
  g.h.Wt = function (a) {
    if (this.g) {
      if (this.g == a) return;
      a8(this, 'Overriding cast sesison with new session object');
      this.g.removeUpdateListener(this.D);
      this.g.removeMessageListener('urn:x-cast:com.google.youtube.mdx', this.C);
    }
    this.g = a;
    this.g.addUpdateListener(this.D);
    this.g.addMessageListener('urn:x-cast:com.google.youtube.mdx', this.C);
    sza(this);
  };
  g.h.Dj = function (a) {
    this.info('launchWithParams no-op for Cast: ' + g.vg(a));
  };
  g.h.stop = function () {
    this.g
      ? this.g.stop(
          (0, g.z)(function () {
            this.ne();
          }, this),
          (0, g.z)(function () {
            this.ne(Error('Failed to stop receiver app.'));
          }, this),
        )
      : this.ne(Error('Stopping cast device witout session.'));
  };
  g.h.Xt = g.y;
  g.h.W = function () {
    this.info('disposeInternal');
    g.FD(this.B);
    this.B = 0;
    this.g &&
      (this.g.removeUpdateListener(this.D),
      this.g.removeMessageListener('urn:x-cast:com.google.youtube.mdx', this.C));
    this.g = null;
    b8.Y.W.call(this);
  };
  g.h.mS = function (a, b) {
    if (!this.ia())
      if (b) {
        var c = g.Uw(b);
        if (c) {
          var d = '' + c.type;
          c = c.data || {};
          this.info('onYoutubeMessage_: ' + d + ' ' + g.vg(c));
          switch (d) {
            case 'mdxSessionStatus':
              rza(this, c.screenId);
              break;
            default:
              a8(this, 'Unknown youtube message: ' + d);
          }
        } else a8(this, 'Unable to parse message.');
      } else a8(this, 'No data in message.');
  };
  g.h.Bx = function (a, b, c, d) {
    oza(
      this.I,
      this.o.label,
      a,
      this.o.friendlyName,
      (0, g.z)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (a8(this, 'Screen ' + a + ' appears to be offline. ' + d + ' retries left.'),
            g.DD((0, g.z)(this.Bx, this, a, b, c, d - 1), 300))
          : c(Error('Unable to fetch screen.'));
      }, this),
      c,
    );
  };
  g.h.uD = function () {
    return this.g;
  };
  g.h.nU = function (a) {
    this.ia() || a || (a8(this, 'Cast session died.'), this.ne());
  };
  g.A(c8, $7);
  g.h = c8.prototype;
  g.h.Wt = function (a) {
    this.B = a;
    this.B.addUpdateListener(this.L);
  };
  g.h.Dj = function (a) {
    this.C = a;
    this.F();
  };
  g.h.stop = function () {
    this.g();
    this.g = g.y;
    g.FD(this.D);
    this.B
      ? this.B.stop((0, g.z)(this.ne, this, null), (0, g.z)(this.ne, this, 'Failed to stop DIAL device.'))
      : this.ne();
  };
  g.h.W = function () {
    this.g();
    this.g = g.y;
    g.FD(this.D);
    this.B && this.B.removeUpdateListener(this.L);
    this.B = null;
    c8.Y.W.call(this);
  };
  g.h.qU = function (a) {
    this.ia() || a || (a8(this, 'DIAL session died.'), this.g(), (this.g = g.y), this.ne());
  };
  g.h.Pr = function (a) {
    this.J = P6();
    if (this.C) {
      var b = new window.chrome.cast.DialLaunchResponse(!0, uza(this));
      a(b);
      tza(this);
    } else
      (this.F = (0, g.z)(function () {
        g.FD(this.D);
        this.F = g.y;
        this.D = window.NaN;
        var b = new window.chrome.cast.DialLaunchResponse(!0, uza(this));
        a(b);
        tza(this);
      }, this)),
        (this.D = g.DD(
          (0, g.z)(function () {
            this.F();
          }, this),
          100,
        ));
  };
  g.h.yJ = function (a, b, c) {
    oza(
      this.I,
      this.G.receiver.label,
      a,
      this.o.friendlyName,
      (0, g.z)(function (a) {
        a && a.token ? (this.Do(a), b(new window.chrome.cast.DialLaunchResponse(!1))) : this.Pr(b, c);
      }, this),
      (0, g.z)(function (a) {
        a8(this, 'Failed to get DIAL screen: ' + a);
        this.Pr(b, c);
      }, this),
    );
  };
  g.A(d8, $7);
  d8.prototype.stop = function () {
    this.ne();
  };
  d8.prototype.Wt = g.y;
  d8.prototype.Dj = function () {
    g.FD(this.g);
    this.g = window.NaN;
    var a = R6(this.I.ge(), this.o.label);
    a ? this.Do(a) : this.ne(Error('No such screen'));
  };
  d8.prototype.W = function () {
    g.FD(this.g);
    this.g = window.NaN;
    d8.Y.W.call(this);
  };
  g.A(e8, g.lF);
  g.h = e8.prototype;
  g.h.init = function (a, b) {
    window.chrome.cast.timeout.requestSession = 3e4;
    var c = new window.chrome.cast.SessionRequest(this.F);
    this.G || (c.dialRequest = new window.chrome.cast.DialRequest('YouTube'));
    var d = window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
      e = a
        ? window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    c = new window.chrome.cast.ApiConfig(c, (0, g.z)(this.qB, this), (0, g.z)(this.WQ, this), d, e);
    c.customDialLaunchCallback = (0, g.z)(this.aP, this);
    window.chrome.cast.initialize(
      c,
      (0, g.z)(function () {
        this.ia() ||
          (window.chrome.cast.addReceiverActionListener(this.B),
          bza(),
          this.o.subscribe('onlineScreenChange', (0, g.z)(this.tD, this)),
          (this.A = wza(this)),
          window.chrome.cast.setCustomReceivers(
            this.A,
            g.y,
            (0, g.z)(function (a) {
              this.ac('Failed to set initial custom receivers: ' + g.vg(a));
            }, this),
          ),
          this.U('yt-remote-cast2-availability-change', g8(this)),
          b(!0));
      }, this),
      (0, g.z)(function (a) {
        this.ac('Failed to initialize API: ' + g.vg(a));
        b(!1);
      }, this),
    );
  };
  g.h.jT = function (a, b) {
    f8('Setting connected screen ID: ' + a + ' -> ' + b);
    if (this.g) {
      var c = this.g.A;
      if (!a || (c && c.id != a)) f8('Unsetting old screen status: ' + this.g.o.friendlyName), h8(this, null);
    }
    if (a && b) {
      if (!this.g) {
        c = R6(this.o.ge(), a);
        if (!c) {
          f8('setConnectedScreenStatus: Unknown screen.');
          return;
        }
        var d = vza(this, c);
        d ||
          (f8('setConnectedScreenStatus: Connected receiver not custom...'),
          (d = new window.chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (d.receiverType = window.chrome.cast.ReceiverType.CUSTOM),
          this.A.push(d),
          window.chrome.cast.setCustomReceivers(
            this.A,
            g.y,
            (0, g.z)(function (a) {
              this.ac('Failed to set initial custom receivers: ' + g.vg(a));
            }, this),
          ));
        f8('setConnectedScreenStatus: new active receiver: ' + d.friendlyName);
        h8(this, new d8(this.o, d), !0);
      }
      this.g.Xt(b);
    } else f8('setConnectedScreenStatus: no screen.');
  };
  g.h.kT = function (a) {
    this.ia()
      ? this.ac('Setting connection data on disposed cast v2')
      : this.g
      ? this.g.Dj(a)
      : this.ac('Setting connection data without a session');
  };
  g.h.pU = function () {
    this.ia()
      ? this.ac('Stopping session on disposed cast v2')
      : this.g
      ? (this.g.stop(), h8(this, null))
      : f8('Stopping non-existing session');
  };
  g.h.requestSession = function () {
    window.chrome.cast.requestSession((0, g.z)(this.qB, this), (0, g.z)(this.pR, this));
  };
  g.h.W = function () {
    this.o.unsubscribe('onlineScreenChange', (0, g.z)(this.tD, this));
    window.chrome && window.chrome.cast && window.chrome.cast.removeReceiverActionListener(this.B);
    g.Ta(g.x('yt.mdx.remote.debug.handlers_') || [], Zya);
    g.Xe(this.g);
    e8.Y.W.call(this);
  };
  g.h.ac = function (a) {
    K7('Controller', a);
  };
  g.h.rB = function (a, b) {
    this.g == a && (b || h8(this, null), this.U('yt-remote-cast2-session-change', b));
  };
  g.h.SQ = function (a, b) {
    if (!this.ia())
      if (a)
        switch (
          ((a.friendlyName = window.chrome.cast.unescape(a.friendlyName)),
          f8('onReceiverAction_ ' + a.label + ' / ' + a.friendlyName + '-- ' + b),
          b)
        ) {
          case window.chrome.cast.ReceiverAction.CAST:
            if (this.g)
              if (this.g.o.label != a.label)
                f8('onReceiverAction_: Stopping active receiver: ' + this.g.o.friendlyName), this.g.stop();
              else {
                f8('onReceiverAction_: Casting to active receiver.');
                this.g.A && this.U('yt-remote-cast2-session-change', this.g.A);
                break;
              }
            switch (a.receiverType) {
              case window.chrome.cast.ReceiverType.CUSTOM:
                h8(this, new d8(this.o, a));
                break;
              case window.chrome.cast.ReceiverType.DIAL:
                h8(this, new c8(this.o, a, this.D));
                break;
              case window.chrome.cast.ReceiverType.CAST:
                h8(this, new b8(this.o, a));
                break;
              default:
                this.ac('Unknown receiver type: ' + a.receiverType);
            }
            break;
          case window.chrome.cast.ReceiverAction.STOP:
            this.g && this.g.o.label == a.label
              ? this.g.stop()
              : this.ac('Stopping receiver w/o session: ' + a.friendlyName);
        }
      else this.ac('onReceiverAction_ called without receiver.');
  };
  g.h.aP = function (a) {
    if (this.ia()) return window.Promise.reject(Error('disposed'));
    var b = a.receiver;
    b.receiverType != window.chrome.cast.ReceiverType.DIAL &&
      (this.ac('Not DIAL receiver: ' + b.friendlyName),
      (b.receiverType = window.chrome.cast.ReceiverType.DIAL));
    var c = this.g ? this.g.o : null;
    if (!c || c.label != b.label)
      return (
        this.ac('Receiving DIAL launch request for non-clicked DIAL receiver: ' + b.friendlyName),
        window.Promise.reject(Error('illegal DIAL launch'))
      );
    if (c && c.label == b.label && c.receiverType != window.chrome.cast.ReceiverType.DIAL) {
      if (this.g.A)
        return (
          f8('Reselecting dial screen.'),
          this.U('yt-remote-cast2-session-change', this.g.A),
          window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1))
        );
      this.ac('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
      h8(this, new c8(this.o, b, this.D));
    }
    b = this.g;
    b.G = a;
    return b.G.appState == window.chrome.cast.DialAppState.RUNNING
      ? new window.Promise((0, g.z)(b.yJ, b, (b.G.extraData || {}).screenId || null))
      : new window.Promise((0, g.z)(b.Pr, b));
  };
  g.h.qB = function (a) {
    if (!this.ia()) {
      f8('New cast session ID: ' + a.sessionId);
      var b = a.receiver;
      if (b.receiverType != window.chrome.cast.ReceiverType.CUSTOM) {
        if (!this.g)
          if (b.receiverType == window.chrome.cast.ReceiverType.CAST)
            f8('Got resumed cast session before resumed mdx connection.'),
              (b.friendlyName = window.chrome.cast.unescape(b.friendlyName)),
              h8(this, new b8(this.o, b), !0);
          else {
            this.ac('Got non-cast session without previous mdx receiver event, or mdx resume.');
            return;
          }
        var c = this.g.o,
          d = R6(this.o.ge(), c.label);
        d &&
          M6(d, b.label) &&
          c.receiverType != window.chrome.cast.ReceiverType.CAST &&
          b.receiverType == window.chrome.cast.ReceiverType.CAST &&
          (f8('onSessionEstablished_: manual to cast session change ' + b.friendlyName),
          g.Xe(this.g),
          (this.g = new b8(this.o, b)),
          this.g.subscribe('sessionScreen', (0, g.z)(this.rB, this, this.g)),
          this.g.Dj(null));
        this.g.Wt(a);
      }
    }
  };
  g.h.oU = function () {
    return this.g ? this.g.uD() : null;
  };
  g.h.pR = function (a) {
    this.ia() ||
      (this.ac('Failed to estabilish a session: ' + g.vg(a)),
      a.code != window.chrome.cast.ErrorCode.CANCEL && h8(this, null));
  };
  g.h.WQ = function (a) {
    f8('Receiver availability updated: ' + a);
    if (!this.ia()) {
      var b = g8(this);
      this.C = a == window.chrome.cast.ReceiverAvailability.AVAILABLE;
      g8(this) != b && this.U('yt-remote-cast2-availability-change', g8(this));
    }
  };
  g.h.tD = function () {
    this.ia() ||
      ((this.A = wza(this)),
      f8('Updating custom receivers: ' + g.vg(this.A)),
      window.chrome.cast.setCustomReceivers(
        this.A,
        g.y,
        (0, g.z)(function () {
          this.ac('Failed to set custom receivers.');
        }, this),
      ),
      this.U('yt-remote-cast2-availability-change', g8(this)));
  };
  e8.prototype.setLaunchParams = e8.prototype.kT;
  e8.prototype.setConnectedScreenStatus = e8.prototype.jT;
  e8.prototype.stopSession = e8.prototype.pU;
  e8.prototype.getCastSession = e8.prototype.oU;
  e8.prototype.requestSession = e8.prototype.requestSession;
  e8.prototype.init = e8.prototype.init;
  e8.prototype.dispose = e8.prototype.dispose;
  var n8 = [];
  s8.prototype.reset = function (a) {
    this.listId = '';
    this.index = -1;
    this.videoId = '';
    t8(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.g = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.o = a.trackData),
      (this.Mf = a.hasPrevious),
      (this.hasNext = a.hasNext),
      (this.G = a.playerTime),
      (this.F = a.playerTimeAt),
      (this.C = a.seekableStart),
      (this.A = a.seekableEnd),
      (this.I = a.duration),
      (this.J = a.loadedTime),
      (this.B = a.liveIngestionTime),
      (this.D = !(0, window.isNaN)(this.B)));
  };
  s8.prototype.kb = function () {
    return 1 == this.g;
  };
  s8.prototype.getDuration = function () {
    return this.D ? this.I + u8(this) : this.I;
  };
  s8.prototype.clone = function () {
    return new s8(y8(this));
  };
  g.A(A8, g.lF);
  g.h = A8.prototype;
  g.h.play = function () {
    1 == this.g
      ? (this.o ? this.o.play(null, g.y, G8(this, 'play')) : F8(this, 'play'),
        E8(this, 1, w8(B8(this))),
        this.U('remotePlayerChange'))
      : C8(this, this.play);
  };
  g.h.pause = function () {
    1 == this.g
      ? (this.o ? this.o.pause(null, g.y, G8(this, 'pause')) : F8(this, 'pause'),
        E8(this, 2, w8(B8(this))),
        this.U('remotePlayerChange'))
      : C8(this, this.pause);
  };
  g.h.pD = function (a) {
    if (1 == this.g) {
      if (this.o) {
        var b = B8(this),
          c = new window.chrome.cast.media.SeekRequest();
        c.currentTime = a;
        c.resumeState =
          b.kb() || 3 == b.g
            ? window.chrome.cast.media.ResumeState.PLAYBACK_START
            : window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
        this.o.seek(c, g.y, G8(this, 'seekTo', { newTime: a }));
      } else F8(this, 'seekTo', { newTime: a });
      E8(this, 3, a);
      this.U('remotePlayerChange');
    } else C8(this, g.Da(this.pD, a));
  };
  g.h.stop = function () {
    if (1 == this.g) {
      this.o ? this.o.stop(null, g.y, G8(this, 'stopVideo')) : F8(this, 'stopVideo');
      var a = B8(this);
      a.index = -1;
      a.videoId = '';
      t8(a);
      D8(this, a);
      this.U('remotePlayerChange');
    } else C8(this, this.stop);
  };
  g.h.setVolume = function (a, b) {
    if (1 == this.g) {
      var c = B8(this);
      if (this.A) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.A.setReceiverVolumeLevel(
            d,
            (0, g.z)(function () {
              K7('CP', 'set receiver volume: ' + d);
            }, this),
            (0, g.z)(function () {
              this.ac('failed to set receiver volume.');
            }, this),
          );
        }
        c.muted != b &&
          this.A.setReceiverMuted(
            b,
            (0, g.z)(function () {
              K7('CP', 'set receiver muted: ' + b);
            }, this),
            (0, g.z)(function () {
              this.ac('failed to set receiver muted.');
            }, this),
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        F8(this, 'setVolume', e);
      }
      c.muted = b;
      c.volume = a;
      D8(this, c);
    } else C8(this, g.Da(this.setVolume, a, b));
  };
  g.h.wC = function (a, b) {
    if (1 == this.g) {
      var c = B8(this),
        d = { videoId: a };
      b &&
        ((c.o = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : '',
          languageName: b.languageName,
          format: b.format,
          kind: b.kind,
        }),
        (d.style = g.vg(b.style)),
        g.dc(d, c.o));
      F8(this, 'setSubtitlesTrack', d);
      D8(this, c);
    } else C8(this, g.Da(this.wC, a, b));
  };
  g.h.Lu = function (a, b) {
    if (1 == this.g) {
      F8(this, 'setAudioTrack', { videoId: a, audioTrackId: b.Sc.id });
      var c = B8(this);
      c.audioTrackId = b.Sc.id;
      D8(this, c);
    } else C8(this, g.Da(this.Lu, a, b));
  };
  g.h.oD = function (a, b) {
    if (1 == this.g) {
      if (a && b) {
        var c = B8(this);
        x8(c, a, b);
        D8(this, c);
      }
      F8(this, 'previous');
    } else C8(this, g.Da(this.oD, a, b));
  };
  g.h.nD = function (a, b) {
    if (1 == this.g) {
      if (a && b) {
        var c = B8(this);
        x8(c, a, b);
        D8(this, c);
      }
      F8(this, 'next');
    } else C8(this, g.Da(this.nD, a, b));
  };
  g.h.Ow = function () {
    1 == this.g ? F8(this, 'dismissAutoplay') : C8(this, this.Ow);
  };
  g.h.dispose = function () {
    if (3 != this.g) {
      var a = this.g;
      this.g = 3;
      this.U('proxyStateChange', a, this.g);
    }
    A8.Y.dispose.call(this);
  };
  g.h.W = function () {
    Iza(this);
    this.B = null;
    this.C.clear();
    z8(this, null);
    A8.Y.W.call(this);
  };
  g.h.Mu = function (a) {
    if ((a != this.g || 2 == a) && 3 != this.g && 0 != a) {
      var b = this.g;
      this.g = a;
      this.U('proxyStateChange', b, a);
      if (1 == a) for (; !this.C.isEmpty(); ) g.bC(this.C).apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.h.OQ = function (a, b) {
    this.U(a, b);
  };
  g.h.wO = function (a) {
    if (!a) this.Dl(null), z8(this, null);
    else if (this.A.receiver.volume) {
      a = this.A.receiver.volume;
      var b = B8(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        K7('CP', 'Cast volume update: ' + a.level + (a.muted ? ' muted' : '')),
          (b.volume = c),
          (b.muted = !!a.muted),
          D8(this, b);
    }
  };
  g.h.Dl = function (a) {
    K7('CP', 'Cast media: ' + !!a);
    this.o && this.o.removeUpdateListener(this.G);
    if ((this.o = a)) this.o.addUpdateListener(this.G), Jza(this), this.U('remotePlayerChange');
  };
  g.h.vO = function (a) {
    a ? (Jza(this), this.U('remotePlayerChange')) : this.Dl(null);
  };
  g.h.JO = function () {
    var a = Fza();
    a && z8(this, a);
  };
  g.h.ac = function (a) {
    K7('CP', a);
  };
  g.A(H8, g.lF);
  g.h = H8.prototype;
  g.h.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.playerParams,
        f = b.clickTrackingParams,
        k = b.index,
        l = { videoId: d },
        m = b.currentTime;
      g.t(m) && (l.currentTime = 5 >= m ? 0 : m);
      e && (l.playerParams = e);
      f && (l.clickTrackingParams = f);
      c && (l.listId = c);
      g.t(k) && (l.currentIndex = k);
      c && (this.bb.listId = c);
      this.bb.videoId = d;
      this.bb.index = k || 0;
      this.bb.state = 3;
      v8(this.bb, m);
      this.B = 'UNSUPPORTED';
      I8('Connecting with setPlaylist and params: ' + g.vg(l));
      this.g.connect({ method: 'setPlaylist', params: g.vg(l) }, a, dya());
    } else I8('Connecting without params'), this.g.connect({}, a, dya());
    Lza(this);
  };
  g.h.dispose = function () {
    this.ia() || (this.U('beforeDispose'), J8(this, 3));
    H8.Y.dispose.call(this);
  };
  g.h.W = function () {
    K8(this);
    M8(this);
    L8(this);
    g.FD(this.I);
    this.I = window.NaN;
    g.FD(this.J);
    this.J = window.NaN;
    this.A = null;
    g.XE(this.R);
    this.R.length = 0;
    this.g.dispose();
    H8.Y.W.call(this);
    this.B = this.F = this.o = this.bb = this.g = null;
  };
  g.h.NH = function () {
    this.D(2);
  };
  g.h.AO = function () {
    I8('Channel opened');
    this.O &&
      ((this.O = !1),
      L8(this),
      (this.N = g.DD(
        (0, g.z)(function () {
          I8('Timing out waiting for a screen.');
          this.D(1);
        }, this),
        15e3,
      )));
    hya(Wya(this.g), this.aa);
  };
  g.h.xO = function () {
    I8('Channel closed');
    (0, window.isNaN)(this.C) ? W6(!0) : W6();
    this.dispose();
  };
  g.h.yO = function (a) {
    W6();
    (0, window.isNaN)(this.G())
      ? (I8('Channel error: ' + a + ' without reconnection'), this.dispose())
      : ((this.O = !0), I8('Channel error: ' + a + ' with reconnection in ' + this.G() + ' ms'), J8(this, 2));
  };
  g.h.zO = function (a) {
    a.params
      ? I8('Received: action=' + a.action + ', params=' + g.vg(a.params))
      : I8('Received: action=' + a.action + ' {}');
    switch (a.action) {
      case 'loungeStatus':
        a = g.Uw(a.params.devices);
        this.o = (0, g.J)(a, function (a) {
          return new K6(a);
        });
        a = !!g.Ja(this.o, function (a) {
          return 'LOUNGE_SCREEN' == a.type;
        });
        Oza(this, a);
        break;
      case 'loungeScreenDisconnected':
        g.Ua(this.o, function (a) {
          return 'LOUNGE_SCREEN' == a.type;
        });
        Oza(this, !1);
        break;
      case 'remoteConnected':
        var b = new K6(g.Uw(a.params.device));
        g.Ja(this.o, function (a) {
          return b ? a.id == b.id : !1;
        }) || g.Ra(this.o, b);
        break;
      case 'remoteDisconnected':
        b = new K6(g.Uw(a.params.device));
        g.Ua(this.o, function (a) {
          return b ? a.id == b.id : !1;
        });
        break;
      case 'gracefulDisconnect':
        break;
      case 'playlistModified':
        Qza(this, a);
        break;
      case 'nowPlaying':
        Sza(this, a);
        break;
      case 'onStateChange':
        Rza(this, a);
        break;
      case 'onAdStateChange':
        Tza(this, a);
        break;
      case 'onVolumeChanged':
        Uza(this, a);
        break;
      case 'onSubtitlesTrackChanged':
        Pza(this, a);
        break;
      case 'nowAutoplaying':
        Vza(this, a);
        break;
      case 'autoplayDismissed':
        this.U('autoplayDismissed');
        break;
      case 'autoplayUpNext':
        this.F = a.params.videoId || null;
        this.U('autoplayUpNext', this.F);
        break;
      case 'onAutoplayModeChanged':
        this.B = a.params.autoplayMode;
        this.U('autoplayModeChange', this.B);
        'DISABLED' == this.B && this.U('autoplayDismissed');
        break;
      case 'onHasPreviousNextChanged':
        Wza(this, a);
        break;
      case 'requestAssistedSignIn':
        this.U('assistedSignInRequested', a.params.authCode);
        break;
      default:
        I8('Unrecognized action: ' + a.action);
    }
  };
  g.h.VS = function () {
    if (this.A) {
      var a = this.A;
      this.A = null;
      this.bb.videoId != a && N8(this, 'getNowPlaying');
    }
  };
  H8.prototype.subscribe = H8.prototype.subscribe;
  H8.prototype.unsubscribeByKey = H8.prototype.Id;
  H8.prototype.ea = function () {
    var a = 3;
    this.ia() ||
      ((a = 0), (0, window.isNaN)(this.G()) ? F7(this.g) && (0, window.isNaN)(this.C) && (a = 1) : (a = 2));
    return a;
  };
  H8.prototype.getProxyState = H8.prototype.ea;
  H8.prototype.D = function (a) {
    I8('Disconnecting with ' + a);
    K8(this);
    this.U('beforeDisconnect', a);
    1 == a && W6();
    Xya(this.g, a);
    this.dispose();
  };
  H8.prototype.disconnect = H8.prototype.D;
  H8.prototype.da = function () {
    var a = this.bb;
    this.A && ((a = this.bb.clone()), x8(a, this.A, a.index));
    return y8(a);
  };
  H8.prototype.getPlayerContextData = H8.prototype.da;
  H8.prototype.la = function (a) {
    var b = new s8(a);
    b.videoId &&
      b.videoId != this.bb.videoId &&
      ((this.A = b.videoId), g.FD(this.I), (this.I = g.DD((0, g.z)(this.VS, this), 5e3)));
    var c = [];
    (this.bb.listId == b.listId && this.bb.videoId == b.videoId && this.bb.index == b.index) ||
      c.push('remoteQueueChange');
    (this.bb.g == b.g &&
      this.bb.volume == b.volume &&
      this.bb.muted == b.muted &&
      w8(this.bb) == w8(b) &&
      g.vg(this.bb.o) == g.vg(b.o)) ||
      c.push('remotePlayerChange');
    this.bb.reset(a);
    (0, g.C)(
      c,
      function (a) {
        this.U(a);
      },
      this,
    );
  };
  H8.prototype.setPlayerContextData = H8.prototype.la;
  H8.prototype.X = function () {
    var a = this.g.D.id,
      b = g.Ja(this.o, function (b) {
        return 'REMOTE_CONTROL' == b.type && b.id != a;
      });
    return b ? b.id : '';
  };
  H8.prototype.getOtherConnectedRemoteId = H8.prototype.X;
  H8.prototype.G = function () {
    var a = this.g;
    return a.o.isActive() ? a.o.o - (0, g.H)() : window.NaN;
  };
  H8.prototype.getReconnectTimeout = H8.prototype.G;
  H8.prototype.Z = function () {
    return this.B || 'UNSUPPORTED';
  };
  H8.prototype.getAutoplayMode = H8.prototype.Z;
  H8.prototype.ca = function () {
    return this.F || '';
  };
  H8.prototype.getAutoplayVideoId = H8.prototype.ca;
  H8.prototype.pa = function () {
    if (!(0, window.isNaN)(this.G())) {
      var a = this.g.o;
      g.Pt(a.g);
      a.start();
    }
  };
  H8.prototype.reconnect = H8.prototype.pa;
  H8.prototype.ga = function (a, b) {
    N8(this, a, b);
    Nza(this);
  };
  H8.prototype.sendMessage = H8.prototype.ga;
  g.A(O8, O7);
  g.h = O8.prototype;
  g.h.ge = function (a) {
    return this.ed.$_gs(a);
  };
  g.h.contains = function (a) {
    return !!this.ed.$_c(a);
  };
  g.h.get = function (a) {
    return this.ed.$_g(a);
  };
  g.h.start = function () {
    this.ed.$_st();
  };
  g.h.add = function (a, b, c) {
    this.ed.$_a(a, b, c);
  };
  g.h.remove = function (a, b, c) {
    this.ed.$_r(a, b, c);
  };
  g.h.pp = function (a, b, c, d) {
    this.ed.$_un(a, b, c, d);
  };
  g.h.W = function () {
    for (var a = 0, b = this.o.length; a < b; ++a) this.ed.$_ubk(this.o[a]);
    this.o.length = 0;
    this.ed = null;
    O8.Y.W.call(this);
  };
  g.h.lU = function () {
    this.U('screenChange');
  };
  g.h.uQ = function () {
    this.U('onlineScreenChange');
  };
  X7.prototype.$_st = X7.prototype.start;
  X7.prototype.$_gspc = X7.prototype.mU;
  X7.prototype.$_gsppc = X7.prototype.sD;
  X7.prototype.$_c = X7.prototype.contains;
  X7.prototype.$_g = X7.prototype.get;
  X7.prototype.$_a = X7.prototype.add;
  X7.prototype.$_un = X7.prototype.pp;
  X7.prototype.$_r = X7.prototype.remove;
  X7.prototype.$_gs = X7.prototype.ge;
  X7.prototype.$_gos = X7.prototype.rD;
  X7.prototype.$_s = X7.prototype.subscribe;
  X7.prototype.$_ubk = X7.prototype.Id;
  var P8 = null,
    Q8 = null,
    e9 = null,
    U8 = [];
  g.p(f9, g.M);
  g.h = f9.prototype;
  g.h.W = function () {
    g.M.prototype.W.call(this);
    this.B.stop();
    this.C.stop();
    this.L.stop();
    this.O();
    this.g.unsubscribe('proxyStateChange', this.oB, this);
    this.g.unsubscribe('remotePlayerChange', this.Fl, this);
    this.g.unsubscribe('remoteQueueChange', this.Eo, this);
    this.g.unsubscribe('autoplayUpNext', this.NA, this);
    this.g.unsubscribe('previousNextChange', this.lB, this);
    this.g.unsubscribe('nowAutoplaying', this.dB, this);
    this.g.unsubscribe('autoplayDismissed', this.MA, this);
    this.g = this.G = null;
  };
  g.h.xz = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    if (2 != this.g.g)
      if (i9(this)) {
        if (1081 != B8(this.g).g || 'control_seek' != a)
          switch (a) {
            case 'control_toggle_play_pause':
              B8(this.g).kb() ? this.g.pause() : this.g.play();
              break;
            case 'control_play':
              this.g.play();
              break;
            case 'control_pause':
              this.g.pause();
              break;
            case 'control_seek':
              this.J.nj(c[0], c[1]);
              break;
            case 'control_subtitles_set_track':
              j9(this, c[0]);
              break;
            case 'control_set_audio_track':
              (c = c[0]), i9(this) && this.g.Lu(this.o.fa(1).videoId, c);
          }
      } else
        switch (a) {
          case 'control_toggle_play_pause':
          case 'control_play':
          case 'control_pause':
            c = this.o.getCurrentTime();
            k9(this, 0 == c ? void 0 : c);
            break;
          case 'control_seek':
            k9(this, c[0]);
            break;
          case 'control_subtitles_set_track':
            j9(this, c[0]);
            break;
          case 'control_set_audio_track':
            (c = c[0]), i9(this) && this.g.Lu(this.o.fa(1).videoId, c);
        }
  };
  g.h.uO = function (a) {
    this.L.JH(a);
  };
  g.h.KT = function (a) {
    this.xz('control_subtitles_set_track', g.Wb(a) ? null : a);
  };
  g.h.IC = function () {
    var a = this.o.zc('captions', 'track');
    g.Wb(a) || j9(this, a);
  };
  g.h.bB = function (a) {
    if (i9(this)) {
      this.g.unsubscribe('remotePlayerChange', this.Fl, this);
      var b = Math.round(a.volume);
      a = !!a.muted;
      var c = B8(this.g);
      if (b != c.volume || a != c.muted) this.g.setVolume(b, a), this.N.start();
      this.g.subscribe('remotePlayerChange', this.Fl, this);
    }
  };
  g.h.NP = function () {
    g.Wb(this.D) || hAa(this, this.D);
    this.F = !1;
  };
  g.h.oB = function (a, b) {
    this.C.stop();
    2 == b && this.FC();
  };
  g.h.Fl = function () {
    if (i9(this)) {
      this.B.stop();
      var a = B8(this.g);
      switch (a.g) {
        case 1081:
        case 1:
          h9(this, new g.eO(8));
          this.EC();
          break;
        case 1085:
        case 3:
          h9(this, new g.eO(9));
          break;
        case 1083:
        case 0:
          h9(this, new g.eO(2));
          this.J.stop();
          g9(this, this.o.fa().lengthSeconds);
          break;
        case 1084:
          h9(this, new g.eO(4));
          break;
        case 2:
          h9(this, new g.eO(4));
          g9(this, w8(a));
          break;
        case -1:
          h9(this, new g.eO(64));
          break;
        case -1e3:
          (a = { errorCode: 'mdx.remoteerror', message: g.U('YTP_MDX_PLAYER_ERROR') }),
            h9(this, new g.eO(128, a));
      }
      a = B8(this.g).o;
      var b = this.D;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.format == b.format &&
          a.kind == b.kind
        : 1) || ((this.D = a), hAa(this, a));
      a = B8(this.g);
      -1 == a.volume ||
        (Math.round(this.o.getVolume()) == a.volume && this.o.isMuted() == a.muted) ||
        this.N.isActive() ||
        this.gD();
    } else gAa(this);
  };
  g.h.lB = function () {
    this.o.U('mdxpreviousnextchange');
  };
  g.h.Eo = function () {
    i9(this) || gAa(this);
  };
  g.h.SG = function () {
    this.g.Ow();
  };
  g.h.NA = function (a) {
    a &&
      (a = g.TD('/watch_queue_ajax', {
        method: 'GET',
        ad: { action_get_watch_queue_item: 1, video_id: a },
        Jb: (0, g.z)(this.OR, this),
      })) &&
      (this.O = (0, g.z)(a.abort, a));
  };
  g.h.OR = function (a, b) {
    var c = new g.fN({ videoId: b.videoId, title: b.title, author: b.author, murlmq_webp: b.url });
    this.suggestion = c;
    this.o.U('mdxautoplayupnext', c);
  };
  g.h.dB = function (a) {
    (0, window.isNaN)(a) || this.o.U('mdxnowautoplaying', a);
  };
  g.h.MA = function () {
    this.o.U('mdxautoplaycanceled');
  };
  g.h.gL = function (a, b) {
    -1 == B8(this.g).g ? k9(this, a) : b && this.g.pD(a);
  };
  g.h.gD = function () {
    if (i9(this)) {
      var a = B8(this.g);
      this.A.Ea(this.R);
      a.muted ? this.o.mute() : this.o.Zf();
      this.o.setVolume(a.volume);
      this.R = this.A.P(this.o, 'onVolumeChange', this.bB);
    }
  };
  g.h.EC = function () {
    this.B.stop();
    if (!this.g.ia()) {
      var a = B8(this.g);
      a.kb() && h9(this, new g.eO(8));
      g9(this, w8(a));
      this.B.start();
    }
  };
  g.h.FC = function () {
    this.C.stop();
    this.B.stop();
    var a = this.g.B.getReconnectTimeout();
    2 == this.g.g && !(0, window.isNaN)(a) && this.C.start();
  };
  g.p(l9, g.X);
  l9.prototype.B = function (a) {
    jAa(this, a.state);
  };
  g.p(m9, g.K_);
  m9.prototype.J = function () {
    var a = this.o.zc('remote', 'receivers');
    a && 1 < a.length && !this.o.zc('remote', 'quickCast')
      ? ((this.G = g.jb(a, this.C, this)),
        g.L_(this, (0, g.J)(a, this.C)),
        (a = this.o.zc('remote', 'currentReceiver')),
        this.rf(this.C(a)),
        this.enable(!0))
      : this.enable(!1);
  };
  m9.prototype.C = function (a) {
    return a.key;
  };
  m9.prototype.qf = function (a) {
    return 'cast-selector-receiver' == a ? g.U('YTP_MDX_CAST_SELECTOR') : this.G[a].name;
  };
  m9.prototype.sd = function (a) {
    g.K_.prototype.sd.call(this, a);
    this.o.Gd('remote', 'currentReceiver', this.G[a]);
    this.B.Ob();
  };
  g.p(n9, g.tU);
  g.h = n9.prototype;
  g.h.create = function () {
    aAa(g.CL(g.W(this.g)));
    this.D.push(g.xF('yt-remote-before-disconnect', this.qO, this));
    this.D.push(g.xF('yt-remote-connection-change', this.XQ, this));
    this.D.push(g.xF('yt-remote-receiver-availability-change', this.mB, this));
    this.D.push(g.xF('yt-remote-auto-connect', this.VQ, this));
    this.D.push(g.xF('yt-remote-receiver-resumed', this.UQ, this));
    this.mB();
  };
  g.h.load = function () {
    this.g.Ps();
    g.tU.prototype.load.call(this);
    this.C = new f9(this, this.g, this.o);
    var a = (a = fAa()) ? a.currentTime : 0;
    var b = d9() ? new A8(Z8(), void 0) : null;
    0 == a && b && (a = w8(B8(b)));
    0 != a && ((this.I = a || 0), this.g.U('progresssync', a, void 0));
    iAa(this, this.F, this.F);
    g.G0(this.g.app, 6);
  };
  g.h.unload = function () {
    this.g.U('mdxautoplaycanceled');
    this.B = this.A;
    g.Ye(this.C, this.o);
    this.o = this.C = null;
    g.tU.prototype.unload.call(this);
    g.G0(this.g.app, 5);
  };
  g.h.W = function () {
    g.yF(this.D);
    g.tU.prototype.W.call(this);
  };
  g.h.ol = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.loaded && this.C.xz.apply(this.C, [].concat([a], g.pa(c)));
  };
  g.h.FH = function () {
    return this.loaded ? this.C.suggestion : null;
  };
  g.h.Mf = function () {
    return this.o ? B8(this.o).Mf : !1;
  };
  g.h.hasNext = function () {
    return this.o ? B8(this.o).hasNext : !1;
  };
  g.h.getCurrentTime = function () {
    return this.I;
  };
  g.h.FK = function () {
    var a = B8(this.o),
      b = this.g.fa();
    return {
      allowSeeking: this.g.fd(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.D ? a.B + u8(a) : a.B,
      isPeggedToLive: 1 >= (a.D ? a.A + u8(a) : a.A) - this.getCurrentTime(),
      loaded: a.J,
      seekableEnd: a.D ? a.A + u8(a) : a.A,
      seekableStart: 0 < a.C ? a.C + u8(a) : a.C,
    };
  };
  g.h.GK = function () {
    this.o && this.o.nD();
  };
  g.h.HK = function () {
    this.o && this.o.oD();
  };
  g.h.qO = function (a) {
    1 == a && (this.J = this.o ? B8(this.o) : null);
  };
  g.h.XQ = function () {
    var a = d9() ? new A8(Z8(), void 0) : null;
    if (a) {
      var b = this.B;
      this.loaded && this.unload();
      this.o = a;
      this.J = null;
      b.key != this.A.key && ((this.B = b), this.load());
    } else
      g.Xe(this.o),
        (this.o = null),
        this.loaded &&
          (this.unload(), (a = this.J) && a.videoId == this.g.fa().videoId && this.g.Ez(a.videoId, w8(a)));
    this.g.U('videodatachange', 'newdata', this.g.fa(), 3);
  };
  g.h.mB = function () {
    this.G = [this.A].concat(cAa());
    var a = $8() || this.A;
    o9(this, a);
    this.g.ua('onMdxReceiversChange');
  };
  g.h.VQ = function () {
    var a = $8();
    o9(this, a);
  };
  g.h.UQ = function () {
    this.B = $8();
  };
  g.h.EK = function (a, b) {
    switch (a) {
      case 'casting':
        return this.loaded;
      case 'receivers':
        return this.G;
      case 'currentReceiver':
        return b && ('cast-selector-receiver' == b.key ? q8() : o9(this, b)), this.loaded ? this.B : this.A;
      case 'quickCast':
        return 2 == this.G.length && 'cast-selector-receiver' == this.G[1].key ? (b && q8(), !0) : !1;
    }
  };
  g.h.IK = function () {
    F8(this.o, 'sendDebugCommand', { debugCommand: 'stats4nerds ' });
  };
  g.h.ud = function () {
    return !1;
  };
  g.BY.remote = n9;
})(_yt_player);
