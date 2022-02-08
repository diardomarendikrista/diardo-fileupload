'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var Dropzone = require('react-dropzone');
var PropTypes = require('prop-types');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Dropzone__default = /*#__PURE__*/_interopDefaultLegacy(Dropzone);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

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

var XS_DEVICES_WIDTH$1 = "480px"; // const theme = {
// 	color: {
// 		white: '#ffffff',
// 		battleShipGrey: '#6b727b',
// 		darkSlateBlue: '#27356a',
// 		lightGreen: '#7ac70c',
// 		lightGray: '#e8e9e9',
// 		blueSelect: '#edf1ff',
// 		primary: '#27356a',
// 		secondary: '#d85448',
// 		lightCoral: '#f58780',
// 		pattensBlue: '#dbfcf2',
// 		whiteSmoke: '#f7f7f7',
// 		sand: '#fffac7',
// 		semiDarkGray: '#d8d9d9',
// 		yellowFooter: '#fcf286',
// 		mandatory: '#ea2a2a',
// 		cinnabar: '#d85448',
// 		blueSkill: '#40aca4',
// 		greyTransparent: '#c7c7c7',
// 		error: '#fab8b2',
// 		success: '#edffd3',
// 		Sunflower: '#ffc107',
// 		bgBlue: '#f5f5fb',
// 		bgYellow: '#fff7e1',
// 		astronaut: '#282f6e',
// 		catskillwhite: '#e3e7f2',
// 		silverchalice: '#9d9d9d',
// 		blueKlob: '#27356a',
// 		veryLightBlue: '#edf1ff',
// 		darkGrey: '#707070',
// 		satinSheenGold: '#C8A039',
// 	},
// };

var Wrapper = styled__default["default"].div.withConfig({
  displayName: "Wrapper",
  componentId: "sc-1royrkn-0"
})(["width:100%;.mandatory{color:", ";}.error{color:", ";}.border-error{border:1px solid ", ";}.delete{cursor:pointer;opacity:1;transition:0.3s;:hover{opacity:0.8;transition:0.3s;}:active{opacity:0.9;transition:0.3s;}}.uploadText{opacity:1;}.dropzone{border-radius:6px;border:dashed 1px ", ";background-color:", ";color:", ";font-size:14px;font-family:'Roboto';cursor:pointer;padding:10px;display:flex;justify-content:center;align-items:center;:hover .uploadText{opacity:0.8;font-weight:bold;}.d-flex{display:flex;}", " @media (max-width:", "){font-size:10px;padding:11px 12px;}}.square{width:150px;height:130px;}.accept{border:dashed 3px ", ";.uploadText{opacity:0.8;font-weight:bold;}}.reject{background-color:", ";border:dashed 3px ", ";.uploadText{opacity:0.8;font-weight:bold;}}@media (max-width:", "){margin:8px 0;.error{font-size:10px;}}"], theme.color.mandatory, theme.color.cinnabar, theme.color.cinnabar, theme.color.darkSlateBlue, theme.color.blueSelect, theme.color.primary, function (props) {
  return props.disabled && styled.css(["border:solid 1px #707070;background-color:#e8e9e9;"]);
}, XS_DEVICES_WIDTH$1, theme.color.darkSlateBlue, theme.color.cinnabar, theme.color.darkSlateBlue, XS_DEVICES_WIDTH$1);
var UploadWrapper = styled__default["default"].div.withConfig({
  displayName: "UploadWrapper",
  componentId: "sc-1royrkn-1"
})(["width:100%;display:flex;flex-wrap:wrap;.deskripsi-uploader{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}.wh-100{width:100%;height:100%;}"]);

var XS_DEVICES = 480; // mobile
var XS_DEVICES_WIDTH = "".concat(XS_DEVICES, "px");

var FileWrapper = styled__default["default"].div.withConfig({
  displayName: "FileWrapper",
  componentId: "sc-18cli3n-0"
})(["margin-right:10px;margin-bottom:10px;"]);
var DeleteButton$1 = styled__default["default"].div.withConfig({
  displayName: "DeleteButton",
  componentId: "sc-18cli3n-1"
})(["font-size:12px;cursor:pointer;position:absolute;background-color:white;color:red;padding:5px 7px;border-radius:5px;top:10px;right:10px;z-index:1;opacity:0;transition:0.1s;:hover{background-color:#e8e8e8;transition:0.2s;}:active{background-color:#fff;opacity:1;}@media (max-width:", "){opacity:1;}"], XS_DEVICES_WIDTH);
var FileSquare = styled__default["default"].div.withConfig({
  displayName: "FileSquare",
  componentId: "sc-18cli3n-2"
})(["position:relative;height:130px;:hover ", "{opacity:1;transition:0.1s;}"], DeleteButton$1);
var NotImage$1 = styled__default["default"].div.withConfig({
  displayName: "NotImage",
  componentId: "sc-18cli3n-3"
})(["width:150px;height:130px;border:dashed 1px #058e91;border-radius:10px;padding:5px;"]);

var formatBytes = function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return "0 Bytes";
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

var PreviewMultiFile = function PreviewMultiFile(_ref) {
  var files = _ref.files,
      deleteFile = _ref.deleteFile;

  var handleDelete = function handleDelete(index) {
    deleteFile(index);
  };

  if (files) return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (files === null || files === void 0 ? void 0 : files.length) > 0 && files.map(function (file, i) {
    return /*#__PURE__*/React__default["default"].createElement(FileWrapper, {
      key: i
    }, /*#__PURE__*/React__default["default"].createElement(FileSquare, null, file.type.split('/')[0] === 'image' ?
    /*#__PURE__*/
    // kalau dia berbentuk image, maka akan tampil ini
    React__default["default"].createElement("img", {
      src: URL.createObjectURL(file),
      alt: file.name,
      width: "100%",
      height: "100%"
    }) :
    /*#__PURE__*/
    // selain image, hanya berbentuk kotak berisi info nama file dan ukuran
    React__default["default"].createElement(NotImage$1, null, /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faPaperclip
    }), " attachment"), /*#__PURE__*/React__default["default"].createElement("p", null, file === null || file === void 0 ? void 0 : file.name), /*#__PURE__*/React__default["default"].createElement("p", null, formatBytes(file === null || file === void 0 ? void 0 : file.size))), /*#__PURE__*/React__default["default"].createElement(DeleteButton$1, null, /*#__PURE__*/React__default["default"].createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faTrash,
      onClick: function onClick() {
        handleDelete(i);
      }
    }))));
  }));else return null;
};

var DeleteButton = styled__default["default"].div.withConfig({
  displayName: "DeleteButton",
  componentId: "sc-gr0x8u-0"
})(["font-size:12px;cursor:pointer;position:absolute;background-color:white;color:red;padding:5px 7px;border-radius:5px;top:10px;right:10px;z-index:1;opacity:0;transition:0.1s;:hover{background-color:#e8e8e8;transition:0.2s;}:active{background-color:#fff;opacity:1;}@media (max-width:", "){opacity:1;}"], XS_DEVICES_WIDTH);
var ImageWrapper = styled__default["default"].div.withConfig({
  displayName: "ImageWrapper",
  componentId: "sc-gr0x8u-1"
})(["position:relative;height:130px;:hover ", "{opacity:1;transition:0.1s;}"], DeleteButton);
var VideoWrapper = styled__default["default"].div.withConfig({
  displayName: "VideoWrapper",
  componentId: "sc-gr0x8u-2"
})(["width:100%;:hover ", "{opacity:1;transition:0.1s;}"], DeleteButton);
var VideoDescription = styled__default["default"].div.withConfig({
  displayName: "VideoDescription",
  componentId: "sc-gr0x8u-3"
})(["display:flex;justify-content:space-between;align-content:center;p{margin:0;padding:0;}"]);
var NotImage = styled__default["default"].div.withConfig({
  displayName: "NotImage",
  componentId: "sc-gr0x8u-4"
})(["width:100%;border:dashed 1px ", ";background-color:", ";border:dashed 1px #058e91;border-radius:10px;padding:16px 20px;"], theme.color.darkSlateBlue, theme.color.blueSelect);
var DeleteFileButton = styled__default["default"].div.withConfig({
  displayName: "DeleteFileButton",
  componentId: "sc-gr0x8u-5"
})(["cursor:pointer;opacity:1;p{margin:0;padding:0;color:red;}:hover{opacity:0.8;}:active{opacity:1;}"]);

var PreviewSingleFile = function PreviewSingleFile(_ref) {
  var files = _ref.files,
      deleteFile = _ref.deleteFile;
      _ref.afterDelete;

  var handleDelete = function handleDelete(index) {
    deleteFile(index);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, files.map(function (file, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i
    }, file.type.split('/')[0] === 'image' ?
    /*#__PURE__*/
    // kalau dia berbentuk image, maka akan tampil ini
    React__default["default"].createElement(ImageWrapper, null, /*#__PURE__*/React__default["default"].createElement("img", {
      src: URL.createObjectURL(file),
      alt: file.name,
      width: "100%",
      height: "100%"
    }), /*#__PURE__*/React__default["default"].createElement(DeleteButton, null, /*#__PURE__*/React__default["default"].createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faTrash,
      onClick: function onClick() {
        handleDelete(i);
      }
    }))) : file.type.split('/')[0] === 'video' ?
    /*#__PURE__*/
    // kalau dia berbentuk video, maka akan tampil ini
    React__default["default"].createElement(VideoWrapper, null, /*#__PURE__*/React__default["default"].createElement("video", {
      width: "100%",
      controls: true
    }, /*#__PURE__*/React__default["default"].createElement("source", {
      src: URL.createObjectURL(file),
      type: "video/mp4"
    })), /*#__PURE__*/React__default["default"].createElement(VideoDescription, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("p", null, file === null || file === void 0 ? void 0 : file.name), /*#__PURE__*/React__default["default"].createElement("p", null, formatBytes(file === null || file === void 0 ? void 0 : file.size))), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(DeleteFileButton, null, /*#__PURE__*/React__default["default"].createElement("p", {
      onClick: function onClick() {
        handleDelete(i);
      }
    }, /*#__PURE__*/React__default["default"].createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faTrash
    }), " Hapus File"))))) :
    /*#__PURE__*/
    // selain image, hanya berbentuk kotak berisi info nama file dan ukuran
    React__default["default"].createElement(NotImage, null, /*#__PURE__*/React__default["default"].createElement("p", null, file === null || file === void 0 ? void 0 : file.name), /*#__PURE__*/React__default["default"].createElement("p", null, formatBytes(file === null || file === void 0 ? void 0 : file.size)), /*#__PURE__*/React__default["default"].createElement(DeleteFileButton, null, /*#__PURE__*/React__default["default"].createElement("p", {
      onClick: function onClick() {
        handleDelete(i);
      }
    }, /*#__PURE__*/React__default["default"].createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faTrash
    }), " Hapus File"))));
  }));
};

var _excluded = ["label", "uploadFile", "maxSize", "minSize", "maxFiles", "accept", "children", "files", "setFiles", "disabled", "disableEffect", "disablePreview", "onError", "multiple"];
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
      disabled = _ref.disabled;
      _ref.disableEffect;
      var disablePreview = _ref.disablePreview,
      onError = _ref.onError,
      multiple = _ref.multiple,
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useState = React__default["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  var handleError = function handleError(value) {
    if (onError) onError(value);
  };

  var handleDrop = function handleDrop(acceptedFiles) {
    // if max files exceed, then error
    if (maxFiles > 1 && (files === null || files === void 0 ? void 0 : files.length) >= maxFiles) {
      handleError({
        error: 'max-file',
        errorDetail: "max file is ".concat(maxFiles)
      });
      setError(true);
      setTimeout(function () {
        setError(false);
      }, [3000]);
      return;
    }

    if ((acceptedFiles === null || acceptedFiles === void 0 ? void 0 : acceptedFiles.length) > 0) {
      var choosenFiles = acceptedFiles.map(function (file) {
        return file;
      });
      var newFiles = [].concat(_toConsumableArray(files), _toConsumableArray(choosenFiles));
      setFiles(newFiles);
      setError(false);
    }
  };

  var rejectDrop = function rejectDrop(errorDetail) {
    var _errorDetail$0$errors, _errorDetail$0$errors2, _errorDetail$0$errors3;

    setError(true);
    handleError({
      error: (_errorDetail$0$errors = (_errorDetail$0$errors2 = errorDetail[0].errors[0]) === null || _errorDetail$0$errors2 === void 0 ? void 0 : _errorDetail$0$errors2.type) !== null && _errorDetail$0$errors !== void 0 ? _errorDetail$0$errors : 'on errorDetail',
      message: (_errorDetail$0$errors3 = errorDetail[0].errors[0]) === null || _errorDetail$0$errors3 === void 0 ? void 0 : _errorDetail$0$errors3.message,
      errorDetail: errorDetail
    });
    setTimeout(function () {
      setError(false);
    }, [2000]);
  };

  var handleDelete = function handleDelete(index) {
    var newFiles = files.filter(function (item, i) {
      return i !== index;
    });
    setFiles(newFiles);
  };

  return /*#__PURE__*/React__default["default"].createElement(Wrapper, null, label && /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: props.id || props.name,
    className: "d-flex"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, label, props.mandatory && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "mandatory"
  }, "*"))), /*#__PURE__*/React__default["default"].createElement(Dropzone__default["default"], {
    onDrop: handleDrop,
    onDropRejected: rejectDrop // onDropAccepted={() => setError(false)}
    ,
    multiple: multiple || false // multiple={true}
    ,
    maxSize: maxSize,
    minSize: minSize,
    accept: accept,
    maxFiles: maxFiles,
    disabled: disabled
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps,
        isDragAccept = _ref2.isDragAccept,
        isDragReject = _ref2.isDragReject;
    var additionalClass = isDragAccept ? 'accept' : isDragReject ? 'reject' : ''; // const square = files?.length > 0 ? 'square' : 'w-100';

    return /*#__PURE__*/React__default["default"].createElement(UploadWrapper, null, !disablePreview && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, maxFiles === 1 && (files === null || files === void 0 ? void 0 : files.length) > 0 ? /*#__PURE__*/React__default["default"].createElement(PreviewSingleFile, {
      files: files,
      deleteFile: handleDelete
    }) : /*#__PURE__*/React__default["default"].createElement(PreviewMultiFile, {
      files: files,
      deleteFile: handleDelete
    })), maxFiles === 1 && files.length > 0 ? null : /*#__PURE__*/React__default["default"].createElement("div", getRootProps({
      className: "dropzone\n\t\t\t\t\t\t\t\t\t\t ".concat(additionalClass, "\n\t\t\t\t\t\t\t\t\t\t ").concat(error ? 'reject' : '', "\n\t\t\t\t\t\t\t\t\t\t")
    }), /*#__PURE__*/React__default["default"].createElement("input", getInputProps()), children));
  }));
};
FileUpload.defaultProps = {
  accept: '',
  maxFiles: 0,
  disabled: false,
  mandatory: false,
  disablePreview: false
};
FileUpload.propTypes = {
  accept: PropTypes__default["default"].string,
  maxFiles: PropTypes__default["default"].number,
  disabled: PropTypes__default["default"].bool,
  mandatory: PropTypes__default["default"].bool,
  disablePreview: PropTypes__default["default"].bool
};

exports.FileUpload = FileUpload;
