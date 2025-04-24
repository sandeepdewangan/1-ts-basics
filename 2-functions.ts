// --------- Function Return Types ---------
function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}
// never => never returns anything
function logAndThrowError(message: string): never {
    console.log(message);
    throw new Error("Throw error");
}

// --------- Function as Types ---------
// the callback function takes string as argument and returns void

function performJob(cb: (msg: string) => void) {
    // ..
    cb("Message");
}
