document.getElementById('upScroll').addEventListener('click', () => {
  const a = document.documentElement;
  const b = a.scrollHeight - a.clientHeight;
  window.scroll({top:0});
});

document.getElementById('profile').addEventListener('click', () => {
  const a = document.getElementById('profile_sub');
  const b = profile_sub.getBoundingClientRect();

  window.scrollTo(0, b.top-30)
});

document.getElementById('works').addEventListener('click', () => {
  const a = document.getElementById('works_sub');
  const b = works_sub.getBoundingClientRect();

  window.scrollTo(0, b.top-30)
});

document.getElementById('skill').addEventListener('click', () => {
  const a = document.getElementById('skill_sub');
  const b = skill_sub.getBoundingClientRect();

  window.scrollTo(0, b.top)
});