var html_code = '';
function read_file() {
  var file = $('#code_genderator_start .highlight-code').attr('include');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', file, true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200 || xmlhttp.status == 0) {
        html_code = xmlhttp.responseText;
        $('#code_genderator_start code.html').html(html_code);
      }
    }
  };
  xmlhttp.send(null);
}

function genderator_click() {
  $('.btn-generator').on('click', function () {
    $(this).next().find('.code_genderator').attr('id', 'code_genderator_start');
    read_file();
  });

  $('.modal .close').on('click', function () {
    $('.code_genderator').removeAttr('id');
  });

  $('.modal').on('hidden.bs.modal', function (e) {
    $('.code_genderator').removeAttr('id');
  });

  var clipboard = new ClipboardJS('.btn-clone-html');
}
function genderator_code(value, position) {
  var html = html_code;
  $('#code_genderator_start .card').each(function (i) {
    html = html.split('{{link_' + (i + 1) + '}}').join(
      $(this)
        .find('#input_url' + (i + 1))
        .val(),
    );
    html = html.split('{{link_image_' + (i + 1) + '}}').join(
      $(this)
        .find('#input_url_image' + (i + 1))
        .val(),
    );
    html = html.split('{{option1_' + (i + 1) + '}}').join(
      $(this)
        .find('#input_option1' + (i + 1))
        .val(),
    );
    html = html.split('{{option2_' + (i + 1) + '}}').join(
      $(this)
        .find('#input_option2' + (i + 1))
        .val(),
    );
    html = html.split('{{id_' + (i + 1) + '}}').join(
      $(this)
        .find('#input_id' + (i + 1))
        .val(),
    );

    html = html.replace(
      '{{link_text_' + (i + 1) + '}}',
      $(this)
        .find('#input_link_text' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{image_' + (i + 1) + '}}',
      $(this)
        .find('#input_image' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{image_star_' + (i + 1) + '}}',
      $(this)
        .find('#input_image_star' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{label_' + (i + 1) + '}}',
      $(this)
        .find('#input_label' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{title_' + (i + 1) + '}}',
      $(this)
        .find('#input_title' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{button_' + (i + 1) + '}}',
      $(this)
        .find('#input_button' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{countdown_' + (i + 1) + '}}',
      $(this)
        .find('#input_countdown' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{description_' + (i + 1) + '}}',
      $(this)
        .find('#input_description' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{heading_title_' + (i + 1) + '}}',
      $(this)
        .find('#input_heading_title' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{button_view_all_' + (i + 1) + '}}',
      $(this)
        .find('#input_button_view_all' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{button_view_all_link_' + (i + 1) + '}}',
      $(this)
        .find('#input_button_view_all_link' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{id_product_' + (i + 1) + '}}',
      $(this)
        .find('#id_product' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{id_product2_' + (i + 1) + '}}',
      $(this)
        .find('#id_product2' + (i + 1))
        .val(),
    );
    html = html.replace(
      '{{id_product3_' + (i + 1) + '}}',
      $(this)
        .find('#id_product3' + (i + 1))
        .val(),
    );
  });
  $('#code_genderator_start code.html').html(html);
}

$(document).ready(function () {
  // genderator_code();
  genderator_click();
});
