
const langs = new Set(["enfr", "ende", "enes", "entr"])
var allowSlang = false;

export default allowSlang;
console.log("asd");



import blessed from "blessed"
import contrib from "blessed-contrib"
var screen = blessed.screen()
    , grid = new contrib.grid({rows: 1, cols: 1, screen: screen})


screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});
    
var table = grid.set(0, 0, 1, 1, contrib.table,
    { keys: true
    , fg: 'white'
    , selectedFg: 'white'
    , selectedBg: 'blue'
    , interactive: true
    , label: 'Translator'
    , width: '20%'
    , height: '20%'
    , border: {type: "line", fg: "cyan"}
    , columnSpacing: 10 //in chars
    , columnWidth: [16, 30, 12] /*in chars*/ })
//allow control the table with the keyboard
table.focus()

table.setData(
        { headers: ['input', 'results']
        , data:
            [ ["charCode", 2]
            , ["results", 5] ]
        })

var buffer = "";


process.stdin.on('data', function(chunk) {
    let c = chunk.toString().charCodeAt(0);
    if(c == 13) {
        buffer = ""
    } else if(c == 27) {
        return
    }else {
    if (c == 8) {
        buffer = buffer.slice(0, -1);
    } else buffer+=chunk;
    table.setData(
        { headers: ['input', buffer]
        , data:
            [ ["charCode", c]
    , ["results", 5] ]
        })
    }
    screen.render()
});

var state = false;
function alive() {
    if(!state) {
        table.setData(
            { headers: ['input>', buffer]
            , data:
                [ ["first", 5]
        , ["results", 5] ]
        })
        state = true;
    } else {
        table.setData(
            { headers: ['input', buffer]
            , data:
                [ ["first", 5]
        , ["results", 5] ]
        })
        state = false;
    }
    screen.render()
}

setInterval(alive, 800);
screen.render()