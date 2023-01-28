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

  //Tables
  var RollTables = JSON.parse(sessionStorage.RollTables);
  var IndirectTables = JSON.parse(sessionStorage.IndirectTables);
  var AllItems = JSON.parse(sessionStorage.AllItems);

  //Build HTML for row
  Object.keys(RollTables).forEach(function(tableSection){
    //Nav
    $('#nav-container').append('\
    <a href="#' + tableSection + '" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-light-cyan">' + tableSection.replace(/_/g, " ") + '</a>\
    ')

    //Header
    $('#tables-container').append('\
      <div class="w3-container" id="' + tableSection + '">\
        <h1 class="tableheader w3-xlarge w3-text-white w3-dark-cyan w3-hover-light-cyan" style="padding-left:20px;"><b>' + tableSection.replace(/_/g, " ") + '</b>\
        <div class="arrow arrow-show"></div>\
        </h1>\
        <div id="' + tableSection + '-content" class="tablecontent show"></div>\
      </div>\
    ')

    var tableCount = 0;
    var rowCount = 0;
    Object.keys(RollTables[tableSection]).forEach(function(tableName){
      if(tableCount % 3 == 0){
        $('#' + tableSection + '-content').append('\
          <div id="' + tableSection + 'Row' + rowCount + '" class="w3-row-padding"></div>\
        ')
      }

      var pickButtonHTML = '<button id="' + tableName + '-pick" class="w3-button w3-dark-cyan w3-hover-light-cyan">Pick</button>';
      if(tableSection == 'NPC_Names'){
        pickButtonHTML = ''
      }

      $('#' + tableSection + 'Row' + rowCount).append('\
        <div class="w3-col m4 w3-margin-bottom">\
          <div class="w3-light-grey w3-border-dark-cyan" style="text-align:center">\
            <div class="w3-dark-cyan">' + tableName.replace(/_/g, " ") + '</div>\
            <div class="w3-container">\
              <p>\
                <button id="' + tableName + '" class="rollbutton w3-button w3-dark-cyan w3-hover-light-cyan">Roll</button>\
                ' + pickButtonHTML + '\
              </p>\
              <p class="resulttext"></p>\
            </div>\
          </div>\
        </div>\
      ')

      tableCount++;
      if(tableCount % 3 == 0){
        rowCount++;
      }
    });
  });

  //Build click functions for tables
  Object.keys(RollTables).forEach(function(tableSection){
    Object.keys(RollTables[tableSection]).forEach(function(tableName){
      var tableLength = Object.keys(RollTables[tableSection][tableName]).length;
      $(document).on('click', '#' + tableName, function(){
        if(tableSection == "NPC_Names"){
          //NPC Name table functions (two part result, two rolls)
          var roll = Math.floor(Math.random() * Object.keys(RollTables[tableSection][tableName]["Names"]).length) + 1;
          var rollresult = RollTables[tableSection][tableName]["Names"][roll];
          roll = Math.floor(Math.random() * Object.keys(RollTables[tableSection][tableName]["Surnames"]).length) + 1;
          rollresult += " " + RollTables[tableSection][tableName]["Surnames"][roll];
        }
        else{
          //Non-NPC Name (single roll) table functions
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
            <input class="tableinput w3-input" type="text" placeholder="1-' + tableLength + '">\
          ');
          $(this).closest('[class^=w3-container]').find('[class^=tableinput]').focus();
      });
    });
  });

  //Expand/Collapse Sections
  $(document).on('click', '.tableheader', function(){
    var tableContentElement = $(this).closest('[class^=w3-container]').find('[class^=tablecontent]')
    var tableArrowElement = $(this).closest('[class^=w3-container]').find('[class^=arrow]')
    if(tableContentElement.hasClass('show')){
      tableContentElement.removeClass('show');
      tableContentElement.addClass('hide');
      tableArrowElement.removeClass('arrow-show');
      tableArrowElement.addClass('arrow-hide');
    }
    else if(tableContentElement.hasClass('hide')){
      tableContentElement.removeClass('hide');
      tableContentElement.addClass('show');
      tableArrowElement.removeClass('arrow-hide');
      tableArrowElement.addClass('arrow-show');
    }

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
      <div class="w3-light-grey w3-border-dark-cyan" style="padding: 5px">\
      <div style="float:right">\
        <button class="removecreature w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">X</button>\
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
            <button class="add1 w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">+1</button>\
            <button class="sub1 w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">-1</button>\
            <button class="add5 w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">+5</button>\
            <button class="sub5 w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">-5</button>\
            <button class="add10 w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">+10</button>\
            <button class="sub10 w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">-10</button>\
            <button class="unstrikeoutcreature w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px">A</button>\
            <button class="strikeoutcreature w3-button w3-dark-cyan w3-hover-light-cyan" style="padding:4px 8px; width:35px; margin-bottom: 2px"><span style="text-decoration:line-through;">A<span></button>\
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

  //Click add creature button on Enter key
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

  // Itemizer - generate items for specific party level from multiple tables
  // Validate inputs
  $('#generateitemizer').click(function(){
    var itemizerError = false;
    $('#itemizererror').text('');

    var partyLevel = $('#partylevel-input').val();

    if(partyLevel == "" || partyLevel == null){
      $('#itemizererror').append('<p>You must enter a party level to generate items list.</p>');
      itemizerError = true;
    }
    if(typeof(partyLevel) !== 'number' && (partyLevel % 1) !== 0){
      $('#itemizererror').append('<p>Party level must be an intiger value.</p>');
      itemizerError = true;
    }
    if(partyLevel <= 0 || partyLevel > 20){
      $('#itemizererror').append('<p>Party level must be between 1 and 20 (inclusive).</p>');
      itemizerError = true;
    }
    if(itemizerError){
      return;
    }

    // Determine table rolls based on party level
    var itemTableRolls = {Item_Table_A:0, Item_Table_B:0, Item_Table_C:0, Item_Table_D:0, Item_Table_E:0, Item_Table_F:0, Item_Table_G:0, Item_Table_H:0, Item_Table_I:0};
      for(var i = 1; i <= partyLevel; i++){
      if(i <= 5){
        itemTableRolls["Item_Table_A"]++;
        if(i == 4){
          itemTableRolls["Item_Table_F"]++;
        }
      }
      if(i >= 6 && i <= 10){
        itemTableRolls["Item_Table_B"]++;
        if(i == 7){
          itemTableRolls["Item_Table_F"]++;
        }
        if(i == 10){
          itemTableRolls["Item_Table_G"]++;
        }
      }
      if(i >= 11 && i <= 15){
        itemTableRolls["Item_Table_C"]++;
        if(i == 13){
          itemTableRolls["Item_Table_G"]++;
        }
      }
      if(i >= 16 && i <= 18){
        itemTableRolls["Item_Table_D"]++;
        if(i == 16){
          itemTableRolls["Item_Table_H"]++;
        }
      }
      if(i >= 19 && i <= 20){
        itemTableRolls["Item_Table_E"]++;
        if(i == 19){
          itemTableRolls["Item_Table_I"]++;
        }
      }
    }

    //Roll the item tables
    var itemDescription = ""
    Object.keys(itemTableRolls).forEach(function(tableName){
      var tableLength = Object.keys(IndirectTables["Items"][tableName]).length;
      var rollresult = "";

      for(var i = 1; i <= itemTableRolls[tableName]; i++){
        var roll = Math.floor(Math.random() * tableLength) + 1;
        var rollresult = IndirectTables["Items"][tableName][roll];
        itemDescription += rollresult + "<br />";
      }
    });
    $('#resulttextitemizer').html(itemDescription);
  });

  $('#clearallitemizer').click(function(){
    $('#resulttextitemizer').html('');
    $('#partylevel-input').val('');
    $('#itemizererror').text('');
  });

  // Lute box - generate a random item, roll percentage for rarity of item
  // Roll rarity, then grab random items until it matches the rarity rolled. Yes,
  // inefficient, but I have a game tonight and I'm being lazy
  $('#generatelutebox').click(function(){
    var luteboxDescription = ""
    var rarityRoll = Math.floor(Math.random() * 100) + 1;
    var wondrousRoll = Math.floor(Math.random() * 100) + 1;
    
    // Set rarity rolled
    var rolledRarity = ""
    if(rarityRoll <= 60){
      rolledRarity = "Common";
    }
    else if(rarityRoll > 60 && rarityRoll <= 85){
      rolledRarity = "Uncommon";
    }
    else if(rarityRoll > 85 && rarityRoll <= 95){
      rolledRarity = "Rare";
    }
    else if(rarityRoll > 95 && rarityRoll <= 98){
      rolledRarity = "Very Rare";
    }
    else if(rarityRoll >= 99){
      rolledRarity = "Legendary";
    }
    else{
      console.log("I swallowed a bug");
    }

    do{
      // get a random item
      var randItemNum = Math.floor(Math.random() * AllItems.length);
      var randItem = AllItems[randItemNum];

      //check if the rarity matches the roll
      var rarityMatch = false;
      if(randItem["Rarity"] == rolledRarity){
        rarityMatch = true;
      }

      // set to reroll if it shouldn't be wondrous
      var isWondrous = (randItem["Type"] == "Wondrous Item");
      var rolledWondrous = (wondrousRoll >= 90);

      var wondrousReroll = false
      if(isWondrous && !rolledWondrous){
        wondrousReroll = true;
      }

    }while(!rarityMatch || wondrousReroll == true)
    
    // Build display string
    var luteboxDescription = JSON.stringify(randItem);
    $('#resulttextlutebox').html('\
    <div class="w3-container">\
      Rarity Roll: ' + rarityRoll + '<br />\
      Wondrous Roll: ' + wondrousRoll + '<br /><br />\
      ' + randItem["Name"] + '<br /> \
      ' + randItem["Type"] + '<br /> \
      ' + randItem["Rarity"] + '<br /> \
      ' + randItem["Source"] + '<br /> \
    </div>\
  ')

  });

  $('#clearalllutebox').click(function(){
    $('#resulttextlutebox').html('');
  });

  // Potionizer - generate potion from multiple tables
  $('#generatepotionizer').click(function(){
    var potionDescription = ""
    Object.keys(RollTables["Potions"]).forEach(function(tableName){
      var tableLength = Object.keys(RollTables["Potions"][tableName]).length;
      var roll = Math.floor(Math.random() * tableLength) + 1;
      var rollresult = RollTables["Potions"][tableName][roll];
      potionDescription += "<br /><strong>" + tableName.replace(/_/g, " ") + ": </strong>" + rollresult + "<br />";
    });
    $('#resulttextpotionizer').html(potionDescription);
  });

  $('#clearallpotionizer').click(function(){
    $('#resulttextpotionizer').html('');
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
