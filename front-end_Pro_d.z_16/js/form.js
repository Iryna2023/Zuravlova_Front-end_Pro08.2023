const Roles = {
    Admin: {
      name: 'Admin',
      permissions: ['readonly', 'edit', 'change_role']
    },

    Editor: {
      name: 'Editor',
      permissions: ['readonly', 'edit']
    },

    Reader: {
      name: 'Reader',
      permissions: ['readonly']
    },

    SuperAdmin: {
      name: 'SuperAdmin',
      permissions: ['readonly', 'edit', 'change_role', 'add_admin']
    }
};
  
Object.freeze(Roles);
  
class User {
    constructor(id, firstName, lastName, role) {
        if (typeof id !== 'number') {
            throw new Error('id must be a number');
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    
        Object.defineProperty(this, 'role', {
            value: role,
            writable: false,
            configurable: false
        });
    }
}

function isValidRole(role) {
    return Object.values(Roles).includes(role);
}

const user1 = new User(1, 'John', 'Doe', Roles.Admin);
alert(JSON.stringify(isValidRole(user1.role)));
user1.role === Roles.Admin;
user1.role = false;
delete user1.role;

const user2 = new User(2, 'Jane', 'Smith', Roles.Editor);
alert(JSON.stringify(isValidRole(user2.role)));
user2 === Roles.Editor;
user2.role = false;
delete user2.role;