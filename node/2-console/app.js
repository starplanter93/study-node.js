console.log('logging.....');
console.clear();

// log level
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

// assert
console.assert(2 === 3, '불일치');
console.assert(2 === 2, '일치');

// print object
const student = { name: 'starp', age: 20, company: { name: 'ac' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });
