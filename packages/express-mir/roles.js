const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (() => {
  ac.grant('basic')
    .readOwn('user')
    .updateOwn('user')
    .createOwn('task')
    .readOwn('task')
    .updateOwn('task')
    .deleteOwn('task')
    .createOwn('group')
    .readAny('group')

  ac.grant('supervisor')
    .extend('basic')
    .readAny('user')
    .createAny('mission')
    .updateAny('mission')
    .createAny('group')
    .updateAny('group')

  ac.grant('admin')
    .extend('basic')
    .extend('supervisor')
    .updateAny('user')
    .deleteAny('user')
    .createAny('group')
    .updateAny('group')
    .deleteAny('group')

  return ac;
})();



