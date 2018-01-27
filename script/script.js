$(document).ready(function(){

  $('#tableflip').click(function(){
    $('#tableflip').text('┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻');
  });

  $('#mainpage').click(function(){
    w3_close();
  });

  $('#clearalltables').click(function(){
    $('.resulttext').text('');
  });

  //Expand/Show Sections TODO
  $('.hide').click(function(){
    alert("HIDE");
  });
  $('.show').click(function(){
    alert("SHOW");
  });

  //Tables
  var RollTables = JSON.parse(sessionStorage.RollTables);

  //Build HTML for tables
  Object.keys(RollTables).forEach(function(tableSection){
    //Header
    $('#tables-container').append('\
      <div class="w3-container" id="' + tableSection + '" style="margin-top:25px">\
        <h1 class="w3-xxxlarge w3-text-dark-cyan"><b>' + tableSection + '</b>\
        </h1>\
      </div>\
    ')

    var tableCount = 0;
    var rowCount = 0;
    Object.keys(RollTables[tableSection]).forEach(function(tableName){
      if(tableCount % 3 == 0){
        $('#tables-container').append('\
          <div id="' + tableSection + 'Row' + rowCount + '" class="w3-row-padding reveal"></div>\
        ')
      }

      $('#' + tableSection + 'Row' + rowCount).append('\
        <div class="w3-col m4 w3-margin-bottom">\
          <div class="w3-light-grey w3-border-dark-cyan" style="text-align:center">\
            <div class="w3-dark-cyan">' + tableName + '</div>\
            <div class="w3-container">\
              <p>\
                <button id="' + tableName + '" class="rollbutton w3-button w3-dark-cyan w3-hover-black">Roll</button>\
                <button id="' + tableName + '-pick" class="w3-button w3-dark-cyan w3-hover-black">Pick</button>\
              </p>\
              <p class="resulttext"></p>\
            </div>\
          </div>\
        </div>\
      ')

      tableCount++;
    });
  });

  //TODO: Build Javascript for table functions, delegate since the HTML is dynamically generated
  Object.keys(RollTables).forEach(function(tableSection){
    Object.keys(RollTables[tableSection]).forEach(function(tableName){
      var tableLength = Object.keys(RollTables[tableSection][tableName]).length;
      $(document).on('click', '#' + tableName, function(){
        if(tableSection == "NPC_Names"){ //TODO
          // //Roll Name
          // var roll = Math.floor(Math.random() * Object.keys(RollTables.NPC_Names.DwarfNames).length) + 1;
          // var rollresult = RollTables.NPC_Names.DwarfNames[roll];
          // //Roll Surname
          // roll = Math.floor(Math.random() * Object.keys(RollTables.NPC_Names.DwarfSurnames).length) + 1;
          // rollresult += " " + RollTables.NPC_Names.DwarfSurnames[roll];
          // $('#dwarfnames-result').text(rollresult);
        }
        else{
          var roll = $(this).closest('[class^=w3-container]').find('[class^=tableinput]').val();
          if(roll == "" || roll == null){
            roll = Math.floor(Math.random() * tableLength) + 1;
          }
          var rollresult = RollTables[tableSection][tableName][roll];
        }
        $(this).closest('[class^=w3-container]').find('[class^=resulttext]').html(rollresult);
        $(this).closest('[class^=w3-container]').find('[class^=tableinput]').val('');
      });
      $(document).on('click', '#' + tableName + '-pick', function(){
        $(this).closest('[class^=w3-container]').find('[class^=resulttext]').html('\
            <input class="tableinput w3-input" type="text" placeholder="1-' + tableLength + '" pattern="^[1-9][0-9]?$|^100$">\
          ');
          $(this).closest('[class^=w3-container]').find('[class^=tableinput]').focus();
      });
    });
  });

  // //NPC Names
  // $('#dwarfnames').click(function(){
  //   //Roll Name
  //   var roll = Math.floor(Math.random() * Object.keys(RollTables.NPC_Names.DwarfNames).length) + 1;
  //   var rollresult = RollTables.NPC_Names.DwarfNames[roll];
  //   //Roll Surname
  //   roll = Math.floor(Math.random() * Object.keys(RollTables.NPC_Names.DwarfSurnames).length) + 1;
  //   rollresult += " " + RollTables.NPC_Names.DwarfSurnames[roll];
  //   $('#dwarfnames-result').text(rollresult);
  // });

  //HP Tracker
  var creatureCount = 0;

  //highlight input fields on focus
  $('#creaturename-input').focus(function(){
    $(this).select();
  });
  $('#creaturehp-input').focus(function(){
    $(this).select();
  });

  //Validate inputs, append creature block
  $('#addcreature').click(function(){
    var creatureError = false;
    $('#creatureerror').text('');

    var creatureName = $('#creaturename-input').val();
    var creatureHP = $('#creaturehp-input').val();

    if(creatureName == "" || creatureName == null){
      $('#creatureerror').append('<p>You must enter a creature name to add a creature block.</p>');
      creatureError = true;
    }
    if(creatureHP == "" || creatureHP == null){
      $('#creatureerror').append('<p>You must enter a creature\'s HP to add a creature block.</p>');
      creatureError = true;
    }
    if(typeof(creatureHP) !== 'number' && (creatureHP % 1) !== 0){
      $('#creatureerror').append('<p>Creature HP must be an intiger value.</p>');
      creatureError = true;
    }
    if(creatureError){
      return;
    }

    $("#creatureblocks").append('\
    <div class="creatureblock w3-half w3-margin-bottom">\
      <div class="w3-light-grey w3-border-dark-cyan" style="padding: 5px">\
      <div style="float:right">\
        <button class="removecreature w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">X</button>\
      </div>\
      <div style="float:left">\
        <div class="creaturecount w3-text-dark-cyan" style="font-size: 18pt; margin-left: 5px;">Creature #' + creatureCount + '</div>\
      </div>\
        <div class="w3-container style="width:50%; margin: auto;"">\
          <div style="float:left;">\
          <div class="creaturename style="overflow:hidden;">' + creatureName + '</div>\
          <div class="creaturehp w3-text-red style="overflow:hidden;">' + creatureHP + '</div>\
          </div>\
          <p><input class="creaturenote w3-input" type="text" placeholder="Enter notes or conditions here"></p>\
          <div>\
            <button class="add1 w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">+1</button>\
            <button class="sub1 w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">-1</button>\
            <button class="add5 w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">+5</button>\
            <button class="sub5 w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">-5</button>\
            <button class="add10 w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">+10</button>\
            <button class="sub10 w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">-10</button>\
            <button class="unstrikeoutcreature w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px">A</button>\
            <button class="strikeoutcreature w3-button w3-dark-cyan w3-hover-black" style="padding:4px 8px; width:35px; margin-bottom: 2px"><span style="text-decoration:line-through;">A<span></button>\
          </div>\
        </div>\
      </div>\
    </div>');
    creatureCount++

  });

  //Clear creature blocks, clear inputs, clear errors, reset creature block counter
  $('#clearallcreatures').click(function(){
    $('#creaturename-input').val('');
    $('#creaturehp-input').val('');
    $('#creatureerror').text('');
    $("#creatureblocks").text('');
    creatureCount = 0;

    $('#creaturename-input').focus();
  });

  //Click add creature button on ENter key
  $(document).on('keyup', '.hptrackerinput', function(key){
    if (key.keyCode == 13) {
      $('#addcreature').click();
    }
  });

  //Delegated events for dynamically generated elements
  //Click roll button on Enter key for table inputs
  $(document).on('keyup', '.tableinput', function(key){
    if (key.keyCode == 13) {
      $(this).closest('[class^=w3-container]').find('[class^=rollbutton]').click();
    }
  });
  //Block controls
  $(document).on('click', '.unstrikeoutcreature', function(){
    $(this).closest('[class^=creatureblock]').find('[class^=creaturename]').removeClass('strikeout');
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').removeClass('strikeout');
    $(this).closest('[class^=creatureblock]').find('[class^=creaturecount]').removeClass('strikeout');
  });
  $(document).on('click', '.strikeoutcreature', function(){
    $(this).closest('[class^=creatureblock]').find('[class^=creaturename]').addClass('strikeout');
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').addClass('strikeout');
    $(this).closest('[class^=creatureblock]').find('[class^=creaturecount]').addClass('strikeout');
  });
  $(document).on('click', '.removecreature', function(){
    $(this).closest('[class^=creatureblock]').remove();
  });
  //HP controls
  $(document).on('click', '.add1', function(){
    var currHP = parseInt($(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text());
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text(currHP + 1);
  });
  $(document).on('click', '.sub1', function(){
    var currHP = parseInt($(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text());
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text(currHP - 1);
  });
  $(document).on('click', '.add5', function(){
    var currHP = parseInt($(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text());
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text(currHP + 5);
  });
  $(document).on('click', '.sub5', function(){
    var currHP = parseInt($(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text());
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text(currHP - 5);
  });
  $(document).on('click', '.add10', function(){
    var currHP = parseInt($(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text());
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text(currHP + 10);
  });
  $(document).on('click', '.sub10', function(){
    var currHP = parseInt($(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text());
    $(this).closest('[class^=creatureblock]').find('[class^=creaturehp]').text(currHP - 10);
  });

});

// Open and close sidebar
function w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
}

function w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
}
