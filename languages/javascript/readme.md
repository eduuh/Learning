# Problem statement

There is a gap between when part of your program runs now, and another part of your program run later. The gaps may be caused by.

- requesting data from a database or file system
- sending data across the nework and waiting for a response
- Performing a repeated task at a fixed interval of time (like animation).

Your program has to handle the gap. The relatioship between the now and later parts of your program is at the heart of **asyncronous programing.**

Let consider a **chunck** of code

```JavaScript
var data = ajax("http://some.url.1")
console.log(data);
```

- standard Ajax request don't complete synchronously
  - ajax(..) function does not yet have any value return back.
- IF ajax(..) could block until the response came back.
  - **data = ..** assingment would work fine.
  - This is not how we do Ajax. We make an asynchronous Ajax request now.
    - We won't get the results back until later.

The simplest way we get the data is usually using the callbak function.

```Javascript
// ajax(...) is some arbitrary ajax function gite by a library.
ajax("http://some.url.1", function myCallBackFunction(data){
    cosole.log(data); //Yay, I gots me some 'data'
});
```

- It is possible to make **syncromous Ajax requests**.
  - While that's techincally true, you should never , ever do it.
    - It locks browser UI (buttons, menus, scrolling).
      - Prevents an form of user interaction.
- Your desire to avoid the callback mess is not justification for **blocking, synchronous Ajax**

Consider.

```JavaScript
function now() {
  console.log(21);
}

function later() {
   answer = 20;
   answer = answer * 2;
   console.log("meaning of life:", answer);
}

var answer = now();
setTimeout(later, 1000); // meaning of lif: 42
```

- There are two chucks to this program:

  - The stuff that will **run now**, and stuff that will **run later.**
    - **now chunk** runs right away, as soon as you execute you program
    - **setTimeout(..)** sets **an event(a timeout) to happen later**.
      - **later()** function will be executed at a later time (1000) miliseconds.
  - Now and later chunks share the same scope and state.

## Asynchronous Programming

1. What is Asynchronous.
2. Asynchronous Patterns.
3. Event Loops.

- V8 is a JavaScript Engine.
- Node embeds and extends V8
- Chrome embeds and extends V8
- Electron embeds and extends V8
- v8 is synchronous.
  - Node, chrome and electron layer are what that adds the asynchronocity of Javascript.

## What is Asynchronous vs Synchronous.

- Synchronous code is easier to predict.
- Asynchronous code is harder to predict.
- Asynchronous code better for performance.

### Blocking vs Non-Blocking.

Blocking block execution by a statement that is waiting to completing execution. Blocking was an an idea we invented for working with software easier. But this is not how the actual computer works. The **cpu** does not wait **for the harddrive** read and write. The cpu goes on to perform other tasks, but when the harddrive finish loading the file to the main memory **ram**. It sends a **hardware intrupt signal** to the cpu to indicate the task is complete. No the cpu pays attention to the file , perform some processing.

- Blocking is Sync
- Non-Blocking is Async
- Hardware is non-blocking.
- Non-blocking is far better for performance.
- Hardware is asynchronous.

#### Multi-Threaded Programming

- Threads are just processes with shared memory.
- Shared memory means race conditions.
  - using locks means deadlocks/livelocks.
- When a thread blocks another thread takes over.
- Writing performant multi-threaded code is hard.

#### Event Driven Programming

- Node abstracts all I/O operations into **events** that are handled on an implicit _eventloop._
- Node and Chrome does use threads. One **main** thread. Use events to sync state.
- Your JavaScript code is **single threaded**.
- Asychronicity is provided by Events.
  - Event Loop
- Node makes it it easy to write performant code.

### Async Patterns.

1. Callbacks.
2. Promises.
3. Async/Await.
4. Generators.

- setInterval(..)
- setTimeout(...)
- setImmediate(...)
- process.nextTick(...)
- readFile()

### Callbacks.

- Callbacks are **by** far the most common way that asynchrony in Js programs is expressed and managed.
- Callbacks is the most fundamental asynce pattern in the language.
- Callback is the async work horse for JavaScript, and it does its job respectably.
- Try catch block does not work on callbacks since they are asyncronous.

- It's impossible to effectively use any abstraction if you dont understand what it's abstracting and why.

```Javascript

```
