export default async bud => {
  bud.build.rules.js.setUse(["esbuild-js"]);

  bud
    .entry("app", ["entry.js"])
    .template({
      template: bud.path("@src/entry.html"),
      async: true,
    })
    .serve(new URL("http://localhost:3008"));
};
