const company = document.querySelector('#company');
const panels = [...document.querySelectorAll('section')];
const back = document.querySelector('#back');
const next = document.querySelector('#next');
const actions = ['Analyze sample site', 'Generate redesign proposal', 'Show website concept', 'Prepare offer email'];

cases.forEach(({ name }, index) => company.add(new Option(name, index)));
const params = new URLSearchParams(location.search);
const requestedCompany = params.get('company');
if (cases[requestedCompany]) company.value = requestedCompany;
let stage = requestedCompany === company.value && params.get('stage') === '4' ? 4 : 0;

function render() {
  const example = cases[company.value];
  panels.forEach((panel, index) => { panel.hidden = stage !== index + 1; });
  document.querySelector('#progress').textContent = `Step ${stage + 1} of 5`;
  const items = example.findings.map(finding => {
    const item = document.createElement('li');
    item.textContent = finding;
    return item;
  });
  document.querySelector('#findings').replaceChildren(...items);
  document.querySelector('#headline').textContent = example.headline;
  document.querySelector('#concept').href = example.file;
  document.querySelector('#subject').textContent = example.subject;
  document.querySelector('#message').textContent = example.message;
  back.disabled = stage === 0;
  next.hidden = stage === panels.length;
  if (!next.hidden) next.textContent = actions[stage];
}

company.addEventListener('change', () => { stage = 0; render(); });
back.addEventListener('click', () => { stage--; render(); });
next.addEventListener('click', () => { stage++; render(); });
render();
