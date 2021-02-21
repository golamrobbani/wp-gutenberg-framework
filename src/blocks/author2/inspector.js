import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  PanelColorSettings,
  withColors,
} from "@wordpress/block-editor";

class Inspector extends Component {
  render() {
    const {
      backgroundColor,
      setBackgroundColor,
      setTextColor,
      textColor,
    } = this.props;

    return (
      <Fragment>
        <InspectorControls>
          <PanelColorSettings
            title={__("Color settings", "tutorial")}
            initialOpen={false}
            colorSettings={[
              {
                value: backgroundColor.color,
                onChange: setBackgroundColor,
                label: __("Background color", "tutorial"),
              },
              {
                value: textColor.color,
                onChange: setTextColor,
                label: __("Text color", "tutorial"),
              },
            ]}
          ></PanelColorSettings>
        </InspectorControls>
      </Fragment>
    );
  }
}

export default compose([
  withColors("backgroundColor", { textColor: "color" }),
  //withFontSizes("fontSize")
  //applyFallbackStyles
])(Inspector);
