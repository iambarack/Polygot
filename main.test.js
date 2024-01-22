//https://api.tureng.com/v1/dictionary/entr/hello

import rl from "readline"

fetch("https://api.tureng.com/v1/dictionary/enfr/binary")
    .then(res => res.json())
    .then(d => console.log(d))