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

  //Tables - TODO: This can be replaced with a foreach using the tables object
  var RollTables = JSON.parse(sessionStorage.RollTables);

  //Fumbles
  $('#criticalmiss').click(function(){
    var roll = $('#criticalmiss-input').val();
    if(roll == "" || roll == null){
      roll = Math.floor(Math.random() * Object.keys(RollTables.CriticalMiss).length) + 1;
    }
    var rollresult = RollTables.CriticalMiss[roll];
    $('#criticalmiss-result').html(rollresult);
    $('#criticalmiss-input').val('');
  });

  $('#criticalmiss-pick').click(function(){
    $('#criticalmiss-result').html('\
      <input id="criticalmiss-input" class="w3-input" type="text" placeholder="1-100" pattern="^[1-9][0-9]?$|^100$">\
    ');
    $('#criticalmiss-input').focus();
  });


  $('#spellcriticalmiss').click(function(){
    var roll = $('#spellcriticalmiss-input').val();
    if(roll == "" || roll == null){
      roll = Math.floor(Math.random() * Object.keys(RollTables.SpellCriticalMiss).length) + 1;
    }
    var rollresult = RollTables.SpellCriticalMiss[roll];
    $('#spellcriticalmiss-result').html(rollresult);
    $('#spellcriticalmiss-input').val('');
  });

  $('#spellcriticalmiss-pick').click(function(){
    $('#spellcriticalmiss-result').html('\
      <input id="spellcriticalmiss-input" class="w3-input" type="text" placeholder="1-10" pattern="^[1-9]$|^10$">\
    ');
    $('#spellcriticalmiss-input').focus();
  });

  $('#criticalhit').click(function(){
    var roll = $('#criticalhit-input').val();
    if(roll == "" || roll == null){
      roll = Math.floor(Math.random() * Object.keys(RollTables.CriticalHit).length) + 1;
    }
    var rollresult = RollTables.CriticalHit[roll];
    $('#criticalhit-result').html(rollresult);
    $('#criticalhit-input').val('');
  });

  $('#criticalhit-pick').click(function(){
    $('#criticalhit-result').html('\
      <input id="criticalhit-input" class="w3-input" type="text" placeholder="1-100" pattern="^[1-9][0-9]?$|^100$">\
    ');
    $('#criticalhit-input').focus();
  });

  //NPC Names
  $('#dwarfnames').click(function(){
    //Roll Name
    var roll = Math.floor(Math.random() * Object.keys(RollTables.DwarfNames).length) + 1;
    var rollresult = RollTables.DwarfNames[roll];
    //Roll Surname
    roll = Math.floor(Math.random() * Object.keys(RollTables.DwarfSurnames).length) + 1;
    rollresult += " " + RollTables.DwarfSurnames[roll];
    $('#dwarfnames-result').text(rollresult);
  });

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
      <div class="w3-light-grey" style="padding: 5px">\
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

  //Delegated events for dynamically generated elements
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
