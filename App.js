
const Parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i am child1 from child"),
    React.createElement("h2",{},"i am child2 from child")
    ]),
    React.createElement("div",{id:"Secondchild"},[
    React.createElement("h1",{},"i am child1 from Secondchild"),
    React.createElement("h2",{},"i am child2 from Secondchild")
    ])
]);

const heading=React.createElement("h1",{id:"heading1"},"Hello from React");
const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); 
root.render(Parent); 
