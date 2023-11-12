import debounce from 'lodash.debounce';

const container = document.querySelector('.suport');
const loadMoreBtn = document.querySelector('.suport__button');
//let limit = 0;
//let inc = 3;

const array =[
    {
    title: 'Save the Children',
    url:
    'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis ',
            img: null,
    },
    {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/ ',
        img: null,
    },
    {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
        img: null,
    },
    {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/ ',
        img: null,
    },
    {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
        img: null,
    },
    {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/ ',
        img: null,
    },
    {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: null,
    },
    {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
        img: null,
    },
    {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
        img: null,
    },
    ]

function renderListSupport(array, limit) {
    const markup = array
    .map(({ title, url, img }, index) => {
      index += 1;
      if (index < limit + 1) {
        return `        
          <div class="logo_suport">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
                </div>`;
      }
    })
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
}

//loadMoreBtn.addEventListener('click', scrolList);

function scrolList() {
 
  if (limit === 6) {
    if (inc < limit - 1) {
      renderListScrol(array, limit, inc);
      inc += 1;
    } else {
      renderListSupport(array, limit);
      inc = 3;
      return;
    }
  } else if (inc < limit + 3) {
    renderListScrol(array, limit, inc);
    inc += 1;
  } else {
    renderListSupport(array, limit);
    inc = 2;
    return;
  }
}

function renderListScrol(array, limit, inc) {
  const markup = array
    .map(({ title, url, img }, index) => {
      index += 1;
      if (index >= inc && index < limit + inc) {
        return `        
          <div class="logo_suport">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
              >
            </div>
  `;
      }
    })
    .join('');
  container.innerHTML = markup;
}




 