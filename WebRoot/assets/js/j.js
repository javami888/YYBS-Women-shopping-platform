/*! Notiflix ('https://www.notiflix.com') -- Version: 1.3.0 -- Author: Furkan MT -- Copyright 2019 Notiflix, MIT Licence ('https://opensource.org/licenses/MIT') */
"use strict";
var newNotifySettings, newReportSettings, newConfirmSettings, newLoadingSettings, notifySettings = {
		wrapID: "NotiflixNotifyWrap",
		width: "280px",
		position: "right-top",
		distance: "10px",
		opacity: 1,
		borderRadius: "5px",
		rtl: !1,
		timeout: 3e3,
		messageMaxLength: 110,
		backOverlay: !1,
		backOverlayColor: "rgba(0,0,0,0.5)",
		ID: "NotiflixNotify",
		className: "notiflix-notify",
		zindex: 4001,
		useGoogleFont: !0,
		fontFamily: "Quicksand",
		fontSize: "13px",
		cssAnimation: !0,
		cssAnimationDuration: 400,
		cssAnimationStyle: "fade",
		closeButton: !1,
		useIcon: !0,
		useFontAwesome: !1,
		fontAwesomeIconStyle: "basic",
		fontAwesomeIconSize: "34px",
		plainText: !0,
		success: {
			background: "#00b462",
			textColor: "#fff",
			childClassName: "success",
			notiflixIconColor: "rgba(0, 0, 0, 0.25)",
			fontAwesomeClassName: "fas fa-check-circle",
			fontAwesomeIconColor: "rgba(0, 0, 0, 0.2)"
		},
		failure: {
			background: "#f44336",
			textColor: "#fff",
			childClassName: "failure",
			notiflixIconColor: "rgba(0, 0, 0, 0.2)",
			fontAwesomeClassName: "fas fa-times-circle",
			fontAwesomeIconColor: "rgba(0, 0, 0, 0.2)"
		},
		warning: {
			background: "#f2bd1d",
			textColor: "#fff",
			childClassName: "warning",
			notiflixIconColor: "rgba(0, 0, 0, 0.2)",
			fontAwesomeClassName: "fas fa-exclamation-circle",
			fontAwesomeIconColor: "rgba(0, 0, 0, 0.2)"
		},
		info: {
			background: "#00bcd4",
			textColor: "#fff",
			childClassName: "info",
			notiflixIconColor: "rgba(0, 0, 0, 0.2)",
			fontAwesomeClassName: "fas fa-info-circle",
			fontAwesomeIconColor: "rgba(0, 0, 0, 0.2)"
		}
	},
	reportSettings = {
		ID: "NotiflixReportWrap",
		className: "notiflix-report",
		width: "320px",
		backgroundColor: "#f8f8f8",
		borderRadius: "25px",
		rtl: !1,
		zindex: 4002,
		backOverlay: !0,
		backOverlayColor: "rgba(0, 0, 0, 0.5)",
		useGoogleFont: !0,
		fontFamily: "Quicksand",
		svgSize: "110px",
		plainText: !0,
		titleFontSize: "16px",
		titleMaxLength: 34,
		messageFontSize: "13px",
		messageMaxLength: 400,
		buttonFontSize: "14px",
		buttonMaxLength: 34,
		cssAnimation: !0,
		cssAnimationDuration: 360,
		cssAnimationStyle: "fade",
		success: {
			svgColor: "#00b462",
			titleColor: "#1e1e1e",
			messageColor: "#242424",
			buttonBackground: "#00b462",
			buttonColor: "#fff"
		},
		failure: {
			svgColor: "#f44336",
			titleColor: "#1e1e1e",
			messageColor: "#242424",
			buttonBackground: "#f44336",
			buttonColor: "#fff"
		},
		warning: {
			svgColor: "#f2bd1d",
			titleColor: "#1e1e1e",
			messageColor: "#242424",
			buttonBackground: "#f2bd1d",
			buttonColor: "#fff"
		},
		info: {
			svgColor: "#00bcd4",
			titleColor: "#1e1e1e",
			messageColor: "#242424",
			buttonBackground: "#00bcd4",
			buttonColor: "#fff"
		}
	},
	confirmSettings = {
		ID: "NotiflixConfirmWrap",
		className: "notiflix-confirm",
		width: "280px",
		zindex: 4003,
		position: "center",
		distance: "10px",
		backgroundColor: "#f8f8f8",
		borderRadius: "25px",
		backOverlay: !0,
		backOverlayColor: "rgba(0,0,0,0.5)",
		rtl: !1,
		useGoogleFont: !0,
		fontFamily: "Quicksand",
		cssAnimation: !0,
		cssAnimationStyle: "fade",
		cssAnimationDuration: 300,
		titleColor: "#00b462",
		titleFontSize: "16px",
		titleMaxLength: 34,
		messageColor: "#1e1e1e",
		messageFontSize: "14px",
		messageMaxLength: 110,
		buttonsFontSize: "15px",
		buttonsMaxLength: 34,
		okButtonColor: "#f8f8f8",
		okButtonBackground: "#00b462",
		cancelButtonColor: "#f8f8f8",
		cancelButtonBackground: "#a9a9a9",
		plainText: !0
	},
	loadingSettings = {
		ID: "NotiflixLoadingWrap",
		className: "notiflix-loading",
		zindex: 4e3,
		backgroundColor: "rgba(0,0,0,0.8)",
		rtl: !1,
		useGoogleFont: !0,
		fontFamily: "Quicksand",
		cssAnimation: !0,
		cssAnimationDuration: 400,
		clickToClose: !1,
		customSvgUrl: null,
		svgSize: "80px",
		svgColor: "#00b462",
		messageID: "NotiflixLoadingMessage",
		messageFontSize: "15px",
		messageMaxLength: 34,
		messageColor: "#dcdcdc"
	},
	extendNotiflix = function() {
		var n = {},
			i = !1,
			t = 0;
		"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (i = arguments[0], t++);
		for (var e = function(t) {
				for (var e in t) t.hasOwnProperty(e) && (i && "[object Object]" === Object.prototype.toString.call(t[e]) ? n[e] =
					extendNotiflix(n[e], t[e]) : n[e] = t[e])
			}; t < arguments.length; t++) e(arguments[t]);
		return n
	};

function notiflixPlaintext(t) {
	var e = document.createElement("div");
	return e.innerHTML = t, e.textContent || e.innerText || ""
}

function notiflixGoogleFont() {
	if (!document.getElementById("NotiflixQuicksand")) {
		var t = document.createElement("link");
		t.id = "NotiflixGoogleDNS", t.rel = "dns-prefetch", t.href = "//fonts.googleapis.com", document.head.appendChild(t);
		var e = document.createElement("link");
		e.id = "NotiflixQuicksand", e.rel = "stylesheet", e.href =
			"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext", document.head.appendChild(
				e)
	}
}
var Notiflix = {
		Notify: {
			Init: function(t) {
				(newNotifySettings = extendNotiflix(!0, notifySettings, t)).useGoogleFont && "Quicksand" === newNotifySettings.fontFamily &&
					notiflixGoogleFont()
			},
			Merge: function(t) {
				newNotifySettings = extendNotiflix(!0, newNotifySettings || notifySettings, t)
			},
			Success: function(t, e) {
				e || (e = void 0);
				var n = newNotifySettings.success;
				"shadow" === newNotifySettings.fontAwesomeIconStyle && (n.fontAwesomeIconColor = n.background), NotiflixNotify(t,
					e, n, "success")
			},
			Failure: function(t, e) {
				e || (e = void 0);
				var n = newNotifySettings.failure;
				"shadow" === newNotifySettings.fontAwesomeIconStyle && (n.fontAwesomeIconColor = n.background), NotiflixNotify(t,
					e, n, "failure")
			},
			Warning: function(t, e) {
				e || (e = void 0);
				var n = newNotifySettings.warning;
				"shadow" === newNotifySettings.fontAwesomeIconStyle && (n.fontAwesomeIconColor = n.background), NotiflixNotify(t,
					e, n, "warning")
			},
			Info: function(t, e) {
				e || (e = void 0);
				var n = newNotifySettings.info;
				"shadow" === newNotifySettings.fontAwesomeIconStyle && (n.fontAwesomeIconColor = n.background), NotiflixNotify(t,
					e, n, "info")
			}
		},
		Report: {
			Init: function(t) {
				(newReportSettings = extendNotiflix(!0, reportSettings, t)).useGoogleFont && "Quicksand" === newReportSettings.fontFamily &&
					notiflixGoogleFont()
			},
			Merge: function(t) {
				newReportSettings = extendNotiflix(!0, newReportSettings || reportSettings, t)
			},
			Success: function(t, e, n, i) {
				4 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : ((void 0 === arguments[0] ||
					arguments[0].length <= 0) && (arguments[0] = "Notiflix Success"), (void 0 === arguments[1] || arguments[1].length <=
					0) && (arguments[1] =
					'"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein'), (
					void 0 === arguments[2] || arguments[2].length <= 0) && (arguments[2] = "Okay"), void 0 === arguments[3] && (
					arguments[3] = void 0), NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3],
					newReportSettings.success, "success"))
			},
			Failure: function(t, e, n, i) {
				4 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : ((void 0 === arguments[0] ||
					arguments[0].length <= 0) && (arguments[0] = "Notiflix Failure"), (void 0 === arguments[1] || arguments[1].length <=
					0) && (arguments[1] =
					'"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford'), (
					void 0 === arguments[2] || arguments[2].length <= 0) && (arguments[2] = "Okay"), void 0 === arguments[3] && (
					arguments[3] = void 0), NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3],
					newReportSettings.failure, "failure"))
			},
			Warning: function(t, e, n, i) {
				4 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : ((void 0 === arguments[0] ||
						arguments[0].length <= 0) && (arguments[0] = "Notiflix Warning"), (void 0 === arguments[1] || arguments[1].length <=
						0) && (arguments[1] =
						'"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk'
					), (void 0 === arguments[2] || arguments[2].length <= 0) && (arguments[2] = "Okay"), void 0 === arguments[3] &&
					(arguments[3] = void 0), NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3],
						newReportSettings.warning, "warning"))
			},
			Info: function(t, e, n, i) {
				4 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : ((void 0 === arguments[0] ||
						arguments[0].length <= 0) && (arguments[0] = "Notiflix Info"), (void 0 === arguments[1] || arguments[1].length <=
						0) && (arguments[1] = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung'),
					(void 0 === arguments[2] || arguments[2].length <= 0) && (arguments[2] = "Okay"), void 0 === arguments[3] && (
						arguments[3] = void 0), NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3],
						newReportSettings.info, "info"))
			}
		},
		Confirm: {
			Init: function(t) {
				(newConfirmSettings = extendNotiflix(!0, confirmSettings, t)).useGoogleFont && "Quicksand" === newConfirmSettings.fontFamily &&
					notiflixGoogleFont()
			},
			Merge: function(t) {
				newConfirmSettings = extendNotiflix(!0, newConfirmSettings || confirmSettings, t)
			},
			Show: function(t, e, n, i, a) {
				5 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : ((void 0 === t || t.length <=
						0) && (t = "Notiflix Confirm"), (void 0 === e || e.length <= 0) && (e = "Do you agree with me?"), (void 0 ===
						n || n.length <= 0) && (n = "Yes"), (void 0 === i || i.length <= 0) && (i = "No"), void 0 === a && (a = void 0),
					NotiflixConfirm(t, e, n, i, a))
			}
		},
		Loading: {
			Init: function(t) {
				(newLoadingSettings = extendNotiflix(!0, loadingSettings, t)).useGoogleFont && "Quicksand" === newLoadingSettings.fontFamily &&
					notiflixGoogleFont()
			},
			Merge: function(t) {
				newLoadingSettings = extendNotiflix(!0, newLoadingSettings || loadingSettings, t)
			},
			Standard: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "standard", !0, 0))
			},
			Hourglass: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "hourglass", !0, 0))
			},
			Circle: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "circle", !0, 0))
			},
			Arrows: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "arrows", !0, 0))
			},
			Dots: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "dots", !0, 0))
			},
			Pulse: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "pulse", !0, 0))
			},
			Custom: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "custom", !0, 0))
			},
			Notiflix: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoading(t, "notiflix", !0, 0))
			},
			Remove: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: Parameters not allowed.") : (t || (t = 0), NotiflixLoading(!
					1, !1, !1, t))
			},
			Change: function(t) {
				1 < arguments.length ? console.error("Notiflix Error: More parameters than allowed.") : (t || (t = ""),
					NotiflixLoadingChange(t))
			}
		}
	},
	notiflixNotifyCount = 0;

function NotiflixNotify(t, e, n, i) {
	if (null != arguments && 4 === arguments.length) {
		t || (t = "success" === i ? "Notiflix Success" : "failure" === i ? "Notiflix Failure" : "warning" === i ?
				"Notiflix Warning" : "info" === i ? "Notiflix Info" : "Notiflix"), newNotifySettings.plainText && (t =
				notiflixPlaintext(t)), !newNotifySettings.plainText && t.length > newNotifySettings.messageMaxLength && (Notiflix.Notify
				.Merge({
					closeButton: !0
				}), t = '<b>HTML Tags Error:</b> Your content length is more than "messageMaxLength" option.'), t.length >
			newNotifySettings.messageMaxLength && (t = t.substring(0, newNotifySettings.messageMaxLength) + "..."),
			notiflixNotifyCount++, newNotifySettings.cssAnimation || (newNotifySettings.cssAnimationDuration = 0);
		var a = document.getElementsByTagName("body")[0],
			o = document.createElement("div");
		if (o.id = notifySettings.wrapID, o.style.width = newNotifySettings.width, o.style.zIndex = newNotifySettings.zindex,
			o.style.opacity = newNotifySettings.opacity, "right-bottom" === newNotifySettings.position ? (o.style.right =
				newNotifySettings.distance, o.style.bottom = newNotifySettings.distance, o.style.top = "auto", o.style.left =
				"auto") : "left-top" === newNotifySettings.position ? (o.style.left = newNotifySettings.distance, o.style.top =
				newNotifySettings.distance, o.style.right = "auto", o.style.bottom = "auto") : "left-bottom" === newNotifySettings.position ?
			(o.style.left = newNotifySettings.distance, o.style.bottom = newNotifySettings.distance, o.style.top = "auto", o.style
				.right = "auto") : (o.style.right = newNotifySettings.distance, o.style.top = newNotifySettings.distance, o.style.left =
				"auto", o.style.bottom = "auto"), newNotifySettings.backOverlay) {
			var s = document.createElement("div");
			s.id = newNotifySettings.ID + "Overlay", s.style.width = "100%", s.style.height = "100%", s.style.position = "fixed",
				s.style.zIndex = newNotifySettings.zindex, s.style.left = 0, s.style.top = 0, s.style.right = 0, s.style.bottom = 0,
				s.style.background = newNotifySettings.backOverlayColor, s.className = newNotifySettings.cssAnimation ?
				"with-animation" : "", s.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration +
				"ms" : "", document.getElementById(s.id) || a.appendChild(s)
		}
		document.getElementById(o.id) || a.appendChild(o);
		var r = document.createElement("div");
		r.id = newNotifySettings.ID + "-" + notiflixNotifyCount, r.className = newNotifySettings.className + " " + n.childClassName +
			" " + (newNotifySettings.cssAnimation ? "with-animation" : "") + " " + (newNotifySettings.useIcon ? "with-icon" : "") +
			" nx-" + newNotifySettings.cssAnimationStyle + " " + (newNotifySettings.closeButton && !e ? "with-close" : "") + " " +
			(e ? "with-callback" : ""), r.style.fontSize = newNotifySettings.fontSize, r.style.color = n.textColor, r.style.background =
			n.background, r.style.borderRadius = newNotifySettings.borderRadius, newNotifySettings.rtl && (r.setAttribute("dir",
				"rtl"), r.classList.add("rtl-on")), newNotifySettings.useGoogleFont && (r.style.fontFamily = '"' +
				newNotifySettings.fontFamily + '", sans-serif'), newNotifySettings.cssAnimation && (r.style.animationDuration =
				newNotifySettings.cssAnimationDuration + "ms");
		var l, c = "";
		if (newNotifySettings.closeButton && !e && (c =
				'<span class="click-to-close"><svg class="clck2cls" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 20 20"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.click2close{fill:' +
				n.notiflixIconColor +
				'}</style></defs><g><path class="click2close" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'
			), newNotifySettings.useIcon)
			if (newNotifySettings.useFontAwesome) r.innerHTML = '<i style="color:' + n.fontAwesomeIconColor + "; font-size:" +
				newNotifySettings.fontAwesomeIconSize + ';" class="nmi wfa ' + n.fontAwesomeClassName + " " + ("shadow" ===
					newNotifySettings.fontAwesomeIconStyle ? "shadow" : "basic") + '"></i><span class="the-message with-icon">' + t +
				"</span>" + (newNotifySettings.closeButton ? c : "");
			else l = "success" === i ?
				'<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Success{fill:' +
				n.notiflixIconColor +
				'}</style></defs><g><path id="Notiflix-Icon-Success" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' :
				"failure" === i ?
				'<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Failure{fill:' +
				n.notiflixIconColor +
				'}</style></defs><g><path id="Notiflix-Icon-Failure" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' :
				"warning" === i ?
				'<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Warning{fill:' +
				n.notiflixIconColor +
				'}</style></defs><g><path id="Notiflix-Icon-Warning" class="fil0" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' :
				"info" === i ?
				'<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Info{fill:' +
				n.notiflixIconColor +
				'}</style></defs><g><path id="Notiflix-Icon-Info" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>' :
				"", r.innerHTML = l + '<span class="the-message with-icon">' + t + "</span>" + (newNotifySettings.closeButton ? c :
					"");
		else r.innerHTML = '<span class="the-message">' + t + "</span>" + (newNotifySettings.closeButton ? c : "");
		if ("left-bottom" === newNotifySettings.position || "right-bottom" === newNotifySettings.position) {
			var m = document.getElementById(o.id);
			m.insertBefore(r, m.firstChild)
		} else document.getElementById(o.id).appendChild(r);
		if (newNotifySettings.useIcon) {
			var p = document.getElementById(r.id).querySelectorAll(".nmi")[0],
				g = 40;
			if (newNotifySettings.useFontAwesome) g = Math.round(parseInt(p.offsetHeight));
			else {
				var f = p.getBBox();
				g = Math.round(parseInt(f.width))
			}
			var x = document.getElementById(r.id).querySelectorAll("span")[0],
				d = Math.round(x.offsetHeight);
			d <= g && (x.style.paddingTop = (g - d) / 2 + "px", x.style.paddingBottom = (g - d) / 2 + "px")
		}
		if (document.getElementById(r.id)) {
			var u, w, y, b = document.getElementById(r.id),
				h = document.getElementById(o.id);
			if (newNotifySettings.backOverlay && (u = document.getElementById(s.id)), newNotifySettings.closeButton || e || (w =
					setTimeout(function() {
						b.classList.add("remove"), newNotifySettings.backOverlay && h.childElementCount <= 0 && u.classList.add("remove")
					}, newNotifySettings.timeout), y = setTimeout(function() {
						b.parentNode.removeChild(b), h.childElementCount <= 0 && (h.parentNode.removeChild(h), newNotifySettings.backOverlay &&
							u.parentNode.removeChild(u))
					}, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration)), newNotifySettings.closeButton && !e)
				document.getElementById(r.id).querySelectorAll("span.click-to-close")[0].addEventListener("click", function() {
					b.classList.add("remove"), clearTimeout(w), newNotifySettings.backOverlay && h.childElementCount <= 1 && u.classList
						.add("remove"), setTimeout(function() {
							b.parentNode.removeChild(b), clearTimeout(y), h.childElementCount <= 0 && (h.parentNode.removeChild(h),
								newNotifySettings.backOverlay && u.parentNode.removeChild(u))
						}, newNotifySettings.cssAnimationDuration)
				});
			e && b.addEventListener("click", function(t) {
				e(), b.classList.add("remove"), newNotifySettings.backOverlay && h.childElementCount <= 0 && u.classList.add(
					"remove"), clearTimeout(w), setTimeout(function() {
					b.parentNode.removeChild(b), h.childElementCount <= 0 && (h.parentNode.removeChild(h), newNotifySettings.backOverlay &&
						u.parentNode.removeChild(u)), clearTimeout(y)
				}, newNotifySettings.cssAnimationDuration)
			})
		}
	} else console.error("Notiflix Error: Where is the arguments?")
}

function NotiflixReport(t, e, n, i, a, o) {
	newReportSettings.plainText && (t = notiflixPlaintext(t), e = notiflixPlaintext(e), n = notiflixPlaintext(n)),
		newReportSettings.plainText || (t.length > newReportSettings.titleMaxLength && (t = "HTML Tags Error", e =
				'Your Title content length is more than "titleMaxLength" option.', n = "Okay"), e.length > newReportSettings.messageMaxLength &&
			(t = "HTML Tags Error", e = 'Your Message content length is more than "messageMaxLength" option.', n = "Okay"), n.length >
			newReportSettings.buttonMaxLength && (t = "HTML Tags Error", e =
				'Your Button content length is more than "buttonMaxLength" option.', n = "Okay")), t.length > newReportSettings.titleMaxLength &&
		(t = t.substring(0, newReportSettings.titleMaxLength) + "..."), e.length > newReportSettings.messageMaxLength && (e =
			e.substring(0, newReportSettings.messageMaxLength) + "..."), n.length > newReportSettings.buttonMaxLength && (n = n.substring(
			0, newReportSettings.buttonMaxLength) + "..."), newReportSettings.cssAnimation || (newReportSettings.cssAnimationDuration =
			0);
	var s = document.getElementsByTagName("body")[0],
		r = document.createElement("div");
	r.id = reportSettings.ID, r.className = newReportSettings.className, r.style.width = newReportSettings.width, r.style.zIndex =
		newReportSettings.zindex, r.style.borderRadius = newReportSettings.borderRadius, newReportSettings.useGoogleFont && (
			r.style.fontFamily = '"' + newReportSettings.fontFamily + '", sans-serif'), newReportSettings.rtl && (r.setAttribute(
			"dir", "rtl"), r.classList.add("rtl-on"));
	var l = "";
	newReportSettings.backOverlay && (l = '<div class="' + newReportSettings.className + "-overlay" + (newReportSettings.cssAnimation ?
			" with-animation" : "") + '" style="background:' + newReportSettings.backOverlayColor + ";animation-duration:" +
		newReportSettings.cssAnimationDuration + 'ms;"></div>');
	var c = "";
	if ("success" === o ? c = notiflixReportSvgSuccess(newReportSettings.svgSize, a.svgColor) : "failure" === o ? c =
		notiflixReportSvgFailure(newReportSettings.svgSize, a.svgColor) : "warning" === o ? c = notiflixReportSvgWarning(
			newReportSettings.svgSize, a.svgColor) : "info" === o && (c = notiflixReportSvgInfo(newReportSettings.svgSize, a.svgColor)),
		r.innerHTML = l + '<div class="' + newReportSettings.className + "-content" + (newReportSettings.cssAnimation ?
			" with-animation " : "") + " nx-" + newReportSettings.cssAnimationStyle + '" style="background:' + newReportSettings
		.backgroundColor + "; animation-duration:" + newReportSettings.cssAnimationDuration + 'ms;"><div style="width:' +
		newReportSettings.svgSize + "; height:" + newReportSettings.svgSize + ';" class="' + newReportSettings.className +
		'-icon">' + c + '</div><h5 class="' + newReportSettings.className + '-title" style="font-weight:500; font-size:' +
		newReportSettings.titleFontSize + "; color:" + a.titleColor + ';">' + t + '</h5><p class="' + newReportSettings.className +
		'-message" style="font-size:' + newReportSettings.messageFontSize + "; color:" + a.messageColor + ';">' + e +
		'</p><a id="NXReportButton" class="' + newReportSettings.className + '-button" style="font-weight:500; font-size:' +
		newReportSettings.buttonFontSize + "; background:" + a.buttonBackground + "; color:" + a.buttonColor + ';">' + n +
		"</a></div>", !document.getElementById(r.id)) {
		s.appendChild(r);
		var m = Math.round(window.innerHeight),
			p = Math.round(document.getElementById(r.id).offsetHeight);
		r.style.top = (m - p) / 2 + "px";
		var g = document.getElementById(r.id);
		document.getElementById("NXReportButton").addEventListener("click", function() {
			i && i(), g.classList.add("remove"), setTimeout(function() {
				g.parentNode.removeChild(g)
			}, newReportSettings.cssAnimationDuration)
		})
	}
}

function NotiflixConfirm(t, e, n, i, a) {
	newConfirmSettings.plainText && (t = notiflixPlaintext(t), e = notiflixPlaintext(e), n = notiflixPlaintext(n), i =
			notiflixPlaintext(i)), newConfirmSettings.plainText || (t.length > newConfirmSettings.titleMaxLength && (t =
				"HTML Tags Error", e = 'Your Title content length is more than "titleMaxLength" option.', n = "Okay", i = "..."), e
			.length > newConfirmSettings.messageMaxLength && (t = "HTML Tags Error", e =
				'Your Message content length is more than "messageMaxLength" option.', n = "Okay", i = "..."), (n.length || i.length) >
			newConfirmSettings.buttonsMaxLength && (t = "HTML Tags Error", e =
				'Your Buttons contents length is more than "buttonsMaxLength" option.', n = "Okay", i = "...")), t.length >
		newConfirmSettings.titleMaxLength && (t = t.substring(0, newConfirmSettings.titleMaxLength) + "..."), e.length >
		newConfirmSettings.messageMaxLength && (e = e.substring(0, newConfirmSettings.messageMaxLength) + "..."), n.length >
		newConfirmSettings.buttonsMaxLength && (n = n.substring(0, newConfirmSettings.buttonsMaxLength) + "..."), i.length >
		newConfirmSettings.buttonsMaxLength && (i = i.substring(0, newConfirmSettings.buttonsMaxLength) + "..."),
		newConfirmSettings.cssAnimation || (newConfirmSettings.cssAnimationDuration = 0);
	var o = document.getElementsByTagName("body")[0],
		s = document.createElement("div");
	s.id = confirmSettings.ID, s.className = newConfirmSettings.className + (newConfirmSettings.cssAnimation ?
			" with-animation nx-" + newConfirmSettings.cssAnimationStyle : ""), s.style.width = newConfirmSettings.width, s.style
		.zIndex = newConfirmSettings.zindex, newConfirmSettings.rtl && (s.setAttribute("dir", "rtl"), s.classList.add(
			"rtl-on")), newConfirmSettings.useGoogleFont && (s.style.fontFamily = '"' + newConfirmSettings.fontFamily +
			'", sans-serif');
	var r = "";
	newConfirmSettings.backOverlay && (r = '<div class="' + newConfirmSettings.className + "-overlay" + (
			newConfirmSettings.cssAnimation ? " with-animation" : "") + '" style="background:' + newConfirmSettings.backOverlayColor +
		";animation-duration:" + newConfirmSettings.cssAnimationDuration + 'ms;"></div>');
	var l = "";
	if (a && (l = '<a id="NXConfirmButtonCancel" class="confirm-button-cancel" style="color:' + newConfirmSettings.cancelButtonColor +
			";background:" + newConfirmSettings.cancelButtonBackground + ";font-size:" + newConfirmSettings.buttonsFontSize +
			';">' + i + "</a>"), s.innerHTML = r + '<div class="' + newConfirmSettings.className +
		'-content" style="background:' + newConfirmSettings.backgroundColor + "; animation-duration:" + newConfirmSettings.cssAnimationDuration +
		"ms; border-radius: " + newConfirmSettings.borderRadius + ';"><div class="' + newConfirmSettings.className +
		'-head"><h5 style="color:' + newConfirmSettings.titleColor + ";font-size:" + newConfirmSettings.titleFontSize + ';">' +
		t + '</h5><p style="color:' + newConfirmSettings.messageColor + ";font-size:" + newConfirmSettings.messageFontSize +
		';">' + e + '</p></div><div class="' + newConfirmSettings.className +
		'-buttons"><a id="NXConfirmButtonOk" class="confirm-button-ok' + (a ? "" : " full") + '" style="color:' +
		newConfirmSettings.okButtonColor + ";background:" + newConfirmSettings.okButtonBackground + ";font-size:" +
		newConfirmSettings.buttonsFontSize + ';">' + n + "</a>" + l + "</div></div>", !document.getElementById(s.id)) {
		if (o.appendChild(s), "center" === newConfirmSettings.position) {
			var c = Math.round(window.innerHeight),
				m = Math.round(document.getElementById(s.id).offsetHeight);
			s.style.top = (c - m) / 2 + "px", s.style.left = newConfirmSettings.distance, s.style.right = newConfirmSettings.distance,
				s.style.bottom = "auto", s.style.margin = "auto"
		} else "right-top" === newConfirmSettings.position ? (s.style.right = newConfirmSettings.distance, s.style.top =
				newConfirmSettings.distance, s.style.bottom = "auto", s.style.left = "auto") : "right-bottom" ===
			newConfirmSettings.position ? (s.style.right = newConfirmSettings.distance, s.style.bottom = newConfirmSettings.distance,
				s.style.top = "auto", s.style.left = "auto") : "left-top" === newConfirmSettings.position ? (s.style.left =
				newConfirmSettings.distance, s.style.top = newConfirmSettings.distance, s.style.right = "auto", s.style.bottom =
				"auto") : "left-bottom" === newConfirmSettings.position ? (s.style.left = newConfirmSettings.distance, s.style.bottom =
				newConfirmSettings.distance, s.style.top = "auto", s.style.right = "auto") : (s.style.top = newConfirmSettings.distance,
				s.style.left = 0, s.style.right = 0, s.style.bottom = "auto"), s.style.margin = "auto";
		var p = document.getElementById(s.id),
			g = document.getElementById("NXConfirmButtonOk");
		if (a) g.addEventListener("click", function() {
			a(), p.classList.add("remove"), setTimeout(function() {
				p.parentNode.removeChild(p)
			}, newConfirmSettings.cssAnimationDuration)
		}), document.getElementById("NXConfirmButtonCancel").addEventListener("click", function() {
			p.classList.add("remove"), setTimeout(function() {
				p.parentNode.removeChild(p)
			}, newConfirmSettings.cssAnimationDuration)
		});
		else g.addEventListener("click", function() {
			p.classList.add("remove"), setTimeout(function() {
				p.parentNode.removeChild(p)
			}, newConfirmSettings.cssAnimationDuration)
		})
	}
}

function NotiflixLoading(t, e, n, i) {
	if (n) {
		t = t.toString().length > newLoadingSettings.messageMaxLength ? notiflixPlaintext(t).toString().substring(0,
			newLoadingSettings.messageMaxLength) + "..." : notiflixPlaintext(t).toString();
		var a = parseInt(newLoadingSettings.svgSize.slice(0, -2)),
			o = "";
		if (0 < t.length) {
			var s = Math.round(a - a / 3).toString() + "px",
				r = (1.2 * parseInt(newLoadingSettings.messageFontSize.slice(0, 2))).toString() + "px";
			o = '<p id="' + newLoadingSettings.messageID + '" class="loading-message" style="color:' + newLoadingSettings.messageColor +
				";font-size:" + newLoadingSettings.messageFontSize + ";height:" + r + "; top:" + s + ';">' + t + "</p>"
		}
		newLoadingSettings.cssAnimation || (newLoadingSettings.cssAnimationDuration = 0);
		var l = "";
		if ("standard" === e) l = notiflixLoadingSvgStandard(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
		else if ("hourglass" === e) l = notiflixLoadingSvgHourglass(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
		else if ("circle" === e) l = notiflixLoadingSvgCircle(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
		else if ("arrows" === e) l = notiflixLoadingSvgArrows(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
		else if ("dots" === e) l = notiflixLoadingSvgDots(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
		else if ("pulse" === e) l = notiflixLoadingSvgPulse(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
		else if ("custom" === e && null !== newLoadingSettings.customSvgUrl) l = '<img class="custom-loading-icon" width="' +
			newLoadingSettings.svgSize + '" height="' + newLoadingSettings.svgSize + '" src="' + newLoadingSettings.customSvgUrl +
			'" alt="Notiflix">';
		else {
			if ("custom" === e && null == newLoadingSettings.customSvgUrl) return console.error(
				'Notiflix Error: You have to set a static SVG url to "customSvgUrl" option for use Loading Custom.'), !1;
			"notiflix" === e && (l = notiflixLoadingSvgNotiflix(newLoadingSettings.svgSize, "#f8f8f8", "#00b462"))
		}
		var c = 0;
		0 < t.length && (c = "-" + Math.round(a - a / 3).toString() + "px");
		var m = '<div style="top:' + c + "; width:" + newLoadingSettings.svgSize + "; height:" + newLoadingSettings.svgSize +
			';" class="' + newLoadingSettings.className + "-icon" + (0 < t.length ? " with-message" : "") + '">' + l + "</div>",
			p = document.getElementsByTagName("body")[0],
			g = document.createElement("div");
		if (g.id = loadingSettings.ID, g.className = newLoadingSettings.className + (newLoadingSettings.cssAnimation ?
				" with-animation" : "") + (newLoadingSettings.clickToClose ? " click-to-close" : ""), g.style.zIndex =
			newLoadingSettings.zindex, g.style.background = newLoadingSettings.backgroundColor, g.style.animationDuration =
			newLoadingSettings.cssAnimationDuration + "ms", newLoadingSettings.useGoogleFont && (g.style.fontFamily = '"' +
				newLoadingSettings.fontFamily + '", sans-serif'), newLoadingSettings.rtl && (g.setAttribute("dir", "rtl"), g.classList
				.add("rtl-on")), g.innerHTML = m + o, !document.getElementById(g.id))
			if (p.appendChild(g), newLoadingSettings.clickToClose)(f = document.getElementById(g.id)).addEventListener("click",
				function() {
					g.classList.add("remove"), setTimeout(function() {
						g.parentNode.removeChild(g)
					}, newLoadingSettings.cssAnimationDuration)
				})
	} else if (document.getElementById(loadingSettings.ID)) {
		var f = document.getElementById(loadingSettings.ID);
		setTimeout(function() {
			f.classList.add("remove"), setTimeout(function() {
				f.parentNode.removeChild(f)
			}, newLoadingSettings.cssAnimationDuration)
		}, i)
	}
}

function NotiflixLoadingChange(t) {
	if (document.getElementById(loadingSettings.ID))
		if (0 < (t = t.toString().length > newLoadingSettings.messageMaxLength ? notiflixPlaintext(t).toString().substring(0,
				newLoadingSettings.messageMaxLength) + "..." : notiflixPlaintext(t).toString()).length) {
			var e = document.getElementById(loadingSettings.ID).getElementsByTagName("p")[0];
			if (void 0 !== e) e.innerHTML = t;
			else {
				var n = document.createElement("p");
				n.id = newLoadingSettings.messageID, n.className = "loading-message new", n.style.color = newLoadingSettings.messageColor,
					n.style.fontSize = newLoadingSettings.messageFontSize;
				var i = parseInt(newLoadingSettings.svgSize.slice(0, -2)),
					a = Math.round(i - i / 3).toString() + "px";
				n.style.top = a;
				var o = (1.2 * parseInt(newLoadingSettings.messageFontSize.slice(0, 2))).toString() + "px";
				n.style.height = o, n.innerHTML = t, document.getElementById(loadingSettings.ID).appendChild(n);
				var s = document.getElementById(loadingSettings.ID).getElementsByTagName("div")[0],
					r = "-" + Math.round(i - i / 3).toString() + "px";
				s.style.top = r
			}
		} else console.error("Notiflix Error: Where is the new message?")
}

function notiflixReportSvgSuccess(t, e) {
	return t || (t = "110px"), e || (e = "#00b462"), '<svg id="NXReportSuccess" fill="' + e + '" width="' + t +
		'" height="' + t +
		'" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@-webkit-keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportSuccess *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportSuccess4{fill: inherit;-webkit-animation-name: NXReportSuccess4-animation;animation-name: NXReportSuccess4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportSuccess6{fill: inherit;-webkit-animation-name: NXReportSuccess6-animation;animation-name: NXReportSuccess6-animation;opacity: 1;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess3{-webkit-animation-name: NXReportSuccess3-animation;animation-name: NXReportSuccess3-animation;-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess5{-webkit-animation-name: NXReportSuccess5-animation;animation-name: NXReportSuccess5-animation;-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}</style><g id="NXReportSuccess1"><g id="NXReportSuccess2"><g id="NXReportSuccess3" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportSuccess4"/></g><g id="NXReportSuccess5" data-animator-group="true" data-animator-type="2"><path d="M88.27 35.39l-35.47 39.9 -21.37 -17.09c-0.98,-0.81 -2.44,-0.63 -3.24,0.36 -0.79,0.99 -0.63,2.44 0.36,3.24l23.08 18.46c0.43,0.34 0.93,0.51 1.44,0.51 0.64,0 1.27,-0.26 1.74,-0.78l36.91 -41.53c0.86,-0.96 0.76,-2.42 -0.19,-3.26 -0.95,-0.86 -2.41,-0.77 -3.26,0.19z" id="NXReportSuccess6"/></g></g></g></svg>'
}

function notiflixReportSvgFailure(t, e) {
	return t || (t = "110px"), e || (e = "#f44336"), '<svg id="NXReportFailure" fill=" ' + e + '" width="' + t +
		'" height="' + t +
		'" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportFailure *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportFailure6{fill:inherit;-webkit-animation-name: NXReportFailure6-animation;animation-name: NXReportFailure6-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportFailure5{-webkit-animation-name: NXReportFailure5-animation;animation-name: NXReportFailure5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure3{-webkit-animation-name: NXReportFailure3-animation;animation-name: NXReportFailure3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure4{fill:inherit;-webkit-animation-name: NXReportFailure4-animation;animation-name: NXReportFailure4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}</style><g id="NXReportFailure1"><g id="NXReportFailure2"><g id="NXReportFailure3" data-animator-group="true" data-animator-type="2"><path d="M4.35 34.95c0,-16.82 13.78,-30.6 30.6,-30.6l50.1 0c16.82,0 30.6,13.78 30.6,30.6l0 50.1c0,16.82 -13.78,30.6 -30.6,30.6l-50.1 0c-16.82,0 -30.6,-13.78 -30.6,-30.6l0 -50.1zm30.6 85.05l50.1 0c19.22,0 34.95,-15.73 34.95,-34.95l0 -50.1c0,-19.22 -15.73,-34.95 -34.95,-34.95l-50.1 0c-19.22,0 -34.95,15.73 -34.95,34.95l0 50.1c0,19.22 15.73,34.95 34.95,34.95z" id="NXReportFailure4"/></g><g id="NXReportFailure5" data-animator-group="true" data-animator-type="2"><path d="M82.4 37.6c-0.9,-0.9 -2.37,-0.9 -3.27,0l-19.13 19.13 -19.14 -19.13c-0.9,-0.9 -2.36,-0.9 -3.26,0 -0.9,0.9 -0.9,2.35 0,3.26l19.13 19.14 -19.13 19.13c-0.9,0.9 -0.9,2.37 0,3.27 0.45,0.45 1.04,0.68 1.63,0.68 0.59,0 1.18,-0.23 1.63,-0.68l19.14 -19.14 19.13 19.14c0.45,0.45 1.05,0.68 1.64,0.68 0.58,0 1.18,-0.23 1.63,-0.68 0.9,-0.9 0.9,-2.37 0,-3.27l-19.14 -19.13 19.14 -19.14c0.9,-0.91 0.9,-2.36 0,-3.26z" id="NXReportFailure6"/></g></g></g></svg>'
}

function notiflixReportSvgWarning(t, e) {
	return t || (t = "110px"), e || (e = "#f2bd1d"), '<svg id="NXReportWarning" fill="' + e + '" width="' + t +
		'" height="' + t +
		'" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@-webkit-keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportWarning *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportWarning3{fill: inherit;-webkit-animation-name: NXReportWarning3-animation;animation-name: NXReportWarning3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning5{fill: inherit;-webkit-animation-name: NXReportWarning5-animation;animation-name: NXReportWarning5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning4{-webkit-animation-name: NXReportWarning4-animation;animation-name: NXReportWarning4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}#NXReportWarning2{-webkit-animation-name: NXReportWarning2-animation;animation-name: NXReportWarning2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportWarning1"><g id="NXReportWarning2" data-animator-group="true" data-animator-type="2"><path d="M115.46 106.15l-54.04 -93.8c-0.61,-1.06 -2.23,-1.06 -2.84,0l-54.04 93.8c-0.62,1.07 0.21,2.29 1.42,2.29l108.08 0c1.21,0 2.04,-1.22 1.42,-2.29zm-50.29 -95.95l54.04 93.8c2.28,3.96 -0.65,8.78 -5.17,8.78l-108.08 0c-4.52,0 -7.45,-4.82 -5.17,-8.78l54.04 -93.8c2.28,-3.95 8.03,-4 10.34,0z" id="NXReportWarning3"/></g><g id="NXReportWarning4" data-animator-group="true" data-animator-type="2"><path d="M57.83 94.01c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -3.2c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 3.2zm0 -14.15c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -40.65c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 40.65z" id="NXReportWarning5"/></g></g></svg>'
}

function notiflixReportSvgInfo(t, e) {
	return t || (t = "110px"), e || (e = "#00bcd4"), '<svg id="NXReportInfo" fill="' + e + '" width="' + t + '" height="' +
		t +
		'" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportInfo *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportInfo3{fill:inherit;-webkit-animation-name: NXReportInfo3-animation;animation-name: NXReportInfo3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo5{fill:inherit;-webkit-animation-name: NXReportInfo5-animation;animation-name: NXReportInfo5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo2{-webkit-animation-name: NXReportInfo2-animation;animation-name: NXReportInfo2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportInfo4{-webkit-animation-name: NXReportInfo4-animation;animation-name: NXReportInfo4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportInfo1"><g id="NXReportInfo2" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportInfo3"/></g><g id="NXReportInfo4" data-animator-group="true" data-animator-type="2"><path d="M57.75 43.85c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 48.18c0,1.24 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1.01 -2.25,-2.25l0 -48.18zm0 -15.88c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 3.32c0,1.25 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1 -2.25,-2.25l0 -3.32z" id="NXReportInfo5"/></g></g></svg>'
}

function notiflixLoadingSvgStandard(t, e) {
	return t || (t = "60px"), e || (e = "#00b462"), '<svg stroke="' + e + '" width="' + t + '" height="' + t +
		'" viewBox="0 0 38 38" style="transform:scale(0.8);" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
}

function notiflixLoadingSvgHourglass(t, e) {
	return t || (t = "60px"), e || (e = "#00b462"), '<svg id="NXLoadingHourglass" fill="' + e + '" width="' + t +
		'" height="' + t +
		'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@-webkit-keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}@keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}#NXLoadingHourglass *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXhourglass7{fill: inherit;}#NXhourglass1{-webkit-animation-name: NXhourglass1-animation;animation-name: NXhourglass1-animation;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;transform-box: fill-box;}#NXhourglass3{-webkit-animation-name: NXhourglass3-animation;animation-name: NXhourglass3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}#NXhourglass5{-webkit-animation-name: NXhourglass5-animation;animation-name: NXhourglass5-animation;-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}g#NXhourglass5,#NXhourglass3{fill: inherit;opacity: .4;}</style><g id="NXhourglass1" data-animator-group="true" data-animator-type="1"><g id="NXhourglass2"><g id="NXhourglass3" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,132.08 65.62,163.22 134.38,163.22 134.38,132.08 " id="NXhourglass4"/></g><g id="NXhourglass5" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,67.92 65.62,36.78 134.38,36.78 134.38,67.92" id="NXhourglass6"/></g> <path d="M51.14 38.89l8.33 0 0 14.93c0,15.1 8.29,28.99 23.34,39.1 1.88,1.25 3.04,3.97 3.04,7.08 0,3.11 -1.16,5.83 -3.04,7.09 -15.05,10.1 -23.34,23.99 -23.34,39.09l0 14.93 -8.33 0c-2.68,0 -4.86,2.18 -4.86,4.86 0,2.69 2.18,4.86 4.86,4.86l97.72 0c2.68,0 4.86,-2.17 4.86,-4.86 0,-2.68 -2.18,-4.86 -4.86,-4.86l-8.33 0 0 -14.93c0,-15.1 -8.29,-28.99 -23.34,-39.09 -1.88,-1.26 -3.04,-3.98 -3.04,-7.09 0,-3.11 1.16,-5.83 3.04,-7.08 15.05,-10.11 23.34,-24 23.34,-39.1l0 -14.93 8.33 0c2.68,0 4.86,-2.18 4.86,-4.86 0,-2.69 -2.18,-4.86 -4.86,-4.86l-97.72 0c-2.68,0 -4.86,2.17 -4.86,4.86 0,2.68 2.18,4.86 4.86,4.86zm79.67 14.93c0,15.87 -11.93,26.25 -19.04,31.03 -4.6,3.08 -7.34,8.75 -7.34,15.15 0,6.41 2.74,12.07 7.34,15.15 7.11,4.78 19.04,15.16 19.04,31.03l0 14.93 -61.62 0 0 -14.93c0,-15.87 11.93,-26.25 19.04,-31.02 4.6,-3.09 7.34,-8.75 7.34,-15.16 0,-6.4 -2.74,-12.07 -7.34,-15.15 -7.11,-4.78 -19.04,-15.16 -19.04,-31.03l0 -14.93 61.62 0 0 14.93z" id="NXhourglass7"/></g></g></svg>'
}

function notiflixLoadingSvgCircle(t, e) {
	return t || (t = "60px"), e || (e = "#00b462"), '<svg id="NXLoadingCircle" width="' + t + '" height="' + t +
		'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50" xml:space="preserve" version="1.1"><style>#NXLoadingCircle{-webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: ' +
		t +
		"; -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; width: " +
		t +
		'; position: absolute; top: 0; left: 0; margin: auto;}.notiflix-loader-circle-path{stroke-dasharray: 150,200; stroke-dashoffset: -10; -webkit-animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; stroke-linecap: round;}@-webkit-keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@-webkit-keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}@keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}</style><circle class="notiflix-loader-circle-path" cx="50" cy="50" r="20" fill="none" stroke="' +
		e + '" stroke-width="2"/></svg>'
}

function notiflixLoadingSvgArrows(t, e) {
	return t || (t = "60px"), e || (e = "#00b462"), '<svg id="NXLoadingArrows" fill="' + e + '" width="' + t +
		'" height="' + t +
		'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 128 128" xml:space="preserve"><g><path fill="inherit" fill-opacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1.5s" repeatCount="indefinite"></animateTransform></g></svg>'
}

function notiflixLoadingSvgDots(t, e) {
	return t || (t = "60px"), e || (e = "#00b462"), '<svg id="NXLoadingDots" fill="' + e + '" width="' + t + '" height="' +
		t +
		'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(25 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.239 0.239)"><animateTransform attributeName="transform" type="scale" begin="-0.266s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(50 50)"> <circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.00152 0.00152)"><animateTransform attributeName="transform" type="scale" begin="-0.133s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(75 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.299 0.299)"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g></svg>'
}

function notiflixLoadingSvgPulse(t, e) {
	return t || (t = "60px"), e || (e = "#00b462"), '<svg stroke="' + e + '" width="' + t + '" height="' + t +
		'" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>'
}

function notiflixLoadingSvgNotiflix(t, e, n) {
	return t || (t = "60px"), e || (e = "#f8f8f8"), n || (n = "#00b462"),
		'<svg id="NXLoadingNotiflixLib" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' + t + '" height="' +
		t +
		'" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.line{stroke:' +
		e + ";stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.line{fill:none;}.dot{fill:" +
		n + ";stroke:" + n +
		';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.n{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-n;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:0s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-n{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.x2,.x1{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-x;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:.2s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-x{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.dot{animation-name: notiflix-dot;animation-timing-function: ease-in-out;animation-duration: 1.25s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-dot{0%{stroke-width: 0;}50%{stroke-width: 12;}100%{stroke-width: 0;}}</style></defs><g><path class="dot" d="M47.97 135.05c3.59,0 6.5,2.91 6.5,6.5 0,3.59 -2.91,6.5 -6.5,6.5 -3.59,0 -6.5,-2.91 -6.5,-6.5 0,-3.59 2.91,-6.5 6.5,-6.5z"/><path class="line n" d="M10.14 144.76l0 -0.22 0 -0.96 0 -56.03c0,-5.68 -4.54,-41.36 37.83,-41.36 42.36,0 37.82,35.68 37.82,41.36l0 57.21"/><path class="line x1" d="M115.06 144.49c24.98,-32.68 49.96,-65.35 74.94,-98.03"/><path class="line x2" d="M114.89 46.6c25.09,32.58 50.19,65.17 75.29,97.75"/></g></svg>'
}
