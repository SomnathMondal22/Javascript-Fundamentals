'use strict';

/*HIGH LEVEL OVERVIEW OF JAVASCRIPT


 JAVASCRIPT DEFINITION : Javascript is a high level, prototype based  object-oriented, multi paradigm ,interpreted or just in time compiled , dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event-loop concurrency model.  


1. High-level :Every program that runs on your computer needs some hardware resources like memory and the CPU to do the work. There are low level languages like C, where you manually have to manage these resources. Ex: asking the computer to have memory to create a new variable. On the other side, we have high level languages such as javascript and python, where we do not have to manage resources at all, because these languages have so called abstraction that takes away this work from us. This makes the language easier to learn and use. But the downside is that these programmes wont be as fast and optimised as the C programmes.

************************************************************************************************************** 

2. Garbage collection :  One of the powerful tools that takes memory management aways from us is this garbage collection. It is an algorithm inside JS engine, which automatically remove old unused objects from computer memory in order not to clog it up by unnecessary stuff. So it's like JS has a cleaning guy who cleans the memory time to time so that you don't have to do it manually in our code.

************************************************************************************************************** 

3. Interpreted or just in time compiled:  The computer processor only understands 0's and 1's. Ultimately, every program needs to be written in 0's and 1's, which is also called machine code. And since that is not practical to write, we simply write human readable JS which is an abstraction over machine code. This code eventually needs to be translated to machine code. So that step can be either compiling or interpreting. this step is important in every programming language because no one writes machine code. Mainly in JS this happens inside the JS engine.

************************************************************************************************************** 

4.Multi-paradigm: In programming, a paradigm is an approach and mindset of structuring code, which will direct your code style and technique. Three popular paradigm are: A> Procedural paradigm. B> Object oriented (OOP). C>Functional programming(FP). Procedural paradigm is just organising the code in a very linear way and with some functions in between. Also, we can declare paradigm as imperative or declarative. Some programming languages are only procedural or OOP based or FP based but JS does all of it. So, it's really flexible and versatile and so we can do whatever we want with it, or choose whatever paradigm we want.

************************************************************************************************************** 

5. Prototype based object oriented: Almost everything in javascript is an object, except for primitive values like numbers, strings etc. But arrays are just objects. Have you wondered why we can create an array and use the push method on it. It's because of prototypal inheritance. Will create an array from an array blueprint, which is like a template and this is called the prototype. This prototype contains all the array methods and the arrays that we create in our code, then inherit the methods from the blueprint so that we can use them on the arrays.

 Array.prototype.push                     >> prototype
 Array.prototype.indexOf

const arr = [1,2,3];           //Our array inherits methods from prototype.
 arr.push(4);    /
const hasZero = arr.indexOf(0)>(-1)       //built from prototype.

************************************************************************************************************** 

6. First class functions:  In a language with first class functions, functions are simply treated as variables. We can pass them into other functions and return them from function.

 const closeModal = ()=>{
  modal.classList.add('hidden');
  overlay.classList.add('hidden')
  }
  
  overlay.addEventListener('click',closeModal)
  
  Here,  closeModal is passing a function into another function as an argument.

************************************************************************************************************** 

7. Dynamic:  Javascript is a dynamically typed language. We don't assign data types to variables. They only became known When JS engine executes our code. Also, the type of variables can be easily changed as we reassign the variables.

 let x = 23;
    let y = 10;
    x = 'Somnath';
    
     No data type definitions. Types becomes known at runtime. Also, data type of variable is automatically changed

************************************************************************************************************** 

8. Single threaded and non blocking event loop:  Concurrency model> How the JS engine handles multiple tasks happening at the same time. Why we need that ? Javascript runs in one single thread, so it can only do one thing at a time. Therefore, we need a way to handle multiple things happening at the same time.In computing, a thread is like a set of instructions executed in the computer's CPU, basically the thread is where the code is actually executed in the machines processor. But in case of long running tasks like fetching data from a remote server, Well, it sounds like it would block the single thread. However, we want non blocking behaviour. How we achieve that? By using an event loop: Takes long running tasks, executes them in the background and puts them back in the main thread once they are finished. This is javascript non blocking event loop concurrency model with a single thread.************************************************************************************************************** 



THE JAVASCRIPT ENGINE AND RUNTIME : 


A javascript engine is a program that executes javascript code. Every browser has its own javascript engine. Most popular engine is the Google's V8. The V8 engine powers Google Chrome as well as node js, which is the Javascript runtime, which we can use to build server side applications with js outside of any browser. Every other browser have their own javascript engine, which you can search online.

Let's see the components:  Any javascript engine always contains a call stack and a heap. The call stack is exactly where our code is actually executed using something called execution context. Then the heap is an unstructured memory pool, which stores all the objects that our application needs.

Question is, how the code is compiled to machine code so that it can be executed afterwards?

>>> Compilation versus interpretation:-  The computer's processor only understands zeros and ones, and that every single computer program ultimately needs to be converted into this Machine code .This can happen using compilation or interpretation. In compilation, the entire source code is converted into machine code at once. And this machine code is then written to a binary file that can be executed by a computer. The execution can happen way after the compilation.

>> Interpretation:-  Interpreter runs through The source code and executes it line by line. Although the source code needs to be converted into the machine code, but it happens right before it is executed and not way ahead of time. JS used to be purely interpreted language, but problem with interpreted languages is that they are much, much slower than compiled languages. But now, instead of simple interpretation, modern javascript engine now uses mix between compilation and interpretation, which is called Just In Time compilation (JIT) compilation. The entire code is converted into machine code at once, then executed immediately.

Let's see how this works in javascript:  As a piece of javascript code enters engine, the first step is to parse the code(read the code). During the parsing the code is passed into a data structure called Abstract Syntax Tree (AST). This happens by splitting the code into pieces, which are meaningful to the language, like the const or function keyword, and then saving these pieces in the tree in a structured way. This step also checks if there are any syntax errors. The resulting tree will later be used to generate the machine code.

The next step is compilation:- This takes the generated AST and compiles it into machine code. This machine code then gets executed right away because modern javascript engineer sues JIT compilation and execution happens in the javascript call stack.

Modern javascript engine have a pretty clean optimization strategy. They create a very unoptimized version of machine code at the beginning, just so that it can start executing as fast as possible. Then in the background, this code is optimised and recompiled during the already running programme execution. This can be done multiple times and after each optimization, this unoptimized code is swept for the more optimised code without stopping execution. This is what makes modern JS engines V8 so fast. All these parsing, compilation and execution happens in special threads that we cant access from code so completely separated from the main thread which is running in the call stack and  executing our own code.

>>> Runtime in the browser:-  We can imagine javascript runtime as a container, including all the things that we need to use javascript(In this case, in the browser) and the heart of any javascript runtime is always a javascript engine. Without an engine, there is no runtime and no javascript at all. However, the engine alone is not enough . In order to work properly, we also need access to the web API's ,example DOM, timers, fetch api, etc. So basically, Web API's are functionality provided to the engine, but which are not part of the JS language itself .Javascript gets access to these API's through the global window object, but it still makes sense that these web API's are part of the runtime. A runtime is just like a box which contains all the javascript related stuff we need. Also, a typical javascript runtime also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready to be executed .For example, we attach event handlers function to the DOM Element, like buttons to react to certain events and these events handler functions are also called callback functions. As the event happens example click, the callback function will be called. So the first thing that actually happens after the event is that the callback function is put into the callback queue. Then when the call stack is empty, the callback function is passed into the stack, so it can be executed. This happens by something called event loop. So event look basically takes callback function to callback queue and puts name in the call stack so it can get executed. Also, javascript can exist outside of browser. For example, in node js

********************************************************************************************

// EXECUTION CONTEXT AND THE CALL STACK:-


Suppose our code was just finished compiling. It's now ready to be executed. What happens then is that a so called Global Execution Context is created for the top level code. And top level code is basically code that is not inside any function. In the beginning, only the code that is outside all functions will be executed. Functions should only be executed when they are called. We can also see what top level code is in this example here.
*/
const name = 'Somnath';

const first = () => {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
};

function second() {
  var c = 2;
  return c;
}

/*
So this name variable declaration is clearly top level codes. And therefore it will be executed in the global execution context. Next we have 2 functions. 1 expression and 1 declaration. So these will also be declared so that they can be called later. But the code inside the functions will only be executed when the functions are called.

Ok, so we know that a global execution context is created for top level code. But now, what exactly is an execution context? It basically is an environment in which a piece of javascript is executed. It's like a box that stores all the necessary information for some code to be executed such as local variables or arguments passed into a function. So javascript code always runs inside an execution context.Let's imagine you order a pizza as a takeaway. So usually that pizza comes in a box. And it might also come with some other stuff that is necessary for you to eat a pizza, such as cutlery or a receipt, so that you can actually pay for the pizza before eating it. So in this analogy, the pizza is the javascript code to be executed and the box is, of course, the execution context for our pizza. And that's because eating the pizza happens inside the box, which is then the environment for eating pizza. The box also contains cutlery and the receipt, which are necessary to eat a pizza. Or in other words, to execute the code

 Now, in any javascript project, no matter how large it is, there is only ever one global execution context It's always there as default context, and it's where top level code will execute. And speaking of execute, now that we have an environment where the top level code can be executed, it finally is executed. And there is not a lot to say about the execution itself. It's just the computer cpu processing to the machine code that it received.  And once this first code, so the top level code is finished, functions finally start to execute as well. And here is how that works: for each and every function call a new execution context will be created containing all the information that is necessary to run exactly that function. And the same goes for methods, of course, because they are simply functions attached to objects. Remember,all these execution contexts together make up the call stack that I mentioned before. Now, when all functions are done executing, the engine will basically keep waiting for call back functions to arrive so that it can execute these. For example, a callback function associated with a click event. And remember that it's the event loop who provides these new callback functions.
 
 So we know now what an execution context is, but don't really know what it's made of. So what's inside of it? The first thing that's inside any execution context is a so called variable environment. In this environment, all are variables and function declarations are stored. And there is also a special arguments object. This object contains, as the name says, all the arguments that were passed into the function that the current execution context belongs to. Because remember, each function gets its own execution context as soon as the function is called. So basically all the variables that are somehow declared inside a function will end up in its variable environment. However, a function can also access variables outside of the function. And we have already seen that in action throughout this course, especially in the projects of the previous section. And this works because of something called the scope chain.The scope chain basically consists of references to variables that are located outside of the current function. And to keep track of the scope chain, it is stored in each execution context. Finally, each context also gets a special variable called the this keyword. Now, the content of the execution context: the variable environment, scope chain and this keyboard is generated in a so called creation phase, which happens right before execution. And now just one final, but very important detail that we need to keep in mind is that execution contexts belonging to arrow functions do not get their own arguments keyword nor do they get the this keyword. So, arrow functions don't have the arguments objects and the this keyword. Instead, they can use the arguments object and  this keyword from their closest regular function parent. And this is an extremely important detail to remember about arrow functions, and we will come back to it later. So these are the things that are necessary to run each function as well as the code in the top level.
 
 Let's actually try to simulate the creation phase for this code example here. 
 

const Name = 'Somnath';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();


    So as you hopefully know by now, we will get one global execution context and 1 for each function. So 1 for the 1st function and 1 for the second function. In the global context, we have the name variable declaration, The 1st and 2nd function declarations, as well as the x variable declaration. For the functions, the variable environment will literally contain all the code of a particular function. Now, the value of x is marked as unknown here, because this value is the result of the first function that didn't run yet. But we will simulate this in the next slide. Now, technically, non of these values actually become known during the creation phase, but only in the execution phase. So this is not 100% accurate here but it's just to illustrate how these execution context work.In the first function we have the a variable set  to 1 and the b variable with once again requires a function call to order to become known. Finally, the variable environments of the 2nd function contains the c variable set to 2 and since this is the regular function, and not the arrow function, it also has the argument object. And this object is an array which contains all the arguments that were passed into the function when it was called. In this case, as you can see, that 7 and 9 .
    
    Imagine there were hundreds of execution contexts for hundreds of functions. How will the engine keep track of the order in which functions were called? And how will it know where it currently is in the execution .Well, that's where the call stack finally comes in. And remember that the call stack, together with the memory heap, makes up the javascript engine itself. But what actually is the call stack? Well, it's basically a place where execution contexts get stacked on top of each other in order to keep track of where we are in the program's execution. So the execution context that is on top of the stack is the one that is currently running. And when it's finished running, it will be removed from the stack, and execution will go back to the previous execution context. And using the analogy from before, it is as if you bought pizzas with some friends. Each friend has a pizza box, and then you put the boxes on top of each other, forming a stack in order to keep track which pizza belongs to each friend. Now all this sounds a bit abstract, doesn't it? And so to demonstrate how the call stack works, let's walk through this code example together so that I can show you exactly what happens.
    
    So once the code is compiled, top level code will start execution. And then,a global execution context will be created for the top level code. So this is where all the code outside of the function will be executed. And what happens with this execution context? That's right. It will be put in the call stack. And since this context is now at the top of the stack, it is the one where the code is currently being executed. So let's continue now with this execution. So here there is a simple variable declaration. And then the first and the 2nd functions are declared. So nothing fancy. But that's just how normal top level code gets executed. But then in the last line, this way things start to get interesting. Here we declare the X variable with the value that is going to be returned from calling the first function. And so let's actually call that function Now what happens immediately when a function is called? Well, it gets its own execution context so that it can run the code that's inside its body. And what happens to the context? Well, again, it is put in calls back on top of the current context. And so it's now the new current execution context. Great. So let's continue. So we have yet another simple variable here. And this variable will, of course, be defined in a variable environment of the current execution context, and not the global context, right? Then, right in the next slide, we have another function call. So let's call the function and move there. And as you guys, as you execute context, was created right away for this 2nd function. And once more it is pushed onto the call stack and becomes the new active context. Now what's important to note here is that the execution of the first function has now been paused. So again, we are running the 2nd function now. And in the mean time, no other function is being executed. The 1st function stopped at this point where the 2nd function was called, and will only continue as soon as this 2nd function returns. And it has to work this way. Because remember, javascript has only 1 thread of execution. And so we can only do one thing at a time .Never forget that.
    Now moving to the next line, we have a return statement, meaning that the function will finish its execution. So what does that mean for the call stack? Well, it basically means that the functions execution context will be popped off the stack and disappeared from the computers memory. For now what happens next is that the previous execution context will now be back to being the active execution context again. So let's also go back to where we worked before. And I hope that by now you start to see how the calls back really keeps track of the order of execution here. Without the call stack, how would the engine know which one was being executed before? It wouldn't know where to go back to, right? And that's the beauty of the call back. It makes the process almost effortless.
    
    So I like to use the analogy of the call stack being like a map for the javascript engine because it ensures that the order of execution never gets lost, just like the map does. So we returned from the second function, or back in the first function, where we have this calculation, and then finally, this 1st function also returns. And so here the same as before happens. So the current execution context gets popped off the stack, and the previous context is now the current context, where code is executed. In this case, we're back to the global execution context and the line of code were the first function was 1st called. So here the return value is finally assigned to X, and the execution is finished. Now the programme will now actually stay in this state forever, until it is eventually really finished. And that only happens like when we close the browser tab or the browser window, only when the programme is really finished like this, is when the global execution context is also popped of the stack. And this is in a nutshell, how the call stack works. So hopefully it makes sense now that we say that javascript code runs inside the call stack and actually is more accurate to say that code runs inside the E.C.that are in the stack. But the general point is that both runs in the call stack which is true.

 *********************************************************************************

 ### SCOPE AND THE SCOPE CHAIN :-


>> Scoping controls how our programs variables are organized and accessed by the Javascript engine. So basically scoping asks the questions: where do variables live or where can we access a certain variable and where not. Now in Javascript we have something called lexical scoping. And lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the program's code.

For example, a function that is written inside another function has access to the variables of the parent function. So again variable scoping is influenced by where exactly you write or functions and code blocks. 
 
>> Scope is the space or environment in which a certain variable is declared. And in the case of functions that's essentially the variable environment which is stored in the functions execution context.What's the difference between scope and variable environment, then the answer is that for the case of functions ,it's basically the same. Now in Javascript we have the global scope, function scope and block scope.

So the scope of a variable is basically the entire region of our code where a certain variable can be accessed. If you take a close look at it, scope is not the same as scope of a variable and so you should know about the subtle differences.

>> Three different types of scope in Javascript 

1) Global scope
2) Function scope
3) Block scope.

And remember, scope is the place in our code where variables are declared.And when I say variables, the exact same thing is true for functions as well, because in the end, functions are just values that are stored in variables.

1) GLOBAL SCOPE : 

const me = 'Somnath';
const job = 'student';
const year = 2026; 

So first, the global scope is once more for top level code. So this is for variables that are declared outside of any function or block. These variables will be accessible everywhere in our program, in all functions and all blocks. So really everywhere.
************************

2) FUNCTION SCOPE :

function calcAge(birthYear) {
  const now = 2026;
  const age = now - birthYear;
  return age;
}

console.log(now); //Reference error.


Next, each and every function creates a scope and the variables declared inside that function scope are only accessible inside that function. This is also called a local scope opposed to the global scope. So local variables live in the function so to say and outside of the function the variables are then not accessible at all. Again, this is technically the same as the functions variable environment, but we still need to give it the name of scope in this context because blocks also create scopes anyway. In this example here the now variable is 2037 inside calcAge function and therefore we can use it in the function to do calculations. But outside of the function as we try to log into the console we get a reference error. So Javascript is trying to find the now variable in this global scope, so outside of the function, but it cannot find it and so there is going to be an error. And if you remember our pig game project from the previous section, that is also the reason why we had to declare A couple of variables outside of the init function. So we had some variables declared in the init function and then that gave us an error because other functions were trying to access these variables, but of course they were in the function scope and so they were locally scoped and so we couldn't access them outside of that function where they were declared. And here it actually does not matter what kind of function we're using. So function declarations, function expressions and arrow functions all create their own scope.

2) BLOCK SCOPE :


if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = 'Mushrooms';
}

console.log(millenial); // Reference error.

Ex: if block, for loop block.

Now traditionally only functions used to create scope in Javascript, but starting in ES6 blocks also creates now. And with blocks we mean everything that is between curly braces, such as the block of a  if statement or a for loop. So just like with functions, variables declared inside the block are only accessible inside the block and not outside of it. Now the big difference is that block scopes only apply to variables declared with let or const . So again only let and const variables are restricted to the block in which they were created. That's why we say that let and const variables are block scoped. So if I declared a variable using var in this block, then that variable would actually still be accessible outside of the block and would be scoped to the current function or to the global scope. And so we say that var is function scope. So in ES5 and before we only had global scope and function scope and that's why ES5 variables declared with var only care about functions but not about blocks. They simply ignore them. Finally, also starting in ES6, all functions are now also block scoped at least in strict mode, which you should always be using anyway. And just like with let and const varibles this means that functions declared inside the block are only accessible inside that block.

To recap , let and const variables as well as functions are block scoped. But now to understand all this a little bit better, let's actually look at the more real and detailed example and also learn about the scope chain. And here we have some code with different functions and blocks and we're going to take a look at the scopes that are in this code, as well as build the scope chain.



const myName = 'Somnath';

function first() {
  const age = 26;

  if (age >= 30) {
    //true
    const decade = 3;
    var millenial = true;
  }
  function second() {
    const job = 'student';

    console.log(`${myName}  is a ${age}-old ${job} `);
    //Somnath is a 26-old  student
  }

  second();
}

first();

And of course we start with the global scope. As you can see, the myName variable is the only variable declaration that we have in the global scope. Now technically the first function also counts as a variable that is present in the global scope, but I want to keep it simple here and so I will only consider variable declarations and no functions. Alright, just remember that whatever I'm explaining here for variables also works the same for functions. Anyway, inside the global scope we have a scope for the first function because each function creates its own scope, remember? And what's in the scope? Well it's the age variable  declared right at the top of the function. Next, inside the first scope, let's now consider the 2nd function which will also create its own scope containing the job variable set to student. So as you see we have a nested structure of scopes with one scope inside the other. But now comes the actually interesting part. Because here in the 2nd function we have this line of code where we need the myName variable and the age variable which were both not declared inside the current scope. But they really need these variables here because otherwise we can't create this string here, right?
 So how can this be fixed? How will the Javascript engine know the values of these variables? Well, the secret is that every scope always has access to all to the variables from all its outer scopes, so from all its parents scopes. In our example, this means that the second scope can access the age variable from the scope of the 1st function. Of course this also means that the 1st scope can access variables that are in the global scope because that is the parent scope. As a consequence of this, the second scope will then also be able to access the myName variable from the global scope because it has access to the variables from the first scope. And by the way, all these also applies to function arguments. But in this example we just don't have any . And this is essentially how the scope chain works. In other words, if one scope needs to use a certain variable but cannot find it in the current scope, it will look up in the scope chain and see if it can find a variable in one of the parents scopes. If it can, it will then use that variable and if it can't then there will be an error and this process is called variable loopkup. 
 
 Now it's important to note that these variables are not copied from one scope to another. Instead, scopes simply look up in the scope chain until they find the variable that they need and then they use it. What's also extremely important to note is that this does not work the other way around. A certain scope will never ever have access to the variables of an inner scope. In this example, the first scope for example will never get access to the job variable that is stored in the 2nd scope . So again one scope can only look up in the scope chain, but it cannot look down basically. So only parent scope can be used, but no child scope. Anyway, now this line of code can be executed and printed in the console. Somnath is a 26 old student. Even though the my name and age variables were not defined in the current scope, all the engine did was to get them from the scope chain. We still have one more scope left here and that's the one created by this block here. Remember that starting with ES6, not only functions create scopes but also blocks. However, these scopes only work for ES6 variable types, so for let and const variables. That's why the only variable that's in the scope is the decade variable. The millennial variable is declared with const or let and therefore it is not scoped to just this block. Instead, the millennial variable is actually part of the first function scope. So again, for a variable declared with var, block scopes don't apply at all. They are function scoped, not block scoped. Let and const, on the other hand, are in fact block scoped .
 
 Now about the scope chain, the millennial variable is in the first function scope, then of course the 2nd function scope also has access to it, even if it doesn't really need that variable. Also, the scope chain does of course apply to block scopes as well, and therefore in our if-block scope we can access all the variables from all its outer scopes, so from the 1st function scope, and of course from the global scope. That's why I said in the last slide that variables in a global scope are accessible from everywhere. They are because they're always at the top of the scope chain. in fact we call variables in global scope as global variable. Right, but we actually used this term a lot in Javascript. Now it's important to understand that our purple blocked scope does not get access to any variables from the yellow second function scope. And the same the other way around. And why is that? Well, it's because of lexical scoping as we learned in the last slide. So the way that we can access variables depends on where the scope is placed i.e. where it is written in the code. In this case none of these two scopes is written inside of one another, they are both child scopes for the 1st function, we can say that they are sibling scopes and so by the rules of lexical scoping, they cannot have access to each other's variables simply because one is not written inside the other one. We can also say that the scope chain only works upwards, not sideways .
 
 What is the difference between the scope chain and the call stack.Let's look at some more code here.
 
const a = 'Somnath';
first();

function first() {
  const b = 'Hello!';
  second();

  function second() {
    const c = 'Hi';
    third();
  }
}

function third() {
  const d = 'Hey!';
  console.log(d + c + b + a);
  //Reference error
}


 So we have three functions called first, second and third.We start by calling the first function, which then calls the 2nd function, which in turn calls the 3rd function. So from what we learned before, the call stack for this example will look like this.
 

 *****  CALL STACK ***********

third() EC
  d = 'hey!'

second() EC
  c = 'Hi!'

first() EC
  b = 'Hello!'
  second = <function>

Global EC
a = 'Somnath'
first = <function>
second = <function>

 
 
One execution context for each function in the exact order in which they were called. I also included the variable environment for each execution context. For now it has nothing to do with scopes and scope chain. All I'm doing is creating one execution context for each function call and filling it with the variables of that function.Let's start building the scope team. lets start with the global scope. Variables available in global scope are exactly the one stored in the variable environment of the global execution context. And given everything we've learned so far, that makes sense right. In this we are including functions in each scope unlike we did in the previous slide. Now in the global scope we also call the first function, which is the reason why we have an execution context for it in the call stack. And this function of course also gets its own scope which contains all the variables that are declared inside of the function. And once again this is exactly the same as the Variable environment of the functions execution context. However, that's not all, because now we already know about the scope chain. So the first scope also gets access to all the variables from its parent scope thanks to the scope chain. Now as we already know, the scope chain is all about the order in which functions are written in the code. But what's really important to note here is that the scope chain has nothing to do with order in which functions were called. Or in other words, the scope chain has nothing to do with the order of the execution contexts in the call stack. The scope chain does get the variable environments from the execution context, as shown by red arrows here, but that's it. The order of function calls is not relevant to the scope chain at all . Now moving on to the 2nd function. Now once again, its scope is equal to its variable environment. Also, it's lexically written within the 1st function, and so of course it will have access to all its parents scopes as well. So we can say that the scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes. 

Now in the second function, we tried to call the 3rd function. But why does that work? Well, it works because the 3rd function is in the scope chain of the 2nd function scope. As we can see here in our scope chain diagram. It's a function in the global scope or a global function and therefore it's accessible everywhere. Of course, this will create a new scope along with the scope chain as we already know. Great. So what happens in this 3rd function? Well, we're trying to access variables b,c,d and a . d is no problem because it's right there in the 3rd function scope, so that one is easy. Then variable c is not in the local scope and so Javascript needs to do a variable lookup. So it looks up in the scope chain looking for variable c, but it's not there. And of course it isn't because c is defined in the 2nd function and there is just no way in which the 3rd function can access variables defined in the 2nd function. And that is true even though it was the 2nd function who called the 3rd. And so here is even more proof that the order in which functions are called does not affect the scope chain at all. And so here as a result we get the reference error because both c and b cannot be found in the 3rd scope nor in the scope chain. OK, but this I hope. I made it crystal clear that execution contexts, variable environments, the call stack scope, and the scope chain are all different but still very related concepts

// SUMMARY :

Scoping asks the question, where do variables live or where can we access these variables and where not. That's what scoping is all about.

Now there are three types of scope in Javascript, the global scope, scopes defined by functions and scopes defined by blocks. Starting in ES6, however, only let and const variables are block scope. Variables declared with var automatically end up in the closest function scope.

In Javascript we have lexical scoping, which means that the rules of where we can access variables are based on where in the code functions and blocks are written. And now let the magic begin because every stop always has access to all the variables from all its outer scopes and this is what we call the scope chain. When a certain variable is not in the current scope, the engine looks up in the scope chain until it finds the variable that it's looking for, and this process is called variable lookup. It's important to note that the scope chain is a one way street, so a scope will never ever have access to the variables of an inner scope, only of outer scope. We can also think of the scope chain in the certain scope as being equal to adding together all the variable environments of all the parent scopes. And finally, we need to keep in mind that the scope chain has nothing to do with the order in which functions were called, so the order of function calls does not affect the scope chain at all.
 
*******************************************************************************************
*/

//SCOPING IN PRACTICE:

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;
//   console.log(firstName); // Somnath as its available in parent scope.
//   // console.log(lastName);   //Reference error

//   return age;
// }

// const firstName = 'Somnath';
// calcAge(1991);

//*******************************************

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable with same name as outer scope variable,
      const firstName = 'Steven';

      //Reassigning outer scope's variables
      output = 'NEW OUTPUT';

      const str = `Oh! You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str); // reference error
    console.log(millenial);
    console.log(output);
    // add(2, 3);
  }
  printAge();

  return age;
}

const firstName = 'Billa';
calcAge(1991);

// console.log(age); //Not accessible..
//printAge();  //Reference error .

/*************************************************************************************************


 >> HOISTING IN JAVASCRIPT:

Hoisting : Makes some types of variables accessible/usable in the code before they are actually decl ared. "Variables lifted to top of their scope"

>> Behind the scenes : The code is basically scanned for variable declarations before it is executed. So this happens during the so called creation phase of the execution context. Then for each variable that is found in the code, a new property is created in a variable environment object. And that's how hoisting really works.

Hoisting does not work the same for all variable types. And so let's analyse how hoisting works for function declarations, variables defined with var, variables defined with let or constant and function expressions and also arrow functions.

1) FUNCTION DECLARATION : 

> HOISTED ? Function declarations are actually hoisted and the initial value in the variable environment is set to the actual function. So in practise, what this means is that we can use function declarations before they are actually declared in the code.  Again, because they are stored in the variable environment object even before the code starts executing. This is because of hoisting. Function declarations are block scoped. This is only true for strict mode. In sloppy mode, which you shouldn't, then functions are functions scoped.

2)Variables declared with var :

> HOISTED ? Yes, they are also hoisted, but hoisting works in a different way here. So unlike functions, when we try to access a var variable before it's declared in a code, we don't get declared value, but we get undefined. And this is a really weird behaviour for beginners. You might expect that you simply get an error when using a variable before declaring it, or to get the actual value, but not to get undefined, because getting undefined is just really weird. And it's not really useful either, right? And actually, this behaviour is a common source of bugs in javascript. So this is one of the main reasons why modern javascript we almost never use var.


3) LET AND CONST VARIABLES :

>> HOISTED ? Not hoisted. I mean, technically they are actually hoisted, but their value is basically set to uninitialized. So there is no value to work with at all and so in practise, it is as if hoisting was not happening at all. Instead, we say that these variables are placed in a so called Temporal Dead  Zone, or TDZ, which makes it so that we can't access the variables between the beginning of the scope and the place where the variables are declared. So as a consequence, if we attempt to use a let or const variable before it's declared, we get an error. Also, keep in mind that let and constant are block scope. So they exist only in the block in which they were created. And all these factors together is basically the reason why let and constant were first introduced into the language and why we use them now instead of var in modern javascript.

4) Function expressions and Arrow functions.

>>HOISTED ?  Well, it depends if they were created using var or const or let. Because keep in mind that these functions are simply variables, and so they behave the exact same way as variables in regard to hoisting. This means that a function expression or arrow function created with var is hoisted to undefined. But if created with let or constant, it's not usable before it's declared in a code because of the temporal dead zone. So again, just like normal variables right? And this is actually the reason why I told you earlier, that we cannot use function expressions before we write them in a code, unlike function declarations .

**************************************

>> TEMPORAL DEAD ZONE (TDZ), let and const :

*/
const myName = 'Somnath';

if (myName === 'Somnath') {
  console.log(`Somnath is a ${job}`);
  const age = 2025 - 2000;
  console.log(age);

  const job = 'student';
  console.log(x);
}
/*

 So in this example code, we're gonna look at the job variable. It is a const, so it's scoped only to this block, and it's gonna be accessible, starting from the line where it's defined. Why? Well, because there is this temporal dead zone for the job variable. It's basically the region of the scope in which the variable is defined, but can be used in any way. So it is as if the variable didn't even exist. Now, if we still tried to access the variable while in the TDZ, like we actually do in the first line of this if block, then we get a reference error telling us that we can't access job before initialization. However, if we try to access a variable that was actually never even created, like in the last line here, where we want to log x, then we get a different error message saying that x is not defined at all. What this means is that job is, in fact, in the temporal dead zone, where it is still initialised, but the engine knows that it will eventually be initialised, because it already read the code before and set the job variable in the variable environment uninitialized. Then when the execution reaches the line where the variable is declared, it is removed from the temporal dead zone and its safe to use. So to recap, basically each and every let and const variable get their own temporal dead zone that starts at the beginning of the scope until the line where it is defined. And the variable is only safe to use after the TDZ. Alright. Now, what actually javascript have a need to have TDZ ? Well, the main reason that TDZ was introduced in ES6 is that the behaviour I described before ,makes it way easier to avoid and catch errors. Because using a variable that is set to undefined before it actually declares, can cause  serious bugs, which might be hard to find. 
 
Accessing variables before declaration is bad practise and should be avoided. And the best way to avoid it is by simply getting an error when we attempt to do so. That's exactly what the temporal dead zone does. A 2nd and smaller reason why the TDz exists is to make const variables actually work the way they are supposed to. So as you know, we can't reassign const variables. So it would not be possible to set them to undefined first, and then assign their real value later. Const  should never be reassigned. And so it's only assigned when execution actually reaches the declaration. And that makes it impossible to use a variable before.

Now, if hoisting creates so many problems, why does it exist in the first place? . So the creator of javascript basically implement hositing so that we can use function declarations before we use them. Because this is essential for some programming techniques, such as mutual recursion. Some people also think that it makes code a lot more readable. Now, the fact that it also works for var declarations is because that was the only way hoisting could be implemented at the time. So the hoisting of var variables is basically just a byproduct of hoisting functions. And it probably seems like a good idea to simply set variables to undefined, which is inside is not really that great. But we need to remember that javascript was never intended to become a huge programming language that it is today. Also, we can't remove this feature from the language now.

*/
