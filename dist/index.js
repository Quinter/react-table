'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var React = require('react'),
  React__default = _interopDefault(React),
  PropTypes = _interopDefault(require('prop-types'))
function _defineProperty(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  )
}
function ownKeys(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    t &&
      (o = o.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      r.push.apply(r, o)
  }
  return r
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? ownKeys(r, !0).forEach(function(t) {
          _defineProperty(e, t, r[t])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ownKeys(r).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
  }
  return e
}
function _objectWithoutPropertiesLoose(e, t) {
  if (null == e) return {}
  var r,
    o,
    n = {},
    u = Object.keys(e)
  for (o = 0; o < u.length; o++) (r = u[o]), t.indexOf(r) >= 0 || (n[r] = e[r])
  return n
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {}
  var r,
    o,
    n = _objectWithoutPropertiesLoose(e, t)
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e)
    for (o = 0; o < u.length; o++)
      (r = u[o]),
        t.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]))
  }
  return n
}
function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t]
    return r
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e
}
function _iterableToArray(e) {
  if (
    Symbol.iterator in Object(e) ||
    '[object Arguments]' === Object.prototype.toString.call(e)
  )
    return Array.from(e)
}
function _iterableToArrayLimit(e, t) {
  if (
    Symbol.iterator in Object(e) ||
    '[object Arguments]' === Object.prototype.toString.call(e)
  ) {
    var r = [],
      o = !0,
      n = !1,
      u = void 0
    try {
      for (
        var a, s = e[Symbol.iterator]();
        !(o = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t);
        o = !0
      );
    } catch (e) {
      ;(n = !0), (u = e)
    } finally {
      try {
        o || null == s.return || s.return()
      } finally {
        if (n) throw u
      }
    }
    return r
  }
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance')
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function _toPrimitive(e, t) {
  if ('object' != typeof e || null === e) return e
  var r = e[Symbol.toPrimitive]
  if (void 0 !== r) {
    var o = r.call(e, t || 'default')
    if ('object' != typeof o) return o
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return ('string' === t ? String : Number)(e)
}
function _toPropertyKey(e) {
  var t = _toPrimitive(e, 'string')
  return 'symbol' == typeof t ? t : String(t)
}
var defaultColumn = {
    Cell: function(e) {
      var t = e.cell.value
      return String(void 0 === t ? '' : t)
    },
    show: !0,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER,
  },
  safeUseLayoutEffect =
    'undefined' != typeof window && 'production' === process.env.NODE_ENV
      ? React__default.useLayoutEffect
      : React__default.useEffect
function findMaxDepth(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
  return e.reduce(function(e, r) {
    return r.columns ? Math.max(e, findMaxDepth(r.columns, t + 1)) : t
  }, 0)
}
function decorateColumn(e, t, r, o, n) {
  var u = (e = _objectSpread2({}, defaultColumn, {}, t, {}, e)),
    a = u.id,
    s = u.accessor,
    i = u.Header
  if ('string' == typeof s) {
    a = a || s
    var c = s.split('.')
    s = function(e) {
      return getBy(e, c)
    }
  }
  if ((!a && 'string' == typeof i && i && (a = i), !a && e.columns))
    throw (console.error(e),
    new Error('A column ID (or unique "Header" value) is required!'))
  if (!a)
    throw (console.error(e),
    new Error('A column ID (or string accessor) is required!'))
  return (e = _objectSpread2(
    {
      Header: function() {
        return React__default.createElement(React__default.Fragment, null, ' ')
      },
    },
    e,
    { id: a, accessor: s, parent: r, depth: o, index: n }
  ))
}
function decorateColumnTree(e, t, r) {
  var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
  return e.map(function(e, n) {
    return (
      (e = decorateColumn(e, t, r, o, n)).columns &&
        (e.columns = decorateColumnTree(e.columns, t, e, o + 1)),
      e
    )
  })
}
function makeHeaderGroups(e, t) {
  var r = []
  return (
    (function e(o, n) {
      var u = { headers: [] },
        a = [],
        s = o.some(function(e) {
          return e.parent
        })
      o.forEach(function(e) {
        var r = !a.length,
          o = [].concat(a).reverse()[0]
        if (e.parent) {
          var n = a.filter(function(t) {
            return t.originalID === e.parent.id
          })
          ;(r || o.originalID !== e.parent.id) &&
            a.push(
              _objectSpread2({}, e.parent, {
                originalID: e.parent.id,
                id: [e.parent.id, n.length].join('_'),
              })
            )
        } else if (s) {
          var i = [e.id, 'placeholder'].join('_'),
            c = a.filter(function(e) {
              return e.originalID === i
            }),
            l = decorateColumn(
              {
                originalID: i,
                id: [e.id, 'placeholder', c.length].join('_'),
                placeholderOf: e,
              },
              t
            )
          ;(r || o.originalID !== l.originalID) && a.push(l)
        }
        ;(e.parent || s) &&
          (((o = [].concat(a).reverse()[0]).headers = o.headers || []),
          o.headers.includes(e) || o.headers.push(e)),
          (e.totalHeaderCount = e.headers
            ? e.headers.reduce(function(e, t) {
                return e + t.totalHeaderCount
              }, 0)
            : 1),
          u.headers.push(e)
      }),
        r.push(u),
        a.length && e(a, n + 1)
    })(e, 0),
    r.reverse()
  )
}
function determineHeaderVisibility(e) {
  var t = e.headers,
    r = 0
  t.forEach(function(t) {
    return (r += (function t(r, o) {
      r.isVisible = !!o && ('function' == typeof r.show ? r.show(e) : !!r.show)
      var n = 0
      return (
        r.headers && r.headers.length
          ? r.headers.forEach(function(e) {
              return (n += t(e, r.isVisible))
            })
          : (n = r.isVisible ? 1 : 0),
        (r.totalVisibleHeaderCount = n),
        n
      )
    })(t, !0))
  })
}
function getBy(e, t, r) {
  if (!t) return e
  var o,
    n = makePathArray(t)
  try {
    o = n.reduce(function(e, t) {
      return e[t]
    }, e)
  } catch (e) {}
  return void 0 !== o ? o : r
}
function defaultOrderByFn(e, t, r) {
  return _toConsumableArray(e).sort(function(e, o) {
    for (var n = 0; n < t.length; n += 1) {
      var u = t[n],
        a = !1 === r[n] || 'desc' === r[n],
        s = u(e, o)
      if (0 !== s) return a ? -s : s
    }
    return r[0] ? e.index - o.index : o.index - e.index
  })
}
function getFirstDefined() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r]
  for (var o = 0; o < t.length; o += 1) if (void 0 !== t[o]) return t[o]
}
function defaultGroupByFn(e, t) {
  return e.reduce(function(e, r, o) {
    var n = ''.concat(r.values[t])
    return (e[n] = Array.isArray(e[n]) ? e[n] : []), e[n].push(r), e
  }, {})
}
function getElementDimensions(e) {
  var t = e.getBoundingClientRect(),
    r = window.getComputedStyle(e),
    o = { left: parseInt(r.marginLeft), right: parseInt(r.marginRight) },
    n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) }
  return {
    left: Math.ceil(t.left),
    width: Math.ceil(t.width),
    outerWidth: Math.ceil(t.width + o.left + o.right + n.left + n.right),
    marginLeft: o.left,
    marginRight: o.right,
    paddingLeft: n.left,
    paddingRight: n.right,
    scrollWidth: e.scrollWidth,
  }
}
function flexRender(e, t) {
  return isReactComponent(e) ? React__default.createElement(e, t) : e
}
function isClassComponent(e) {
  return (
    'function' == typeof e &&
    !(
      !(t = Object.getPrototypeOf(e)).prototype || !t.prototype.isReactComponent
    )
  )
  var t
}
function isFunctionComponent(e) {
  return 'function' == typeof e
}
function isReactComponent(e) {
  return isClassComponent(e) || isFunctionComponent(e)
}
var mergeProps = function() {
    for (var e = {}, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o]
    return (
      r.forEach(function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = t.style,
          o = void 0 === r ? {} : r,
          n = t.className,
          u = _objectWithoutProperties(t, ['style', 'className'])
        e = _objectSpread2({}, e, {}, u, {
          style: _objectSpread2({}, e.style || {}, {}, o),
          className: [e.className, n].filter(Boolean).join(' '),
        })
      }),
      e
    )
  },
  applyHooks = function(e, t) {
    for (
      var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), n = 2;
      n < r;
      n++
    )
      o[n - 2] = arguments[n]
    return e.reduce(function(e, t) {
      var r = t.apply(void 0, [e].concat(o))
      if (void 0 === r)
        throw new Error(
          'React Table: A hook just returned undefined! This is not allowed.'
        )
      return r
    }, t)
  },
  applyPropHooks = function(e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
      o < t;
      o++
    )
      r[o - 1] = arguments[o]
    return e.reduce(function(e, t) {
      return mergeProps(e, t.apply(void 0, r))
    }, {})
  },
  warnUnknownProps = function(e) {
    if (Object.keys(e).length)
      throw new Error(
        'Unknown options passed to useReactTable:\n\n'.concat(
          JSON.stringify(e, null, 2)
        )
      )
  }
function sum(e) {
  return e.reduce(function(e, t) {
    return e + t
  }, 0)
}
function isFunction(e) {
  if ('function' == typeof e) return e
}
function flattenBy(e, t) {
  var r = []
  return (
    (function e(o) {
      o.forEach(function(o) {
        o[t] ? e(o[t]) : r.push(o)
      })
    })(e),
    r
  )
}
function ensurePluginOrder(e, t, r, o) {
  var n = e.findIndex(function(e) {
    return e.pluginName === r
  })
  if (-1 === n)
    throw new Error(
      'The plugin '
        .concat(
          r,
          " was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  "
        )
        .concat(r, ".pluginName = '")
        .concat(r, "'\n")
    )
  t.forEach(function(t) {
    var o = e.findIndex(function(e) {
      return e.pluginName === t
    })
    if (o > -1 && o > n)
      throw new Error(
        'React Table: The '
          .concat(r, ' plugin hook must be placed after the ')
          .concat(t, ' plugin hook!')
      )
  }),
    o.forEach(function(t) {
      var o = e.findIndex(function(e) {
        return e.pluginName === t
      })
      if (o > -1 && o < n)
        throw new Error(
          'React Table: The '
            .concat(r, ' plugin hook must be placed before the ')
            .concat(t, ' plugin hook!')
        )
    })
}
function expandRows(e, t) {
  var r = t.manualExpandedKey,
    o = t.expanded,
    n = t.expandSubRows,
    u = void 0 === n || n,
    a = []
  return (
    e.forEach(function e(t) {
      var n = t.path.join('.')
      ;(t.isExpanded = (t.original && t.original[r]) || o.includes(n)),
        (t.canExpand = t.subRows && !!t.subRows.length),
        a.push(t),
        u &&
          t.subRows &&
          t.subRows.length &&
          t.isExpanded &&
          t.subRows.forEach(e)
    }),
    a
  )
}
function makePathArray(e) {
  return flattenDeep(e)
    .map(function(e) {
      return String(e).replace('.', '_')
    })
    .join('.')
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
}
function flattenDeep(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r += 1) flattenDeep(e[r], t)
  else t.push(e)
  return t
}
var utils = Object.freeze({
    defaultColumn: defaultColumn,
    safeUseLayoutEffect: safeUseLayoutEffect,
    findMaxDepth: findMaxDepth,
    decorateColumn: decorateColumn,
    decorateColumnTree: decorateColumnTree,
    makeHeaderGroups: makeHeaderGroups,
    determineHeaderVisibility: determineHeaderVisibility,
    getBy: getBy,
    defaultOrderByFn: defaultOrderByFn,
    getFirstDefined: getFirstDefined,
    defaultGroupByFn: defaultGroupByFn,
    getElementDimensions: getElementDimensions,
    flexRender: flexRender,
    mergeProps: mergeProps,
    applyHooks: applyHooks,
    applyPropHooks: applyPropHooks,
    warnUnknownProps: warnUnknownProps,
    sum: sum,
    isFunction: isFunction,
    flattenBy: flattenBy,
    ensurePluginOrder: ensurePluginOrder,
    expandRows: expandRows,
  }),
  propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultColumn: PropTypes.object,
    getSubRows: PropTypes.func,
    getRowID: PropTypes.func,
    debug: PropTypes.bool,
  },
  renderErr =
    'You must specify a valid render component. This could be "column.Cell", "column.Header", "column.Filter", "column.Aggregated" or any other custom renderer component.',
  defaultState = {},
  defaultInitialState = {},
  defaultColumnInstance = {},
  defaultReducer = function(e, t) {
    return t
  },
  defaultGetSubRows = function(e, t) {
    return e.subRows || []
  },
  defaultGetRowID = function(e, t) {
    return t
  },
  useTable = function(e) {
    PropTypes.checkPropTypes(propTypes, e, 'property', 'useTable')
    var t = e.data,
      r = e.columns,
      o = e.initialState,
      n = void 0 === o ? defaultInitialState : o,
      u = e.state,
      a = e.defaultColumn,
      s = void 0 === a ? defaultColumnInstance : a,
      i = e.getSubRows,
      c = void 0 === i ? defaultGetSubRows : i,
      l = e.getRowID,
      p = void 0 === l ? defaultGetRowID : l,
      d = e.reducer,
      f = void 0 === d ? defaultReducer : d,
      g = e.debug
    g = 'production' !== process.env.NODE_ENV && g
    for (
      var y = React__default.useState(_objectSpread2({}, defaultState, {}, n)),
        h = _slicedToArray(y, 2),
        m = h[0],
        v = h[1],
        b = React__default.useMemo(
          function() {
            if (u) {
              var e = _objectSpread2({}, m)
              return (
                Object.keys(u).forEach(function(t) {
                  e[t] = u[t]
                }),
                e
              )
            }
            return m
          },
          [m, u]
        ),
        w = React__default.useCallback(
          function(e, t) {
            return v(function(r) {
              var o = 'function' == typeof e ? e(r) : e
              return f(r, o, t)
            })
          },
          [f]
        ),
        R = React__default.useRef({}),
        S = arguments.length,
        P = new Array(S > 1 ? S - 1 : 0),
        _ = 1;
      _ < S;
      _++
    )
      P[_ - 1] = arguments[_]
    Object.assign(
      R.current,
      _objectSpread2({}, e, {
        data: t,
        state: b,
        setState: w,
        plugins: P,
        hooks: {
          columnsBeforeHeaderGroups: [],
          columnsBeforeHeaderGroupsDeps: [],
          useBeforeDimensions: [],
          useMain: [],
          useRows: [],
          prepareRow: [],
          getTableProps: [],
          getTableBodyProps: [],
          getRowProps: [],
          getHeaderGroupProps: [],
          getHeaderProps: [],
          getCellProps: [],
        },
      })
    ),
      'development' === process.env.NODE_ENV && g && console.time('plugins'),
      P.filter(Boolean).forEach(function(e) {
        e(R.current.hooks)
      }),
      'development' === process.env.NODE_ENV && g && console.timeEnd('plugins')
    var T = React__default.useMemo(
        function() {
          return decorateColumnTree(r, s)
        },
        [s, r]
      ),
      E = React__default.useMemo(function() {
        'development' === process.env.NODE_ENV &&
          g &&
          console.time('hooks.columnsBeforeHeaderGroups')
        var e = applyHooks(
          R.current.hooks.columnsBeforeHeaderGroups,
          flattenBy(T, 'columns'),
          R.current
        )
        return (
          'development' === process.env.NODE_ENV &&
            g &&
            console.timeEnd('hooks.columnsBeforeHeaderGroups'),
          e
        )
      }, [T, g].concat(
        _toConsumableArray(
          applyHooks(
            R.current.hooks.columnsBeforeHeaderGroupsDeps,
            [],
            R.current
          )
        )
      )),
      x = React__default.useMemo(
        function() {
          return makeHeaderGroups(E, s)
        },
        [s, E]
      ),
      C = React__default.useMemo(
        function() {
          return x[0].headers
        },
        [x]
      )
    Object.assign(R.current, {
      columns: T,
      flatColumns: E,
      headerGroups: x,
      headers: C,
    })
    var B = React__default.useMemo(
        function() {
          'development' === process.env.NODE_ENV &&
            g &&
            console.time('getAccessedRows')
          var e = [],
            r = t.map(function(r, o) {
              return (function r(o, n) {
                var u =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : [],
                  s = o,
                  i = p(o, n),
                  l = [].concat(_toConsumableArray(a), [i]),
                  d = { original: s, index: n, path: l, depth: u, cells: [{}] }
                e.push(d)
                var f = c(o, n)
                f &&
                  (d.subRows = f.map(function(e, t) {
                    return r(e, t, u + 1, l)
                  }))
                var g = function() {
                  throw new Error(
                    'React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.'
                  )
                }
                return (
                  (d.cells.map = g),
                  (d.cells.filter = g),
                  (d.cells.forEach = g),
                  (d.cells[0].getCellProps = g),
                  (d.values = {}),
                  E.forEach(function(e) {
                    d.values[e.id] = e.accessor
                      ? e.accessor(o, n, { subRows: f, depth: u, data: t })
                      : void 0
                  }),
                  d
                )
              })(r, o)
            })
          return (
            'development' === process.env.NODE_ENV &&
              g &&
              console.timeEnd('getAccessedRows'),
            [r, e]
          )
        },
        [g, t, p, c, E]
      ),
      k = _slicedToArray(B, 2),
      j = k[0],
      A = k[1]
    return (
      (R.current.rows = j),
      (R.current.flatRows = A),
      determineHeaderVisibility(R.current),
      (R.current.flatHeaders = x.reduce(function(e, t) {
        return [].concat(_toConsumableArray(e), _toConsumableArray(t.headers))
      }, [])),
      'development' === process.env.NODE_ENV &&
        g &&
        console.time('hooks.useBeforeDimensions'),
      (R.current = applyHooks(R.current.hooks.useBeforeDimensions, R.current)),
      'development' === process.env.NODE_ENV &&
        g &&
        console.timeEnd('hooks.useBeforeDimensions'),
      calculateDimensions(R.current),
      'development' === process.env.NODE_ENV &&
        g &&
        console.time('hooks.useMain'),
      (R.current = applyHooks(R.current.hooks.useMain, R.current)),
      'development' === process.env.NODE_ENV &&
        g &&
        console.timeEnd('hooks.useMain'),
      R.current.flatHeaders.forEach(function(e) {
        ;(e.render = function(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = 'string' == typeof t ? e[t] : t
          if (void 0 === o) throw new Error(renderErr)
          return flexRender(o, _objectSpread2({}, R.current, { column: e }, r))
        }),
          (e.getHeaderProps = function(t) {
            return mergeProps(
              {
                key: ['header', e.id].join('_'),
                colSpan: e.totalVisibleHeaderCount,
              },
              applyPropHooks(R.current.hooks.getHeaderProps, e, R.current),
              t
            )
          })
      }),
      R.current.headerGroups.forEach(function(e, t) {
        if (
          ((e.headers = e.headers.filter(function(e) {
            return e.headers
              ? (function e(t) {
                  return t.filter(function(t) {
                    return t.headers ? e(t.headers) : t.isVisible
                  }).length
                })(e.headers)
              : e.isVisible
          })),
          e.headers.length)
        )
          return (
            (e.getHeaderGroupProps = function() {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              return mergeProps(
                { key: ['header'.concat(t)].join('_') },
                applyPropHooks(
                  R.current.hooks.getHeaderGroupProps,
                  e,
                  R.current
                ),
                r
              )
            }),
            !0
          )
      }),
      'development' === process.env.NODE_ENV &&
        g &&
        console.time('hooks.useRows'),
      (R.current.rows = applyHooks(
        R.current.hooks.useRows,
        R.current.rows,
        R.current
      )),
      'development' === process.env.NODE_ENV &&
        g &&
        console.timeEnd('hooks.useRows'),
      (R.current.prepareRow = React__default.useCallback(function(e) {
        ;(e.getRowProps = function(t) {
          return mergeProps(
            { key: ['row'].concat(_toConsumableArray(e.path)).join('_') },
            applyPropHooks(R.current.hooks.getRowProps, e, R.current),
            t
          )
        }),
          (e.cells = R.current.flatColumns
            .filter(function(e) {
              return e.isVisible
            })
            .map(function(t) {
              var r = {
                column: t,
                row: e,
                value: e.values[t.id],
                getCellProps: function(o) {
                  var n = []
                    .concat(_toConsumableArray(e.path), [t.id])
                    .join('_')
                  return mergeProps(
                    { key: ['cell', n].join('_') },
                    applyPropHooks(R.current.hooks.getCellProps, r, R.current),
                    o
                  )
                },
                render: function(o) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    u = 'string' == typeof o ? t[o] : o
                  if (void 0 === u) throw new Error(renderErr)
                  return flexRender(
                    u,
                    _objectSpread2(
                      {},
                      R.current,
                      { column: t, row: e, cell: r },
                      n
                    )
                  )
                },
              }
              return r
            })),
          applyHooks(R.current.hooks.prepareRow, e, R.current)
      }, [])),
      (R.current.getTableProps = function(e) {
        return mergeProps(
          applyPropHooks(R.current.hooks.getTableProps, R.current),
          e
        )
      }),
      (R.current.getTableBodyProps = function(e) {
        return mergeProps(
          applyPropHooks(R.current.hooks.getTableBodyProps, R.current),
          e
        )
      }),
      R.current
    )
  }
function calculateDimensions(e) {
  var t = e.headers
  e.totalColumnsWidth = calculateHeaderWidths(t)
}
function calculateHeaderWidths(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    r = 0
  return (
    e.forEach(function(e) {
      var o = e.headers
      ;(e.totalLeft = t),
        o && o.length
          ? (e.totalWidth = calculateHeaderWidths(o, t))
          : (e.totalWidth = Math.min(
              Math.max(e.minWidth, e.width),
              e.maxWidth
            )),
        e.isVisible && ((t += e.totalWidth), (r += e.totalWidth))
    }),
    r
  )
}
var actions = {},
  addActions = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r]
    t.forEach(function(e) {
      actions[e] = 'React Table Action: '.concat(e)
    })
  }
;(defaultState.expanded = []), addActions('toggleExpanded', 'useExpanded')
var propTypes$1 = {
    manualExpandedKey: PropTypes.string,
    paginateExpandedRows: PropTypes.bool,
  },
  useExpanded = function(e) {
    ;(e.getExpandedToggleProps = []), e.useMain.push(useMain)
  }
function useMain(e) {
  PropTypes.checkPropTypes(propTypes$1, e, 'property', 'useExpanded')
  var t = e.debug,
    r = e.rows,
    o = e.manualExpandedKey,
    n = void 0 === o ? 'expanded' : o,
    u = e.paginateExpandedRows,
    a = void 0 === u || u,
    s = e.expandSubRows,
    i = void 0 === s || s,
    c = e.hooks,
    l = e.state.expanded,
    p = e.setState,
    d = function(e, t) {
      var r = e.join('.')
      return p(function(e) {
        var o = e.expanded.includes(r),
          n = void 0 !== t ? t : !o,
          u = new Set(e.expanded)
        if (!o && n) u.add(r)
        else {
          if (!o || n) return e
          u.delete(r)
        }
        return _objectSpread2({}, e, {
          expanded: _toConsumableArray(u.values()),
        })
      }, actions.toggleExpanded)
    }
  c.prepareRow.push(function(e, t) {
    e.toggleExpanded = function(t) {
      return d(e.path, t)
    }
    var r = applyPropHooks(t.hooks.getExpandedToggleProps, e, t)
    return (
      (e.getExpandedToggleProps = function(t) {
        return mergeProps(
          {
            onClick: function(t) {
              t.persist(), e.toggleExpanded()
            },
            style: { cursor: 'pointer' },
            title: 'Toggle Expanded',
          },
          r,
          t
        )
      }),
      e
    )
  })
  var f = React.useMemo(
      function() {
        return (
          'development' === process.env.NODE_ENV &&
            t &&
            console.info('getExpandedRows'),
          a
            ? expandRows(r, {
                manualExpandedKey: n,
                expanded: l,
                expandSubRows: i,
              })
            : r
        )
      },
      [t, a, r, n, l, i]
    ),
    g = findExpandedDepth(l)
  return _objectSpread2({}, e, {
    toggleExpandedByPath: d,
    expandedDepth: g,
    rows: f,
  })
}
function findExpandedDepth(e) {
  var t = 0
  return (
    e.forEach(function(e) {
      var r = e.split('.')
      t = Math.max(t, r.length)
    }),
    t
  )
}
useExpanded.pluginName = 'useExpanded'
var text = function(e, t, r) {
  return (e = e.filter(function(e) {
    var o = e.values[t]
    return String(o)
      .toLowerCase()
      .includes(String(r).toLowerCase())
  }))
}
text.autoRemove = function(e) {
  return !e
}
var exactText = function(e, t, r) {
  return e.filter(function(e) {
    var o = e.values[t]
    return void 0 === o || String(o).toLowerCase() === String(r).toLowerCase()
  })
}
exactText.autoRemove = function(e) {
  return !e
}
var exactTextCase = function(e, t, r) {
  return e.filter(function(e) {
    var o = e.values[t]
    return void 0 === o || String(o) === String(r)
  })
}
exactTextCase.autoRemove = function(e) {
  return !e
}
var includes = function(e, t, r) {
  return e.filter(function(e) {
    var o = e.values[t]
    return r.includes(o)
  })
}
includes.autoRemove = function(e) {
  return !e || !e.length
}
var includesAll = function(e, t, r) {
  return e.filter(function(e) {
    var o = e.values[t]
    return (
      o &&
      o.length &&
      r.every(function(e) {
        return o.includes(e)
      })
    )
  })
}
includesAll.autoRemove = function(e) {
  return !e || !e.length
}
var exact = function(e, t, r) {
  return e.filter(function(e) {
    return e.values[t] === r
  })
}
exact.autoRemove = function(e) {
  return void 0 === e
}
var equals = function(e, t, r) {
  return e.filter(function(e) {
    return e.values[t] == r
  })
}
equals.autoRemove = function(e) {
  return null == e
}
var between = function(e, t, r) {
  var o = _slicedToArray(r || [], 2),
    n = o[0],
    u = o[1]
  if (
    (n = 'number' == typeof n ? n : -1 / 0) >
    (u = 'number' == typeof u ? u : 1 / 0)
  ) {
    var a = n
    ;(n = u), (u = a)
  }
  return e.filter(function(e) {
    var r = e.values[t]
    return r >= n && r <= u
  })
}
between.autoRemove = function(e) {
  return !e || ('number' != typeof e[0] && 'number' != typeof e[1])
}
var filterTypes = Object.freeze({
  text: text,
  exactText: exactText,
  exactTextCase: exactTextCase,
  includes: includes,
  includesAll: includesAll,
  exact: exact,
  equals: equals,
  between: between,
})
;(defaultState.filters = {}), addActions('setFilter', 'setAllFilters')
var propTypes$2 = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({ disableFilters: PropTypes.bool, Filter: PropTypes.any })
    ),
    manualFilters: PropTypes.bool,
  },
  useFilters = function(e) {
    e.useMain.push(useMain$1)
  }
function useMain$1(e) {
  PropTypes.checkPropTypes(propTypes$2, e, 'property', 'useFilters')
  var t = e.debug,
    r = e.rows,
    o = e.flatRows,
    n = e.flatColumns,
    u = e.filterTypes,
    a = e.manualFilters,
    s = e.disableFilters,
    i = e.state.filters,
    c = e.setState,
    l = r,
    p = o,
    d = function(e, t) {
      var r = n.find(function(t) {
        return t.id === e
      })
      if (!r)
        throw new Error(
          'React-Table: Could not find a column with id: '.concat(e)
        )
      var o = getFilterMethod(r.filter, u || {}, filterTypes)
      return c(function(r) {
        var n = 'function' == typeof t ? t(r.filters[e]) : t
        if (shouldAutoRemove(o.autoRemove, n)) {
          var u = r.filters
          u[e]
          return _objectSpread2({}, r, {
            filters: _objectWithoutProperties(u, [e].map(_toPropertyKey)),
          })
        }
        return _objectSpread2({}, r, {
          filters: _objectSpread2({}, r.filters, _defineProperty({}, e, n)),
        })
      }, actions.setFilter)
    }
  n.forEach(function(e) {
    var t = e.id,
      r = e.accessor,
      o = e.disableFilters
    ;(e.canFilter =
      !!r && getFirstDefined(!0 !== o && void 0, !0 !== s && void 0, !0)),
      (e.setFilter = function(t) {
        return d(e.id, t)
      }),
      (e.filterValue = i[t])
  })
  var f = React__default.useMemo(
      function() {
        if (a || !Object.keys(i).length)
          return { filteredRows: r, filteredFlatRows: o }
        var e = []
        'development' === process.env.NODE_ENV &&
          t &&
          console.info('getFilteredRows')
        return {
          filteredRows: (function t(r) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            return Object.entries(i)
              .reduce(function(e, t) {
                var r = _slicedToArray(t, 2),
                  a = r[0],
                  s = r[1],
                  i = n.find(function(e) {
                    return e.id === a
                  })
                if (!i) return e
                0 === o && (i.preFilteredRows = e)
                var c = getFilterMethod(i.filter, u || {}, filterTypes)
                return c
                  ? ((i.filteredRows = c(e, a, s, i)), i.filteredRows)
                  : (console.warn(
                      "Could not find a valid 'column.filter' for column with the ID: ".concat(
                        i.id,
                        '.'
                      )
                    ),
                    e)
              }, r)
              .map(function(r) {
                return (
                  e.push(r),
                  r.subRows
                    ? _objectSpread2({}, r, {
                        subRows:
                          r.subRows && r.subRows.length > 0
                            ? t(r.subRows, o + 1)
                            : r.subRows,
                      })
                    : r
                )
              })
          })(r),
          filteredFlatRows: e,
        }
      },
      [a, i, t, r, o, n, u]
    ),
    g = f.filteredRows,
    y = f.filteredFlatRows
  return (
    React__default.useMemo(
      function() {
        n.filter(function(e) {
          return !Object.keys(i).includes(e.id)
        }).forEach(function(e) {
          ;(e.preFilteredRows = g), (e.filteredRows = g)
        })
      },
      [g, i, n]
    ),
    _objectSpread2({}, e, {
      setFilter: d,
      setAllFilters: function(e) {
        return c(function(t) {
          var r = 'function' == typeof e ? e(t) : e
          return (
            Object.keys(r).forEach(function(e) {
              var t = r[e]
              shouldAutoRemove(
                getFilterMethod(
                  n.find(function(t) {
                    return t.id === e
                  }).filter,
                  u || {},
                  filterTypes
                ).autoRemove,
                t
              ) && delete r[e]
            }),
            _objectSpread2({}, t, { filters: r })
          )
        }, actions.setAllFilters)
      },
      preFilteredRows: l,
      preFilteredFlatRows: p,
      rows: g,
      flatRows: y,
    })
  )
}
function shouldAutoRemove(e, t) {
  return e ? e(t) : void 0 === t
}
function getFilterMethod(e, t, r) {
  return isFunction(e) || t[e] || r[e] || r.text
}
function sum$1(e, t) {
  return e.reduce(function(e, t) {
    return e + t
  }, 0)
}
function average(e, t) {
  return Math.round((sum$1(e, t) / e.length) * 100) / 100
}
function median(e) {
  var t = e[0] || '',
    r = e[0] || ''
  return (
    e.forEach(function(e) {
      ;(t = Math.min(t, e)), (r = Math.max(r, e))
    }),
    (t + r) / 2
  )
}
function uniqueCount(e) {
  return new Set(e).size
}
function count(e) {
  return e.length
}
useFilters.pluginName = 'useFilters'
var aggregations = Object.freeze({
  sum: sum$1,
  average: average,
  median: median,
  uniqueCount: uniqueCount,
  count: count,
})
;(defaultState.groupBy = []), addActions('toggleGroupBy')
var propTypes$3 = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        aggregate: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.string,
          PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.string])
          ),
        ]),
        disableGrouping: PropTypes.bool,
        Aggregated: PropTypes.any,
      })
    ),
    groupByFn: PropTypes.func,
    manualGrouping: PropTypes.bool,
    disableGrouping: PropTypes.bool,
    aggregations: PropTypes.object,
  },
  useGroupBy = function(e) {
    ;(e.getGroupByToggleProps = []),
      e.columnsBeforeHeaderGroups.push(columnsBeforeHeaderGroups),
      e.columnsBeforeHeaderGroupsDeps.push(function(e, t) {
        return e.push(t.state.groupBy), e
      }),
      e.useMain.push(useMain$2)
  }
function columnsBeforeHeaderGroups(e, t) {
  var r = t.state.groupBy,
    o = r.map(function(t) {
      return e.find(function(e) {
        return e.id === t
      })
    }),
    n = e.filter(function(e) {
      return !r.includes(e.id)
    }),
    u =
      e.findIndex(function(e) {
        return e.groupByBoundary
      }) + 1
  return [].concat(
    _toConsumableArray(n.slice(0, u)),
    _toConsumableArray(o),
    _toConsumableArray(n.slice(u))
  )
}
function useMain$2(e) {
  PropTypes.checkPropTypes(propTypes$3, e, 'property', 'useGroupBy')
  var t = e.debug,
    r = e.rows,
    o = e.flatColumns,
    n = e.flatHeaders,
    u = e.groupByFn,
    a = void 0 === u ? defaultGroupByFn : u,
    s = e.manualGroupBy,
    i = e.disableGrouping,
    c = e.aggregations,
    l = void 0 === c ? {} : c,
    p = e.hooks,
    d = e.plugins,
    f = e.state.groupBy,
    g = e.setState
  ensurePluginOrder(d, [], 'useGroupBy', ['useSortBy', 'useExpanded']),
    o.forEach(function(e) {
      var t = e.id,
        r = e.accessor,
        o = e.disableGrouping
      ;(e.isGrouped = f.includes(t)),
        (e.groupedIndex = f.indexOf(t)),
        (e.canGroupBy =
          !!r && getFirstDefined(!0 !== o && void 0, !0 !== i && void 0, !0)),
        e.canGroupBy &&
          (e.toggleGroupBy = function() {
            return y(e.id)
          }),
        (e.Aggregated = e.Aggregated || e.Cell)
    })
  var y = function(e, t) {
    return g(function(r) {
      return _objectSpread2(
        {},
        r,
        (void 0 !== t
        ? t
        : !f.includes(e))
          ? { groupBy: [].concat(_toConsumableArray(f), [e]) }
          : {
              groupBy: f.filter(function(t) {
                return t !== e
              }),
            }
      )
    }, actions.toggleGroupBy)
  }
  n.forEach(
    (function(e) {
      return function(t) {
        var r = t.canGroupBy,
          o = applyPropHooks(e.hooks.getGroupByToggleProps, t, e)
        t.getGroupByToggleProps = function(e) {
          return mergeProps(
            {
              onClick: r
                ? function(e) {
                    e.persist(), t.toggleGroupBy()
                  }
                : void 0,
              style: { cursor: r ? 'pointer' : void 0 },
              title: 'Toggle GroupBy',
            },
            o,
            e
          )
        }
      }
    })(e)
  ),
    p.prepareRow.push(function(e) {
      return (
        e.cells.forEach(function(t) {
          ;(t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID),
            (t.isRepeatedValue = !t.isGrouped && t.column.isGrouped),
            (t.isAggregated = !t.isGrouped && !t.isRepeatedValue && e.canExpand)
        }),
        e
      )
    })
  var h = React.useMemo(
    function() {
      if (s || !f.length) return r
      'development' === process.env.NODE_ENV &&
        t &&
        console.info('getGroupedRows')
      var e = function(e, t) {
        var r = {}
        return (
          o.forEach(function(o) {
            if (f.includes(o.id)) r[o.id] = e[0] ? e[0].values[o.id] : null
            else {
              var n = e.map(function(e) {
                  return e.values[o.id]
                }),
                u = o.aggregate
              if (Array.isArray(u)) {
                if (2 !== u.length)
                  throw (console.info({ column: o }),
                  new Error(
                    "React Table: Complex aggregators must have 2 values, eg. aggregate: ['sum', 'count']. More info above..."
                  ))
                u = t ? u[1] : u[0]
              }
              var a = 'function' == typeof u ? u : l[u] || aggregations[u]
              if (a) r[o.id] = a(n, e)
              else {
                if (u)
                  throw (console.info({ column: o }),
                  new Error(
                    'React Table: Invalid aggregate option for column listed above'
                  ))
                r[o.id] = null
              }
            }
          }),
          r
        )
      }
      return (function t(r) {
        var o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
        if (o >= f.length) return r
        var u = f[o],
          s = a(r, u)
        return (s = Object.entries(s).map(function(r, a) {
          var s = _slicedToArray(r, 2),
            i = s[0],
            c = s[1],
            l = [].concat(_toConsumableArray(n), [''.concat(u, ':').concat(i)])
          c = t(c, o + 1, l)
          var p = e(c, o + 1 >= f.length)
          return {
            isAggregated: !0,
            groupByID: u,
            groupByVal: i,
            values: p,
            subRows: c,
            depth: o,
            index: a,
            path: l,
          }
        }))
      })(r)
    },
    [s, f, t, r, o, l, a]
  )
  return _objectSpread2({}, e, { toggleGroupBy: y, rows: h, preGroupedRows: r })
}
useGroupBy.pluginName = 'useGroupBy'
var reSplitAlphaNumeric = /([0-9]+)/gm,
  alphanumeric = function(e, t, r) {
    var o = getRowValueByColumnID(e, r),
      n = getRowValueByColumnID(t, r)
    for (
      o = toString(o),
        n = toString(n),
        o = o.split(reSplitAlphaNumeric).filter(Boolean),
        n = n.split(reSplitAlphaNumeric).filter(Boolean);
      o.length && n.length;

    ) {
      var u = o.shift(),
        a = n.shift(),
        s = parseInt(u, 10),
        i = parseInt(a, 10),
        c = [s, i].sort()
      if (isNaN(c[0])) {
        if (u > a) return 1
        if (a > u) return -1
      } else {
        if (isNaN(c[1])) return isNaN(s) ? -1 : 1
        if (s > i) return 1
        if (i > s) return -1
      }
    }
    return o.length - n.length
  }
function datetime(e, t, r) {
  var o = getRowValueByColumnID(e, r),
    n = getRowValueByColumnID(t, r)
  return compareBasic((o = o.getTime()), (n = n.getTime()))
}
function basic(e, t, r) {
  return compareBasic(getRowValueByColumnID(e, r), getRowValueByColumnID(t, r))
}
function compareBasic(e, t) {
  return e === t ? 0 : e > t ? 1 : -1
}
function getRowValueByColumnID(e, t) {
  return e.values[t]
}
function toString(e) {
  return 'number' == typeof e
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ''
      : String(e)
    : 'string' == typeof e
    ? e
    : ''
}
var sortTypes = Object.freeze({
  alphanumeric: alphanumeric,
  datetime: datetime,
  basic: basic,
})
;(defaultState.sortBy = []),
  (defaultColumn.sortType = 'alphanumeric'),
  (defaultColumn.sortDescFirst = !1),
  addActions('sortByChange')
var propTypes$4 = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        sortType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        sortDescFirst: PropTypes.bool,
        disableSorting: PropTypes.bool,
      })
    ),
    orderByFn: PropTypes.func,
    sortTypes: PropTypes.object,
    manualSorting: PropTypes.bool,
    disableSorting: PropTypes.bool,
    disableMultiSort: PropTypes.bool,
    isMultiSortEvent: PropTypes.func,
    maxMultiSortColCount: PropTypes.number,
    disableSortRemove: PropTypes.bool,
    disableMultiRemove: PropTypes.bool,
  },
  useSortBy = function(e) {
    e.useMain.push(useMain$3), (e.getSortByToggleProps = [])
  }
function useMain$3(e) {
  PropTypes.checkPropTypes(propTypes$4, e, 'property', 'useSortBy')
  var t = e.debug,
    r = e.rows,
    o = e.flatColumns,
    n = e.orderByFn,
    u = void 0 === n ? defaultOrderByFn : n,
    a = e.sortTypes,
    s = e.manualSorting,
    i = e.disableSorting,
    c = e.disableSortRemove,
    l = e.disableMultiRemove,
    p = e.disableMultiSort,
    d = e.isMultiSortEvent,
    f =
      void 0 === d
        ? function(e) {
            return e.shiftKey
          }
        : d,
    g = e.maxMultiSortColCount,
    y = void 0 === g ? Number.MAX_SAFE_INTEGER : g,
    h = e.flatHeaders,
    m = e.state.sortBy,
    v = e.setState
  ensurePluginOrder(e.plugins, ['useFilters'], 'useSortBy', [])
  var b = function(e, t, r) {
    return v(function(n) {
      var u,
        a = n.sortBy,
        s = o.find(function(t) {
          return t.id === e
        }).sortDescFirst,
        i = a.find(function(t) {
          return t.id === e
        }),
        d = a.findIndex(function(t) {
          return t.id === e
        }),
        f = null != t,
        g = []
      return (
        'toggle' !==
          (u =
            !p && r
              ? i
                ? 'toggle'
                : 'add'
              : d !== a.length - 1
              ? 'replace'
              : i
              ? 'toggle'
              : 'replace') ||
          c ||
          f ||
          (r && l) ||
          !((i && i.desc && !s) || (!i.desc && s)) ||
          (u = 'remove'),
        'replace' === u
          ? (g = [{ id: e, desc: f ? t : s }])
          : 'add' === u
          ? (g = [].concat(_toConsumableArray(a), [
              { id: e, desc: f ? t : s },
            ])).splice(0, g.length - y)
          : 'toggle' === u
          ? (g = a.map(function(r) {
              return r.id === e
                ? _objectSpread2({}, r, { desc: f ? t : !i.desc })
                : r
            }))
          : 'remove' === u &&
            (g = a.filter(function(t) {
              return t.id !== e
            })),
        _objectSpread2({}, n, { sortBy: g })
      )
    }, actions.sortByChange)
  }
  h.forEach(
    (function(e) {
      return function(t) {
        var r = t.accessor,
          o = t.disableSorting,
          n = t.id,
          u = !!r && getFirstDefined(!0 !== o && void 0, !0 !== i && void 0, !0)
        ;(t.canSort = u),
          t.canSort &&
            ((t.toggleSortBy = function(e, r) {
              return b(t.id, e, r)
            }),
            (t.clearSorting = function() {
              return v(function(e) {
                return _objectSpread2({}, e, {
                  sortBy: e.sortBy.filter(function(e) {
                    return e.id !== t.id
                  }),
                })
              }, actions.sortByChange)
            }))
        var a = applyPropHooks(e.hooks.getSortByToggleProps, t, e)
        t.getSortByToggleProps = function(e) {
          return mergeProps(
            {
              onClick: u
                ? function(e) {
                    e.persist(), t.toggleSortBy(void 0, !p && f(e))
                  }
                : void 0,
              style: { cursor: u ? 'pointer' : void 0 },
              title: 'Toggle SortBy',
            },
            a,
            e
          )
        }
        var s = m.find(function(e) {
          return e.id === n
        })
        ;(t.isSorted = !!s),
          (t.sortedIndex = m.findIndex(function(e) {
            return e.id === n
          })),
          (t.isSortedDesc = t.isSorted ? s.desc : void 0)
      }
    })(e)
  )
  var w = React__default.useMemo(
    function() {
      if (s || !m.length) return r
      'development' === process.env.NODE_ENV &&
        t &&
        console.time('getSortedRows')
      var e = m.filter(function(e) {
        return o.find(function(t) {
          return t.id === e.id
        })
      })
      return (
        'development' === process.env.NODE_ENV &&
          t &&
          console.timeEnd('getSortedRows'),
        (function t(r) {
          var n = u(
            r,
            e.map(function(e) {
              var t = o.find(function(t) {
                return t.id === e.id
              })
              if (!t)
                throw new Error(
                  'React-Table: Could not find a column with id: '.concat(
                    e.id,
                    ' while sorting'
                  )
                )
              var r = t.sortType,
                n = isFunction(r) || (a || {})[r] || sortTypes[r]
              if (!n)
                throw new Error(
                  "React-Table: Could not find a valid sortType of '"
                    .concat(r, "' for column '")
                    .concat(e.id, "'.")
                )
              return function(t, r) {
                return n(t, r, e.id)
              }
            }),
            e.map(function(e) {
              var t = o.find(function(t) {
                return t.id === e.id
              })
              return t && t.sortInverted ? e.desc : !e.desc
            })
          )
          return (
            n.forEach(function(e) {
              !e.subRows || e.subRows.length <= 1 || (e.subRows = t(e.subRows))
            }),
            n
          )
        })(r)
      )
    },
    [s, m, t, r, o, u, a]
  )
  return _objectSpread2({}, e, { toggleSortBy: b, rows: w, preSortedRows: r })
}
;(useSortBy.pluginName = 'useSortBy'),
  (defaultState.pageSize = 10),
  (defaultState.pageIndex = 0),
  addActions('pageChange', 'pageSizeChange')
var propTypes$5 = {
    manualPagination: PropTypes.bool,
    paginateExpandedRows: PropTypes.bool,
  },
  usePagination = function(e) {
    e.useMain.push(useMain$4)
  }
function useMain$4(e) {
  PropTypes.checkPropTypes(propTypes$5, e, 'property', 'usePagination')
  var t = e.data,
    r = e.rows,
    o = e.manualPagination,
    n = e.disablePageResetOnDataChange,
    u = e.manualExpandedKey,
    a = void 0 === u ? 'expanded' : u,
    s = e.debug,
    i = e.plugins,
    c = e.pageCount,
    l = e.paginateExpandedRows,
    p = void 0 === l || l,
    d = e.expandSubRows,
    f = void 0 === d || d,
    g = e.state,
    y = g.pageSize,
    h = g.pageIndex,
    m = g.filters,
    v = g.groupBy,
    b = g.sortBy,
    w = g.expanded,
    R = e.setState
  ensurePluginOrder(
    i,
    ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'],
    'usePagination',
    []
  )
  var S = o ? null : t,
    P = React__default.useRef(),
    _ = React__default.useRef()
  ;(_.current = n),
    safeUseLayoutEffect(
      function() {
        P.current &&
          !_.current &&
          R(function(e) {
            return _objectSpread2({}, e, { pageIndex: 0 })
          }, actions.pageChange),
          (P.current = !0)
      },
      [R, S, m, v, b]
    )
  var T = o ? c : Math.ceil(r.length / y),
    E = React__default.useMemo(
      function() {
        return T > 0
          ? _toConsumableArray(new Array(T)).map(function(e, t) {
              return t
            })
          : []
      },
      [T]
    ),
    x = React__default.useMemo(
      function() {
        var e
        if (o) e = r
        else {
          'development' === process.env.NODE_ENV && s && console.info('getPage')
          var t = y * h,
            n = t + y
          e = r.slice(t, n)
        }
        return p
          ? e
          : expandRows(e, {
              manualExpandedKey: a,
              expanded: w,
              expandSubRows: f,
            })
      },
      [s, f, w, a, o, h, y, p, r]
    ),
    C = h > 0,
    B = -1 === T || h < T - 1,
    k = React__default.useCallback(
      function(e) {
        return (
          'development' === process.env.NODE_ENV &&
            s &&
            console.info('gotoPage'),
          R(function(t) {
            var r = 'function' == typeof e ? e(t.pageIndex) : e
            return r < 0 || r > T - 1
              ? t
              : _objectSpread2({}, t, { pageIndex: r })
          }, actions.pageChange)
        )
      },
      [s, T, R]
    ),
    j = React__default.useCallback(
      function() {
        return k(function(e) {
          return e - 1
        })
      },
      [k]
    ),
    A = React__default.useCallback(
      function() {
        return k(function(e) {
          return e + 1
        })
      },
      [k]
    ),
    O = React__default.useCallback(
      function(e) {
        R(function(t) {
          var r = t.pageSize * t.pageIndex
          return _objectSpread2({}, t, {
            pageIndex: Math.floor(r / e),
            pageSize: e,
          })
        }, actions.pageSizeChange)
      },
      [R]
    )
  return _objectSpread2({}, e, {
    pageOptions: E,
    pageCount: T,
    page: x,
    canPreviousPage: C,
    canNextPage: B,
    gotoPage: k,
    previousPage: j,
    nextPage: A,
    setPageSize: O,
    pageIndex: h,
    pageSize: y,
  })
}
;(usePagination.pluginName = 'usePagination'),
  (defaultState.selectedRowPaths = []),
  addActions('toggleRowSelected', 'toggleRowSelectedAll')
var propTypes$6 = { manualRowSelectedKey: PropTypes.string },
  useRowSelect = function(e) {
    ;(e.getToggleRowSelectedProps = []),
      (e.getToggleAllRowsSelectedProps = []),
      e.useRows.push(useRows),
      e.useMain.push(useMain$5)
  }
function useRows(e, t) {
  PropTypes.checkPropTypes(propTypes$6, t, 'property', 'useRowSelect')
  var r = t.state.selectedRowPaths
  return (
    (t.selectedFlatRows = React__default.useMemo(
      function() {
        var t = []
        return (
          e.forEach(function(e) {
            if (e.isAggregated) {
              var o = e.subRows.map(function(e) {
                return e.path
              })
              e.isSelected = o.every(function(e) {
                return r.includes(e.join('.'))
              })
            } else e.isSelected = r.includes(e.path.join('.'))
            e.isSelected && t.push(e)
          }),
          t
        )
      },
      [e, r]
    )),
    e
  )
}
function useMain$5(e) {
  PropTypes.checkPropTypes(propTypes$6, e, 'property', 'useRowSelect')
  var t = e.hooks,
    r = e.manualRowSelectedKey,
    o = void 0 === r ? 'isSelected' : r,
    n = e.disableSelectedRowsResetOnDataChange,
    u = e.plugins,
    a = e.flatRows,
    s = e.data,
    i = e.state.selectedRowPaths,
    c = e.setState
  ensurePluginOrder(
    u,
    ['useFilters', 'useGroupBy', 'useSortBy'],
    'useRowSelect',
    []
  )
  var l = a.map(function(e) {
      return e.path.join('.')
    }),
    p = !!l.length && !!i.length
  p &&
    l.some(function(e) {
      return !i.includes(e)
    }) &&
    (p = !1)
  var d = React__default.useRef(),
    f = React__default.useRef()
  ;(f.current = n),
    safeUseLayoutEffect(
      function() {
        d.current &&
          !f.current &&
          c(function(e) {
            return _objectSpread2({}, e, { selectedRowPaths: [] })
          }, actions.pageChange),
          (d.current = !0)
      },
      [c, s]
    )
  var g = function(e) {
      c(function(t) {
        return _objectSpread2({}, t, {
          selectedRowPaths: (void 0 !== e ? e : !p) ? l : [],
        })
      }, actions.toggleRowSelectedAll)
    },
    y = function(e, t) {
      var r = e.join('.'),
        o = [r, '.'].join('')
      return c(function(n) {
        var u = n.selectedRowPaths.includes(r),
          a = void 0 !== t ? t : !u,
          s = new Set(n.selectedRowPaths)
        if (!u && a)
          l.forEach(function(e) {
            ;(e === r || e.startsWith(o)) && s.add(e)
          })
        else {
          if (!u || a) return n
          l.forEach(function(e) {
            ;(e === r || e.startsWith(o)) && s.delete(e)
          })
        }
        return (
          e.length > 1 &&
            (function e(t, r) {
              var o = r.slice(0, r.length - 1),
                n = o.join('.')
              0 ===
              l.filter(function(e) {
                var r = e
                return r !== n && r.startsWith(n) && !t.has(r)
              }).length
                ? t.add(n)
                : t.delete(n),
                o.length > 1 && e(t, o)
            })(s, e),
          _objectSpread2({}, n, {
            selectedRowPaths: _toConsumableArray(s.values()),
          })
        )
      }, actions.toggleRowSelected)
    },
    h = applyPropHooks(e.hooks.getToggleAllRowsSelectedProps, e)
  return (
    t.prepareRow.push(function(e, t) {
      var r = applyPropHooks(t.hooks.getToggleRowSelectedProps, e, t)
      if (e.isAggregated) {
        var n = e.subRows.map(function(e) {
          return e.path
        })
        ;(e.toggleRowSelected = function(t) {
          ;(t = void 0 !== t ? t : !e.isSelected),
            n.forEach(function(e) {
              y(e, t)
            })
        }),
          (e.getToggleRowSelectedProps = function(t) {
            var n = !1
            return (
              (n = !(!e.original || !e.original[o]) || e.isSelected),
              mergeProps(
                {
                  onChange: function(t) {
                    e.toggleRowSelected(t.target.checked)
                  },
                  style: { cursor: 'pointer' },
                  checked: n,
                  title: 'Toggle Row Selected',
                },
                r,
                t
              )
            )
          })
      } else
        (e.toggleRowSelected = function(t) {
          return y(e.path, t)
        }),
          (e.getToggleRowSelectedProps = function(t) {
            var n = !1
            return (
              (n = !(!e.original || !e.original[o]) || e.isSelected),
              mergeProps(
                {
                  onChange: function(t) {
                    e.toggleRowSelected(t.target.checked)
                  },
                  style: { cursor: 'pointer' },
                  checked: n,
                  title: 'Toggle Row Selected',
                },
                r,
                t
              )
            )
          })
      return e
    }),
    _objectSpread2({}, e, {
      toggleRowSelected: y,
      toggleRowSelectedAll: g,
      getToggleAllRowsSelectedProps: function(e) {
        return mergeProps(
          {
            onChange: function(e) {
              g(e.target.checked)
            },
            style: { cursor: 'pointer' },
            checked: p,
            title: 'Toggle All Rows Selected',
          },
          h,
          e
        )
      },
      isAllRowsSelected: p,
    })
  )
}
;(useRowSelect.pluginName = 'useRowSelect'),
  (defaultState.rowState = {}),
  addActions('setRowState', 'setCellState')
var propTypes$7 = { initialRowStateAccessor: PropTypes.func },
  useRowState = function(e) {
    e.useMain.push(useMain$6)
  }
function useMain$6(e) {
  PropTypes.checkPropTypes(propTypes$7, e, 'property', 'useRowState')
  var t = e.hooks,
    r = e.rows,
    o = e.initialRowStateAccessor,
    n = e.state.rowState,
    u = e.setState,
    a = React__default.useCallback(
      function(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : actions.setRowState,
          o = e.join('.')
        return u(function(e) {
          return _objectSpread2({}, e, {
            rowState: _objectSpread2(
              {},
              e.rowState,
              _defineProperty(
                {},
                o,
                'function' == typeof t ? t(e.rowState[o]) : t
              )
            ),
          })
        }, r)
      },
      [u]
    ),
    s = React__default.useCallback(
      function(e, t, r) {
        return a(
          e,
          function(e) {
            return _objectSpread2({}, e, {
              cellState: _objectSpread2(
                {},
                e.cellState,
                _defineProperty(
                  {},
                  t,
                  'function' == typeof r ? r(e.cellState[t]) : r
                )
              ),
            })
          },
          actions.setCellState
        )
      },
      [a]
    ),
    i = React__default.useRef()
  return (
    React__default.useEffect(
      function() {
        i.current &&
          u(function(e) {
            return _objectSpread2({}, e, { rowState: {} })
          }, actions.setRowState),
          (i.current = !0)
      },
      [r, u]
    ),
    t.prepareRow.push(function(e) {
      var t = e.path.join('.')
      return (
        e.original &&
          ((e.state = (void 0 !== n[t] ? n[t] : o && o(e)) || {}),
          (e.setState = function(t) {
            return a(e.path, t)
          }),
          e.cells.forEach(function(t) {
            ;(t.state = e.state.cellState || {}),
              (t.setState = function(r) {
                return s(e.path, t.column.id, r)
              })
          })),
        e
      )
    }),
    _objectSpread2({}, e, { setRowState: a, setCellState: s })
  )
}
;(useRowState.pluginName = 'useRowState'),
  (defaultState.columnOrder = []),
  addActions('setColumnOrder')
var propTypes$8 = { initialRowStateAccessor: PropTypes.func },
  useColumnOrder = function(e) {
    e.columnsBeforeHeaderGroupsDeps.push(function(e, t) {
      return [].concat(_toConsumableArray(e), [t.state.columnOrder])
    }),
      e.columnsBeforeHeaderGroups.push(columnsBeforeHeaderGroups$1),
      e.useMain.push(useMain$7)
  }
function columnsBeforeHeaderGroups$1(e, t) {
  var r = t.state.columnOrder
  if (!r || !r.length) return e
  for (
    var o = _toConsumableArray(r),
      n = _toConsumableArray(e),
      u = [],
      a = function() {
        var e = o.shift(),
          t = n.findIndex(function(t) {
            return t.id === e
          })
        t > -1 && u.push(n.splice(t, 1)[0])
      };
    n.length && o.length;

  )
    a()
  return [].concat(u, _toConsumableArray(n))
}
function useMain$7(e) {
  PropTypes.checkPropTypes(propTypes$8, e, 'property', 'useColumnOrder')
  var t = e.setState,
    r = React__default.useCallback(
      function(e) {
        return t(function(t) {
          return _objectSpread2({}, t, {
            columnOrder: 'function' == typeof e ? e(t.columnOrder) : e,
          })
        }, actions.setColumnOrder)
      },
      [t]
    )
  return _objectSpread2({}, e, { setColumnOrder: r })
}
;(useColumnOrder.pluginName = 'useColumnOrder'),
  (defaultState.columnResizing = { columnWidths: {} }),
  (defaultColumn.canResize = !0)
var propTypes$9 = {},
  useResizeColumns = function(e) {
    ;(e.getResizerProps = []), e.useBeforeDimensions.push(useBeforeDimensions)
  }
useResizeColumns.pluginName = 'useResizeColumns'
var useBeforeDimensions = function(e) {
  PropTypes.checkPropTypes(propTypes$9, e, 'property', 'useResizeColumns')
  var t = e.flatHeaders,
    r = e.disableResizing,
    o = e.hooks.getHeaderProps,
    n = e.state.columnResizing,
    u = e.setState
  o.push(function() {
    return { style: { position: 'relative' } }
  })
  return (
    t.forEach(
      (function(e) {
        return function(t) {
          var o = getFirstDefined(
            !0 !== t.disableResizing && void 0,
            !0 !== r && void 0,
            !0
          )
          if (
            ((t.canResize = o),
            (t.width = n.columnWidths[t.id] || t.width),
            (t.isResizing = n.isResizingColumn === t.id),
            o)
          ) {
            var a = applyPropHooks(e.hooks.getResizerProps, t, e)
            t.getResizerProps = function(e) {
              return mergeProps(
                {
                  onMouseDown: function(e) {
                    return (
                      e.persist() ||
                      (function(e, t) {
                        var r = getLeafHeaders(t),
                          o = r.map(function(e) {
                            return e.totalWidth
                          }),
                          n = e.clientX,
                          a = function(e) {
                            var t = (e.clientX - n) / r.length,
                              a = {}
                            r.forEach(function(e, r) {
                              a[e.id] = Math.max(o[r] + t, 0)
                            }),
                              u(function(e) {
                                return _objectSpread2({}, e, {
                                  columnResizing: _objectSpread2(
                                    {},
                                    e.columnResizing,
                                    {
                                      columnWidths: _objectSpread2(
                                        {},
                                        e.columnResizing.columnWidths,
                                        {},
                                        a
                                      ),
                                    }
                                  ),
                                })
                              })
                          }
                        document.addEventListener('mousemove', a),
                          document.addEventListener('mouseup', function e(t) {
                            document.removeEventListener('mousemove', a),
                              document.removeEventListener('mouseup', e),
                              u(function(e) {
                                return _objectSpread2({}, e, {
                                  columnResizing: _objectSpread2(
                                    {},
                                    e.columnResizing,
                                    { startX: null, isResizingColumn: null }
                                  ),
                                })
                              })
                          }),
                          u(function(e) {
                            return _objectSpread2({}, e, {
                              columnResizing: _objectSpread2(
                                {},
                                e.columnResizing,
                                { startX: n, isResizingColumn: t.id }
                              ),
                            })
                          })
                      })(e, t)
                    )
                  },
                  style: { cursor: 'ew-resize' },
                  draggable: !1,
                },
                a,
                e
              )
            }
          }
        }
      })(e)
    ),
    e
  )
}
function getLeafHeaders(e) {
  var t = []
  return (
    (function e(r) {
      r.columns && r.columns.length && r.columns.map(e), t.push(r)
    })(e),
    t
  )
}
var propTypes$a = {},
  useAbsoluteLayout = function(e) {
    e.useMain.push(useMain$8)
  }
useAbsoluteLayout.pluginName = 'useAbsoluteLayout'
var useMain$8 = function(e) {
    PropTypes.checkPropTypes(propTypes$a, e, 'property', 'useAbsoluteLayout')
    var t = e.totalColumnsWidth,
      r = e.hooks,
      o = r.getRowProps,
      n = r.getTableBodyProps,
      u = r.getHeaderGroupProps,
      a = r.getHeaderProps,
      s = r.getCellProps,
      i = { style: { position: 'relative', width: ''.concat(t, 'px') } }
    n.push(function() {
      return i
    }),
      o.push(function() {
        return i
      }),
      u.push(function() {
        return i
      })
    var c = { position: 'absolute', top: 0 }
    return (
      a.push(function(e) {
        return {
          style: _objectSpread2({}, c, {
            left: ''.concat(e.totalLeft, 'px'),
            width: ''.concat(e.totalWidth, 'px'),
          }),
        }
      }),
      s.push(function(e) {
        return {
          style: _objectSpread2({}, c, {
            left: ''.concat(e.column.totalLeft, 'px'),
            width: ''.concat(e.column.totalWidth, 'px'),
          }),
        }
      }),
      e
    )
  },
  propTypes$b = {},
  useBlockLayout = function(e) {
    e.useMain.push(useMain$9)
  }
useBlockLayout.pluginName = 'useBlockLayout'
var useMain$9 = function(e) {
  PropTypes.checkPropTypes(propTypes$b, e, 'property', 'useBlockLayout')
  var t = e.totalColumnsWidth,
    r = e.hooks,
    o = r.getRowProps,
    n = r.getHeaderGroupProps,
    u = r.getHeaderProps,
    a = r.getCellProps,
    s = { style: { display: 'flex', width: ''.concat(t, 'px') } }
  o.push(function() {
    return s
  }),
    n.push(function() {
      return s
    })
  var i = { display: 'inline-block', boxSizing: 'border-box' }
  return (
    u.push(function(e) {
      return {
        style: _objectSpread2({}, i, { width: ''.concat(e.totalWidth, 'px') }),
      }
    }),
    a.push(function(e) {
      return {
        style: _objectSpread2({}, i, {
          width: ''.concat(e.column.totalWidth, 'px'),
        }),
      }
    }),
    e
  )
}
;(exports.utils = utils),
  (exports.defaultColumn = defaultColumn),
  (exports.useTable = useTable),
  (exports.defaultState = defaultState),
  (exports.useExpanded = useExpanded),
  (exports.useFilters = useFilters),
  (exports.useGroupBy = useGroupBy),
  (exports.useSortBy = useSortBy),
  (exports.usePagination = usePagination),
  (exports.useRowSelect = useRowSelect),
  (exports.useRowState = useRowState),
  (exports.useColumnOrder = useColumnOrder),
  (exports.useResizeColumns = useResizeColumns),
  (exports.useAbsoluteLayout = useAbsoluteLayout),
  (exports.useBlockLayout = useBlockLayout),
  (exports.actions = actions),
  (exports.addActions = addActions)
//# sourceMappingURL=index.js.map
