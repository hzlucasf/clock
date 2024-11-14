const hours = document.getElementById('hours');

const minutes = document.getElementById('minutes');

const seconds = document.getElementById('seconds');

function update() {
  const d = new Date();

  const h = d.getHours();

  if (h < 10) {
    hours.innerText = '0' + h;
  } else {
    hours.innerText = h;
  }

  const m = d.getMinutes();

  if (m < 10) {
    minutes.innerText = '0' + m;
  } else {
    minutes.innerText = m;
  }

  const s = d.getSeconds();

  if (s < 10) {
    seconds.innerText = '0' + s;
  } else {
    seconds.innerText = s;
  }

  setTimeout(update, 0);
}

update();
