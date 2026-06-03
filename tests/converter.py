from gtts import gTTS

text = open("D:/Notes/API Q&A.txt", "r", encoding="utf-8").read()

tts = gTTS(text=text, lang="en")
tts.save("interview_audio.mp3")
