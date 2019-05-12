const companiesTable = document.querySelector('.companies-table');
const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('.form__query');

const companies = [
  {name: 'Walmart'},
  {name: 'State Grid'},
  {name: 'Sinopec Group'},
  {name: 'China National Petroleum'},
  {name: 'Royal Dutch Shell'},
  {name: 'Toyota Motor'},
  {name: 'Volkswagen'},
  {name: 'BP'},
  {name: 'Exxon Mobil'},
  {name: 'Berkshire Hathaway'},
];

function showTable(companiesList) {
  companiesTable.innerHTML = "";
  companiesList.forEach((company) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = company.name;
    tr.appendChild(td);
    companiesTable.appendChild(tr);
    td.classList.add('companies-table__element');
  });
}

function filterTable(query) {
  const filteredCompanies = companies.filter((company) => {
    return company.name.toLowerCase().includes(query.toLowerCase());
  });
  showTable(filteredCompanies);
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  filterTable(searchInput.value);
});

showTable(companies);