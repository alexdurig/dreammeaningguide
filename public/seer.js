---
import { onMount } from 'astro/client';
---

<style>
  .seer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .seer-box {
    background: linear-gradient(180deg, #2a1a3f, #1a0f2b);
    padding: 2rem;
    border-radius: 12px;
    color: white;
    font-family: serif;
  }

  .seer-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  #seer-question {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  #seer-response {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    min-height: 120px;
    font-size: 1.2rem;
    line-height: 1.5;
  }
</style>

<div class="seer-grid">

  <!-- LEFT BOX -->
  <div class="seer-box">
    <div class="seer-title">OFFER A DREAM TO THE SEER</div>
    <p>Describe an image, scene, or feeling from a dream and hit Enter.</p>
    <p><em>For example: I was walking through a flooded library, and every book was humming softly.</em></p>

    <input id="seer-question" type="text" placeholder="Describe your dream..." />
  </div>

  <!-- RIGHT BOX -->
  <div class="seer-box">
    <div class="seer-title">THE SEER REPLIES</div>
    <div id="seer-response">The Seer awaits your dream...</div>
  </div>

</div>

<script>
  import('/public/seer.js').then(module => {
    const responses = module.default;

    const input = document.getElementById('seer-question');
    const output = document.getElementById('seer-response');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const dream = input.value.trim();
        if (!dream) return;

        // Pick a random Seer response
        const reply = responses[Math.floor(Math.random() * responses.length)];

        output.textContent = reply;
      }
    });
  });
</script>

