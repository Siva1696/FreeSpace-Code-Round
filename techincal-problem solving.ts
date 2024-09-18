
// Question
// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
 
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********


// ***** Answer ******

function pattern(strings) {
    const maxLength = Math.max(...strings.map((e) => e.length));
    const border = '*'.repeat(9)
    console.log(border)
    strings.forEach((a)=> {
        console.log(`* ${a.padEnd(maxLength)} *`);
    });
    console.log(border);
}

const strings = ["Hello", "World", "in", "a", "frame"];
pattern(strings);