import BotCard from "./BotCard";

export default function BotCollection({
  bots,
  showBotSpecs,
  enlistBot,
  dischargeBot,
}) {
  return (
    <div className="container mb-4">
      <h2 className="mb-4">Bot Collection</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
        {bots.map((bot) => (
          <div className="col" key={bot.id}>
            <BotCard
              bot={bot}
              showBotSpecs={showBotSpecs}
              enlistBot={enlistBot}
              dischargeBot={dischargeBot}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
