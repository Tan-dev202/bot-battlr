import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import BotSpecs from "./components/BotSpecs";

export default function App() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch("http://localhost:8001/bots");
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error("Error fetching bots:", error);
      }
    };

    fetchBots();
  }, []);

  const enlistBot = (bot) => {
    if (!myArmy.find((armyBot) => armyBot.id === bot.id)) {
      setMyArmy([...myArmy, bot]);
    }
    setSelectedBot(null);
  };

  const releaseBot = (botId) => {
    setMyArmy(myArmy.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {

      setMyArmy(myArmy.filter((bot) => bot.id !== botId));


      const response = await fetch(`http://localhost:8001/bots/${botId}`, {
        method: "DELETE",
      });
      await response.json();

      setBots(bots.filter((bot) => bot.id !== botId));
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const backToCollection = () => {
    setSelectedBot(null);
  };

  const sortBots = (criteria) => {
    setSortCriteria(criteria);
  };

  const filterBots = (botClass) => {
    if (activeFilters.includes(botClass)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== botClass));
    } else {
      setActiveFilters([...activeFilters, botClass]);
    }
  };

  const sortedBots = [...bots].sort((a, b) => {
    if (sortCriteria === "health") return b.health - a.health;
    if (sortCriteria === "damage") return b.damage - a.damage;
    if (sortCriteria === "armor") return b.armor - a.armor;
    return 0;
  });

  const filteredBots =
    activeFilters.length > 0
      ? sortedBots.filter((bot) => activeFilters.includes(bot.bot_class))
      : sortedBots;

  return (
    <div className="container">
      <div className="row bg-dark text-white p-3 mb-4">
        <div className="col">
          <h1 className="text-center">Bot Battlr</h1>
          <p className="text-center">Build your bot army!</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <YourBotArmy bots={myArmy} releaseBot={releaseBot} />
        </div>
      </div>

      <div className=" d-flex mb-3 p-3">
        <div className="col-md-6">
          <SortBar sortBots={sortBots} />
        </div>
        <div className="col-md-6">
          <FilterBar filterBots={filterBots} activeFilters={activeFilters} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          {selectedBot ? (
            <BotSpecs
              bot={selectedBot}
              enlistBot={enlistBot}
              backToCollection={backToCollection}
            />
          ) : (
            <BotCollection
              bots={filteredBots}
              showBotSpecs={showBotSpecs}
              enlistBot={enlistBot}
              dischargeBot={dischargeBot}
            />
          )}
        </div>
      </div>
    </div>
  );
}
