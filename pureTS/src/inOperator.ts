interface User {
  name: string
  userEmail: string
}

interface Admin {
  name: string
  userEmail: string
  idAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin
  }
}
