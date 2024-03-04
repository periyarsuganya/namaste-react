/*
<div id="parent">
    <div id="child1">
        <h1>This is child 1 H1</h1>
        <h2>This is child 2 H2</h2>
    </div>
     <div id="child12">
        <h1>This is child 1 H1</h1>
        <h2>This is child 2 H2</h2>
    </div>
</div>
*/

const multilineHTML = React.createElement("div",{
    id : "parent"
},[
React.createElement("div", {
    id : "child1"
},
[React.createElement("h1",{},"This is child 1 H1"),React.createElement("h2",{},"This is child 2 H2")]
), React.createElement("div", {
    id : "child2"
},
[React.createElement("h1",{},"This is child 1 H1"),React.createElement("h2",{},"This is child 2 H2")]
)]
);
const heading = React.createElement("h1",{
    id: "headingTag", xyz:"ABCD"
},"Hello World using external JS and CSS files.");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(multilineHTML);
