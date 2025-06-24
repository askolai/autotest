#!/usr/bin/env ts-node

/**
 * Autonomous Testing Platform CLI
 * Accepts a URL as input and prints it (initial stub).
 */

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error('Usage: npx ts-node src/cli/index.ts <url>');
    process.exit(1);
}

const url = args[0];
console.log(`Received URL: ${url}`); 