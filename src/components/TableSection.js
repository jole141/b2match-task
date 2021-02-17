import React, { useState, useMemo, useEffect } from "react";
import HeaderComponent from "./table-components/HeaderComponent.js";
import PaginationComponent from "./table-components/PaginationComponent.js";
import SearchComponent from "./table-components/SearchComponent.js";
import TaskDescription from "./TaskDescription.js";
import TableDiv from "../styled-components/TableDiv";
import FilterSelect from "./FilterSelect";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetch, saveItemData } from "../redux/actions";
import { BRANDS, PRODUCT_TYPE, PRICE_ENUM, ITEMS_PER_PAGE } from "../constants";

const TableSection = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [priceEnum, setpriceEnum] = useState("None");

  const dispatch = useDispatch();
  const apiState = useSelector((state) => state.dataReducer);

  const headers = [
    { name: "ID", field: "id" },
    { name: "Name", field: "name" },
    { name: "Brand", field: "brand" },
    { name: "Price", field: "price" },
  ];

  const productsData = useMemo(() => {
    let computedProducts = apiState.items;
    if (search) {
      computedProducts = computedProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    setTotalItems(computedProducts.length);

    return computedProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [apiState.items, currentPage, search]);

  const history = useHistory();

  const handleClick = (productInfo) => {
    localStorage.setItem("selectState", currentPage);
    dispatch(saveItemData(productInfo));
    history.push("/item");
  };

  const getFilterProducts = () => {
    //getting selected filters
    let filter = "http://makeup-api.herokuapp.com/api/v1/products.json?";

    const selectedBrand = document.getElementById("brand").options[
      document.getElementById("brand").selectedIndex
    ].text;
    const selectedType = document.getElementById("type").options[
      document.getElementById("type").selectedIndex
    ].text;
    const selectedPriceEnum = document.getElementById("price").options[
      document.getElementById("price").selectedIndex
    ].text;

    if (selectedBrand !== "All")
      filter = filter + "brand=" + selectedBrand.toLowerCase();
    if (selectedType !== "All")
      filter = filter + "&product_type=" + selectedType.toLowerCase();
    if (selectedPriceEnum !== "None")
      filter =
        filter + "&" + selectedPriceEnum.toLowerCase() + "=" + priceFilter;
    setCurrentPage(1);
    dispatch(fetch(filter));
  };

  const enablePriceInput = () => {
    const selectedPriceEnum = document.getElementById("price").options[
      document.getElementById("price").selectedIndex
    ].text;
    setpriceEnum(selectedPriceEnum);
  };

  useEffect(() => {
    setCurrentPage(parseInt(localStorage.getItem("selectState")));
    if (apiState.items.length == 0) {
      dispatch(fetch("http://makeup-api.herokuapp.com/api/v1/products.json?"));
      setCurrentPage(1);
    }
  }, []);

  return (
    <TableDiv>
      <TaskDescription />
      <form>
        <div className="form-row">
          <div className="col-md-3 mb-3">
            <label>Brand</label>
            <div className="input-group">
              <select
                disabled={apiState.loading === true}
                id="brand"
                className="form-control"
                data-style="btn-primary"
              >
                <option>All</option>
                <FilterSelect data={BRANDS} />
              </select>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label>Type</label>
            <div className="input-group">
              <select
                disabled={apiState.loading === true}
                id="type"
                className="form-control"
                data-style="btn-primary"
              >
                <option>All</option>
                <FilterSelect data={PRODUCT_TYPE} />
              </select>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label>Price Filter</label>
            <div className="input-group">
              <select
                disabled={apiState.loading === true}
                id="price"
                className="form-control"
                data-style="btn-primary"
                onChange={enablePriceInput}
              >
                <option>None</option>
                <FilterSelect data={PRICE_ENUM} />
              </select>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label>Price</label>
            <div className="input-group">
              <input
                disabled={apiState.loading === true || priceEnum == "None"}
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Price"
                onChange={(event) => setPriceFilter(event.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                onClick={getFilterProducts}
              >
                Set Filter
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="row d-flex">
        <div className="col-md-2 mb-3 d-flex flex-row-reverse">
          <SearchComponent
            onSearch={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="ml-auto mr-3">
          <PaginationComponent
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      {!apiState.loading ? (
        <table className="table table-hover">
          <HeaderComponent headers={headers} />
          <tbody style={{ cursor: "pointer" }}>
            {productsData.map((product) => (
              <tr key={product.id} onClick={() => handleClick(product)}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>
                  {product.brand !== null
                    ? product.brand.charAt(0).toUpperCase() +
                      product.brand.slice(1)
                    : "no brand"}
                </td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </TableDiv>
  );
};

export default TableSection;
