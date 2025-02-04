import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import ReactDOM from "react-dom";
import "./dropdown.css"; // Import the CSS file

const highlightMatch = (text, query) => {
  if (!query) {
    return text;
  }
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const MultiSelectDropdown = ({
  id,
  options,
  placeholder,
  label,
  withSearch,
  usePortal,
  multiple,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(search.toLowerCase()) &&
      !selectedOptions.includes(option)
  );

  const handleSelect = (option) => {
    if (multiple) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
    setSearch("");
  };

  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const dropdownContent = (
    <div className="dropdown-menu">
      {withSearch && (
        <div className="dropdown-search-wrapper">
          <FaSearch className="dropdown-search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dropdown-search"
          />
        </div>
      )}
      <ul className="dropdown-options">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="dropdown-option"
            >
              {highlightMatch(option, search)}
            </li>
          ))
        ) : (
          <li className="dropdown-no-options">No options found</li>
        )}
      </ul>
    </div>
  );

  return (
    <div className="dropdown-container" id={id}>
      <label className="dropdown-label">{label}</label>

      <div className="dropdown-wrapper">
        <div onClick={() => setIsOpen(!isOpen)} className="dropdown-input">
          {selectedOptions.map((option) => (
            <div key={option} className="dropdown-tag">
              {option}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(option);
                }}
                className="dropdown-remove"
              >
                <span className="dropdown-remove-x">✖</span>
              </span>
            </div>
          ))}
          <input
            type="text"
            placeholder={selectedOptions.length === 0 ? placeholder : ""}
            onChange={(e) => setSearch(e.target.value)}
            className="dropdown-search-input"
            readOnly
          />
          <FaChevronDown className="dropdown-icon" />
        </div>

        {isOpen &&
          (usePortal
            ? ReactDOM.createPortal(dropdownContent, document.body)
            : dropdownContent)}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
