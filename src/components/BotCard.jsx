export default function BotCard({ bot, showBotSpecs, enlistBot, dischargeBot }) {
  const getBotClassIcon = (botClass) =>
    botClass === "Assault"
      ? "⚔️"
      : botClass === "Defender"
      ? "🛡️"
      : botClass === "Support"
      ? "🔧"
      : botClass === "Medic"
      ? "⚕️"
      : botClass === "Captain"
      ? "👑"
      : botClass === "Witch"
      ? "🧙‍♀️"
      : "🤖";

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-header bg-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{bot.name}</h5>
        <span className="badge bg-secondary">
          {getBotClassIcon(bot.bot_class)} {bot.bot_class}
        </span>
      </div>
      <div
        className="card-body"
        onClick={() => showBotSpecs(bot)}
        style={{ cursor: "pointer" }}
      >
        <div className="text-center mb-3 position-relative">
          <img
            src={bot.avatar_url}
            alt={bot.name}
            className="img-fluid rounded-circle"
            style={{ width: "120px", height: "120px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={(event) => {
              event.stopPropagation();
              dischargeBot(bot.id);
            }}
          >
            X
          </button>
        </div>
        <div className="bot-stats">
          <div className="d-flex justify-content-between mb-2">
            <span>❤️ Health: {bot.health}</span>
            <span>💥 Damage: {bot.damage}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>🛡️ Armor: {bot.armor}</span>
            <button
              className="btn btn-sm btn-success"
              onClick={(event) => {
                event.stopPropagation();
                enlistBot(bot);
              }}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">{bot.catchphrase}</small>
      </div>
    </div>
  );
}
