
export async function GET() {
  const symbols = {
    animals:    ["Snake","Wolf","Bear","Bird","Cat","Horse","Spider","Fox","Owl","Deer"],
    places:     ["Forest","Ocean","Bridge","Mountain","City","House","Cave","Desert","Garden","Library"],
    emotions:   ["Fear","Joy","Confusion","Longing","Peace","Rage","Grief","Awe","Shame","Love"],
    archetypes: ["Shadow","Guide","Child","Warrior","Seer","Lover","Trickster","Hero","Sage","Mother"],
  };
  return new Response(JSON.stringify(symbols), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}


