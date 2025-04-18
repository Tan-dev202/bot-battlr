export default function FilterBar({ filterBots, activeFilters }) {
  const botClasses = [
    "Support",
    "Medic",
    "Assault",
    "Defender",
    "Captain",
    "Witch",
  ];

  return (
    <div className="mb-3">
      <h5>Filter by Class:</h5>
      <div className="d-flex flex-wrap gap-2">
        {botClasses.map((botClass) => (
          <button
            key={botClass}
            className={`btn ${
              activeFilters.includes(botClass)
                ? "btn-info"
                : "btn-outline-info"
            }`}
            onClick={() => filterBots(botClass)}
          >
            {botClass}
          </button>
        ))}
      </div>
    </div>
  );
}
