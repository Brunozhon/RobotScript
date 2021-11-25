# RobotScript

You can use RobotScript by copying/pasting the script tag.

```html
<script src="https://raw.githubusercontent.com/Brunozhon/RobotScript/main/robotscript.js" integrity="sha384-I7Kl2ANkaMnqv5c2VXGo2P9DR/f2YGhBNwHCCDhLwg6lJtV7GTl/nKT6+m2rfKsn" crossorigin="anonymous"></script>
```

Then you can use your robot from the `robot` variable (usually.) If you wanted to create a different robot, you can use the `Robot` constructor:
```js
var newRobot = new Robot("Robot Name")
```
But most of the time, you can use the `robot` variable.

## Making an HTTP request

You can use `robot.http()` to make an HTTP request.

```js
robot.http()
```
