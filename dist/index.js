'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var Dropzone = require('react-dropzone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Dropzone__default = /*#__PURE__*/_interopDefaultLegacy(Dropzone);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var XS_DEVICES_WIDTH = "480px";
var theme = {
  color: {
    white: '#ffffff',
    battleShipGrey: '#6b727b',
    darkSlateBlue: '#27356a',
    lightGreen: '#7ac70c',
    lightGray: '#e8e9e9',
    blueSelect: '#edf1ff',
    primary: '#27356a',
    secondary: '#d85448',
    lightCoral: '#f58780',
    pattensBlue: '#dbfcf2',
    whiteSmoke: '#f7f7f7',
    sand: '#fffac7',
    semiDarkGray: '#d8d9d9',
    yellowFooter: '#fcf286',
    mandatory: '#ea2a2a',
    cinnabar: '#d85448',
    blueSkill: '#40aca4',
    greyTransparent: '#c7c7c7',
    error: '#fab8b2',
    success: '#edffd3',
    Sunflower: '#ffc107',
    bgBlue: '#f5f5fb',
    bgYellow: '#fff7e1',
    astronaut: '#282f6e',
    catskillwhite: '#e3e7f2',
    silverchalice: '#9d9d9d',
    blueKlob: '#27356a',
    veryLightBlue: '#edf1ff',
    darkGrey: '#707070',
    satinSheenGold: '#C8A039'
  }
};
var Wrapper = styled__default["default"].div.withConfig({
  displayName: "Wrapper",
  componentId: "sc-1royrkn-0"
})(["width:100%;.mandatory{color:", ";}.error{color:", ";}.border-error{border:1px solid ", ";}.delete{cursor:pointer;opacity:1;transition:0.3s;:hover{opacity:0.8;transition:0.3s;}:active{opacity:0.9;transition:0.3s;}}.uploadText{opacity:1;}.dropzone{border-radius:6px;border:dashed 1px ", ";background-color:", ";color:", ";font-size:14px;font-family:'Roboto';cursor:pointer;padding:10px;display:flex;justify-content:center;align-items:center;:hover .uploadText{opacity:0.8;font-weight:bold;}.d-flex{display:flex;}", " @media (max-width:", "){font-size:10px;padding:11px 12px;}}.square{width:150px;height:130px;}.accept{border:dashed 3px ", ";.uploadText{opacity:0.8;font-weight:bold;}}.reject{background-color:", ";border:dashed 3px ", ";.uploadText{opacity:0.8;font-weight:bold;}}@media (max-width:", "){margin:8px 0;.error{font-size:10px;}}"], theme.color.mandatory, theme.color.cinnabar, theme.color.cinnabar, theme.color.darkSlateBlue, theme.color.blueSelect, theme.color.primary, function (props) {
  return props.disabled && styled.css(["border:solid 1px #707070;background-color:#e8e9e9;"]);
}, XS_DEVICES_WIDTH, theme.color.darkSlateBlue, theme.color.cinnabar, theme.color.darkSlateBlue, XS_DEVICES_WIDTH);
var UploadWrapper = styled__default["default"].div.withConfig({
  displayName: "UploadWrapper",
  componentId: "sc-1royrkn-1"
})(["width:100%;display:flex;flex-wrap:wrap;.deskripsi-uploader{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}.wh-100{width:100%;height:100%;}"]);

var _excluded = ["label", "uploadFile", "maxSize", "minSize", "maxFiles", "accept", "children", "files", "setFiles"];
var FileUpload = function FileUpload(_ref) {
  var label = _ref.label;
      _ref.uploadFile;
      var maxSize = _ref.maxSize,
      minSize = _ref.minSize,
      maxFiles = _ref.maxFiles,
      accept = _ref.accept,
      children = _ref.children,
      files = _ref.files,
      setFiles = _ref.setFiles,
      props = _objectWithoutProperties(_ref, _excluded);

  var handleDrop = function handleDrop(acceptedFiles) {
    if ((acceptedFiles === null || acceptedFiles === void 0 ? void 0 : acceptedFiles.length) > 0) {
      var choosenFiles = acceptedFiles.map(function (file) {
        return file;
      });
      var newFiles = [].concat(_toConsumableArray(files), _toConsumableArray(choosenFiles));
      setFiles(newFiles);
    }
  };

  var rejectDrop = function rejectDrop() {
    console.log('rejected');
  };

  return /*#__PURE__*/React__default["default"].createElement(Wrapper, null, label && /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: props.id || props.name,
    className: "d-flex"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, label, props.mandatory && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "mandatory"
  }, "*"))), /*#__PURE__*/React__default["default"].createElement(Dropzone__default["default"], {
    onDrop: handleDrop,
    onDropRejected: rejectDrop // onDropAccepted={() => setError(false)}
    // multiple={multiple || false}
    ,
    multiple: false // ini masih buggy jadi wajib kasih false
    ,
    maxSize: maxSize,
    minSize: minSize,
    accept: accept,
    maxFiles: maxFiles
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
        _ref2.isDragAccept;
        _ref2.isDragReject;
    return /*#__PURE__*/React__default["default"].createElement(UploadWrapper, null, /*#__PURE__*/React__default["default"].createElement("div", getRootProps({
      // className: `dropzone ${additionalClass} ${square}`,
      className: "dropzone"
    }), /*#__PURE__*/React__default["default"].createElement("input", getInputProps()), children));
  }));
};

exports.FileUpload = FileUpload;
