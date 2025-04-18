export default function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <div key={bot.id} onClick={() => onEnlist(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
