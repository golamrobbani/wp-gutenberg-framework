import metadata from "./block.json";

const { name, category } = metadata;

const settings = {
  title: "Hello",
  category: "common",

  edit(props) {
    return <p>Hello editor.</p>;
  },

  save(props) {
    return <p>Hello saved content.</p>;
  },
};

export { name, category, settings };
