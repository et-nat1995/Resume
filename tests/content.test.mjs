import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

async function readContent(name) {
  const source = await readFile(`${root}/content/${name}.json`, "utf8");
  return JSON.parse(source);
}

test("default explorer selections reference real content", async () => {
  const [approach, projects] = await Promise.all([
    readContent("approach"),
    readContent("projects"),
  ]);

  assert.ok(
    approach.explorer.lenses.some(
      (lens) => lens.id === approach.explorer.defaultLensId,
    ),
  );
  assert.ok(
    projects.items.some(
      (project) => project.id === projects.defaultProjectId,
    ),
  );
});

test("navigation points to sections owned by page organisms", async () => {
  const site = await readContent("site");
  const expectedTargets = new Set(["#work", "#experience", "#toolbox", "#about"]);

  assert.deepEqual(
    new Set(site.navigation.map((item) => item.href)),
    expectedTargets,
  );
});

test("collection identifiers remain unique", async () => {
  const [approach, projects] = await Promise.all([
    readContent("approach"),
    readContent("projects"),
  ]);
  const lensIds = approach.explorer.lenses.map((lens) => lens.id);
  const projectIds = projects.items.map((project) => project.id);

  assert.equal(new Set(lensIds).size, lensIds.length);
  assert.equal(new Set(projectIds).size, projectIds.length);
});
