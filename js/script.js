let sec = 0
let min = 0
let hr = 0
let inteval

function twodigits(digíto) {
  if (digíto < 10) {
    return "0" + digíto
  } else {
    return digíto
  }
}

function start() {
  watch()
  interval = setInterval(watch, 1000)
}

function pause() {
  clearInterval(interval)
}

function stop() {
  alert(twodigits(hr) + ":" + twodigits(min) + ":" + twodigits(sec))
  clearInterval(interval)
  sec = 00
  min = 00
  hr = 00
  document.getElementById("watch").innerText = "00:00:00"
}

function watch() {
  sec++
  if (sec == 60) {
    min++
    sec = 0
    if (min == 60) {
      min = 0
      hr++
    }
  }
  document.getElementById("watch").innerText =
    twodigits(hr) + ":" + twodigits(min) + ":" + twodigits(sec)
}
