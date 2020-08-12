window.onload = function () {
  var picker = new Pikaday({ 
    field: document.getElementById('date'),
        onSelect: function(date) {
            console.log(date);
        }
  });
  new window.JustValidate('.cv-form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: 'nome necessario',
        minLength: 'nome muito pequeno',
        maxLength: 'nome muito grande'
      },
      email: {
        required: 'Email necessario',
        email: 'Email invalido!'
      },
    },

    submitHandler: function (form, values) {
      // retorna o elemento form e os valores
    },
  });
}
