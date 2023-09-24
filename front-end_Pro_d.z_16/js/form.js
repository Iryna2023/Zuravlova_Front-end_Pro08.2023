function deepFreeze(object) {
    let propertyNames = Object.getOwnPropertyNames(object);
  
    propertyNames.forEach(function(name) {
      let prop = object[name];
  
      if (typeof prop == 'object' && prop !== null)
        deepFreeze(prop);
    });
  
    return Object.freeze(object);
}
  
const Roles = {};

Object.defineProperty(Roles, 'Admin', {
    value: deepFreeze ({
        name: 'admin',
        Permissions: {
            description: 'має доступ до всього контенту, може читати (readonly) та змінювати (edit) контент та змінювати ролі інших користувачів на Editor',
            canRead: true,
            canEdit: true,
            canChangeRole: true,
            canAddAdmin: false
        }
    }),
    writable: false
});

Object.defineProperty(Roles, 'Editor', {
    value: deepFreeze ({
        name: 'editor',
        Permissions: {
            description: 'може читати та змінювати контент',
            canRead: true,
            canEdit: true,
            canChangeRole: false,
            canAddAdmin: false
        }
    }),
    writable: false
});  

Object.defineProperty(Roles, 'Reader', {
    value: deepFreeze ({
        name: 'reader',
        Permissions: {
            description: 'може тільки читати контент',
            canRead: true,
            canEdit: false,
            canChangeRole: false,
            canAddAdmin: false
        }
    }),
    writable: false
});

Object.defineProperty(Roles, 'SuperAdmin', {
    value: deepFreeze ({
        name: 'superAdmin',
        Permissions: {
            description: 'може все, що Admin, та додатково додавати роль Admin користувачам',
            canRead: true,
            canEdit: true,
            canChangeRole: true,
            canAddAdmin: true
        }
    }),
    writable: false
});

Object.freeze(Roles);

alert(JSON.stringify(Roles.Admin, null, 2));
alert(JSON.stringify(Roles.Editor, null, 2));
alert(JSON.stringify(Roles.Reader, null, 2));
alert(JSON.stringify(Roles.SuperAdmin, null, 2));
  
class User {
    constructor(id, firstName, lastName, role) {
        if (typeof id !== 'number') {
            throw new Error('id must be a number');
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    
        Object.defineProperty(this, 'role', {
            value: deepFreeze (role),
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
}

function isValidRole(role) {
    return Object.values(Roles).includes(role);
}

const user1 = new User(1, 'John', 'Doe', Roles.Admin);
(JSON.stringify(isValidRole(user1.role)));
alert(user1.role === Roles.Admin);

const user2 = new User(2, 'Jane', 'Smith', Roles.Editor);
(JSON.stringify(isValidRole(user2.role)));
alert(user2.role === Roles.Editor);