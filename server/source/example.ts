import { example } from "@terminal-nerd/common/helpers";

export function run(): void {
	example({ name: "Not-Nerd", age: 9 });
	console.log("Server is running!");
}

run();
