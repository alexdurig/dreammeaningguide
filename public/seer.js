function generateSeerResponse() {
  const responses = [
    "The symbol you seek is already moving toward you.",
    "A hidden pattern is forming beneath recent events.",
    "Your dream is asking you to look twice at something familiar.",
    "The answer is not distant — it is repeating softly.",
    "A shift in your inner landscape is preparing new meaning.",
    "Your unconscious is gathering symbols for a future insight.",
    "Something forgotten is trying to return to your attention.",
    "The dream is not about the image — it is about the feeling beneath it.",
    "Your intuition already knows the direction; the dream is confirmation.",
    "A symbolic doorway is opening in your nightly visions.",
    "The message is gentle, but persistent — listen again tonight.",
    "Your dream is echoing a pattern from your waking life.",
    "The symbol appears when your mind is ready to interpret it.",
    "A quiet truth is rising from your unconscious.",
    "Your dream is weaving together past and present meaning.",
    "The symbol is a guide, not a destination.",
    "Your inner world is preparing you for a transition.",
    "The dream is pointing toward something you have not named yet.",
    "A deeper layer of your psyche is beginning to speak.",
    "Your dream is a mirror — but not of the surface.",
    "The symbol carries a message about your next emotional step.",
    "Your unconscious is offering clarity disguised as mystery.",
    "The meaning will reveal itself when you stop searching for it.",
    "Your dream is a rehearsal for something real.",
    "The symbol is asking you to pause and reflect.",
    "Your intuition is stronger than the dream itself.",
    "A new archetype is entering your symbolic life.",
    "Your dream is the beginning of a longer conversation.",
    "The symbol is a visitor — welcome it.",
    "Your unconscious is aligning something important.",
    "The dream is a threshold — step through gently.",
    "Your symbol is a compass, not a map.",
    "The meaning is already forming — trust the process."
  ];

  const response = responses[Math.floor(Math.random() * responses.length)];
  const output = document.getElementById("seerResponse");

  output.style.opacity = 0;

  setTimeout(() => {
    output.textContent = response;
    output.style.animation = "fadeIn 1.5s forwards";
  }, 300);
}
