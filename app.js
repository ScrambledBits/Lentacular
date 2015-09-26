'use strict';

function openFolderDialog() {
  var inputField = document.querySelector('#folderSelector');
  inputField.addEventListener('change', function() {
    var folderPath = this.value;
    alert('The chamber of secrets has been opened! ' + folderPath);
  }, false);
  inputField.click();
}


function bindSelectFolderClick() {
  var button = document.querySelector('#select_folder');
  button.addEventListener('click', function() {
    openFolderDialog();
  });
}

window.onload = function() {
  bindSelectFolderClick();
}
