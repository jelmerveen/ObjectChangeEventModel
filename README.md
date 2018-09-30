# ObjectChangeEventModel
A Typescript model that calls a function when data (object) has changed.

# Summary
I've created this code, because I wanted to create my own lightweight reactive frontend 'framework'.
All I need for some small homebrew projects is a simple model, which takes a JSON string and whenever it gets modified it needs to update my frontend.

This little piece of code enables doing that.

ObjectWatch.ts is based on https://github.com/sindresorhus/on-change which I somewhat ported to TypeScript.
Furthermore I have changed the order of when the function is called. Because the way it was the object got updated after triggering the function. Which was not useful for UI purposes.

I've included the generated js files, for everyone not wanting to use typescript.

## Example
Also found in te folder test is the following example:

```typescript
import { PennionModel } from "../PennionModel";

var jsonData = JSON.stringify({ Title: "Hello"});

function action() {
    console.log("Action fired = " + JSON.stringify(model.content));
}

let model = new PennionModel(jsonData, action);

console.log("pre-change = " + JSON.stringify(model));
//output: {"Title":"Hello"}
model.content.Title += " Event!";
//output: {"Title":"Hello Event!"}
```
