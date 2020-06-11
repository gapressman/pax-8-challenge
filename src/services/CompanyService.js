const fakeCompanies = [
  {
    id: 1,
    name: 'Facebook',
    domain: 'facebook.com',
    numberOfEmployees: 10000,
    subscriptionsPerEmployee: 1,
  },
  {
    id: 2,
    name: 'Google',
    domain: 'google.com',
    numberOfEmployees: 85000,
    subscriptionsPerEmployee: 5,
  },
  {
    id: 3,
    name: 'Yahoo',
    domain: 'yahoo.com',
    numberOfEmployees: 62000,
    subscriptionsPerEmployee: 4,
  },
  {
    id: 4,
    name: 'Pax8',
    domain: 'pax8.com',
    numberOfEmployees: 256,
    subscriptionsPerEmployee: 2,
  },
];

export function getAll() {
  return Promise.resolve(fakeCompanies);
}

export function getById(id) {
  const company = fakeCompanies.find((currentCompany) => currentCompany.id === id);

  return Promise.resolve(company);
}
