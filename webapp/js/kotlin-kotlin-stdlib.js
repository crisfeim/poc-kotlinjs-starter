(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib'] = factory(typeof this['kotlin-kotlin-stdlib'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  setMetadataFor(Unit, 'Unit', objectMeta);
  setMetadataFor(BaseOutput, 'BaseOutput', classMeta);
  setMetadataFor(NodeJsOutput, 'NodeJsOutput', classMeta, BaseOutput);
  setMetadataFor(BufferedOutput, 'BufferedOutput', classMeta, BaseOutput, VOID, BufferedOutput);
  setMetadataFor(BufferedOutputToConsoleLog, 'BufferedOutputToConsoleLog', classMeta, BufferedOutput, VOID, BufferedOutputToConsoleLog);
  //endregion
  function Unit() {
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    return Unit_instance;
  }
  function get_output() {
    _init_properties_console_kt__rfg7jv();
    return output;
  }
  var output;
  function BaseOutput() {
  }
  protoOf(BaseOutput).a = function () {
    this.b('\n');
  };
  protoOf(BaseOutput).c = function (message) {
    this.b(message);
    this.a();
  };
  function NodeJsOutput(outputStream) {
    BaseOutput.call(this);
    this.d_1 = outputStream;
  }
  protoOf(NodeJsOutput).b = function (message) {
    // Inline function 'kotlin.io.String' call
    var messageString = String(message);
    this.d_1.write(messageString);
  };
  function BufferedOutputToConsoleLog() {
    BufferedOutput.call(this);
  }
  protoOf(BufferedOutputToConsoleLog).b = function (message) {
    // Inline function 'kotlin.io.String' call
    var s = String(message);
    // Inline function 'kotlin.text.nativeLastIndexOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var i = s.lastIndexOf('\n', 0);
    if (i >= 0) {
      var tmp = this;
      var tmp_0 = this.f_1;
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.f_1 = tmp_0 + s.substring(0, i);
      this.g();
      // Inline function 'kotlin.text.substring' call
      var this_0 = s;
      var startIndex = i + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      s = this_0.substring(startIndex);
    }
    this.f_1 = this.f_1 + s;
  };
  protoOf(BufferedOutputToConsoleLog).g = function () {
    console.log(this.f_1);
    this.f_1 = '';
  };
  function BufferedOutput() {
    BaseOutput.call(this);
    this.f_1 = '';
  }
  protoOf(BufferedOutput).b = function (message) {
    var tmp = this;
    var tmp_0 = this.f_1;
    // Inline function 'kotlin.io.String' call
    tmp.f_1 = tmp_0 + String(message);
  };
  function println(message) {
    _init_properties_console_kt__rfg7jv();
    get_output().c(message);
  }
  var properties_initialized_console_kt_gll9dl;
  function _init_properties_console_kt__rfg7jv() {
    if (!properties_initialized_console_kt_gll9dl) {
      properties_initialized_console_kt_gll9dl = true;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.io.output.<anonymous>' call
      var isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node;
      output = isNode ? new NodeJsOutput(process.stdout) : new BufferedOutputToConsoleLog();
    }
  }
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var inductionVariable = 0;
    var last = interfaces.length;
    while (inductionVariable < last) {
      var i = interfaces[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp1_elvis_lhs = i.prototype.$imask$;
      var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp;
      if (iid == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.js.implement.<anonymous>' call
        tmp = bitMaskWith(iid);
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var numberIndex = activeBit >> 5;
    var intArray = new Int32Array(numberIndex + 1 | 0);
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = new Int32Array(capacity);
    while (tmp < capacity) {
      var tmp_1 = tmp;
      var result = 0;
      var inductionVariable = 0;
      var last = masks.length;
      while (inductionVariable < last) {
        var mask = masks[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_1 < mask.length) {
          result = result | mask[tmp_1];
        }
      }
      tmp_0[tmp_1] = result;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    return Object.create(proto);
  }
  function classMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('class', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, iid) {
    var undef = VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
  }
  function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = metadataConstructor(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity == null ? [] : suspendArity);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function objectMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('object', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (!properties_initialized_void_kt_e4ret2) {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  //region block: init
  Unit_instance = new Unit();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = println;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib.js.map
