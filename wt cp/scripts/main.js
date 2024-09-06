var inp_as = document.getElementById('a_size');
var array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

var isPaused = false;

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 2 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style =
            " margin:0% " +
            margin_size +
            "%; background-color:aqua; width:" +
            (100 / array_size - 2 * margin_size) +
            "%; height:" +
            div_sizes[i] +
            "%;";
        // Display the initial value within the bar
        divs[i].textContent = div_sizes[i];
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

function displayValuesAfterSorting() {
    for (var i = 0; i < array_size; i++) {
        // Update the value within the bar
        divs[i].textContent = div_sizes[i];
    }
}

var isSorting = false; // Flag to track if sorting is in progress

function updateValueAndHeight(index, value, height) {
    div_sizes[index] = height;
    divs[index].style.height = height + "%";
    divs[index].textContent = value;
}

window.onload = update_array_size();

for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    // Disable buttons and inputs
    // ...
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}