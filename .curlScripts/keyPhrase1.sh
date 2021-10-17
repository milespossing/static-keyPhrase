#!/bin/bash

curl -X POST https://brown-bag-thinker.cognitiveservices.azure.com/text/analytics/v3.1/keyPhrases \
    -H "Ocp-Apim-Subscription-Key: $apiKey1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d @testData.json