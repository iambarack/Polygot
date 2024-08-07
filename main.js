//https://api.tureng.com/v1/dictionary/enfr/hello

import readline from "readline-sync"
import inquirer from 'inquirer';
import { wapi, wget, debug, wfound } from "./src/index.js";
import Table from "cli-table"

const langs = new Set(["enfr", "ende", "enes", "entr"])
var allowSlang = false;

export default allowSlang;

console.log(langs);

import blessed from "blessed"
import contrib from "blessed-contrib"

(async function(){
    while (true) {
                //allow control the table with the keyboard
        const input = readline.prompt();
        if (input === 'exit' || input.charCodeAt(0) == 46) {
            break;
        }
        console.log('-- input "' + input + '" ------ ');
        let arr = []
        const res = await wget(input)
        if (wfound(res)) {
            const rf = await wapi(res)
            if (rf.length) {
                arr.push(rf)
                //console.log(Table.print(res))
                //ctable.getTable(rf)
            };
        }
    }
    console.log('bye!\n');
})()

