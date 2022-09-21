(this["webpackJsonpmeta-tag-generator"] =
  this["webpackJsonpmeta-tag-generator"] || []).push([
  [0],
  {
    13: function (e, t, a) {},
    14: function (e, t, a) {},
    15: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(5),
        o = a.n(r),
        c = (a(13), a(7)),
        s = a(1),
        i = a(2),
        m = a(4),
        u = a(3);
      a(14);
      var h = function () {
        return l.a.createElement(
          "div",
          { className: "container header" },
          l.a.createElement(
            "div",
            { className: "block" },
            l.a.createElement(
              "h1",
              { className: "is-size-1 has-text-black has-text-weight-bold" },
              "Meta Tag Generator"
            ),
            l.a.createElement(
              "h2",
              {
                className:
                  "is-size-5 has-text-grey-dark has-text-weight-medium",
              },
              "Meta tags are HTML tag content that provide metadata about your website such as description. Meta tags are used by search engines to help index and to provide relevant content in their search results"
            )
          )
        );
      };
      var p = function (e) {
        return 1 !== e.currentStep
          ? null
          : l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                { className: "field" },
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement(
                    "label",
                    { htmlFor: "title", className: "label" },
                    "Site Title"
                  ),
                  l.a.createElement("input", {
                    className: "input",
                    name: "title",
                    type: "text",
                    placeholder: "Title must be within 70 characters",
                    value: e.title,
                    onChange: e.handleChange,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "field" },
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement(
                    "label",
                    { htmlFor: "description", className: "label" },
                    "Site Description"
                  ),
                  l.a.createElement("textarea", {
                    className: "textarea",
                    name: "description",
                    type: "text",
                    placeholder: "Description must be within 150 characters",
                    value: e.description,
                    onChange: e.handleChange,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "field" },
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement(
                    "label",
                    { htmlFor: "Image", className: "label" },
                    "Site Main Image Url"
                  ),
                  l.a.createElement("input", {
                    className: "input",
                    name: "image",
                    type: "text",
                    placeholder: "Paste the main image URL",
                    value: e.image,
                    onChange: e.handleChange,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "field" },
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement(
                    "label",
                    { htmlFor: "URL", className: "label" },
                    "Site Url"
                  ),
                  l.a.createElement("input", {
                    className: "input",
                    name: "url",
                    type: "text",
                    placeholder: "Paste the website URL",
                    value: e.url,
                    onChange: e.handleChange,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "field" },
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement(
                    "label",
                    { htmlFor: "keywords", className: "label" },
                    "Site Keywords (Separated with commas)"
                  ),
                  l.a.createElement("textarea", {
                    className: "textarea",
                    name: "keywords",
                    type: "text",
                    placeholder: "keyword1, keyword2, keyword3",
                    value: e.keywords,
                    onChange: e.handleChange,
                  })
                )
              )
            );
      };
      var d = function (e) {
        return 2 !== e.currentStep
          ? null
          : l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                { className: "control" },
                l.a.createElement(
                  "label",
                  { className: "label" },
                  "Allow robots to index your website?"
                ),
                l.a.createElement(
                  "div",
                  { className: "select" },
                  l.a.createElement(
                    "select",
                    null,
                    l.a.createElement("option", null, "Yes"),
                    l.a.createElement("option", null, "No")
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "control" },
                l.a.createElement(
                  "label",
                  { className: "label" },
                  "What type of content will your site display?"
                ),
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement("input", {
                    className: "input",
                    name: "contentType",
                    type: "text",
                    placeholder: "e.g. UTF-8",
                    value: e.contentType,
                    onChange: e.handleChange,
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: "control" },
                l.a.createElement(
                  "label",
                  { className: "label" },
                  "What is your site primary language?"
                ),
                l.a.createElement(
                  "div",
                  { className: "control" },
                  l.a.createElement("input", {
                    className: "input",
                    name: "lang",
                    type: "text",
                    placeholder: "e.g. English",
                    value: e.lang,
                    onChange: e.handleChange,
                  })
                )
              )
            );
      };
      var g = function (e) {
          return 3 !== e.currentStep
            ? null
            : l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  "div",
                  { className: "field" },
                  l.a.createElement(
                    "label",
                    { className: "label" },
                    "Search engines should revisit this page after"
                  ),
                  l.a.createElement(
                    "div",
                    { className: "control" },
                    l.a.createElement("input", {
                      className: "input",
                      name: "seo",
                      type: "text",
                      placeholder: "e.g. 5 days",
                      value: e.seo,
                      onChange: e.handleChange,
                    })
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "field" },
                  l.a.createElement("label", { className: "label" }, "Author"),
                  l.a.createElement(
                    "div",
                    { className: "control" },
                    l.a.createElement("input", {
                      className: "input",
                      name: "author",
                      type: "text",
                      placeholder: "e.g. John doe",
                      value: e.author,
                      onChange: e.handleChange,
                    })
                  )
                )
              );
        },
        b = (function (e) {
          Object(m.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(s.a)(this, a),
              ((n = t.call(this, e)).state = { currentStep: 1 }),
              n
            );
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function (e) {
                  var t = this,
                    a = this.props,
                    n = a.title,
                    r = a.description,
                    o = a.keywords,
                    c = a.allowRobots,
                    s = a.contentType,
                    i = a.lang,
                    m = a.seo,
                    u = a.author,
                    h = a.image,
                    b = a.url,
                    y = this.state.currentStep;
                  return l.a.createElement(
                    "div",
                    { className: "container box" },
                    l.a.createElement(
                      "div",
                      { className: "block" },
                      l.a.createElement(
                        "h3",
                        { className: "is-size-4 has-text-weight-bold" },
                        "Step ",
                        y
                      ),
                      l.a.createElement(
                        "form",
                        { onSubmit: this.props.handleSubmit },
                        l.a.createElement(p, {
                          currentStep: y,
                          handleChange: this.props.handleChange,
                          title: n,
                          description: r,
                          keywords: o,
                          image: h,
                          url: b,
                        }),
                        l.a.createElement(d, {
                          currentStep: y,
                          handleChange: this.props.handleChange,
                          allowRobots: c,
                          contenType: s,
                          lang: i,
                        }),
                        l.a.createElement(g, {
                          currentStep: y,
                          handleChange: this.props.handleChange,
                          seo: m,
                          author: u,
                          handleSubmit: this.props.handleSubmit,
                        }),
                        1 !== y &&
                          l.a.createElement(
                            "button",
                            {
                              className: "button is-warning",
                              type: "button",
                              onClick: function () {
                                var e = 1 === y ? 1 : y - 1;
                                t.setState({ currentStep: e });
                              },
                            },
                            "Previous"
                          ),
                        y < 3 &&
                          l.a.createElement(
                            "button",
                            {
                              className: "button is-primary",
                              type: "button",
                              onClick: function () {
                                var e = y >= 2 ? 3 : y + 1;
                                t.setState({ currentStep: e });
                              },
                            },
                            "Next"
                          ),
                        3 === y &&
                          l.a.createElement(
                            "button",
                            { className: "button is-success", type: "submit" },
                            "Generate Meta Tags"
                          )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        y = (function (e) {
          Object(m.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(s.a)(this, a),
              ((n = t.call(this, e)).copyCodeToClipboard = function () {
                n.textArea.select(),
                  document.execCommand("copy"),
                  n.setState({ copy: !0 });
              }),
              (n.state = { copy: !1 }),
              n
            );
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.handleClose,
                    n = t.title,
                    r = t.description,
                    c = t.keywords,
                    s = t.contentType,
                    i = t.lang,
                    m = t.seo,
                    u = t.author,
                    h = t.image,
                    p = t.url,
                    d = "\n  \x3c!-- Primary Meta Tags --\x3e\n  <title>"
                      .concat(n, '</title>\n  <meta name="title" content="')
                      .concat(n, '">\n  <meta name="description" content="')
                      .concat(
                        r,
                        '">\n  \n  \x3c!-- Open Graph / Facebook --\x3e\n  <meta property="og:type" content="website">\n  <meta property="og:url" content="'
                      )
                      .concat(p, '">\n  <meta property="og:title" content="')
                      .concat(
                        n,
                        '">\n  <meta property="og:description" content="'
                      )
                      .concat(r, '">\n  <meta property="og:image" content="')
                      .concat(
                        h,
                        '">\n  \n  \x3c!-- Twitter --\x3e\n  <meta property="twitter:card" content="summary_large_image">\n  <meta property="twitter:url" content="'
                      )
                      .concat(
                        p,
                        '">\n  <meta property="twitter:title" content="'
                      )
                      .concat(
                        n,
                        '">\n  <meta property="twitter:description" content="'
                      )
                      .concat(
                        r,
                        '">\n  <meta property="twitter:image" content="'
                      )
                      .concat(
                        h,
                        '">\n  \n  \x3c!-- Optional Meta Tags --\x3e\n  <meta name="keywords" content="'
                      )
                      .concat(
                        c,
                        '">\n  <meta name="robots" content="index, follow">\n  <meta http-equiv="Content-Type" content="text/html; charset='
                      )
                      .concat(s, '">\n  <meta name="language" content="')
                      .concat(i, '">\n  <meta name="revisit-after" content="')
                      .concat(m, ' days">\n  <meta name="author" content="')
                      .concat(u, '">');
                  return o.a.createPortal(
                    l.a.createElement(
                      "div",
                      { className: "container meta" },
                      l.a.createElement(
                        "article",
                        { className: "message is-primary" },
                        l.a.createElement(
                          "div",
                          { className: "message-header" },
                          l.a.createElement(
                            "p",
                            { className: "is-size-4" },
                            "Meta Tags"
                          ),
                          l.a.createElement("button", {
                            className: "delete is-large",
                            "aria-label": "delete",
                            onClick: a,
                          })
                        ),
                        l.a.createElement(
                          "div",
                          { className: "message-body is-primary" },
                          l.a.createElement(
                            "textarea",
                            {
                              className: "textarea",
                              ref: function (t) {
                                return (e.textArea = t);
                              },
                              value: "".concat(d),
                              onClick: this.copyCodeToClipboard,
                            },
                            d
                          )
                        ),
                        this.state.copy
                          ? l.a.createElement(
                              "button",
                              {
                                className:
                                  "button is-success has-text-weight-bold copy",
                              },
                              "Copied!!!"
                            )
                          : l.a.createElement(
                              "button",
                              {
                                className:
                                  "button is-warning has-text-weight-bold copy",
                                onClick: this.copyCodeToClipboard,
                              },
                              "Copy To Clipboard"
                            )
                      )
                    ),
                    document.getElementById("portal")
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        E = (function (e) {
          Object(m.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(s.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                var t = e.target,
                  a = t.name,
                  l = t.value;
                n.setState(Object(c.a)({}, a, l));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(), n.setState({ show: !0 });
              }),
              (n.showModal = function () {
                n.setState({ show: !0 });
              }),
              (n.hideModal = function () {
                n.setState({ show: !1 });
              }),
              (n.state = {
                show: !1,
                title: "",
                description: "",
                keywords: "",
                allowRobots: "",
                contentType: "",
                lang: "",
                seo: "",
                author: "",
                image: "",
                url: "",
              }),
              n
            );
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.show,
                    a = e.currentStep,
                    n = e.title,
                    r = e.description,
                    o = e.keywords,
                    c = e.allowRobots,
                    s = e.contentType,
                    i = e.lang,
                    m = e.seo,
                    u = e.author,
                    p = e.image,
                    d = e.url;
                  return l.a.createElement(
                    "div",
                    { className: "App" },
                    l.a.createElement(h, null),
                    !this.state.show &&
                      l.a.createElement(b, {
                        show: t,
                        currentStep: a,
                        title: n,
                        description: r,
                        keywords: o,
                        allowRobots: c,
                        contentType: s,
                        lang: i,
                        seo: m,
                        author: u,
                        image: p,
                        url: d,
                        handleChange: this.handleChange,
                        handleSubmit: this.handleSubmit,
                        previousButton: this.previousButton,
                        nextButton: this.nextButton,
                      }),
                    this.state.show &&
                      l.a.createElement(y, {
                        handleClose: this.hideModal,
                        title: n,
                        description: r,
                        keywords: o,
                        allowRobots: c,
                        contentType: s,
                        lang: i,
                        seo: m,
                        author: u,
                        image: p,
                        url: d,
                      })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        l.a.createElement(l.a.StrictMode, null, l.a.createElement(E, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    8: function (e, t, a) {
      e.exports = a(15);
    },
  },
  [[8, 1, 2]],
]);
//# sourceMappingURL=main.56137e1f.chunk.js.map
