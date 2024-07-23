const nl_container = document.getElementById('nlcontainer');
const input_label = document.getElementById('ctn-email');
const email_input = document.getElementById('email-input');


if (nl_container) {
  nl_container.addEventListener('mouseover', () => {
    input_label.style.transition = '1s';
    input_label.style.transform = 'scale(1.05)';
  });

  nl_container.addEventListener('mouseout', () => {
    input_label.style.transform = 'scale(1)';
    input_label.style.color = '';
  });

  email_input.addEventListener('click', () => {
    input_label.style.transform = 'scale(1)';
    input_label.style.color = '';
  });
};

const VoltarPraCima = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
  if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function() {
  backToTop()
})


function Esconder(id, text) {
  document.getElementById(id).style.display = 'block';
}

function Mostrar(id) {
  document.getElementById(id).style.display = 'flex';
}


var stateContents = document.querySelectorAll('.state-content');

stateContents.forEach(function(stateContent) {
  var regTitle = stateContent.querySelector('h2');
  var cat_ctn = stateContent.querySelector('.categories');
  var seta = stateContent.querySelector('.seta');

  if (regTitle && cat_ctn && seta) {
    regTitle.addEventListener('click', () => {
      document.querySelectorAll('.categories.open').forEach((openCategory) => {
        if (openCategory !== cat_ctn) {
          openCategory.classList.remove('open');
          openCategory.previousElementSibling.innerHTML = '▶';
        }
      });

      if (cat_ctn.classList.contains('open')) {
        cat_ctn.classList.remove('open');
        seta.innerHTML = '▶';
      } else {
        cat_ctn.classList.add('open');
        seta.innerHTML = '▼';
      }
    });
  } else {
    console.log('Elementos não encontrados');
  }
});

var anchorButtons = document.querySelectorAll('.states button');
anchorButtons.forEach(function(anchorButton) {
  anchorButton.addEventListener('click', (event) => {
    var href = anchorButton.querySelector('a').getAttribute('href');
    var stateContent = document.querySelector(href); // Seleciona o conteúdo do estado correspondente ao botão
    var seta = stateContent.querySelector('.seta'); // Seleciona a seta dentro do conteúdo do estado
    var cat_ctn = stateContent.querySelector('.categories'); // Seleciona a categoria correspondente ao botão

    if (cat_ctn && seta) {
      document.querySelectorAll('.categories.open').forEach((openCategory) => {
        var openSeta = openCategory.previousElementSibling.querySelector('.seta');
        if (openSeta) {
          openSeta.innerHTML = '▶'; // Altera a seta para '>'
        }
        openCategory.classList.remove('open');
      });

      cat_ctn.classList.add('open');
      seta.innerHTML = '▼'; // Altera a seta para 'v'
    }
  });
});

document.querySelectorAll('#map path').forEach(function(el) {
  el.addEventListener('mouseover', function() {
    this.parentNode.appendChild(this);
  });
});

document.querySelectorAll('#map path').forEach(function(el) {
  el.addEventListener('mouseover', function() {
    this.parentNode.appendChild(this);
  });
});

function showCard(region) {
  // Ocultar todos os cards
  document.querySelectorAll('.card-info').forEach(card => card.style.display = 'none');

  // Mostrar o card selecionado
  document.getElementById(`card-info-${region}`).style.display = 'block';
  document.getElementById(`card-info-${region}`).classList.toggle('transicao');
}

function riscarTexto(checkbox) {
  const label = checkbox.nextElementSibling;
  if (checkbox.checked) {
    label.style.textDecoration = 'line-through'; // Riscado
  } else {
    label.style.textDecoration = 'none'; // Normal
  }
}