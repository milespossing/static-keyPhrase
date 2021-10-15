document.getElementById('convert-button').addEventListener('click', () => {
    const bsonInput = document.getElementById('bson-input').value;
    const jsonOutput = bsonInput;
    document.getElementById('json-output').value = jsonOutput;
});