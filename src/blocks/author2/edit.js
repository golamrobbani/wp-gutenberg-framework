/**
 * External dependencies
 */
import classnames from "classnames";

import Inspector from "./inspector";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";
//import { image as icon } from "@wordpress/icons";

import { Component, Fragment } from "@wordpress/element";
import { Button } from "@wordpress/components";
import {
  withColors,
  RichText,
  MediaUploadCheck,
  MediaUpload,
  BlockIcon,
} from "@wordpress/block-editor";
class AuthorEdit extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      isSelected,
      backgroundColor,
      textColor,
      attributes,
      setAttributes,
      className,
      selectedParentClientId,
      clientId,
    } = this.props;

    const { biography, name, imgUrl } = attributes;
    const hasImage = !!imgUrl;

    const classes = classnames(className, {
      "has-background": backgroundColor.color,
      "has-text-color": textColor.color,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class,
    });

    const styles = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
    };
    const onUploadImage = (media) =>
      setAttributes({ imgUrl: media.url, imgId: media.id });

    return (
      <Fragment>
        {isSelected && <Inspector {...this.props} />}

        <div className={classes} style={styles}>
          {!!isSelected || clientId === selectedParentClientId || hasImage ? (
            <figure className="wp-block-coblocks-author2__avatar">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onUploadImage}
                  allowedTypes={["image"]}
                  value={imgUrl}
                  render={({ open }) => (
                    <Button onClick={open}>
                      {!imgUrl ? (
                        <BlockIcon icon="screenoptions" />
                      ) : (
                        <img
                          className="wp-block-coblocks-author2__avatar-img"
                          src={imgUrl}
                          alt="avatar"
                        />
                      )}
                    </Button>
                  )}
                ></MediaUpload>
              </MediaUploadCheck>
            </figure>
          ) : null}

          <div className={`${className}__content`}>
            <RichText
              identifier="name"
              multiline={false}
              tagName="span"
              className="wp-block-coblocks-author2__name"
              placeholder={
                /* translators: placeholder text used for the author name */
                __("Write author name…", "coblocks")
              }
              value={name}
              onChange={(nextName) => {
                setAttributes({ name: nextName });
              }}
              keepPlaceholderOnFocus={true}
            />
            <RichText
              identifier="biography"
              multiline={false}
              tagName="p"
              className="wp-block-coblocks-author2__biography"
              placeholder={
                /* translators: placeholder text used for the biography */
                __(
                  "Write a biography that distills objective credibility and authority to your readers…",
                  "coblocks"
                )
              }
              value={biography}
              onChange={(nextBio) => {
                setAttributes({ biography: nextBio });
              }}
              keepPlaceholderOnFocus={true}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default compose([withColors("backgroundColor", { textColor: "color" })])(
  AuthorEdit
);
