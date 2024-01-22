//https://api.tureng.com/v1/dictionary/enfr/hello

import readline from "readline-sync"
import inquirer from 'inquirer';
import { wapi, wget, debug, wfound } from "./src";
const langs = new Set(["enfr", "ende", "enes", "entr"])
var allowSlang = false;

console.log(langs);



while (true) {
    const input = readline.prompt();
    if (input === 'exit' || input.charCodeAt(0) == 46) {
        break;
    }

    console.log('-- input "' + input + '" ------ ');

    const res = await wget(input)
    if (wfound(res)) {
        const rf = await wapi(res)
        if (rf.length) {
            console.log(rf)
        };
    }

}
console.log('bye!\n');