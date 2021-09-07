import { example } from "@terminal-nerd/common/helpers";

export function run(): void {
	example({ name: "Nerd", age: 60 });
	console.log("Client is running!");
}

run();
