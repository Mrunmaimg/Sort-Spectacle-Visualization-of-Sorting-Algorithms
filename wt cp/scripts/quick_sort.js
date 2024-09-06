function Quick() {
    c_delay = 0;
    quick_sort(0, array_size - 1);
    enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start]; // Make the first element as the pivot element.
    div_update(divs[start], div_sizes[start], "yellow"); // Color update

    for (var j = start + 1; j <= end; j++) {
        // Re-arrange the array by putting elements which are less than the pivot on one side and which are greater than the pivot on the other.
        if (div_sizes[j] < piv) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update

            div_update(divs[i], div_sizes[i], "red"); // Color update
            div_update(divs[j], div_sizes[j], "red"); // Color update

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            // Update the numbers displayed on the bars
            divs[i].textContent = div_sizes[i];
            divs[j].textContent = div_sizes[j];

            div_update(divs[i], div_sizes[i], "red"); // Height update
            div_update(divs[j], div_sizes[j], "red"); // Height update

            div_update(divs[i], div_sizes[i], "blue"); // Height update
            div_update(divs[j], div_sizes[j], "blue"); // Height update

            i += 1;
        }
    }
    div_update(divs[start], div_sizes[start], "red"); // Color update
    div_update(divs[i - 1], div_sizes[i - 1], "red"); // Color update

    var temp = div_sizes[start]; // Put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    // Update the numbers displayed on the bars
    divs[start].textContent = div_sizes[start];
    divs[i - 1].textContent = div_sizes[i - 1];

    div_update(divs[start], div_sizes[start], "red"); // Height update
    div_update(divs[i - 1], div_sizes[i - 1], "red"); // Height update

    for (var t = start; t <= i; t++) {
        div_update(divs[t], div_sizes[t], "green"); // Color update
    }

    return i - 1; // Return the position of the pivot.
}

function quick_sort(start, end) {
    if (start < end) {
        // Stores the position of the pivot element.
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1); // Sort the left side of the pivot.
        quick_sort(piv_pos + 1, end); // Sort the right side of the pivot.
    }
}