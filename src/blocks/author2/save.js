import { getColorClassName, RichText } from "@wordpress/block-editor";
import classnames from "classnames";

// import { hasEmptyAttributes } from "../../utils/block-helpers";

// const isEmpty = attributes => {
// 	const attributesToCheck = ["name", "imgUrl", "biography"];
// 	const newAttributes = Object.entries(attributes).filter(([key]) =>
// 		attributesToCheck.includes(key)
// 	);

// 	if (typeof Object.fromEntries === "undefined") {
// 		return hasEmptyAttributes(fromEntries(newAttributes));
// 	}

// 	return hasEmptyAttributes(Object.fromEntries(newAttributes));
// };

const save = ({ className, attributes }) => {
  const {
    backgroundColor,
    customBackgroundColor,
    customTextColor,
    textColor,
    name,
    biography,
    imgUrl,
  } = attributes;

  const backgroundClass = getColorClassName(
    "background-color",
    backgroundColor
  );
  const textClass = getColorClassName("color", textColor);

  const classes = classnames(className, {
    "has-text-color": textColor || customTextColor,
    "has-background": backgroundColor || customBackgroundColor,
    [textClass]: textClass,
    [backgroundClass]: backgroundClass,
  });
  const styles = {
    backgroundColor: backgroundClass ? undefined : customBackgroundColor,
    color: textClass ? undefined : customTextColor,
  };

  console.log("save file.js");
  console.log(styles);
  console.log(classes);
  console.log(textClass);
  console.log(attributes);

  return (
    <div className={classes} style={styles}>
      {imgUrl && (
        <figure className={"wp-block-tutorial-author2__avatar"}>
          <img
            className="wp-block-tutorial-author2__avatar-img"
            src={imgUrl}
            alt={name}
          />
        </figure>
      )}

      <div className={"wp-block-tutorial-author2__content"}>
        {!RichText.isEmpty(name) && (
          <RichText.Content
            tagName="span"
            className="wp-block-tutorial-author2__name"
            value={name}
          />
        )}
        {!RichText.isEmpty(biography) && (
          <RichText.Content
            tagName="p"
            className="wp-block-tutorial-author2__biography"
            value={biography}
          />
        )}
      </div>
    </div>
  );
};

export default save;
