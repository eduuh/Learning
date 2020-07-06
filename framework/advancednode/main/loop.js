// node myfile.js
const pedingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myfile runnings
myFile.runContents();


function shouldContinue() {
  // check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: An pending OS task? (like server listening to port)
  // Check three: Any pending long running operation? (Like fs module)
  return pendingTimers.lenght || pendingOsTasks.length || pendingOperations.length;
}
// entire body excutes in one 'tick'
While(shouldContinue) {
  // 1) Nodes looks at pendingTimers and sees if any functions are ready to be called.
  
  // 2) Nodes looks at pendingOsTasks and pendingOperations and node excutes the relevant calbacks
  
  // 3. Pause execution. Continue when...
  //  - new pendingOperations is done . A new request
  //  - a new pendingOsTasks is done
  //  - timer is about to complete
  
  // 4. Looks for pedingTimers . call any setImmediate

  // 5. Handle any 'close' events
}

// exit back to terminal
