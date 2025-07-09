import {
  elementAcceptingRef_default,
  getReactElementRef,
  getTransitionProps,
  reflow
} from "./chunk-Z2OLNZIY.js";
import {
  Paper_default
} from "./chunk-PHBP2WYU.js";
import {
  extractEventHandlers_default,
  useSlot
} from "./chunk-JEXSQ2XE.js";
import {
  useTimeout
} from "./chunk-AD6CERYI.js";
import {
  Transition_default
} from "./chunk-OQRIFOQI.js";
import {
  ownerDocument
} from "./chunk-P25AEJKR.js";
import {
  capitalize_default
} from "./chunk-CLSVNP2I.js";
import {
  useEventCallback_default,
  useForkRef_default
} from "./chunk-P4RYKD3V.js";
import {
  useForkRef
} from "./chunk-4YWH5WSH.js";
import {
  memoTheme_default
} from "./chunk-HYDEO3F6.js";
import {
  useDefaultProps
} from "./chunk-3SQMDAHS.js";
import {
  composeClasses,
  emphasize,
  exactProp,
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useTheme
} from "./chunk-ZKAULG4W.js";
import {
  clsx_default
} from "./chunk-ALOCFXKX.js";
import {
  require_prop_types
} from "./chunk-DQROLGKX.js";
import {
  require_jsx_runtime
} from "./chunk-GGZZ3EVM.js";
import {
  require_react
} from "./chunk-D2KY6O3O.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/material/esm/Snackbar/Snackbar.js
var React5 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Snackbar/useSnackbar.js
var React = __toESM(require_react(), 1);
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = useTimeout();
  React.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape") {
          onClose?.(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback_default((event, reason) => {
    onClose?.(event, reason);
  });
  const setAutoHideTimer = useEventCallback_default((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    timerAutoHide.start(autoHideDurationParam, () => {
      handleClose(null, "timeout");
    });
  });
  React.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return timerAutoHide.clear;
  }, [open, autoHideDuration, setAutoHideTimer, timerAutoHide]);
  const handleClickAway = (event) => {
    onClose?.(event, "clickaway");
  };
  const handlePause = timerAutoHide.clear;
  const handleResume = React.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback?.(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback?.(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback?.(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback?.(event);
    handleResume();
  };
  React.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, open, handleResume, handlePause]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = {
      ...extractEventHandlers_default(parameters),
      ...extractEventHandlers_default(externalProps)
    };
    return {
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation",
      ...externalProps,
      ...externalEventHandlers,
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    };
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}
var useSnackbar_default = useSnackbar;

// node_modules/@mui/material/esm/ClickAwayListener/ClickAwayListener.js
var React2 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React2.useRef(false);
  const nodeRef = React2.useRef(null);
  const activatedRef = React2.useRef(false);
  const syntheticEventRef = React2.useRef(false);
  React2.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(getReactElementRef(children), nodeRef);
  const handleClickAway = useEventCallback_default((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().includes(nodeRef.current);
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React2.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React2.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return React2.cloneElement(children, childrenProps);
}
true ? ClickAwayListener.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: import_prop_types.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: import_prop_types.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: import_prop_types.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}

// node_modules/@mui/material/esm/Grow/Grow.js
var React3 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
var Grow = React3.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default,
    ...other
  } = props;
  const timer = useTimeout();
  const autoTimeout = React3.useRef();
  const theme = useTheme();
  const nodeRef = React3.useRef(null);
  const handleRef = useForkRef_default(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime.jsx)(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return React3.cloneElement(children, {
        style: {
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
true ? Grow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types2.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types2.default.oneOfType([import_prop_types2.default.shape({
    enter: import_prop_types2.default.string,
    exit: import_prop_types2.default.string
  }), import_prop_types2.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types2.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types2.default.func,
  /**
   * @ignore
   */
  style: import_prop_types2.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["auto"]), import_prop_types2.default.number, import_prop_types2.default.shape({
    appear: import_prop_types2.default.number,
    enter: import_prop_types2.default.number,
    exit: import_prop_types2.default.number
  })])
} : void 0;
if (Grow) {
  Grow.muiSupportAuto = true;
}
var Grow_default = Grow;

// node_modules/@mui/material/esm/SnackbarContent/SnackbarContent.js
var React4 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/SnackbarContent/snackbarContentClasses.js
function getSnackbarContentUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbarContent", slot);
}
var snackbarContentClasses = generateUtilityClasses("MuiSnackbarContent", ["root", "message", "action"]);
var snackbarContentClasses_default = snackbarContentClasses;

// node_modules/@mui/material/esm/SnackbarContent/SnackbarContent.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    action: ["action"],
    message: ["message"]
  };
  return composeClasses(slots, getSnackbarContentUtilityClass, classes);
};
var SnackbarContentRoot = styled_default(Paper_default, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(memoTheme_default(({
  theme
}) => {
  const emphasis = theme.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...theme.typography.body2,
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(emphasize(theme.palette.background.default, emphasis)),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : emphasize(theme.palette.background.default, emphasis),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
}));
var SnackbarContentMessage = styled_default("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
});
var SnackbarContentAction = styled_default("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
});
var SnackbarContent = React4.forwardRef(function SnackbarContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSnackbarContent"
  });
  const {
    action,
    className,
    message,
    role = "alert",
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime2.jsxs)(SnackbarContentRoot, {
    role,
    elevation: 6,
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: [(0, import_jsx_runtime2.jsx)(SnackbarContentMessage, {
      className: classes.message,
      ownerState,
      children: message
    }), action ? (0, import_jsx_runtime2.jsx)(SnackbarContentAction, {
      className: classes.action,
      ownerState,
      children: action
    }) : null]
  });
});
true ? SnackbarContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * The message to display.
   */
  message: import_prop_types3.default.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: import_prop_types3.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;
var SnackbarContent_default = SnackbarContent;

// node_modules/@mui/material/esm/Snackbar/snackbarClasses.js
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
var snackbarClasses = generateUtilityClasses("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
var snackbarClasses_default = snackbarClasses;

// node_modules/@mui/material/esm/Snackbar/Snackbar.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ["root", `anchorOrigin${capitalize_default(anchorOrigin.vertical)}${capitalize_default(anchorOrigin.horizontal)}`]
  };
  return composeClasses(slots, getSnackbarUtilityClass, classes);
};
var SnackbarRoot = styled_default("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`anchorOrigin${capitalize_default(ownerState.anchorOrigin.vertical)}${capitalize_default(ownerState.anchorOrigin.horizontal)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [theme.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [theme.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [theme.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [theme.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "center",
    style: {
      [theme.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
})));
var Snackbar = React5.forwardRef(function Snackbar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSnackbar"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    action,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration = null,
    children,
    className,
    ClickAwayListenerProps: ClickAwayListenerPropsProp,
    ContentProps: ContentPropsProp,
    disableWindowBlurListener = false,
    message,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    open,
    resumeHideDuration,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration = defaultTransitionDuration,
    TransitionProps: {
      onEnter,
      onExited,
      ...TransitionPropsProp
    } = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    anchorOrigin: {
      vertical,
      horizontal
    },
    autoHideDuration,
    disableWindowBlurListener,
    TransitionComponent: TransitionComponentProp,
    transitionDuration
  };
  const classes = useUtilityClasses2(ownerState);
  const {
    getRootProps,
    onClickAway
  } = useSnackbar_default({
    ...ownerState
  });
  const [exited, setExited] = React5.useState(true);
  const handleExited = (node) => {
    setExited(true);
    if (onExited) {
      onExited(node);
    }
  };
  const handleEnter = (node, isAppearing) => {
    setExited(false);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponentProp,
      ...slots
    },
    slotProps: {
      content: ContentPropsProp,
      clickAwayListener: ClickAwayListenerPropsProp,
      transition: TransitionPropsProp,
      ...slotProps
    }
  };
  const [Root, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, className],
    elementType: SnackbarRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState
  });
  const [ClickAwaySlot, {
    ownerState: clickAwayOwnerStateProp,
    ...clickAwayListenerProps
  }] = useSlot("clickAwayListener", {
    elementType: ClickAwayListener,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onClickAway: (...params) => {
        const event = params[0];
        handlers.onClickAway?.(...params);
        if (event?.defaultMuiPrevented) {
          return;
        }
        onClickAway(...params);
      }
    }),
    ownerState
  });
  const [ContentSlot, contentSlotProps] = useSlot("content", {
    elementType: SnackbarContent_default,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    additionalProps: {
      message,
      action
    },
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Grow_default,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onEnter: (...params) => {
        handlers.onEnter?.(...params);
        handleEnter(...params);
      },
      onExited: (...params) => {
        handlers.onExited?.(...params);
        handleExited(...params);
      }
    }),
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      direction: vertical === "top" ? "down" : "up"
    },
    ownerState
  });
  if (!open && exited) {
    return null;
  }
  return (0, import_jsx_runtime3.jsx)(ClickAwaySlot, {
    ...clickAwayListenerProps,
    ...slots.clickAwayListener && {
      ownerState: clickAwayOwnerStateProp
    },
    children: (0, import_jsx_runtime3.jsx)(Root, {
      ...rootProps,
      children: (0, import_jsx_runtime3.jsx)(TransitionSlot, {
        ...transitionProps,
        children: children || (0, import_jsx_runtime3.jsx)(ContentSlot, {
          ...contentSlotProps
        })
      })
    })
  });
});
true ? Snackbar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: import_prop_types4.default.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: import_prop_types4.default.shape({
    horizontal: import_prop_types4.default.oneOf(["center", "left", "right"]).isRequired,
    vertical: import_prop_types4.default.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: import_prop_types4.default.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: import_prop_types4.default.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   * @deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ClickAwayListenerProps: import_prop_types4.default.object,
  /**
   * Props applied to the [`SnackbarContent`](https://mui.com/material-ui/api/snackbar-content/) element.
   * @deprecated Use `slotProps.content` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContentProps: import_prop_types4.default.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: import_prop_types4.default.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: import_prop_types4.default.node,
  /**
   * @ignore
   */
  onBlur: import_prop_types4.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onMouseEnter: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types4.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types4.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types4.default.number,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types4.default.shape({
    clickAwayListener: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
      children: import_prop_types4.default.element.isRequired,
      disableReactTree: import_prop_types4.default.bool,
      mouseEvent: import_prop_types4.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
      onClickAway: import_prop_types4.default.func,
      touchEvent: import_prop_types4.default.oneOf(["onTouchEnd", "onTouchStart", false])
    })]),
    content: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
    transition: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types4.default.shape({
    clickAwayListener: import_prop_types4.default.elementType,
    content: import_prop_types4.default.elementType,
    root: import_prop_types4.default.elementType,
    transition: import_prop_types4.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: import_prop_types4.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.shape({
    appear: import_prop_types4.default.number,
    enter: import_prop_types4.default.number,
    exit: import_prop_types4.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: import_prop_types4.default.object
} : void 0;
var Snackbar_default = Snackbar;

export {
  ClickAwayListener,
  Grow_default,
  getSnackbarContentUtilityClass,
  snackbarContentClasses_default,
  SnackbarContent_default,
  getSnackbarUtilityClass,
  snackbarClasses_default,
  Snackbar_default
};
//# sourceMappingURL=chunk-M77ZQROW.js.map
