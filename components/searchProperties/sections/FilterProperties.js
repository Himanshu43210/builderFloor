/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { useCookies } from "react-cookie";
import axios from "axios";

// Components
import { Link } from "@mui/material";
import FilterPrice, { priceRange } from "../components/FilterPrice";
import FilterSize from "../components/FilterSize";
import CheckBoxes from "../../elements/input/CheckBoxes";
import Select from "../../elements/input/Select";
import Autocomplete from "../../elements/input/Autocomplete";
import Preloader from "../../elements/Preloader";
import { InputLabel } from "@mui/material";

async function listProperties(filterValues) {
  const filters = {
    ...(filterValues.cities?.length > 0 && {
      city: { $in: filterValues.cities },
    }),
    ...(filterValues.locations?.length > 0 && {
      sectorNumber: {
        $in: filterValues.locations.map(({ value }) => value),
      },
    }),
    ...(filterValues.possession?.length > 0 && {
      possession: { $in: filterValues.possession },
    }),
    ...(filterValues.floors?.length > 0 && {
      floor: { $in: filterValues.floors },
    }),
    ...(filterValues.accommodation?.length > 0 && {
      accommodation: { $in: filterValues.accommodation },
    }),
    ...(filterValues.categories?.length > 0 && {
      category: { $in: filterValues.categories },
    }),
    ...(filterValues.facing?.length > 0 && {
      facing: {
        $in: filterValues.facing,
      },
    }),
    ...(filterValues.positions.includes("parkFacing") > 0 && {
      parkFacing: { $eq: true },
    }),
    ...(filterValues.positions.includes("corner") > 0 && {
      cornerPlot: { $eq: true },
    }),
    ...(filterValues.priceRange?.[0] && {
      price: {
        $gte: filterValues.priceRange[0],
        ...(filterValues.priceRange?.[1] !=
          priceRange[priceRange.length - 1] && {
          $lte: filterValues.priceRange?.[1],
        }),
      },
    }),
    ...(filterValues.sizeRange?.[0] && {
      size: {
        $gte: filterValues.sizeRange?.[0],
        $lte: filterValues.sizeRange?.[1],
      },
    }),
  };
  const response = await axios.post(
    "https://p24x7-server.herokuapp.com/api/p24x7",
    {
      action: "list",
      module: "properties",
      filters,
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
    }
  );
  return response.data;
}

function FilterProperties({ values, setProperties, locations }) {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["property_filters"]);

  // useEffect(() => {
  //   if (cookie.property_filters) {
  //     setInitialValues(cookie.property_filters);
  //     return;
  //   }
  //   setInitialValues(defaultFilters);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cookie]);

  const categoriesOptions = [
    {
      value: "plot",
      label: "Plot",
    },
    {
      value: "flat",
      label: "Flat",
    },
    {
      value: "commercial",
      label: "Commercial",
    },
    {
      value: "institutional",
      label: "Institutional",
    },
  ];

  const defaultFilters = values ?? {
    categories: [],
    cities: [],
    locations: [],
    facing: [],
    positions: [],
    floors: [],
    possession: [],
    accommodation: [],
    priceRange: [],
    sizeRange: [],
  };

  const onSubmit = async (values) => {
    // setCookie("property_filters", JSON.stringify(values));
    const properties = await listProperties(values);
    // setProperties(properties ?? []);
  };

  return defaultFilters ? (
    <Formik initialValues={defaultFilters} onSubmit={onSubmit}>
      {({ getFieldProps, setFieldValue, handleSubmit }) => (
        <Form>
          <div className="sidebar">
            {/* <div className="widget-title">
              <h3 className="text-heading-4 color-filter-900">Filter Items</h3>
            </div> */}
            <div className="widget-content ">
              <div className="filter-block mb-10 mt-35 ">
                <div className="pricetab mb-10">
                  {/* <h4 className="text-heading-6 color-bar-900 mt-10 pb-10">
                    Select Price Range
                  </h4> */}
                  <FilterPrice
                    priceRangeIntial={
                      defaultFilters?.priceRange ?? [10000000, 30000000]
                    }
                    setPrice={(prices) => setFieldValue("priceRange", prices)}
                  />
                </div>
                <div className="sizetab">
                  {/* <h4 className="text-heading-6 color-bar-900 mt-10 pb-10">
                    Select Size Range
                  </h4> */}
                  <FilterSize
                    values={[0, 10]}
                    setSize={(sizes) => setFieldValue("sizeRange", sizes)}
                  />
                </div>
              </div>
              {/* <h4 className="text-heading-6 color-bar-900 mt-10">City</h4> */}
              <Select
                name="cities"
                labelId={"City"}
                options={[
                  { value: "delhi", label: "Delhi" },
                  // TODO: Change value "gurgaon" in server to "gurugram"
                  { value: "gurgaon", label: "Gurgaon" },
                  { value: "faridabad", label: "Faridabad" },
                  { value: "panchkula", label: "Panchkula" },
                  { value: "noida", label: "Noida" },
                ]}
                multiple
                {...getFieldProps("cities")}
              />
              {/* <h4 className="text-heading-6 color-bar-900 mt-10">Locations</h4> */}
              <Select
                name="locations"
                labelId={"Locations"}
                options={locations}
                multiple
                {...getFieldProps("locations")}
              />
              {/* <Autocomplete
                multiple
                name="locations"
                labelId={"Locations"}
                options={locations}
                {...getFieldProps("locations")}
              /> */}
              {/* <h4 className="text-heading-6 color-bar-900 mt-10">
                Accommodation
              </h4> */}
              <Select
                name="accommodation"
                labelId={"Accomodation"}
                options={[
                  { value: "2bhk", label: "2 BHK" },
                  { value: "3bhk", label: "3 BHK" },
                  { value: "4bhk", label: "4 BHK" },
                  { value: "5bhk", label: "5 BHK" },
                  {
                    value: "6bhk",
                    label: "6 BHK",
                  },
                ]}
                multiple
                {...getFieldProps("accommodation")}
              />
              {/* <h4 className="text-heading-6 color-bar-900 mt-10">Floor</h4> */}
              <Select
                name="floors"
                labelId={"Floor"}
                options={[
                  { value: "first", label: "First Floor" },
                  { value: "second", label: "Second Floor" },
                  { value: "third", label: "Third Floor" },
                  { value: "fourth", label: "Fourth Floor" },
                  {
                    value: "firstBasement",
                    label: "Basement + First Floor",
                  },
                ]}
                multiple
                {...getFieldProps("floors")}
              />
              {/* <h4 className="text-heading-6 color-bar-900 mt-10">Possession</h4> */}
              <Select
                name="possession"
                labelId={"Possession"}
                //  First Floor, Second Floor, Third Floor, Fourth Floor, Basement + First Floor
                options={[
                  { value: "ready", label: "Ready To Move" },
                  { value: "3months", label: "In 3 Month" },
                  { value: "6months", label: "In 6 Month" },
                  { value: "9months", label: "In 9 Month" },
                  {
                    value: "12months",
                    label: "In 12 Month",
                  },
                  {
                    value: "15months",
                    label: "In 15 Month",
                  },
                ]}
                multiple
                {...getFieldProps("possession")}
              />
              <h4 className="text-heading-6 color-bar-900 mt-20 ml-10">
                Categories
              </h4>
              <CheckBoxes name="categories" options={categoriesOptions} />
              {/* <h4 className="text-heading-6 color-bar-900 mt-10">Facing</h4> */}
              <Select
                name="facing"
                labelId={"Facing"}
                options={[
                  { value: "north", label: "North" },
                  { value: "south", label: "South" },
                  { value: "east", label: "East" },
                  { value: "west", label: "West" },
                  { value: "north-east", label: "North-East" },
                  { value: "north-west", label: "North-West" },
                  { value: "south-east", label: "South-East" },
                  { value: "south-west", label: "South-West" },
                ]}
                multiple
                {...getFieldProps("facing")}
              />
              <h4 className="text-heading-6 color-bar-900 mt-20 ml-10">
                Positions
              </h4>
              <CheckBoxes
                name="positions"
                options={[
                  { value: "corner", label: "Corner" },
                  { value: "parkFacing", label: "Park Facing" },
                ]}
              />
              {/* Desired Styling Below
              <ul className="list-type">
                <li>
                  <label className="cb-container text-body-text color-gray-500">
                    <input type="checkbox" />
                    <span className="text-lbl">Plot</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container text-body-text color-gray-500">
                    <input type="checkbox" />
                    <span className="text-lbl">Flat</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container text-body-text color-gray-500">
                    <input type="checkbox" />
                    <span className="text-lbl">Industrial</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container text-body-text color-gray-500">
                    <input type="checkbox" />
                    <span className="text-lbl">Institutional</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
              </ul> */}
              {/* <FilterLocations /> */}
              {/* <h4 className="text-heading-6 color-green-900">Color</h4>
                  <ul className="list-type">
                    <li>
                      <label className="text-body-text color-gray-500">
                        <span className="circle-round color-danger"></span>{" "}
                        Apply
                      </label>
                    </li>
                    <li>
                      <label className="text-body-text color-gray-500">
                        <span className="circle-round color-success"></span>{" "}
                        Assus
                      </label>
                    </li>
                    <li>
                      <label className="text-body-text color-gray-500">
                        <span className="circle-round color-primary"></span>{" "}
                        Samsung
                      </label>
                    </li>
                    <li>
                      <label className="text-body-text color-gray-500">
                        <span className="circle-round color-black"></span> Sony
                      </label>
                    </li>
                    <li>
                      <label className="text-body-text color-gray-500">
                        <span className="circle-round color-warning"></span>{" "}
                        Toshiba
                      </label>
                    </li>
                  </ul> */}
              <div className="mt-0">
                <button type="submit" className="btn btn-filter" href="#">
                  Filter
                </button>
              </div>
            </div>
          </div>
          <button
            className="w-[100px] h-[50px] bg-[#000] text-[#fff] font-medium"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  ) : (
    <Preloader />
  );
}

export default FilterProperties;
