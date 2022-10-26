function loadText() {
    document.getElementById("label_language").textContent = text_database.dialog_language_name;
    document.getElementById("label_castle").textContent = text_database.castle;
    document.getElementById("label_po").textContent = text_database.publicOrder;
    document.getElementById("label_overseer").textContent = text_database.overseer;
    document.getElementById("label_subscription").textContent = text_database.dialog_subscriptionOverview_singleSub_1_title;
    document.getElementById("label_mill").textContent = text_database.mill_name;
    document.getElementById("label_vip").textContent = text_database.dialog_VipScreen_vipLevel_v2.replace("{0}", "").replace(":", "").replace("  ", " ").trim();
    document.getElementById("label_gallantry").textContent = text_database.nobilityTitles_singular;
    document.getElementById("label_storm").textContent = text_database.dialog_island_stormTitles_header;
    document.getElementById("label_emblem").textContent = text_database.emblem;
    document.getElementById("label_villages").textContent = text_database.dialog_villageListOverview_title;
    document.getElementById("label_core").textContent = `${text_database.research_47_title} (${text_database.dialog_researchTower_lowLevelResearch})`;
    document.getElementById("label_metropolis").textContent = text_database.metropol;
    document.getElementById("label_build").textContent = text_database.dialog_ci_assign_inventory_tab_appearance;
    document.getElementById("label_hero").textContent = `${text_database.equipment_itemType_baron} (${text_database.equipment_slotType_hero})`;
    document.getElementById("label_look").textContent = `${text_database.equipment_itemType_baron} (${text_database.equipment_slotType_skin})`;
    document.getElementById("label_research").textContent =  `${text_database.research_14_title} (${text_database.dialog_researchTower_economicResearch})`;
    document.getElementById("header_building").textContent = text_database.filters_filter_40;
    document.getElementById("header_level").textContent = text_database.level_placeholder.replace("{0}", "").replace(":", "").replace("  ", " ").trim();
    document.getElementById("header_damages").textContent = text_database.hitpoints.replace("{0}", "").replace(":", "").replace("  ", " ").trim();
    document.getElementById("header_workload").textContent = text_database.utilizationPercentage.replace("{0}", "").replace(":", "").replace("  ", " ").trim();
    document.getElementById("header_primary").textContent = text_database.dialog_ci_assign_inventory_tab_primary;
    document.getElementById("header_relic").textContent = text_database.dialog_ci_assign_inventory_tab_secondary;
    document.getElementById("header_production").textContent = text_database.dialog_listOverview_tabResourceProduction_tt;
    document.getElementsByClassName("select_building")[0].textContent = text_database.keep_name;
    
    loadLanguages();
    loadOptionsCastle();
    loadHunt();
    loadOptionsLevels();
    loadOptionsTitles();
    let rows = document.getElementById("tbody_buildings").rows;
    for (let i = 1; i < rows.length; i++) {
        loadOptionsBuilding(rows[i]);
        loadOptionsPrimary(rows[i]);
        loadOptionsRelic(rows[i]);
    }
    
    updateProduction();
    if (document.getElementById("select_language").value == "ar") {
        document.body.style.direction = "rtl";
    } else {
        document.body.style.direction = "ltr";
    }
}

function loadLanguages() {
    let options = document.getElementById("select_language").options;
    for (let i = 0; i < options.length; i++) {
        options[i].text = text_database[`language_native_${options[i].value.toLowerCase()}`];
    }
}

function loadOptionsCastle() {
    let select_castle = document.getElementById("select_castle");
    select_castle.querySelector("option[value='main']").text = `${text_database.kingdomName_Classic} (${text_database.castle})`;
    select_castle.querySelector("option[value='op2']").text = `${text_database.outpost} 2 ${text_database.food}`;
    select_castle.querySelector("option[value='op6']").text = `${text_database.outpost} 6 ${text_database.food}`;
    select_castle.querySelector("option[value='op8']").text = `${text_database.outpost} 8 ${text_database.food}`;
    select_castle.querySelector("option[value='ice']").text = text_database.kingdomName_Icecream;
    select_castle.querySelector("option[value='sand']").text = text_database.kingdomName_Dessert;
    select_castle.querySelector("option[value='fire']").text = text_database.kingdomName_Volcano;
    select_castle.querySelector("option[value='storm']").text = text_database.kingdomName_Eiland;
}

function loadHunt() {
    if (document.getElementById("select_castle").selectedOptions[0].dataset.kid == "0") {
        document.getElementById("label_hunt").textContent = text_database.hunter_name;
    }
    else {
        document.getElementById("label_hunt").textContent = text_database.kingdomhunter_name;
    }
}

function loadOptionsLevels() {
    let selects = document.getElementsByClassName("select_level");
    for (let i = 0; i < selects.length; i++) {
        for (let j = 0; j < selects[i].options.length; j++) {
            if (selects[i].options[j].value != "") {
                selects[i].options[j].text = text_database.level_placeholder.replace("{0}", selects[i].options[j].value);
            }
        }
    }
}

function loadOptionsTitles() {
    let selects = document.getElementsByClassName("select_titles");
    for (let i = 0; i < selects.length; i++) {
        for (let j = 0; j < selects[i].options.length; j++) {
            if (selects[i].options[j].value != "") {
                selects[i].options[j].text = text_database[`playerTitle_${selects[i].options[j].value}`];
            }
        }
    }
}

function loadOptionsBuilding(row) {
    let options = row.getElementsByClassName("select_building")[0].options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value != "") {
            let name_lowercase = `${options[i].value.toLowerCase()}_name`;
            options[i].text = text_database[Object.keys(text_database).filter(function(object) {
                return object.toLowerCase() == name_lowercase;
            })[0]];
        }
    }
}

function loadOptionsLevel(row) {
    let options = row.getElementsByClassName("select_level")[0].options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value != "") {
            options[i].text = text_database.level_placeholder.replace("{0}", options[i].value);
        }
    }
}

function loadOptionsPrimary(row) {
    let options = row.getElementsByClassName("select_primary")[0].options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value != "") {
            let object_name = text_database[`ci_primary_${options[i].value}`];
            options[i].text = `${object_name} - ${text_database.level_placeholder.replace("{0}", options[i].dataset.level)}`
        }
    }
}

function loadOptionsRelic(row) {
    let options = row.getElementsByClassName("select_relic")[0].options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value != "") {
            let object_name;
            if (options[i].dataset.premium == "1") {
                object_name = text_database[`ci_secondary_${options[i].value}_premium`];
            }
            else {
                object_name = text_database[`ci_secondary_${options[i].value}`];
            }
            options[i].text = `${object_name} - ${text_database.level_placeholder.replace("{0}", options[i].dataset.level)}`
        }
    }
}