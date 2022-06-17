#!/usr/bin/env zx

// import globals explicitly (for better autocomplete in VS Code).
// import "zx/globals";

// Create a new directory if not exists
let folderName = "foo & bar3";
await $`echo ${folderName}`;
await $`[ ! -d "${folderName}" ] && mkdir -p ${folderName}`;

try {
  await $`exit 1`;
} catch (p) {
  console.log(`Exit code: ${p.exitCode}`);
  console.log(`Error: ${p.stderr}`);
}

let date = await $`date`;
await $`echo Current date is ${date}.`;

let bear = await question("What kind of bear is best? ");
await $`echo the best bear is ${bear}`;
