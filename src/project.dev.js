window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AudioControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "664279/o+RL5IaPi1BUpLCa", "AudioControl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AudioControl = function(_super) {
      __extends(AudioControl, _super);
      function AudioControl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AudioControl.prototype.onLoad = function() {};
      AudioControl.prototype.startAudio = function(audioid, waitetime) {
        var self = this;
        var delay = cc.delayTime(waitetime);
        var callback = cc.callFunc(function() {
          self.node.getComponent(cc.AudioSource).play();
        });
        this.node.runAction(cc.sequence(delay, callback));
      };
      AudioControl.prototype.endAudio = function() {
        this.node.getComponent(cc.AudioSource).stop();
      };
      AudioControl.prototype.pauseAudio = function() {
        this.node.getComponent(cc.AudioSource).pause();
      };
      AudioControl.prototype.resumeAudio = function() {
        this.node.getComponent(cc.AudioSource).resume();
      };
      AudioControl = __decorate([ ccclass ], AudioControl);
      return AudioControl;
    }(cc.Component);
    exports.default = AudioControl;
    cc._RF.pop();
  }, {} ],
  BhvButtonGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41df676L55LvJ52uxkQpfxJ", "BhvButtonGroup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var PARAM_TYPE;
    (function(PARAM_TYPE) {
      PARAM_TYPE[PARAM_TYPE["CHILDREN_INDEX"] = 0] = "CHILDREN_INDEX";
      PARAM_TYPE[PARAM_TYPE["CHILDREN_NAME"] = 1] = "CHILDREN_NAME";
    })(PARAM_TYPE || (PARAM_TYPE = {}));
    var BhvButtonGroup = function(_super) {
      __extends(BhvButtonGroup, _super);
      function BhvButtonGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.transition = cc.Button.Transition.NONE;
        _this.hoverColor = cc.color(255, 255, 255);
        _this.normalColor = cc.color(214, 214, 214);
        _this.pressedColor = cc.color(211, 211, 211);
        _this.disabledColor = cc.color(124, 124, 124);
        _this.normalSprite = null;
        _this.pressedSprite = null;
        _this.hoverSprite = null;
        _this.disabledSprite = null;
        _this.duration = 1;
        _this.zoomScale = 1.1;
        _this.paramType = PARAM_TYPE.CHILDREN_INDEX;
        _this.touchEvents = [];
        return _this;
      }
      BhvButtonGroup.prototype.onLoad = function() {
        var _this = this;
        this.node.children.forEach(function(node, nodeIndex) {
          var comp = node.getComponent(cc.Button);
          null == comp && (comp = node.addComponent(cc.Button));
          comp.target = node;
          comp.transition = _this.transition;
          comp.zoomScale = _this.zoomScale;
          comp.disabledSprite = _this.disabledSprite;
          comp.hoverSprite = _this.hoverSprite;
          comp.normalSprite = _this.normalSprite;
          comp.pressedSprite = _this.pressedSprite;
          comp.hoverColor = _this.hoverColor;
          comp.normalColor = _this.normalColor;
          comp.pressedColor = _this.pressedColor;
          comp.disabledColor = _this.disabledColor;
          _this.touchEvents.forEach(function(event) {
            var hd = new cc.Component.EventHandler();
            hd.component = event.component;
            hd.handler = event.handler;
            hd.target = event.target;
            _this.paramType === PARAM_TYPE.CHILDREN_INDEX ? hd.customEventData = nodeIndex.toString() : hd.customEventData = node.name;
            comp.clickEvents.push(hd);
          });
        });
      };
      __decorate([ property({
        type: cc.Enum(cc.Button.Transition)
      }) ], BhvButtonGroup.prototype, "transition", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "hoverColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "normalColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "pressedColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "disabledColor", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "normalSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "pressedSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "hoverSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "disabledSprite", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.SCALE || this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "duration", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.SCALE;
        }
      }) ], BhvButtonGroup.prototype, "zoomScale", void 0);
      __decorate([ property({
        type: cc.Enum(PARAM_TYPE)
      }) ], BhvButtonGroup.prototype, "paramType", void 0);
      __decorate([ property([ cc.Component.EventHandler ]) ], BhvButtonGroup.prototype, "touchEvents", void 0);
      BhvButtonGroup = __decorate([ ccclass, menu("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Button Group(\u4e00\u7ec4\u6309\u94ae\u63a7\u5236)") ], BhvButtonGroup);
      return BhvButtonGroup;
    }(cc.Component);
    exports.default = BhvButtonGroup;
    cc._RF.pop();
  }, {} ],
  BhvFrameIndex: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c238ewfJ2VJnZ8Gb8YQs5Ts", "BhvFrameIndex");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
    var BhvFrameIndex = function(_super) {
      __extends(BhvFrameIndex, _super);
      function BhvFrameIndex() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spriteFrames = [ null ];
        _this._index = 0;
        return _this;
      }
      Object.defineProperty(BhvFrameIndex.prototype, "index", {
        get: function() {
          return this._index;
        },
        set: function(value) {
          if (value < 0) return;
          this._index = value % this.spriteFrames.length;
          var sprite = this.node.getComponent(cc.Sprite);
          sprite.spriteFrame = this.spriteFrames[this._index];
        },
        enumerable: true,
        configurable: true
      });
      BhvFrameIndex.prototype.setName = function(name) {
        var index = this.spriteFrames.findIndex(function(v) {
          return v.name == name;
        });
        index < 0 && cc.error("frameIndex \u8bbe\u7f6e\u4e86\u4e0d\u5b58\u5728\u7684name:", name);
        this.index = index || 0;
      };
      BhvFrameIndex.prototype.random = function(min, max) {
        if (!this.spriteFrames) return;
        var frameMax = this.spriteFrames.length;
        (null == min || min < 0) && (min = 0);
        (null == max || max > frameMax) && (max = frameMax);
        this.index = Math.floor(Math.random() * (max - min) + min);
      };
      BhvFrameIndex.prototype.next = function() {
        this.index++;
      };
      BhvFrameIndex.prototype.previous = function() {
        this.index--;
      };
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        tooltip: "sprite\u5c06\u4f1a\u7528\u5230\u5e27\u56fe\u7247"
      }) ], BhvFrameIndex.prototype, "spriteFrames", void 0);
      __decorate([ property({
        tooltip: "\u5f53\u524d\u663e\u793a\u7684\u5e27\u56fe",
        type: cc.Integer
      }) ], BhvFrameIndex.prototype, "index", null);
      __decorate([ property ], BhvFrameIndex.prototype, "_index", void 0);
      BhvFrameIndex = __decorate([ ccclass, executeInEditMode, requireComponent(cc.Sprite), menu("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Frame Index(\u5e27\u56fe\u6539\u53d8)") ], BhvFrameIndex);
      return BhvFrameIndex;
    }(cc.Component);
    exports.default = BhvFrameIndex;
    cc._RF.pop();
  }, {} ],
  BhvRollNumber: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72d13dwmG9LS4gkJhSuAp3F", "BhvRollNumber");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var VALUE_TYPE;
    (function(VALUE_TYPE) {
      VALUE_TYPE[VALUE_TYPE["INTEGER"] = 0] = "INTEGER";
      VALUE_TYPE[VALUE_TYPE["FIXED_2"] = 1] = "FIXED_2";
      VALUE_TYPE[VALUE_TYPE["TIMER"] = 2] = "TIMER";
      VALUE_TYPE[VALUE_TYPE["PERCENTAGE"] = 3] = "PERCENTAGE";
      VALUE_TYPE[VALUE_TYPE["KMBT_FIXED2"] = 4] = "KMBT_FIXED2";
      VALUE_TYPE[VALUE_TYPE["CUSTOMER"] = 5] = "CUSTOMER";
    })(VALUE_TYPE || (VALUE_TYPE = {}));
    var BhvRollNumber = function(_super) {
      __extends(BhvRollNumber, _super);
      function BhvRollNumber() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.value = 0;
        _this.showPlusSymbol = false;
        _this._targetValue = 100;
        _this.lerp = .1;
        _this.playAtStart = true;
        _this.runWaitTimer = 0;
        _this.valueType = VALUE_TYPE.INTEGER;
        _this._custom_callback = null;
        _this.isScrolling = false;
        _this._lastLabelText = "";
        return _this;
      }
      Object.defineProperty(BhvRollNumber.prototype, "targetValue", {
        get: function() {
          return this._targetValue;
        },
        set: function(v) {
          this._targetValue = v;
          this.scroll();
        },
        enumerable: true,
        configurable: true
      });
      BhvRollNumber.prototype.onLoad = function() {
        void 0 == this.label && (this.label = this.node.getComponent(cc.Label));
        if (this.playAtStart) {
          this.updateLabel();
          this.scroll();
        }
      };
      BhvRollNumber.prototype.scroll = function() {
        var _this = this;
        if (this.isScrolling) return;
        this.runWaitTimer > 0 ? this.scheduleOnce(function() {
          _this.isScrolling = true;
        }, this.runWaitTimer) : this.isScrolling = true;
      };
      BhvRollNumber.prototype.stop = function() {
        this.value = this.targetValue;
        this.isScrolling = false;
        this.updateLabel();
      };
      BhvRollNumber.prototype.init = function(value, target, lerp) {
        this.targetValue = target || 0;
        this.value = value || 0;
        this.lerp = lerp || .1;
      };
      BhvRollNumber.prototype.scrollTo = function(target) {
        if (null === target || void 0 === target) return;
        this.targetValue = target;
      };
      BhvRollNumber.prototype.updateLabel = function() {
        var value = this.value;
        var string = "";
        switch (this.valueType) {
         case VALUE_TYPE.INTEGER:
          string = Math.round(value) + "";
          break;

         case VALUE_TYPE.FIXED_2:
          string = value.toFixed(2);
          break;

         case VALUE_TYPE.TIMER:
          string = parseTimer(value);
          break;

         case VALUE_TYPE.PERCENTAGE:
          string = Math.round(100 * value) + "%";
          break;

         case VALUE_TYPE.KMBT_FIXED2:
          string = value >= Number.MAX_VALUE ? "MAX" : value > 1e12 ? (value / 1e12).toFixed(2) + "T" : value > 1e9 ? (value / 1e9).toFixed(2) + "B" : value > 1e6 ? (value / 1e6).toFixed(2) + "M" : value > 1e3 ? (value / 1e3).toFixed(2) + "K" : Math.round(value).toString();
          break;

         case VALUE_TYPE.CUSTOMER:
          this._custom_callback && (string = this._custom_callback(this.value, this.targetValue));
        }
        this.showPlusSymbol && (value > 0 ? string = "+" + string : value < 0 && (string = "-" + string));
        if (this.label) {
          if (string === this.label.string) return;
          this.label.string = string;
        }
      };
      BhvRollNumber.prototype.update = function(dt) {
        if (false == this.isScrolling) return;
        this.value = cc.misc.lerp(this.value, this.targetValue, this.lerp);
        this.updateLabel();
        if (Math.abs(this.value - this.targetValue) <= 1e-4) {
          this.value = this.targetValue;
          this.isScrolling = false;
          return;
        }
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u9700\u8981\u6eda\u52a8\u7684 Label \u7ec4\u4ef6,\u5982\u679c\u4e0d\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5c31\u4f1a\u4ece\u81ea\u5df1\u7684\u8282\u70b9\u81ea\u52a8\u67e5\u627e"
      }) ], BhvRollNumber.prototype, "label", void 0);
      __decorate([ property({
        tooltip: "\u5f53\u524d\u7684\u6eda\u52a8\u503c(\u5f00\u59cb\u7684\u6eda\u52a8\u503c)"
      }) ], BhvRollNumber.prototype, "value", void 0);
      __decorate([ property({
        tooltip: "\u662f\u5426\u663e\u793a\u6b63\u8d1f\u7b26\u53f7"
      }) ], BhvRollNumber.prototype, "showPlusSymbol", void 0);
      __decorate([ property({
        tooltip: "\u6eda\u52a8\u7684\u76ee\u6807\u503c"
      }) ], BhvRollNumber.prototype, "targetValue", null);
      __decorate([ property ], BhvRollNumber.prototype, "_targetValue", void 0);
      __decorate([ property({
        tooltip: "\u6eda\u52a8\u7684\u7ebf\u6027\u5dee\u503c",
        step: .01,
        max: 1,
        min: 0
      }) ], BhvRollNumber.prototype, "lerp", void 0);
      __decorate([ property({
        tooltip: "\u662f\u5426\u5728\u5f00\u59cb\u65f6\u5c31\u64ad\u653e"
      }) ], BhvRollNumber.prototype, "playAtStart", void 0);
      __decorate([ property({
        tooltip: "\u5728\u6eda\u52a8\u4e4b\u524d\u4f1a\u7b49\u5f85\u51e0\u79d2",
        step: .1,
        max: 1,
        min: 0
      }) ], BhvRollNumber.prototype, "runWaitTimer", void 0);
      __decorate([ property({
        type: cc.Enum(VALUE_TYPE),
        tooltip: "\u662f\u5426\u5728\u5f00\u59cb\u65f6\u5c31\u64ad\u653e"
      }) ], BhvRollNumber.prototype, "valueType", void 0);
      BhvRollNumber = __decorate([ ccclass, menu("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Roll Number (\u6eda\u52a8\u6570\u5b57)") ], BhvRollNumber);
      return BhvRollNumber;
    }(cc.Component);
    exports.default = BhvRollNumber;
    function parseTimer(timer, isFullTimer) {
      void 0 === timer && (timer = 0);
      void 0 === isFullTimer && (isFullTimer = true);
      var t = Math.floor(timer);
      var hours = Math.floor(t / 3600);
      var mins = Math.floor(t % 3600 / 60);
      var secs = t % 60;
      var m = "" + mins;
      var s = "" + secs;
      secs < 10 && (s = "0" + secs);
      if (isFullTimer) {
        mins < 10 && (m = "0" + mins);
        return hours + ":" + m + ":" + s;
      }
      m = "" + (mins + 60 * hours);
      mins < 10 && (m = "0" + mins);
      return m + ":" + s;
    }
    cc._RF.pop();
  }, {} ],
  BhvSwitchPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3d083kncpDPqVztMtiq6DO", "BhvSwitchPage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var BhvSwitchPage = function(_super) {
      __extends(BhvSwitchPage, _super);
      function BhvSwitchPage() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLoopPage = false;
        _this._index = 0;
        _this.preIndex = 0;
        _this._isChanging = false;
        return _this;
      }
      Object.defineProperty(BhvSwitchPage.prototype, "index", {
        get: function() {
          return this._index;
        },
        set: function(v) {
          if (this.isChanging) return;
          v = Math.round(v);
          var count = this.node.childrenCount - 1;
          if (this.isLoopPage) {
            v > count && (v = 0);
            v < 0 && (v = count);
          } else {
            v > count && (v = count);
            v < 0 && (v = 0);
          }
          this.preIndex = this._index;
          this._index = v;
          false;
          this._updatePage(v);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BhvSwitchPage.prototype, "isChanging", {
        get: function() {
          return this._isChanging;
        },
        enumerable: true,
        configurable: true
      });
      BhvSwitchPage.prototype.onLoad = function() {
        this.preIndex = this.index;
      };
      BhvSwitchPage.prototype._updateEditorPage = function(page) {
        true;
        return;
        var children;
        var i;
        var node;
      };
      BhvSwitchPage.prototype._updatePage = function(page) {
        var children = this.node.children;
        var preIndex = this.preIndex;
        var curIndex = this.index;
        if (preIndex === curIndex) return;
        var preNode = children[preIndex];
        var showNode = children[curIndex];
        preNode.active = false;
        showNode.active = true;
      };
      BhvSwitchPage.prototype.next = function() {
        if (this.isChanging) return false;
        this.index++;
        return true;
      };
      BhvSwitchPage.prototype.previous = function() {
        if (this.isChanging) return false;
        this.index--;
        return true;
      };
      BhvSwitchPage.prototype.setEventIndex = function(e, index) {
        if (this.index >= 0 && null != this.index && false === this.isChanging) {
          this.index = index;
          return true;
        }
        return false;
      };
      __decorate([ property ], BhvSwitchPage.prototype, "isLoopPage", void 0);
      __decorate([ property ], BhvSwitchPage.prototype, "_index", void 0);
      __decorate([ property({
        type: cc.Integer
      }) ], BhvSwitchPage.prototype, "index", null);
      BhvSwitchPage = __decorate([ ccclass, executeInEditMode, menu("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Switch Page (\u5207\u6362\u9875\u9762)") ], BhvSwitchPage);
      return BhvSwitchPage;
    }(cc.Component);
    exports.default = BhvSwitchPage;
    cc._RF.pop();
  }, {} ],
  EditCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9aec3SlghEaauFy1ghMLvV", "EditCell");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EditMode_1 = require("./EditMode");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EditCell = function(_super) {
      __extends(EditCell, _super);
      function EditCell() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeLabel = null;
        _this.Edit_Mode = null;
        _this.deletemode = null;
        _this.cell = [ null ];
        _this.celltype = [ null ];
        _this.cell_code = 0;
        _this.path = 0;
        _this.indeletemode = false;
        return _this;
      }
      EditCell.prototype.onLoad = function() {
        (this.Edit_Mode = cc.find("Canvas/Edit Mode")) ? console.log("finde editmode success") : console.log("Error");
        for (var i = 0; i < this.celltype.length; i++) this.celltype[i].active = false;
        this.deletemode.active = false;
      };
      EditCell.prototype.Refresh = function(path, type) {
        this.Edit_Mode.getComponent(EditMode_1.default).notpushtostep || this.Edit_Mode.getComponent(EditMode_1.default).PushCancelPoor(0, this.cell_code, this.Edit_Mode.getComponent(EditMode_1.default).edit_cell_awake[this.cell_code].type, this.path, this.Edit_Mode.getComponent(EditMode_1.default).edit_cell_awake[this.cell_code].time);
        console.log("Refresh");
        this.path = path;
        this.Edit_Mode.getComponent(EditMode_1.default).ChangeEditCell(this.cell_code, this.path);
        for (var i = 0; i < this.cell.length; i++) this.cell[i].opacity = i == path ? 0 : 50;
        for (var k = 0; k < this.celltype.length; k++) if (k == type) {
          this.celltype[k].active = true;
          switch (this.path) {
           case 0:
            this.celltype[k].position = cc.v2(-360, 0);
            break;

           case 1:
            this.celltype[k].position = cc.v2(-120, 0);
            break;

           case 2:
            this.celltype[k].position = cc.v2(120, 0);
            break;

           case 3:
            this.celltype[k].position = cc.v2(360, 0);
            break;

           default:
            console.log("\u8282\u70b9\u914d\u7f6epath\u5931\u8d25");
          }
        } else this.celltype[k].active = false;
      };
      EditCell.prototype.DeleteMode = function() {
        if (this.indeletemode) {
          this.deletemode.active = false;
          this.indeletemode = false;
        } else {
          this.indeletemode = true;
          this.deletemode.active = true;
        }
      };
      EditCell.prototype.DeleteThisNode = function() {
        this.Edit_Mode.getComponent(EditMode_1.default).DeleteKeyNode(this.cell_code);
      };
      EditCell.prototype.Pathbutton1 = function() {
        console.log("click 1");
        this.Refresh(0, this.Edit_Mode.getComponent(EditMode_1.default).what_type_now);
      };
      EditCell.prototype.Pathbutton2 = function() {
        console.log("click 2");
        this.Refresh(1, this.Edit_Mode.getComponent(EditMode_1.default).what_type_now);
      };
      EditCell.prototype.Pathbutton3 = function() {
        console.log("click 3");
        this.Refresh(2, this.Edit_Mode.getComponent(EditMode_1.default).what_type_now);
      };
      EditCell.prototype.pathbutton4 = function() {
        console.log("click 4");
        this.Refresh(3, this.Edit_Mode.getComponent(EditMode_1.default).what_type_now);
      };
      __decorate([ property(cc.Label) ], EditCell.prototype, "timeLabel", void 0);
      __decorate([ property(cc.Node) ], EditCell.prototype, "Edit_Mode", void 0);
      __decorate([ property(cc.Node) ], EditCell.prototype, "deletemode", void 0);
      __decorate([ property(cc.Node) ], EditCell.prototype, "cell", void 0);
      __decorate([ property(cc.Node) ], EditCell.prototype, "celltype", void 0);
      EditCell = __decorate([ ccclass ], EditCell);
      return EditCell;
    }(cc.Component);
    exports.default = EditCell;
    cc._RF.pop();
  }, {
    "./EditMode": "EditMode"
  } ],
  EditMode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfaffK8U25BsauHpQSLdt51", "EditMode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EditCell_1 = require("./EditCell");
    var MVVMData_1 = require("./MVVMData");
    var PreviewMode_1 = require("./PreviewMode");
    var FileSaver = require("./FileSaver");
    var COS = require("./cos-wx-sdk-v5.js");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EditCellAwake = function() {
      function EditCellAwake(x) {
        void 0 === x && (x = 0);
        this.code = 0;
        this.edit_cell = null;
        this.path = 0;
        this.type = 0;
        this.time = 0;
        this.code = x;
        this.edit_cell = null;
        this.time = 0;
        this.path = 0;
        this.type = 0;
      }
      return EditCellAwake;
    }();
    exports.EditCellAwake = EditCellAwake;
    var Step = function() {
      function Step() {
        this.type = 0;
        this.cellcode = 0;
        this.celltype = 0;
        this.cellpath = 0;
        this.celltime = 0;
      }
      return Step;
    }();
    exports.Step = Step;
    var EditMode = function(_super) {
      __extends(EditMode, _super);
      function EditMode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Edit_UI = [ null ];
        _this.player = null;
        _this.startpanel = null;
        _this.editcellnode = null;
        _this.blockinput = null;
        _this.edit_cell_prefab = null;
        _this.newkeynodeinput = null;
        _this.tipslabel = null;
        _this.readpanel = null;
        _this.savepanel = null;
        _this.previewmode = null;
        _this.what_type_now = 0;
        _this.in_edit_mode = false;
        _this.MusicInfo = [ 0 ];
        _this.isexpand = false;
        _this.notpushtostep = false;
        _this.edit_cell_awake = [];
        _this.cancelpoor = [];
        _this.selectedsong = null;
        _this.newkeynodetime = null;
        return _this;
      }
      EditMode.prototype.onLoad = function() {
        for (var i = 0; i < this.Edit_UI.length; i++) this.Edit_UI[i].active = false;
        this.newkeynodeinput.node.active = false;
        this.tipslabel.node.active = false;
        this.blockinput.active = false;
        this.readpanel.active = false;
        this.savepanel.active = false;
      };
      EditMode.prototype.EditMode = function() {
        if (this.in_edit_mode) {
          console.log("edit mode out");
          this.in_edit_mode = false;
          this.EditModeControl(false);
          this.EditSave(null, "0");
          cc.director.loadScene("game");
        } else {
          console.log("in edit mode");
          this.in_edit_mode = true;
          this.Edit_UI[0].active = true;
          cc.director.resume();
          this.startpanel.position = cc.v2(-2e3, 0);
          this.EditModeControl(true);
        }
      };
      EditMode.prototype.PushCancelPoor = function(steptype, code, celltype, cellpath, time) {
        var x = new Step();
        x.type = steptype;
        x.cellcode = code;
        x.celltype = celltype;
        x.cellpath = cellpath;
        x.celltime = time;
        this.cancelpoor.push(x);
        console.log("\u4fdd\u5b58\u64cd\u4f5c\uff1a" + steptype + ",\u8282\u70b9\u4e3a:" + code + ",\u7c7b\u578b:" + celltype + ",\u8f68\u9053\uff1a" + cellpath + ",\u65f6\u95f4:" + time);
      };
      EditMode.prototype.CancelButton = function() {
        if (0 == this.cancelpoor.length) this.ShowTips("\u65e0\u8bb0\u5f55"); else {
          var x = this.cancelpoor.pop();
          switch (x.type) {
           case 0:
            this.ShowTips("\u8282\u70b9\u6539\u52a8\u64a4\u56de");
            this.notpushtostep = true;
            var k = this.what_type_now;
            this.what_type_now = x.celltype;
            this.edit_cell_awake[x.cellcode].edit_cell.getComponent(EditCell_1.default).Refresh(x.cellpath, x.celltype);
            this.what_type_now = k;
            this.notpushtostep = false;
            break;

           case 1:
            this.ShowTips("\u5220\u9664\u65b0\u5efa\u8282\u70b9");
            this.notpushtostep = true;
            this.DeleteKeyNode(x.cellcode);
            this.notpushtostep = false;
            break;

           case 2:
            this.ShowTips("\u6062\u590d\u5220\u9664\u8282\u70b9");
            this.notpushtostep = true;
            this.NewKeynode(x.celltime);
            var i = this.what_type_now;
            this.what_type_now = x.celltype;
            this.edit_cell_awake[x.cellcode].edit_cell.getComponent(EditCell_1.default).Refresh(x.cellpath, x.celltype);
            this.what_type_now = i;
            this.notpushtostep = false;
          }
        }
      };
      EditMode.prototype.EditModeControl = function(on_or_off) {
        on_or_off ? cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.KeyDown, this) : cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.KeyDown, this);
      };
      EditMode.prototype.KeyDown = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.w:
          console.log("\u524d\u8fdb");
          cc.tween(MVVMData_1.view).by(.2, {
            viewposition: 600
          }).start();
          break;

         case cc.macro.KEY.s:
          console.log("\u540e\u9000");
          cc.tween(MVVMData_1.view).by(.2, {
            viewposition: -600
          }).start();
          break;

         case cc.macro.KEY.f1:
          this.UI_selecttype(null, "0");
          break;

         case cc.macro.KEY.f2:
          this.UI_selecttype(null, "1");
          break;

         case cc.macro.KEY.f3:
          this.UI_selecttype(null, "2");
          break;

         case cc.macro.KEY.f4:
          this.UI_selecttype(null, "3");
        }
      };
      EditMode.prototype.Expand = function() {
        var x = 0, min = Infinity, code = 0;
        if (this.isexpand) {
          this.isexpand = false;
          for (var number = 0; number < this.edit_cell_awake.length; number++) {
            x = this.player.position.y - this.edit_cell_awake[number].edit_cell.position.y;
            if (Math.abs(min) > Math.abs(x)) {
              min = x;
              code = number;
            }
            this.edit_cell_awake[number].edit_cell.position = cc.v2(0, 150 * number - 500);
          }
          if (!this.previewmode.getComponent(PreviewMode_1.default).inpreviewmode) {
            MVVMData_1.view.maxposition = this.edit_cell_awake[this.edit_cell_awake.length - 1].edit_cell.position.y + 500;
            MVVMData_1.view.viewposition = this.edit_cell_awake[code].edit_cell.position.y;
            this.player.position = cc.v2(0, this.edit_cell_awake[code].edit_cell.position.y);
          }
        } else {
          this.isexpand = true;
          for (var number = 0; number < this.edit_cell_awake.length; number++) {
            x = this.player.position.y - this.edit_cell_awake[number].edit_cell.position.y;
            if (Math.abs(min) > Math.abs(x)) {
              min = x;
              code = number;
            }
            this.edit_cell_awake[number].edit_cell.position = cc.v2(0, 1e3 * this.edit_cell_awake[number]["time"] - 500);
          }
          if (!this.previewmode.getComponent(PreviewMode_1.default).inpreviewmode) {
            MVVMData_1.view.maxposition = this.edit_cell_awake[this.edit_cell_awake.length - 1].edit_cell.position.y + 500;
            MVVMData_1.view.viewposition = this.edit_cell_awake[code].edit_cell.position.y;
            this.player.position = cc.v2(0, this.edit_cell_awake[code].edit_cell.position.y);
          }
        }
      };
      EditMode.prototype.ReadLocal = function() {
        var _this = this;
        var localmusicinfo = JSON.parse(cc.sys.localStorage.getItem(this.selectedsong));
        if (localmusicinfo) {
          this.ShowTips("\u83b7\u53d6\u672c\u5730\u4fe1\u606f\u6210\u529f");
          console.log("\u83b7\u53d6\u672c\u5730\u4fe1\u606f\u6210\u529f");
          this.MusicInfo = localmusicinfo;
          this.WriteEditPath();
        } else {
          this.ShowTips("\u83b7\u53d6\u672c\u5730\u4fe1\u606f\u5931\u8d25,\u6b63\u5728\u8bfb\u53d6\u521d\u59cb\u7248\u672c");
          console.log("\u83b7\u53d6\u672c\u5730\u4fe1\u606f\u5931\u8d25,\u6b63\u5728\u8bfb\u53d6\u521d\u59cb\u7248\u672c");
          var self_1 = this;
          cc.loader.loadRes("json/" + self_1.selectedsong, function(err, data) {
            if (err) console.log(err); else {
              var Info = data.json;
              self_1.MusicInfo = Info;
              console.log("musicinfo    " + _this.MusicInfo.length);
            }
            _this.WriteEditPath();
          });
        }
        this.ShowOrHideReadPanel(false);
      };
      EditMode.prototype.ReadCloud = function() {
        this.DownloadJson();
        this.ShowOrHideReadPanel(false);
      };
      EditMode.prototype.WriteEditPath = function() {
        this.notpushtostep = true;
        for (var number = 0; number < this.MusicInfo.length; number++) {
          this.edit_cell_awake[number] = new EditCellAwake(number);
          this.edit_cell_awake[number].time = this.MusicInfo[number]["time"];
          this.edit_cell_awake[number].edit_cell = cc.instantiate(this.edit_cell_prefab);
          this.edit_cell_awake[number].edit_cell.parent = this.editcellnode;
          this.edit_cell_awake[number].edit_cell.position = cc.v2(0, 150 * number - 500);
          this.edit_cell_awake[number].edit_cell.getComponent(EditCell_1.default).cell_code = number;
          this.edit_cell_awake[number].edit_cell.getComponent(EditCell_1.default).timeLabel.string = this.MusicInfo[number]["time"].toFixed(2);
          console.log("create edit cell:" + number);
          console.log(this.edit_cell_awake[number].edit_cell.position);
          this.what_type_now = this.MusicInfo[number]["type"];
          this.edit_cell_awake[number].type = this.MusicInfo[number]["type"];
          this.edit_cell_awake[number].path = this.MusicInfo[number]["path"];
          console.log("\u8bfb\u53d6\u7b2c" + this.edit_cell_awake[number].code + "\u53f7\u8282\u70b9:\u8f68\u9053:" + this.edit_cell_awake[number].path + "\u7c7b\u578b:" + this.edit_cell_awake[number].type);
          this.edit_cell_awake[number].edit_cell.getComponent(EditCell_1.default).Refresh(this.MusicInfo[number]["path"], this.MusicInfo[number]["type"]);
        }
        MVVMData_1.view.maxposition = this.edit_cell_awake[this.edit_cell_awake.length - 1].edit_cell.position.y + 500;
        this.notpushtostep = false;
      };
      EditMode.prototype.EditSave = function(x, exportfile) {
        for (var number = 0; number < this.edit_cell_awake.length; number++) {
          this.edit_cell_awake[number] || (this.edit_cell_awake[number] = new EditCellAwake(number));
          this.edit_cell_awake[number].edit_cell = null;
          console.log("\u4fdd\u5b58\u7b2c" + this.edit_cell_awake[number].code + "\u53f7\u8282\u70b9:\u8f68\u9053:" + this.edit_cell_awake[number].path + "\u7c7b\u578b:" + this.edit_cell_awake[number].type);
        }
        if ("0" == exportfile) {
          cc.sys.localStorage.setItem(this.selectedsong, JSON.stringify(this.edit_cell_awake));
          this.ShowTips("\u4fdd\u5b58\u672c\u5730\u6210\u529f");
          console.log("\u4fdd\u5b58\u672c\u5730\u6210\u529f");
        } else {
          cc.sys.localStorage.setItem(this.selectedsong, JSON.stringify(this.edit_cell_awake));
          var playerdata = JSON.parse(cc.sys.localStorage.getItem(this.selectedsong));
          var content = JSON.stringify(playerdata);
          var blob = new Blob([ content ], {
            type: "text/plain;charset=utf-8"
          });
          FileSaver.saveAs(blob, this.selectedsong + ".json");
          this.ShowTips("\u4fdd\u5b58\u4e91\u7aef\u6210\u529f");
          console.log("\u4fdd\u5b58\u4e91\u7aef\u6210\u529f");
        }
        this.ShowOrHideSavePanel(false);
      };
      EditMode.prototype.ChangeEditCell = function(cellcode, path) {
        this.edit_cell_awake[cellcode].path = path;
        this.edit_cell_awake[cellcode].type = this.what_type_now;
        console.log("\u8282\u70b9" + cellcode + "\u7684\u5df2\u66f4\u65b0,path\uff1a" + path + ",\u7c7b\u578b:" + this.what_type_now);
      };
      EditMode.prototype.NewKeyNodeButton = function() {
        this.blockinput.active = true;
        this.newkeynodeinput.string = "";
        this.newkeynodeinput.node.opacity = 0;
        this.newkeynodeinput.node.active = true;
        this.ShowTips("\u8bf7\u8f93\u5165\u4e00\u4e2a\u6570\u5b57");
        cc.tween(this.newkeynodeinput.node).to(.2, {
          opacity: 255
        }).start();
      };
      EditMode.prototype.NewKeyNodeInputCallFuc = function() {
        var _this = this;
        this.blockinput.active = false;
        this.newkeynodetime = parseFloat(this.newkeynodeinput.string);
        this.ShowTips(this.newkeynodetime.toString());
        if ("" == this.newkeynodeinput.string || "number" != typeof this.newkeynodetime) {
          this.newkeynodeinput.string = "";
          console.log("\u975e\u6cd5\u8f93\u5165");
          this.ShowTips("\u975e\u6cd5\u8f93\u5165");
          cc.tween(this.newkeynodeinput.node).to(.5, {
            opacity: 0
          }).call(function() {
            _this.newkeynodeinput.node.active = false;
          }).start();
          return;
        }
        cc.tween(this.newkeynodeinput.node).to(.5, {
          opacity: 0
        }).call(function() {
          _this.newkeynodeinput.node.active = false;
        }).start();
        this.NewKeynode(this.newkeynodetime);
      };
      EditMode.prototype.NewKeynode = function(time) {
        var newkeynode = new EditCellAwake();
        newkeynode.time = time;
        var inserted = false;
        for (var i = 0; i < this.edit_cell_awake.length; i++) {
          if (this.edit_cell_awake[i].time < newkeynode.time) ; else if (inserted) {
            this.edit_cell_awake[i].code = i;
            this.edit_cell_awake[i].edit_cell.getComponent(EditCell_1.default).cell_code = i;
          } else {
            inserted = true;
            newkeynode.code = i;
            this.edit_cell_awake.splice(i, 0, newkeynode);
          }
          if (!inserted && i == this.edit_cell_awake.length - 1) {
            inserted = true;
            newkeynode.code = this.edit_cell_awake.length;
            this.edit_cell_awake.push(newkeynode);
          }
        }
        this.edit_cell_awake[newkeynode.code].edit_cell = cc.instantiate(this.edit_cell_prefab);
        this.edit_cell_awake[newkeynode.code].edit_cell.parent = this.editcellnode;
        this.edit_cell_awake[newkeynode.code].edit_cell.getComponent(EditCell_1.default).cell_code = newkeynode.code;
        this.edit_cell_awake[newkeynode.code].edit_cell.getComponent(EditCell_1.default).timeLabel.string = this.edit_cell_awake[newkeynode.code]["time"].toFixed(2);
        this.Expand();
        this.Expand();
        this.player.position = this.edit_cell_awake[newkeynode.code].edit_cell.position;
        for (var i = 0; i < this.edit_cell_awake.length; i++) console.log("\u66f4\u65b0\u8282\u70b9\uff1a" + this.edit_cell_awake[i].code + "  CellCode:" + this.edit_cell_awake[i].edit_cell.getComponent(EditCell_1.default).cell_code + "  \u65f6\u95f4\uff1a" + this.edit_cell_awake[i].time);
        this.notpushtostep || this.PushCancelPoor(1, newkeynode.code, newkeynode.type, newkeynode.path, newkeynode.time);
      };
      EditMode.prototype.DeleteKeyNodeButton = function() {
        var newkeybutton = cc.find("Canvas/Edit Mode/NewKeyNodeButton");
        newkeybutton.active = !newkeybutton.active;
        for (var i = 0; i < this.edit_cell_awake.length; i++) this.edit_cell_awake[i].edit_cell.getComponent(EditCell_1.default).DeleteMode();
      };
      EditMode.prototype.DeleteKeyNode = function(code) {
        this.notpushtostep || this.PushCancelPoor(2, code, this.edit_cell_awake[code].type, this.edit_cell_awake[code].path, this.edit_cell_awake[code].time);
        console.log("\u5220\u9664\u8282\u70b9" + code);
        this.edit_cell_awake[code].edit_cell.destroy();
        delete this.edit_cell_awake[code];
        this.edit_cell_awake.splice(code, 1);
        for (var i = code; i < this.edit_cell_awake.length; i++) {
          this.edit_cell_awake[i].code = i;
          this.edit_cell_awake[i].edit_cell.getComponent(EditCell_1.default).cell_code = i;
        }
        for (var i = 0; i < this.edit_cell_awake.length; i++) console.log("\u66f4\u65b0\u8282\u70b9\uff1a" + this.edit_cell_awake[i].code + "  CellCode:" + this.edit_cell_awake[i].edit_cell.getComponent(EditCell_1.default).cell_code + "  \u65f6\u95f4\uff1a" + this.edit_cell_awake[i].time);
        MVVMData_1.view.maxposition = this.edit_cell_awake[this.edit_cell_awake.length - 1].edit_cell.position.y + 500;
      };
      EditMode.prototype.ShowEditUI = function() {
        for (var i = 1; i < this.Edit_UI.length; i++) this.Edit_UI[i].active = true;
      };
      EditMode.prototype.ShowTips = function(str) {
        var _this = this;
        this.tipslabel.string = str;
        this.tipslabel.node.active = true;
        this.tipslabel.node.opacity = 0;
        cc.tween(this.tipslabel.node).to(.2, {
          opacity: 255
        }).delay(.5).to(.2, {
          opacity: 0
        }).call(function() {
          _this.tipslabel.node.active = false;
        }).start();
      };
      EditMode.prototype.ShowOrHideReadPanel = function(x) {
        if (x) {
          this.readpanel.active = true;
          this.blockinput.active = true;
          this.Edit_UI[0].active = false;
        } else {
          this.readpanel.active = false;
          this.blockinput.active = false;
          this.ShowEditUI();
        }
      };
      EditMode.prototype.ShowOrHideSavePanel = function(x) {
        if (x) {
          this.savepanel.active = true;
          this.blockinput.active = true;
        } else {
          this.savepanel.active = false;
          this.blockinput.active = false;
        }
      };
      EditMode.prototype.UI_selecttype = function(x, whattype) {
        var type = [ "\u5c0f\u80fd\u91cf\u661f", "\u5927\u80fd\u91cf\u661f", "\u9677\u9631", "\u969c\u788d" ];
        var i = parseInt(whattype);
        this.what_type_now = i;
        this.ShowTips("\u9009\u62e9\u7c7b\u578b:" + (this.what_type_now + 1) + "," + type[i]);
      };
      EditMode.prototype.MVVMSliderCall = function() {
        this.player.position = cc.v2(0, MVVMData_1.view.viewposition);
        console.log("MVVMSliderCall,viewposition:" + MVVMData_1.view.viewposition);
      };
      EditMode.prototype.ButtonSelectedsong = function(x, y) {
        console.log(x + "   " + y);
        this.selectedsong = y;
        this.ShowOrHideReadPanel(true);
      };
      EditMode.prototype.CancelMenu = function() {
        this.newkeynodeinput.node.active = false;
        this.savepanel.active = false;
        this.MusicInfo[0] && (this.blockinput.active = false);
      };
      EditMode.prototype.DownloadJson = function() {
        var _this = this;
        var cos = new COS({
          SecretId: "AKIDTjlXUBgokQs65uAncCWfMswmGVdXv2wa",
          SecretKey: "ZeTfftrHTqxUpzVqvnPsCH8mAHApDSRA"
        });
        var Url = cos.getObjectUrl({
          Bucket: "game-eatbean-1258966452",
          Region: "ap-guangzhou",
          Key: "json/" + this.selectedsong + ".json",
          sign: true
        });
        console.log(Url);
        cc.loader.load(Url, function(err, data) {
          if (err) console.log(err); else {
            _this.MusicInfo = data;
            _this.WriteEditPath();
            console.log("\u83b7\u53d6\u4e91\u7aef\u6587\u4ef6\u8bfb\u53d6\u6210\u529f");
          }
        });
        return null;
      };
      __decorate([ property(cc.Node) ], EditMode.prototype, "Edit_UI", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "player", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "startpanel", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "editcellnode", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "blockinput", void 0);
      __decorate([ property(cc.Prefab) ], EditMode.prototype, "edit_cell_prefab", void 0);
      __decorate([ property(cc.EditBox) ], EditMode.prototype, "newkeynodeinput", void 0);
      __decorate([ property(cc.Label) ], EditMode.prototype, "tipslabel", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "readpanel", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "savepanel", void 0);
      __decorate([ property(cc.Node) ], EditMode.prototype, "previewmode", void 0);
      EditMode = __decorate([ ccclass ], EditMode);
      return EditMode;
    }(cc.Component);
    exports.default = EditMode;
    cc._RF.pop();
  }, {
    "./EditCell": "EditCell",
    "./FileSaver": "FileSaver",
    "./MVVMData": "MVVMData",
    "./PreviewMode": "PreviewMode",
    "./cos-wx-sdk-v5.js": "cos-wx-sdk-v5"
  } ],
  Edit_UI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1748151QG1ArpCqTigRv4vG", "Edit_UI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EditComonStar = function(_super) {
      __extends(EditComonStar, _super);
      function EditComonStar() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EditComonStar.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.MouseEnter, this);
      };
      EditComonStar.prototype.start = function() {};
      EditComonStar.prototype.MouseEnter = function() {
        cc.tween(this.node).to(.2, {
          scale: 1.1
        }).start();
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.MouseLeave, this);
      };
      EditComonStar.prototype.MouseDown = function() {};
      EditComonStar.prototype.MouseLeave = function() {
        cc.tween(this.node).to(.2, {
          scale: 1
        }).start();
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.MouseLeave, this);
      };
      EditComonStar = __decorate([ ccclass ], EditComonStar);
      return EditComonStar;
    }(cc.Component);
    exports.default = EditComonStar;
    cc._RF.pop();
  }, {} ],
  Energy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22f175HtvdLo4G2+1TzyFU6", "Energy");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Energy = function(_super) {
      __extends(Energy, _super);
      function Energy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Energyprogress = null;
        _this.EnergyStar = [];
        _this.EnergyMax = 0;
        _this.energy = 0;
        return _this;
      }
      Energy.prototype.onLoad = function() {
        this.Init();
      };
      Energy.prototype.Init = function() {
        for (var _i = 0, _a = this.EnergyStar; _i < _a.length; _i++) {
          var a = _a[_i];
          a.active = false;
        }
        this.changeenergy(100);
      };
      Energy.prototype.changeenergy = function(change) {
        this.energy += change;
        this.energy > this.EnergyMax && (this.energy = this.EnergyMax);
        this.energy < 0 && (this.energy = 0);
        var i = this.energy / (this.EnergyMax / 3);
        var show = this.energy % (this.EnergyMax / 3) / (this.EnergyMax / 3);
        3 == i && (show = 1);
        var j = 0;
        for (;j <= i - 1; j++) this.EnergyStar[j].active = true;
        for (;j < 3; j++) this.EnergyStar[j].active = false;
        this.Energyprogress.progress = show;
      };
      Energy.prototype.wantrush = function() {
        if (this.energy > this.EnergyMax / 3) {
          this.changeenergy(-1 * this.EnergyMax / 3);
          return true;
        }
        return false;
      };
      __decorate([ property(cc.ProgressBar) ], Energy.prototype, "Energyprogress", void 0);
      __decorate([ property(cc.Node) ], Energy.prototype, "EnergyStar", void 0);
      __decorate([ property(cc.Integer) ], Energy.prototype, "EnergyMax", void 0);
      Energy = __decorate([ ccclass ], Energy);
      return Energy;
    }(cc.Component);
    exports.default = Energy;
    cc._RF.pop();
  }, {} ],
  FileSaver: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "ccf9cmpI2hMMbvAXcYiAkAR", "FileSaver");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      var _global = "object" === ("undefined" === typeof window ? "undefined" : _typeof(window)) && window.window === window ? window : "object" === ("undefined" === typeof self ? "undefined" : _typeof(self)) && self.self === self ? self : "object" === ("undefined" === typeof global ? "undefined" : _typeof(global)) && global.global === global ? global : void 0;
      function bom(blob, opts) {
        if ("undefined" === typeof opts) opts = {
          autoBom: false
        }; else if ("object" !== ("undefined" === typeof opts ? "undefined" : _typeof(opts))) {
          console.warn("Deprecated: Expected third argument to be a object");
          opts = {
            autoBom: !opts
          };
        }
        if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob([ String.fromCharCode(65279), blob ], {
          type: blob.type
        });
        return blob;
      }
      function download(url, name, opts) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.onload = function() {
          saveAs(xhr.response, name, opts);
        };
        xhr.onerror = function() {
          console.error("could not download file");
        };
        xhr.send();
      }
      function corsEnabled(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", url, false);
        try {
          xhr.send();
        } catch (e) {}
        return xhr.status >= 200 && xhr.status <= 299;
      }
      function click(node) {
        try {
          node.dispatchEvent(new MouseEvent("click"));
        } catch (e) {
          var evt = document.createEvent("MouseEvents");
          evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
          node.dispatchEvent(evt);
        }
      }
      var saveAs = _global.saveAs || ("object" !== ("undefined" === typeof window ? "undefined" : _typeof(window)) || window !== _global ? function saveAs() {} : "download" in HTMLAnchorElement.prototype ? function saveAs(blob, name, opts) {
        var URL = _global.URL || _global.webkitURL;
        var a = document.createElement("a");
        name = name || blob.name || "download";
        a.download = name;
        a.rel = "noopener";
        if ("string" === typeof blob) {
          a.href = blob;
          a.origin !== location.origin ? corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = "_blank") : click(a);
        } else {
          a.href = URL.createObjectURL(blob);
          setTimeout(function() {
            URL.revokeObjectURL(a.href);
          }, 4e4);
          setTimeout(function() {
            click(a);
          }, 0);
        }
      } : "msSaveOrOpenBlob" in navigator ? function saveAs(blob, name, opts) {
        name = name || blob.name || "download";
        if ("string" === typeof blob) if (corsEnabled(blob)) download(blob, name, opts); else {
          var a = document.createElement("a");
          a.href = blob;
          a.target = "_blank";
          setTimeout(function() {
            click(a);
          });
        } else navigator.msSaveOrOpenBlob(bom(blob, opts), name);
      } : function saveAs(blob, name, opts, popup) {
        popup = popup || open("", "_blank");
        popup && (popup.document.title = popup.document.body.innerText = "downloading...");
        if ("string" === typeof blob) return download(blob, name, opts);
        var force = "application/octet-stream" === blob.type;
        var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
        var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((isChromeIOS || force && isSafari) && "undefined" !== typeof FileReader) {
          var reader = new FileReader();
          reader.onloadend = function() {
            var url = reader.result;
            url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
            popup ? popup.location.href = url : location = url;
            popup = null;
          };
          reader.readAsDataURL(blob);
        } else {
          var URL = _global.URL || _global.webkitURL;
          var url = URL.createObjectURL(blob);
          popup ? popup.location = url : location.href = url;
          popup = null;
          setTimeout(function() {
            URL.revokeObjectURL(url);
          }, 4e4);
        }
      });
      _global.saveAs = saveAs.saveAs = saveAs;
      "undefined" !== typeof module && (module.exports = saveAs);
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d00155ycElFcL9WXv+aD6WZ", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Score_1 = require("./Score");
    var Direction;
    (function(Direction) {
      Direction[Direction["Up"] = 0] = "Up";
      Direction[Direction["Down"] = 1] = "Down";
      Direction[Direction["Left"] = 2] = "Left";
      Direction[Direction["Right"] = 3] = "Right";
    })(Direction = exports.Direction || (exports.Direction = {}));
    var startype;
    (function(startype) {
      startype[startype["common"] = 0] = "common";
      startype[startype["importance"] = 1] = "importance";
    })(startype = exports.startype || (exports.startype = {}));
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.StarCreater = null;
        _this.PauseButton = null;
        _this.Pausepalen = null;
        _this.overpalen = null;
        _this.starpalen = null;
        _this.mainnode = null;
        _this.touch = null;
        _this.ifpause = false;
        return _this;
      }
      Game.prototype.onLoad = function() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.PauseButton.interactable = false;
      };
      Game.prototype.GameCompleted = function(winorfail) {
        this.getComponent(Score_1.default).gamecompleted = winorfail;
        winorfail ? console.log("Win!") : console.log("game over");
        if (!this.ifpause) {
          this.ifpause = true;
          this.overpalen.position = cc.v2(0, 2);
          cc.director.pause();
        }
        this.getComponent(Score_1.default).AccoutScore();
      };
      Game.prototype.PauseGame = function() {
        console.log("pause  " + this.ifpause);
        if (!this.ifpause) {
          this.ifpause = true;
          this.Pausepalen.position = cc.v2(0, 0);
          this.node.getComponent("AudioControl").pauseAudio();
          cc.director.pause();
        }
      };
      Game.prototype.ResumeGame = function() {
        this.ifpause = false;
        cc.director.resume();
        this.node.getComponent("AudioControl").resumeAudio();
        this.Pausepalen.position = cc.v2(2e3, 0);
      };
      Game.prototype.ReplayGame = function() {
        this.ifpause = false;
        cc.director.loadScene("game");
      };
      Game.prototype.startGame = function() {
        this.starpalen.position = cc.v2(-2e3, 0);
        this.PauseButton.interactable = true;
        cc.director.resume();
        this.touch.getComponent("Touch").starttouch();
        this.StarCreater.getComponent("StarCreater").starcreate();
        this.node.getComponent("AudioControl").startAudio(0, 2);
        this.mainnode.getComponent("MainNode").starmove();
      };
      __decorate([ property(cc.Node) ], Game.prototype, "StarCreater", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "PauseButton", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "Pausepalen", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "overpalen", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "starpalen", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "mainnode", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "touch", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./Score": "Score"
  } ],
  JsonOb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "000b00Lx19Ke4hAFc9/Qlnh", "JsonOb");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var OP = Object.prototype;
    var types = {
      obj: "[object Object]",
      array: "[object Array]"
    };
    var OAM = [ "push", "pop", "shift", "unshift", "short", "reverse", "splice" ];
    var JsonOb = function() {
      function JsonOb(obj, callback) {
        OP.toString.call(obj) !== types.obj && OP.toString.call(obj) !== types.array && console.error("\u8bf7\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u6216\u6570\u7ec4");
        this._callback = callback;
        this.observe(obj);
      }
      JsonOb.prototype.observe = function(obj, path) {
        var _this = this;
        OP.toString.call(obj) === types.array && this.overrideArrayProto(obj, path);
        Object.keys(obj).forEach(function(key) {
          var self = _this;
          var oldVal = obj[key];
          var pathArray = path && path.slice();
          pathArray ? pathArray.push(key) : pathArray = [ key ];
          Object.defineProperty(obj, key, {
            get: function() {
              return oldVal;
            },
            set: function(newVal) {
              if (oldVal !== newVal) {
                "[object Object]" === OP.toString.call(newVal) && self.observe(newVal, pathArray);
                self._callback(newVal, oldVal, pathArray);
                oldVal = newVal;
              }
            }
          });
          OP.toString.call(obj[key]) !== types.obj && OP.toString.call(obj[key]) !== types.array || _this.observe(obj[key], pathArray);
        }, this);
      };
      JsonOb.prototype.overrideArrayProto = function(array, path) {
        var originalProto = Array.prototype;
        var overrideProto = Object.create(Array.prototype);
        var self = this;
        var result;
        OAM.forEach(function(method) {
          Object.defineProperty(overrideProto, method, {
            value: function() {
              var oldVal = this.slice();
              result = originalProto[method].apply(this, arguments);
              self.observe(this, path);
              self._callback(this, oldVal, path);
              return result;
            }
          });
        });
        array["__proto__"] = overrideProto;
      };
      return JsonOb;
    }();
    exports.JsonOb = JsonOb;
    cc._RF.pop();
  }, {} ],
  MVVMData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1ab5achu9Izb/S2zoBotBZ", "MVVMData");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./modelView/ViewModel");
    var ViewData = function() {
      function ViewData() {
        this.viewposition = 0;
        this.minposition = -500;
        this.maxposition = 0;
      }
      return ViewData;
    }();
    exports.ViewData = ViewData;
    exports.view = new ViewData();
    ViewModel_1.VM.add(exports.view, "viewdata");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./modelView/ViewModel": "ViewModel"
  } ],
  MainNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c2b8IGVwhKE4fIqVw9GB66", "MainNode");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainNode = function(_super) {
      __extends(MainNode, _super);
      function MainNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.movespeed = 0;
        return _this;
      }
      MainNode.prototype.onLoad = function() {};
      MainNode.prototype.update = function(dt) {};
      MainNode.prototype.setmoveaction = function() {
        var move = cc.moveBy(1, cc.v2(0, this.movespeed));
        return cc.repeatForever(move);
      };
      MainNode.prototype.starmove = function() {
        var move = this.setmoveaction();
        this.node.runAction(move);
      };
      __decorate([ property(cc.Integer) ], MainNode.prototype, "movespeed", void 0);
      MainNode = __decorate([ ccclass ], MainNode);
      return MainNode;
    }(cc.Component);
    exports.default = MainNode;
    cc._RF.pop();
  }, {} ],
  PlayerLight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2956fXspnBE05K6X15tOds3", "PlayerLight");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerLight = function(_super) {
      __extends(PlayerLight, _super);
      function PlayerLight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.commonsize = 0;
        _this.rushsize = 0;
        _this.rushemitspeed = 0;
        _this.rushtime = 0;
        return _this;
      }
      PlayerLight.prototype.start = function() {
        this.node.getComponent(cc.ParticleSystem).startSize = this.commonsize;
        this.node.getComponent(cc.ParticleSystem).speed = 0;
      };
      PlayerLight.prototype.RushMode = function() {
        var _this = this;
        console.log("rush mode");
        this.node.getComponent(cc.ParticleSystem).startSize = this.rushsize;
        this.node.getComponent(cc.ParticleSystem).speed = this.rushemitspeed;
        this.scheduleOnce(function() {
          console.log("check");
          _this.node.getComponent(cc.ParticleSystem).startSize = _this.commonsize;
          _this.node.getComponent(cc.ParticleSystem).speed = 0;
        }, this.rushtime);
      };
      __decorate([ property ], PlayerLight.prototype, "commonsize", void 0);
      __decorate([ property ], PlayerLight.prototype, "rushsize", void 0);
      __decorate([ property ], PlayerLight.prototype, "rushemitspeed", void 0);
      __decorate([ property ], PlayerLight.prototype, "rushtime", void 0);
      PlayerLight = __decorate([ ccclass ], PlayerLight);
      return PlayerLight;
    }(cc.Component);
    exports.default = PlayerLight;
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c019bXyG4lCUbfGcmH8GCNE", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game_1 = require("./Game");
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.movetime = 0;
        _this.rushtime = 0;
        _this.rushbacktime = 0;
        _this.game = null;
        _this.rushbutton = null;
        _this.playerlight = null;
        _this.movedistance = 0;
        _this.wayid = 0;
        _this.moveaction = null;
        _this.cancontrol = true;
        _this.ifback = false;
        _this.ifrushnow = false;
        return _this;
      }
      Player.prototype.onLoad = function() {
        this.movedistance = 240;
        this.wayid = 1;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.rushbutton.active = false;
      };
      Player.prototype.setmoveAction = function(preid, nextid) {
        if (preid > nextid) {
          var moveto = cc.moveBy(this.movetime, cc.v2(-1 * this.movedistance, 0)).easing(cc.easeCubicActionOut());
          this.wayid = nextid;
          var callback = cc.callFunc(this.moveactionend, this);
          return cc.sequence(moveto, callback);
        }
        var moveto = cc.moveBy(this.movetime, cc.v2(this.movedistance, 0)).easing(cc.easeCubicActionOut());
        this.wayid = nextid;
        var callback = cc.callFunc(this.moveactionend, this);
        return cc.sequence(moveto, callback);
      };
      Player.prototype.setbackAction = function(preid, nextid) {
        if (preid > nextid) {
          var moveto = cc.moveBy(this.movetime, cc.v2(-1 * this.movedistance, 0)).easing(cc.easeCubicActionOut());
          this.wayid = nextid;
          var callback = cc.callFunc(this.backactionend, this);
          return cc.sequence(moveto, callback);
        }
        var moveto = cc.moveBy(this.movetime, cc.v2(this.movedistance, 0)).easing(cc.easeCubicActionOut());
        this.wayid = nextid;
        var callback = cc.callFunc(this.backactionend, this);
        return cc.sequence(moveto, callback);
      };
      Player.prototype.setrushAction = function() {
        var self = this;
        this.ifrushnow = true;
        var rush = cc.moveBy(this.rushtime, cc.v2(0, 1300)).easing(cc.easeCubicActionOut());
        var callback = cc.callFunc(function() {
          self.cancontrol = true;
          self.ifrushnow = false;
        }, this);
        return cc.sequence(rush, callback);
      };
      Player.prototype.onDown = function(dir) {
        if (this.cancontrol) switch (dir) {
         case Game_1.Direction.Left:
          if (0 != this.wayid) {
            this.moveaction = this.setmoveAction(this.wayid, this.wayid - 1);
            this.ifback = false;
            this.cancontrol = false;
            this.node.runAction(this.moveaction);
          }
          break;

         case Game_1.Direction.Right:
          if (3 != this.wayid) {
            this.moveaction = this.setmoveAction(this.wayid, this.wayid + 1);
            this.ifback = false;
            this.cancontrol = false;
            this.node.runAction(this.moveaction);
          }
        }
      };
      Player.prototype.onUp = function(dir) {
        if (0 == this.wayid || 3 == this.wayid) {
          this.ifback = true;
          this.cancontrol && this.moveactionend();
        }
      };
      Player.prototype.onRush = function() {
        if (this.cancontrol && this.game.getComponent("Energy").wantrush()) {
          this.moveaction = this.setrushAction();
          this.cancontrol = false;
          this.node.runAction(this.moveaction);
          this.playerlight.getComponent("PlayerLight").RushMode();
        }
      };
      Player.prototype.moveactionend = function() {
        if (this.ifback) if (0 == this.wayid) {
          this.moveaction = this.setbackAction(this.wayid, this.wayid + 1);
          this.node.runAction(this.moveaction);
        } else {
          this.moveaction = this.setbackAction(this.wayid, this.wayid - 1);
          this.node.runAction(this.moveaction);
        } else this.cancontrol || (this.cancontrol = true);
      };
      Player.prototype.backactionend = function() {
        this.cancontrol = true;
      };
      Player.prototype.rushend = function() {};
      Player.prototype.onCollisionEnter = function(other, self) {
        console.log("other.node.group  " + other.node.group);
        if ("canrush" == other.node.group) this.rushbutton.active = true; else if ("fire" == other.node.group) {
          console.log("end game");
          var self_1 = this;
          var delay = cc.delayTime(.5);
          var callback = cc.callFunc(function() {
            self_1.game.getComponent("Game").GameCompleted(self_1.ifrushnow);
            cc.director.pause();
          });
          this.node.runAction(cc.sequence(delay, callback));
        }
      };
      Player.prototype.onCollisionExit = function(other, self) {
        "canrush" == other.node.group && (this.rushbutton.active = false);
      };
      __decorate([ property(cc.Float) ], Player.prototype, "movetime", void 0);
      __decorate([ property(cc.Float) ], Player.prototype, "rushtime", void 0);
      __decorate([ property(cc.Float) ], Player.prototype, "rushbacktime", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "game", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "rushbutton", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "playerlight", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "./Game": "Game"
  } ],
  PreviewMode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "150d9ttaTtMjKKXM6WE6xrz", "PreviewMode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EditMode_1 = require("./EditMode");
    var MVVMData_1 = require("./MVVMData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PreviewMode = function(_super) {
      __extends(PreviewMode, _super);
      function PreviewMode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.game = null;
        _this.Player = null;
        _this.editmode = null;
        _this.baseline = null;
        _this.blockinput = null;
        _this.pausebutton = null;
        _this.go = null;
        _this.durationtime = 0;
        _this.inpreviewmode = false;
        _this.ispause = false;
        return _this;
      }
      PreviewMode.prototype.onLoad = function() {
        this.baseline.active = false;
        this.blockinput.active = false;
        this.pausebutton.active = false;
      };
      PreviewMode.prototype.PreviewMode = function() {
        var _this = this;
        if (this.inpreviewmode) {
          this.inpreviewmode = false;
          this.ispause = false;
          this.editmode.getComponent(EditMode_1.default).ShowTips("\u9000\u51fa\u9884\u89c8\u6a21\u5f0f");
          this.baseline.active = false;
          this.blockinput.active = false;
          this.pausebutton.getComponentInChildren(cc.Label).string = "\u6682\u505c";
          this.pausebutton.active = false;
          this.editmode.getComponent(EditMode_1.default).Edit_UI[6].active = true;
          this.editmode.getComponent(EditMode_1.default).EditModeControl(true);
          this.game.getComponent(cc.AudioSource).stop();
          this.go && this.go.stop();
        } else {
          this.editmode.getComponent(EditMode_1.default).ShowTips("\u8fdb\u5165\u9884\u89c8\u6a21\u5f0f");
          this.baseline.active = true;
          this.blockinput.active = true;
          this.pausebutton.active = true;
          this.editmode.getComponent(EditMode_1.default).Edit_UI[6].active = false;
          this.editmode.getComponent(EditMode_1.default).EditModeControl(false);
          this.editmode.getComponent(EditMode_1.default).isexpand || this.editmode.getComponent(EditMode_1.default).Expand();
          MVVMData_1.view.viewposition = 0;
          cc.loader.loadRes("audio/" + this.editmode.getComponent(EditMode_1.default).selectedsong, cc.AudioClip, function(err, audioclip) {
            _this.game.getComponent(cc.AudioSource).clip = audioclip;
            _this.durationtime = _this.game.getComponent(cc.AudioSource).getDuration();
            console.log("dutationtime:" + _this.durationtime);
            _this.go = cc.tween(MVVMData_1.view).to(_this.durationtime, {
              viewposition: 1e3 * _this.durationtime
            });
            _this.game.getComponent(cc.AudioSource).play();
            _this.go.call(function() {
              _this.inpreviewmode = true;
              _this.PreviewMode();
              console.log("song finished");
            }).start();
          });
          this.inpreviewmode = true;
        }
      };
      PreviewMode.prototype.IsPause = function() {
        var _this = this;
        if (this.ispause) {
          this.ispause = false;
          this.editmode.getComponent(EditMode_1.default).ShowTips("\u6062\u590d");
          var currenttime = this.game.getComponent(cc.AudioSource).getCurrentTime();
          this.go = cc.tween(MVVMData_1.view).to(this.durationtime - currenttime, {
            viewposition: 1e3 * this.durationtime
          });
          this.pausebutton.getComponentInChildren(cc.Label).string = "\u6682\u505c";
          this.game.getComponent(cc.AudioSource).resume();
          this.go.call(function() {
            _this.inpreviewmode = true;
            _this.PreviewMode();
            console.log("song finished");
          }).start();
        } else {
          this.ispause = true;
          this.editmode.getComponent(EditMode_1.default).ShowTips("\u6682\u505c");
          this.pausebutton.getComponentInChildren(cc.Label).string = "\u64ad\u653e";
          this.game.getComponent(cc.AudioSource).pause();
          this.go.stop();
          this.go = null;
        }
      };
      PreviewMode.prototype.update = function(dt) {
        this.game.getComponent(cc.AudioSource).isPlaying && (this.baseline.getComponentInChildren(cc.Label).string = this.game.getComponent(cc.AudioSource).getCurrentTime().toFixed(2) + "/" + this.game.getComponent(cc.AudioSource).getDuration().toFixed(2));
      };
      __decorate([ property(cc.Node) ], PreviewMode.prototype, "game", void 0);
      __decorate([ property(cc.Node) ], PreviewMode.prototype, "Player", void 0);
      __decorate([ property(cc.Node) ], PreviewMode.prototype, "editmode", void 0);
      __decorate([ property(cc.Node) ], PreviewMode.prototype, "baseline", void 0);
      __decorate([ property(cc.Node) ], PreviewMode.prototype, "blockinput", void 0);
      __decorate([ property(cc.Node) ], PreviewMode.prototype, "pausebutton", void 0);
      PreviewMode = __decorate([ ccclass ], PreviewMode);
      return PreviewMode;
    }(cc.Component);
    exports.default = PreviewMode;
    cc._RF.pop();
  }, {
    "./EditMode": "EditMode",
    "./MVVMData": "MVVMData"
  } ],
  Prop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e50aePLPiNGpbQkmsIHlzrS", "Prop");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Prop = function(_super) {
      __extends(Prop, _super);
      function Prop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.propbutton = null;
        _this.propmask = null;
        _this.proptime = 0;
        _this.time = 0;
        _this.canuse = true;
        return _this;
      }
      Prop.prototype.start = function() {
        this.propmask.fillRange = 0;
        this.propbutton.interactable = true;
        this.canuse = true;
      };
      Prop.prototype.update = function(dt) {
        if (!this.canuse) {
          this.time += dt;
          if (this.time > this.proptime) {
            this.propmask.fillRange = 0;
            this.canuse = true;
            this.propbutton.interactable = true;
            this.time = 0;
          } else this.propmask.fillRange = (this.proptime - this.time) / this.proptime;
        }
      };
      Prop.prototype.useprop = function() {
        this.propbutton.interactable = false;
        this.canuse = false;
        this.time = 0;
        this.propmask.fillRange = 1;
      };
      __decorate([ property(cc.Button) ], Prop.prototype, "propbutton", void 0);
      __decorate([ property(cc.Sprite) ], Prop.prototype, "propmask", void 0);
      __decorate([ property(cc.Integer) ], Prop.prototype, "proptime", void 0);
      Prop = __decorate([ ccclass ], Prop);
      return Prop;
    }(cc.Component);
    exports.default = Prop;
    cc._RF.pop();
  }, {} ],
  Score: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c978X0vMVAjY8eIf0uNJj9", "Score");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Score = function(_super) {
      __extends(Score, _super);
      function Score() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scorelabel = null;
        _this.finalscorelabel = null;
        _this.levellabel = null;
        _this.finalscore = 0;
        _this.starscore = 0;
        _this.rushscore = 0;
        _this.trapscore = 0;
        _this.completedrate = 0;
        _this.missionscore = 0;
        _this.gamecompleted = false;
        return _this;
      }
      Score.prototype.changescore = function(score) {
        switch (score) {
         case 10:
         case 50:
          this.starscore += score;
          console.log("\u5f97\u5206\uff1a" + this.starscore);
          break;

         case 100:
          this.rushscore += score;
          break;

         case -50:
          this.trapscore += score;
          break;

         default:
          console.log("\u7ed3\u7b97\u5206\u503c\u672a\u627e\u5230\u5bf9\u5e94\u7c7b\u578b");
        }
      };
      Score.prototype.AccoutScore = function() {
        var scorelevel = 0;
        this.completedrate = 0;
        if (this.gamecompleted) {
          if (this.finalscore == this.missionscore) {
            console.log("S");
            this.levellabel.string = "S";
          } else if (scorelevel >= .8) {
            console.log("A");
            this.levellabel.string = "A";
          } else if (scorelevel >= .4) {
            console.log("B");
            this.levellabel.string = "B";
          }
        } else if (this.completedrate >= .5) {
          console.log("C");
          this.levellabel.string = "C";
        } else {
          console.log("D");
          this.levellabel.string = "D";
        }
        this.levellabel.node.active = true;
        this.finalscorelabel.string = "star:" + this.starscore + "\nrush:" + this.rushscore + "\ntrap:" + this.trapscore;
      };
      Score.prototype.start = function() {};
      Score.prototype.update = function(dt) {
        this.finalscore = 1 * (this.starscore + this.rushscore + this.trapscore);
        this.scorelabel.string = "Score\uff1a" + this.finalscore.toString();
        this.gamecompleted && this.AccoutScore();
      };
      __decorate([ property(cc.Label) ], Score.prototype, "scorelabel", void 0);
      __decorate([ property(cc.Label) ], Score.prototype, "finalscorelabel", void 0);
      __decorate([ property(cc.Label) ], Score.prototype, "levellabel", void 0);
      Score = __decorate([ ccclass ], Score);
      return Score;
    }(cc.Component);
    exports.default = Score;
    cc._RF.pop();
  }, {} ],
  StarCreater: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57f70oOI4JG6rru07I0+h/Z", "StarCreater");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game_1 = require("./Game");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.staritem = [];
        _this.way = null;
        _this.player = null;
        _this.game = null;
        _this.commonenergy = 0;
        _this.importanceenergy = 0;
        _this.commonscore = 0;
        _this.importancescore = 0;
        _this.Fire = null;
        _this.MusicInfo = [ 0 ];
        _this.hascreatenum = 0;
        _this.fire = null;
        _this.time = 0;
        _this.ifstart = false;
        _this.firecometime = 0;
        _this.starpoolnum = 5;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.starcommonpoll = new cc.NodePool();
        this.starimportancepoll = new cc.NodePool();
        this.InitMusicInfo();
        for (var i = 0; i < this.starpoolnum; i++) {
          var star = cc.instantiate(this.staritem[0]);
          star.position = cc.v2(-10, -10);
          this.starcommonpoll.put(star);
        }
        for (var i = 0; i < this.starpoolnum; i++) {
          var star = cc.instantiate(this.staritem[1]);
          star.position = cc.v2(-10, -10);
          this.starimportancepoll.put(star);
        }
        this.fire = cc.instantiate(this.Fire);
        this.fire.position = cc.v2(-1080, 0);
      };
      NewClass.prototype.InitMusicInfo = function() {
        var _this = this;
        var self = this;
        cc.loader.loadRes("json/beat", function(err, data) {
          if (err) console.log(err); else {
            var Info = data.json;
            self.MusicInfo = Info;
            console.log("music " + _this.MusicInfo.length + "    info " + Info.length);
            for (var i = 0; i < _this.MusicInfo.length; i++) console.log(i + "   " + _this.MusicInfo[i]);
            _this.firecometime = _this.MusicInfo[_this.MusicInfo.length - 1]["start"] + .5;
          }
        });
      };
      NewClass.prototype.update = function(dt) {
        this.ifstart && (this.time += dt);
        if (this.hascreatenum == this.MusicInfo.length && this.firecometime < this.time) {
          this.fire.position = cc.v2(0, this.node.convertToWorldSpace(cc.Vec2.ZERO).y);
          this.fire.parent = this.way;
          console.log("fire is coming" + this.fire.position);
          this.hascreatenum++;
          return;
        }
        if (this.hascreatenum >= this.MusicInfo.length) return;
        while (this.MusicInfo[this.hascreatenum]["start"] < this.time) {
          var x = this.MusicInfo[this.hascreatenum]["start"] - Math.floor(this.MusicInfo[this.hascreatenum]["start"]);
          x < .25 ? this.createstar(0, Game_1.startype.common, this.commonscore, this.commonenergy) : x < .5 ? this.createstar(1, Game_1.startype.common, this.commonscore, this.commonenergy) : x < .75 ? this.createstar(2, Game_1.startype.common, this.commonscore, this.commonenergy) : this.createstar(3, Game_1.startype.common, this.commonscore, this.commonenergy);
          this.hascreatenum++;
          if (this.hascreatenum >= this.MusicInfo.length) return;
        }
      };
      NewClass.prototype.createstar = function(wayid, type, score, energy) {
        var star = null;
        type == Game_1.startype.common ? star = this.starcommonpoll.size() > 0 ? this.starcommonpoll.get() : cc.instantiate(this.staritem[0]) : type == Game_1.startype.importance && (star = this.starimportancepoll.size() > 0 ? this.starimportancepoll.get() : cc.instantiate(this.staritem[1]));
        star.parent = this.way;
        star.position = wayid < 1 ? cc.v2(-360, this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y - this.game.convertToWorldSpaceAR(cc.Vec2.ZERO).y) : wayid < 2 ? cc.v2(-120, this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y - this.game.convertToWorldSpaceAR(cc.Vec2.ZERO).y) : wayid < 3 ? cc.v2(120, this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y - this.game.convertToWorldSpaceAR(cc.Vec2.ZERO).y) : cc.v2(360, this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y - this.game.convertToWorldSpaceAR(cc.Vec2.ZERO).y);
        type == Game_1.startype.common, star.getComponent("Star").Init(this.game, this.player, this.node, type, score, energy);
      };
      NewClass.prototype.destorystar = function(star, type) {
        type == Game_1.startype.common ? this.starcommonpoll.put(star) : this.starimportancepoll.put(star);
      };
      NewClass.prototype.starcreate = function() {
        this.ifstart = true;
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "staritem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "way", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "player", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "game", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "commonenergy", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "importanceenergy", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "commonscore", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "importancescore", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "Fire", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Game": "Game"
  } ],
  Star: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee2f9UwbelLOJdD1mR6l6z4", "Star");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Star = function(_super) {
      __extends(Star, _super);
      function Star() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.way = null;
        _this.player = null;
        _this.starcreater = null;
        _this.game = null;
        _this.ScoreClass = null;
        _this.score = 0;
        _this.energy = 0;
        return _this;
      }
      Star.prototype.onLoad = function() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
      };
      Star.prototype.Init = function(Game, Player, Starcreater, start, Score, Energy) {
        console.log("init");
        this.game = Game;
        this.player = Player;
        this.score = Score;
        this.energy = Energy;
        this.starcreater = Starcreater;
        this.Startype = start;
      };
      Star.prototype.update = function(dt) {
        if (this.player.position.y - this.node.position.y > 500) {
          this.node.position = cc.v2(-10, -10);
          this.starcreater.getComponent("StarCreater").destorystar(this.node, this.Startype);
        }
      };
      Star.prototype.onCollisionEnter = function(other, self) {
        console.log("\u78b0\u5230\u4e86--------------------" + other.node.group);
        if ("player" == other.node.group) {
          this.node.position = cc.v2(-10, -10);
          this.game.getComponent("Energy").changeenergy(this.energy);
          this.game.getComponent("Score").changescore(this.score);
          this.starcreater.getComponent("StarCreater").destorystar(this.node, this.Startype);
        }
      };
      __decorate([ property(cc.Node) ], Star.prototype, "way", void 0);
      __decorate([ property(cc.Node) ], Star.prototype, "player", void 0);
      __decorate([ property(cc.Node) ], Star.prototype, "starcreater", void 0);
      __decorate([ property(cc.Node) ], Star.prototype, "game", void 0);
      __decorate([ property(cc.Node) ], Star.prototype, "ScoreClass", void 0);
      Star = __decorate([ ccclass ], Star);
      return Star;
    }(cc.Component);
    exports.default = Star;
    cc._RF.pop();
  }, {} ],
  StringFormat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85fe8Gc6h5Ava+JsdbBs8cR", "StringFormat");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StringFormat = function() {
      function StringFormat() {}
      StringFormat.prototype.deal = function(value, format) {
        if ("" === format) return value;
        format = format.toLowerCase().trim();
        var match_func = format.match(/^[a-z|A-Z]+/gi);
        var match_num = format.match(/\d+$/gi);
        var func = "";
        var num;
        var res = "";
        match_func && (func = match_func[0]);
        match_num && (num = parseInt(match_num[0]));
        if ("number" == typeof value) switch (func) {
         case "int":
          res = this.int(value);
          break;

         case "fix":
          res = this.fix(value, num);
          break;

         case "kmbt":
          res = this.KMBT(value);
          break;

         case "per":
          res = this.per(value, num);
          break;

         case "sep":
          res = this.sep(value);
        } else {
          switch (func) {
           case "limit":
            res = this.limit(value, num);
          }
          res = value;
        }
        return res;
      };
      StringFormat.prototype.sep = function(value) {
        var num = Math.round(value).toString();
        return num.replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,");
      };
      StringFormat.prototype.time_m = function(value) {};
      StringFormat.prototype.time_s = function(value) {};
      StringFormat.prototype.time_ms = function(value) {};
      StringFormat.prototype.timeStamp = function(value) {
        return new Date(value).toString();
      };
      StringFormat.prototype.per = function(value, fd) {
        return Math.round(100 * value).toFixed(fd);
      };
      StringFormat.prototype.int = function(value) {
        return Math.round(value);
      };
      StringFormat.prototype.fix = function(value, fd) {
        return value.toFixed(fd);
      };
      StringFormat.prototype.limit = function(value, count) {
        return value.substring(0, count);
      };
      StringFormat.prototype.KMBT = function(value, lang) {
        void 0 === lang && (lang = "en");
        var counts = [ 1e3, 1e6, 1e9, 1e12 ];
        var units = [ "", "K", "M", "B", "T" ];
        switch (lang) {
         case "zh":
          var counts_1 = [ 1e4, 1e8, 1e12, 1e16 ];
          var units_1 = [ "", "\u4e07", "\u4ebf", "\u5146", "\u4eac" ];
        }
        return this.compressUnit(value, counts, units, 2);
      };
      StringFormat.prototype.compressUnit = function(value, valueArr, unitArr, fixNum) {
        void 0 === fixNum && (fixNum = 2);
        var counts = valueArr;
        var units = unitArr;
        var res;
        var index;
        for (index = 0; index < counts.length; index++) {
          var e = counts[index];
          if (value < e) {
            res = index > 0 ? (value / counts[index - 1]).toFixed(fixNum) : value.toFixed(0);
            break;
          }
        }
        return res + units[index];
      };
      return StringFormat;
    }();
    exports.StringFormatFunction = new StringFormat();
    cc._RF.pop();
  }, {} ],
  Touch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "321bbkpSOdBnYnDBem+eT+y", "Touch");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game_1 = require("./Game");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.toucheffect = null;
        _this.ifstart = false;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.onKeyDown = function(event) {
        if (this.ifstart) switch (event.keyCode) {
         case cc.macro.KEY.a:
          this.player.getComponent("Player").onDown(Game_1.Direction.Left);
          break;

         case cc.macro.KEY.d:
          this.player.getComponent("Player").onDown(Game_1.Direction.Right);
          break;

         case cc.macro.KEY.w:
          this.player.getComponent("Player").onRush();
          break;

         case cc.macro.KEY.x:
        }
      };
      NewClass.prototype.onKeyUp = function(event) {
        if (this.ifstart) switch (event.keyCode) {
         case cc.macro.KEY.a:
          this.player.getComponent("Player").onUp(Game_1.Direction.Left);
          break;

         case cc.macro.KEY.d:
          this.player.getComponent("Player").onUp(Game_1.Direction.Right);
        }
      };
      NewClass.prototype.onTouchStart = function(event) {
        var v = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log(" touch  " + v);
        var effect = cc.instantiate(this.toucheffect);
        effect.parent = this.node;
        effect.position = v;
        console.log(" touch  " + effect.position);
        this.ifstart && (v.x < 0 ? this.player.getComponent("Player").onDown(Game_1.Direction.Left) : this.player.getComponent("Player").onDown(Game_1.Direction.Right));
      };
      NewClass.prototype.onTouchEnd = function(event) {
        var v = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("TouchEnd  " + v);
        this.ifstart && (v.x < 0 ? this.player.getComponent("Player").onUp(Game_1.Direction.Left) : this.player.getComponent("Player").onUp(Game_1.Direction.Right));
      };
      NewClass.prototype.starttouch = function() {
        this.ifstart = true;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "player", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "toucheffect", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Game": "Game"
  } ],
  VMBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f6f36IvUdPO7xynnVTPgzb", "VMBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./ViewModel");
    var DEBUG_WATCH_PATH = false;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VMBase = function(_super) {
      __extends(VMBase, _super);
      function VMBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.watchPathArr = [];
        _this.templateMode = false;
        _this.templateValueArr = [];
        _this.VM = ViewModel_1.VM;
        return _this;
      }
      VMBase.prototype.onLoad = function() {
        var _this = this;
        false;
        var paths = this.watchPath.split(".");
        for (var i = 1; i < paths.length; i++) {
          var p = paths[i];
          if ("*" == p) {
            var index = this.node.getParent().children.findIndex(function(n) {
              return n === _this.node;
            });
            index <= 0 && (index = 0);
            paths[i] = index.toString();
            break;
          }
        }
        this.watchPath = paths.join(".");
        var pathArr = this.watchPathArr;
        if (pathArr.length >= 1) for (var i = 0; i < pathArr.length; i++) {
          var path = pathArr[i];
          var paths_1 = path.split(".");
          for (var i_1 = 1; i_1 < paths_1.length; i_1++) {
            var p = paths_1[i_1];
            if ("*" == p) {
              var index = this.node.getParent().children.findIndex(function(n) {
                return n === _this.node;
              });
              index <= 0 && (index = 0);
              paths_1[i_1] = index.toString();
              break;
            }
          }
          this.watchPathArr[i] = paths_1.join(".");
        }
        DEBUG_WATCH_PATH && true && cc.log("\u6240\u6709\u8def\u5f84", this.watchPath ? [ this.watchPath ] : this.watchPathArr, "<<", this.node.getParent().name + "." + this.node.name);
        "" == this.watchPath && "" == this.watchPathArr.join("") && cc.log("\u53ef\u80fd\u672a\u8bbe\u7f6e\u8def\u5f84\u7684\u8282\u70b9:", this.node.getParent().name + "." + this.node.name);
      };
      VMBase.prototype.onEnable = function() {
        false;
        this.templateMode ? this.setMultPathEvent(true) : "" != this.watchPath && this.VM.bindPath(this.watchPath, this.onValueChanged, this);
        this.onValueInit();
      };
      VMBase.prototype.onDisable = function() {
        false;
        this.templateMode ? this.setMultPathEvent(false) : "" != this.watchPath && this.VM.unbindPath(this.watchPath, this.onValueChanged, this);
      };
      VMBase.prototype.setMultPathEvent = function(enabled) {
        void 0 === enabled && (enabled = true);
        false;
        var arr = this.watchPathArr;
        for (var i = 0; i < arr.length; i++) {
          var path = arr[i];
          enabled ? this.VM.bindPath(path, this.onValueChanged, this) : this.VM.unbindPath(path, this.onValueChanged, this);
        }
      };
      VMBase.prototype.onValueInit = function() {};
      VMBase.prototype.onValueChanged = function(n, o, pathArr) {};
      VMBase = __decorate([ ccclass ], VMBase);
      return VMBase;
    }(cc.Component);
    exports.default = VMBase;
    cc._RF.pop();
  }, {
    "./ViewModel": "ViewModel"
  } ],
  VMCompsEdit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2359eFXKF5HFYS74K7Y17/U", "VMCompsEdit");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help;
    var ACTION_MODE;
    (function(ACTION_MODE) {
      ACTION_MODE[ACTION_MODE["SEARCH_COMPONENT"] = 0] = "SEARCH_COMPONENT";
      ACTION_MODE[ACTION_MODE["ENABLE_COMPONENT"] = 1] = "ENABLE_COMPONENT";
      ACTION_MODE[ACTION_MODE["REPLACE_WATCH_PATH"] = 2] = "REPLACE_WATCH_PATH";
      ACTION_MODE[ACTION_MODE["DELETE_COMPONENT"] = 3] = "DELETE_COMPONENT";
    })(ACTION_MODE || (ACTION_MODE = {}));
    var MVCompsEdit = function(_super) {
      __extends(MVCompsEdit, _super);
      function MVCompsEdit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.findList = [ "VMBase", "VMParent" ];
        _this.actionType = ACTION_MODE.SEARCH_COMPONENT;
        _this.allowDelete = false;
        _this.targetPath = "game";
        _this.replacePath = "*";
        _this.canCollectNodes = false;
        _this.collectNodes = [];
        return _this;
      }
      Object.defineProperty(MVCompsEdit.prototype, "findTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(0);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "enableTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(1);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "disableTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(2);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "deleteTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(3);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "replaceTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(4);
        },
        enumerable: true,
        configurable: true
      });
      MVCompsEdit.prototype.onLoad = function() {
        true;
        var path = this.getNodePath(this.node);
        console.error("you forget delete MVEditFinder,[path]", path);
      };
      MVCompsEdit.prototype.setComponents = function(state) {
        var _this = this;
        var array = this.findList;
        var title = "\u641c\u7d22\u5230\u5f53\u524d\u8282\u70b9\u4e0b\u9762\u7684\u7ec4\u4ef6";
        switch (state) {
         case 0:
          title = "\u641c\u7d22\u5230\u5f53\u524d\u8282\u70b9\u4e0b\u9762\u7684\u7ec4\u4ef6";
          break;

         case 1:
          title = "\u6fc0\u6d3b\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6";
          break;

         case 2:
          title = "\u5173\u95ed\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6";
          break;

         case 3:
          title = "\u5220\u9664\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6";
          break;

         case 4:
          title = "\u66ff\u6362\u4ee5\u4e0b\u8282\u70b9\u7684\u8def\u5f84";
        }
        cc.log(title);
        cc.log("______________________");
        array.forEach(function(name) {
          _this.searchComponent(name, state);
        });
        cc.log("______________________");
      };
      MVCompsEdit.prototype.searchComponent = function(className, state) {
        var _this = this;
        void 0 === state && (state = 0);
        this.collectNodes = [];
        var comps = this.node.getComponentsInChildren(className);
        if (null == comps || comps.length < 1) return;
        cc.log("[" + className + "]:");
        comps.forEach(function(v) {
          var ext = "";
          state <= 3 && (ext = true === v.templateMode ? v.watchPathArr ? ":[Path:" + v.watchPathArr.join("|") + "]" : "" : v.watchPath ? ":[Path:" + v.watchPath + "]" : "");
          cc.log(_this.getNodePath(v.node) + ext);
          switch (state) {
           case 0:
            _this.canCollectNodes && -1 === _this.collectNodes.indexOf(v.node) && _this.collectNodes.push(v.node);
            break;

           case 1:
            v.enabled = true;
            break;

           case 2:
            v.enabled = false;
            break;

           case 3:
            v.node.removeComponent(v);
            break;

           case 4:
            var targetPath = _this.targetPath;
            var replacePath = _this.replacePath;
            if (true === v.templateMode) for (var i = 0; i < v.watchPathArr.length; i++) {
              var path = v.watchPathArr[i];
              v.watchPathArr[i] = _this.replaceNodePath(path, targetPath, replacePath);
            } else v.watchPath = _this.replaceNodePath(v.watchPath, targetPath, replacePath);
          }
        });
      };
      MVCompsEdit.prototype.replaceNodePath = function(path, search, replace) {
        var pathArr = path.split(".");
        var searchArr = search.split(".");
        var replaceArr = replace.split(".");
        var match = true;
        for (var i = 0; i < searchArr.length; i++) if (pathArr[i] !== searchArr[i]) {
          match = false;
          break;
        }
        if (true === match) {
          for (var i = 0; i < replaceArr.length; i++) pathArr[i] = replaceArr[i];
          cc.log(" \u8def\u5f84\u66f4\u65b0:", path, ">>>", pathArr.join("."));
        }
        return pathArr.join(".");
      };
      MVCompsEdit.prototype.getNodePath = function(node) {
        var parent = node;
        var array = [];
        while (parent) {
          var p = parent.getParent();
          if (!p) break;
          array.push(parent.name);
          parent = p;
        }
        return array.reverse().join("/");
      };
      __decorate([ property({
        type: [ cc.String ]
      }) ], MVCompsEdit.prototype, "findList", void 0);
      __decorate([ property({
        type: cc.Enum(ACTION_MODE)
      }) ], MVCompsEdit.prototype, "actionType", void 0);
      __decorate([ property({
        tooltip: "\u52fe\u9009\u540e,\u4f1a\u81ea\u52a8\u67e5\u627e find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6",
        visible: function() {
          return this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "findTrigger", null);
      __decorate([ property({
        tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u6fc0\u6d3b find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6",
        visible: function() {
          return this.actionType === ACTION_MODE.ENABLE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "enableTrigger", null);
      __decorate([ property({
        tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u5173\u95ed find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6",
        visible: function() {
          return this.actionType === ACTION_MODE.ENABLE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "disableTrigger", null);
      __decorate([ property({
        tooltip: "\u5141\u8bb8\u5220\u9664\u8282\u70b9\u7684\u7ec4\u4ef6,\u786e\u5b9a\u9700\u8981\u79fb\u9664\u8bf7\u52fe\u9009,\u9632\u6b62\u8bef\u64cd\u4f5c",
        visible: function() {
          return this.actionType === ACTION_MODE.DELETE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "allowDelete", void 0);
      __decorate([ property({
        tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u5220\u9664 find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6",
        displayName: "[ X DELETE X ]",
        visible: function() {
          return this.allowDelete && this.actionType === ACTION_MODE.DELETE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "deleteTrigger", null);
      __decorate([ property({
        tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u66ff\u6362\u6389\u6307\u5b9a\u7684\u8def\u5f84",
        visible: function() {
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }) ], MVCompsEdit.prototype, "replaceTrigger", null);
      __decorate([ property({
        tooltip: "\u5339\u914d\u7684\u8def\u5f84,\u5339\u914d\u89c4\u5219: \u641c\u7d22\u5f00\u5934\u4e3a game\u7684\u8def\u5f84",
        visible: function() {
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }) ], MVCompsEdit.prototype, "targetPath", void 0);
      __decorate([ property({
        tooltip: "\u66ff\u6362\u7684\u8def\u5f84,\u5c06\u5339\u914d\u5230\u7684\u8def\u5f84\u66ff\u6362",
        visible: function() {
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }) ], MVCompsEdit.prototype, "replacePath", void 0);
      __decorate([ property({
        tooltip: "\u662f\u5426\u641c\u96c6\u7ed1\u5b9aVM\u7ec4\u4ef6\u7684\u8282\u70b9?",
        visible: function() {
          return this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "canCollectNodes", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        readonly: true,
        tooltip: "\u6536\u96c6\u5230\u7ed1\u5b9a\u4e86VM\u7ec4\u4ef6\u76f8\u5173\u7684\u8282\u70b9\uff0c\u53ef\u4ee5\u81ea\u5df1\u8df3\u8f6c\u8fc7\u53bb",
        visible: function() {
          return this.canCollectNodes && this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "collectNodes", void 0);
      MVCompsEdit = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/Edit-Comps (\u5feb\u901f\u7ec4\u4ef6\u64cd\u4f5c)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMCompsEdit.md") ], MVCompsEdit);
      return MVCompsEdit;
    }(cc.Component);
    exports.default = MVCompsEdit;
    cc._RF.pop();
  }, {} ],
  VMCustom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce662fwsSVPLKpmHx+KocFu", "VMCustom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help;
    var COMP_ARRAY_CHECK = [ [ "BhvFrameIndex", "index", false ], [ "BhvGroupToggle", "index", false ], [ "BhvRollNumber", "targetValue", false ], [ "cc.Label", "string", false ], [ "cc.RichText", "string", false ], [ "cc.EditBox", "string", true ], [ "cc.Slider", "progress", true ], [ "cc.ProgressBar", "progress", false ], [ "cc.Toggle", "isChecked", true ] ];
    var VMCustom = function(_super) {
      __extends(VMCustom, _super);
      function VMCustom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.controller = false;
        _this.watchPath = "";
        _this.componentName = "";
        _this.componentProperty = "";
        _this.refreshRate = .1;
        _this._timer = 0;
        _this._watchComponent = null;
        _this._canWatchComponent = false;
        _this._oldValue = null;
        return _this;
      }
      VMCustom.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.checkEditorComponent();
        true;
        this._watchComponent = this.node.getComponent(this.componentName);
        this.checkComponentState();
      };
      VMCustom.prototype.onRestore = function() {
        this.checkEditorComponent();
      };
      VMCustom.prototype.start = function() {
        this.onValueInit();
      };
      VMCustom.prototype.checkEditorComponent = function() {
        var checkArray;
        var i;
        var params;
        var comp;
        false;
      };
      VMCustom.prototype.checkComponentState = function() {
        this._canWatchComponent = false;
        if (!this._watchComponent) {
          console.error("\u672a\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6");
          return;
        }
        if (!this.componentProperty) {
          console.error("\u672a\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6 \u7684\u5c5e\u6027");
          return;
        }
        if (this.componentProperty in this._watchComponent === false) {
          console.error("\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u7684\u5c5e\u6027\u4e0d\u5b58\u5728");
          return;
        }
        this._canWatchComponent = true;
      };
      VMCustom.prototype.getComponentValue = function() {
        return this._watchComponent[this.componentProperty];
      };
      VMCustom.prototype.setComponentValue = function(value) {
        if ("cc.Toggle" == this.componentName) {
          true == value && this.node.getComponent(cc.Toggle).check();
          false == value && this.node.getComponent(cc.Toggle).uncheck();
        } else this._watchComponent[this.componentProperty] = value;
      };
      VMCustom.prototype.onValueInit = function() {
        false;
        this.setComponentValue(this.VM.getValue(this.watchPath));
      };
      VMCustom.prototype.onValueController = function(newValue, oldValue) {
        this.VM.setValue(this.watchPath, newValue);
      };
      VMCustom.prototype.onValueChanged = function(n, o, pathArr) {
        this.setComponentValue(n);
      };
      VMCustom.prototype.update = function(dt) {
        false;
        if (!this.controller) return;
        if (!this._canWatchComponent || false === this._watchComponent["enabled"]) return;
        this._timer += dt;
        if (this._timer < this.refreshRate) return;
        this._timer = 0;
        var oldValue = this._oldValue;
        var newValue = this.getComponentValue();
        if (this._oldValue === newValue) return;
        this._oldValue = this.getComponentValue();
        this.onValueController(newValue, oldValue);
      };
      __decorate([ property({
        tooltip: "\u6fc0\u6d3bcontroller,\u4ee5\u5f00\u542f\u53cc\u5411\u7ed1\u5b9a\uff0c\u5426\u5219\u53ea\u80fd\u63a5\u6536\u6d88\u606f"
      }) ], VMCustom.prototype, "controller", void 0);
      __decorate([ property ], VMCustom.prototype, "watchPath", void 0);
      __decorate([ property({
        tooltip: "\u7ed1\u5b9a\u7ec4\u4ef6\u7684\u540d\u5b57"
      }) ], VMCustom.prototype, "componentName", void 0);
      __decorate([ property({
        tooltip: "\u7ec4\u4ef6\u4e0a\u9700\u8981\u76d1\u542c\u7684\u5c5e\u6027"
      }) ], VMCustom.prototype, "componentProperty", void 0);
      __decorate([ property({
        tooltip: "\u5237\u65b0\u95f4\u9694\u9891\u7387(\u53ea\u5f71\u54cd\u810f\u68c0\u67e5\u7684\u9891\u7387)",
        step: .01,
        range: [ 0, 1 ],
        visible: function() {
          return true === this.controller;
        }
      }) ], VMCustom.prototype, "refreshRate", void 0);
      VMCustom = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/VM-Custom (\u81ea\u5b9a\u4e49VM)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMCustom.md") ], VMCustom);
      return VMCustom;
    }(VMBase_1.default);
    exports.default = VMCustom;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase"
  } ],
  VMEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9ce7kf8XZJeLPlT2iWn2zD", "VMEvent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help;
    var FILTER_MODE;
    (function(FILTER_MODE) {
      FILTER_MODE[FILTER_MODE["none"] = 0] = "none";
      FILTER_MODE[FILTER_MODE["=="] = 1] = "==";
      FILTER_MODE[FILTER_MODE["!="] = 2] = "!=";
      FILTER_MODE[FILTER_MODE[">"] = 3] = ">";
      FILTER_MODE[FILTER_MODE[">="] = 4] = ">=";
      FILTER_MODE[FILTER_MODE["<"] = 5] = "<";
      FILTER_MODE[FILTER_MODE["<="] = 6] = "<=";
    })(FILTER_MODE || (FILTER_MODE = {}));
    var VMEvent = function(_super) {
      __extends(VMEvent, _super);
      function VMEvent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.templateMode = false;
        _this.watchPath = "";
        _this.triggerOnce = false;
        _this.watchPathArr = [];
        _this.filterMode = FILTER_MODE.none;
        _this.compareValue = "";
        _this.changeEvents = [];
        return _this;
      }
      VMEvent.prototype.onValueInit = function() {};
      VMEvent.prototype.onValueChanged = function(newVar, oldVar, pathArr) {
        var res = this.conditionCheck(newVar, this.compareValue);
        if (!res) return;
        Array.isArray(this.changeEvents) && this.changeEvents.forEach(function(v) {
          v.emit([ newVar, oldVar, pathArr ]);
        });
        true === this.triggerOnce && (this.enabled = false);
      };
      VMEvent.prototype.conditionCheck = function(a, b) {
        var cod = FILTER_MODE;
        switch (this.filterMode) {
         case cod.none:
          return true;

         case cod["=="]:
          if (a == b) return true;
          break;

         case cod["!="]:
          if (a != b) return true;
          break;

         case cod["<"]:
          if (a < b) return true;
          break;

         case cod[">"]:
          if (a > b) return true;
          break;

         case cod[">="]:
          if (a >= b) return true;
          break;

         case cod["<"]:
          if (a < b) return true;
          break;

         case cod["<="]:
          if (a <= b) return true;
        }
        return false;
      };
      __decorate([ property({
        tooltip: "\u4f7f\u7528\u6a21\u677f\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u8def\u5f84\u76d1\u542c"
      }) ], VMEvent.prototype, "templateMode", void 0);
      __decorate([ property({
        tooltip: "\u76d1\u542c\u83b7\u53d6\u503c\u7684\u8def\u5f84",
        visible: function() {
          return false === this.templateMode;
        }
      }) ], VMEvent.prototype, "watchPath", void 0);
      __decorate([ property({
        tooltip: "\u89e6\u53d1\u4e00\u6b21\u540e\u4f1a\u81ea\u52a8\u5173\u95ed\u8be5\u4e8b\u4ef6"
      }) ], VMEvent.prototype, "triggerOnce", void 0);
      __decorate([ property({
        tooltip: "\u76d1\u542c\u83b7\u53d6\u503c\u7684\u591a\u6761\u8def\u5f84,\u8fd9\u4e9b\u503c\u7684\u6539\u53d8\u90fd\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u51fd\u6570\u56de\u8c03,\u8bf7\u4f7f\u7528 pathArr \u533a\u5206\u83b7\u53d6\u7684\u503c ",
        type: [ cc.String ],
        visible: function() {
          return true === this.templateMode;
        }
      }) ], VMEvent.prototype, "watchPathArr", void 0);
      __decorate([ property({
        tooltip: "\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u4f1a\u6839\u636e\u6761\u4ef6\u8fc7\u6ee4\u6389\u65f6\u95f4\u7684\u89e6\u53d1",
        type: cc.Enum(FILTER_MODE)
      }) ], VMEvent.prototype, "filterMode", void 0);
      __decorate([ property({
        visible: function() {
          return this.filterMode !== FILTER_MODE.none;
        }
      }) ], VMEvent.prototype, "compareValue", void 0);
      __decorate([ property([ cc.Component.EventHandler ]) ], VMEvent.prototype, "changeEvents", void 0);
      VMEvent = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/VM-EventCall(\u8c03\u7528\u51fd\u6570)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMEvent.md") ], VMEvent);
      return VMEvent;
    }(VMBase_1.default);
    exports.default = VMEvent;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase"
  } ],
  VMLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "545c05XsG9GDJispEGWKvYv", "VMLabel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var StringFormat_1 = require("./StringFormat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode, help = _a.help;
    var LABEL_TYPE = {
      CC_LABEL: "cc.Label",
      CC_RICH_TEXT: "cc.RichText",
      CC_EDIT_BOX: "cc.EditBox"
    };
    var VMLabel = function(_super) {
      __extends(VMLabel, _super);
      function VMLabel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.labelType = LABEL_TYPE.CC_LABEL;
        _this.templateMode = false;
        _this.watchPathArr = [];
        _this.templateValueArr = [];
        _this.templateFormatArr = [];
        _this.originText = null;
        return _this;
      }
      VMLabel.prototype.onRestore = function() {
        this.checkLabel();
      };
      VMLabel.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.checkLabel();
        true;
        if (this.templateMode) {
          this.originText = this.getLabelValue();
          this.parseTemplate();
        }
      };
      VMLabel.prototype.start = function() {
        true;
        return;
      };
      VMLabel.prototype.parseTemplate = function() {
        var regexAll = /\{\{(.+?)\}\}/g;
        var regex = /\{\{(.+?)\}\}/;
        var res = this.originText.match(regexAll);
        if (null == res) return;
        for (var i = 0; i < res.length; i++) {
          var e = res[i];
          var arr = e.match(regex);
          var matchName = arr[1];
          var matchInfo = matchName.split(":")[1] || "";
          this.templateFormatArr[i] = matchInfo;
        }
      };
      VMLabel.prototype.getReplaceText = function() {
        var regexAll = /\{\{(.+?)\}\}/g;
        var regex = /\{\{(.+?)\}\}/;
        var res = this.originText.match(regexAll);
        if (null == res) return "";
        var str = this.originText;
        for (var i = 0; i < res.length; i++) {
          var e = res[i];
          var getValue = void 0;
          var arr = e.match(regex);
          var indexNum = parseInt(arr[1] || "0") || 0;
          var format = this.templateFormatArr[i];
          getValue = this.templateValueArr[indexNum];
          str = str.replace(e, this.getValueFromFormat(getValue, format));
        }
        return str;
      };
      VMLabel.prototype.getValueFromFormat = function(value, format) {
        return StringFormat_1.StringFormatFunction.deal(value, format);
      };
      VMLabel.prototype.onValueInit = function() {
        if (false === this.templateMode) this.setLabelValue(this.VM.getValue(this.watchPath)); else {
          var max = this.watchPathArr.length;
          for (var i = 0; i < max; i++) this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i], "?");
          this.setLabelValue(this.getReplaceText());
        }
      };
      VMLabel.prototype.onValueChanged = function(n, o, pathArr) {
        if (false === this.templateMode) this.setLabelValue(n); else {
          var path_1 = pathArr.join(".");
          var index = this.watchPathArr.findIndex(function(v) {
            return v === path_1;
          });
          if (index >= 0) {
            this.templateValueArr[index] = n;
            this.setLabelValue(this.getReplaceText());
          }
        }
      };
      VMLabel.prototype.setLabelValue = function(value) {
        this.getComponent(this.labelType).string = value + "";
      };
      VMLabel.prototype.getLabelValue = function() {
        return this.getComponent(this.labelType).string;
      };
      VMLabel.prototype.checkLabel = function() {
        var checkArray = [ "cc.Label", "cc.RichText", "cc.EditBox" ];
        for (var i = 0; i < checkArray.length; i++) {
          var e = checkArray[i];
          var comp = this.node.getComponent(e);
          if (comp) {
            this.labelType = e;
            return true;
          }
        }
        cc.error("\u6ca1\u6709\u6302\u8f7d\u4efb\u4f55label\u7ec4\u4ef6");
        return false;
      };
      __decorate([ property({
        visible: function() {
          return false === this.templateMode;
        }
      }) ], VMLabel.prototype, "watchPath", void 0);
      __decorate([ property({
        readonly: true
      }) ], VMLabel.prototype, "labelType", void 0);
      __decorate([ property({
        tooltip: "\u662f\u5426\u542f\u7528\u6a21\u677f\u4ee3\u7801,\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u4e4b\u524d\u8bbe\u7f6e,\n\u5c06\u4f1a\u52a8\u6001\u89e3\u6790\u6a21\u677f\u8bed\u6cd5 {{0}},\u5e76\u4e14\u81ea\u52a8\u8bbe\u7f6e\u76d1\u542c\u7684\u8def\u5f84"
      }) ], VMLabel.prototype, "templateMode", void 0);
      __decorate([ property({
        type: [ cc.String ],
        visible: function() {
          return true === this.templateMode;
        }
      }) ], VMLabel.prototype, "watchPathArr", void 0);
      VMLabel = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/VM-Label(\u6587\u672cVM)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMLabel.md") ], VMLabel);
      return VMLabel;
    }(VMBase_1.default);
    exports.default = VMLabel;
    cc._RF.pop();
  }, {
    "./StringFormat": "StringFormat",
    "./VMBase": "VMBase"
  } ],
  VMModify: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d2a4voaOJJGJZRWFPG6Bk7", "VMModify");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
    var CLAMP_MODE;
    (function(CLAMP_MODE) {
      CLAMP_MODE[CLAMP_MODE["MIN"] = 0] = "MIN";
      CLAMP_MODE[CLAMP_MODE["MAX"] = 1] = "MAX";
      CLAMP_MODE[CLAMP_MODE["MIN_MAX"] = 2] = "MIN_MAX";
    })(CLAMP_MODE || (CLAMP_MODE = {}));
    var VMModify = function(_super) {
      __extends(VMModify, _super);
      function VMModify() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.valueClamp = false;
        _this.valueClampMode = CLAMP_MODE.MIN_MAX;
        _this.valueMin = 0;
        _this.valueMax = 1;
        return _this;
      }
      VMModify.prototype.start = function() {};
      VMModify.prototype.clampValue = function(res) {
        var min = this.valueMin;
        var max = this.valueMax;
        if (false == this.valueClamp) return res;
        switch (this.valueClampMode) {
         case CLAMP_MODE.MIN_MAX:
          res > max && (res = max);
          res < min && (res = min);
          break;

         case CLAMP_MODE.MIN:
          res < min && (res = min);
          break;

         case CLAMP_MODE.MAX:
          res > max && (res = max);
        }
        return res;
      };
      VMModify.prototype.vAddInt = function(e, data) {
        this.vAdd(e, data, true);
      };
      VMModify.prototype.vSubInt = function(e, data) {
        this.vSub(e, data, true);
      };
      VMModify.prototype.vMulInt = function(e, data) {
        this.vMul(e, data, true);
      };
      VMModify.prototype.vDivInt = function(e, data) {
        this.vDiv(e, data, true);
      };
      VMModify.prototype.vAdd = function(e, data, int) {
        void 0 === int && (int = false);
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) + a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vSub = function(e, data, int) {
        void 0 === int && (int = false);
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) - a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vMul = function(e, data, int) {
        void 0 === int && (int = false);
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) * a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vDiv = function(e, data, int) {
        void 0 === int && (int = false);
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) / a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vString = function(e, data) {
        var a = data;
        this.VM.setValue(this.watchPath, a);
      };
      VMModify.prototype.vNumberInt = function(e, data) {
        this.vNumber(e, data, true);
      };
      VMModify.prototype.vNumber = function(e, data, int) {
        void 0 === int && (int = false);
        var a = parseFloat(data);
        int && (a = Math.round(a));
        this.VM.setValue(this.watchPath, this.clampValue(a));
      };
      __decorate([ property ], VMModify.prototype, "watchPath", void 0);
      __decorate([ property() ], VMModify.prototype, "valueClamp", void 0);
      __decorate([ property({
        type: cc.Enum(CLAMP_MODE),
        visible: function() {
          return true === this.valueClamp;
        }
      }) ], VMModify.prototype, "valueClampMode", void 0);
      __decorate([ property({
        visible: function() {
          return true === this.valueClamp && this.valueClampMode !== CLAMP_MODE.MAX;
        }
      }) ], VMModify.prototype, "valueMin", void 0);
      __decorate([ property({
        visible: function() {
          return true === this.valueClamp && this.valueClampMode !== CLAMP_MODE.MIN;
        }
      }) ], VMModify.prototype, "valueMax", void 0);
      VMModify = __decorate([ ccclass, menu("ModelViewer/VM-Modify(\u4fee\u6539Model)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMModify.md") ], VMModify);
      return VMModify;
    }(VMBase_1.default);
    exports.default = VMModify;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase"
  } ],
  VMParent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15ccciO+ZRH476sPKD/LvB7", "VMParent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./ViewModel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, help = _a.help;
    var VMParent = function(_super) {
      __extends(VMParent, _super);
      function VMParent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tag = "_temp";
        _this.data = {};
        _this.VM = ViewModel_1.VM;
        return _this;
      }
      VMParent.prototype.onLoad = function() {
        if (null == this.data) return;
        this.tag = "_temp<" + this.node.uuid.replace(".", "") + ">";
        ViewModel_1.VM.add(this.data, this.tag);
        var comps = this.getVMComponents();
        for (var i = 0; i < comps.length; i++) {
          var comp = comps[i];
          this.replaceVMPath(comp, this.tag);
        }
        this.onBind();
      };
      VMParent.prototype.onBind = function() {};
      VMParent.prototype.onUnBind = function() {};
      VMParent.prototype.replaceVMPath = function(comp, tag) {
        var path = comp["watchPath"];
        if (true == comp["templateMode"]) {
          var pathArr = comp["watchPathArr"];
          if (pathArr) for (var i = 0; i < pathArr.length; i++) {
            var path_1 = pathArr[i];
            pathArr[i] = path_1.replace("*", tag);
          }
        } else "*" === path.split(".")[0] && (comp["watchPath"] = path.replace("*", tag));
      };
      VMParent.prototype.getVMComponents = function() {
        var _this = this;
        var comps = this.node.getComponentsInChildren("VMBase");
        var parents = this.node.getComponentsInChildren("VMParent").filter(function(v) {
          return v.uuid !== _this.uuid;
        });
        var filters = [];
        parents.forEach(function(node) {
          filters = filters.concat(node.getComponentsInChildren("VMBase"));
        });
        comps = comps.filter(function(v) {
          return filters.indexOf(v) < 0;
        });
        return comps;
      };
      VMParent.prototype.onDestroy = function() {
        this.onUnBind();
        ViewModel_1.VM.remove(this.tag);
        this.data = null;
      };
      VMParent = __decorate([ ccclass, help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMParent.md") ], VMParent);
      return VMParent;
    }(cc.Component);
    exports.default = VMParent;
    cc._RF.pop();
  }, {
    "./ViewModel": "ViewModel"
  } ],
  VMProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a50eqI7JZNV5Sh0y/Qd9C6", "VMProgress");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMCustom_1 = require("./VMCustom");
    var StringFormat_1 = require("./StringFormat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
    var VMProgress = function(_super) {
      __extends(VMProgress, _super);
      function VMProgress() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.watchPathArr = [ "[min]", "[max]" ];
        _this.templateMode = true;
        _this.stringFormat = "";
        return _this;
      }
      VMProgress.prototype.onLoad = function() {
        (this.watchPathArr.length < 2 || "[min]" == this.watchPathArr[0] || "[max]" == this.watchPathArr[1]) && console.error("VMProgress must have two values!");
        _super.prototype.onLoad.call(this);
      };
      VMProgress.prototype.start = function() {
        true;
        this.onValueInit();
      };
      VMProgress.prototype.onValueInit = function() {
        var max = this.watchPathArr.length;
        for (var i = 0; i < max; i++) this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i]);
        var value = this.templateValueArr[0] / this.templateValueArr[1];
        this.setComponentValue(value);
      };
      VMProgress.prototype.setComponentValue = function(value) {
        if ("" !== this.stringFormat) {
          var res = StringFormat_1.StringFormatFunction.deal(value, this.stringFormat);
          _super.prototype.setComponentValue.call(this, res);
        } else _super.prototype.setComponentValue.call(this, value);
      };
      VMProgress.prototype.onValueController = function(n, o) {
        var value = Math.round(n * this.templateValueArr[1]);
        Number.isNaN(value) && (value = 0);
        this.VM.setValue(this.watchPathArr[0], value);
      };
      VMProgress.prototype.onValueChanged = function(n, o, pathArr) {
        if (false === this.templateMode) return;
        var path = pathArr.join(".");
        var index = this.watchPathArr.findIndex(function(v) {
          return v === path;
        });
        index >= 0 && (this.templateValueArr[index] = n);
        var value = this.templateValueArr[0] / this.templateValueArr[1];
        value > 1 && (value = 1);
        (value < 0 || Number.isNaN(value)) && (value = 0);
        this.setComponentValue(value);
      };
      __decorate([ property({
        visible: false,
        override: true
      }) ], VMProgress.prototype, "watchPath", void 0);
      __decorate([ property({
        type: [ cc.String ],
        tooltip: "\u7b2c\u4e00\u4e2a\u503c\u662fmin \u503c\uff0c\u7b2c\u4e8c\u4e2a\u503c \u662f max \u503c\uff0c\u4f1a\u8ba1\u7b97\u51fa\u4e24\u8005\u7684\u6bd4\u4f8b"
      }) ], VMProgress.prototype, "watchPathArr", void 0);
      __decorate([ property({
        visible: function() {
          return "string" === this.componentProperty;
        },
        tooltip: "\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\uff0c\u548c VMLabel \u7684\u5b57\u6bb5\u4e00\u6837\uff0c\u9700\u8981\u586b\u5165\u5bf9\u5e94\u7684\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"
      }) ], VMProgress.prototype, "stringFormat", void 0);
      VMProgress = __decorate([ ccclass, menu("ModelViewer/VM-Progress (VM-\u8fdb\u5ea6\u6761)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMProgress.md") ], VMProgress);
      return VMProgress;
    }(VMCustom_1.default);
    exports.default = VMProgress;
    cc._RF.pop();
  }, {
    "./StringFormat": "StringFormat",
    "./VMCustom": "VMCustom"
  } ],
  VMState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47052uw/Y5O1LXaLObj4ARx", "VMState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./ViewModel");
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
    var CONDITION;
    (function(CONDITION) {
      CONDITION[CONDITION["=="] = 0] = "==";
      CONDITION[CONDITION["!="] = 1] = "!=";
      CONDITION[CONDITION[">"] = 2] = ">";
      CONDITION[CONDITION[">="] = 3] = ">=";
      CONDITION[CONDITION["<"] = 4] = "<";
      CONDITION[CONDITION["<="] = 5] = "<=";
      CONDITION[CONDITION["range"] = 6] = "range";
    })(CONDITION || (CONDITION = {}));
    var ACTION;
    (function(ACTION) {
      ACTION[ACTION["NODE_ACTIVE"] = 0] = "NODE_ACTIVE";
      ACTION[ACTION["NODE_VISIBLE"] = 1] = "NODE_VISIBLE";
      ACTION[ACTION["NODE_OPACITY"] = 2] = "NODE_OPACITY";
      ACTION[ACTION["NODE_COLOR"] = 3] = "NODE_COLOR";
      ACTION[ACTION["COMPONENT_CUSTOM"] = 4] = "COMPONENT_CUSTOM";
    })(ACTION || (ACTION = {}));
    var CHILD_MODE_TYPE;
    (function(CHILD_MODE_TYPE) {
      CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_INDEX"] = 0] = "NODE_INDEX";
      CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_NAME"] = 1] = "NODE_NAME";
    })(CHILD_MODE_TYPE || (CHILD_MODE_TYPE = {}));
    var VMState = function(_super) {
      __extends(VMState, _super);
      function VMState() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.foreachChildMode = false;
        _this.condition = CONDITION["=="];
        _this.foreachChildType = CHILD_MODE_TYPE.NODE_INDEX;
        _this.valueA = 0;
        _this.valueB = 0;
        _this.valueAction = ACTION.NODE_ACTIVE;
        _this.valueActionOpacity = 0;
        _this.valueActionColor = cc.color(155, 155, 155);
        _this.valueComponentName = "";
        _this.valueComponentProperty = "";
        _this.valueComponentDefaultValue = "";
        _this.valueComponentActionValue = "";
        _this.watchNodes = [];
        return _this;
      }
      VMState.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        if (0 == this.watchNodes.length) {
          this.valueAction !== ACTION.NODE_ACTIVE && false === this.foreachChildMode && this.watchNodes.push(this.node);
          this.watchNodes = this.watchNodes.concat(this.node.children);
        }
      };
      VMState.prototype.start = function() {
        this.enabled && this.onValueInit();
      };
      VMState.prototype.onValueInit = function() {
        var value = ViewModel_1.VM.getValue(this.watchPath);
        this.checkNodeFromValue(value);
      };
      VMState.prototype.onValueChanged = function(newVar, oldVar, pathArr) {
        this.checkNodeFromValue(newVar);
      };
      VMState.prototype.checkNodeFromValue = function(value) {
        var _this = this;
        if (this.foreachChildMode) this.watchNodes.forEach(function(node, index) {
          var v = _this.foreachChildType === CHILD_MODE_TYPE.NODE_INDEX ? index : node.name;
          var check = _this.conditionCheck(value, v);
          _this.setNodeState(node, check);
        }); else {
          var check = this.conditionCheck(value, this.valueA, this.valueB);
          this.setNodesStates(check);
        }
      };
      VMState.prototype.setNodesStates = function(checkState) {
        var _this = this;
        var nodes = this.watchNodes;
        var check = checkState;
        nodes.forEach(function(node) {
          _this.setNodeState(node, check);
        });
      };
      VMState.prototype.setNodeState = function(node, checkState) {
        var n = this.valueAction;
        var check = checkState;
        var a = ACTION;
        switch (n) {
         case a.NODE_ACTIVE:
          node.active = !!check;
          break;

         case a.NODE_VISIBLE:
          node.opacity = check ? 255 : 0;
          break;

         case a.NODE_COLOR:
          node.color = check ? this.valueActionColor : cc.color(255, 255, 255);
          break;

         case a.NODE_OPACITY:
          node.opacity = check ? this.valueActionOpacity : 255;
          break;

         case a.COMPONENT_CUSTOM:
          var comp = node.getComponent(this.valueComponentName);
          if (null == comp) return;
          this.valueComponentProperty in comp && (comp[this.valueComponentProperty] = check ? this.valueComponentActionValue : this.valueComponentDefaultValue);
        }
      };
      VMState.prototype.conditionCheck = function(v, a, b) {
        var cod = CONDITION;
        switch (this.condition) {
         case cod["=="]:
          if (v == a) return true;
          break;

         case cod["!="]:
          if (v != a) return true;
          break;

         case cod["<"]:
          if (v < a) return true;
          break;

         case cod[">"]:
          if (v > a) return true;
          break;

         case cod[">="]:
          if (v >= a) return true;
          break;

         case cod["<"]:
          if (v < a) return true;
          break;

         case cod["<="]:
          if (v <= a) return true;
          break;

         case cod["range"]:
          if (v >= a && v <= b) return true;
        }
        return false;
      };
      __decorate([ property ], VMState.prototype, "watchPath", void 0);
      __decorate([ property({
        tooltip: "\u904d\u5386\u5b50\u8282\u70b9,\u6839\u636e\u5b50\u8282\u70b9\u7684\u540d\u5b57\u6216\u540d\u5b57\u8f6c\u6362\u4e3a\u503c\uff0c\u5224\u65ad\u503c\u6ee1\u8db3\u6761\u4ef6 \u6765\u6fc0\u6d3b"
      }) ], VMState.prototype, "foreachChildMode", void 0);
      __decorate([ property({
        type: cc.Enum(CONDITION)
      }) ], VMState.prototype, "condition", void 0);
      __decorate([ property({
        type: cc.Enum(CHILD_MODE_TYPE),
        tooltip: "\u904d\u5386\u5b50\u8282\u70b9,\u6839\u636e\u5b50\u8282\u70b9\u7684\u540d\u5b57\u8f6c\u6362\u4e3a\u503c\uff0c\u5224\u65ad\u503c\u6ee1\u8db3\u6761\u4ef6 \u6765\u6fc0\u6d3b",
        visible: function() {
          return true === this.foreachChildMode;
        }
      }) ], VMState.prototype, "foreachChildType", void 0);
      __decorate([ property({
        displayName: "Value: a",
        visible: function() {
          return false === this.foreachChildMode;
        }
      }) ], VMState.prototype, "valueA", void 0);
      __decorate([ property({
        displayName: "Value: b",
        visible: function() {
          return false === this.foreachChildMode && this.condition === CONDITION.range;
        }
      }) ], VMState.prototype, "valueB", void 0);
      __decorate([ property({
        type: cc.Enum(ACTION),
        tooltip: "\u4e00\u65e6\u6ee1\u8db3\u6761\u4ef6\u5c31\u5bf9\u8282\u70b9\u6267\u884c\u64cd\u4f5c"
      }) ], VMState.prototype, "valueAction", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.NODE_OPACITY;
        },
        range: [ 0, 255 ],
        type: cc.Integer,
        displayName: "Action Opacity"
      }) ], VMState.prototype, "valueActionOpacity", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.NODE_COLOR;
        },
        displayName: "Action Color"
      }) ], VMState.prototype, "valueActionColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Component Name"
      }) ], VMState.prototype, "valueComponentName", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Component Property"
      }) ], VMState.prototype, "valueComponentProperty", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Default Value"
      }) ], VMState.prototype, "valueComponentDefaultValue", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Action Value"
      }) ], VMState.prototype, "valueComponentActionValue", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        tooltip: "\u9700\u8981\u6267\u884c\u6761\u4ef6\u7684\u8282\u70b9\uff0c\u5982\u679c\u4e0d\u586b\u5199\u5219\u9ed8\u8ba4\u4f1a\u6267\u884c\u672c\u8282\u70b9\u4ee5\u53ca\u672c\u8282\u70b9\u7684\u6240\u6709\u5b50\u8282\u70b9 \u7684\u72b6\u6001"
      }) ], VMState.prototype, "watchNodes", void 0);
      VMState = __decorate([ ccclass, menu("ModelViewer/VM-State (VM\u72b6\u6001\u63a7\u5236)"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMState.md") ], VMState);
      return VMState;
    }(VMBase_1.default);
    exports.default = VMState;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase",
    "./ViewModel": "ViewModel"
  } ],
  ViewModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54f75k4X+RP0qaXOzrfZysL", "ViewModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JsonOb_1 = require("./JsonOb");
    var VM_EMIT_HEAD = "VC:";
    var DEBUG_SHOW_PATH = false;
    function setValueFromPath(obj, path, value, tag) {
      void 0 === tag && (tag = "");
      var props = path.split(".");
      for (var i = 0; i < props.length; i++) {
        var propName = props[i];
        if (propName in obj === false) {
          console.error("[" + propName + "] not find in " + tag + "." + path);
          break;
        }
        i == props.length - 1 ? obj[propName] = value : obj = obj[propName];
      }
    }
    function getValueFromPath(obj, path, def, tag) {
      void 0 === tag && (tag = "");
      var props = path.split(".");
      for (var i = 0; i < props.length; i++) {
        var propName = props[i];
        if (propName in obj === false) {
          console.error("[" + propName + "] not find in " + tag + "." + path);
          return def;
        }
        obj = obj[propName];
      }
      null !== obj && "undefined" !== typeof obj || (obj = def);
      return obj;
    }
    var ViewModel = function() {
      function ViewModel(data, tag) {
        this._tag = null;
        this.active = true;
        this.emitToRootPath = false;
        new JsonOb_1.JsonOb(data, this._callback.bind(this));
        this.$data = data;
        this._tag = tag;
      }
      ViewModel.prototype._callback = function(n, o, path) {
        if (true == this.active) {
          var name = VM_EMIT_HEAD + this._tag + "." + path.join(".");
          DEBUG_SHOW_PATH && cc.log(">>", n, o, path);
          cc.director.emit(name, n, o, [ this._tag ].concat(path));
          this.emitToRootPath && cc.director.emit(VM_EMIT_HEAD + this._tag, n, o, path);
          if (path.length >= 2) for (var i = 0; i < path.length - 1; i++) var e = path[i];
        }
      };
      ViewModel.prototype.setValue = function(path, value) {
        setValueFromPath(this.$data, path, value, this._tag);
      };
      ViewModel.prototype.getValue = function(path, def) {
        return getValueFromPath(this.$data, path, def, this._tag);
      };
      return ViewModel;
    }();
    var VMManager = function() {
      function VMManager() {
        this._mvs = [];
        this.EMIT_HEAD = VM_EMIT_HEAD;
        this.setObjValue = setValueFromPath;
        this.getObjValue = getValueFromPath;
      }
      VMManager.prototype.add = function(data, tag, activeRootObject) {
        void 0 === tag && (tag = "global");
        void 0 === activeRootObject && (activeRootObject = false);
        var vm = new ViewModel(data, tag);
        var has = this._mvs.find(function(v) {
          return v.tag === tag;
        });
        if (tag.includes(".")) {
          console.error("cant write . in tag:", tag);
          return;
        }
        if (has) {
          console.error("already set VM tag:" + tag);
          return;
        }
        vm.emitToRootPath = activeRootObject;
        this._mvs.push({
          tag: tag,
          vm: vm
        });
      };
      VMManager.prototype.remove = function(tag) {
        var index = this._mvs.findIndex(function(v) {
          return v.tag === tag;
        });
        index >= 0 && this._mvs.splice(index, 1);
      };
      VMManager.prototype.get = function(tag) {
        var res = this._mvs.find(function(v) {
          return v.tag === tag;
        });
        if (null != res) return res.vm;
        console.error("cant find VM from:", tag);
      };
      VMManager.prototype.addValue = function(path, value) {
        path = path.trim();
        var rs = path.split(".");
        rs.length < 2 && console.error("Cant find path:" + path);
        var vm = this.get(rs[0]);
        if (!vm) {
          console.error("Cant Set VM:" + rs[0]);
          return;
        }
        var resPath = rs.slice(1).join(".");
        vm.setValue(resPath, vm.getValue(resPath) + value);
      };
      VMManager.prototype.getValue = function(path, def) {
        path = path.trim();
        var rs = path.split(".");
        if (rs.length < 2) {
          console.error("Get Value Cant find path:" + path);
          return;
        }
        var vm = this.get(rs[0]);
        if (!vm) {
          console.error("Cant Get VM:" + rs[0]);
          return;
        }
        return vm.getValue(rs.slice(1).join("."), def);
      };
      VMManager.prototype.setValue = function(path, value) {
        path = path.trim();
        var rs = path.split(".");
        if (rs.length < 2) {
          console.error("Set Value Cant find path:" + path);
          return;
        }
        var vm = this.get(rs[0]);
        if (!vm) {
          console.error("Cant Set VM:" + rs[0]);
          return;
        }
        vm.setValue(rs.slice(1).join("."), value);
      };
      VMManager.prototype.bindPath = function(path, callback, target, useCapture) {
        path = path.trim();
        if ("" == path) {
          console.error(target.node.name, "\u8282\u70b9\u7ed1\u5b9a\u7684\u8def\u5f84\u4e3a\u7a7a");
          return;
        }
        if ("*" === path.split(".")[0]) {
          console.error(path, "\u8def\u5f84\u4e0d\u5408\u6cd5,\u53ef\u80fd\u9519\u8bef\u8986\u76d6\u4e86 VMParent \u7684onLoad \u65b9\u6cd5, \u6216\u8005\u7236\u8282\u70b9\u5e76\u672a\u6302\u8f7d VMParent \u76f8\u5173\u7684\u7ec4\u4ef6\u811a\u672c");
          return;
        }
        cc.director.on(VM_EMIT_HEAD + path, callback, target, useCapture);
      };
      VMManager.prototype.unbindPath = function(path, callback, target) {
        path = path.trim();
        if ("*" === path.split(".")[0]) {
          console.error(path, "\u8def\u5f84\u4e0d\u5408\u6cd5,\u53ef\u80fd\u9519\u8bef\u8986\u76d6\u4e86 VMParent \u7684onLoad \u65b9\u6cd5, \u6216\u8005\u7236\u8282\u70b9\u5e76\u672a\u6302\u8f7d VMParent \u76f8\u5173\u7684\u7ec4\u4ef6\u811a\u672c");
          return;
        }
        cc.director.off(VM_EMIT_HEAD + path, callback, target);
      };
      VMManager.prototype.inactive = function() {
        this._mvs.forEach(function(mv) {
          mv.vm.active = false;
        });
      };
      VMManager.prototype.active = function() {
        this._mvs.forEach(function(mv) {
          mv.vm.active = true;
        });
      };
      return VMManager;
    }();
    exports.VM = new VMManager();
    cc._RF.pop();
  }, {
    "./JsonOb": "JsonOb"
  } ],
  WayControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12e53iDwaVJoZSDwDQ05OB2", "WayControl");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.waylist = [];
        _this.mainnode = null;
        _this.canvas = null;
        _this.nowid = 0;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "waylist", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "mainnode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "canvas", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  "cos-wx-sdk-v5": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf3d4nSco9Mc45b87jcueHz", "cos-wx-sdk-v5");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    !function(e, t) {
      "object" == ("undefined" === typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" === typeof module ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? exports.COS = t() : e.COS = t();
    }(void 0, function() {
      return function(e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
          return e;
        }, t.d = function(e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
        }, t.n = function(e) {
          var n = e && e.__esModule ? function() {
            return e.default;
          } : function() {
            return e;
          };
          return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "D:\\github\\cos-wx-sdk-v5\\demo\\lib", t(t.s = 4);
      }([ function(e, t, n) {
        function r(e) {
          return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        }
        function o(e) {
          return u(e, function(e) {
            return "object" == ("undefined" === typeof e ? "undefined" : _typeof(e)) ? o(e) : e;
          });
        }
        function i(e, t) {
          return c(t, function(n, r) {
            e[r] = t[r];
          }), e;
        }
        function a(e) {
          return e instanceof Array;
        }
        function s(e, t) {
          for (var n = !1, r = 0; r < e.length; r++) if (t === e[r]) {
            n = !0;
            break;
          }
          return n;
        }
        function c(e, t) {
          for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
        }
        function u(e, t) {
          var n = a(e) ? [] : {};
          for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r], r));
          return n;
        }
        function l(e, t) {
          var n = a(e), r = n ? [] : {};
          for (var o in e) e.hasOwnProperty(o) && t(e[o], o) && (n ? r.push(e[o]) : r[o] = e[o]);
          return r;
        }
        var d = n(8), f = n(6), h = n(10), p = n(7), m = n(5), g = m.btoa, y = function y(e) {
          e = e || {};
          var t = e.SecretId, n = e.SecretKey, i = (e.method || e.Method || "get").toLowerCase(), a = o(e.Query || e.params || {}), s = o(e.Headers || e.headers || {}), c = e.Pathname || "/" + (e.Key || "");
          if (!t) return console.error("missing param SecretId");
          if (!n) return console.error("missing param SecretKey");
          var u = function u(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t.sort(function(e, t) {
              return e = e.toLowerCase(), t = t.toLowerCase(), e === t ? 0 : e > t ? 1 : -1;
            });
          }, l = function l(e) {
            var t, n, o, i = [], a = u(e);
            for (t = 0; t < a.length; t++) n = a[t], o = void 0 === e[n] || null === e[n] ? "" : "" + e[n], 
            n = n.toLowerCase(), n = r(n), o = r(o) || "", i.push(n + "=" + o);
            return i.join("&");
          }, d = Math.round(_(e.SystemClockOffset) / 1e3) - 1, h = d, p = e.Expires || e.expires;
          h += void 0 === p ? 900 : 1 * p || 0;
          var m = t, g = d + ";" + h, y = d + ";" + h, C = u(s).join(";").toLowerCase(), v = u(a).join(";").toLowerCase(), x = f.HmacSHA1(y, n).toString(), k = [ i, c, l(a), l(s), "" ].join("\n"), S = [ "sha1", g, f.SHA1(k).toString(), "" ].join("\n");
          return [ "q-sign-algorithm=sha1", "q-ak=" + m, "q-sign-time=" + g, "q-key-time=" + y, "q-header-list=" + C, "q-url-param-list=" + v, "q-signature=" + f.HmacSHA1(S, x).toString() ].join("&");
        }, C = function C() {}, v = function v(e) {
          var t = {};
          for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && null !== e[n] && (t[n] = e[n]);
          return t;
        }, x = function x(e, t) {
          var n, r = new FileReader();
          FileReader.prototype.readAsBinaryString ? (n = FileReader.prototype.readAsBinaryString, 
          r.onload = function() {
            t(this.result);
          }) : FileReader.prototype.readAsArrayBuffer ? n = function n(e) {
            var n = "", r = new FileReader();
            r.onload = function(e) {
              for (var o = new Uint8Array(r.result), i = o.byteLength, a = 0; a < i; a++) n += String.fromCharCode(o[a]);
              t(n);
            }, r.readAsArrayBuffer(e);
          } : console.error("FileReader not support readAsBinaryString"), n.call(r, e);
        }, k = function k(e, t) {
          x(e, function(e) {
            var n = d(e, !0);
            t(null, n);
          });
        }, S = function S(e) {
          var t, n, r, o = "";
          for (t = 0, n = e.length / 2; t < n; t++) r = parseInt(e[2 * t] + e[2 * t + 1], 16), 
          o += String.fromCharCode(r);
          return g(o);
        }, A = function A() {
          var e = function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
          };
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
        }, b = function b(e, t) {
          var n = t.Bucket, r = t.Region, o = t.Key;
          if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
            if (!n) return "Bucket";
            if (!r) return "Region";
          } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e) {
            if (!n) return "Bucket";
            if (!r) return "Region";
            if (!o) return "Key";
          }
          return !1;
        }, R = function R(e, t) {
          if (t = i({}, t), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
            var n = t.Headers || {};
            if (t && "object" == ("undefined" === typeof t ? "undefined" : _typeof(t))) {
              !function() {
                for (var e in t) t.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = t[e]);
              }();
              var r = {
                "x-cos-mfa": "MFA",
                "Content-MD5": "ContentMD5",
                "Content-Length": "ContentLength",
                "Content-Type": "ContentType",
                Expect: "Expect",
                Expires: "Expires",
                "Cache-Control": "CacheControl",
                "Content-Disposition": "ContentDisposition",
                "Content-Encoding": "ContentEncoding",
                Range: "Range",
                "If-Modified-Since": "IfModifiedSince",
                "If-Unmodified-Since": "IfUnmodifiedSince",
                "If-Match": "IfMatch",
                "If-None-Match": "IfNoneMatch",
                "x-cos-copy-source": "CopySource",
                "x-cos-copy-source-Range": "CopySourceRange",
                "x-cos-metadata-directive": "MetadataDirective",
                "x-cos-copy-source-If-Modified-Since": "CopySourceIfModifiedSince",
                "x-cos-copy-source-If-Unmodified-Since": "CopySourceIfUnmodifiedSince",
                "x-cos-copy-source-If-Match": "CopySourceIfMatch",
                "x-cos-copy-source-If-None-Match": "CopySourceIfNoneMatch",
                "x-cos-acl": "ACL",
                "x-cos-grant-read": "GrantRead",
                "x-cos-grant-write": "GrantWrite",
                "x-cos-grant-full-control": "GrantFullControl",
                "x-cos-grant-read-acp": "GrantReadAcp",
                "x-cos-grant-write-acp": "GrantWriteAcp",
                "x-cos-storage-class": "StorageClass",
                "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm",
                "x-cos-server-side-encryption-customer-key": "SSECustomerKey",
                "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5",
                "x-cos-server-side-encryption": "ServerSideEncryption",
                "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId",
                "x-cos-server-side-encryption-context": "SSEContext"
              };
              N.each(r, function(e, r) {
                void 0 !== t[e] && (n[r] = t[e]);
              }), t.Headers = v(n);
            }
          }
          return t;
        }, T = function T(e, t) {
          return function(n, r) {
            "function" == typeof n && (r = n, n = {}), n = R(e, n);
            var o = function o(e) {
              return e && e.headers && (e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), 
              e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), 
              e;
            }, i = function i(e, t) {
              r && r(o(e), o(t));
            };
            if ("getService" !== e && "abortUploadTask" !== e) {
              var a;
              if (a = b(e, n)) return void i({
                error: "missing param " + a
              });
              if (n.Region) {
                if (n.Region.indexOf("cos.") > -1) return void i({
                  error: 'param Region should not be start with "cos."'
                });
                if (!/^([a-z\d-]+)$/.test(n.Region)) return void i({
                  error: "Region format error."
                });
                this.options.CompatibilityMode || -1 !== n.Region.indexOf("-") || "yfb" === n.Region || "default" === n.Region || console.warn("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224");
              }
              if (n.Bucket) {
                if (!/^([a-z\d-]+)-(\d+)$/.test(n.Bucket)) if (n.AppId) n.Bucket = n.Bucket + "-" + n.AppId; else {
                  if (!this.options.AppId) return void i({
                    error: 'Bucket should format as "test-1250000000".'
                  });
                  n.Bucket = n.Bucket + "-" + this.options.AppId;
                }
                n.AppId && (console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'), 
                delete n.AppId);
              }
            }
            var s = t.call(this, n, i);
            if ("getAuth" === e || "getObjectUrl" === e) return s;
          };
        }, w = function w(e, t) {
          function n() {
            if (o = 0, t && "function" == typeof t) {
              r = Date.now();
              var n, i = Math.max(0, Math.round((s - a) / ((r - c) / 1e3) * 100) / 100);
              n = 0 === s && 0 === e ? 1 : Math.round(s / e * 100) / 100 || 0, c = r, a = s;
              try {
                t({
                  loaded: s,
                  total: e,
                  speed: i,
                  percent: n
                });
              } catch (e) {}
            }
          }
          var r, o, i = this, a = 0, s = 0, c = Date.now();
          return function(t, r) {
            if (t && (s = t.loaded, e = t.total), r) clearTimeout(o), n(); else {
              if (o) return;
              o = setTimeout(n, i.options.ProgressInterval);
            }
          };
        }, E = function E(e, t, n) {
          var r;
          if ("string" == typeof t.Body && (t.Body = new Blob([ t.Body ], {
            type: "text/plain"
          })), !t.Body || !(t.Body instanceof Blob || "[object File]" === t.Body.toString() || "[object Blob]" === t.Body.toString())) return void n({
            error: "params body format error, Only allow File|Blob|String."
          });
          r = t.Body.size, t.ContentLength = r, n(null, r);
        }, _ = function _(e) {
          return Date.now() + (e || 0);
        }, N = {
          noop: C,
          formatParams: R,
          apiWrapper: T,
          xml2json: h,
          json2xml: p,
          md5: d,
          clearKey: v,
          getFileMd5: k,
          binaryBase64: S,
          extend: i,
          isArray: a,
          isInArray: s,
          each: c,
          map: u,
          filter: l,
          clone: o,
          uuid: A,
          camSafeUrlEncode: r,
          throttleOnProgress: w,
          getFileSize: E,
          getSkewTime: _,
          getAuth: y,
          isBrowser: !0
        };
        N.fileSlice = function(e, t, n) {
          return e.slice ? e.slice(t, n) : e.mozSlice ? e.mozSlice(t, n) : e.webkitSlice ? e.webkitSlice(t, n) : void 0;
        }, N.getFileUUID = function(e, t) {
          return e.name && e.size && e.lastModifiedDate && t ? N.md5([ e.name, e.size, e.lastModifiedDate, t ].join("::")) : null;
        }, N.getBodyMd5 = function(e, t, n) {
          n = n || C, e && "string" == typeof t ? n(N.md5(t, !0)) : n();
        }, e.exports = N;
      }, function(e, t) {
        function n(e, t) {
          for (var n in e) t[n] = e[n];
        }
        function r(e, t) {
          function r() {}
          var o = e.prototype;
          if (Object.create) {
            var i = Object.create(t.prototype);
            o.__proto__ = i;
          }
          o instanceof t || (r.prototype = t.prototype, r = new r(), n(o, r), e.prototype = o = r), 
          o.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
          o.constructor = e);
        }
        function o(e, t) {
          if (t instanceof Error) var n = t; else n = this, Error.call(this, oe[e]), this.message = oe[e], 
          Error.captureStackTrace && Error.captureStackTrace(this, o);
          return n.code = e, t && (this.message = this.message + ": " + t), n;
        }
        function i() {}
        function a(e, t) {
          this._node = e, this._refresh = t, s(this);
        }
        function s(e) {
          var t = e._node._inc || e._node.ownerDocument._inc;
          if (e._inc != t) {
            var r = e._refresh(e._node);
            K(e, "length", r.length), n(r, e), e._inc = t;
          }
        }
        function c() {}
        function u(e, t) {
          for (var n = e.length; n--; ) if (e[n] === t) return n;
        }
        function l(e, t, n, r) {
          if (r ? t[u(t, r)] = n : t[t.length++] = n, e) {
            n.ownerElement = e;
            var o = e.ownerDocument;
            o && (r && C(o, e, r), y(o, e, n));
          }
        }
        function d(e, t, n) {
          var r = u(t, n);
          if (!(r >= 0)) throw o(ae, new Error(e.tagName + "@" + n));
          for (var i = t.length - 1; r < i; ) t[r] = t[++r];
          if (t.length = i, e) {
            var a = e.ownerDocument;
            a && (C(a, e, n), n.ownerElement = null);
          }
        }
        function f(e) {
          if (this._features = {}, e) for (var t in e) this._features = e[t];
        }
        function h() {}
        function p(e) {
          return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
        }
        function m(e, t) {
          if (t(e)) return !0;
          if (e = e.firstChild) do {
            if (m(e, t)) return !0;
          } while (e = e.nextSibling);
        }
        function g() {}
        function y(e, t, n) {
          e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
        }
        function C(e, t, n, r) {
          e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
        }
        function v(e, t, n) {
          if (e && e._inc) {
            e._inc++;
            var r = t.childNodes;
            if (n) r[r.length++] = n; else {
              for (var o = t.firstChild, i = 0; o; ) r[i++] = o, o = o.nextSibling;
              r.length = i;
            }
          }
        }
        function x(e, t) {
          var n = t.previousSibling, r = t.nextSibling;
          return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
          v(e.ownerDocument, e), t;
        }
        function k(e, t, n) {
          var r = t.parentNode;
          if (r && r.removeChild(t), t.nodeType === te) {
            var o = t.firstChild;
            if (null == o) return t;
            var i = t.lastChild;
          } else o = i = t;
          var a = n ? n.previousSibling : e.lastChild;
          o.previousSibling = a, i.nextSibling = n, a ? a.nextSibling = o : e.firstChild = o, 
          null == n ? e.lastChild = i : n.previousSibling = i;
          do {
            o.parentNode = e;
          } while (o !== i && (o = o.nextSibling));
          return v(e.ownerDocument || e, e), t.nodeType == te && (t.firstChild = t.lastChild = null), 
          t;
        }
        function S(e, t) {
          var n = t.parentNode;
          if (n) {
            var r = e.lastChild;
            n.removeChild(t);
            var r = e.lastChild;
          }
          var r = e.lastChild;
          return t.parentNode = e, t.previousSibling = r, t.nextSibling = null, r ? r.nextSibling = t : e.firstChild = t, 
          e.lastChild = t, v(e.ownerDocument, e, t), t;
        }
        function A() {
          this._nsMap = {};
        }
        function b() {}
        function R() {}
        function T() {}
        function w() {}
        function E() {}
        function _() {}
        function N() {}
        function B() {}
        function D() {}
        function O() {}
        function P() {}
        function I() {}
        function M(e, t) {
          var n = [], r = 9 == this.nodeType ? this.documentElement : this, o = r.prefix, i = r.namespaceURI;
          if (i && null == o) {
            var o = r.lookupPrefix(i);
            if (null == o) var a = [ {
              namespace: i,
              prefix: null
            } ];
          }
          return F(this, n, e, t, a), n.join("");
        }
        function L(e, t, n) {
          var r = e.prefix || "", o = e.namespaceURI;
          if (!r && !o) return !1;
          if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === o || "http://www.w3.org/2000/xmlns/" == o) return !1;
          for (var i = n.length; i--; ) {
            var a = n[i];
            if (a.prefix == r) return a.namespace != o;
          }
          return !0;
        }
        function F(e, t, n, r, o) {
          if (r) {
            if (!(e = r(e))) return;
            if ("string" == typeof e) return void t.push(e);
          }
          switch (e.nodeType) {
           case q:
            o || (o = []);
            var i = (o.length, e.attributes), a = i.length, s = e.firstChild, c = e.tagName;
            n = z === e.namespaceURI || n, t.push("<", c);
            for (var u = 0; u < a; u++) {
              var l = i.item(u);
              "xmlns" == l.prefix ? o.push({
                prefix: l.localName,
                namespace: l.value
              }) : "xmlns" == l.nodeName && o.push({
                prefix: "",
                namespace: l.value
              });
            }
            for (var u = 0; u < a; u++) {
              var l = i.item(u);
              if (L(l, n, o)) {
                var d = l.prefix || "", f = l.namespaceURI, h = d ? " xmlns:" + d : " xmlns";
                t.push(h, '="', f, '"'), o.push({
                  prefix: d,
                  namespace: f
                });
              }
              F(l, t, n, r, o);
            }
            if (L(e, n, o)) {
              var d = e.prefix || "", f = e.namespaceURI, h = d ? " xmlns:" + d : " xmlns";
              t.push(h, '="', f, '"'), o.push({
                prefix: d,
                namespace: f
              });
            }
            if (s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
              if (t.push(">"), n && /^script$/i.test(c)) for (;s; ) s.data ? t.push(s.data) : F(s, t, n, r, o), 
              s = s.nextSibling; else for (;s; ) F(s, t, n, r, o), s = s.nextSibling;
              t.push("</", c, ">");
            } else t.push("/>");
            return;

           case J:
           case te:
            for (var s = e.firstChild; s; ) F(s, t, n, r, o), s = s.nextSibling;
            return;

           case V:
            return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, p), '"');

           case X:
            return t.push(e.data.replace(/[<&]/g, p));

           case $:
            return t.push("<![CDATA[", e.data, "]]>");

           case Y:
            return t.push("\x3c!--", e.data, "--\x3e");

           case ee:
            var m = e.publicId, g = e.systemId;
            if (t.push("<!DOCTYPE ", e.name), m) t.push(' PUBLIC "', m), g && "." != g && t.push('" "', g), 
            t.push('">'); else if (g && "." != g) t.push(' SYSTEM "', g, '">'); else {
              var y = e.internalSubset;
              y && t.push(" [", y, "]"), t.push(">");
            }
            return;

           case Z:
            return t.push("<?", e.target, " ", e.data, "?>");

           case W:
            return t.push("&", e.nodeName, ";");

           default:
            t.push("??", e.nodeName);
          }
        }
        function U(e, t, n) {
          var r;
          switch (t.nodeType) {
           case q:
            r = t.cloneNode(!1), r.ownerDocument = e;

           case te:
            break;

           case V:
            n = !0;
          }
          if (r || (r = t.cloneNode(!1)), r.ownerDocument = e, r.parentNode = null, n) for (var o = t.firstChild; o; ) r.appendChild(U(e, o, n)), 
          o = o.nextSibling;
          return r;
        }
        function j(e, t, n) {
          var r = new t.constructor();
          for (var o in t) {
            var a = t[o];
            "object" != ("undefined" === typeof a ? "undefined" : _typeof(a)) && a != r[o] && (r[o] = a);
          }
          switch (t.childNodes && (r.childNodes = new i()), r.ownerDocument = e, r.nodeType) {
           case q:
            var s = t.attributes, u = r.attributes = new c(), l = s.length;
            u._ownerElement = r;
            for (var d = 0; d < l; d++) r.setAttributeNode(j(e, s.item(d), !0));
            break;

           case V:
            n = !0;
          }
          if (n) for (var f = t.firstChild; f; ) r.appendChild(j(e, f, n)), f = f.nextSibling;
          return r;
        }
        function K(e, t, n) {
          e[t] = n;
        }
        function H(e) {
          switch (e.nodeType) {
           case q:
           case te:
            var t = [];
            for (e = e.firstChild; e; ) 7 !== e.nodeType && 8 !== e.nodeType && t.push(H(e)), 
            e = e.nextSibling;
            return t.join("");

           default:
            return e.nodeValue;
          }
        }
        var z = "http://www.w3.org/1999/xhtml", G = {}, q = G.ELEMENT_NODE = 1, V = G.ATTRIBUTE_NODE = 2, X = G.TEXT_NODE = 3, $ = G.CDATA_SECTION_NODE = 4, W = G.ENTITY_REFERENCE_NODE = 5, Q = G.ENTITY_NODE = 6, Z = G.PROCESSING_INSTRUCTION_NODE = 7, Y = G.COMMENT_NODE = 8, J = G.DOCUMENT_NODE = 9, ee = G.DOCUMENT_TYPE_NODE = 10, te = G.DOCUMENT_FRAGMENT_NODE = 11, ne = G.NOTATION_NODE = 12, re = {}, oe = {}, ie = (re.INDEX_SIZE_ERR = (oe[1] = "Index size error", 
        1), re.DOMSTRING_SIZE_ERR = (oe[2] = "DOMString size error", 2), re.HIERARCHY_REQUEST_ERR = (oe[3] = "Hierarchy request error", 
        3)), ae = (re.WRONG_DOCUMENT_ERR = (oe[4] = "Wrong document", 4), re.INVALID_CHARACTER_ERR = (oe[5] = "Invalid character", 
        5), re.NO_DATA_ALLOWED_ERR = (oe[6] = "No data allowed", 6), re.NO_MODIFICATION_ALLOWED_ERR = (oe[7] = "No modification allowed", 
        7), re.NOT_FOUND_ERR = (oe[8] = "Not found", 8)), se = (re.NOT_SUPPORTED_ERR = (oe[9] = "Not supported", 
        9), re.INUSE_ATTRIBUTE_ERR = (oe[10] = "Attribute in use", 10));
        re.INVALID_STATE_ERR = (oe[11] = "Invalid state", 11), re.SYNTAX_ERR = (oe[12] = "Syntax error", 
        12), re.INVALID_MODIFICATION_ERR = (oe[13] = "Invalid modification", 13), re.NAMESPACE_ERR = (oe[14] = "Invalid namespace", 
        14), re.INVALID_ACCESS_ERR = (oe[15] = "Invalid access", 15);
        o.prototype = Error.prototype, n(re, o), i.prototype = {
          length: 0,
          item: function item(e) {
            return this[e] || null;
          },
          toString: function toString(e, t) {
            for (var n = [], r = 0; r < this.length; r++) F(this[r], n, e, t);
            return n.join("");
          }
        }, a.prototype.item = function(e) {
          return s(this), this[e];
        }, r(a, i), c.prototype = {
          length: 0,
          item: i.prototype.item,
          getNamedItem: function getNamedItem(e) {
            for (var t = this.length; t--; ) {
              var n = this[t];
              if (n.nodeName == e) return n;
            }
          },
          setNamedItem: function setNamedItem(e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new o(se);
            var n = this.getNamedItem(e.nodeName);
            return l(this._ownerElement, this, e, n), n;
          },
          setNamedItemNS: function setNamedItemNS(e) {
            var t, n = e.ownerElement;
            if (n && n != this._ownerElement) throw new o(se);
            return t = this.getNamedItemNS(e.namespaceURI, e.localName), l(this._ownerElement, this, e, t), 
            t;
          },
          removeNamedItem: function removeNamedItem(e) {
            var t = this.getNamedItem(e);
            return d(this._ownerElement, this, t), t;
          },
          removeNamedItemNS: function removeNamedItemNS(e, t) {
            var n = this.getNamedItemNS(e, t);
            return d(this._ownerElement, this, n), n;
          },
          getNamedItemNS: function getNamedItemNS(e, t) {
            for (var n = this.length; n--; ) {
              var r = this[n];
              if (r.localName == t && r.namespaceURI == e) return r;
            }
            return null;
          }
        }, f.prototype = {
          hasFeature: function hasFeature(e, t) {
            var n = this._features[e.toLowerCase()];
            return !(!n || t && !(t in n));
          },
          createDocument: function createDocument(e, t, n) {
            var r = new g();
            if (r.implementation = this, r.childNodes = new i(), r.doctype = n, n && r.appendChild(n), 
            t) {
              var o = r.createElementNS(e, t);
              r.appendChild(o);
            }
            return r;
          },
          createDocumentType: function createDocumentType(e, t, n) {
            var r = new _();
            return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
          }
        }, h.prototype = {
          firstChild: null,
          lastChild: null,
          previousSibling: null,
          nextSibling: null,
          attributes: null,
          parentNode: null,
          childNodes: null,
          ownerDocument: null,
          nodeValue: null,
          namespaceURI: null,
          prefix: null,
          localName: null,
          insertBefore: function insertBefore(e, t) {
            return k(this, e, t);
          },
          replaceChild: function replaceChild(e, t) {
            this.insertBefore(e, t), t && this.removeChild(t);
          },
          removeChild: function removeChild(e) {
            return x(this, e);
          },
          appendChild: function appendChild(e) {
            return this.insertBefore(e, null);
          },
          hasChildNodes: function hasChildNodes() {
            return null != this.firstChild;
          },
          cloneNode: function cloneNode(e) {
            return j(this.ownerDocument || this, this, e);
          },
          normalize: function normalize() {
            for (var e = this.firstChild; e; ) {
              var t = e.nextSibling;
              t && t.nodeType == X && e.nodeType == X ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
              e = t);
            }
          },
          isSupported: function isSupported(e, t) {
            return this.ownerDocument.implementation.hasFeature(e, t);
          },
          hasAttributes: function hasAttributes() {
            return this.attributes.length > 0;
          },
          lookupPrefix: function lookupPrefix(e) {
            for (var t = this; t; ) {
              var n = t._nsMap;
              if (n) for (var r in n) if (n[r] == e) return r;
              t = t.nodeType == V ? t.ownerDocument : t.parentNode;
            }
            return null;
          },
          lookupNamespaceURI: function lookupNamespaceURI(e) {
            for (var t = this; t; ) {
              var n = t._nsMap;
              if (n && e in n) return n[e];
              t = t.nodeType == V ? t.ownerDocument : t.parentNode;
            }
            return null;
          },
          isDefaultNamespace: function isDefaultNamespace(e) {
            return null == this.lookupPrefix(e);
          }
        }, n(G, h), n(G, h.prototype), g.prototype = {
          nodeName: "#document",
          nodeType: J,
          doctype: null,
          documentElement: null,
          _inc: 1,
          insertBefore: function insertBefore(e, t) {
            if (e.nodeType == te) {
              for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r;
              }
              return e;
            }
            return null == this.documentElement && e.nodeType == q && (this.documentElement = e), 
            k(this, e, t), e.ownerDocument = this, e;
          },
          removeChild: function removeChild(e) {
            return this.documentElement == e && (this.documentElement = null), x(this, e);
          },
          importNode: function importNode(e, t) {
            return U(this, e, t);
          },
          getElementById: function getElementById(e) {
            var t = null;
            return m(this.documentElement, function(n) {
              if (n.nodeType == q && n.getAttribute("id") == e) return t = n, !0;
            }), t;
          },
          createElement: function createElement(e) {
            var t = new A();
            return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new i(), 
            (t.attributes = new c())._ownerElement = t, t;
          },
          createDocumentFragment: function createDocumentFragment() {
            var e = new O();
            return e.ownerDocument = this, e.childNodes = new i(), e;
          },
          createTextNode: function createTextNode(e) {
            var t = new T();
            return t.ownerDocument = this, t.appendData(e), t;
          },
          createComment: function createComment(e) {
            var t = new w();
            return t.ownerDocument = this, t.appendData(e), t;
          },
          createCDATASection: function createCDATASection(e) {
            var t = new E();
            return t.ownerDocument = this, t.appendData(e), t;
          },
          createProcessingInstruction: function createProcessingInstruction(e, t) {
            var n = new P();
            return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
            n;
          },
          createAttribute: function createAttribute(e) {
            var t = new b();
            return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
            t;
          },
          createEntityReference: function createEntityReference(e) {
            var t = new D();
            return t.ownerDocument = this, t.nodeName = e, t;
          },
          createElementNS: function createElementNS(e, t) {
            var n = new A(), r = t.split(":"), o = n.attributes = new c();
            return n.childNodes = new i(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
            n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
            o._ownerElement = n, n;
          },
          createAttributeNS: function createAttributeNS(e, t) {
            var n = new b(), r = t.split(":");
            return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
            2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
          }
        }, r(g, h), A.prototype = {
          nodeType: q,
          hasAttribute: function hasAttribute(e) {
            return null != this.getAttributeNode(e);
          },
          getAttribute: function getAttribute(e) {
            var t = this.getAttributeNode(e);
            return t && t.value || "";
          },
          getAttributeNode: function getAttributeNode(e) {
            return this.attributes.getNamedItem(e);
          },
          setAttribute: function setAttribute(e, t) {
            var n = this.ownerDocument.createAttribute(e);
            n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
          },
          removeAttribute: function removeAttribute(e) {
            var t = this.getAttributeNode(e);
            t && this.removeAttributeNode(t);
          },
          appendChild: function appendChild(e) {
            return e.nodeType === te ? this.insertBefore(e, null) : S(this, e);
          },
          setAttributeNode: function setAttributeNode(e) {
            return this.attributes.setNamedItem(e);
          },
          setAttributeNodeNS: function setAttributeNodeNS(e) {
            return this.attributes.setNamedItemNS(e);
          },
          removeAttributeNode: function removeAttributeNode(e) {
            return this.attributes.removeNamedItem(e.nodeName);
          },
          removeAttributeNS: function removeAttributeNS(e, t) {
            var n = this.getAttributeNodeNS(e, t);
            n && this.removeAttributeNode(n);
          },
          hasAttributeNS: function hasAttributeNS(e, t) {
            return null != this.getAttributeNodeNS(e, t);
          },
          getAttributeNS: function getAttributeNS(e, t) {
            var n = this.getAttributeNodeNS(e, t);
            return n && n.value || "";
          },
          setAttributeNS: function setAttributeNS(e, t, n) {
            var r = this.ownerDocument.createAttributeNS(e, t);
            r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
          },
          getAttributeNodeNS: function getAttributeNodeNS(e, t) {
            return this.attributes.getNamedItemNS(e, t);
          },
          getElementsByTagName: function getElementsByTagName(e) {
            return new a(this, function(t) {
              var n = [];
              return m(t, function(r) {
                r === t || r.nodeType != q || "*" !== e && r.tagName != e || n.push(r);
              }), n;
            });
          },
          getElementsByTagNameNS: function getElementsByTagNameNS(e, t) {
            return new a(this, function(n) {
              var r = [];
              return m(n, function(o) {
                o === n || o.nodeType !== q || "*" !== e && o.namespaceURI !== e || "*" !== t && o.localName != t || r.push(o);
              }), r;
            });
          }
        }, g.prototype.getElementsByTagName = A.prototype.getElementsByTagName, g.prototype.getElementsByTagNameNS = A.prototype.getElementsByTagNameNS, 
        r(A, h), b.prototype.nodeType = V, r(b, h), R.prototype = {
          data: "",
          substringData: function substringData(e, t) {
            return this.data.substring(e, e + t);
          },
          appendData: function appendData(e) {
            e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
          },
          insertData: function insertData(e, t) {
            this.replaceData(e, 0, t);
          },
          appendChild: function appendChild(e) {
            throw new Error(oe[ie]);
          },
          deleteData: function deleteData(e, t) {
            this.replaceData(e, t, "");
          },
          replaceData: function replaceData(e, t, n) {
            n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
            this.length = n.length;
          }
        }, r(R, h), T.prototype = {
          nodeName: "#text",
          nodeType: X,
          splitText: function splitText(e) {
            var t = this.data, n = t.substring(e);
            t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
            var r = this.ownerDocument.createTextNode(n);
            return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
          }
        }, r(T, R), w.prototype = {
          nodeName: "#comment",
          nodeType: Y
        }, r(w, R), E.prototype = {
          nodeName: "#cdata-section",
          nodeType: $
        }, r(E, R), _.prototype.nodeType = ee, r(_, h), N.prototype.nodeType = ne, r(N, h), 
        B.prototype.nodeType = Q, r(B, h), D.prototype.nodeType = W, r(D, h), O.prototype.nodeName = "#document-fragment", 
        O.prototype.nodeType = te, r(O, h), P.prototype.nodeType = Z, r(P, h), I.prototype.serializeToString = function(e, t, n) {
          return M.call(e, t, n);
        }, h.prototype.toString = M;
        try {
          Object.defineProperty && (Object.defineProperty(a.prototype, "length", {
            get: function get() {
              return s(this), this.$$length;
            }
          }), Object.defineProperty(h.prototype, "textContent", {
            get: function get() {
              return H(this);
            },
            set: function set(e) {
              switch (this.nodeType) {
               case q:
               case te:
                for (;this.firstChild; ) this.removeChild(this.firstChild);
                (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                break;

               default:
                this.data = e, this.value = e, this.nodeValue = e;
              }
            }
          }), K = function K(e, t, n) {
            e["$$" + t] = n;
          });
        } catch (e) {}
        t.DOMImplementation = f, t.XMLSerializer = I;
      }, function(e, t) {
        var n = function n(e) {
          var t = {}, n = function n(e) {
            return !t[e] && (t[e] = []), t[e];
          };
          e.on = function(e, t) {
            n(e).push(t);
          }, e.off = function(e, t) {
            for (var r = n(e), o = r.length - 1; o >= 0; o--) t === r[o] && r.splice(o, 1);
          }, e.emit = function(e, t) {
            for (var r = n(e).map(function(e) {
              return e;
            }), o = 0; o < r.length; o++) r[o](t);
          };
        }, r = function r() {
          n(this);
        };
        e.exports.init = n, e.exports.EventProxy = r;
      }, function(e, t, n) {
        var r = n(0), o = n(2), i = n(16), a = n(15), s = n(13), c = {
          SecretId: "",
          SecretKey: "",
          XCosSecurityToken: "",
          FileParallelLimit: 3,
          ChunkParallelLimit: 3,
          ChunkSize: 1048576,
          SliceSize: 1048576,
          CopyChunkParallelLimit: 20,
          CopyChunkSize: 10485760,
          CopySliceSize: 10485760,
          MaxPartNumber: 1e4,
          ProgressInterval: 1e3,
          UploadQueueSize: 1e4,
          Domain: "",
          ServiceDomain: "",
          Protocol: "",
          CompatibilityMode: !1,
          ForcePathStyle: !1,
          CorrectClockSkew: !0,
          SystemClockOffset: 0
        }, u = function u(e) {
          this.options = r.extend(r.clone(c), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), 
          this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), 
          this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), 
          this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), 
          this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), 
          this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), 
          this.options.Timeout = Math.max(0, this.options.Timeout), this.options.AppId && console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'), 
          o.init(this), i.init(this);
        };
        a.init(u, i), s.init(u, i), u.getAuthorization = r.getAuth, u.version = "0.7.3", 
        e.exports = u;
      }, function(e, t, n) {
        var r = n(3);
        e.exports = r;
      }, function(e, t) {
        var n = function(e) {
          e = e || {};
          var t, n = e.Base64, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = function(e) {
            for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;
            return t;
          }(r), i = String.fromCharCode, a = function a(e) {
            if (e.length < 2) {
              var t = e.charCodeAt(0);
              return t < 128 ? e : t < 2048 ? i(192 | t >>> 6) + i(128 | 63 & t) : i(224 | t >>> 12 & 15) + i(128 | t >>> 6 & 63) + i(128 | 63 & t);
            }
            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return i(240 | t >>> 18 & 7) + i(128 | t >>> 12 & 63) + i(128 | t >>> 6 & 63) + i(128 | 63 & t);
          }, s = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, c = function c(e) {
            return e.replace(s, a);
          }, u = function u(e) {
            var t = [ 0, 2, 1 ][e.length % 3], n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
            return [ r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), t >= 2 ? "=" : r.charAt(n >>> 6 & 63), t >= 1 ? "=" : r.charAt(63 & n) ].join("");
          }, l = e.btoa ? function(t) {
            return e.btoa(t);
          } : function(e) {
            return e.replace(/[\s\S]{1,3}/g, u);
          }, d = t ? function(e) {
            return (e.constructor === t.constructor ? e : new t(e)).toString("base64");
          } : function(e) {
            return l(c(e));
          }, f = function f(e, t) {
            return t ? d(String(e)).replace(/[+\/]/g, function(e) {
              return "+" == e ? "-" : "_";
            }).replace(/=/g, "") : d(String(e));
          }, h = function h(e) {
            return f(e, !0);
          }, p = new RegExp([ "[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}" ].join("|"), "g"), m = function m(e) {
            switch (e.length) {
             case 4:
              var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3), n = t - 65536;
              return i(55296 + (n >>> 10)) + i(56320 + (1023 & n));

             case 3:
              return i((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

             default:
              return i((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
            }
          }, g = function g(e) {
            return e.replace(p, m);
          }, y = function y(e) {
            var t = e.length, n = t % 4, r = (t > 0 ? o[e.charAt(0)] << 18 : 0) | (t > 1 ? o[e.charAt(1)] << 12 : 0) | (t > 2 ? o[e.charAt(2)] << 6 : 0) | (t > 3 ? o[e.charAt(3)] : 0), a = [ i(r >>> 16), i(r >>> 8 & 255), i(255 & r) ];
            return a.length -= [ 0, 0, 2, 1 ][n], a.join("");
          }, C = e.atob ? function(t) {
            return e.atob(t);
          } : function(e) {
            return e.replace(/[\s\S]{1,4}/g, y);
          }, v = t ? function(e) {
            return (e.constructor === t.constructor ? e : new t(e, "base64")).toString();
          } : function(e) {
            return g(C(e));
          }, x = function x(e) {
            return v(String(e).replace(/[-_]/g, function(e) {
              return "-" == e ? "+" : "/";
            }).replace(/[^A-Za-z0-9\+\/]/g, ""));
          };
          return {
            VERSION: "2.1.9",
            atob: C,
            btoa: l,
            fromBase64: x,
            toBase64: f,
            utob: c,
            encode: f,
            encodeURI: h,
            btou: g,
            decode: x,
            noConflict: function noConflict() {
              var t = e.Base64;
              return e.Base64 = n, t;
            }
          };
        }();
        e.exports = n;
      }, function(e, t) {
        var n = n || function(e, t) {
          var n = {}, r = n.lib = {}, o = function o() {}, i = r.Base = {
            extend: function extend(e) {
              o.prototype = this;
              var t = new o();
              return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                t.$super.init.apply(this, arguments);
              }), t.init.prototype = t, t.$super = this, t;
            },
            create: function create() {
              var e = this.extend();
              return e.init.apply(e, arguments), e;
            },
            init: function init() {},
            mixIn: function mixIn(e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
              e.hasOwnProperty("toString") && (this.toString = e.toString);
            },
            clone: function clone() {
              return this.init.prototype.extend(this);
            }
          }, a = r.WordArray = i.extend({
            init: function init(e, t) {
              e = this.words = e || [], this.sigBytes = void 0 != t ? t : 4 * e.length;
            },
            toString: function toString(e) {
              return (e || c).stringify(this);
            },
            concat: function concat(e) {
              var t = this.words, n = e.words, r = this.sigBytes;
              if (e = e.sigBytes, this.clamp(), r % 4) for (var o = 0; o < e; o++) t[r + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (r + o) % 4 * 8; else if (65535 < n.length) for (o = 0; o < e; o += 4) t[r + o >>> 2] = n[o >>> 2]; else t.push.apply(t, n);
              return this.sigBytes += e, this;
            },
            clamp: function clamp() {
              var t = this.words, n = this.sigBytes;
              t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
            },
            clone: function clone() {
              var e = i.clone.call(this);
              return e.words = this.words.slice(0), e;
            },
            random: function random(t) {
              for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);
              return new a.init(n, t);
            }
          }), s = n.enc = {}, c = s.Hex = {
            stringify: function stringify(e) {
              var t = e.words;
              e = e.sigBytes;
              for (var n = [], r = 0; r < e; r++) {
                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
              }
              return n.join("");
            },
            parse: function parse(e) {
              for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
              return new a.init(n, t / 2);
            }
          }, u = s.Latin1 = {
            stringify: function stringify(e) {
              var t = e.words;
              e = e.sigBytes;
              for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
              return n.join("");
            },
            parse: function parse(e) {
              for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
              return new a.init(n, t);
            }
          }, l = s.Utf8 = {
            stringify: function stringify(e) {
              try {
                return decodeURIComponent(escape(u.stringify(e)));
              } catch (e) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function parse(e) {
              return u.parse(unescape(encodeURIComponent(e)));
            }
          }, d = r.BufferedBlockAlgorithm = i.extend({
            reset: function reset() {
              this._data = new a.init(), this._nDataBytes = 0;
            },
            _append: function _append(e) {
              "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
            },
            _process: function _process(t) {
              var n = this._data, r = n.words, o = n.sigBytes, i = this.blockSize, s = o / (4 * i), s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);
              if (t = s * i, o = e.min(4 * t, o), t) {
                for (var c = 0; c < t; c += i) this._doProcessBlock(r, c);
                c = r.splice(0, t), n.sigBytes -= o;
              }
              return new a.init(c, o);
            },
            clone: function clone() {
              var e = i.clone.call(this);
              return e._data = this._data.clone(), e;
            },
            _minBufferSize: 0
          });
          r.Hasher = d.extend({
            cfg: i.extend(),
            init: function init(e) {
              this.cfg = this.cfg.extend(e), this.reset();
            },
            reset: function reset() {
              d.reset.call(this), this._doReset();
            },
            update: function update(e) {
              return this._append(e), this._process(), this;
            },
            finalize: function finalize(e) {
              return e && this._append(e), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function _createHelper(e) {
              return function(t, n) {
                return new e.init(n).finalize(t);
              };
            },
            _createHmacHelper: function _createHmacHelper(e) {
              return function(t, n) {
                return new f.HMAC.init(e, n).finalize(t);
              };
            }
          });
          var f = n.algo = {};
          return n;
        }(Math);
        !function() {
          var e = n, t = e.lib, r = t.WordArray, o = t.Hasher, i = [], t = e.algo.SHA1 = o.extend({
            _doReset: function _doReset() {
              this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
            },
            _doProcessBlock: function _doProcessBlock(e, t) {
              for (var n = this._hash.words, r = n[0], o = n[1], a = n[2], s = n[3], c = n[4], u = 0; 80 > u; u++) {
                if (16 > u) i[u] = 0 | e[t + u]; else {
                  var l = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                  i[u] = l << 1 | l >>> 31;
                }
                l = (r << 5 | r >>> 27) + c + i[u], l = 20 > u ? l + (1518500249 + (o & a | ~o & s)) : 40 > u ? l + (1859775393 + (o ^ a ^ s)) : 60 > u ? l + ((o & a | o & s | a & s) - 1894007588) : l + ((o ^ a ^ s) - 899497514), 
                c = s, s = a, a = o << 30 | o >>> 2, o = r, r = l;
              }
              n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, 
              n[4] = n[4] + c | 0;
            },
            _doFinalize: function _doFinalize() {
              var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
              return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
              t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
            },
            clone: function clone() {
              var e = o.clone.call(this);
              return e._hash = this._hash.clone(), e;
            }
          });
          e.SHA1 = o._createHelper(t), e.HmacSHA1 = o._createHmacHelper(t);
        }(), function() {
          var e = n, t = e.enc.Utf8;
          e.algo.HMAC = e.lib.Base.extend({
            init: function init(e, n) {
              e = this._hasher = new e.init(), "string" == typeof n && (n = t.parse(n));
              var r = e.blockSize, o = 4 * r;
              n.sigBytes > o && (n = e.finalize(n)), n.clamp();
              for (var i = this._oKey = n.clone(), a = this._iKey = n.clone(), s = i.words, c = a.words, u = 0; u < r; u++) s[u] ^= 1549556828, 
              c[u] ^= 909522486;
              i.sigBytes = a.sigBytes = o, this.reset();
            },
            reset: function reset() {
              var e = this._hasher;
              e.reset(), e.update(this._iKey);
            },
            update: function update(e) {
              return this._hasher.update(e), this;
            },
            finalize: function finalize(e) {
              var t = this._hasher;
              return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e));
            }
          });
        }(), function() {
          var e = n, t = e.lib, r = t.WordArray, o = e.enc;
          o.Base64 = {
            stringify: function stringify(e) {
              var t = e.words, n = e.sigBytes, r = this._map;
              e.clamp();
              for (var o = [], i = 0; i < n; i += 3) for (var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255, s = t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, c = t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, u = a << 16 | s << 8 | c, l = 0; l < 4 && i + .75 * l < n; l++) o.push(r.charAt(u >>> 6 * (3 - l) & 63));
              var d = r.charAt(64);
              if (d) for (;o.length % 4; ) o.push(d);
              return o.join("");
            },
            parse: function parse(e) {
              var t = e.length, n = this._map, o = n.charAt(64);
              if (o) {
                var i = e.indexOf(o);
                -1 != i && (t = i);
              }
              for (var a = [], s = 0, c = 0; c < t; c++) if (c % 4) {
                var u = n.indexOf(e.charAt(c - 1)) << c % 4 * 2, l = n.indexOf(e.charAt(c)) >>> 6 - c % 4 * 2;
                a[s >>> 2] |= (u | l) << 24 - s % 4 * 8, s++;
              }
              return r.create(a, s);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
        }(), e.exports = n;
      }, function(e, t) {
        function n(e) {
          return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(o, "");
        }
        var r = new RegExp("^([^a-zA-Z_\xc0-\xd6\xd8-\xf6\xf8-\xff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fff\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd])|^((x|X)(m|M)(l|L))|([^a-zA-Z_\xc0-\xd6\xd8-\xf6\xf8-\xff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fff\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd-.0-9\xb7\u0300-\u036f\u203f\u2040])", "g"), o = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm, i = function i(e) {
          var t = [];
          if (e instanceof Object) for (var n in e) e.hasOwnProperty(n) && t.push(n);
          return t;
        }, a = function a(e, t) {
          var o = function o(e, n, _o, i, a) {
            var s = void 0 !== t.indent ? t.indent : "\t", c = t.prettyPrint ? "\n" + new Array(i).join(s) : "";
            t.removeIllegalNameCharacters && (e = e.replace(r, "_"));
            var u = [ c, "<", e, _o || "" ];
            return n && n.length > 0 ? (u.push(">"), u.push(n), a && u.push(c), u.push("</"), 
            u.push(e), u.push(">")) : u.push("/>"), u.join("");
          };
          return function e(r, a, s) {
            var c = "undefined" === typeof r ? "undefined" : _typeof(r);
            switch ((Array.isArray ? Array.isArray(r) : r instanceof Array) ? c = "array" : r instanceof Date && (c = "date"), 
            c) {
             case "array":
              var u = [];
              return r.map(function(t) {
                u.push(e(t, 1, s + 1));
              }), t.prettyPrint && u.push("\n"), u.join("");

             case "date":
              return r.toJSON ? r.toJSON() : r + "";

             case "object":
              var l = [];
              for (var d in r) if (r[d] instanceof Array) for (var f in r[d]) l.push(o(d, e(r[d][f], 0, s + 1), null, s + 1, i(r[d][f]).length)); else l.push(o(d, e(r[d], 0, s + 1), null, s + 1));
              return t.prettyPrint && l.length > 0 && l.push("\n"), l.join("");

             case "function":
              return r();

             default:
              return t.escape ? n(r) : "" + r;
            }
          }(e, 0, 0);
        }, s = function s(e) {
          var t = [ '<?xml version="1.0" encoding="UTF-8"' ];
          return e && t.push(' standalone="yes"'), t.push("?>"), t.join("");
        }, c = function c(e, t) {
          if (t || (t = {
            xmlHeader: {
              standalone: !0
            },
            prettyPrint: !0,
            indent: "  "
          }), "string" == typeof e) try {
            e = JSON.parse(e.toString());
          } catch (e) {
            return !1;
          }
          var n = "", r = "";
          return t && ("object" == ("undefined" === typeof t ? "undefined" : _typeof(t)) ? (t.xmlHeader && (n = s(!!t.xmlHeader.standalone)), 
          void 0 !== t.docType && (r = "<!DOCTYPE " + t.docType + ">")) : n = s()), t = t || {}, 
          [ n, t.prettyPrint && r ? "\n" : "", r, a(e, t) ].join("").replace(/\n{2,}/g, "\n").replace(/\s+$/g, "");
        };
        e.exports = c;
      }, function(e, t) {
        var n = function n(e) {
          function t(e, t) {
            return e << t | e >>> 32 - t;
          }
          function n(e, t) {
            var n, r, o, i, a;
            return o = 2147483648 & e, i = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, 
            a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
          }
          function r(e, t, n) {
            return e & t | ~e & n;
          }
          function o(e, t, n) {
            return e & n | t & ~n;
          }
          function i(e, t, n) {
            return e ^ t ^ n;
          }
          function a(e, t, n) {
            return t ^ (e | ~n);
          }
          function s(e, o, i, a, s, c, u) {
            return e = n(e, n(n(r(o, i, a), s), u)), n(t(e, c), o);
          }
          function c(e, r, i, a, s, c, u) {
            return e = n(e, n(n(o(r, i, a), s), u)), n(t(e, c), r);
          }
          function u(e, r, o, a, s, c, u) {
            return e = n(e, n(n(i(r, o, a), s), u)), n(t(e, c), r);
          }
          function l(e, r, o, i, s, c, u) {
            return e = n(e, n(n(a(r, o, i), s), u)), n(t(e, c), r);
          }
          function d(e) {
            var t, n, r = "", o = "";
            for (n = 0; n <= 3; n++) t = e >>> 8 * n & 255, o = "0" + t.toString(16), r += o.substr(o.length - 2, 2);
            return r;
          }
          var f, h, p, m, g, y, C, v, x, k = Array();
          for (e = function(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), 
              t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), 
              t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128));
            }
            return t;
          }(e), k = function(e) {
            for (var t, n = e.length, r = n + 8, o = (r - r % 64) / 64, i = 16 * (o + 1), a = Array(i - 1), s = 0, c = 0; c < n; ) t = (c - c % 4) / 4, 
            s = c % 4 * 8, a[t] = a[t] | e.charCodeAt(c) << s, c++;
            return t = (c - c % 4) / 4, s = c % 4 * 8, a[t] = a[t] | 128 << s, a[i - 2] = n << 3, 
            a[i - 1] = n >>> 29, a;
          }(e), y = 1732584193, C = 4023233417, v = 2562383102, x = 271733878, f = 0; f < k.length; f += 16) h = y, 
          p = C, m = v, g = x, y = s(y, C, v, x, k[f + 0], 7, 3614090360), x = s(x, y, C, v, k[f + 1], 12, 3905402710), 
          v = s(v, x, y, C, k[f + 2], 17, 606105819), C = s(C, v, x, y, k[f + 3], 22, 3250441966), 
          y = s(y, C, v, x, k[f + 4], 7, 4118548399), x = s(x, y, C, v, k[f + 5], 12, 1200080426), 
          v = s(v, x, y, C, k[f + 6], 17, 2821735955), C = s(C, v, x, y, k[f + 7], 22, 4249261313), 
          y = s(y, C, v, x, k[f + 8], 7, 1770035416), x = s(x, y, C, v, k[f + 9], 12, 2336552879), 
          v = s(v, x, y, C, k[f + 10], 17, 4294925233), C = s(C, v, x, y, k[f + 11], 22, 2304563134), 
          y = s(y, C, v, x, k[f + 12], 7, 1804603682), x = s(x, y, C, v, k[f + 13], 12, 4254626195), 
          v = s(v, x, y, C, k[f + 14], 17, 2792965006), C = s(C, v, x, y, k[f + 15], 22, 1236535329), 
          y = c(y, C, v, x, k[f + 1], 5, 4129170786), x = c(x, y, C, v, k[f + 6], 9, 3225465664), 
          v = c(v, x, y, C, k[f + 11], 14, 643717713), C = c(C, v, x, y, k[f + 0], 20, 3921069994), 
          y = c(y, C, v, x, k[f + 5], 5, 3593408605), x = c(x, y, C, v, k[f + 10], 9, 38016083), 
          v = c(v, x, y, C, k[f + 15], 14, 3634488961), C = c(C, v, x, y, k[f + 4], 20, 3889429448), 
          y = c(y, C, v, x, k[f + 9], 5, 568446438), x = c(x, y, C, v, k[f + 14], 9, 3275163606), 
          v = c(v, x, y, C, k[f + 3], 14, 4107603335), C = c(C, v, x, y, k[f + 8], 20, 1163531501), 
          y = c(y, C, v, x, k[f + 13], 5, 2850285829), x = c(x, y, C, v, k[f + 2], 9, 4243563512), 
          v = c(v, x, y, C, k[f + 7], 14, 1735328473), C = c(C, v, x, y, k[f + 12], 20, 2368359562), 
          y = u(y, C, v, x, k[f + 5], 4, 4294588738), x = u(x, y, C, v, k[f + 8], 11, 2272392833), 
          v = u(v, x, y, C, k[f + 11], 16, 1839030562), C = u(C, v, x, y, k[f + 14], 23, 4259657740), 
          y = u(y, C, v, x, k[f + 1], 4, 2763975236), x = u(x, y, C, v, k[f + 4], 11, 1272893353), 
          v = u(v, x, y, C, k[f + 7], 16, 4139469664), C = u(C, v, x, y, k[f + 10], 23, 3200236656), 
          y = u(y, C, v, x, k[f + 13], 4, 681279174), x = u(x, y, C, v, k[f + 0], 11, 3936430074), 
          v = u(v, x, y, C, k[f + 3], 16, 3572445317), C = u(C, v, x, y, k[f + 6], 23, 76029189), 
          y = u(y, C, v, x, k[f + 9], 4, 3654602809), x = u(x, y, C, v, k[f + 12], 11, 3873151461), 
          v = u(v, x, y, C, k[f + 15], 16, 530742520), C = u(C, v, x, y, k[f + 2], 23, 3299628645), 
          y = l(y, C, v, x, k[f + 0], 6, 4096336452), x = l(x, y, C, v, k[f + 7], 10, 1126891415), 
          v = l(v, x, y, C, k[f + 14], 15, 2878612391), C = l(C, v, x, y, k[f + 5], 21, 4237533241), 
          y = l(y, C, v, x, k[f + 12], 6, 1700485571), x = l(x, y, C, v, k[f + 3], 10, 2399980690), 
          v = l(v, x, y, C, k[f + 10], 15, 4293915773), C = l(C, v, x, y, k[f + 1], 21, 2240044497), 
          y = l(y, C, v, x, k[f + 8], 6, 1873313359), x = l(x, y, C, v, k[f + 15], 10, 4264355552), 
          v = l(v, x, y, C, k[f + 6], 15, 2734768916), C = l(C, v, x, y, k[f + 13], 21, 1309151649), 
          y = l(y, C, v, x, k[f + 4], 6, 4149444226), x = l(x, y, C, v, k[f + 11], 10, 3174756917), 
          v = l(v, x, y, C, k[f + 2], 15, 718787259), C = l(C, v, x, y, k[f + 9], 21, 3951481745), 
          y = n(y, h), C = n(C, p), v = n(v, m), x = n(x, g);
          return (d(y) + d(C) + d(v) + d(x)).toLowerCase();
        };
        e.exports = n;
      }, function(e, t) {
        var n = function n(e) {
          var t, n, r, o = [], i = Object.keys(e);
          for (t = 0; t < i.length; t++) n = i[t], r = e[n] || "", o.push(n + "=" + encodeURIComponent(r));
          return o.join("&");
        }, r = function r(e, t) {
          var r, o = e.filePath, i = e.headers || {}, a = e.url, s = e.method, c = e.onProgress, u = function u(e, n) {
            t(e, {
              statusCode: n.statusCode,
              headers: n.header
            }, n.data);
          };
          if (o) {
            var l, d = a.match(/^(https?:\/\/[^\/]+\/)([^\/]*\/?)(.*)$/);
            e.pathStyle ? (l = decodeURIComponent(d[3] || ""), a = d[1] + d[2]) : (l = decodeURIComponent(d[2] + d[3] || ""), 
            a = d[1]);
            var f = {
              key: l,
              success_action_status: 200,
              Signature: i.Authorization
            }, h = [ "Cache-Control", "Content-Type", "Content-Disposition", "Content-Encoding", "Expires", "x-cos-storage-class", "x-cos-security-token" ];
            for (var p in e.headers) e.headers.hasOwnProperty(p) && (p.indexOf("x-cos-meta-") > -1 || h.indexOf(p) > -1) && (f[p] = e.headers[p]);
            i["x-cos-acl"] && (f.acl = i["x-cos-acl"]), !f["Content-Type"] && (f["Content-Type"] = ""), 
            r = wx.uploadFile({
              url: a,
              method: s,
              name: "file",
              filePath: o,
              formData: f,
              success: function success(e) {
                u(null, e);
              },
              fail: function fail(e) {
                u(e.errMsg, e);
              }
            }), r.onProgressUpdate(function(e) {
              c({
                loaded: e.totalBytesSent,
                total: e.totalBytesExpectedToSend,
                progress: e.progress / 100
              });
            });
          } else {
            var m = e.qs && n(e.qs) || "";
            m && (a += (a.indexOf("?") > -1 ? "&" : "?") + m), i["Content-Length"] && delete i["Content-Length"], 
            wx.request({
              url: a,
              method: s,
              header: i,
              dataType: "text",
              data: e.body,
              success: function success(e) {
                u(null, e);
              },
              fail: function fail(e) {
                u(e.errMsg, e);
              }
            });
          }
          return r;
        };
        e.exports = r;
      }, function(e, t, n) {
        var r = n(11).DOMParser, o = function o(e) {
          function t(e) {
            var t = e.localName;
            return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), 
            t;
          }
          function n(e) {
            return e.prefix;
          }
          function o(e) {
            return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e;
          }
          function i(e, t, n, r) {
            for (var o = 0; o < e.length; o++) {
              var i = e[o];
              if ("string" == typeof i) {
                if (i == r) break;
              } else if (i instanceof RegExp) {
                if (i.test(r)) break;
              } else if ("function" == typeof i && i(t, n, r)) break;
            }
            return o != e.length;
          }
          function a(t, n, r) {
            switch (e.arrayAccessForm) {
             case "property":
              t[n] instanceof Array ? t[n + "_asArray"] = t[n] : t[n + "_asArray"] = [ t[n] ];
            }
            !(t[n] instanceof Array) && e.arrayAccessFormPaths.length > 0 && i(e.arrayAccessFormPaths, t, n, r) && (t[n] = [ t[n] ]);
          }
          function s(e) {
            var t = e.split(/[-T:+Z]/g), n = new Date(t[0], t[1] - 1, t[2]), r = t[5].split(".");
            if (n.setHours(t[3], t[4], r[0]), r.length > 1 && n.setMilliseconds(r[1]), t[6] && t[7]) {
              var o = 60 * t[6] + Number(t[7]);
              o = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * o : o), n.setMinutes(n.getMinutes() - o - n.getTimezoneOffset());
            } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
            return n;
          }
          function c(t, n, r) {
            if (e.datetimeAccessFormPaths.length > 0) {
              var o = r.split(".#")[0];
              return i(e.datetimeAccessFormPaths, t, n, o) ? s(t) : t;
            }
            return t;
          }
          function u(t, n, r, o) {
            return !(n == A.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || i(e.xmlElementsFilter, t, r, o);
          }
          function l(r, o) {
            if (r.nodeType == A.DOCUMENT_NODE) {
              for (var i = new Object(), s = r.childNodes, d = 0; d < s.length; d++) {
                var f = s.item(d);
                if (f.nodeType == A.ELEMENT_NODE) {
                  var h = t(f);
                  i[h] = l(f, h);
                }
              }
              return i;
            }
            if (r.nodeType == A.ELEMENT_NODE) {
              var i = new Object();
              i.__cnt = 0;
              for (var s = r.childNodes, d = 0; d < s.length; d++) {
                var f = s.item(d), h = t(f);
                if (f.nodeType != A.COMMENT_NODE) {
                  var p = o + "." + h;
                  u(i, f.nodeType, h, p) && (i.__cnt++, null == i[h] ? (i[h] = l(f, p), a(i, h, p)) : (null != i[h] && (i[h] instanceof Array || (i[h] = [ i[h] ], 
                  a(i, h, p))), i[h][i[h].length] = l(f, p)));
                }
              }
              for (var m = 0; m < r.attributes.length; m++) {
                var g = r.attributes.item(m);
                i.__cnt++, i[e.attributePrefix + g.name] = g.value;
              }
              var y = n(r);
              return null != y && "" != y && (i.__cnt++, i.__prefix = y), null != i["#text"] && (i.__text = i["#text"], 
              i.__text instanceof Array && (i.__text = i.__text.join("\n")), e.stripWhitespaces && (i.__text = i.__text.trim()), 
              delete i["#text"], "property" == e.arrayAccessForm && delete i["#text_asArray"], 
              i.__text = c(i.__text, h, o + "." + h)), null != i["#cdata-section"] && (i.__cdata = i["#cdata-section"], 
              delete i["#cdata-section"], "property" == e.arrayAccessForm && delete i["#cdata-section_asArray"]), 
              0 == i.__cnt && "text" == e.emptyNodeForm ? i = "" : 1 == i.__cnt && null != i.__text ? i = i.__text : 1 != i.__cnt || null == i.__cdata || e.keepCData ? i.__cnt > 1 && null != i.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == i.__text || "" == i.__text.trim()) && delete i.__text : i = i.__cdata, 
              delete i.__cnt, !e.enableToStringFunc || null == i.__text && null == i.__cdata || (i.toString = function() {
                return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "");
              }), i;
            }
            if (r.nodeType == A.TEXT_NODE || r.nodeType == A.CDATA_SECTION_NODE) return r.nodeValue;
          }
          function d(t, n, r, i) {
            var a = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + n;
            if (null != r) for (var s = 0; s < r.length; s++) {
              var c = r[s], u = t[c];
              e.escapeMode && (u = o(u)), a += " " + c.substr(e.attributePrefix.length) + "=", 
              e.useDoubleQuotes ? a += '"' + u + '"' : a += "'" + u + "'";
            }
            return a + (i ? "/>" : ">");
          }
          function f(e, t) {
            return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">";
          }
          function h(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length);
          }
          function p(t, n) {
            return !!("property" == e.arrayAccessForm && h(n.toString(), "_asArray") || 0 == n.toString().indexOf(e.attributePrefix) || 0 == n.toString().indexOf("__") || t[n] instanceof Function);
          }
          function m(e) {
            var t = 0;
            if (e instanceof Object) for (var n in e) p(e, n) || t++;
            return t;
          }
          function g(t, n, r) {
            return 0 == e.jsonPropertiesFilter.length || "" == r || i(e.jsonPropertiesFilter, t, n, r);
          }
          function y(t) {
            var n = [];
            if (t instanceof Object) for (var r in t) -1 == r.toString().indexOf("__") && 0 == r.toString().indexOf(e.attributePrefix) && n.push(r);
            return n;
          }
          function C(t) {
            var n = "";
            return null != t.__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (e.escapeMode ? n += o(t.__text) : n += t.__text), 
            n;
          }
          function v(t) {
            var n = "";
            return t instanceof Object ? n += C(t) : null != t && (e.escapeMode ? n += o(t) : n += t), 
            n;
          }
          function x(e, t) {
            return "" === e ? t : e + "." + t;
          }
          function k(e, t, n, r) {
            var o = "";
            if (0 == e.length) o += d(e, t, n, !0); else for (var i = 0; i < e.length; i++) o += d(e[i], t, y(e[i]), !1), 
            o += S(e[i], x(r, t)), o += f(e[i], t);
            return o;
          }
          function S(e, t) {
            var n = "";
            if (m(e) > 0) for (var r in e) if (!p(e, r) && ("" == t || g(e, r, x(t, r)))) {
              var o = e[r], i = y(o);
              if (null == o || void 0 == o) n += d(o, r, i, !0); else if (o instanceof Object) if (o instanceof Array) n += k(o, r, i, t); else if (o instanceof Date) n += d(o, r, i, !1), 
              n += o.toISOString(), n += f(o, r); else {
                var a = m(o);
                a > 0 || null != o.__text || null != o.__cdata ? (n += d(o, r, i, !1), n += S(o, x(t, r)), 
                n += f(o, r)) : n += d(o, r, i, !0);
              } else n += d(o, r, i, !1), n += v(o), n += f(o, r);
            }
            return n + v(e);
          }
          e = e || {}, function() {
            void 0 === e.escapeMode && (e.escapeMode = !0), e.attributePrefix = e.attributePrefix || "_", 
            e.arrayAccessForm = e.arrayAccessForm || "none", e.emptyNodeForm = e.emptyNodeForm || "text", 
            void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0), e.arrayAccessFormPaths = e.arrayAccessFormPaths || [], 
            void 0 === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = !0), void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0), 
            e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [], void 0 === e.useDoubleQuotes && (e.useDoubleQuotes = !1), 
            e.xmlElementsFilter = e.xmlElementsFilter || [], e.jsonPropertiesFilter = e.jsonPropertiesFilter || [], 
            void 0 === e.keepCData && (e.keepCData = !1);
          }();
          var A = {
            ELEMENT_NODE: 1,
            TEXT_NODE: 3,
            CDATA_SECTION_NODE: 4,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9
          };
          this.parseXmlString = function(e) {
            if (void 0 === e) return null;
            var t;
            if (r) {
              var n = new r(), o = null;
              try {
                o = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
              } catch (e) {
                o = null;
              }
              try {
                t = n.parseFromString(e, "text/xml"), null != o && t.getElementsByTagNameNS(o, "parsererror").length > 0 && (t = null);
              } catch (e) {
                t = null;
              }
            } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), t = new ActiveXObject("Microsoft.XMLDOM"), 
            t.async = "false", t.loadXML(e);
            return t;
          }, this.asArray = function(e) {
            return void 0 === e || null == e ? [] : e instanceof Array ? e : [ e ];
          }, this.toXmlDateTime = function(e) {
            return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null;
          }, this.asDateTime = function(e) {
            return "string" == typeof e ? s(e) : e;
          }, this.xml2json = function(e) {
            return l(e);
          }, this.xml_str2json = function(e) {
            var t = this.parseXmlString(e);
            return null != t ? this.xml2json(t) : null;
          }, this.json2xml_str = function(e) {
            return S(e, "");
          }, this.json2xml = function(e) {
            var t = this.json2xml_str(e);
            return this.parseXmlString(t);
          }, this.getVersion = function() {
            return "1.2.0";
          };
        }, i = function i(e) {
          if (!e) return null;
          var t = new r(), n = t.parseFromString(e, "text/xml"), i = new o(), a = i.xml2json(n);
          return a.html && a.getElementsByTagName("parsererror").length ? null : a;
        };
        e.exports = i;
      }, function(e, t, n) {
        function r(e) {
          this.options = e || {
            locator: {}
          };
        }
        function o(e, t, n) {
          function r(t) {
            var r = e[t];
            !r && a && (r = 2 == e.length ? function(n) {
              e(t, n);
            } : e), o[t] = r && function(e) {
              r("[xmldom " + t + "]\t" + e + s(n));
            } || function() {};
          }
          if (!e) {
            if (t instanceof i) return t;
            e = t;
          }
          var o = {}, a = e instanceof Function;
          return n = n || {}, r("warning"), r("error"), r("fatalError"), o;
        }
        function i() {
          this.cdata = !1;
        }
        function a(e, t) {
          t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
        }
        function s(e) {
          if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
        }
        function c(e, t, n) {
          return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
        }
        function u(e, t) {
          e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
        }
        r.prototype.parseFromString = function(e, t) {
          var n = this.options, r = new l(), a = n.domBuilder || new i(), s = n.errorHandler, c = n.locator, u = n.xmlns || {}, d = {
            lt: "<",
            gt: ">",
            amp: "&",
            quot: '"',
            apos: "'"
          };
          return c && a.setDocumentLocator(c), r.errorHandler = o(s, a, c), r.domBuilder = n.domBuilder || a, 
          /\/x?html?$/.test(t) && (d.nbsp = "\xa0", d.copy = "\xa9", u[""] = "http://www.w3.org/1999/xhtml"), 
          u.xml = u.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, u, d) : r.errorHandler.error("invalid doc source"), 
          a.doc;
        }, i.prototype = {
          startDocument: function startDocument() {
            this.doc = new d().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
          },
          startElement: function startElement(e, t, n, r) {
            var o = this.doc, i = o.createElementNS(e, n || t), s = r.length;
            u(this, i), this.currentElement = i, this.locator && a(this.locator, i);
            for (var c = 0; c < s; c++) {
              var e = r.getURI(c), l = r.getValue(c), n = r.getQName(c), d = o.createAttributeNS(e, n);
              this.locator && a(r.getLocator(c), d), d.value = d.nodeValue = l, i.setAttributeNode(d);
            }
          },
          endElement: function endElement(e, t, n) {
            var r = this.currentElement;
            r.tagName;
            this.currentElement = r.parentNode;
          },
          startPrefixMapping: function startPrefixMapping(e, t) {},
          endPrefixMapping: function endPrefixMapping(e) {},
          processingInstruction: function processingInstruction(e, t) {
            var n = this.doc.createProcessingInstruction(e, t);
            this.locator && a(this.locator, n), u(this, n);
          },
          ignorableWhitespace: function ignorableWhitespace(e, t, n) {},
          characters: function characters(e, t, n) {
            if (e = c.apply(this, arguments)) {
              if (this.cdata) var r = this.doc.createCDATASection(e); else var r = this.doc.createTextNode(e);
              this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), 
              this.locator && a(this.locator, r);
            }
          },
          skippedEntity: function skippedEntity(e) {},
          endDocument: function endDocument() {
            this.doc.normalize();
          },
          setDocumentLocator: function setDocumentLocator(e) {
            (this.locator = e) && (e.lineNumber = 0);
          },
          comment: function comment(e, t, n) {
            e = c.apply(this, arguments);
            var r = this.doc.createComment(e);
            this.locator && a(this.locator, r), u(this, r);
          },
          startCDATA: function startCDATA() {
            this.cdata = !0;
          },
          endCDATA: function endCDATA() {
            this.cdata = !1;
          },
          startDTD: function startDTD(e, t, n) {
            var r = this.doc.implementation;
            if (r && r.createDocumentType) {
              var o = r.createDocumentType(e, t, n);
              this.locator && a(this.locator, o), u(this, o);
            }
          },
          warning: function warning(e) {
            console.warn("[xmldom warning]\t" + e, s(this.locator));
          },
          error: function error(e) {
            console.error("[xmldom error]\t" + e, s(this.locator));
          },
          fatalError: function fatalError(e) {
            throw console.error("[xmldom fatalError]\t" + e, s(this.locator)), e;
          }
        }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
          i.prototype[e] = function() {
            return null;
          };
        });
        var l = n(12).XMLReader, d = t.DOMImplementation = n(1).DOMImplementation;
        t.XMLSerializer = n(1).XMLSerializer, t.DOMParser = r;
      }, function(e, t) {
        function n() {}
        function r(e, t, n, r, u) {
          function h(e) {
            if (e > 65535) {
              e -= 65536;
              var t = 55296 + (e >> 10), n = 56320 + (1023 & e);
              return String.fromCharCode(t, n);
            }
            return String.fromCharCode(e);
          }
          function p(e) {
            var t = e.slice(1, -1);
            return t in n ? n[t] : "#" === t.charAt(0) ? h(parseInt(t.substr(1).replace("x", "0x"))) : (u.error("entity not found:" + e), 
            e);
          }
          function m(t) {
            if (t > A) {
              var n = e.substring(A, t).replace(/&#?\w+;/g, p);
              x && g(A), r.characters(n, 0, t - A), A = t;
            }
          }
          function g(t, n) {
            for (;t >= C && (n = v.exec(e)); ) y = n.index, C = y + n[0].length, x.lineNumber++;
            x.columnNumber = t - y + 1;
          }
          for (var y = 0, C = 0, v = /.*(?:\r\n?|\n)|.*$/g, x = r.locator, k = [ {
            currentNSMap: t
          } ], S = {}, A = 0; ;) {
            try {
              var b = e.indexOf("<", A);
              if (b < 0) {
                if (!e.substr(A).match(/^\s*$/)) {
                  var R = r.doc, T = R.createTextNode(e.substr(A));
                  R.appendChild(T), r.currentElement = T;
                }
                return;
              }
              switch (b > A && m(b), e.charAt(b + 1)) {
               case "/":
                var w = e.indexOf(">", b + 3), E = e.substring(b + 2, w), _ = k.pop();
                w < 0 ? (E = e.substring(b + 2).replace(/[\s<].*/, ""), u.error("end tag name: " + E + " is not complete:" + _.tagName), 
                w = b + 1 + E.length) : E.match(/\s</) && (E = E.replace(/[\s<].*/, ""), u.error("end tag name: " + E + " maybe not complete"), 
                w = b + 1 + E.length);
                var N = _.localNSMap, B = _.tagName == E;
                if (B || _.tagName && _.tagName.toLowerCase() == E.toLowerCase()) {
                  if (r.endElement(_.uri, _.localName, E), N) for (var D in N) r.endPrefixMapping(D);
                  B || u.fatalError("end tag name: " + E + " is not match the current start tagName:" + _.tagName);
                } else k.push(_);
                w++;
                break;

               case "?":
                x && g(b), w = d(e, b, r);
                break;

               case "!":
                x && g(b), w = l(e, b, r, u);
                break;

               default:
                x && g(b);
                var O = new f(), P = k[k.length - 1].currentNSMap, w = i(e, b, O, P, p, u), I = O.length;
                if (!O.closed && c(e, w, O.tagName, S) && (O.closed = !0, n.nbsp || u.warning("unclosed xml attribute")), 
                x && I) {
                  for (var M = o(x, {}), L = 0; L < I; L++) {
                    var F = O[L];
                    g(F.offset), F.locator = o(x, {});
                  }
                  r.locator = M, a(O, r, P) && k.push(O), r.locator = x;
                } else a(O, r, P) && k.push(O);
                "http://www.w3.org/1999/xhtml" !== O.uri || O.closed ? w++ : w = s(e, w, O.tagName, p, r);
              }
            } catch (e) {
              u.error("element parse error: " + e), w = -1;
            }
            w > A ? A = w : m(Math.max(b, A) + 1);
          }
        }
        function o(e, t) {
          return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
        }
        function i(e, t, n, r, o, i) {
          for (var a, s, c = ++t, u = C; ;) {
            var l = e.charAt(c);
            switch (l) {
             case "=":
              if (u === v) a = e.slice(t, c), u = k; else {
                if (u !== x) throw new Error("attribute equal must after attrName");
                u = k;
              }
              break;

             case "'":
             case '"':
              if (u === k || u === v) {
                if (u === v && (i.warning('attribute value must after "="'), a = e.slice(t, c)), 
                t = c + 1, !((c = e.indexOf(l, t)) > 0)) throw new Error("attribute value no end '" + l + "' match");
                s = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, s, t - 1), u = A;
              } else {
                if (u != S) throw new Error('attribute value must after "="');
                s = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, s, t), i.warning('attribute "' + a + '" missed start quot(' + l + ")!!"), 
                t = c + 1, u = A;
              }
              break;

             case "/":
              switch (u) {
               case C:
                n.setTagName(e.slice(t, c));

               case A:
               case b:
               case R:
                u = R, n.closed = !0;

               case S:
               case v:
               case x:
                break;

               default:
                throw new Error("attribute invalid close char('/')");
              }
              break;

             case "":
              return i.error("unexpected end of input"), u == C && n.setTagName(e.slice(t, c)), 
              c;

             case ">":
              switch (u) {
               case C:
                n.setTagName(e.slice(t, c));

               case A:
               case b:
               case R:
                break;

               case S:
               case v:
                s = e.slice(t, c), "/" === s.slice(-1) && (n.closed = !0, s = s.slice(0, -1));

               case x:
                u === x && (s = a), u == S ? (i.warning('attribute "' + s + '" missed quot(")!!'), 
                n.add(a, s.replace(/&#?\w+;/g, o), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && s.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), 
                n.add(s, s, t));
                break;

               case k:
                throw new Error("attribute value missed!!");
              }
              return c;

             case "\x80":
              l = " ";

             default:
              if (l <= " ") switch (u) {
               case C:
                n.setTagName(e.slice(t, c)), u = b;
                break;

               case v:
                a = e.slice(t, c), u = x;
                break;

               case S:
                var s = e.slice(t, c).replace(/&#?\w+;/g, o);
                i.warning('attribute "' + s + '" missed quot(")!!'), n.add(a, s, t);

               case A:
                u = b;
              } else switch (u) {
               case x:
                n.tagName;
                "http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), 
                n.add(a, a, t), t = c, u = v;
                break;

               case A:
                i.warning('attribute space is required"' + a + '"!!');

               case b:
                u = v, t = c;
                break;

               case k:
                u = S, t = c;
                break;

               case R:
                throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
            c++;
          }
        }
        function a(e, t, n) {
          for (var r = e.tagName, o = null, i = e.length; i--; ) {
            var a = e[i], s = a.qName, c = a.value, l = s.indexOf(":");
            if (l > 0) var d = a.prefix = s.slice(0, l), f = s.slice(l + 1), h = "xmlns" === d && f; else f = s, 
            d = null, h = "xmlns" === s && "";
            a.localName = f, !1 !== h && (null == o && (o = {}, u(n, n = {})), n[h] = o[h] = c, 
            a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(h, c));
          }
          for (var i = e.length; i--; ) {
            a = e[i];
            var d = a.prefix;
            d && ("xml" === d && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== d && (a.uri = n[d || ""]));
          }
          var l = r.indexOf(":");
          l > 0 ? (d = e.prefix = r.slice(0, l), f = e.localName = r.slice(l + 1)) : (d = null, 
          f = e.localName = r);
          var p = e.uri = n[d || ""];
          if (t.startElement(p, f, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, 
          !0;
          if (t.endElement(p, f, r), o) for (d in o) t.endPrefixMapping(d);
        }
        function s(e, t, n, r, o) {
          if (/^(?:script|textarea)$/i.test(n)) {
            var i = e.indexOf("</" + n + ">", t), a = e.substring(t + 1, i);
            if (/[&<]/.test(a)) return /^script$/i.test(n) ? (o.characters(a, 0, a.length), 
            i) : (a = a.replace(/&#?\w+;/g, r), o.characters(a, 0, a.length), i);
          }
          return t + 1;
        }
        function c(e, t, n, r) {
          var o = r[n];
          return null == o && (o = e.lastIndexOf("</" + n + ">"), o < t && (o = e.lastIndexOf("</" + n)), 
          r[n] = o), o < t;
        }
        function u(e, t) {
          for (var n in e) t[n] = e[n];
        }
        function l(e, t, n, r) {
          switch (e.charAt(t + 2)) {
           case "-":
            if ("-" === e.charAt(t + 3)) {
              var o = e.indexOf("--\x3e", t + 4);
              return o > t ? (n.comment(e, t + 4, o - t - 4), o + 3) : (r.error("Unclosed comment"), 
              -1);
            }
            return -1;

           default:
            if ("CDATA[" == e.substr(t + 3, 6)) {
              var o = e.indexOf("]]>", t + 9);
              return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3;
            }
            var i = p(e, t), a = i.length;
            if (a > 1 && /!doctype/i.test(i[0][0])) {
              var s = i[1][0], c = a > 3 && /^public$/i.test(i[2][0]) && i[3][0], u = a > 4 && i[4][0], l = i[a - 1];
              return n.startDTD(s, c && c.replace(/^(['"])(.*?)\1$/, "$2"), u && u.replace(/^(['"])(.*?)\1$/, "$2")), 
              n.endDTD(), l.index + l[0].length;
            }
          }
          return -1;
        }
        function d(e, t, n) {
          var r = e.indexOf("?>", t);
          if (r) {
            var o = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
            if (o) {
              o[0].length;
              return n.processingInstruction(o[1], o[2]), r + 2;
            }
            return -1;
          }
          return -1;
        }
        function f(e) {}
        function h(e, t) {
          return e.__proto__ = t, e;
        }
        function p(e, t) {
          var n, r = [], o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
          for (o.lastIndex = t, o.exec(e); n = o.exec(e); ) if (r.push(n), n[1]) return r;
        }
        var m = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, g = new RegExp("[\\-\\.0-9" + m.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), y = new RegExp("^" + m.source + g.source + "*(?::" + m.source + g.source + "*)?$"), C = 0, v = 1, x = 2, k = 3, S = 4, A = 5, b = 6, R = 7;
        n.prototype = {
          parse: function parse(e, t, n) {
            var o = this.domBuilder;
            o.startDocument(), u(t, t = {}), r(e, t, n, o, this.errorHandler), o.endDocument();
          }
        }, f.prototype = {
          setTagName: function setTagName(e) {
            if (!y.test(e)) throw new Error("invalid tagName:" + e);
            this.tagName = e;
          },
          add: function add(e, t, n) {
            if (!y.test(e)) throw new Error("invalid attribute:" + e);
            this[this.length++] = {
              qName: e,
              value: t,
              offset: n
            };
          },
          length: 0,
          getLocalName: function getLocalName(e) {
            return this[e].localName;
          },
          getLocator: function getLocator(e) {
            return this[e].locator;
          },
          getQName: function getQName(e) {
            return this[e].qName;
          },
          getURI: function getURI(e) {
            return this[e].uri;
          },
          getValue: function getValue(e) {
            return this[e].value;
          }
        }, h({}, h.prototype) instanceof h || (h = function h(e, t) {
          function n() {}
          n.prototype = t, n = new n();
          for (t in e) n[t] = e[t];
          return n;
        }), t.XMLReader = n;
      }, function(e, t, n) {
        function r(e, t) {
          var n = e.Bucket, r = e.Region, a = e.Key, s = e.UploadId, c = e.Level || "task", l = e.AsyncLimit, d = this, f = new u();
          if (f.on("error", function(e) {
            return t(e);
          }), f.on("get_abort_array", function(i) {
            o.call(d, {
              Bucket: n,
              Region: r,
              Key: a,
              Headers: e.Headers,
              AsyncLimit: l,
              AbortArray: i
            }, function(e, n) {
              if (e) return t(e);
              t(null, n);
            });
          }), "bucket" === c) i.call(d, {
            Bucket: n,
            Region: r
          }, function(e, n) {
            if (e) return t(e);
            f.emit("get_abort_array", n.UploadList || []);
          }); else if ("file" === c) {
            if (!a) return t({
              error: "abort_upload_task_no_key"
            });
            i.call(d, {
              Bucket: n,
              Region: r,
              Key: a
            }, function(e, n) {
              if (e) return t(e);
              f.emit("get_abort_array", n.UploadList || []);
            });
          } else {
            if ("task" !== c) return t({
              error: "abort_unknown_level"
            });
            if (!s) return t({
              error: "abort_upload_task_no_id"
            });
            if (!a) return t({
              error: "abort_upload_task_no_key"
            });
            f.emit("get_abort_array", [ {
              Key: a,
              UploadId: s
            } ]);
          }
        }
        function o(e, t) {
          var n = e.Bucket, r = e.Region, o = e.Key, i = e.AbortArray, a = e.AsyncLimit || 1, s = this, u = 0, l = new Array(i.length);
          c.eachLimit(i, a, function(t, i) {
            var a = u;
            if (o && o !== t.Key) return l[a] = {
              error: {
                KeyNotMatch: !0
              }
            }, void i(null);
            var c = t.UploadId || t.UploadID;
            s.multipartAbort({
              Bucket: n,
              Region: r,
              Key: t.Key,
              Headers: e.Headers,
              UploadId: c
            }, function(e, o) {
              var s = {
                Bucket: n,
                Region: r,
                Key: t.Key,
                UploadId: c
              };
              l[a] = {
                error: e,
                task: s
              }, i(null);
            }), u++;
          }, function(e) {
            if (e) return t(e);
            for (var n = [], r = [], o = 0, i = l.length; o < i; o++) {
              var a = l[o];
              a.task && (a.error ? r.push(a.task) : n.push(a.task));
            }
            return t(null, {
              successList: n,
              errorList: r
            });
          });
        }
        function i(e, t) {
          var n = this, r = [], o = {
            Bucket: e.Bucket,
            Region: e.Region,
            Prefix: e.Key
          }, i = function i() {
            n.multipartList(o, function(e, n) {
              if (e) return t(e);
              r.push.apply(r, n.Upload || []), "true" == n.IsTruncated ? (o.KeyMarker = n.NextKeyMarker, 
              o.UploadIdMarker = n.NextUploadIdMarker, i()) : t(null, {
                UploadList: r
              });
            });
          };
          i();
        }
        function a(e, t) {
          var n = new u(), r = this, o = e.Bucket, i = e.Region, a = e.Key, d = e.CopySource, f = d.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
          if (!f) return void t({
            error: "CopySource format error"
          });
          var h = f[1], p = f[3], m = decodeURIComponent(f[4]), g = void 0 === e.SliceSize ? r.options.CopySliceSize : e.SliceSize;
          g = Math.max(0, Math.min(g, 5368709120));
          var y, C, v = e.ChunkSize || this.options.CopyChunkSize, x = this.options.CopyChunkParallelLimit, k = 0;
          n.on("copy_slice_complete", function(e) {
            r.multipartComplete({
              Bucket: o,
              Region: i,
              Key: a,
              UploadId: e.UploadId,
              Parts: e.PartList
            }, function(e, n) {
              if (e) return C(null, !0), t(e);
              C({
                loaded: y,
                total: y
              }, !0), t(null, n);
            });
          }), n.on("get_copy_data_finish", function(e) {
            c.eachLimit(e.PartList, x, function(t, n) {
              var c = t.PartNumber, u = t.CopySourceRange, l = t.end - t.start, f = 0;
              s.call(r, {
                Bucket: o,
                Region: i,
                Key: a,
                CopySource: d,
                UploadId: e.UploadId,
                PartNumber: c,
                CopySourceRange: u,
                onProgress: function onProgress(e) {
                  k += e.loaded - f, f = e.loaded, C({
                    loaded: k,
                    total: y
                  });
                }
              }, function(e, r) {
                if (e) return n(e);
                C({
                  loaded: k,
                  total: y
                }), k += l - f, t.ETag = r.ETag, n(e || null, r);
              });
            }, function(r) {
              if (r) return C(null, !0), t(r);
              n.emit("copy_slice_complete", e);
            });
          }), n.on("get_file_size_finish", function(s) {
            !function() {
              for (var t = [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120 ], n = 1048576, o = 0; o < t.length && (n = 1024 * t[o] * 1024, 
              !(y / n <= r.options.MaxPartNumber)); o++) ;
              e.ChunkSize = v = Math.max(v, n);
              for (var i = Math.ceil(y / v), a = [], s = 1; s <= i; s++) {
                var c = (s - 1) * v, u = s * v < y ? s * v - 1 : y - 1, l = {
                  PartNumber: s,
                  start: c,
                  end: u,
                  CopySourceRange: "bytes=" + c + "-" + u
                };
                a.push(l);
              }
              e.PartList = a;
            }();
            var c;
            c = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : s, c["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || s["x-cos-storage-class"], 
            c = l.clearKey(c), r.multipartInit({
              Bucket: o,
              Region: i,
              Key: a,
              Headers: c
            }, function(r, o) {
              if (r) return t(r);
              e.UploadId = o.UploadId, n.emit("get_copy_data_finish", e);
            });
          }), r.headObject({
            Bucket: h,
            Region: p,
            Key: m
          }, function(o, i) {
            if (o) return void t(o.statusCode && 404 === o.statusCode ? {
              ErrorStatus: m + " Not Exist"
            } : o);
            if (void 0 === (y = e.FileSize = i.headers["content-length"]) || !y) return void t({
              error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
            });
            if (C = l.throttleOnProgress.call(r, y, e.onProgress), y <= g) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), 
            r.putObjectCopy(e, function(e, n) {
              if (e) return C(null, !0), t(e);
              C({
                loaded: y,
                total: y
              }, !0), t(e, n);
            }); else {
              var a = i.headers, s = {
                "Cache-Control": a["cache-control"],
                "Content-Disposition": a["content-disposition"],
                "Content-Encoding": a["content-encoding"],
                "Content-Type": a["content-type"],
                Expires: a.expires,
                "x-cos-storage-class": a["x-cos-storage-class"]
              };
              l.each(a, function(e, t) {
                0 === t.indexOf("x-cos-meta-") && t.length > "x-cos-meta-".length && (s[t] = e);
              }), n.emit("get_file_size_finish", s);
            }
          });
        }
        function s(e, t) {
          var n = e.TaskId, r = e.Bucket, o = e.Region, i = e.Key, a = e.CopySource, s = e.UploadId, u = 1 * e.PartNumber, l = e.CopySourceRange, d = this.options.ChunkRetryTimes + 1, f = this;
          c.retry(d, function(t) {
            f.uploadPartCopy({
              TaskId: n,
              Bucket: r,
              Region: o,
              Key: i,
              CopySource: a,
              UploadId: s,
              PartNumber: u,
              CopySourceRange: l,
              onProgress: e.onProgress
            }, function(e, n) {
              t(e || null, n);
            });
          }, function(e, n) {
            return t(e, n);
          });
        }
        var c = n(14), u = n(2).EventProxy, l = n(0), d = {
          abortUploadTask: r,
          sliceCopyFile: a
        };
        e.exports.init = function(e, t) {
          l.each(d, function(t, n) {
            e.prototype[n] = l.apiWrapper(n, t);
          });
        };
      }, function(e, t) {
        var n = function n(e, t, _n, r) {
          if (r = r || function() {}, !e.length || t <= 0) return r();
          var o = 0, i = 0, a = 0;
          !function s() {
            if (o >= e.length) return r();
            for (;a < t && i < e.length; ) i += 1, a += 1, _n(e[i - 1], function(t) {
              t ? (r(t), r = function r() {}) : (o += 1, a -= 1, o >= e.length ? r() : s());
            });
          }();
        }, r = function r(e, t, n) {
          var r = function r(o) {
            t(function(t, i) {
              t && o < e ? r(o + 1) : n(t, i);
            });
          };
          e < 1 ? n() : r(1);
        }, o = {
          eachLimit: n,
          retry: r
        };
        e.exports = o;
      }, function(e, t, n) {
        function r(e, t) {
          "function" == typeof e && (t = e, e = {});
          var n = this.options.ServiceDomain, r = e.AppId || this.options.appId;
          n ? (n = n.replace(/\{\{AppId\}\}/gi, r || "").replace(/\{\{.*?\}\}/gi, ""), /^[a-zA-Z]+:\/\//.test(n) || (n = "https://" + n), 
          "/" === n.slice(-1) && (n = n.slice(0, -1))) : n = "https://service.cos.myqcloud.com", 
          ee.call(this, {
            Action: "name/cos:GetService",
            url: n + "/",
            method: "GET"
          }, function(e, n) {
            if (e) return t(e);
            var r = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Buckets && n.ListAllMyBucketsResult.Buckets.Bucket || [];
            r = re.isArray(r) ? r : [ r ], t(null, {
              Buckets: r,
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function o(e, t) {
          ee.call(this, {
            Action: "name/cos:HeadBucket",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            method: "HEAD"
          }, function(e, n) {
            t(e, n);
          });
        }
        function i(e, t) {
          var n = {};
          n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, 
          n["encoding-type"] = e.EncodingType, ee.call(this, {
            Action: "name/cos:GetBucket",
            ResourceKey: n.prefix,
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            qs: n
          }, function(e, n) {
            if (e) return t(e);
            var r = n.ListBucketResult || {}, o = r.Contents || [], i = r.CommonPrefixes || [];
            o = re.isArray(o) ? o : [ o ], i = re.isArray(i) ? i : [ i ];
            var a = re.clone(r);
            re.extend(a, {
              Contents: o,
              CommonPrefixes: i,
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, a);
          });
        }
        function a(e, t) {
          var n = this, r = {};
          r["x-cos-acl"] = e.ACL, r["x-cos-grant-read"] = e.GrantRead, r["x-cos-grant-write"] = e.GrantWrite, 
          r["x-cos-grant-read-acp"] = e.GrantReadAcp, r["x-cos-grant-write-acp"] = e.GrantWriteAcp, 
          r["x-cos-grant-full-control"] = e.GrantFullControl, ee.call(this, {
            Action: "name/cos:PutBucket",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: r
          }, function(r, o) {
            if (r) return t(r);
            var i = Z({
              domain: n.options.Domain,
              bucket: e.Bucket,
              region: e.Region,
              isLocation: !0
            });
            t(null, {
              Location: i,
              statusCode: o.statusCode,
              headers: o.headers
            });
          });
        }
        function s(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteBucket",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            method: "DELETE"
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function c(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketACL",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "acl"
          }, function(e, n) {
            if (e) return t(e);
            var r = n.AccessControlPolicy || {}, o = r.Owner || {}, i = r.AccessControlList.Grant || [];
            i = re.isArray(i) ? i : [ i ];
            var a = W(r);
            n.headers && n.headers["x-cos-acl"] && (a.ACL = n.headers["x-cos-acl"]), a = re.extend(a, {
              Owner: o,
              Grants: i,
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, a);
          });
        }
        function u(e, t) {
          var n = e.Headers, r = "";
          if (e.AccessControlPolicy) {
            var o = re.clone(e.AccessControlPolicy || {}), i = o.Grants || o.Grant;
            i = re.isArray(i) ? i : [ i ], delete o.Grant, delete o.Grants, o.AccessControlList = {
              Grant: i
            }, r = re.json2xml({
              AccessControlPolicy: o
            }), n["Content-Type"] = "application/xml", n["Content-MD5"] = re.binaryBase64(re.md5(r));
          }
          re.each(n, function(e, t) {
            0 === t.indexOf("x-cos-grant-") && (n[t] = Q(n[t]));
          }), ee.call(this, {
            Action: "name/cos:PutBucketACL",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: n,
            action: "acl",
            body: r
          }, function(e, n) {
            if (e) return t(e);
            t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function l(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketCORS",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "cors"
          }, function(e, n) {
            if (e) if (404 === e.statusCode && e.error && "NoSuchCORSConfiguration" === e.error.Code) {
              var r = {
                CORSRules: [],
                statusCode: e.statusCode
              };
              e.headers && (r.headers = e.headers), t(null, r);
            } else t(e); else {
              var o = n.CORSConfiguration || {}, i = o.CORSRules || o.CORSRule || [];
              i = re.clone(re.isArray(i) ? i : [ i ]), re.each(i, function(e) {
                re.each([ "AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader" ], function(t, n) {
                  var r = t + "s", o = e[r] || e[t] || [];
                  delete e[t], e[r] = re.isArray(o) ? o : [ o ];
                });
              }), t(null, {
                CORSRules: i,
                statusCode: n.statusCode,
                headers: n.headers
              });
            }
          });
        }
        function d(e, t) {
          var n = e.CORSConfiguration || {}, r = n.CORSRules || e.CORSRules || [];
          r = re.clone(re.isArray(r) ? r : [ r ]), re.each(r, function(e) {
            re.each([ "AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader" ], function(t, n) {
              var r = t + "s", o = e[r] || e[t] || [];
              delete e[r], e[t] = re.isArray(o) ? o : [ o ];
            });
          });
          var o = re.json2xml({
            CORSConfiguration: {
              CORSRule: r
            }
          }), i = e.Headers;
          i["Content-Type"] = "application/xml", i["Content-MD5"] = re.binaryBase64(re.md5(o)), 
          ee.call(this, {
            Action: "name/cos:PutBucketCORS",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: o,
            action: "cors",
            headers: i
          }, function(e, n) {
            if (e) return t(e);
            t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function f(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteBucketCORS",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "cors"
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode || e.statusCode,
              headers: n.headers
            });
          });
        }
        function h(e, t) {
          var n = e.Policy, r = n;
          try {
            "string" == typeof n ? n = JSON.parse(r) : r = JSON.stringify(n);
          } catch (e) {
            t({
              error: "Policy format error"
            });
          }
          var o = e.Headers;
          o["Content-Type"] = "application/json", o["Content-MD5"] = re.binaryBase64(re.md5(r)), 
          ee.call(this, {
            Action: "name/cos:PutBucketPolicy",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            action: "policy",
            body: re.isBrowser ? r : n,
            headers: o,
            json: !0
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function p(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteBucketPolicy",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "policy"
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode || e.statusCode,
              headers: n.headers
            });
          });
        }
        function m(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketLocation",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "location"
          }, function(e, n) {
            if (e) return t(e);
            t(null, n);
          });
        }
        function g(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketPolicy",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "policy",
            rawBody: !0
          }, function(e, n) {
            if (e) return t(e.statusCode && 403 === e.statusCode ? {
              ErrorStatus: "Access Denied"
            } : e.statusCode && 405 === e.statusCode ? {
              ErrorStatus: "Method Not Allowed"
            } : e.statusCode && 404 === e.statusCode ? {
              ErrorStatus: "Policy Not Found"
            } : e);
            var r = {};
            try {
              r = JSON.parse(n.body);
            } catch (e) {}
            t(null, {
              Policy: r,
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function y(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketTagging",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "tagging"
          }, function(e, n) {
            if (e) if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) t(e); else {
              var r = {
                Tags: [],
                statusCode: e.statusCode
              };
              e.headers && (r.headers = e.headers), t(null, r);
            } else {
              var o = [];
              try {
                o = n.Tagging.TagSet.Tag || [];
              } catch (e) {}
              o = re.clone(re.isArray(o) ? o : [ o ]), t(null, {
                Tags: o,
                statusCode: n.statusCode,
                headers: n.headers
              });
            }
          });
        }
        function C(e, t) {
          var n = e.Tagging || {}, r = n.TagSet || n.Tags || e.Tags || [];
          r = re.clone(re.isArray(r) ? r : [ r ]);
          var o = re.json2xml({
            Tagging: {
              TagSet: {
                Tag: r
              }
            }
          }), i = e.Headers;
          i["Content-Type"] = "application/xml", i["Content-MD5"] = re.binaryBase64(re.md5(o)), 
          ee.call(this, {
            Action: "name/cos:PutBucketTagging",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: o,
            action: "tagging",
            headers: i
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function v(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteBucketTagging",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "tagging"
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function x(e, t) {
          var n = e.LifecycleConfiguration || {}, r = n.Rules || [];
          r = re.clone(r);
          var o = re.json2xml({
            LifecycleConfiguration: {
              Rule: r
            }
          }), i = e.Headers;
          i["Content-Type"] = "application/xml", i["Content-MD5"] = re.binaryBase64(re.md5(o)), 
          ee.call(this, {
            Action: "name/cos:PutBucketLifecycle",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: o,
            action: "lifecycle",
            headers: i
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function k(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketLifecycle",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "lifecycle"
          }, function(e, n) {
            if (e) if (404 === e.statusCode && e.error && "NoSuchLifecycleConfiguration" === e.error.Code) {
              var r = {
                Rules: [],
                statusCode: e.statusCode
              };
              e.headers && (r.headers = e.headers), t(null, r);
            } else t(e); else {
              var o = [];
              try {
                o = n.LifecycleConfiguration.Rule || [];
              } catch (e) {}
              o = re.clone(re.isArray(o) ? o : [ o ]), t(null, {
                Rules: o,
                statusCode: n.statusCode,
                headers: n.headers
              });
            }
          });
        }
        function S(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteBucketLifecycle",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "lifecycle"
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function A(e, t) {
          if (!e.VersioningConfiguration) return void t({
            error: "missing param VersioningConfiguration"
          });
          var n = e.VersioningConfiguration || {}, r = re.json2xml({
            VersioningConfiguration: n
          }), o = e.Headers;
          o["Content-Type"] = "application/xml", o["Content-MD5"] = re.binaryBase64(re.md5(r)), 
          ee.call(this, {
            Action: "name/cos:PutBucketVersioning",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: r,
            action: "versioning",
            headers: o
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function b(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketVersioning",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "versioning"
          }, function(e, n) {
            e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), t(e, n);
          });
        }
        function R(e, t) {
          var n = re.clone(e.ReplicationConfiguration), r = re.json2xml({
            ReplicationConfiguration: n
          });
          r = r.replace(/<(\/?)Rules>/gi, "<$1Rule>"), r = r.replace(/<(\/?)Tags>/gi, "<$1Tag>");
          var o = e.Headers;
          o["Content-Type"] = "application/xml", o["Content-MD5"] = re.binaryBase64(re.md5(r)), 
          ee.call(this, {
            Action: "name/cos:PutBucketReplication",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: r,
            action: "replication",
            headers: o
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function T(e, t) {
          ee.call(this, {
            Action: "name/cos:GetBucketReplication",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "replication"
          }, function(e, n) {
            if (e) if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "ReplicationConfigurationnotFoundError" !== e.error.Code) t(e); else {
              var r = {
                ReplicationConfiguration: {
                  Rules: []
                },
                statusCode: e.statusCode
              };
              e.headers && (r.headers = e.headers), t(null, r);
            } else e || !n.ReplicationConfiguration && (n.ReplicationConfiguration = {}), n.ReplicationConfiguration.Rule && (n.ReplicationConfiguration.Rules = n.ReplicationConfiguration.Rule, 
            delete n.ReplicationConfiguration.Rule), t(e, n);
          });
        }
        function w(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteBucketReplication",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "replication"
          }, function(e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function E(e, t) {
          ee.call(this, {
            Action: "name/cos:HeadObject",
            method: "HEAD",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            headers: e.Headers
          }, function(n, r) {
            if (n) {
              var o = n.statusCode;
              return e.Headers["If-Modified-Since"] && o && 304 === o ? t(null, {
                NotModified: !0,
                statusCode: o
              }) : t(n);
            }
            r.headers && r.headers.etag && (r.ETag = r.headers && r.headers.etag), t(null, r);
          });
        }
        function _(e, t) {
          var n = {};
          n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n["key-marker"] = e.KeyMarker, 
          n["version-id-marker"] = e.VersionIdMarker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, 
          ee.call(this, {
            Action: "name/cos:GetBucketObjectVersions",
            ResourceKey: n.prefix,
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            qs: n,
            action: "versions"
          }, function(e, n) {
            if (e) return t(e);
            var r = n.ListVersionsResult || {}, o = r.DeleteMarker || [];
            o = re.isArray(o) ? o : [ o ];
            var i = r.Version || [];
            i = re.isArray(i) ? i : [ i ];
            var a = re.clone(r);
            delete a.DeleteMarker, delete a.Version, re.extend(a, {
              DeleteMarkers: o,
              Versions: i,
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, a);
          });
        }
        function N(e, t) {
          var n = {};
          n["response-content-type"] = e.ResponseContentType, n["response-content-language"] = e.ResponseContentLanguage, 
          n["response-expires"] = e.ResponseExpires, n["response-cache-control"] = e.ResponseCacheControl, 
          n["response-content-disposition"] = e.ResponseContentDisposition, n["response-content-encoding"] = e.ResponseContentEncoding, 
          ee.call(this, {
            Action: "name/cos:GetObject",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            headers: e.Headers,
            qs: n,
            rawBody: !0
          }, function(n, r) {
            if (n) {
              var o = n.statusCode;
              return e.Headers["If-Modified-Since"] && o && 304 === o ? t(null, {
                NotModified: !0
              }) : t(n);
            }
            var i = {};
            i.Body = r.body, r.headers && r.headers.etag && (i.ETag = r.headers && r.headers.etag), 
            re.extend(i, {
              statusCode: r.statusCode,
              headers: r.headers
            }), t(null, i);
          });
        }
        function B(e, t) {
          var n = this, r = e.ContentLength, o = re.throttleOnProgress.call(n, r, e.onProgress);
          re.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function(i) {
            i && (e.Headers["Content-MD5"] = re.binaryBase64(i)), void 0 !== e.ContentLength && (e.Headers["Content-Length"] = e.ContentLength), 
            ee.call(n, {
              Action: "name/cos:PutObject",
              TaskId: e.TaskId,
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              body: e.Body,
              onProgress: o
            }, function(i, a) {
              if (i) return o(null, !0), t(i);
              if (o({
                loaded: r,
                total: r
              }, !0), a && a.headers && a.headers.etag) {
                var s = Z({
                  ForcePathStyle: n.options.ForcePathStyle,
                  protocol: n.options.Protocol,
                  domain: n.options.Domain,
                  bucket: e.Bucket,
                  region: e.Region,
                  object: e.Key
                });
                return s = s.substr(s.indexOf("://") + 3), t(null, {
                  Location: s,
                  ETag: a.headers.etag,
                  statusCode: a.statusCode,
                  headers: a.headers
                });
              }
              t(null, a);
            });
          });
        }
        function D(e, t) {
          var n = this, r = {};
          r["Cache-Control"] = e.CacheControl, r["Content-Disposition"] = e.ContentDisposition, 
          r["Content-Encoding"] = e.ContentEncoding, r["Content-MD5"] = e.ContentMD5, r["Content-Length"] = e.ContentLength, 
          r["Content-Type"] = e.ContentType, r.Expect = e.Expect, r.Expires = e.Expires, r["x-cos-acl"] = e.ACL, 
          r["x-cos-grant-read"] = e.GrantRead, r["x-cos-grant-write"] = e.GrantWrite, r["x-cos-grant-full-control"] = e.GrantFullControl, 
          r["x-cos-storage-class"] = e.StorageClass;
          var o = e.FilePath;
          for (var i in e) i.indexOf("x-cos-meta-") > -1 && (r[i] = e[i]);
          var a = re.throttleOnProgress.call(n, r["Content-Length"], e.onProgress);
          ee.call(this, {
            Action: "name/cos:PostObject",
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: r,
            filePath: o,
            onProgress: a
          }, function(r, o) {
            if (a(null, !0), r) return t(r);
            if (o) {
              var i = Z({
                ForcePathStyle: n.options.ForcePathStyle,
                protocol: n.options.Protocol,
                domain: n.options.Domain,
                bucket: e.Bucket,
                region: e.Region,
                object: e.Key,
                isLocation: !0
              });
              return t(null, {
                Location: i,
                statusCode: o.statusCode
              });
            }
            t(null, o);
          });
        }
        function O(e, t) {
          ee.call(this, {
            Action: "name/cos:DeleteObject",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            VersionId: e.VersionId
          }, function(e, n) {
            if (e) {
              var r = e.statusCode;
              return r && 204 === r ? t(null, {
                statusCode: r
              }) : r && 404 === r ? t(null, {
                BucketNotFound: !0,
                statusCode: r
              }) : t(e);
            }
            t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function P(e, t) {
          ee.call(this, {
            Action: "name/cos:GetObjectACL",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            action: "acl"
          }, function(e, n) {
            if (e) return t(e);
            var r = n.AccessControlPolicy || {}, o = r.Owner || {}, i = r.AccessControlList && r.AccessControlList.Grant || [];
            i = re.isArray(i) ? i : [ i ];
            var a = W(r);
            n.headers && n.headers["x-cos-acl"] && (a.ACL = n.headers["x-cos-acl"]), a = re.extend(a, {
              Owner: o,
              Grants: i,
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, a);
          });
        }
        function I(e, t) {
          var n = e.Headers, r = "";
          if (e.AccessControlPolicy) {
            var o = re.clone(e.AccessControlPolicy || {}), i = o.Grants || o.Grant;
            i = re.isArray(i) ? i : [ i ], delete o.Grant, delete o.Grants, o.AccessControlList = {
              Grant: i
            }, r = re.json2xml({
              AccessControlPolicy: o
            }), n["Content-Type"] = "application/xml", n["Content-MD5"] = re.binaryBase64(re.md5(r));
          }
          re.each(n, function(e, t) {
            0 === t.indexOf("x-cos-grant-") && (n[t] = Q(n[t]));
          }), ee.call(this, {
            Action: "name/cos:PutObjectACL",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            action: "acl",
            headers: n,
            body: r
          }, function(e, n) {
            if (e) return t(e);
            t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function M(e, t) {
          var n = e.Headers;
          n.Origin = e.Origin, n["Access-Control-Request-Method"] = e.AccessControlRequestMethod, 
          n["Access-Control-Request-Headers"] = e.AccessControlRequestHeaders, ee.call(this, {
            Action: "name/cos:OptionsObject",
            method: "OPTIONS",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: n
          }, function(e, n) {
            if (e) return e.statusCode && 403 === e.statusCode ? t(null, {
              OptionsForbidden: !0,
              statusCode: e.statusCode
            }) : t(e);
            var r = n.headers || {};
            t(null, {
              AccessControlAllowOrigin: r["access-control-allow-origin"],
              AccessControlAllowMethods: r["access-control-allow-methods"],
              AccessControlAllowHeaders: r["access-control-allow-headers"],
              AccessControlExposeHeaders: r["access-control-expose-headers"],
              AccessControlMaxAge: r["access-control-max-age"],
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function L(e, t) {
          var n = e.CopySource || "", r = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
          if (!r) return void t({
            error: "CopySource format error"
          });
          var o = r[1], i = r[3], a = decodeURIComponent(r[4]);
          ee.call(this, {
            Scope: [ {
              action: "name/cos:GetObject",
              bucket: o,
              region: i,
              prefix: a
            }, {
              action: "name/cos:PutObject",
              bucket: e.Bucket,
              region: e.Region,
              prefix: e.Key
            } ],
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            headers: e.Headers
          }, function(e, n) {
            if (e) return t(e);
            var r = re.clone(n.CopyObjectResult || {});
            re.extend(r, {
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, r);
          });
        }
        function F(e, t) {
          var n = e.CopySource || "", r = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
          if (!r) return void t({
            error: "CopySource format error"
          });
          var o = r[1], i = r[3], a = decodeURIComponent(r[4]);
          ee.call(this, {
            Scope: [ {
              action: "name/cos:GetObject",
              bucket: o,
              region: i,
              prefix: a
            }, {
              action: "name/cos:PutObject",
              bucket: e.Bucket,
              region: e.Region,
              prefix: e.Key
            } ],
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            qs: {
              partNumber: e.PartNumber,
              uploadId: e.UploadId
            },
            headers: e.Headers
          }, function(e, n) {
            if (e) return t(e);
            var r = re.clone(n.CopyPartResult || {});
            re.extend(r, {
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, r);
          });
        }
        function U(e, t) {
          var n = e.Objects || [], r = e.Quiet;
          n = re.isArray(n) ? n : [ n ];
          var o = re.json2xml({
            Delete: {
              Object: n,
              Quiet: r || !1
            }
          }), i = e.Headers;
          i["Content-Type"] = "application/xml", i["Content-MD5"] = re.binaryBase64(re.md5(o));
          var a = re.map(n, function(t) {
            return {
              action: "name/cos:DeleteObject",
              bucket: e.Bucket,
              region: e.Region,
              prefix: t.Key
            };
          });
          ee.call(this, {
            Scope: a,
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            body: o,
            action: "delete",
            headers: i
          }, function(e, n) {
            if (e) return t(e);
            var r = n.DeleteResult || {}, o = r.Deleted || [], i = r.Error || [];
            o = re.isArray(o) ? o : [ o ], i = re.isArray(i) ? i : [ i ];
            var a = re.clone(r);
            re.extend(a, {
              Error: i,
              Deleted: o,
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, a);
          });
        }
        function j(e, t) {
          var n = e.Headers;
          if (!e.RestoreRequest) return void t({
            error: "missing param RestoreRequest"
          });
          var r = e.RestoreRequest || {}, o = re.json2xml({
            RestoreRequest: r
          });
          n["Content-Type"] = "application/xml", n["Content-MD5"] = re.binaryBase64(re.md5(o)), 
          ee.call(this, {
            Action: "name/cos:RestoreObject",
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            body: o,
            action: "restore",
            headers: n
          }, function(e, n) {
            t(e, n);
          });
        }
        function K(e, t) {
          ee.call(this, {
            Action: "name/cos:InitiateMultipartUpload",
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            action: "uploads",
            headers: e.Headers
          }, function(e, n) {
            return e ? t(e) : (n = re.clone(n || {})) && n.InitiateMultipartUploadResult ? t(null, re.extend(n.InitiateMultipartUploadResult, {
              statusCode: n.statusCode,
              headers: n.headers
            })) : void t(null, n);
          });
        }
        function H(e, t) {
          var n = this;
          re.getFileSize("multipartUpload", e, function() {
            re.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function(r) {
              r && (e.Headers["Content-MD5"] = re.binaryBase64(r)), ee.call(n, {
                Action: "name/cos:UploadPart",
                TaskId: e.TaskId,
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                qs: {
                  partNumber: e.PartNumber,
                  uploadId: e.UploadId
                },
                headers: e.Headers,
                onProgress: e.onProgress,
                body: e.Body || null
              }, function(e, n) {
                if (e) return t(e);
                n.headers = n.headers || {}, t(null, {
                  ETag: n.headers.etag || "",
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              });
            });
          });
        }
        function z(e, t) {
          for (var n = this, r = e.UploadId, o = e.Parts, i = 0, a = o.length; i < a; i++) 0 !== o[i].ETag.indexOf('"') && (o[i].ETag = '"' + o[i].ETag + '"');
          var s = re.json2xml({
            CompleteMultipartUpload: {
              Part: o
            }
          }), c = e.Headers;
          c["Content-Type"] = "application/xml", c["Content-MD5"] = re.binaryBase64(re.md5(s)), 
          ee.call(this, {
            Action: "name/cos:CompleteMultipartUpload",
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            qs: {
              uploadId: r
            },
            body: s,
            headers: c
          }, function(r, o) {
            if (r) return t(r);
            var i = Z({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: e.Bucket,
              region: e.Region,
              object: e.Key,
              isLocation: !0
            }), a = o.CompleteMultipartUploadResult || {}, s = re.extend(a, {
              Location: i,
              statusCode: o.statusCode,
              headers: o.headers
            });
            t(null, s);
          });
        }
        function G(e, t) {
          var n = {};
          n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", 
          n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, 
          n = re.clearKey(n), ee.call(this, {
            Action: "name/cos:ListMultipartUploads",
            ResourceKey: n.prefix,
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            qs: n,
            action: "uploads"
          }, function(e, n) {
            if (e) return t(e);
            if (n && n.ListMultipartUploadsResult) {
              var r = n.ListMultipartUploadsResult.Upload || [], o = n.ListMultipartUploadsResult.CommonPrefixes || [];
              o = re.isArray(o) ? o : [ o ], r = re.isArray(r) ? r : [ r ], n.ListMultipartUploadsResult.Upload = r, 
              n.ListMultipartUploadsResult.CommonPrefixes = o;
            }
            var i = re.clone(n.ListMultipartUploadsResult || {});
            re.extend(i, {
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, i);
          });
        }
        function q(e, t) {
          var n = {};
          n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, 
          n["part-number-marker"] = e.PartNumberMarker, ee.call(this, {
            Action: "name/cos:ListParts",
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            qs: n
          }, function(e, n) {
            if (e) return t(e);
            var r = n.ListPartsResult || {}, o = r.Part || [];
            o = re.isArray(o) ? o : [ o ], r.Part = o;
            var i = re.clone(r);
            re.extend(i, {
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, i);
          });
        }
        function V(e, t) {
          var n = {};
          n.uploadId = e.UploadId, ee.call(this, {
            Action: "name/cos:AbortMultipartUpload",
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            qs: n
          }, function(e, n) {
            if (e) return t(e);
            t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        }
        function X(e) {
          var t = this;
          return re.getAuth({
            SecretId: e.SecretId || this.options.SecretId || "",
            SecretKey: e.SecretKey || this.options.SecretKey || "",
            Method: e.Method,
            Key: e.Key,
            Query: e.Query,
            Headers: e.Headers,
            Expires: e.Expires,
            SystemClockOffset: t.options.SystemClockOffset
          });
        }
        function $(e, t) {
          var n = this, r = Z({
            ForcePathStyle: n.options.ForcePathStyle,
            protocol: e.Protocol || n.options.Protocol,
            domain: n.options.Domain,
            bucket: e.Bucket,
            region: e.Region,
            object: e.Key
          });
          if (void 0 !== e.Sign && !e.Sign) return t(null, {
            Url: r
          }), r;
          var o = Y.call(this, {
            Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject",
            Bucket: e.Bucket || "",
            Region: e.Region || "",
            Method: e.Method || "get",
            Key: e.Key,
            Expires: e.Expires
          }, function(e, n) {
            if (t) {
              if (e) return void t(e);
              var o = r;
              o += "?" + (n.Authorization.indexOf("q-signature") > -1 ? n.Authorization : "sign=" + encodeURIComponent(n.Authorization)), 
              n.XCosSecurityToken && (o += "&x-cos-security-token=" + n.XCosSecurityToken), n.ClientIP && (o += "&clientIP=" + n.ClientIP), 
              n.ClientUA && (o += "&clientUA=" + n.ClientUA), n.Token && (o += "&token=" + n.Token), 
              setTimeout(function() {
                t(null, {
                  Url: o
                });
              });
            }
          });
          return o ? r + "?" + o.Authorization + (o.XCosSecurityToken ? "&x-cos-security-token=" + o.XCosSecurityToken : "") : r;
        }
        function W(e) {
          var t = {
            GrantFullControl: [],
            GrantWrite: [],
            GrantRead: [],
            GrantReadAcp: [],
            GrantWriteAcp: [],
            ACL: ""
          }, n = {
            FULL_CONTROL: "GrantFullControl",
            WRITE: "GrantWrite",
            READ: "GrantRead",
            READ_ACP: "GrantReadAcp",
            WRITE_ACP: "GrantWriteAcp"
          }, r = e.AccessControlList.Grant;
          r && (r = re.isArray(r) ? r : [ r ]);
          var o = {
            READ: 0,
            WRITE: 0,
            FULL_CONTROL: 0
          };
          return r.length && re.each(r, function(r) {
            "qcs::cam::anyone:anyone" === r.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === r.Grantee.URI ? o[r.Permission] = 1 : r.Grantee.ID !== e.Owner.ID && t[n[r.Permission]].push('id="' + r.Grantee.ID + '"');
          }), o.FULL_CONTROL || o.WRITE && o.READ ? t.ACL = "public-read-write" : o.READ ? t.ACL = "public-read" : t.ACL = "private", 
          re.each(n, function(e) {
            t[e] = Q(t[e].join(","));
          }), t;
        }
        function Q(e) {
          var t, n, r = e.split(","), o = {};
          for (t = 0; t < r.length; ) n = r[t].trim(), o[n] ? r.splice(t, 1) : (o[n] = !0, 
          r[t] = n, t++);
          return r.join(",");
        }
        function Z(e) {
          var t = e.bucket, n = t.substr(0, t.lastIndexOf("-")), r = t.substr(t.lastIndexOf("-") + 1), o = e.domain, i = e.region, a = e.object;
          o || (o = [ "cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg" ].indexOf(i) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", 
          e.ForcePathStyle || (o = "{Bucket}." + o)), o = o.replace(/\{\{AppId\}\}/gi, r).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, i).replace(/\{\{.*?\}\}/gi, ""), 
          o = o.replace(/\{AppId\}/gi, r).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, t).replace(/\{Region\}/gi, i).replace(/\{.*?\}/gi, ""), 
          /^[a-zA-Z]+:\/\//.test(o) || (o = "https://" + o), "/" === o.slice(-1) && (o = o.slice(0, -1));
          var s = o;
          return e.ForcePathStyle && (s += "/" + t), s += "/", a && (s += re.camSafeUrlEncode(a).replace(/%2F/g, "/")), 
          e.isLocation && (s = s.replace(/^https?:\/\//, "")), s;
        }
        function Y(e, t) {
          var n = re.clone(e.Headers);
          delete n["Content-Type"], delete n["Cache-Control"], re.each(n, function(e, t) {
            "" === e && delete n[t];
          });
          var r = function r(e) {
            var n = !1, r = e.Authorization;
            if (r) if (r.indexOf(" ") > -1) n = !1; else if (r.indexOf("q-sign-algorithm=") > -1 && r.indexOf("q-ak=") > -1 && r.indexOf("q-sign-time=") > -1 && r.indexOf("q-key-time=") > -1 && r.indexOf("q-url-param-list=") > -1) n = !0; else try {
              r = atob(r), r.indexOf("a=") > -1 && r.indexOf("k=") > -1 && r.indexOf("t=") > -1 && r.indexOf("r=") > -1 && r.indexOf("b=") > -1 && (n = !0);
            } catch (e) {}
            n ? t && t(null, e) : t && t("authorization error");
          }, o = this, i = e.Bucket || "", a = e.Region || "", s = "name/cos:PostObject" !== e.Action && e.Key ? e.Key : "";
          o.options.ForcePathStyle && i && (s = i + "/" + s);
          var c = "/" + s, u = {}, l = e.Scope;
          if (!l) {
            var d = e.Action || "", f = e.ResourceKey || e.Key || "";
            l = e.Scope || [ {
              action: d,
              bucket: i,
              region: a,
              prefix: f
            } ];
          }
          var h = re.md5(JSON.stringify(l));
          o._StsCache = o._StsCache || [], function() {
            var e, t;
            for (e = o._StsCache.length - 1; e >= 0; e--) {
              t = o._StsCache[e];
              var n = Math.round(re.getSkewTime(o.options.SystemClockOffset) / 1e3) + 30;
              if (t.StartTime && n < t.StartTime || n >= t.ExpiredTime) o._StsCache.splice(e, 1); else if (!t.ScopeLimit || t.ScopeLimit && t.ScopeKey === h) {
                u = t;
                break;
              }
            }
          }();
          var p = function p() {
            var t = re.getAuth({
              SecretId: u.TmpSecretId,
              SecretKey: u.TmpSecretKey,
              Method: e.Method,
              Pathname: c,
              Query: e.Query,
              Headers: n,
              Expires: e.Expires,
              SystemClockOffset: o.options.SystemClockOffset
            }), i = {
              Authorization: t,
              XCosSecurityToken: u.XCosSecurityToken || "",
              Token: u.Token || "",
              ClientIP: u.ClientIP || "",
              ClientUA: u.ClientUA || ""
            };
            r(i);
          };
          if (u.ExpiredTime && u.ExpiredTime - re.getSkewTime(o.options.SystemClockOffset) / 1e3 > 60) p(); else if (o.options.getAuthorization) o.options.getAuthorization.call(o, {
            Bucket: i,
            Region: a,
            Method: e.Method,
            Key: s,
            Pathname: c,
            Query: e.Query,
            Headers: n,
            Scope: l
          }, function(e) {
            "string" == typeof e && (e = {
              Authorization: e
            }), e.TmpSecretId && e.TmpSecretKey && e.XCosSecurityToken && e.ExpiredTime ? (u = e || {}, 
            u.Scope = l, u.ScopeKey = h, o._StsCache.push(u), p()) : r(e);
          }); else {
            if (!o.options.getSTS) return function() {
              var t = re.getAuth({
                SecretId: e.SecretId || o.options.SecretId,
                SecretKey: e.SecretKey || o.options.SecretKey,
                Method: e.Method,
                Pathname: c,
                Query: e.Query,
                Headers: n,
                Expires: e.Expires,
                SystemClockOffset: o.options.SystemClockOffset
              }), i = {
                Authorization: t,
                XCosSecurityToken: o.options.XCosSecurityToken
              };
              return r(i), i;
            }();
            o.options.getSTS.call(o, {
              Bucket: i,
              Region: a
            }, function(e) {
              u = e || {}, u.Scope = l, u.ScopeKey = h, u.TmpSecretId = u.SecretId, u.TmpSecretKey = u.SecretKey, 
              o._StsCache.push(u), p();
            });
          }
          return "";
        }
        function J(e) {
          var t = !1, n = !1, r = e.headers && (e.headers.date || e.headers.Date) || "";
          try {
            var o = e.error.Code, i = e.error.Message;
            ("RequestTimeTooSkewed" === o || "AccessDenied" === o && "Request has expired" === i) && (n = !0);
          } catch (e) {}
          if (e) if (n && r) {
            var a = Date.parse(r);
            this.options.CorrectClockSkew && Math.abs(re.getSkewTime(this.options.SystemClockOffset) - a) >= 3e4 && (console.error("error: Local time is too skewed."), 
            this.options.SystemClockOffset = a - Date.now(), t = !0);
          } else 5 === Math.round(e.statusCode / 100) && (t = !0);
          return t;
        }
        function ee(e, t) {
          var n = this;
          !e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), 
          e.qs = re.clearKey(e.qs), e.headers && (e.headers = re.clearKey(e.headers)), e.qs && (e.qs = re.clearKey(e.qs));
          var r = re.clone(e.qs);
          e.action && (r[e.action] = "");
          var o = function o(i) {
            var a = n.options.SystemClockOffset;
            Y.call(n, {
              Bucket: e.Bucket || "",
              Region: e.Region || "",
              Method: e.method,
              Key: e.Key,
              Query: r,
              Headers: e.headers,
              Action: e.Action,
              ResourceKey: e.ResourceKey,
              Scope: e.Scope
            }, function(r, s) {
              e.AuthData = s, te.call(n, e, function(r, s) {
                r && i < 2 && (a !== n.options.SystemClockOffset || J.call(n, r)) ? (e.headers && (delete e.headers.Authorization, 
                delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, delete e.headers["x-cos-security-token"]), 
                o(i + 1)) : t(r, s);
              });
            });
          };
          o(0);
        }
        function te(e, t) {
          var n = this, r = e.TaskId;
          if (!r || n._isRunningTask(r)) {
            var o = e.Bucket, i = e.Region, a = e.Key, s = e.method || "GET", c = e.url, u = e.body, l = e.json, d = e.rawBody;
            c = c || Z({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: o,
              region: i,
              object: a
            }), e.action && (c = c + "?" + e.action);
            var f = {
              method: s,
              url: c,
              headers: e.headers,
              qs: e.qs,
              filePath: e.filePath,
              body: u,
              json: l
            };
            f.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (f.headers.token = e.AuthData.Token), 
            e.AuthData.ClientIP && (f.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (f.headers.clientUA = e.AuthData.ClientUA), 
            e.AuthData.XCosSecurityToken && (f.headers["x-cos-security-token"] = e.AuthData.XCosSecurityToken), 
            f.headers && (f.headers = re.clearKey(f.headers)), f = re.clearKey(f), e.onProgress && "function" == typeof e.onProgress && (f.onProgress = function(t) {
              if (!r || n._isRunningTask(r)) {
                var o = t ? t.loaded : 0;
                e.onProgress({
                  loaded: o,
                  total: t.total
                });
              }
            }), n.options.ForcePathStyle && (f.pathStyle = n.options.ForcePathStyle);
            var h = ne(f, function(e, o, i) {
              var a, s = function s(e, i) {
                if (r && n.off("inner-kill-task", p), !a) {
                  a = !0;
                  var s = {};
                  o && o.statusCode && (s.statusCode = o.statusCode), o && o.headers && (s.headers = o.headers), 
                  e ? (e = re.extend(e || {}, s), t(e, null)) : (i = re.extend(i || {}, s), t(null, i));
                }
              };
              if (e) return void s({
                error: e
              });
              var c;
              try {
                c = re.xml2json(i) || {};
              } catch (e) {
                c = i || {};
              }
              var u = o.statusCode;
              return 2 !== Math.floor(u / 100) ? void s({
                error: c.Error || c
              }) : (d && (c = {}, c.body = i), c.Error ? void s({
                error: c.Error
              }) : void s(null, c));
            }), p = function p(e) {
              e.TaskId === r && (h && h.abort && h.abort(), n.off("inner-kill-task", p));
            };
            r && n.on("inner-kill-task", p);
          }
        }
        var ne = n(9), re = n(0), oe = {
          getService: r,
          putBucket: a,
          getBucket: i,
          headBucket: o,
          deleteBucket: s,
          getBucketAcl: c,
          putBucketAcl: u,
          getBucketCors: l,
          putBucketCors: d,
          deleteBucketCors: f,
          getBucketLocation: m,
          putBucketTagging: C,
          getBucketTagging: y,
          deleteBucketTagging: v,
          getBucketPolicy: g,
          putBucketPolicy: h,
          deleteBucketPolicy: p,
          getBucketLifecycle: k,
          putBucketLifecycle: x,
          deleteBucketLifecycle: S,
          putBucketVersioning: A,
          getBucketVersioning: b,
          putBucketReplication: R,
          getBucketReplication: T,
          deleteBucketReplication: w,
          getObject: N,
          headObject: E,
          listObjectVersions: _,
          putObject: B,
          postObject: D,
          deleteObject: O,
          getObjectAcl: P,
          putObjectAcl: I,
          optionsObject: M,
          putObjectCopy: L,
          deleteMultipleObject: U,
          restoreObject: j,
          uploadPartCopy: F,
          multipartInit: K,
          multipartUpload: H,
          multipartComplete: z,
          multipartList: G,
          multipartListPart: q,
          multipartAbort: V,
          getObjectUrl: $,
          getAuth: X
        };
        e.exports.init = function(e, t) {
          t.transferToTaskMethod(oe, "postObject"), re.each(oe, function(t, n) {
            e.prototype[n] = re.apiWrapper(n, t);
          });
        };
      }, function(e, t, n) {
        var r = n(0), o = {}, i = function i(e, t) {
          o[t] = e[t], e[t] = function(e, n) {
            e.SkipTask ? o[t].call(this, e, n) : this._addTask(t, e, n);
          };
        }, a = function a(e) {
          var t = [], n = {}, i = 0, a = 0, s = function s(e) {
            var t = {
              id: e.id,
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              FilePath: e.FilePath,
              state: e.state,
              loaded: e.loaded,
              size: e.size,
              speed: e.speed,
              percent: e.percent,
              hashPercent: e.hashPercent,
              error: e.error
            };
            return e.FilePath && (t.FilePath = e.FilePath), t;
          }, c = function c() {
            e.emit("list-update", {
              list: r.map(t, s)
            });
          }, u = function u() {
            if (t.length > e.options.UploadQueueSize) {
              var n;
              for (n = 0; n < t.length && t.length > e.options.UploadQueueSize && n < a; n++) t[n] && "waiting" === t[n].state || (t.splice(n, 1), 
              a--);
            }
          }, l = function l() {
            if (a < t.length && i < e.options.FileParallelLimit) {
              var n = t[a];
              if ("waiting" === n.state) {
                i++, n.state = "checking";
                var s = r.formatParams(n.api, n.params);
                o[n.api].call(e, s, function(t, r) {
                  e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = t ? "error" : "success", 
                  t && (n.error = t), i--, c(), l(e), n.callback && n.callback(t, r), "success" === n.state && (n.params && (delete n.params.Body, 
                  delete n.params), delete n.callback)), u());
                }), c();
              }
              a++, l(e);
            }
          }, d = function d(t, r) {
            var o = n[t];
            if (o) {
              var a = o && "waiting" === o.state, s = o && ("checking" === o.state || "uploading" === o.state);
              if ("canceled" === r && "canceled" !== o.state || "paused" === r && a || "paused" === r && s) {
                if ("paused" === r && o.params.Body && "function" == typeof o.params.Body.pipe) return void console.error("stream not support pause");
                o.state = r, e.emit("inner-kill-task", {
                  TaskId: t,
                  toState: r
                }), c(), s && (i--, l(e)), "canceled" === r && (o.params && (delete o.params.Body, 
                delete o.params), delete o.callback);
              }
              u();
            }
          };
          e._addTasks = function(t) {
            r.each(t, function(t) {
              e._addTask(t.api, t.params, t.callback, !0);
            }), c();
          }, e._addTask = function(o, i, a, s) {
            i = r.formatParams(o, i);
            var d = r.uuid();
            i.TaskId = d, i.TaskReady && i.TaskReady(d);
            var f = {
              params: i,
              callback: a,
              api: o,
              index: t.length,
              id: d,
              Bucket: i.Bucket,
              Region: i.Region,
              Key: i.Key,
              FilePath: i.FilePath || "",
              state: "waiting",
              loaded: 0,
              size: 0,
              speed: 0,
              percent: 0,
              hashPercent: 0,
              error: null
            }, h = i.onHashProgress;
            i.onHashProgress = function(t) {
              e._isRunningTask(f.id) && (f.hashPercent = t.percent, h && h(t), c());
            };
            var p = i.onProgress;
            return i.onProgress = function(t) {
              e._isRunningTask(f.id) && ("checking" === f.state && (f.state = "uploading"), f.loaded = t.loaded, 
              f.size = t.total, f.speed = t.speed, f.percent = t.percent, p && p(t), c());
            }, function() {
              n[d] = f, t.push(f), f.size = i.FileSize, !s && c(), l(e), u();
            }(), d;
          }, e._isRunningTask = function(e) {
            var t = n[e];
            return !(!t || "checking" !== t.state && "uploading" !== t.state);
          }, e.getTaskList = function() {
            return r.map(t, s);
          }, e.cancelTask = function(e) {
            d(e, "canceled");
          }, e.pauseTask = function(e) {
            d(e, "paused");
          }, e.restartTask = function(e) {
            var t = n[e];
            !t || "paused" !== t.state && "error" !== t.state || (t.state = "waiting", c(), 
            a = Math.min(a, t.index), l());
          };
        };
        e.exports.transferToTaskMethod = i, e.exports.init = a;
      } ]);
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "AudioControl", "BhvButtonGroup", "BhvFrameIndex", "BhvRollNumber", "BhvSwitchPage", "EditCell", "EditMode", "Edit_UI", "Energy", "FileSaver", "Game", "MVVMData", "MainNode", "Player", "PlayerLight", "PreviewMode", "Prop", "Score", "Star", "StarCreater", "Touch", "WayControl", "cos-wx-sdk-v5", "JsonOb", "StringFormat", "VMBase", "VMCompsEdit", "VMCustom", "VMEvent", "VMLabel", "VMModify", "VMParent", "VMProgress", "VMState", "ViewModel" ]);