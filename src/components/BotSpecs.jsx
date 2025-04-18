export default function BotSpecs({ bot, enlistBot, backToCollection }) {
  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">{bot.name} Specifications</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img
                    src={bot.avatar_url}
                    alt={bot.name}
                    className="img-fluid rounded mb-3"
                  />
                  <h5 className="badge bg-info">{bot.bot_class}</h5>
                </div>
                <div className="col-md-8">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Health:</span>
                      <span>{bot.health}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Damage:</span>
                      <span>{bot.damage}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Armor:</span>
                      <span>{bot.armor}</span>
                    </li>
                    <li className="list-group-item">
                      <h6>Catchphrase:</h6>
                      <p className="fst-italic">"{bot.catchphrase}"</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={backToCollection}>
                Back to Collection
              </button>
              <button
                className="btn btn-success"
                onClick={() => enlistBot(bot)}
              >
                Enlist to Army
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
