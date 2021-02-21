import metadeta from "./block.json";
import edit from "./edit";
import save from "./save";

const { name, category, attributes } = metadeta;
import { __ } from "@wordpress/i18n";

const settings = {
  title: __("Author Profile Custom Develop Title", "tutorial"),
  description: __(
    "Author Profile Custom Develop Author Profile Custom Develop",
    "tutorial"
  ),
  keywords: [
    __("Author", "tutorial"),
    __("Author Profile", "tutorial"),
    __("Biography", "tutorial"),
  ],

  attributes,
  edit,
  save,
  //   edit(props) {
  //     return <p>Hello editor.</p>;
  //   },

  //   save(props) {
  //     return <p>Hello saved content.</p>;
  //   },
};

export { name, category, settings };
