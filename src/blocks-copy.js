alert("Hello World");

import { registerBlockType } from "@wordpress/blocks";

registerBlockType("tutorial/hello-world", {
  title: "Hello world",
  category: "common",

  edit(props) {
    return <p>Hello World editor.</p>;
  },

  save(props) {
    return <p>Hello World saved content.</p>;
  },
});
