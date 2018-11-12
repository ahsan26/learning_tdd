const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: () => null,
    beFalsy: x => x,
    createUser: (firstName, lastName) => {
        return {
            firstName,
            lastName
        }
    }
}

module.exports = functions;