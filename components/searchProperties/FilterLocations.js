// Components
import CustomizedHook from "../elements/Autocomplete";

function FilterLocations() {
  return (
    <>
      <h4 className="text-heading-6 color-green-900">Locations</h4>
      <div className="mt-10 mb-20">
        <ul>
          <li>
            <label className="cb-container text-body-text color-gray-500">
              <input type="checkbox" />
              <span className="text-lbl">Apply</span>
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="cb-container text-body-text color-gray-500">
              <input type="checkbox" />
              <span className="text-lbl">Assus</span>
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="cb-container text-body-text color-gray-500">
              <input type="checkbox" />
              <span className="text-lbl">Samsung</span>
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="cb-container text-body-text color-gray-500">
              <input type="checkbox" />
              <span className="text-lbl">Sony</span>
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="cb-container text-body-text color-gray-500">
              <input type="checkbox" />
              <span className="text-lbl">Toshiba</span>
              <span className="checkmark"></span>
            </label>
          </li>
        </ul>
        <CustomizedHook />
      </div>
    </>
  );
}

export default FilterLocations;
