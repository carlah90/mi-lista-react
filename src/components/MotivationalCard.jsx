function MotivationalCard() {
  const frases = [
    "Tu valor no depende de nadie más, solo de ti misma.",
    "Nunca te hagas menos por nadie.",
    "Eres una mujer fuerte, incluso en tus días débiles.",
    "Ser mamá no te quita poder, te multiplica.",
    "Hoy puedes con todo, aunque vayas cansada.",
    "Tu esfuerzo vale, aunque nadie lo vea."
  ];

  const frase = frases[Math.floor(Math.random() * frases.length)];

  return (
    <div className="motivational-card card">
      <p>{frase}</p>
    </div>
  );
}

export default MotivationalCard;
