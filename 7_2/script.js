const student = {
  name: 'lugh',
  html: 'bom',
  css: 'bom',
  js: 'bom',
  softSkills: 'bom'
}

const student2 = {
  name: 'aluno',
  html: 'marom',
  css: 'pessimo',
  js: 'kIsso',
  softSkills: 'cavalo'
}
function students() {
  const list = Object.keys(student);
  for (const key in list) {
    console.log(`skill: ${list[key]}, nivel: ${student[list[key]]}`);
  }
};