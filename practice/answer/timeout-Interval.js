/**
 * 分别使用 `setTimeout` 和 `setInterval` 实现每隔3秒输出当前时间的操作；
 */
function practice1() {
  (function outPer3Secs() {
    setTimeout(() => {
    console.log(new Date());
    outPer3Secs();
  }, 3000)
})();

  setInterval(() => {
    console.log(new Date());
  }, 3000);
}

/**
 * 分别使用 `setTimeout` he `setInterval` 实现3秒后输出当前时间的操作；
 */
function practice2() {
  setTimeout(() => {
    console.log(new Date());
  }, 3000);

  let intervalIndex = setInterval(() => {
    console.log(new Date());
    clearInterval(intervalIndex)
  }, 3000);
}

function verifySeconds(seconds) {
  if (seconds && typeof seconds !== 'number') {
    throw new Error('seconds must be number');
  }

  if (typeof seconds === 'number' && (seconds < 0 || seconds > 60 )) {
    throw new Error('seconds must between 0 and 60');
  }
}

function scheduleByTimeout(seconds) {
  verifySeconds(seconds);
  let delay = 60000;
  if (seconds !== undefined) {
    let dateNow = new Date();
    let secondsNow = dateNow.getSeconds();
    delay = seconds - secondsNow;
    delay = delay < 0 ? delay + 60 : delay;
    delay = delay * 1000;
  }
  setTimeout(() => {
    console.log(new Date());
    scheduleByTimeout();
  }, delay);
}

function scheduleByInterval(seconds) {
  verifySeconds(seconds);
  let delay = 60000;
  if (seconds !== undefined) {
    let dateNow = new Date();
    let secondsNow = dateNow.getSeconds();
    delay = seconds - secondsNow;
    delay = delay < 0 ? delay + 60 : delay;
    delay = delay * 1000;
  }
  let intervalIndex = setInterval(() => {
    console.log(new Date());
    if (seconds !== undefined) {
      clearInterval(intervalIndex);
      scheduleByInterval();
    }
  }, delay)
}
