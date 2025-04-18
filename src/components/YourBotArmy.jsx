export default function YourBotArmy({ bots, releaseBot }) {
  return (
    <div className="container">
      <h2 className="mb-3">Your Bot Army</h2>
      {bots.length === 0 ? (
        <div className="alert alert-info">
          Your army is empty! Click on bots to enlist them. Once enlisted, you can click on a bot to release it.
        </div>
      ) : (
        <div className="bg-info mt-3 mb-3 p-3 row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
          {bots.map((bot) => (
            <div className="col" key={bot.id}>
              <div className="card h-100 bg-light">
                <div
                  className="card-body"
                  onClick={() => releaseBot(bot.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="text-center mb-2">
                    <img
                      src={bot.avatar_url}
                      alt={bot.name}
                      className="img-fluid rounded-circle"
                      style={{ width: "70px", height: "70px" }}
                    />
                    <h6 className="mt-2 mb-0">{bot.name}</h6>
                    <span className="badge bg-secondary">{bot.bot_class}</span>
                  </div>
                  <div className="bot-stats small mt-2">
                    <div className="d-flex justify-content-between">
                      <span>❤️ {bot.health}</span>
                      <span>💥 {bot.damage}</span>
                      <span>🛡️ {bot.armor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
