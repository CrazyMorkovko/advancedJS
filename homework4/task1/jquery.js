$(document).ready(() => {
  $('.tabs1 .tab:eq(0)').show();
  $('.tabs2 .tab:eq(0)').show();

  $('.click').on('click', event => {
    let target = $(event.target);
    let tabId = target.data('tab-id');
    let tab = $(`#${tabId}`);
    //получаем родительский элемент текущей вкладки, в нем ищем и скрываем все табы
    tab.parent().find('.tab').hide();
    //показываем текущую вкладку
    tab.show();
  })
});
