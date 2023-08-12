"""
This is a simple Flask application for emotion detection.
"""

from flask import Flask, render_template, request
from EmotionDetection.emotion_detection import emotion_predictor

app = Flask("EmotionDetector")

@app.route("/")
def render_index_page():
    """
    Renders the index.html template.

    Returns:
        str: Rendered HTML content.
    """
    return render_template('index.html')

@app.route("/emotionDetector")
def emotion_detector():
    """
    Analyzes the provided text using the emotion_predictor function
    and returns the dominant emotion.

    Returns:
        str: Response message indicating the dominant emotion.
    """
    text_to_analyze = request.args.get('textToAnalyze')
    response = emotion_predictor(text_to_analyze)
    if 'dominant_emotion' in response:
        dominant_emotion = response['dominant_emotion']
        return f"For the given statement, the system response is '{dominant_emotion}'"
    return "Invalid text! Please try again."

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
