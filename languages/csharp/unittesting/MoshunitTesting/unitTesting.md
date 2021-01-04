### what is automated testing

The practice of writing code to test our code and then run those test in and automated fashion.

### automation testing consists

1. Production code.
2. Test code

### Manual Testin

1. launch the app.
2. Login
3. Navigate
4. fillout a form 
5. submit the form
6. Verify the results.

### As Application code Increase

The testing cost increases exponestianlly.

Automate the tests.

You could test all the excution path of function in a few **seconds**.

### Benefits

- Test your code frequently in less time,
- You can catch bugs before deploying your application
- Deploy your application with confidence
  - Reduce the number of bugs.
- Allow to refactor with confidence.
  - **Refactoring means** changing the structure of the code without changing the functionality.
- Focuc more on the quality of the methods your are writing.

### Types of Tests

1. Unit Tests

Test a unit of the application witout its **external dependencies**
Test a unit of work.

- cheap to write
- Execute fast.

can be use to verify each functionality works

2.Intergration Tests.
Test the application with its **external dependencies**.

- Take longer to execute.
- Helps with deployment with confidence.

3. **End to End Test**

- Drives an application throug the UI.
Give you the greatest confidence.

- Very slow,
- Very brittle, same changes on user interface breaks them.

### Testing Pyramid.

1. Most **test** should be in the category of the **unit** test.

2. You should also have some intergartion tests.

3. You should write very few E2E.

Unit tests are use to test **algorithms** to test all the exectution paths. Not all application have.

### TakeAwayes

1. Favour unit tests to e2e tests.
2. Cover unit tests gaps with intergration tests.
3. Using end to end test sparinly.

### The tooling.

You will need a testing framework **Nunit** , **mstests** , **xUnit**. 
All this framework gives a **untility library** and a **test runner**. Dont get hand up to the tooling. Focus on the fundamentals.

#### Write your first unit test.


#### Test-driven Development (TDD)

Wit TDD you write your tests before writing the production code. 

1. You start by writing a failing test.
2. Write the simplest code to make the test pass.
3. Refactor if necessary.

### Benefits of TDD

1. Testable source code.
2. Full coverage by tests.
3. Simpler Implementation

 Test first / code first.

 In theory **Test first** if promissing.

#### Fundamental of Unit Testing.
 t

#### Core unit testing Techiniques.

#### Exercises.

#### Breaking external Dependencies.

#### Exercises.

#### Challanges.



