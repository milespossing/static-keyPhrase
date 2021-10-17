document.getElementById('convert-button').addEventListener('click', async () => {
    const bsonInput = document.getElementById('text-input').value;
    await fetch(keys.endpoint, {
        method: "POST",
        body: bsonInput,
        mode: 'cors',
        headers: {
            "x-functions-key": keys.functionKey,
        }
    }).then(resp => resp.json())
      .then(data => {
        document.getElementById('text-output').value = data.keyPhrases.join('\n');
    });
});

document.getElementById('text-input').value = 'I really enjoy going on climbing trips'