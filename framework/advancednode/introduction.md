
process -> multiple Thread

Thread -> Schduling > Decide by OS scheduler

If we have multiple core -> We have the ability to process more threads.

1. Threads are units of instruction that are waiting to be executed by the CPu.
2. Deciding which order to execute this instruction is called Scheduling.

Scheduling is controlled by your operationg system to ways of improving the rate at which we process.

To ways to improve the rate in which we process threads.

1. To add extra CPU cores to our machines.
2. To allow our os Scheduler to detect big pauses in the procecsisng time due to expensive input and expensive I/O operation.

### Node program

We have Event Loop. -> One Thread (Running a node projects)
1.  Process and execuste code in index.js file.
2.  Do we still have work to do? Look at times  Os tasks, threadpools.
3. If No. exist the programs
4. If true -> the following task repeats until the answers is no.
          - Runs setTimeouts, setIntervals
          - run callbacks for any os task or threadpools task that ared done (this is 99% of our code.)
          - Pause and wait for stuff to happen.
          - Run any "setImmediate" functions
          - Handle close events.




