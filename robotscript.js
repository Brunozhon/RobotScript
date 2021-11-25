class RobotResponse {
  constructor(data, type) {
    this.data = data
    this.type = type
  }
}
class Robot {
  constructor(name) {
    this.name = name
  }
  http(contentType, uri, processor) {
    var req = new XMLHttpRequest()
    req.open("GET", uri)
    req.send()
  }
}
var robot = new Robot("Main Robot")
