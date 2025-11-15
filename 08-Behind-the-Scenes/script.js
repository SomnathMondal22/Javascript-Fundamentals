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

  const name = 'Somnath';
  
  const first =()=>{
    let a =1;
    const b = second();
    a = a+b;
    return a; 
    };

    function second(){
    var c = 2;
    return c;
    }


So this name variable declaration is clearly top level codes. And therefore it will be executed in the global execution context. Next we have 2 functions. 1 expression and 1 declaration. So these will also be declared so that they can be called later. But the code inside the functions will only be executed when the functions are called.

Ok, so we know that a global execution context is created for top level code. But now, what exactly is an execution context? It basically is an environment in which a piece of javascript is executed. It's like a box that stores all the necessary information for some code to be executed such as local variables or arguments passed into a function. So javascript code always runs inside an execution context.Let's imagine you order a pizza as a takeaway. So usually that pizza comes in a box. And it might also come with some other stuff that is necessary for you to eat a pizza, such as cutlery or a receipt, so that you can actually pay for the pizza before eating it. So in this analogy, the pizza is the javascript code to be executed and the box is, of course, the execution context for our pizza. And that's because eating the pizza happens inside the box, which is then the environment for eating pizza. The box also contains cutlery and the receipt, which are necessary to eat a pizza. Or in other words, to execute the code

 Now, in any javascript project, no matter how large it is, there is only ever one global execution context It's always there as default context, and it's where top level code will execute. And speaking of execute, now that we have an environment where the top level code can be executed, it finally is executed. And there is not a lot to say about the execution itself. It's just the computer cpu processing to the machine code that it received.  And once this first code, so the top level code is finished, functions finally start to execute as well. And here is how that works: for each and every function call a new execution context will be created containing all the information that is necessary to run exactly that function. And the same goes for methods, of course, because they are simply functions attached to objects. Remember,all these execution contexts together make up the call stack that I mentioned before. Now, when all functions are done executing, the engine will basically keep waiting for call back functions to arrive so that it can execute these. For example, a callback function associated with a click event. And remember that it's the event loop who provides these new callback functions.
 
 So we know now what an execution context is, but don't really know what it's made of. So what's inside of it? The first thing that's inside any execution context is a so called variable environment. In this environment, all are variables and function declarations are stored. And there is also a special arguments object. This object contains, as the name says, all the arguments that were passed into the function that the current execution context belongs to. Because remember, each function gets its own execution context as soon as the function is called. So basically all the variables that are somehow declared inside a function will end up in its variable environment. However, a function can also access variables outside of the function. And we have already seen that in action throughout this course, especially in the projects of the previous section. And this works because of something called the scope chain.The scope chain basically consists of references to variables that are located outside of the current function. And to keep track of the scope chain, it is stored in each execution context. Finally, each context also gets a special variable called the this keyword. Now, the content of the execution context: the variable environment, scope chain and this keyboard is generated in a so called creation phase, which happens right before execution. And now just one final, but very important detail that we need to keep in mind is that execution contexts belonging to arrow functions do not get their own arguments keyword nor do they get the this keyword. So, arrow functions don't have the arguments objects and the this keyword. Instead, they can use the arguments object and  this keyword from their closest regular function parent. And this is an extremely important detail to remember about arrow functions, and we will come back to it later. So these are the things that are necessary to run each function as well as the code in the top level.
 
 Let's actually try to simulate the creation phase for this code example here. 
 
 const name = 'Somnath';
  
  const first =()=>{
    let a =1;
    const b = second(7,9);
    a = a+b;
    return a; 
    };

    function second(x,y){
    var c = 2;
    return c;
    }

    const x = first()


    So as you hopefully know by now, we will get one global execution context and 1 for each function. So 1 for the 1st function and 1 for the second function. In the global context, we have the name variable declaration, The 1st and 2nd function declarations, as well as the x variable declaration. For the functions, the variable environment will literally contain all the code of a particular function. Now, the value of x is marked as unknown here, because this value is the result of the first function that didn't run yet. But we will simulate this in the next slide. Now, technically, non of these values actually become known during the creation phase, but only in the execution phase. So this is not 100% accurate here but it's just to illustrate how these execution context work.In the first function we have the a variable set  to 1 and the b variable with once again requires a function call to order to become known. Finally, the variable environments of the 2nd function contains the c variable set to 2 and since this is the regular function, and not the arrow function, it also has the argument object. And this object is an array which contains all the arguments that were passed into the function when it was called. In this case, as you can see, that 7 and 9 .
    
    Imagine there were hundreds of execution contexts for hundreds of functions. How will the engine keep track of the order in which functions were called? And how will it know where it currently is in the execution .Well, that's where the call stack finally comes in. And remember that the call stack, together with the memory heap, makes up the javascript engine itself. But what actually is the call stack? Well, it's basically a place where execution contexts get stacked on top of each other in order to keep track of where we are in the program's execution. So the execution context that is on top of the stack is the one that is currently running. And when it's finished running, it will be removed from the stack, and execution will go back to the previous execution context. And using the analogy from before, it is as if you bought pizzas with some friends. Each friend has a pizza box, and then you put the boxes on top of each other, forming a stack in order to keep track which pizza belongs to each friend. Now all this sounds a bit abstract, doesn't it? And so to demonstrate how the call stack works, let's walk through this code example together so that I can show you exactly what happens.
    
    So once the code is compiled, top level code will start execution. And then,a global execution context will be created for the top level code. So this is where all the code outside of the function will be executed. And what happens with this execution context? That's right. It will be put in the call stack. And since this context is now at the top of the stack, it is the one where the code is currently being executed. So let's continue now with this execution. So here there is a simple variable declaration. And then the first and the 2nd functions are declared. So nothing fancy. But that's just how normal top level code gets executed. But then in the last line, this way things start to get interesting. Here we declare the X variable with the value that is going to be returned from calling the first function. And so let's actually call that function Now what happens immediately when a function is called? Well, it gets its own execution context so that it can run the code that's inside its body. And what happens to the context? Well, again, it is put in calls back on top of the current context. And so it's now the new current execution context. Great. So let's continue. So we have yet another simple variable here. And this variable will, of course, be defined in a variable environment of the current execution context, and not the global context, right? Then, right in the next slide, we have another function call. So let's call the function and move there. And as you guys, as you execute context, was created right away for this 2nd function. And once more it is pushed onto the call stack and becomes the new active context. Now what's important to note here is that the execution of the first function has now been paused. So again, we are running the 2nd function now. And in the mean time, no other function is being executed. The 1st function stopped at this point where the 2nd function was called, and will only continue as soon as this 2nd function returns. And it has to work this way. Because remember, javascript has only 1 thread of execution. And so we can only do one thing at a time .Never forget that.
    Now moving to the next line, we have a return statement, meaning that the function will finish its execution. So what does that mean for the call stack? Well, it basically means that the functions execution context will be popped off the stack and disappeared from the computers memory. For now what happens next is that the previous execution context will now be back to being the active execution context again. So let's also go back to where we worked before. And I hope that by now you start to see how the calls back really keeps track of the order of execution here. Without the call stack, how would the engine know which one was being executed before? It wouldn't know where to go back to, right? And that's the beauty of the call back. It makes the process almost effortless.
    
    So I like to use the analogy of the call stack being like a map for the javascript engine because it ensures that the order of execution never gets lost, just like the map does. So we returned from the second function, or back in the first function, where we have this calculation, and then finally, this 1st function also returns. And so here the same as before happens. So the current execution context gets popped off the stack, and the previous context is now the current context, where code is executed. In this case, we're back to the global execution context and the line of code were the first function was 1st called. So here the return value is finally assigned to X, and the execution is finished. Now the programme will now actually stay in this state forever, until it is eventually really finished. And that only happens like when we close the browser tab or the browser window, only when the programme is really finished like this, is when the global execution context is also popped of the stack. And this is in a nutshell, how the call stack works. So hopefully it makes sense now that we say that javascript code runs inside the call stack and actually is more accurate to say that code runs inside the E.C.that are in the stack. But the general point is that both runs in the call stack which is true.
*/
