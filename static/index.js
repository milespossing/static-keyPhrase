
document.getElementById('convert-button').addEventListener('click', async () => {
    const bsonInput = document.getElementById('bson-input').value;
    await fetch('http://localhost:7071/api/bsonConverter', {
        method: "POST",
        body: bsonInput,
        mode: 'cors',
    }).then(resp => {
        document.getElementById('json-output').value = resp.body;

    });
});

document.getElementById('bson-input').value = String.raw`\u0016\u0000\u0000\u0000\u0002hello\u0000\u0006\u0000\u0000\u0000world\u0000\u0000`;