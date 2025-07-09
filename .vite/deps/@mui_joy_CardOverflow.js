"use client";
import {
  cardOverflowClasses_default,
  getCardOverflowUtilityClass
} from "./chunk-U5KJFRP6.js";
import {
  cardClasses_default
} from "./chunk-UMEDV33S.js";
import {
  buttonClasses_default
} from "./chunk-J5WWPMFT.js";
import "./chunk-OABLOCRU.js";
import "./chunk-BLE45GTI.js";
import "./chunk-7RH3YQ3F.js";
import "./chunk-BWGXUAD5.js";
import {
  composeClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-GY6ZY5IK.js";
import "./chunk-TAM2IQJX.js";
import "./chunk-XE2STDAP.js";
import {
  capitalize,
  generateUtilityClasses2 as generateUtilityClasses
} from "./chunk-AKPL3DWZ.js";
import {
  _objectWithoutPropertiesLoose
} from "./chunk-AVUONKA5.js";
import {
  _extends,
  clsx_default
} from "./chunk-ALOCFXKX.js";
import {
  require_prop_types
} from "./chunk-DQROLGKX.js";
import "./chunk-2E6KOAY2.js";
import {
  require_jsx_runtime
} from "./chunk-GGZZ3EVM.js";
import {
  require_react
} from "./chunk-D2KY6O3O.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/joy/CardOverflow/CardOverflow.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/ModalDialog/modalDialogClasses.js
var modalDialogClasses = generateUtilityClasses("MuiModalDialog", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "layoutCenter", "layoutFullscreen"]);
var modalDialogClasses_default = modalDialogClasses;

// node_modules/@mui/joy/CardOverflow/CardOverflow.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component", "children", "color", "variant", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getCardOverflowUtilityClass, {});
};
var CardOverflowRoot = styled_default("div", {
  name: "JoyCardOverflow",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const childRadius = "calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))";
  return _extends({
    alignSelf: "stretch",
    // prevent shrinking if parent's align-items is not initial
    position: "relative",
    display: "flex",
    flexDirection: "var(--_CardOverflow-flexDirection)",
    margin: "var(--_CardOverflow-margin)",
    borderRadius: "var(--_CardOverflow-radius)",
    padding: "var(--_CardOverflow-padding)",
    [`.${cardClasses_default.vertical} &, .${cardClasses_default.horizontal} .${cardClasses_default.vertical} &, .${modalDialogClasses_default.root} &`]: {
      "--_CardOverflow-flexDirection": "column",
      // required to make AspectRatio works
      "--AspectRatio-margin": "0 calc(-1 * var(--Card-padding))",
      "--_CardOverflow-margin": "0 var(--CardOverflow-offset)",
      "--_CardOverflow-padding": "0 var(--Card-padding)",
      "&[data-first-child]": {
        "--AspectRatio-radius": `${childRadius} ${childRadius} 0 0`,
        "--_CardOverflow-radius": "var(--CardOverflow-radius) var(--CardOverflow-radius) 0 0",
        "--_CardOverflow-margin": "var(--CardOverflow-offset) var(--CardOverflow-offset) 0"
      },
      "&[data-last-child]": {
        "--AspectRatio-radius": `0 0 ${childRadius} ${childRadius}`,
        "--_CardOverflow-radius": "0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)",
        "--_CardOverflow-margin": "0 var(--CardOverflow-offset) var(--CardOverflow-offset)"
      },
      "&[data-last-child][data-first-child]": {
        "--AspectRatio-radius": childRadius,
        "--_CardOverflow-margin": "var(--CardOverflow-offset)"
      },
      [`& > .${buttonClasses_default.root}:only-child`]: {
        zIndex: 1,
        // prevent button from being covered Link overlay. This can be improved in the future with :has() selector
        width: "calc(100% + -2 * var(--CardOverflow-offset))",
        "--Button-margin": "0 var(--CardOverflow-offset)",
        "--Button-radius": "0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)"
      }
    },
    [`.${cardClasses_default.horizontal} &, .${cardClasses_default.vertical} .${cardClasses_default.horizontal} &`]: {
      "--_CardOverflow-flexDirection": "row",
      "--AspectRatio-margin": "calc(-1 * var(--Card-padding)) 0px",
      "--_CardOverflow-margin": "var(--CardOverflow-offset) 0px",
      "--_CardOverflow-padding": "var(--Card-padding) 0px",
      "&[data-first-child]": {
        "--AspectRatio-radius": `${childRadius} 0 0 ${childRadius}`,
        "--_CardOverflow-radius": "var(--CardOverflow-radius) 0 0 var(--CardOverflow-radius)",
        "--_CardOverflow-margin": "var(--CardOverflow-offset) 0px var(--CardOverflow-offset) var(--CardOverflow-offset)"
      },
      "&[data-last-child]": {
        "--AspectRatio-radius": `0 ${childRadius} ${childRadius} 0`,
        "--_CardOverflow-radius": "0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0",
        "--_CardOverflow-margin": "var(--CardOverflow-offset) var(--CardOverflow-offset) var(--CardOverflow-offset) 0px"
      },
      "&[data-last-child][data-first-child]": {
        "--AspectRatio-radius": childRadius,
        "--_CardOverflow-margin": "var(--CardOverflow-offset)"
      },
      [`& > .${buttonClasses_default.root}:only-child`]: {
        height: "calc(100% + -2 * var(--CardOverflow-offset))",
        "--Button-margin": "var(--CardOverflow-offset) 0",
        "--Button-radius": "0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0"
      }
    }
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var CardOverflow = React.forwardRef(function CardOverflow2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardOverflow"
  });
  const {
    className,
    component = "div",
    children,
    color = "neutral",
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component,
    color,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardOverflowRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardOverflow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the CardOverflow if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
CardOverflow.muiName = "CardOverflow";
var CardOverflow_default = CardOverflow;
export {
  cardOverflowClasses_default as cardOverflowClasses,
  CardOverflow_default as default,
  getCardOverflowUtilityClass
};
//# sourceMappingURL=@mui_joy_CardOverflow.js.map
