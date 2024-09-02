$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoIten = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoIten)
        $(`
            <div class="overley-imagem-link">
            <a href="${enderecoDaNovaImagem}" target= "_blank" title="ver imagem em tamanho real">
                ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(novoIten)
        $(novoIten).appendTo('ul')
        $(novoIten).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })
})

