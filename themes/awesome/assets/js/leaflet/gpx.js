var L = L || require('leaflet'),
  _MAX_POINT_INTERVAL_MS = 15e3,
  _SECOND_IN_MILLIS = 1e3,
  _MINUTE_IN_MILLIS = 60 * _SECOND_IN_MILLIS,
  _HOUR_IN_MILLIS = 60 * _MINUTE_IN_MILLIS,
  _DAY_IN_MILLIS = 24 * _HOUR_IN_MILLIS,
  _GPX_STYLE_NS = 'http://www.topografix.com/GPX/gpx_style/0/2',
  _DEFAULT_MARKER_OPTS = {
    startIconUrl: 'pin-icon-start.png',
    endIconUrl: 'pin-icon-end.png',
    shadowUrl: 'pin-shadow.png',
    wptIcons: [],
    wptIconsType: [],
    wptIconUrls: { '': 'pin-icon-wpt.png' },
    wptIconTypeUrls: { '': 'pin-icon-wpt.png' },
    pointMatchers: [],
    iconSize: [33, 50],
    shadowSize: [50, 50],
    iconAnchor: [16, 45],
    shadowAnchor: [16, 47],
    clickable: !1,
  },
  _DEFAULT_POLYLINE_OPTS = { color: 'blue' },
  _DEFAULT_GPX_OPTS = {
    parseElements: ['track', 'route', 'waypoint'],
    joinTrackSegments: !0,
  };
(L.GPX = L.FeatureGroup.extend({
  initialize: function (t, e) {
    (e.max_point_interval = e.max_point_interval || _MAX_POINT_INTERVAL_MS),
      (e.marker_options = this._merge_objs(
        _DEFAULT_MARKER_OPTS,
        e.marker_options || {}
      )),
      (e.polyline_options = e.polyline_options || {}),
      (e.gpx_options = this._merge_objs(
        _DEFAULT_GPX_OPTS,
        e.gpx_options || {}
      )),
      L.Util.setOptions(this, e),
      (L.GPXTrackIcon = L.Icon.extend({ options: e.marker_options })),
      (this._gpx = t),
      (this._layers = {}),
      this._init_info(),
      t && this._parse(t, e, this.options.async);
  },
  get_duration_string2: function (t, e) {
    var n = '';
    _DAY_IN_MILLIS <= t &&
      ((n += Math.floor(t / _DAY_IN_MILLIS) + 'd '), (t %= _DAY_IN_MILLIS)),
      _HOUR_IN_MILLIS <= t &&
        ((n += Math.floor(t / _HOUR_IN_MILLIS) + ':'), (t %= _HOUR_IN_MILLIS));
    var i = Math.floor(t / _MINUTE_IN_MILLIS);
    (t %= _MINUTE_IN_MILLIS), i < 10 && (n += '0'), (n += i + "'");
    i = Math.floor(t / _SECOND_IN_MILLIS);
    return (
      (t %= _SECOND_IN_MILLIS),
      i < 10 && (n += '0'),
      (n += i),
      (n += !e && 0 < t ? '.' + Math.round(1e3 * Math.floor(t)) / 1e3 : '"')
    );
  },
  get_duration_string: function (t, e) {
    let time = t;
    let days = Math.floor(t / _DAY_IN_MILLIS);
    t %= _DAY_IN_MILLIS;
    let hours = Math.floor(t / _HOUR_IN_MILLIS);
    t %= _HOUR_IN_MILLIS;
    let minutes = Math.floor(t / _MINUTE_IN_MILLIS);
    t %= _MINUTE_IN_MILLIS;
    let seconds = Math.floor(t / 1000);
    if (time >= _DAY_IN_MILLIS){
      return days + "d " + hours + "h ";
    } else if (time >= _HOUR_IN_MILLIS) {
      return hours + "h " + minutes + "m ";
    } else if (time > 0) {
      return minutes + "m " + seconds + "s";
    } else {
      return "";
    }
  },
  get_duration_string_iso: function (t, e) {
    return this.get_duration_string(t, e).replace("'", ':').replace('"', '');
  },
  get_start_coords: function() {
    return this._info.start_coords;
  },
  to_ft: function (t) {
    return 3.28084 * t;
  },
  m_to_km: function (t) {
    return t / 1e3;
  },
  m_to_mi: function (t) {
    return t / 1609.34;
  },
  get_name: function () {
    return this._info.name;
  },
  get_desc: function () {
    return this._info.desc;
  },
  get_author: function () {
    return this._info.author;
  },
  get_copyright: function () {
    return this._info.copyright;
  },
  get_distance: function () {
    return this._info.length;
  },
  get_distance_imp: function () {
    return this.to_miles(this.m_to_km(this.get_distance()));
  },
  get_start_time: function () {
    return this._info.duration.start;
  },
  get_end_time: function () {
    return this._info.duration.end;
  },
  get_moving_time: function () {
    return this._info.duration.moving;
  },
  get_total_time: function () {
    return this._info.duration.total;
  },
  get_duration: function() {
    return this._info.duration.end - this._info.duration.start;
  },
  get_average_speed: function() {
    return this.m_to_km(this.get_distance()) / (this.get_duration() / 36e5);
  },
  get_exercise_type: function() {
    return this._info.type;
  },
  get_time: function() {
    return this._info.time;
  },
  get_moving_pace: function () {
    return this.get_moving_time() / this.m_to_km(this.get_distance());
  },
  get_moving_pace_imp: function () {
    return this.get_moving_time() / this.get_distance_imp();
  },
  get_moving_speed: function () {
    return this.m_to_km(this.get_distance()) / (this.get_moving_time() / 36e5);
  },
  get_moving_speed_imp: function () {
    return (
      this.to_miles(this.m_to_km(this.get_distance())) /
      (this.get_moving_time() / 36e5)
    );
  },
  get_total_speed: function () {
    return this.m_to_km(this.get_distance()) / (this.get_total_time() / 36e5);
  },
  get_total_speed_imp: function () {
    return (
      this.to_miles(this.m_to_km(this.get_distance())) /
      (this.get_total_time() / 36e5)
    );
  },
  get_elevation_gain: function () {
    return this._info.elevation.gain;
  },
  get_elevation_loss: function () {
    return this._info.elevation.loss;
  },
  get_elevation_gain_imp: function () {
    return this.to_ft(this.get_elevation_gain());
  },
  get_elevation_loss_imp: function () {
    return this.to_ft(this.get_elevation_loss());
  },
  get_elevation_data: function () {
    var e = this;
    return this._info.elevation._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_km, null, function (t, e) {
        return t.toFixed(2) + ' km, ' + e.toFixed(0) + ' m';
      });
    });
  },
  get_elevation_data_imp: function () {
    var e = this;
    return this._info.elevation._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_mi, e.to_ft, function (t, e) {
        return t.toFixed(2) + ' mi, ' + e.toFixed(0) + ' ft';
      });
    });
  },
  get_elevation_max: function () {
    return this._info.elevation.max;
  },
  get_elevation_min: function () {
    return this._info.elevation.min;
  },
  get_elevation_max_imp: function () {
    return this.to_ft(this.get_elevation_max());
  },
  get_elevation_min_imp: function () {
    return this.to_ft(this.get_elevation_min());
  },
  get_average_hr: function () {
    return this._info.hr.avg;
  },
  get_average_temp: function () {
    return this._info.atemp.avg;
  },
  get_average_cadence: function () {
    return this._info.cad.avg;
  },
  get_heartrate_data: function () {
    var e = this;
    return this._info.hr._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_km, null, function (t, e) {
        return t.toFixed(2) + ' km, ' + e.toFixed(0) + ' bpm';
      });
    });
  },
  get_heartrate_data_imp: function () {
    var e = this;
    return this._info.hr._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_mi, null, function (t, e) {
        return t.toFixed(2) + ' mi, ' + e.toFixed(0) + ' bpm';
      });
    });
  },
  get_cadence_data: function () {
    var e = this;
    return this._info.cad._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_km, null, function (t, e) {
        return t.toFixed(2) + ' km, ' + e.toFixed(0) + ' rpm';
      });
    });
  },
  get_temp_data: function () {
    var e = this;
    return this._info.atemp._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_km, null, function (t, e) {
        return t.toFixed(2) + ' km, ' + e.toFixed(0) + ' degrees';
      });
    });
  },
  get_cadence_data_imp: function () {
    var e = this;
    return this._info.cad._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_mi, null, function (t, e) {
        return t.toFixed(2) + ' mi, ' + e.toFixed(0) + ' rpm';
      });
    });
  },
  get_temp_data_imp: function () {
    var e = this;
    return this._info.atemp._points.map(function (t) {
      return e._prepare_data_point(t, e.m_to_mi, null, function (t, e) {
        return t.toFixed(2) + ' mi, ' + e.toFixed(0) + ' degrees';
      });
    });
  },
  reload: function () {
    this._init_info(),
      this.clearLayers(),
      this._parse(this._gpx, this.options, this.options.async);
  },
  _merge_objs: function (t, e) {
    var n,
      i = {};
    for (n in t) i[n] = t[n];
    for (n in e) i[n] = e[n];
    return i;
  },
  _prepare_data_point: function (t, e, n, i) {
    t = [(e && e(t[0])) || t[0], (n && n(t[1])) || t[1]];
    return t.push((i && i(t[0], t[1])) || t[0] + ': ' + t[1]), t;
  },
  _init_info: function () {
    this._info = {
      name: null,
      length: 0,
      start_coords: [0,0],
      end_coords: [1,1],
      elevation: { gain: 0, loss: 0, max: 0, min: 1 / 0, _points: [] },
      hr: { avg: 0, _total: 0, _points: [] },
      duration: { start: null, end: null, moving: 0, total: 0 },
      atemp: { avg: 0, _total: 0, _points: [] },
      cad: { avg: 0, _total: 0, _points: [] },
    };
  },
  _load_xml: function (t, e, n, i) {
    null == i && (i = this.options.async), null == n && (n = this.options);
    var o = new window.XMLHttpRequest();
    o.open('GET', t, i);
    try {
      o.overrideMimeType('text/xml');
    } catch (t) {}
    (o.onreadystatechange = function () {
      4 == o.readyState && 200 == o.status && e(o.responseXML, n);
    }),
      o.send(null);
  },
  _parse: function (t, e, n) {
    function i(t, e) {
      var n = a._parse_gpx_data(t, e);
      n
        ? (a.addLayer(n), a.fire('loaded', { layers: n, element: t }))
        : a.fire('error', {
            err:
              'No parseable layers of type(s) ' +
              JSON.stringify(e.gpx_options.parseElements),
          });
    }
    var o,
      a = this;
    '<' === t.substr(0, 1)
      ? ((o = new DOMParser()),
        n
          ? setTimeout(function () {
              i(o.parseFromString(t, 'text/xml'), e);
            })
          : i(o.parseFromString(t, 'text/xml'), e))
      : this._load_xml(t, i, e, n);
  },
  _parse_gpx_data: function (t, e) {
    var n,
      i = [];
    0 < (u = t.getElementsByTagName('name')).length &&
      (this._info.name = u[0].textContent),
      0 < (d = t.getElementsByTagName('desc')).length &&
        (this._info.desc = d[0].textContent);
    var o = t.getElementsByTagName('author');
    0 < o.length && (this._info.author = o[0].textContent);
    o = t.getElementsByTagName('copyright');
    0 < o.length && (this._info.copyright = o[0].textContent);
    o = t.getElementsByTagName('type');
    0 < o.length && (this._info.type = o[0].textContent);
    o = t.getElementsByTagName('time');
    0 < o.length && (this._info.time = o[0].textContent);
    o = e.gpx_options.parseElements;
    if (-1 < o.indexOf('route'))
      for (var a = t.getElementsByTagName('rte'), r = 0; r < a.length; r++)
        i = i.concat(this._parse_segment(a[r], e, {}, 'rtept'));
    if (-1 < o.indexOf('track')) {
      var _ = t.getElementsByTagName('trk');
      for (r = 0; r < _.length; r++) {
        var s = _[r],
          l = this._extract_styling(s);
        if (e.gpx_options.joinTrackSegments)
          i = i.concat(this._parse_segment(s, e, l, 'trkpt'));
        else
          for (
            var m = s.getElementsByTagName('trkseg'), p = 0;
            p < m.length;
            p++
          )
            i = i.concat(this._parse_segment(m[p], e, l, 'trkpt'));
      }
    }
    if (
      ((this._info.hr.avg = Math.round(
        this._info.hr._total / this._info.hr._points.length
      )),
      (this._info.cad.avg = Math.round(
        this._info.cad._total / this._info.cad._points.length
      )),
      (this._info.atemp.avg = Math.round(
        this._info.atemp._total / this._info.atemp._points.length
      )),
      -1 < o.indexOf('waypoint'))
    )
      for (n = t.getElementsByTagName('wpt'), r = 0; r < n.length; r++) {
        var h,
          g = new L.LatLng(n[r].getAttribute('lat'), n[r].getAttribute('lon')),
          c = n[r].getElementsByTagName('name'),
          u = 0 < c.length ? c[0].textContent : null,
          f = n[r].getElementsByTagName('desc'),
          d = 0 < f.length ? f[0].textContent : null,
          I = n[r].getElementsByTagName('sym'),
          v = 0 < I.length ? I[0].textContent : null,
          y = n[r].getElementsByTagName('type'),
          x = 0 < y.length ? y[0].textContent : null,
          c = e.marker_options.wptIcons,
          f = e.marker_options.wptIconUrls,
          I = e.marker_options.wptIconsType,
          y = e.marker_options.wptIconTypeUrls,
          k = e.marker_options.pointMatchers || [];
        if (c && v && c[v]) h = c[v];
        else if (I && x && I[x]) h = I[x];
        else if (f && v && f[v]) h = new L.GPXTrackIcon({ iconUrl: f[v] });
        else if (y && x && y[x]) h = new L.GPXTrackIcon({ iconUrl: y[x] });
        else if (0 < k.length) {
          for (var p = 0; p < k.length; p++)
            if (k[p].regex.test(u)) {
              h = k[p].icon;
              break;
            }
        } else
          c && c['']
            ? (h = c[''])
            : f && f[''] && (h = new L.GPXTrackIcon({ iconUrl: f[''] }));
        h
          ? ((g = new L.Marker(g, {
              clickable: e.marker_options.clickable,
              title: u,
              icon: h,
              type: 'waypoint',
            }))
              .bindPopup('<b>' + u + '</b>' + (0 < d.length ? '<br>' + d : ''))
              .openPopup(),
            this.fire('addpoint', {
              point: g,
              point_type: 'waypoint',
              element: n[r],
            }),
            i.push(g))
          : console.log(
              'No waypoint icon could be matched for symKey=%s,typeKey=%s,name=%s on waypoint %o',
              v,
              x,
              u,
              n[r]
            );
      }
    return 1 < i.length ? new L.FeatureGroup(i) : 1 == i.length ? i[0] : void 0;
  },
  _parse_segment: function (t, e, n, i) {
    var o = t.getElementsByTagName(i);
    if (!o.length) return [];
    for (var a = [], r = [], _ = [], s = null, l = 0; l < o.length; l++) {
      var m,
        p = new L.LatLng(o[l].getAttribute('lat'), o[l].getAttribute('lon'));
      if (
        ((p.meta = { time: null, ele: null, hr: null, cad: null, atemp: null }),
        0 < (m = o[l].getElementsByTagName('time')).length
          ? (p.meta.time = new Date(Date.parse(m[0].textContent)))
          : (p.meta.time = new Date('1970-01-01T00:00:00')),
        0 < (m = o[l].getElementsByTagName('ele')).length &&
          (p.meta.ele = parseFloat(m[0].textContent)),
        0 < (m = o[l].getElementsByTagName('name')).length)
      )
        for (
          var h = m[0].textContent,
            g = e.marker_options.pointMatchers || [],
            c = 0;
          c < g.length;
          c++
        )
          if (g[c].regex.test(h)) {
            r.push({ label: h, coords: p, icon: g[c].icon, element: o[l] });
            break;
          }
      0 < (m = o[l].getElementsByTagNameNS('*', 'hr')).length &&
        ((p.meta.hr = parseInt(m[0].textContent)),
        this._info.hr._points.push([this._info.length, p.meta.hr]),
        (this._info.hr._total += p.meta.hr)),
        0 < (m = o[l].getElementsByTagNameNS('*', 'cad')).length &&
          ((p.meta.cad = parseInt(m[0].textContent)),
          this._info.cad._points.push([this._info.length, p.meta.cad]),
          (this._info.cad._total += p.meta.cad)),
        0 < (m = o[l].getElementsByTagNameNS('*', 'atemp')).length &&
          ((p.meta.atemp = parseInt(m[0].textContent)),
          this._info.atemp._points.push([this._info.length, p.meta.atemp]),
          (this._info.atemp._total += p.meta.atemp)),
        p.meta.ele > this._info.elevation.max &&
          (this._info.elevation.max = p.meta.ele),
        p.meta.ele < this._info.elevation.min &&
          (this._info.elevation.min = p.meta.ele),
        this._info.elevation._points.push([this._info.length, p.meta.ele]),
        (this._info.duration.end = p.meta.time),
        null != s
          ? ((this._info.length += this._dist3d(s, p)),
            0 < (m = p.meta.ele - s.meta.ele)
              ? (this._info.elevation.gain += m)
              : (this._info.elevation.loss += Math.abs(m)),
            (m = Math.abs(p.meta.time - s.meta.time)),
            (this._info.duration.total += m),
            m < e.max_point_interval && (this._info.duration.moving += m))
          : null == this._info.duration.start &&
            (this._info.duration.start = p.meta.time),
        (s = p),
        a.push(p);
    }
    n = new L.Polyline(a, this._extract_styling(t, n, e.polyline_options));
    this.fire('addline', { line: n, element: t }),
      _.push(n),
      (e.marker_options.startIcon || e.marker_options.startIconUrl) &&
        ((u = new L.Marker(a[0], {
          clickable: e.marker_options.clickable,
          icon:
            e.marker_options.startIcon ||
            new L.GPXTrackIcon({ iconUrl: e.marker_options.startIconUrl }),
        })),
        this.fire('addpoint', { point: u, point_type: 'start', element: o[0] }),
        _.push(u)),
      (e.marker_options.endIcon || e.marker_options.endIconUrl) &&
        ((u = new L.Marker(a[a.length - 1], {
          clickable: e.marker_options.clickable,
          icon:
            e.marker_options.endIcon ||
            new L.GPXTrackIcon({ iconUrl: e.marker_options.endIconUrl }),
        })),
        this.fire('addpoint', {
          point: u,
          point_type: 'end',
          element: o[o.length - 1],
        }),
        _.push(u));
    for (l = 0; l < r.length; l++) {
      var u = new L.Marker(r[l].coords, {
        clickable: e.marker_options.clickable,
        title: r[l].label,
        icon: r[l].icon,
      });
      this.fire('addpoint', {
        point: u,
        point_type: 'label',
        element: r[l].element,
      }),
        _.push(u);
    }
    return _;
  },
  _extract_styling: function (t, e, n) {
    var i = this._merge_objs(_DEFAULT_POLYLINE_OPTS, e),
      e = t.getElementsByTagNameNS(_GPX_STYLE_NS, 'line');
    return (
      0 < e.length &&
        (0 < (t = e[0].getElementsByTagName('color')).length &&
          (i.color = '#' + t[0].textContent),
        0 < (t = e[0].getElementsByTagName('opacity')).length &&
          (i.opacity = t[0].textContent),
        0 < (t = e[0].getElementsByTagName('weight')).length &&
          (i.weight = t[0].textContent),
        0 < (t = e[0].getElementsByTagName('linecap')).length &&
          (i.lineCap = t[0].textContent)),
      this._merge_objs(i, n)
    );
  },
  _dist2d: function (t, e) {
    var n = this._deg2rad(e.lat - t.lat),
      i = this._deg2rad(e.lng - t.lng),
      i =
        Math.sin(n / 2) * Math.sin(n / 2) +
        Math.cos(this._deg2rad(t.lat)) *
          Math.cos(this._deg2rad(e.lat)) *
          Math.sin(i / 2) *
          Math.sin(i / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(i), Math.sqrt(1 - i)));
  },
  _dist3d: function (t, e) {
    var n = this._dist2d(t, e),
      t = Math.abs(e.meta.ele - t.meta.ele);
    return Math.sqrt(Math.pow(n, 2) + Math.pow(t, 2));
  },
  _deg2rad: function (t) {
    return (t * Math.PI) / 180;
  },
})),
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = L)
    : 'function' == typeof define && define.amd && define(L);
