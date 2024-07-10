function skillsMember() {
    // Create an array of strings
    var skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python'];

    // Create a string to hold the message
    var message = '';

    // Create a loop to iterate over the array
    for (var i = 0; i < skills.length; i++) {
        // Concatenate a message with the current value of the array
        message += skills[i] + ' ';
    }

    // Return the message
    return message;
}