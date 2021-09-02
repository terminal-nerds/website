// import { example } from "@terminal-nerd/common"; // This one works
import { example } from "@terminal-nerd/common/helpers"; // This one doesn't, and that's what we're trying to achieve

export function run() {
	example({ name: "Nerd", age: 60 });
	console.log("Client is running!");
}

run();
