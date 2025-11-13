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


*/
