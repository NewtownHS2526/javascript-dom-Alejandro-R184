// TODO: Create const variable and try to reassign (will cause error)
// TODO: Then create let variable and reassign successfully


let num = 1;
console.log("normal num", num);
num = 2;
console.log("normal num", num);

const lockednum = 2;
console.log("locked num", lockednum);
lockednum = 4;
console.log("locked num", lockednum);
