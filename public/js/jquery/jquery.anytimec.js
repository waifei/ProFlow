﻿/*
 * http://www.ama3.com/anytime/
 * 
 * anytimec.js 4.1112K (anytime.js 4.1112K)
 * Copyright 2008-2011 Andrew M. Andrews III (www.AMA3.com). Some Rights
 * Reserved. This work licensed under the Creative Commons Attribution-
 * Noncommercial-Share Alike 3.0 Unported License except in jurisdicitons
 * for which the license has been ported by Creative Commons International,
 * where the work is licensed under the applicable ported license instead.
 * For a copy of the unported license, visit
 * http://creativecommons.org/licenses/by-nc-sa/3.0/
 * or send a letter to Creative Commons, 171 Second Street, Suite 300,
 * San Francisco, California, 94105, USA.  For ported versions of the
 * license, visit http://creativecommons.org/international/
 * Any+Time is a trademark of Andrew M. Andrews III. */

var AnyTime = {
	pad : function(a, b) {
		var c = String(Math.abs(a));
		while (c.length < b)
			c = "0" + c;
		if (a < 0)
			c = "-" + c;
		return c
	}
};
(function(a) {
	var b = 24 * 60 * 60 * 1e3;
	var c = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	var d = null;
	var e = false;
	var f = navigator.userAgent.indexOf("MSIE 6") > 0;
	var g = navigator.userAgent.indexOf("MSIE 7") > 0;
	var h = [];
	jQuery.prototype.AnyTime_picker = function(a) {
		return this.each(function(b) {
			AnyTime.picker(this.id, a)
		})
	};
	jQuery.prototype.AnyTime_noPicker = function() {
		return this.each(function(a) {
			AnyTime.noPicker(this.id)
		})
	};
	jQuery.prototype.AnyTime_setEarliest = function(a) {
		return this.each(function(b) {
			AnyTime.setEarliest(this.id, a)
		})
	};
	jQuery.prototype.AnyTime_setLatest = function(a) {
		return this.each(function(b) {
			AnyTime.setLatest(this.id, a)
		})
	};
	jQuery.prototype.AnyTime_height = function(a) {
		return f ? Number(this.css("height").replace(/[^0-9]/g, "")) : this
				.outerHeight(a)
	};
	jQuery.prototype.AnyTime_width = function(a) {
		return f ? 1 + Number(this.css("width").replace(/[^0-9]/g, "")) : this
				.outerWidth(a)
	};
	jQuery.prototype.AnyTime_current = function(a, b) {
		if (a) {
			this
					.removeClass("AnyTime-out-btn ui-state-default ui-state-disabled ui-state-highlight");
			this
					.addClass("AnyTime-cur-btn ui-state-default ui-state-highlight")
		} else {
			this.removeClass("AnyTime-cur-btn ui-state-highlight");
			if (!b)
				this.addClass("AnyTime-out-btn ui-state-disabled");
			else
				this.removeClass("AnyTime-out-btn ui-state-disabled")
		}
	};
	jQuery.prototype.AnyTime_clickCurrent = function() {
		this.find(".AnyTime-cur-btn").triggerHandler("click")
	};
	a(document).ready(function() {
		if (f) {
			d = a('<iframe frameborder="0" scrolling="no"></iframe>');
			d.src = "javascript:'<html></html>';";
			a(d).css({
				display : "block",
				height : "1px",
				left : "0",
				top : "0",
				width : "1px",
				zIndex : 0
			});
			a(document.body).append(d)
		}
		for ( var b in h)
			if (!Array.prototype[b])
				h[b].onReady();
		e = true
	});
	AnyTime.Converter = function(b) {
		var c = 0;
		var d = 9;
		var e = 9;
		var f = 6;
		var g = 3;
		var h = Number.MIN_VALUE;
		var i = Number.MIN_VALUE;
		var j = Number.MIN_VALUE;
		var k = -1;
		var l = Number.MIN_VALUE;
		var m = -1;
		var n = false;
		this.fmt = "%Y-%m-%d %T";
		this.dAbbr = [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ];
		this.dNames = [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta",
				"Sexta", "Sábado" ];
		this.eAbbr = [ "BCE", "CE" ];
		this.mAbbr = [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago",
				"Set", "Out", "Nov", "Dez" ];
		this.mNames = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
				"Julho", "Agosto", "Setembro", "Outubro", "Novembro",
				"Dezembro" ];
		this.baseYear = null;
		this.dAt = function(a, b) {
			return a.charCodeAt(b) >= "0".charCodeAt(0)
					&& a.charCodeAt(b) <= "9".charCodeAt(0)
		};
		this.format = function(a) {
			var b = new Date(a.getTime());
			if (h == Number.MIN_VALUE && j != Number.MIN_VALUE)
				b.setTime(b.getTime() + b.getTimezoneOffset() * 6e4 + j * 6e4);
			var d;
			var e = "";
			for ( var f = 0; f < c; f++) {
				if (this.fmt.charAt(f) != "%")
					e += this.fmt.charAt(f);
				else {
					var g = this.fmt.charAt(f + 1);
					switch (g) {
					case "a":
						e += this.dAbbr[b.getDay()];
						break;
					case "B":
						if (b.getFullYear() < 0)
							e += this.eAbbr[0];
						break;
					case "b":
						e += this.mAbbr[b.getMonth()];
						break;
					case "C":
						if (b.getFullYear() > 0)
							e += this.eAbbr[1];
						break;
					case "c":
						e += b.getMonth() + 1;
						break;
					case "d":
						d = b.getDate();
						if (d < 10)
							e += "0";
						e += String(d);
						break;
					case "D":
						d = String(b.getDate());
						e += d;
						if (d.length == 2 && d.charAt(0) == "1")
							e += "th";
						else {
							switch (d.charAt(d.length - 1)) {
							case "1":
								e += "st";
								break;
							case "2":
								e += "nd";
								break;
							case "3":
								e += "rd";
								break;
							default:
								e += "th";
								break
							}
						}
						break;
					case "E":
						e += this.eAbbr[b.getFullYear() < 0 ? 0 : 1];
						break;
					case "e":
						e += b.getDate();
						break;
					case "H":
						d = b.getHours();
						if (d < 10)
							e += "0";
						e += String(d);
						break;
					case "h":
					case "I":
						d = b.getHours() % 12;
						if (d == 0)
							e += "12";
						else {
							if (d < 10)
								e += "0";
							e += String(d)
						}
						break;
					case "i":
						d = b.getMinutes();
						if (d < 10)
							e += "0";
						e += String(d);
						break;
					case "k":
						e += b.getHours();
						break;
					case "l":
						d = b.getHours() % 12;
						if (d == 0)
							e += "12";
						else
							e += String(d);
						break;
					case "M":
						e += this.mNames[b.getMonth()];
						break;
					case "m":
						d = b.getMonth() + 1;
						if (d < 10)
							e += "0";
						e += String(d);
						break;
					case "p":
						e += b.getHours() < 12 ? "AM" : "PM";
						break;
					case "r":
						d = b.getHours() % 12;
						if (d == 0)
							e += "12:";
						else {
							if (d < 10)
								e += "0";
							e += String(d) + ":"
						}
						d = b.getMinutes();
						if (d < 10)
							e += "0";
						e += String(d) + ":";
						d = b.getSeconds();
						if (d < 10)
							e += "0";
						e += String(d);
						e += b.getHours() < 12 ? "AM" : "PM";
						break;
					case "S":
					case "s":
						d = b.getSeconds();
						if (d < 10)
							e += "0";
						e += String(d);
						break;
					case "T":
						d = b.getHours();
						if (d < 10)
							e += "0";
						e += String(d) + ":";
						d = b.getMinutes();
						if (d < 10)
							e += "0";
						e += String(d) + ":";
						d = b.getSeconds();
						if (d < 10)
							e += "0";
						e += String(d);
						break;
					case "W":
						e += this.dNames[b.getDay()];
						break;
					case "w":
						e += b.getDay();
						break;
					case "Y":
						e += AnyTime.pad(b.getFullYear(), 4);
						break;
					case "y":
						d = b.getFullYear() % 100;
						e += AnyTime.pad(d, 2);
						break;
					case "Z":
						e += AnyTime.pad(Math.abs(b.getFullYear()), 4);
						break;
					case "z":
						e += Math.abs(b.getFullYear());
						break;
					case "%":
						e += "%";
						break;
					case "#":
						d = h != Number.MIN_VALUE ? h
								: j == Number.MIN_VALUE ? 0 - b
										.getTimezoneOffset() : j;
						if (d >= 0)
							e += "+";
						e += d;
						break;
					case "@":
						d = h != Number.MIN_VALUE ? h
								: j == Number.MIN_VALUE ? 0 - b
										.getTimezoneOffset() : j;
						if (AnyTime.utcLabel && AnyTime.utcLabel[d]) {
							if (k > 0 && k < AnyTime.utcLabel[d].length)
								e += AnyTime.utcLabel[d][k];
							else
								e += AnyTime.utcLabel[d][0];
							break
						}
						e += "UTC";
						g = ":";
					case "+":
					case "-":
					case ":":
					case ";":
						d = h != Number.MIN_VALUE ? h
								: j == Number.MIN_VALUE ? 0 - b
										.getTimezoneOffset() : j;
						if (d < 0)
							e += "-";
						else
							e += "+";
						d = Math.abs(d);
						e += g == "+" || g == ":" ? AnyTime.pad(Math
								.floor(d / 60), 2) : Math.floor(d / 60);
						if (g == ":" || g == ";")
							e += ":";
						e += AnyTime.pad(d % 60, 2);
						break;
					case "f":
					case "j":
					case "U":
					case "u":
					case "V":
					case "v":
					case "X":
					case "x":
						throw "%" + g + " not implemented by AnyTime.Converter";
					default:
						e += this.fmt.substr(f, 2)
					}
					f++
				}
			}
			return e
		};
		this.getUtcParseOffsetCaptured = function() {
			return i
		};
		this.getUtcParseOffsetSubIndex = function() {
			return m
		};
		this.parse = function(a) {
			i = l;
			m = -1;
			var b = 1;
			var h = new Date(4, 0, 1, 0, 0, 0, 0);
			var j = a.length;
			var k = 0;
			var o = 1, p = l;
			var q, r, s, t, u;
			for ( var v = 0; v < c; v++) {
				if (this.fmt.charAt(v) == "%") {
					var w = this.fmt.charAt(v + 1);
					switch (w) {
					case "a":
						r = false;
						for (t = 0; k + t < j; t++) {
							s = a.substr(k, t);
							for (q = 0; q < 12; q++)
								if (this.dAbbr[q] == s) {
									r = true;
									k += t;
									break
								}
							if (r)
								break
						}
						if (!r)
							throw "dia da semana desconhecido: " + a.substr(k);
						break;
					case "B":
						t = this.eAbbr[0].length;
						if (k + t <= j && a.substr(k, t) == this.eAbbr[0]) {
							b = -1;
							k += t
						}
						break;
					case "b":
						r = false;
						for (t = 0; k + t < j; t++) {
							s = a.substr(k, t);
							for (q = 0; q < 12; q++)
								if (this.mAbbr[q] == s) {
									h.setMonth(q);
									r = true;
									k += t;
									break
								}
							if (r)
								break
						}
						if (!r)
							throw "mês desconhecido: " + a.substr(k);
						break;
					case "C":
						t = this.eAbbr[1].length;
						if (k + t <= j && a.substr(k, t) == this.eAbbr[1])
							k += t;
						break;
					case "c":
						if (k + 1 < j && this.dAt(a, k + 1)) {
							h.setMonth((Number(a.substr(k, 2)) - 1) % 12);
							k += 2
						} else {
							h.setMonth((Number(a.substr(k, 1)) - 1) % 12);
							k++
						}
						break;
					case "D":
						if (k + 1 < j && this.dAt(a, k + 1)) {
							h.setDate(Number(a.substr(k, 2)));
							k += 4
						} else {
							h.setDate(Number(a.substr(k, 1)));
							k += 3
						}
						break;
					case "d":
						h.setDate(Number(a.substr(k, 2)));
						k += 2;
						break;
					case "E":
						t = this.eAbbr[0].length;
						if (k + t <= j && a.substr(k, t) == this.eAbbr[0]) {
							b = -1;
							k += t
						} else if (k + (t = this.eAbbr[1].length) <= j
								&& a.substr(k, t) == this.eAbbr[1])
							k += t;
						else
							throw "unknown era: " + a.substr(k);
						break;
					case "e":
						if (k + 1 < j && this.dAt(a, k + 1)) {
							h.setDate(Number(a.substr(k, 2)));
							k += 2
						} else {
							h.setDate(Number(a.substr(k, 1)));
							k++
						}
						break;
					case "f":
						k += 6;
						break;
					case "H":
						h.setHours(Number(a.substr(k, 2)));
						k += 2;
						break;
					case "h":
					case "I":
						h.setHours(Number(a.substr(k, 2)));
						k += 2;
						break;
					case "i":
						h.setMinutes(Number(a.substr(k, 2)));
						k += 2;
						break;
					case "k":
						if (k + 1 < j && this.dAt(a, k + 1)) {
							h.setHours(Number(a.substr(k, 2)));
							k += 2
						} else {
							h.setHours(Number(a.substr(k, 1)));
							k++
						}
						break;
					case "l":
						if (k + 1 < j && this.dAt(a, k + 1)) {
							h.setHours(Number(a.substr(k, 2)));
							k += 2
						} else {
							h.setHours(Number(a.substr(k, 1)));
							k++
						}
						break;
					case "M":
						r = false;
						for (t = g; k + t <= j; t++) {
							if (t > e)
								break;
							s = a.substr(k, t);
							for (q = 0; q < 12; q++) {
								if (this.mNames[q] == s) {
									h.setMonth(q);
									r = true;
									k += t;
									break
								}
							}
							if (r)
								break
						}
						break;
					case "m":
						h.setMonth((Number(a.substr(k, 2)) - 1) % 12);
						k += 2;
						break;
					case "p":
						if (h.getHours() == 12) {
							if (a.charAt(k) == "A")
								h.setHours(0)
						} else if (a.charAt(k) == "P")
							h.setHours(h.getHours() + 12);
						k += 2;
						break;
					case "r":
						h.setHours(Number(a.substr(k, 2)));
						h.setMinutes(Number(a.substr(k + 3, 2)));
						h.setSeconds(Number(a.substr(k + 6, 2)));
						if (h.getHours() == 12) {
							if (a.charAt(k) == "A")
								h.setHours(0)
						} else if (a.charAt(k) == "P")
							h.setHours(h.getHours() + 12);
						k += 10;
						break;
					case "S":
					case "s":
						h.setSeconds(Number(a.substr(k, 2)));
						k += 2;
						break;
					case "T":
						h.setHours(Number(a.substr(k, 2)));
						h.setMinutes(Number(a.substr(k + 3, 2)));
						h.setSeconds(Number(a.substr(k + 6, 2)));
						k += 8;
						break;
					case "W":
						r = false;
						for (t = f; k + t <= j; t++) {
							if (t > d)
								break;
							s = a.substr(k, t);
							for (q = 0; q < 7; q++) {
								if (this.dNames[q] == s) {
									r = true;
									k += t;
									break
								}
							}
							if (r)
								break
						}
						break;
					case "w":
						k += 1;
						break;
					case "Y":
						q = 4;
						if (a.substr(k, 1) == "-")
							q++;
						h.setFullYear(Number(a.substr(k, q)));
						k += q;
						break;
					case "y":
						q = 2;
						if (a.substr(k, 1) == "-")
							q++;
						u = Number(a.substr(k, q));
						if (typeof this.baseYear == "number")
							u += this.baseYear;
						else if (u < 70)
							u += 2e3;
						else
							u += 1900;
						h.setFullYear(u);
						k += q;
						break;
					case "Z":
						h.setFullYear(Number(a.substr(k, 4)));
						k += 4;
						break;
					case "z":
						q = 0;
						while (k < j && this.dAt(a, k))
							q = q * 10 + Number(a.charAt(k++));
						h.setFullYear(q);
						break;
					case "#":
						if (a.charAt(k++) == "-")
							o = -1;
						for (p = 0; k < j
								&& String(q = Number(a.charAt(k))) == a
										.charAt(k); k++)
							p = p * 10 + q;
						p *= o;
						break;
					case "@":
						m = -1;
						if (AnyTime.utcLabel) {
							r = false;
							for (p in AnyTime.utcLabel)
								if (!Array.prototype[p]) {
									for (q = 0; q < AnyTime.utcLabel[p].length; q++) {
										s = AnyTime.utcLabel[p][q];
										t = s.length;
										if (k + t <= j && a.substr(k, t) == s) {
											k += t;
											r = true;
											break
										}
									}
									if (r)
										break
								}
							if (r) {
								m = q;
								p = Number(p);
								break
							}
						}
						if (k + 9 < j || a.substr(k, 3) != "UTC")
							throw "unknown time zone: " + a.substr(k);
						k += 3;
						w = ":";
					case "-":
					case "+":
					case ":":
					case ";":
						if (a.charAt(k++) == "-")
							o = -1;
						p = Number(a.charAt(k));
						if (w == "+"
								|| w == ":"
								|| k + 3 < j
								&& String(Number(a.charAt(k + 3))) !== a
										.charAt(k + 3))
							p = p * 10 + Number(a.charAt(++k));
						p *= 60;
						if (w == ":" || w == ";")
							k++;
						p = (p + Number(a.substr(++k, 2))) * o;
						k += 2;
						break;
					case "j":
					case "U":
					case "u":
					case "V":
					case "v":
					case "X":
					case "x":
						throw "%" + this.fmt.charAt(v + 1)
								+ " not implemented by AnyTime.Converter";
					case "%":
					default:
						throw "%" + this.fmt.charAt(v + 1)
								+ " reserved for future use";
						break
					}
					v++
				} else if (this.fmt.charAt(v) != a.charAt(k))
					throw a + ' is not in "' + this.fmt + '" format';
				else
					k++
			}
			if (b < 0)
				h.setFullYear(0 - h.getFullYear());
			if (p != Number.MIN_VALUE) {
				if (n)
					i = p;
				else
					h.setTime(h.getTime() - p * 6e4 - h.getTimezoneOffset()
							* 6e4)
			}
			return h
		};
		this.setUtcFormatOffsetAlleged = function(a) {
			var b = h;
			h = a;
			return b
		};
		this.setUtcFormatOffsetSubIndex = function(a) {
			var b = k;
			k = a;
			return b
		};
		(function(h) {
			var i, k;
			b = jQuery.extend(true, {}, b || {});
			if (b.baseYear)
				h.baseYear = Number(b.baseYear);
			if (b.format)
				h.fmt = b.format;
			c = h.fmt.length;
			if (b.dayAbbreviations)
				h.dAbbr = a.makeArray(b.dayAbbreviations);
			if (b.dayNames) {
				h.dNames = a.makeArray(b.dayNames);
				d = 1;
				f = 1e3;
				for (i = 0; i < 7; i++) {
					k = h.dNames[i].length;
					if (k > d)
						d = k;
					if (k < f)
						f = k
				}
			}
			if (b.eraAbbreviations)
				h.eAbbr = a.makeArray(b.eraAbbreviations);
			if (b.monthAbbreviations)
				h.mAbbr = a.makeArray(b.monthAbbreviations);
			if (b.monthNames) {
				h.mNames = a.makeArray(b.monthNames);
				e = 1;
				g = 1e3;
				for (i = 0; i < 12; i++) {
					k = h.mNames[i].length;
					if (k > e)
						e = k;
					if (k < g)
						g = k
				}
			}
			if (typeof b.utcFormatOffsetImposed != "undefined")
				j = b.utcFormatOffsetImposed;
			if (typeof b.utcParseOffsetAssumed != "undefined")
				l = b.utcParseOffsetAssumed;
			if (b.utcParseOffsetCapture)
				n = true
		})(this)
	};
	AnyTime.noPicker = function(a) {
		if (h[a]) {
			h[a].cleanup();
			delete h[a]
		}
	};
	AnyTime.picker = function(j, k) {
		if (h[j])
			throw 'Cannot create another AnyTime.picker for "' + j + '"';
		var l = null;
		h[j] = {
			twelveHr : false,
			ajaxOpts : null,
			denyTab : true,
			askEra : false,
			cloak : null,
			conv : null,
			bMinW : 0,
			bMinH : 0,
			dMinW : 0,
			dMinH : 0,
			div : null,
			dB : null,
			dD : null,
			dY : null,
			dMo : null,
			dDoM : null,
			hDoM : null,
			hMo : null,
			hTitle : null,
			hY : null,
			dT : null,
			dH : null,
			dM : null,
			dS : null,
			dO : null,
			earliest : null,
			fBtn : null,
			fDOW : 0,
			hBlur : null,
			hClick : null,
			hFocus : null,
			hKeydown : null,
			hKeypress : null,
			id : null,
			inp : null,
			latest : null,
			lastAjax : null,
			lostFocus : false,
			lX : "X",
			lY : "Ano",
			lO : "Time Zone",
			oBody : null,
			oConv : null,
			oCur : null,
			oDiv : null,
			oLab : null,
			oListMinW : 0,
			oMinW : 0,
			oSel : null,
			offMin : Number.MIN_VALUE,
			offSI : -1,
			offStr : "",
			pop : true,
			time : null,
			tMinW : 0,
			tMinH : 0,
			url : null,
			wMinW : 0,
			wMinH : 0,
			yAhead : null,
			y0XXX : null,
			yCur : null,
			yDiv : null,
			yLab : null,
			yNext : null,
			yPast : null,
			yPrior : null,
			initialize : function(b) {
				l = this;
				this.id = "AnyTime--"
						+ b.replace(/[^-_.A-Za-z0-9]/g, "--AnyTime--");
				k = jQuery.extend(true, {}, k || {});
				k.utcParseOffsetCapture = true;
				this.conv = new AnyTime.Converter(k);
				if (k.placement) {
					if (k.placement == "inline")
						this.pop = false;
					else if (k.placement != "popup")
						throw "unknown placement: " + k.placement
				}
				if (k.ajaxOptions) {
					this.ajaxOpts = jQuery.extend({}, k.ajaxOptions);
					if (!this.ajaxOpts.success)
						this.ajaxOpts.success = function(a, b) {
							l.inp.val(a)
						}
				}
				if (k.earliest) {
					if (typeof k.earliest.getTime == "function")
						this.earliest = k.earliest.getTime();
					else
						this.earliest = this.conv.parse(k.earliest.toString())
				}
				if (k.firstDOW) {
					if (k.firstDOW < 0 || k.firstDOW > 6)
						throw new Exception("illegal firstDOW: " + k.firstDOW);
					this.fDOW = k.firstDOW
				}
				if (k.latest) {
					if (typeof k.latest.getTime == "function")
						this.latest = k.latest.getTime();
					else
						this.latest = this.conv.parse(k.latest.toString())
				}
				this.lX = k.labelDismiss || "X";
				this.lY = k.labelYear || "Ano";
				this.lO = k.labelTimeZone || "Time Zone";
				var f;
				var g;
				var h;
				var i = 0;
				var j = this.conv.fmt;
				if (typeof k.askEra != "undefined")
					this.askEra = k.askEra;
				else
					this.askEra = j.indexOf("%B") >= 0 || j.indexOf("%C") >= 0
							|| j.indexOf("%E") >= 0;
				var m = j.indexOf("%Y") >= 0 || j.indexOf("%y") >= 0
						|| j.indexOf("%Z") >= 0 || j.indexOf("%z") >= 0;
				var n = j.indexOf("%b") >= 0 || j.indexOf("%c") >= 0
						|| j.indexOf("%M") >= 0 || j.indexOf("%m") >= 0;
				var o = j.indexOf("%D") >= 0 || j.indexOf("%d") >= 0
						|| j.indexOf("%e") >= 0;
				var p = m || n || o;
				this.twelveHr = j.indexOf("%h") >= 0 || j.indexOf("%I") >= 0
						|| j.indexOf("%l") >= 0 || j.indexOf("%r") >= 0;
				var q = this.twelveHr || j.indexOf("%H") >= 0
						|| j.indexOf("%k") >= 0 || j.indexOf("%T") >= 0;
				var r = j.indexOf("%i") >= 0 || j.indexOf("%r") >= 0
						|| j.indexOf("%T") >= 0;
				var s = j.indexOf("%r") >= 0 || j.indexOf("%S") >= 0
						|| j.indexOf("%s") >= 0 || j.indexOf("%T") >= 0;
				if (s && typeof k.askSecond != "undefined")
					s = k.askSecond;
				var t = j.indexOf("%#") >= 0 || j.indexOf("%+") >= 0
						|| j.indexOf("%-") >= 0 || j.indexOf("%:") >= 0
						|| j.indexOf("%;") >= 0 || j.indexOf("%<") >= 0
						|| j.indexOf("%>") >= 0 || j.indexOf("%@") >= 0;
				var u = q || r || s || t;
				if (t)
					this.oConv = new AnyTime.Converter({
						format : k.formatUtcOffset
								|| j.match(/\S*%[-+:;<>#@]\S*/g).join(" ")
					});
				this.inp = a(document.getElementById(b));
				this.div = a('<div class="AnyTime-win AnyTime-pkr ui-widget ui-widget-content ui-corner-all" style="width:0;height:0" id="'
						+ this.id + '" aria-live="off"/>');
				this.inp.after(this.div);
				this.wMinW = this.div.outerWidth(!a.browser.safari);
				this.wMinH = this.div.AnyTime_height(true);
				this.hTitle = a('<h5 class="AnyTime-hdr ui-widget-header ui-corner-top"/>');
				this.div.append(this.hTitle);
				this.dB = a('<div class="AnyTime-body" style="width:0;height:0"/>');
				this.div.append(this.dB);
				this.bMinW = this.dB.outerWidth(true);
				this.bMinH = this.dB.AnyTime_height(true);
				if (k.hideInput)
					this.inp.css({
						border : 0,
						height : "1px",
						margin : 0,
						padding : 0,
						width : "1px"
					});
				g = null;
				var v = null;
				if (this.pop) {
					v = a('<div class="AnyTime-x-btn ui-state-default">'
							+ this.lX + "</div>");
					this.hTitle.append(v);
					v.click(function(a) {
						l.dismiss(a)
					})
				}
				h = "";
				if (p) {
					this.dD = a('<div class="AnyTime-date" style="width:0;height:0"/>');
					this.dB.append(this.dD);
					this.dMinW = this.dD.outerWidth(true);
					this.dMinH = this.dD.AnyTime_height(true);
					if (m) {
						this.yLab = a('<h6 class="AnyTime-lbl AnyTime-lbl-yr">'
								+ this.lY + "</h6>");
						this.dD.append(this.yLab);
						this.dY = a('<ul class="AnyTime-yrs ui-helper-reset" />');
						this.dD.append(this.dY);
						this.yPast = this.btn(this.dY, "<", this.newYear,
								[ "yrs-past" ], "- " + this.lY);
						this.yPrior = this.btn(this.dY, "1", this.newYear,
								[ "yr-prior" ], "-1 " + this.lY);
						this.yCur = this.btn(this.dY, "2", this.newYear,
								[ "yr-cur" ], this.lY);
						this.yCur.removeClass("ui-state-default");
						this.yCur
								.addClass("AnyTime-cur-btn ui-state-default ui-state-highlight");
						this.yNext = this.btn(this.dY, "3", this.newYear,
								[ "yr-next" ], "+1 " + this.lY);
						this.yAhead = this.btn(this.dY, ">", this.newYear,
								[ "yrs-ahead" ], "+ " + this.lY);
						i++
					}
					if (n) {
						h = k.labelMonth || "Mês";
						this.hMo = a('<h6 class="AnyTime-lbl AnyTime-lbl-month">'
								+ h + "</h6>");
						this.dD.append(this.hMo);
						this.dMo = a('<ul class="AnyTime-mons" />');
						this.dD.append(this.dMo);
						for (f = 0; f < 12; f++) {
							var w = this.btn(this.dMo, this.conv.mAbbr[f],
									function(b) {
										var d = a(b.target);
										if (d.hasClass("AnyTime-out-btn"))
											return;
										var e = b.target.AnyTime_month;
										var f = new Date(this.time.getTime());
										if (f.getDate() > c[e])
											f.setDate(c[e]);
										f.setMonth(e);
										this.set(f);
										this.upd(d)
									}, [ "mon", "mon" + String(f + 1) ], h
											+ " " + this.conv.mNames[f]);
							w[0].AnyTime_month = f
						}
						i++
					}
					if (o) {
						h = k.labelDayOfMonth || "Dia";
						this.hDoM = a('<h6 class="AnyTime-lbl AnyTime-lbl-dom">'
								+ h + "</h6>");
						this.dD.append(this.hDoM);
						this.dDoM = a('<table border="0" cellpadding="0" cellspacing="0" class="AnyTime-dom-table"/>');
						this.dD.append(this.dDoM);
						g = a('<thead class="AnyTime-dom-head"/>');
						this.dDoM.append(g);
						var x = a('<tr class="AnyTime-dow"/>');
						g.append(x);
						for (f = 0; f < 7; f++)
							x.append('<th class="AnyTime-dow AnyTime-dow'
									+ String(f + 1) + '">'
									+ this.conv.dAbbr[(this.fDOW + f) % 7]
									+ "</th>");
						var y = a('<tbody class="AnyTime-dom-body" />');
						this.dDoM.append(y);
						for ( var z = 0; z < 6; z++) {
							x = a('<tr class="AnyTime-wk AnyTime-wk'
									+ String(z + 1) + '"/>');
							y.append(x);
							for (f = 0; f < 7; f++)
								this.btn(x, "x", function(b) {
									var c = a(b.target);
									if (c.hasClass("AnyTime-out-btn"))
										return;
									var d = Number(c.html());
									if (d) {
										var e = new Date(this.time.getTime());
										e.setDate(d);
										this.set(e);
										this.upd(c)
									}
								}, [ "dom" ], h)
						}
						i++
					}
				}
				if (u) {
					var A, B;
					this.dT = a('<div class="AnyTime-time" style="width:0;height:0" />');
					this.dB.append(this.dT);
					this.tMinW = this.dT.outerWidth(true);
					this.tMinH = this.dT.AnyTime_height(true);
					if (q) {
						this.dH = a('<div class="AnyTime-hrs"/>');
						this.dT.append(this.dH);
						h = k.labelHour || "Hora";
						this.dH
								.append(a('<h6 class="AnyTime-lbl AnyTime-lbl-hr">'
										+ h + "</h6>"));
						var C = a('<ul class="AnyTime-hrs-am"/>');
						this.dH.append(C);
						var D = a('<ul class="AnyTime-hrs-pm"/>');
						this.dH.append(D);
						for (f = 0; f < 12; f++) {
							if (this.twelveHr) {
								if (f == 0)
									g = "12am";
								else
									g = String(f) + "am"
							} else
								g = AnyTime.pad(f, 2);
							this.btn(C, g, this.newHour, [ "hr",
									"hr" + String(f) ], h + " " + g);
							if (this.twelveHr) {
								if (f == 0)
									g = "12pm";
								else
									g = String(f) + "pm"
							} else
								g = f + 12;
							this.btn(D, g, this.newHour, [ "hr",
									"hr" + String(f + 12) ], h + " " + g)
						}
						i++
					}
					if (r) {
						this.dM = a('<div class="AnyTime-mins"/>');
						this.dT.append(this.dM);
						h = k.labelMinute || "Minuto";
						this.dM
								.append(a('<h6 class="AnyTime-lbl AnyTime-lbl-min">'
										+ h + "</h6>"));
						A = a('<ul class="AnyTime-mins-tens"/>');
						this.dM.append(A);
						for (f = 0; f < 6; f++)
							this.btn(A, f, function(b) {
								var c = a(b.target);
								if (c.hasClass("AnyTime-out-btn"))
									return;
								var d = new Date(this.time.getTime());
								d.setMinutes(Number(c.text()) * 10
										+ this.time.getMinutes() % 10);
								this.set(d);
								this.upd(c)
							}, [ "min-ten", "min" + f + "0" ], h + " " + f
									+ "0");
						for (; f < 12; f++)
							this
									.btn(A, "&#160;", a.noop,
											[ "min-ten", "min" + f + "0" ],
											h + " " + f + "0")
									.addClass(
											"AnyTime-min-ten-btn-empty ui-state-default ui-state-disabled");
						B = a('<ul class="AnyTime-mins-ones"/>');
						this.dM.append(B);
						for (f = 0; f < 10; f++)
							this.btn(B, f, function(b) {
								var c = a(b.target);
								if (c.hasClass("AnyTime-out-btn"))
									return;
								var d = new Date(this.time.getTime());
								d.setMinutes(Math
										.floor(this.time.getMinutes() / 10)
										* 10 + Number(c.text()));
								this.set(d);
								this.upd(c)
							}, [ "min-one", "min" + f ], h + " " + f);
						for (; f < 12; f++)
							this
									.btn(B, "&#160;", a.noop,
											[ "min-one", "min" + f + "0" ],
											h + " " + f)
									.addClass(
											"AnyTime-min-one-btn-empty ui-state-default ui-state-disabled");
						i++
					}
					if (s) {
						this.dS = a('<div class="AnyTime-secs"/>');
						this.dT.append(this.dS);
						h = k.labelSecond || "Segundo";
						this.dS
								.append(a('<h6 class="AnyTime-lbl AnyTime-lbl-sec">'
										+ h + "</h6>"));
						A = a('<ul class="AnyTime-secs-tens"/>');
						this.dS.append(A);
						for (f = 0; f < 6; f++)
							this.btn(A, f, function(b) {
								var c = a(b.target);
								if (c.hasClass("AnyTime-out-btn"))
									return;
								var d = new Date(this.time.getTime());
								d.setSeconds(Number(c.text()) * 10
										+ this.time.getSeconds() % 10);
								this.set(d);
								this.upd(c)
							}, [ "sec-ten", "sec" + f + "0" ], h + " " + f
									+ "0");
						for (; f < 12; f++)
							this
									.btn(A, "&#160;", a.noop,
											[ "sec-ten", "sec" + f + "0" ],
											h + " " + f + "0")
									.addClass(
											"AnyTime-sec-ten-btn-empty ui-state-default ui-state-disabled");
						B = a('<ul class="AnyTime-secs-ones"/>');
						this.dS.append(B);
						for (f = 0; f < 10; f++)
							this.btn(B, f, function(b) {
								var c = a(b.target);
								if (c.hasClass("AnyTime-out-btn"))
									return;
								var d = new Date(this.time.getTime());
								d.setSeconds(Math
										.floor(this.time.getSeconds() / 10)
										* 10 + Number(c.text()));
								this.set(d);
								this.upd(c)
							}, [ "sec-one", "sec" + f ], h + " " + f);
						for (; f < 12; f++)
							this
									.btn(B, "&#160;", a.noop,
											[ "sec-one", "sec" + f + "0" ],
											h + " " + f)
									.addClass(
											"AnyTime-sec-one-btn-empty ui-state-default ui-state-disabled");
						i++
					}
					if (t) {
						this.dO = a('<div class="AnyTime-offs" />');
						this.dT.append(this.dO);
						this.oMinW = this.dO.outerWidth(true);
						this.oLab = a('<h6 class="AnyTime-lbl AnyTime-lbl-off">'
								+ this.lO + "</h6>");
						this.dO.append(this.oLab);
						var E = a('<ul class="AnyTime-off-list ui-helper-reset" />');
						this.dO.append(E);
						this.oCur = this.btn(E, "", this.newOffset, [ "off",
								"off-cur" ], h);
						this.oCur.removeClass("ui-state-default");
						this.oCur
								.addClass("AnyTime-cur-btn ui-state-default ui-state-highlight");
						this.oCur.css({
							overflow : "hidden"
						});
						this.oSel = this.btn(E, "&#177;", this.newOffset, [
								"off", "off-select" ], "+/- " + this.lO);
						this.oListMinW = this.oCur.outerWidth(true)
								+ this.oSel.outerWidth(true);
						i++
					}
				}
				if (k.labelTitle)
					this.hTitle.append(k.labelTitle);
				else if (i > 1)
					this.hTitle.append("Escolha "
							+ (p ? u ? "Data e Hora" : "Data" : "Hora"));
				else
					this.hTitle.append("Select");
				try {
					this.time = this.conv.parse(this.inp.val());
					this.offMin = this.conv.getUtcParseOffsetCaptured();
					this.offSI = this.conv.getUtcParseOffsetSubIndex()
				} catch (F) {
					this.time = new Date
				}
				this.lastAjax = this.time;
				if (this.pop) {
					this.div.hide();
					if (d)
						d.hide();
					this.div.css("position", "absolute")
				}
				this.inp.blur(this.hBlur = function(a) {
					l.inpBlur(a)
				});
				this.inp.click(this.hClick = function(a) {
					l.showPkr(a)
				});
				this.inp.focus(this.hFocus = function(a) {
					if (l.lostFocus)
						l.showPkr(a);
					l.lostFocus = false
				});
				this.inp.keydown(this.hKeydown = function(a) {
					l.key(a)
				});
				this.inp.keypress(this.hKeypress = function(b) {
					if (a.browser.opera && l.denyTab)
						b.preventDefault()
				});
				this.div.click(function(a) {
					l.lostFocus = false;
					l.inp.focus()
				});
				a(window).resize(function(a) {
					l.pos(a)
				});
				if (e)
					this.onReady()
			},
			ajax : function() {
				if (this.ajaxOpts
						&& this.time.getTime() != this.lastAjax.getTime()) {
					try {
						var b = jQuery.extend({}, this.ajaxOpts);
						if (typeof b.data == "object")
							b.data[this.inp[0].name || this.inp[0].id] = this.inp
									.val();
						else {
							var c = (this.inp[0].name || this.inp[0].id) + "="
									+ encodeURI(this.inp.val());
							if (b.data)
								b.data += "&" + c;
							else
								b.data = c
						}
						a.ajax(b);
						this.lastAjax = this.time
					} catch (d) {
					}
				}
				return
			},
			askOffset : function(b) {
				if (!this.oDiv) {
					this.makeCloak();
					this.oDiv = a('<div class="AnyTime-win AnyTime-off-selector ui-widget ui-widget-content ui-corner-all" style="position:absolute" />');
					this.div.append(this.oDiv);
					var c = a('<h5 class="AnyTime-hdr AnyTime-hdr-off-selector ui-widget-header ui-corner-top" />');
					this.oDiv.append(c);
					this.oBody = a('<div class="AnyTime-body AnyTime-body-off-selector" style="overflow:auto;white-space:nowrap" />');
					this.oDiv.append(this.oBody);
					var d = this.oBody.AnyTime_height(true);
					var e = this.oBody.AnyTime_width(true);
					var h = c.AnyTime_width(true);
					var i = a('<div class="AnyTime-x-btn ui-state-default">'
							+ this.lX + "</div>");
					c.append(i);
					i.click(function(a) {
						l.dismissODiv(a)
					});
					c.append(this.lO);
					if (f || g)
						c.width(String(this.lO.length * .8) + "em");
					var j = c.AnyTime_width(true) - e;
					var k = a('<ul class="AnyTime-off-off" />');
					var m = null;
					this.oBody.append(k);
					var n = this.oConv.fmt.indexOf("%@") >= 0;
					var o = 0;
					if (AnyTime.utcLabel)
						for ( var p = -720; p < 720; p++)
							if (AnyTime.utcLabel[p]) {
								this.oConv.setUtcFormatOffsetAlleged(p);
								for ( var q = 0; q < AnyTime.utcLabel[p].length; q++) {
									this.oConv.setUtcFormatOffsetSubIndex(q);
									m = this.btn(k, this.oConv
											.format(this.time), this.newOPos,
											[ "off-off" ], p);
									m[0].AnyTime_offMin = p;
									m[0].AnyTime_offSI = q;
									var r = m.width();
									if (r > o)
										o = r;
									if (!n)
										break
								}
							}
					if (m)
						m.addClass("AnyTime-off-off-last-btn");
					this.oBody.find(".AnyTime-off-off-btn").width(o);
					if (m) {
						var s = m.AnyTime_width(true);
						if (s > j)
							j = s + 1
					}
					this.oBody.width(j);
					j = this.oBody.AnyTime_width(true);
					this.oDiv.width(j);
					if (f || g)
						c.width(j - h);
					var t = this.oDiv.AnyTime_height(true);
					var u = this.div.height() * .75;
					if (t > u) {
						t = u;
						this.oBody.height(t - (c.AnyTime_height(true) + d));
						this.oBody.width(this.oBody.width() + 20);
						this.oDiv.width(this.oDiv.width() + 20);
						if (f || g)
							c.width(this.oBody.AnyTime_width(true) - h)
					}
					if (!g)
						this.oDiv.height(String(t) + "px")
				} else {
					this.cloak.show();
					this.oDiv.show()
				}
				this.pos(b);
				this.updODiv(null);
				var v = this.oDiv
						.find(".AnyTime-off-off-btn.AnyTime-cur-btn:first");
				if (!v.length)
					v = this.oDiv.find(".AnyTime-off-off-btn:first");
				this.setFocus(v)
			},
			askYear : function(b) {
				if (!this.yDiv) {
					this.makeCloak();
					this.yDiv = a('<div class="AnyTime-win AnyTime-yr-selector ui-widget ui-widget-content ui-corner-all" style="position:absolute" />');
					this.div.append(this.yDiv);
					var c = a('<h5 class="AnyTime-hdr AnyTime-hdr-yr-selector ui-widget-header ui-corner-top" />');
					this.yDiv.append(c);
					var d = a('<div class="AnyTime-x-btn ui-state-default">'
							+ this.lX + "</div>");
					c.append(d);
					d.click(function(a) {
						l.dismissYDiv(a)
					});
					c.append(this.lY);
					var e = a('<div class="AnyTime-body AnyTime-body-yr-selector" />');
					var h = e.AnyTime_width(true);
					var j = 0;
					this.yDiv.append(e);
					cont = a('<ul class="AnyTime-yr-mil" />');
					e.append(cont);
					this.y0XXX = this.btn(cont, 0, this.newYPos, [ "mil",
							"mil0" ], this.lY + " " + 0 + "000");
					for (i = 1; i < 10; i++)
						this.btn(cont, i, this.newYPos, [ "mil", "mil" + i ],
								this.lY + " " + i + "000");
					h += cont.AnyTime_width(true);
					if (j < cont.AnyTime_height(true))
						j = cont.AnyTime_height(true);
					cont = a('<ul class="AnyTime-yr-cent" />');
					e.append(cont);
					for (i = 0; i < 10; i++)
						this.btn(cont, i, this.newYPos, [ "cent", "cent" + i ],
								this.lY + " " + i + "00");
					h += cont.AnyTime_width(true);
					if (j < cont.AnyTime_height(true))
						j = cont.AnyTime_height(true);
					cont = a('<ul class="AnyTime-yr-dec" />');
					e.append(cont);
					for (i = 0; i < 10; i++)
						this.btn(cont, i, this.newYPos, [ "dec", "dec" + i ],
								this.lY + " " + i + "0");
					h += cont.AnyTime_width(true);
					if (j < cont.AnyTime_height(true))
						j = cont.AnyTime_height(true);
					cont = a('<ul class="AnyTime-yr-yr" />');
					e.append(cont);
					for (i = 0; i < 10; i++)
						this.btn(cont, i, this.newYPos, [ "yr", "yr" + i ],
								this.lY + " " + i);
					h += cont.AnyTime_width(true);
					if (j < cont.AnyTime_height(true))
						j = cont.AnyTime_height(true);
					if (this.askEra) {
						cont = a('<ul class="AnyTime-yr-era" />');
						e.append(cont);
						this.btn(cont, this.conv.eAbbr[0], function(b) {
							var c = new Date(this.time.getTime());
							var d = c.getFullYear();
							if (d > 0)
								c.setFullYear(0 - d);
							this.set(c);
							this.updYDiv(a(b.target))
						}, [ "era", "bce" ], this.conv.eAbbr[0]);
						this.btn(cont, this.conv.eAbbr[1], function(b) {
							var c = new Date(this.time.getTime());
							var d = c.getFullYear();
							if (d < 0)
								c.setFullYear(0 - d);
							this.set(c);
							this.updYDiv(a(b.target))
						}, [ "era", "ce" ], this.conv.eAbbr[1]);
						h += cont.AnyTime_width(true);
						if (j < cont.AnyTime_height(true))
							j = cont.AnyTime_height(true)
					}
					if (a.browser.msie)
						h += 1;
					else if (a.browser.safari)
						h += 2;
					j += e.AnyTime_height(true);
					e.css("width", String(h) + "px");
					if (!g)
						e.css("height", String(j) + "px");
					if (f || g)
						c.width(e.outerWidth(true));
					j += c.AnyTime_height(true);
					if (c.AnyTime_width(true) > h)
						h = c.AnyTime_width(true);
					this.yDiv.css("width", String(h) + "px");
					if (!g)
						this.yDiv.css("height", String(j) + "px")
				} else {
					this.cloak.show();
					this.yDiv.show()
				}
				this.pos(b);
				this.updYDiv(null);
				this.setFocus(this.yDiv
						.find(".AnyTime-yr-btn.AnyTime-cur-btn:first"))
			},
			inpBlur : function(a) {
				if (this.oDiv && this.oDiv.is(":visible")) {
					l.inp.focus();
					return
				}
				this.lostFocus = true;
				setTimeout(function() {
					if (l.lostFocus) {
						l.div.find(".AnyTime-focus-btn").removeClass(
								"AnyTime-focus-btn ui-state-focus");
						if (l.pop)
							l.dismiss(a);
						else
							l.ajax()
					}
				}, 334)
			},
			btn : function(b, c, d, e, f) {
				var g = b[0].nodeName.toLowerCase() == "ul" ? "li" : "td";
				var h = "<" + g + ' class="AnyTime-btn';
				for ( var i = 0; i < e.length; i++)
					h += " AnyTime-" + e[i] + "-btn";
				var j = a(h + ' ui-state-default">' + c + "</" + g + ">");
				b.append(j);
				j.AnyTime_title = f;
				j.click(function(a) {
					l.tempFunc = d;
					l.tempFunc(a)
				});
				j.dblclick(function(b) {
					var c = a(this);
					if (c.is(".AnyTime-off-off-btn"))
						l.dismissODiv(b);
					else if (c.is(".AnyTime-mil-btn")
							|| c.is(".AnyTime-cent-btn")
							|| c.is(".AnyTime-dec-btn")
							|| c.is(".AnyTime-yr-btn")
							|| c.is(".AnyTime-era-btn"))
						l.dismissYDiv(b);
					else if (l.pop)
						l.dismiss(b)
				});
				return j
			},
			cleanup : function(a) {
				this.inp.unbind("blur", this.hBlur);
				this.inp.unbind("click", this.hClick);
				this.inp.unbind("focus", this.hFocus);
				this.inp.unbind("keydown", this.hKeydown);
				this.inp.unbind("keypress", this.hKeypress);
				this.div.remove()
			},
			dismiss : function(a) {
				this.ajax();
				if (d)
					d.hide();
				if (this.yDiv)
					this.dismissYDiv();
				if (this.oDiv)
					this.dismissODiv();
				this.div.hide();
				this.lostFocus = true
			},
			dismissODiv : function(a) {
				this.oDiv.hide();
				this.cloak.hide();
				this.setFocus(this.oCur)
			},
			dismissYDiv : function(a) {
				this.yDiv.hide();
				this.cloak.hide();
				this.setFocus(this.yCur)
			},
			setFocus : function(a) {
				if (!a.hasClass("AnyTime-focus-btn")) {
					this.div.find(".AnyTime-focus-btn").removeClass(
							"AnyTime-focus-btn ui-state-focus");
					this.fBtn = a;
					a.removeClass("ui-state-default ui-state-highlight");
					a
							.addClass("AnyTime-focus-btn ui-state-default ui-state-highlight ui-state-focus")
				}
				if (a.hasClass("AnyTime-off-off-btn")) {
					var b = this.oBody.offset().top;
					var c = a.offset().top;
					var d = a.AnyTime_height(true);
					if (c - d < b)
						this.oBody.scrollTop(c + this.oBody.scrollTop()
								- (this.oBody.innerHeight() + b) + d * 2);
					else if (c + d > b + this.oBody.innerHeight())
						this.oBody.scrollTop(c + this.oBody.scrollTop()
								- (b + d))
				}
			},
			key : function(a) {
				var d;
				var e = null;
				var f = this.div.find(".AnyTime-focus-btn");
				var g = a.keyCode || a.which;
				this.denyTab = true;
				if (g == 16) {
				} else if (g == 10 || g == 13 || g == 27) {
					if (this.oDiv && this.oDiv.is(":visible"))
						this.dismissODiv(a);
					else if (this.yDiv && this.yDiv.is(":visible"))
						this.dismissYDiv(a);
					else if (this.pop)
						this.dismiss(a)
				} else if (g == 33 || g == 9 && a.shiftKey) {
					if (this.fBtn.hasClass("AnyTime-off-off-btn")) {
						if (g == 9)
							this.dismissODiv(a)
					} else if (this.fBtn.hasClass("AnyTime-mil-btn")) {
						if (g == 9)
							this.dismissYDiv(a)
					} else if (this.fBtn.hasClass("AnyTime-cent-btn"))
						this.yDiv.find(".AnyTime-mil-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-dec-btn"))
						this.yDiv.find(".AnyTime-cent-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-yr-btn"))
						this.yDiv.find(".AnyTime-dec-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-era-btn"))
						this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.parents(".AnyTime-yrs").length) {
						if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-mon-btn")) {
						if (this.dY)
							this.yCur.triggerHandler("click");
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-dom-btn")) {
						if (g == 9 && a.shiftKey) {
							this.denyTab = false;
							return
						} else {
							e = new Date(this.time.getTime());
							if (a.shiftKey)
								e.setFullYear(e.getFullYear() - 1);
							else {
								d = e.getMonth() - 1;
								if (e.getDate() > c[d])
									e.setDate(c[d]);
								e.setMonth(d)
							}
							this.keyDateChange(e)
						}
					} else if (this.fBtn.hasClass("AnyTime-hr-btn")) {
						e = this.dDoM || this.dMo;
						if (e)
							e.AnyTime_clickCurrent();
						else if (this.dY)
							this.yCur.triggerHandler("click");
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-min-ten-btn")) {
						e = this.dH || this.dDoM || this.dMo;
						if (e)
							e.AnyTime_clickCurrent();
						else if (this.dY)
							this.yCur.triggerHandler("click");
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-min-one-btn"))
						this.dM.AnyTime_clickCurrent();
					else if (this.fBtn.hasClass("AnyTime-sec-ten-btn")) {
						if (this.dM)
							e = this.dM.find(".AnyTime-mins-ones");
						else
							e = this.dH || this.dDoM || this.dMo;
						if (e)
							e.AnyTime_clickCurrent();
						else if (this.dY)
							this.yCur.triggerHandler("click");
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-sec-one-btn"))
						this.dS.AnyTime_clickCurrent();
					else if (this.fBtn.hasClass("AnyTime-off-btn")) {
						if (this.dS)
							e = this.dS.find(".AnyTime-secs-ones");
						else if (this.dM)
							e = this.dM.find(".AnyTime-mins-ones");
						else
							e = this.dH || this.dDoM || this.dMo;
						if (e)
							e.AnyTime_clickCurrent();
						else if (this.dY)
							this.yCur.triggerHandler("click");
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					}
				} else if (g == 34 || g == 9) {
					if (this.fBtn.hasClass("AnyTime-mil-btn"))
						this.yDiv.find(".AnyTime-cent-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-cent-btn"))
						this.yDiv.find(".AnyTime-dec-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-dec-btn"))
						this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-yr-btn")) {
						e = this.yDiv.find(".AnyTime-era-btn.AnyTime-cur-btn");
						if (e.length)
							e.triggerHandler("click");
						else if (g == 9)
							this.dismissYDiv(a)
					} else if (this.fBtn.hasClass("AnyTime-era-btn")) {
						if (g == 9)
							this.dismissYDiv(a)
					} else if (this.fBtn.hasClass("AnyTime-off-off-btn")) {
						if (g == 9)
							this.dismissODiv(a)
					} else if (this.fBtn.parents(".AnyTime-yrs").length) {
						e = this.dDoM || this.dMo || this.dH || this.dM
								|| this.dS || this.dO;
						if (e)
							e.AnyTime_clickCurrent();
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-mon-btn")) {
						e = this.dDoM || this.dH || this.dM || this.dS
								|| this.dO;
						if (e)
							e.AnyTime_clickCurrent();
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-dom-btn")) {
						if (g == 9) {
							e = this.dH || this.dM || this.dS || this.dO;
							if (e)
								e.AnyTime_clickCurrent();
							else {
								this.denyTab = false;
								return
							}
						} else {
							e = new Date(this.time.getTime());
							if (a.shiftKey)
								e.setFullYear(e.getFullYear() + 1);
							else {
								d = e.getMonth() + 1;
								if (e.getDate() > c[d])
									e.setDate(c[d]);
								e.setMonth(d)
							}
							this.keyDateChange(e)
						}
					} else if (this.fBtn.hasClass("AnyTime-hr-btn")) {
						e = this.dM || this.dS || this.dO;
						if (e)
							e.AnyTime_clickCurrent();
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-min-ten-btn"))
						this.dM.find(".AnyTime-mins-ones .AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-min-one-btn")) {
						e = this.dS || this.dO;
						if (e)
							e.AnyTime_clickCurrent();
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-sec-ten-btn"))
						this.dS.find(".AnyTime-secs-ones .AnyTime-cur-btn")
								.triggerHandler("click");
					else if (this.fBtn.hasClass("AnyTime-sec-one-btn")) {
						if (this.dO)
							this.dO.AnyTime_clickCurrent();
						else if (g == 9) {
							this.denyTab = false;
							return
						}
					} else if (this.fBtn.hasClass("AnyTime-off-btn")) {
						if (g == 9) {
							this.denyTab = false;
							return
						}
					}
				} else if (g == 35) {
					if (this.fBtn.hasClass("AnyTime-mil-btn")
							|| this.fBtn.hasClass("AnyTime-cent-btn")
							|| this.fBtn.hasClass("AnyTime-dec-btn")
							|| this.fBtn.hasClass("AnyTime-yr-btn")
							|| this.fBtn.hasClass("AnyTime-era-btn")) {
						e = this.yDiv.find(".AnyTime-ce-btn");
						if (!e.length)
							e = this.yDiv.find(".AnyTime-yr9-btn");
						e.triggerHandler("click")
					} else if (this.fBtn.hasClass("AnyTime-dom-btn")) {
						e = new Date(this.time.getTime());
						e.setDate(1);
						e.setMonth(e.getMonth() + 1);
						e.setDate(e.getDate() - 1);
						if (a.ctrlKey)
							e.setMonth(11);
						this.keyDateChange(e)
					} else if (this.dS)
						this.dS.find(".AnyTime-sec9-btn").triggerHandler(
								"click");
					else if (this.dM)
						this.dM.find(".AnyTime-min9-btn").triggerHandler(
								"click");
					else if (this.dH)
						this.dH.find(".AnyTime-hr23-btn").triggerHandler(
								"click");
					else if (this.dDoM)
						this.dDoM.find(".AnyTime-dom-btn-filled:last")
								.triggerHandler("click");
					else if (this.dMo)
						this.dMo.find(".AnyTime-mon12-btn").triggerHandler(
								"click");
					else if (this.dY)
						this.yAhead.triggerHandler("click")
				} else if (g == 36) {
					if (this.fBtn.hasClass("AnyTime-mil-btn")
							|| this.fBtn.hasClass("AnyTime-cent-btn")
							|| this.fBtn.hasClass("AnyTime-dec-btn")
							|| this.fBtn.hasClass("AnyTime-yr-btn")
							|| this.fBtn.hasClass("AnyTime-era-btn")) {
						this.yDiv.find(".AnyTime-mil0-btn").triggerHandler(
								"click")
					} else if (this.fBtn.hasClass("AnyTime-dom-btn")) {
						e = new Date(this.time.getTime());
						e.setDate(1);
						if (a.ctrlKey)
							e.setMonth(0);
						this.keyDateChange(e)
					} else if (this.dY)
						this.yCur.triggerHandler("click");
					else if (this.dMo)
						this.dMo.find(".AnyTime-mon1-btn").triggerHandler(
								"click");
					else if (this.dDoM)
						this.dDoM.find(".AnyTime-dom-btn-filled:first")
								.triggerHandler("click");
					else if (this.dH)
						this.dH.find(".AnyTime-hr0-btn")
								.triggerHandler("click");
					else if (this.dM)
						this.dM.find(".AnyTime-min00-btn").triggerHandler(
								"click");
					else if (this.dS)
						this.dS.find(".AnyTime-sec00-btn").triggerHandler(
								"click")
				} else if (g == 37) {
					if (this.fBtn.hasClass("AnyTime-dom-btn"))
						this.keyDateChange(new Date(this.time.getTime() - b));
					else
						this.keyBack()
				} else if (g == 38) {
					if (this.fBtn.hasClass("AnyTime-dom-btn"))
						this
								.keyDateChange(new Date(this.time.getTime() - 7
										* b));
					else
						this.keyBack()
				} else if (g == 39) {
					if (this.fBtn.hasClass("AnyTime-dom-btn"))
						this.keyDateChange(new Date(this.time.getTime() + b));
					else
						this.keyAhead()
				} else if (g == 40) {
					if (this.fBtn.hasClass("AnyTime-dom-btn"))
						this
								.keyDateChange(new Date(this.time.getTime() + 7
										* b));
					else
						this.keyAhead()
				} else if ((g == 86 || g == 118) && a.ctrlKey) {
					this.inp.val("").change();
					var h = this;
					setTimeout(function() {
						h.showPkr(null)
					}, 100);
					return
				} else
					this.showPkr(null);
				
				//allows people to delete field content
				if (a.keyCode == 8 || a.keyCode == 46)
					this.inp.val('');
				
//				if (a.keyCode != 9)
				a.preventDefault();
			},
			keyAhead : function() {
				if (this.fBtn.hasClass("AnyTime-mil9-btn"))
					this.yDiv.find(".AnyTime-cent0-btn")
							.triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-cent9-btn"))
					this.yDiv.find(".AnyTime-dec0-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-dec9-btn"))
					this.yDiv.find(".AnyTime-yr0-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-yr9-btn"))
					this.yDiv.find(".AnyTime-bce-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-sec9-btn")) {
				} else if (this.fBtn.hasClass("AnyTime-sec50-btn"))
					this.dS.find(".AnyTime-sec0-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-min9-btn")) {
					if (this.dS)
						this.dS.find(".AnyTime-sec00-btn").triggerHandler(
								"click")
				} else if (this.fBtn.hasClass("AnyTime-min50-btn"))
					this.dM.find(".AnyTime-min0-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-hr23-btn")) {
					if (this.dM)
						this.dM.find(".AnyTime-min00-btn").triggerHandler(
								"click");
					else if (this.dS)
						this.dS.find(".AnyTime-sec00-btn").triggerHandler(
								"click")
				} else if (this.fBtn.hasClass("AnyTime-hr11-btn"))
					this.dH.find(".AnyTime-hr12-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-mon12-btn")) {
					if (this.dDoM)
						this.dDoM.AnyTime_clickCurrent();
					else if (this.dH)
						this.dH.find(".AnyTime-hr0-btn")
								.triggerHandler("click");
					else if (this.dM)
						this.dM.find(".AnyTime-min00-btn").triggerHandler(
								"click");
					else if (this.dS)
						this.dS.find(".AnyTime-sec00-btn").triggerHandler(
								"click")
				} else if (this.fBtn.hasClass("AnyTime-yrs-ahead-btn")) {
					if (this.dMo)
						this.dMo.find(".AnyTime-mon1-btn").triggerHandler(
								"click");
					else if (this.dH)
						this.dH.find(".AnyTime-hr0-btn")
								.triggerHandler("click");
					else if (this.dM)
						this.dM.find(".AnyTime-min00-btn").triggerHandler(
								"click");
					else if (this.dS)
						this.dS.find(".AnyTime-sec00-btn").triggerHandler(
								"click")
				} else if (this.fBtn.hasClass("AnyTime-yr-cur-btn"))
					this.yNext.triggerHandler("click");
				else
					this.fBtn.next().triggerHandler("click")
			},
			keyBack : function() {
				if (this.fBtn.hasClass("AnyTime-cent0-btn"))
					this.yDiv.find(".AnyTime-mil9-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-dec0-btn"))
					this.yDiv.find(".AnyTime-cent9-btn")
							.triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-yr0-btn"))
					this.yDiv.find(".AnyTime-dec9-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-bce-btn"))
					this.yDiv.find(".AnyTime-yr9-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-yr-cur-btn"))
					this.yPrior.triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-mon1-btn")) {
					if (this.dY)
						this.yCur.triggerHandler("click")
				} else if (this.fBtn.hasClass("AnyTime-hr0-btn")) {
					if (this.dDoM)
						this.dDoM.AnyTime_clickCurrent();
					else if (this.dMo)
						this.dMo.find(".AnyTime-mon12-btn").triggerHandler(
								"click");
					else if (this.dY)
						this.yNext.triggerHandler("click")
				} else if (this.fBtn.hasClass("AnyTime-hr12-btn"))
					this.dH.find(".AnyTime-hr11-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-min00-btn")) {
					if (this.dH)
						this.dH.find(".AnyTime-hr23-btn").triggerHandler(
								"click");
					else if (this.dDoM)
						this.dDoM.AnyTime_clickCurrent();
					else if (this.dMo)
						this.dMo.find(".AnyTime-mon12-btn").triggerHandler(
								"click");
					else if (this.dY)
						this.yNext.triggerHandler("click")
				} else if (this.fBtn.hasClass("AnyTime-min0-btn"))
					this.dM.find(".AnyTime-min50-btn").triggerHandler("click");
				else if (this.fBtn.hasClass("AnyTime-sec00-btn")) {
					if (this.dM)
						this.dM.find(".AnyTime-min9-btn").triggerHandler(
								"click");
					else if (this.dH)
						this.dH.find(".AnyTime-hr23-btn").triggerHandler(
								"click");
					else if (this.dDoM)
						this.dDoM.AnyTime_clickCurrent();
					else if (this.dMo)
						this.dMo.find(".AnyTime-mon12-btn").triggerHandler(
								"click");
					else if (this.dY)
						this.yNext.triggerHandler("click")
				} else if (this.fBtn.hasClass("AnyTime-sec0-btn"))
					this.dS.find(".AnyTime-sec50-btn").triggerHandler("click");
				else
					this.fBtn.prev().triggerHandler("click")
			},
			keyDateChange : function(a) {
				if (this.fBtn.hasClass("AnyTime-dom-btn")) {
					this.set(a);
					this.upd(null);
					this.setFocus(this.dDoM.find(".AnyTime-cur-btn"))
				}
			},
			makeCloak : function() {
				if (!this.cloak) {
					this.cloak = a('<div class="AnyTime-cloak" style="position:absolute" />');
					this.div.append(this.cloak);
					this.cloak.click(function(a) {
						if (l.oDiv && l.oDiv.is(":visible"))
							l.dismissODiv(a);
						else
							l.dismissYDiv(a)
					})
				} else
					this.cloak.show()
			},
			newHour : function(b) {
				var c;
				var d;
				var e = a(b.target);
				if (e.hasClass("AnyTime-out-btn"))
					return;
				if (!this.twelveHr)
					c = Number(e.text());
				else {
					var f = e.text();
					d = f.indexOf("a");
					if (d < 0) {
						d = Number(f.substr(0, f.indexOf("p")));
						c = d == 12 ? 12 : d + 12
					} else {
						d = Number(f.substr(0, d));
						c = d == 12 ? 0 : d
					}
				}
				d = new Date(this.time.getTime());
				d.setHours(c);
				this.set(d);
				this.upd(e)
			},
			newOffset : function(a) {
				if (a.target == this.oSel[0])
					this.askOffset(a);
				else {
					this.upd(this.oCur)
				}
			},
			newOPos : function(b) {
				var c = a(b.target);
				this.offMin = c[0].AnyTime_offMin;
				this.offSI = c[0].AnyTime_offSI;
				var d = new Date(this.time.getTime());
				this.set(d);
				this.updODiv(c)
			},
			newYear : function(b) {
				var c = a(b.target);
				if (c.hasClass("AnyTime-out-btn"))
					return;
				var d = c.text();
				if (d == "<" || d == "<")
					this.askYear(b);
				else if (d == ">" || d == ">")
					this.askYear(b);
				else {
					var e = new Date(this.time.getTime());
					e.setFullYear(Number(d));
					this.set(e);
					this.upd(this.yCur)
				}
			},
			newYPos : function(b) {
				var c = a(b.target);
				if (c.hasClass("AnyTime-out-btn"))
					return;
				var d = 1;
				var e = this.time.getFullYear();
				if (e < 0) {
					d = -1;
					e = 0 - e
				}
				e = AnyTime.pad(e, 4);
				if (c.hasClass("AnyTime-mil-btn"))
					e = c.html() + e.substring(1, 4);
				else if (c.hasClass("AnyTime-cent-btn"))
					e = e.substring(0, 1) + c.html() + e.substring(2, 4);
				else if (c.hasClass("AnyTime-dec-btn"))
					e = e.substring(0, 2) + c.html() + e.substring(3, 4);
				else
					e = e.substring(0, 3) + c.html();
				if (e == "0000")
					e = 1;
				var f = new Date(this.time.getTime());
				f.setFullYear(d * e);
				this.set(f);
				this.updYDiv(c)
			},
			onReady : function() {
				this.lostFocus = true;
				if (!this.pop)
					this.upd(null);
				else {
					if (this.div.parent() != document.body)
						this.div.appendTo(document.body)
				}
			},
			pos : function(b) {
				if (this.pop) {
					var c = this.inp.offset();
					var d = a(document.body).outerWidth(true);
					var e = this.div.outerWidth(true);
					var f = c.left;
					if (f + e > d - 20)
						f = d - (e + 20);
					var g = c.top - this.div.outerHeight(true);
					if (g < 0)
						g = c.top + this.inp.outerHeight(true);
					this.div.css({
						top : String(g) + "px",
						left : String(f < 0 ? 0 : f) + "px"
					})
				}
				var h = this.div.offset();
				if (this.oDiv && this.oDiv.is(":visible")) {
					var i = this.oLab.offset();
					if (this.div.css("position") == "absolute") {
						i.top -= h.top;
						i.left = i.left - h.left;
						h = {
							top : 0,
							left : 0
						}
					}
					var j = this.oDiv.AnyTime_width(true);
					var k = this.div.AnyTime_width(true);
					if (i.left + j > h.left + k) {
						i.left = h.left + k - j;
						if (i.left < 2)
							i.left = 2
					}
					var l = this.oDiv.AnyTime_height(true);
					var m = this.div.AnyTime_height(true);
					i.top += this.oLab.AnyTime_height(true);
					if (i.top + l > h.top + m)
						i.top = i.top - l;
					if (i.top < h.top)
						i.top = h.top;
					this.oDiv.css({
						top : i.top + "px",
						left : i.left + "px"
					})
				} else if (this.yDiv && this.yDiv.is(":visible")) {
					var n = this.yLab.offset();
					if (this.div.css("position") == "absolute") {
						n.top -= h.top;
						n.left = n.left - h.left;
						h = {
							top : 0,
							left : 0
						}
					}
					n.left += (this.yLab.outerWidth(true) - this.yDiv
							.outerWidth(true)) / 2;
					this.yDiv.css({
						top : n.top + "px",
						left : n.left + "px"
					})
				}
				if (this.cloak)
					this.cloak
							.css({
								top : h.top + "px",
								left : h.left + "px",
								height : String(this.div.outerHeight(true) - 2)
										+ "px",
								width : String(this.div
										.outerWidth(!a.browser.safari) - 2)
										+ "px"
							})
			},
			set : function(a) {
				var b = a.getTime();
				if (this.earliest && b < this.earliest)
					this.time = new Date(this.earliest);
				else if (this.latest && b > this.latest)
					this.time = new Date(this.latest);
				else
					this.time = a
			},
			setEarliest : function(a) {
				this.earliest = a;
				this.set(this.time)
			},
			setLatest : function(a) {
				this.latest = a;
				this.set(this.time)
			},
			showPkr : function(a) {
				try {
					this.time = this.conv.parse(this.inp.val());
					this.offMin = this.conv.getUtcParseOffsetCaptured();
					this.offSI = this.conv.getUtcParseOffsetSubIndex()
				} catch (b) {
					this.time = new Date
				}
				this.set(this.time);
				this.upd(null);
				fBtn = null;
				var c = ".AnyTime-cur-btn:first";
				if (this.dDoM)
					fBtn = this.dDoM.find(c);
				else if (this.yCur)
					fBtn = this.yCur;
				else if (this.dMo)
					fBtn = this.dMo.find(c);
				else if (this.dH)
					fBtn = this.dH.find(c);
				else if (this.dM)
					fBtn = this.dM.find(c);
				else if (this.dS)
					fBtn = this.dS.find(c);
				this.setFocus(fBtn);
				this.pos(a);
				if (this.pop && d)
					setTimeout(function() {
						var a = l.div.offset();
						d.css({
							height : String(l.div.outerHeight(true)) + "px",
							left : String(a.left) + "px",
							position : "absolute",
							top : String(a.top) + "px",
							width : String(l.div.outerWidth(true)) + "px"
						});
						d.show()
					}, 300)
			},
			upd : function(b) {
				var c = new Date(this.time.getTime());
				c.setMonth(0, 1);
				c.setHours(0, 0, 0, 0);
				var d = new Date(this.time.getTime());
				d.setMonth(11, 31);
				d.setHours(23, 59, 59, 999);
				var e = this.time.getFullYear();
				if (this.earliest && this.yPast) {
					d.setYear(e - 2);
					if (d.getTime() < this.earliest)
						this.yPast
								.addClass("AnyTime-out-btn ui-state-disabled");
					else
						this.yPast
								.removeClass("AnyTime-out-btn ui-state-disabled")
				}
				if (this.yPrior) {
					this.yPrior.text(AnyTime.pad(e == 1 ? -1 : e - 1, 4));
					if (this.earliest) {
						d.setYear(e - 1);
						if (d.getTime() < this.earliest)
							this.yPrior
									.addClass("AnyTime-out-btn ui-state-disabled");
						else
							this.yPrior
									.removeClass("AnyTime-out-btn ui-state-disabled")
					}
				}
				if (this.yCur)
					this.yCur.text(AnyTime.pad(e, 4));
				if (this.yNext) {
					this.yNext.text(AnyTime.pad(e == -1 ? 1 : e + 1, 4));
					if (this.latest) {
						c.setYear(e + 1);
						if (c.getTime() > this.latest)
							this.yNext
									.addClass("AnyTime-out-btn ui-state-disabled");
						else
							this.yNext
									.removeClass("AnyTime-out-btn ui-state-disabled")
					}
				}
				if (this.latest && this.yAhead) {
					c.setYear(e + 2);
					if (c.getTime() > this.latest)
						this.yAhead
								.addClass("AnyTime-out-btn ui-state-disabled");
					else
						this.yAhead
								.removeClass("AnyTime-out-btn ui-state-disabled")
				}
				c.setFullYear(this.time.getFullYear());
				d.setFullYear(this.time.getFullYear());
				var h = 0;
				e = this.time.getMonth();
				a("#" + this.id + " .AnyTime-mon-btn")
						.each(
								function() {
									c.setMonth(h);
									d.setDate(1);
									d.setMonth(h + 1);
									d.setDate(0);
									a(this)
											.AnyTime_current(
													h == e,
													(!l.earliest || d.getTime() >= l.earliest)
															&& (!l.latest || c
																	.getTime() <= l.latest));
									h++
								});
				c.setFullYear(this.time.getFullYear());
				d.setFullYear(this.time.getFullYear());
				c.setMonth(this.time.getMonth());
				d.setMonth(this.time.getMonth(), 1);
				e = this.time.getDate();
				var i = this.time.getMonth();
				var j = c.getDay();
				if (this.fDOW > j)
					j += 7;
				var k = 0, m = 0;
				a("#" + this.id + " .AnyTime-wk")
						.each(
								function() {
									m = l.fDOW;
									a(this)
											.children()
											.each(
													function() {
														if (m - l.fDOW < 7) {
															var b = a(this);
															if (k == 0
																	&& m < j
																	|| c
																			.getMonth() != i) {
																b
																		.html("&#160;");
																b
																		.removeClass("AnyTime-dom-btn-filled AnyTime-cur-btn ui-state-default ui-state-highlight");
																b
																		.addClass("AnyTime-dom-btn-empty");
																if (k) {
																	if (c
																			.getDate() == 1
																			&& m != 0)
																		b
																				.addClass("AnyTime-dom-btn-empty-after-filled");
																	else
																		b
																				.removeClass("AnyTime-dom-btn-empty-after-filled");
																	if (c
																			.getDate() <= 7)
																		b
																				.addClass("AnyTime-dom-btn-empty-below-filled");
																	else
																		b
																				.removeClass("AnyTime-dom-btn-empty-below-filled");
																	c
																			.setDate(c
																					.getDate() + 1);
																	d
																			.setDate(d
																					.getDate() + 1)
																} else {
																	b
																			.addClass("AnyTime-dom-btn-empty-above-filled");
																	if (m == j - 1)
																		b
																				.addClass("AnyTime-dom-btn-empty-before-filled");
																	else
																		b
																				.removeClass("AnyTime-dom-btn-empty-before-filled")
																}
																b
																		.addClass("ui-state-default ui-state-disabled")
															} else {
																h = c.getDate();
																b.text(h);
																b
																		.removeClass("AnyTime-dom-btn-empty AnyTime-dom-btn-empty-above-filled AnyTime-dom-btn-empty-before-filled "
																				+ "AnyTime-dom-btn-empty-after-filled AnyTime-dom-btn-empty-below-filled "
																				+ "ui-state-default ui-state-disabled");
																b
																		.addClass("AnyTime-dom-btn-filled ui-state-default");
																b
																		.AnyTime_current(
																				h == e,
																				(!l.earliest || d
																						.getTime() >= l.earliest)
																						&& (!l.latest || c
																								.getTime() <= l.latest));
																c
																		.setDate(h + 1);
																d
																		.setDate(h + 1)
															}
														}
														m++
													});
									k++
								});
				c.setFullYear(this.time.getFullYear());
				d.setFullYear(this.time.getFullYear());
				c.setMonth(this.time.getMonth(), this.time.getDate());
				d.setMonth(this.time.getMonth(), this.time.getDate());
				var n = !this.twelveHr;
				var o = this.time.getHours();
				a("#" + this.id + " .AnyTime-hr-btn")
						.each(
								function() {
									var b = this.innerHTML;
									var e;
									if (n)
										e = Number(b);
									else {
										e = Number(b.substring(0, b.length - 2));
										if (b.charAt(b.length - 2) == "a") {
											if (e == 12)
												e = 0
										} else if (e < 12)
											e += 12
									}
									c.setHours(e);
									d.setHours(e);
									a(this)
											.AnyTime_current(
													o == e,
													(!l.earliest || d.getTime() >= l.earliest)
															&& (!l.latest || c
																	.getTime() <= l.latest));
									if (e < 23)
										c.setHours(c.getHours() + 1)
								});
				c.setHours(this.time.getHours());
				d.setHours(this.time.getHours());
				var p = this.time.getMinutes();
				var q = String(Math.floor(p / 10));
				var r = String(p % 10);
				a(
						"#"
								+ this.id
								+ " .AnyTime-min-ten-btn:not(.AnyTime-min-ten-btn-empty)")
						.each(
								function() {
									a(this)
											.AnyTime_current(
													this.innerHTML == q,
													(!l.earliest || d.getTime() >= l.earliest)
															&& (!l.latest || c
																	.getTime() <= l.latest));
									if (c.getMinutes() < 50) {
										c.setMinutes(c.getMinutes() + 10);
										d.setMinutes(d.getMinutes() + 10)
									}
								});
				c.setMinutes(Math.floor(this.time.getMinutes() / 10) * 10);
				d.setMinutes(Math.floor(this.time.getMinutes() / 10) * 10);
				a(
						"#"
								+ this.id
								+ " .AnyTime-min-one-btn:not(.AnyTime-min-one-btn-empty)")
						.each(
								function() {
									a(this)
											.AnyTime_current(
													this.innerHTML == r,
													(!l.earliest || d.getTime() >= l.earliest)
															&& (!l.latest || c
																	.getTime() <= l.latest));
									c.setMinutes(c.getMinutes() + 1);
									d.setMinutes(d.getMinutes() + 1)
								});
				c.setMinutes(this.time.getMinutes());
				d.setMinutes(this.time.getMinutes());
				p = this.time.getSeconds();
				q = String(Math.floor(p / 10));
				r = String(p % 10);
				a(
						"#"
								+ this.id
								+ " .AnyTime-sec-ten-btn:not(.AnyTime-sec-ten-btn-empty)")
						.each(
								function() {
									a(this)
											.AnyTime_current(
													this.innerHTML == q,
													(!l.earliest || d.getTime() >= l.earliest)
															&& (!l.latest || c
																	.getTime() <= l.latest));
									if (c.getSeconds() < 50) {
										c.setSeconds(c.getSeconds() + 10);
										d.setSeconds(d.getSeconds() + 10)
									}
								});
				c.setSeconds(Math.floor(this.time.getSeconds() / 10) * 10);
				d.setSeconds(Math.floor(this.time.getSeconds() / 10) * 10);
				a(
						"#"
								+ this.id
								+ " .AnyTime-sec-one-btn:not(.AnyTime-sec-one-btn-empty)")
						.each(
								function() {
									a(this)
											.AnyTime_current(
													this.innerHTML == r,
													(!l.earliest || d.getTime() >= l.earliest)
															&& (!l.latest || c
																	.getTime() <= l.latest));
									c.setSeconds(c.getSeconds() + 1);
									d.setSeconds(d.getSeconds() + 1)
								});
				if (this.oConv) {
					this.oConv.setUtcFormatOffsetAlleged(this.offMin);
					this.oConv.setUtcFormatOffsetSubIndex(this.offSI);
					var s = this.oConv.format(this.time);
					this.oCur.html(s)
				}
				if (b)
					this.setFocus(b);
				this.conv.setUtcFormatOffsetAlleged(this.offMin);
				this.conv.setUtcFormatOffsetSubIndex(this.offSI);
				this.inp.val(this.conv.format(this.time)).change();
				this.div.show();
				var t, u = 0, v = 0, w = 0, x = 0, y = 0;
				if (this.dY) {
					v = w = this.dY.outerWidth(true);
					u = this.yLab.AnyTime_height(true)
							+ this.dY.AnyTime_height(true)
				}
				if (this.dMo) {
					x = this.dMo.outerWidth(true);
					if (x > v)
						v = x;
					u += this.hMo.AnyTime_height(true)
							+ this.dMo.AnyTime_height(true)
				}
				if (this.dDoM) {
					y = this.dDoM.outerWidth(true);
					if (y > v)
						v = y;
					if (f || g) {
						if (x > y)
							this.dDoM.css("width", String(x) + "px");
						else if (w > y)
							this.dDoM.css("width", String(w) + "px")
					}
					u += this.hDoM.AnyTime_height(true)
							+ this.dDoM.AnyTime_height(true)
				}
				if (this.dD) {
					this.dD.css({
						width : String(v) + "px",
						height : String(u) + "px"
					});
					v += this.dMinW;
					u += this.dMinH
				}
				var z = 0, A = 0, B = 0, C = 0;
				if (this.dH) {
					z = this.dH.outerWidth(true);
					C += z + 1;
					A = this.dH.AnyTime_height(true);
					if (A > B)
						B = A
				}
				if (this.dM) {
					z = this.dM.outerWidth(true);
					C += z + 1;
					A = this.dM.AnyTime_height(true);
					if (A > B)
						B = A
				}
				if (this.dS) {
					z = this.dS.outerWidth(true);
					C += z + 1;
					A = this.dS.AnyTime_height(true);
					if (A > B)
						B = A
				}
				if (this.dO) {
					z = this.oMinW;
					if (C < z + 1)
						C = z + 1;
					B += this.dO.AnyTime_height(true)
				}
				if (this.dT) {
					this.dT.css({
						width : String(C) + "px",
						height : String(B) + "px"
					});
					C += this.tMinW + 1;
					B += this.tMinH;
					v += C;
					if (B > u)
						u = B;
					if (this.dO) {
						var D = this.dT.width() - (this.oMinW + 1);
						this.dO.css({
							width : String(D) + "px"
						});
						this.oCur.css({
							width : String(D - (this.oListMinW + 4)) + "px"
						})
					}
				}
				this.dB.css({
					height : String(u) + "px",
					width : String(v) + "px"
				});
				u += this.bMinH;
				v += this.bMinW;
				u += this.hTitle.AnyTime_height(true) + this.wMinH;
				v += this.wMinW;
				if (this.hTitle.outerWidth(true) > v)
					v = this.hTitle.outerWidth(true);
				this.div.css({
					height : String(u) + "px",
					width : String(v) + "px"
				});
				if (!this.pop)
					this.ajax()
			},
			updODiv : function(b) {
				var c, d = false, e = null;
				this.oDiv.find(".AnyTime-off-off-btn").each(function() {
					if (this.AnyTime_offMin == l.offMin) {
						if (this.AnyTime_offSI == l.offSI)
							a(this).AnyTime_current(d = true, true);
						else {
							a(this).AnyTime_current(false, true);
							if (e == null)
								e = a(this)
						}
					} else
						a(this).AnyTime_current(false, true)
				});
				if (!d && e != null)
					e.AnyTime_current(true, true);
				this.conv.setUtcFormatOffsetAlleged(this.offMin);
				this.conv.setUtcFormatOffsetSubIndex(this.offSI);
				this.inp.val(this.conv.format(this.time)).change();
				this.upd(b)
			},
			updYDiv : function(b) {
				var c, d;
				var e = 1;
				var f = this.time.getFullYear();
				if (f < 0) {
					e = -1;
					f = 0 - f
				}
				f = AnyTime.pad(f, 4);
				var g = l.earliest && (new Date(l.earliest)).getFullYear();
				var h = l.latest && (new Date(l.latest)).getFullYear();
				c = 0;
				this.yDiv
						.find(".AnyTime-mil-btn")
						.each(
								function() {
									d = (!l.earliest || e
											* (c + (e < 0 ? 0 : 999)) >= g)
											&& (!l.latest || e
													* (c + (e > 0 ? 0 : 999)) <= h);
									a(this)
											.AnyTime_current(
													this.innerHTML == f
															.substring(0, 1), d);
									c += 1e3
								});
				c = Math.floor(f / 1e3) * 1e3;
				this.yDiv
						.find(".AnyTime-cent-btn")
						.each(
								function() {
									d = (!l.earliest || e
											* (c + (e < 0 ? 0 : 99)) >= g)
											&& (!l.latest || e
													* (c + (e > 0 ? 0 : 99)) <= h);
									a(this)
											.AnyTime_current(
													this.innerHTML == f
															.substring(1, 2), d);
									c += 100
								});
				c = Math.floor(f / 100) * 100;
				this.yDiv
						.find(".AnyTime-dec-btn")
						.each(
								function() {
									d = (!l.earliest || e
											* (c + (e < 0 ? 0 : 9)) >= g)
											&& (!l.latest || e
													* (c + (e > 0 ? 0 : 9)) <= h);
									a(this)
											.AnyTime_current(
													this.innerHTML == f
															.substring(2, 3), d);
									c += 10
								});
				c = Math.floor(f / 10) * 10;
				this.yDiv.find(".AnyTime-yr-btn").each(
						function() {
							d = (!l.earliest || e * c >= g)
									&& (!l.latest || e * c <= h);
							a(this).AnyTime_current(
									this.innerHTML == f.substring(3), d);
							c += 1
						});
				this.yDiv.find(".AnyTime-bce-btn").each(
						function() {
							a(this).AnyTime_current(e < 0,
									!l.earliest || l.earliest < 0)
						});
				this.yDiv.find(".AnyTime-ce-btn").each(function() {
					a(this).AnyTime_current(e > 0, !l.latest || l.latest > 0)
				});
				this.conv.setUtcFormatOffsetAlleged(this.offMin);
				this.conv.setUtcFormatOffsetSubIndex(this.offSI);
				this.inp.val(this.conv.format(this.time)).change();
				this.upd(b)
			}
		};
		h[j].initialize(j)
	};
	AnyTime.setEarliest = function(a, b) {
		h[a].setEarliest(b)
	};
	AnyTime.setLatest = function(a, b) {
		h[a].setLatest(b)
	}
})(jQuery);